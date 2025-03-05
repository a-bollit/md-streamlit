from typing import Type
from crewai_tools import BaseTool
from pydantic import BaseModel, Field
import requests  
import base64  
import os
import sys
from common.read_explore import load_documents, create_db, retrieve_text
from dotenv import load_dotenv
from typing import Optional, Any

# Variable global para almacenar el código
GLOBAL_CODE = None

# Método para actualizar el código global
def set_code(code_content: str):
    """
    Actualiza el código global a partir de un string.
    """
    global GLOBAL_CODE
    if not code_content.strip():
        raise ValueError("El contenido del código no puede estar vacío.")
    GLOBAL_CODE = code_content.strip()

class EndpointTool(BaseTool):
    name: str = "endpoint gpt 4o Tool"
    description: str = ("Genera una lista muy detallada sobre las entidades y enpoints usados en el codigo.") 
    # Definir los campos como opcionales
    api_key: Optional[Any] = None

    def __init__(self, **data):  # Usa **data para recibir parámetros
        super().__init__(**data)
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
        ruta_credenciales = os.path.join(project_root, '.env')
        if os.path.isfile(ruta_credenciales):
        # Carga las variables de entorno desde un archivo .env específico para el despliegue
            load_dotenv(ruta_credenciales)
        else:
            sys.exit(f"El archivo de credenciales {ruta_credenciales} no existe")

        self.api_key = os.getenv('OPENAI_API_KEY')
        azure_endpoint =os.getenv('AZURE_OPENAI_ENDPOINT')
        embeddings_model = os.getenv('AZURE_DEPLOYMENT_EMB_MODEL')
        deployment_model = os.getenv('AZURE_DEPLOYMENT_LLM_MODEL')
        api_version_mod = os.getenv('OPENAI_API_VERSION')

    def create_response(self) -> str:
        
        GPT4V_KEY = self.api_key
        global GLOBAL_CODE
      
        if GLOBAL_CODE is None:
            raise ValueError("El código XML no ha sido definido. Usa `set_code()` para configurarlo.")
        
        # Prompt personalizado
        system_prompt_vision = f"""
        A partir del código XML proporcionado ({GLOBAL_CODE}), realiza las siguientes tareas:  
        
        1. **Identificación de Tablas:**  
        - Analiza cada bloque en el XML para identificar referencias a tablas de base de datos, prestando atención a las consultas SQL y a los atributos `ColumnName` en los elementos `<Item>`.  
        - Enumera todas las tablas utilizadas en el código, incluyendo aquellas mencionadas en consultas SQL directas o implícitas en procedimientos y triggers.  
        
        2. **Operaciones CRUD:**  
        - Para cada tabla identificada, detalla las operaciones CRUD que se realizan, tanto explícitas como implícitas. Esto incluye operaciones en código SQL, triggers y procedimientos almacenados.  
        - Describe cómo se utilizan estas operaciones en el contexto de la aplicación.  
        - Para cada operacion CRUD define los identificadores de cada entidad, los que se usarian como primary key en el endpoint.
        - Para cada operacion CRUD define los parametros de cada entidad que se usarian en el request body, es importante en las operaciones de lectura, get explicar cómo se utilizan, por ejemplo, en la URL del endpoint. Es muy importante que diferencies entre los parametros usados en el request body, que el identificador usado para las operaciones get, que funciona como primary key y se usa en el endpoint. Para las operaciones get, suele estar la operacion get de recuperar todos los datos y una operacion get con una primary key para recuperar solo un dato en especifico, esto debes describirlo. Para otras operaciones (POST, PUT, DELETE): Describe el request body y los atributos mas importantes usados, en el codigo debe estar explicado, pero para operaciones post seguro que existe una serie de parametros a definir y que deben ir en el request body. Incluye detalles sobre cómo se utilizan estos atributos en las operaciones. Debes reunir todos los atributos que se usarian en las operaciones http, que se utilizarian en el request body. 
        - Añade los endpoints, si tiene primary key, añadelo.
        
        Nota: No describas todos los bloques y todos los endpoints, solo los realmente importantes. La descripción debe ser completa para que pueda ser utilizada directamente en el proceso de migración. Debes listar cada uno de los atributos que se utilizan en las operaciones, y debes indicar claramente el nombre de ellos y del identificador que se usa. DEBE SER COMPLETA LA RESPUESTA. NO PUEDES MODIFICAR EL NOMBRE DE LAS VARIABLES Y PARAMETROS.  Tu descripcion debe ser completamente llena, no tienes que hacer la configuracion, tienes que dar una explicacion muy clara de las entidades, los identificadores y los atributos utilizados. Solo escribo los parametros del request body.
        """    
        headers = {  
                    "Content-Type": "application/json",  
                    "api-key": GPT4V_KEY,  
                }  
        GPT4V_ENDPOINT = "https://labopenaiplai.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-15-preview"
        # Payload para la petición  
        payload = {
                "messages": [
                {
                "role": "system",
                    "content": [
                    {
                    "type": "text",
                    "text": "Eres una IA experta en desarrollo web."
                    }
                ]
                },
                {
                    "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": f"{system_prompt_vision}"
                        },
                    ]
                },
                ],
                "temperature": 0.0,
                "top_p": 0.95,
                }


        try:               
            response = requests.post(GPT4V_ENDPOINT, headers=headers, json=payload)
            response.raise_for_status()  # Will raise an HTTPError if the HTTP request returned an unsuccessful status code      
        except requests.RequestException as e:
            raise SystemExit(f"Failed to make the request. Error: {e}")
        content = response.json()['choices'][0]['message']['content']
        return content

    def _run(self, query: str) -> str:
        # Aquí se define la lógica personalizada que procesa la query
        result = self.create_response()
        return result

