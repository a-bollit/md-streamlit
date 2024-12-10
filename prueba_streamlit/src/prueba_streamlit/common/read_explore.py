import os
from os import path, listdir
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document
from langchain_community.document_loaders import UnstructuredMarkdownLoader, DirectoryLoader
from typing import List
import nltk
resources = ['averaged_perceptron_tagger', 'punkt']
for resource in resources:
    try:
        nltk.data.find(f'taggers/{resource}')
    except LookupError:
        print(f"Downloading NLTK resource: {resource}")
        nltk.download(resource)
# Añade la ruta donde se encuentran los datos de NLTK
nltk.data.path.append('C:\\Users\\abollit\\AppData\\Roaming\\nltk_data')

def write_to_file(output: str, text: str, encoding: str = 'utf-8'):
    """
    Función de escritura. Escribe el texto indicado en el fichero de salida especificado. Si no existe dicho path, lo crea.
    :param output: fichero de destino
    :param text: texto a escribir
    :return:
    """
    if not path.exists(path.dirname(output)):
        os.makedirs(name=path.dirname(output), exist_ok=True)
    with open(output, mode='w', encoding=encoding) as o:
        o.write(text)
        o.close()


def retrieve_text(filepath: str, encoding: str = 'utf-8'):
    """
    Función de lectura de ficheros en formato cadena de caracteres.
    :param filepath: ubicación del fichero a leer
    :param encoding: codificación de texto a utilizar.
    :return: str con el texto del fichero.
    """
    with open(filepath, mode='r', encoding=encoding) as txtfile:
        str_txt = txtfile.read()
        txtfile.close()
    return str_txt
    

def create_db(docs:list, embeddings):
        """
    crea un vector store a partir de un documento spliteado, generando primero los embeddings
    Args:
        docs (list): una lista con el documento de texto spliteado
        cred (): las credenciales para el llm

    Returns:
        List[Document]: A list of loaded documents."""
        persist_directory = "docs/chroma/"

        vectordb = Chroma.from_documents(
        documents=docs,
        embedding=embeddings
        #persist_directory=persist_directory
        )
        return vectordb

def load_documents(path: str) -> List[Document]:
        """
        Loads documents from the specified directory path.

        This function supports loading of PDF, Markdown, and HTML documents by utilizing
        different loaders for each file type. It checks if the provided path exists and
        raises a FileNotFoundError if it does not. It then iterates over the supported
        file types and uses the corresponding loader to load the documents into a list.

        Args:
            path (str): The path to the directory containing documents to load.

        Returns:
            List[Document]: A list of loaded documents.

        Raises:
            FileNotFoundError: If the specified path does not exist.
        """
        if not os.path.exists(path):
            raise FileNotFoundError(f"The specified path does not exist: {path}")
        # Asegurarse de que NLTK pueda acceder a su ruta de datos
        nltk_data_path = os.path.join(os.getcwd(), 'nltk_data')  # Puedes ajustar la ruta aquí si es necesario
        if nltk_data_path not in nltk.data.path:
            nltk.data.path.append(nltk_data_path)

        # Puedes descargar el tagger aquí si es necesario
        try:
            nltk.download('averaged_perceptron_tagger')
        except Exception as e:
            print(f"Error downloading NLTK resources: {e}")
        loaders = {
        
        ".mdx": DirectoryLoader(
            path,
            glob="**/*.mdx",
            loader_cls=UnstructuredMarkdownLoader,
            show_progress=True,
        )

    }

        docs = []
        for file_type, loader in loaders.items():
            print(f"Loading {file_type} files")
            docs.extend(loader.load())
        return docs
