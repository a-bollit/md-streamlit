import os
import sys
from pathlib import Path
from dotenv import load_dotenv
from langchain.prompts.chat import ChatPromptTemplate
from langchain.prompts.chat import SystemMessagePromptTemplate
from langchain.prompts.chat import HumanMessagePromptTemplate, AIMessagePromptTemplate
from crewai_tools import BaseTool
from typing import Optional, Any
#from langchain.tools import tool
from langchain.chains import ConversationalRetrievalChain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from prueba_streamlit.common.read_explore import load_documents, create_db, retrieve_text
from langchain_openai import AzureChatOpenAI,AzureOpenAIEmbeddings


class ConversationalRetrievalTool(BaseTool):
    name: str = "Conversational Retrieval Tool"
    description: str = ("Busca información relevante en documentos "
                        "para proporcionar detalles técnicos útiles "
                        "sobre los componentes necesarios en función de una consulta dada.")
    # Definir los campos como opcionales
    llm_interpreter: Optional[AzureChatOpenAI] = None
    embeddings: Optional[AzureOpenAIEmbeddings] = None
    vector_store: Optional[Any] = None  
    
    def __init__(self, **data):  # Usa **data para recibir parámetros
        super().__init__(**data)
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
        ruta_credenciales = os.path.join(project_root, '.env')
        if os.path.isfile(ruta_credenciales):
        # Carga las variables de entorno desde un archivo .env específico para el despliegue
            load_dotenv(ruta_credenciales)
        else:
            sys.exit(f"El archivo de credenciales {ruta_credenciales} no existe")

        api_key = os.getenv('OPENAI_API_KEY')
        azure_endpoint =os.getenv('AZURE_OPENAI_ENDPOINT')
        embeddings_model = os.getenv('AZURE_DEPLOYMENT_EMB_MODEL')
        deployment_model = os.getenv('AZURE_DEPLOYMENT_LLM_MODEL')
        api_version_mod = os.getenv('OPENAI_API_VERSION')
        # Inicializa el modelo de chat de Azure

        self.llm_interpreter = AzureChatOpenAI(api_key=api_key, deployment_name=deployment_model,openai_api_version=api_version_mod,azure_endpoint=azure_endpoint,temperature=0.0)
        
        self.embeddings = AzureOpenAIEmbeddings(api_key=api_key,azure_deployment=embeddings_model,azure_endpoint=azure_endpoint) 
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
        path_files = os.path.join(project_root, 'src/prueba_streamlit/documentacion/mdx')
        documents = load_documents(path_files)

        #Divide los documentos en fragmentos manejables
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=200)
        splits = text_splitter.split_documents(documents)

        # Crea el almacén de vectores a partir de los documentos
        self.vector_store = create_db(splits,self.embeddings)

    def create_chain(self, query: str) -> str:
        """
        Crea una cadena conversacional para obtener información sobre los componentes necesarios a partir de la query dada.
        """
        # Lee los prompts del sistema y del usuario desde los archivos especificados
        current_dir = Path(__file__).resolve().parent
        system_prompt_path = current_dir / 'prompts' / 'system_prompt.md'
        user_prompt_path = current_dir / 'prompts' / 'user_prompt.md'

        system_prompt = retrieve_text(system_prompt_path)
        user_prompt = retrieve_text(user_prompt_path)
        # Define los mensajes que utilizará el sistema
        ai_prompt = "Por favor, proporciona una respuesta técnica detallada basada en la query."
        messages = [
            SystemMessagePromptTemplate.from_template(system_prompt),
            HumanMessagePromptTemplate.from_template(user_prompt),
            AIMessagePromptTemplate.from_template(ai_prompt)
        ]

        # Crea el prompt para la cadena de preguntas y respuestas
        qa_prompt = ChatPromptTemplate.from_messages(messages)
        Vector_store=self.vector_store
        # Configura el recuperador con el almacén de vectores
        retriever = Vector_store.as_retriever(search_kwargs={"k": 3})

        # Crea la cadena conversacional de recuperación de información
        qa_chain = ConversationalRetrievalChain.from_llm(
            llm=self.llm_interpreter,  # Suponiendo que tienes el LLM configurado
            retriever=retriever,
            chain_type="stuff",
            verbose=False,
            combine_docs_chain_kwargs={'prompt': qa_prompt}
        )

        # Ejecuta la cadena y devuelve el resultado
        result = qa_chain.invoke({"question": query,
                           "chat_history": []})
        return result['answer']

    def _run(self, query: str) -> str:
        # Aquí se define la lógica personalizada que procesa la query
        result = self.create_chain(query)
        return result
       
"""    @tool("Genera importante informacion a partir de la documentacion")
    def retreival(self, query: str) -> str:
        # Aquí se define la lógica personalizada que procesa la query
        result = self.create_chain(query)
        return result"""
    