"""  
A partir del código XML proporcionado ({CODE}), realiza las siguientes tareas:  
        
        1. **Identificación de Tablas:**  
        - Analiza cada bloque en el XML para identificar referencias a tablas de base de datos, prestando atención a las consultas SQL y a los atributos `ColumnName` en los elementos `<Item>`.  
        - Enumera todas las tablas utilizadas en el código, incluyendo aquellas mencionadas en consultas SQL directas o implícitas en procedimientos y triggers.  
        
        2. **Operaciones CRUD:**  
        - Para cada tabla identificada, detalla las operaciones CRUD que se realizan, tanto explícitas como implícitas. Esto incluye operaciones en código SQL, triggers y procedimientos almacenados.  
        - Describe cómo se utilizan estas operaciones en el contexto de la aplicación.  
        - Para cada operacion CRUD define los identificadores de cada entidad, los que se usarian como primary key en el endpoint.
        - Para cada operacion CRUD define los parametros de cada entidad que se usarian en el request body, es importante en las operaciones de lectura, get explicar cómo se utilizan, por ejemplo, en la URL del endpoint. Es muy importante que diferencies entre los parametros usados en el request body, que el identificador usado para las operaciones get, que funciona como primary key y se usa en el endpoint. Para las operaciones get, suele estar la operacion get de recuperar todos los datos y una operacion get con una primary key para recuperar solo un dato en especifico, esto debes describirlo. Para otras operaciones (POST, PUT, DELETE): Describe el request body y los atributos mas importantes usados, en el codigo debe estar explicado, pero para operaciones post seguro que existe una serie de parametros a definir y que deben ir en el request body. Incluye detalles sobre cómo se utilizan estos atributos en las operaciones. Debes reunir todos los atributos que se usarian en las operaciones http, que se utilizarian en el request body.
        - Añade los endpoints, si tiene primary key, añadelo.
        
        Nota: Asegúrate de incluir tanto las operaciones explícitas como las implícitas, y de explicar claramente los identificadores o cuerpos de solicitud cuando corresponda. La descripción debe ser completa para que pueda ser utilizada directamente en el proceso de migración. Debes listar cada uno de los atributos que se utilizan en las operaciones, y debes indicar claramente el nombre de ellos y del identificador que se usa. DEBE SER COMPLETA LA RESPUESTA. NO PUEDES MODIFICAR EL NOMBRE DE LAS VARIABLES Y PARAMETROS.  Tu descripcion debe ser completamente llena, no tienes que hacer la configuracion, tienes que dar una explicacion muy clara de las entidades, los identificadores y los atributos utilizados. Solo escribo los parametros del request body.
        """    