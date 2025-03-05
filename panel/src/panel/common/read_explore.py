import os
from os import path, listdir
import re 
from langchain_community.vectorstores import Chroma  
from langchain_core.documents import Document  
from langchain_community.document_loaders import UnstructuredMarkdownLoader, DirectoryLoader  
from typing import List  
import logging  
import pandas as pd
import filetype
import zipfile
import shutil
import traceback
import nltk
  
# Configuración de logging  
logging.basicConfig(level=logging.DEBUG)  
logger = logging.getLogger(__name__)  

def eliminar_directorio(directorio):  
    if directorio.exists() and directorio.is_dir():  
        shutil.rmtree(directorio)

def write_to_file(output: str, text: str, encoding: str = 'utf-8'):  
    """Función de escritura. Escribe el texto indicado en el fichero de salida especificado. Si no existe dicho path, lo crea."""  
    if not path.exists(path.dirname(output)):  
        os.makedirs(name=path.dirname(output), exist_ok=True)  
    with open(output, mode='w', encoding=encoding) as o:  
        o.write(text)  
    logger.debug(f"Archivo escrito: {output}")  
  
def retrieve_text(filepath: str, encoding: str = 'utf-8'):  
    """Función de lectura de ficheros en formato cadena de caracteres."""  
    with open(filepath, mode='r', encoding=encoding) as txtfile:  
        str_txt = txtfile.read()  
    logger.debug(f"Archivo leído: {filepath}")  
    return str_txt  
  
def create_db(docs: list, embeddings):  
    """Crea un vector store a partir de un documento spliteado, generando primero los embeddings"""  
    persist_directory = "docs/chroma/"  
    vectordb = Chroma.from_documents(documents=docs, embedding=embeddings)  
    logger.debug("Vector store creado.")  
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
  
    # Descargar los recursos de NLTK si no están disponibles  
    try:  
        nltk.data.find('taggers/averaged_perceptron_tagger')  
    except LookupError:  
        nltk.download('averaged_perceptron_tagger')  
  
    try:  
        nltk.data.find('taggers/averaged_perceptron_tagger_eng')  
    except LookupError:  
        nltk.download('averaged_perceptron_tagger_eng')  
  
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
        try:  
            print(f"Loading {file_type} files")  
            docs.extend(loader.load())  
        except Exception as e:  
            print(f"Failed to load {file_type} files: {e}")  
  
    return docs    


def extract_components(input_string):  
    # Patrón para encontrar los componentes, aceptando "Component" o "Componente"  
    component_pattern = r'\d+\.\s\*\*(Component|Componente)\s+(\w+)\*\*'   
    # Patrón para encontrar el inicio de una nueva sección  
    section_pattern = r'##\s*Vistas' 
      
    # Encuentra los componentes  
    component_matches = list(re.finditer(component_pattern, input_string, re.IGNORECASE))  
      
    # Si no se encuentran componentes, devolvemos el string original  
    if not component_matches:  
        return [input_string]  
      
    components = []  
    start_indices = [match.start() for match in component_matches]  
    end_indices = start_indices[1:]  
      
    # Encuentra el inicio de la siguiente sección después del último componente  
    section_matches = list(re.finditer(section_pattern, input_string))  
    for section_match in section_matches:  
        if section_match.start() > start_indices[-1]:  
            end_indices.append(section_match.start())  
            break  
    else:  
        end_indices.append(len(input_string))  
      
    # Extraemos el texto común después de la última sección  
    common_text = input_string[end_indices[-1]:].strip()  
      
    # Generamos un string por cada componente manteniendo el resto igual  
    for i in range(len(component_matches)):  
        component_start = start_indices[i]  
        component_end = end_indices[i]  
  
        # Extraemos el texto del componente específico  
        component_text = input_string[component_start:component_end].strip()  
          
        # Extraer el nombre del componente usando grupos de captura  
        component_name = component_matches[i].group(2)  
          
        # Construimos el nuevo string con solo el componente actual y el texto común  
        new_string = f"{component_text}\n{common_text}".strip()  
          
        # Incluimos el nombre del componente en la lista de resultados  
        components.append((component_name, new_string))  
      
    return components  

def extract_elements_type(input_string, input_type):
    # Definir patrones para componentes y servicios
    component_pattern = r'\d+\.\s\*\*(Component|Componente):?\s+(\w+)\*\*'
    service_pattern = r'\d+\.\s\*\*(Service|Servicio):?\s+(\w+)\*\*'

    # Seleccionar el patrón en función del input_type
    if input_type.lower() == "componente":
        pattern = component_pattern
        section_pattern = r'##\s*Vistas'
    elif input_type.lower() == "servicio":
        pattern = service_pattern
        section_pattern = r'##\s*Integración con Backend'
    else:
        raise ValueError("Tipo no válido. Usa 'componente' o 'servicio'.")

    # Encuentra las coincidencias con el patrón seleccionado
    matches = list(re.finditer(pattern, input_string, re.IGNORECASE))

    # Si no se encuentran coincidencias, devolvemos el string original
    if not matches:
        return [input_string]

    elements = []
    start_indices = [match.start() for match in matches]
    end_indices = start_indices[1:]

    # Encuentra el inicio de la siguiente sección después del último elemento
    section_matches = list(re.finditer(section_pattern, input_string))
    for section_match in section_matches:
        if section_match.start() > start_indices[-1]:
            end_indices.append(section_match.start())
            break
    else:
        end_indices.append(len(input_string))

    # Extraemos el texto común después de la última sección
    common_text = input_string[end_indices[-1]:].strip()

    # Generamos un string por cada elemento manteniendo el resto igual
    for i in range(len(matches)):
        element_start = start_indices[i]
        element_end = end_indices[i]

        # Extraemos el texto del elemento específico
        element_text = input_string[element_start:element_end].strip()

        # Extraer el nombre del elemento usando grupos de captura
        element_name = matches[i].group(2)

        # Construimos el nuevo string con solo el elemento actual y el texto común
        new_string = f"{element_text}\n{common_text}".strip()

        # Incluimos el nombre del elemento en la lista de resultados
        elements.append((element_name, new_string))

    return elements

def extract_scripts_java_spring(md_content):
    # Expresión regular ajustada para permitir entre 3 y 4 #
    # y opcionalmente comillas simples en el nombre
    pattern = r'#{3,4}\s+[\'"]?([A-Za-z0-9_]+)\.java[\'"]?\s+```java\n(.*?)\n```'
    
    # Buscar todas las coincidencias usando re.DOTALL
    matches = re.findall(pattern, md_content, re.DOTALL)
    
    # Crear una lista de diccionarios con el nombre (sin .java) y el script
    scripts = [{'name': match[0], 'script': match[1].strip()} for match in matches]
    
    return scripts

def extract_component_parts(md_content):
    # Expresión regular ajustada para capturar nombres precedidos por ### o ####
    pattern = r'(?:#{3,4})\s+([a-zA-Z0-9\-_]+\.component)\.(ts|html|scss)\s+```(typescript|html|scss)\n(.*?)\n```'
    
    matches = re.findall(pattern, md_content, re.DOTALL)
    
    # Crear un diccionario con el nombre (incluyendo .component pero sin extensión) como clave
    parts = {}
    for match in matches:
        name = match[0]  # Nombre del archivo con .component pero sin extensión
        file_type = match[1]  # Tipo de archivo (ts, html, scss)
        content = match[3]  # Contenido del archivo
        
        if name not in parts:
            parts[name] = {}
        
        parts[name][file_type] = content.strip()
    
    return parts

def extract_service_script(text: str) -> str:
    regex = r"```typescript\n([\s\S]*?)\n```"
    match = re.search(regex, text)
    return match.group(1) if match else None


def get_file_extension_dict(filename: str):
    """
    Devuelve la información del fichero encontrado en la ruta indicada por el parámetro filename
    :param filename: ruta del fichero a analizar
    :return: diccionario con la información
    """
    return {"name": path.basename(filename),
            "folder": path.dirname(filename),
            "extension": path.splitext(filename)[1], # filetype.guess_extension(filename),
            "size": path.getsize(filename)}


def explore_files_in_subfolders(folderpath: str):
    """
    Explore function for the analysis of the files in the subfolders and their extension
    :param folderpath: path to the folder that needs to be explored
    :return: pandas.DataFrame with the information about the files and folders found.
    """
    extensions = []
    for f1 in listdir(folderpath):
        curr_folder = path.join(folderpath, f1)
        #print('Explorando', curr_folder)
        if path.isdir(curr_folder):
            files_folder = listdir(curr_folder)
            f1_subfolders = [a for a in files_folder if path.isdir(path.join(curr_folder, a))]
            extensions += [get_file_extension_dict(path.join(curr_folder, b)) for b in files_folder if path.isfile(path.join(curr_folder, b))]
            # Iteramos el resto de ficheros
            for f2 in f1_subfolders:
                extensions += explore_files_in_subfolders(folderpath=path.join(curr_folder, f2))
        else:
            extensions += [get_file_extension_dict(curr_folder)]
    return extensions


def get_file_summary(folderpath: str):
    """
    Devuelve el DataFrame de información de ficheros del proyecto
    :param folderpath:
    :return:
    """
    return pd.DataFrame(explore_files_in_subfolders(folderpath=folderpath))


DEF_TEMP_ZIP_FILES = "./temp/unzipped/"


def extract_zip_content(filename: str, output: str = DEF_TEMP_ZIP_FILES, compression: str = 'zip', flg_rm: bool = False):
    """
    Function for the iterative extraction of compressed files (ZIP) into another folder.
    :param filename: bytes object from the read compressed file
    :param output: directory in which the files will be extracted
    :param compression: python str indicating the type of compression in the file. Default as zip
    :param flg_rm: flag value indicating removal (True) of the original compressed file
    :return: list of Attachments with the resulting uncompressed files.
    """
    if not path.isdir(output):
        raise Exception('The output parameter must be a valid directory in your system.')
    if compression == 'zip':
        with zipfile.ZipFile(filename, 'r') as zip_ref:
            os.makedirs(output, exist_ok=True)
            zip_ref.extractall(output)
            if flg_rm:
                shutil.rmtree(filename)
        # Iteramos para ver si es necesario descomprimir otro archivo más
        for f in listdir(output):
            extension = filetype.guess_extension(path.join(output, f))
            if extension == 'zip':
                unzip_folder = path.join(output, path.splitext(f)[0])
                print('Encontrado ZIP. Descomprimiendo archivo', f, 'en ', path.join(output, unzip_folder))
                extract_zip_content(filename=path.join(output, f), output=unzip_folder)

def get_files_with_extension(projectpath: str, outputpath: str, extensions: [] = None):
    """
    Function that returns the DataFrame with the with path, name and extension information.
    If extensions are specified, only the files with the demanded extensions are provided in the DataFrame.
    If the given projectpath corresponds to a compressed file, it first decompresses it @ the outputpath.
    :param projectpath:
    :param outputpath: base path for t
    :param extensions: list of extensions to filter the DataFrame
    :return: DataFrame with file information
    """
    flg_zipped = False
    if os.path.splitext(projectpath)[1] == '.zip':
        extract_zip_content(filename=projectpath, output=outputpath)
        flg_zipped = True
    # Si ha sido extraído, sacamos el sumario de ficheros de la carpeta YA descomprimida
    df_files = get_file_summary(folderpath=outputpath) if flg_zipped else get_file_summary(folderpath=projectpath)
    df_files['abspath'] = df_files['folder'] + os.path.sep + df_files['name']
    df_files['outputpath'] = df_files['abspath'].str.replace(projectpath, outputpath)
    if extensions and len(extensions) > 0:
        return df_files.loc[df_files['extension'].isin(extensions)]
    else:
        return df_files
    
def transfer_files(df: pd.DataFrame,
                   col_path: str = 'abspath',
                   col_out: str = 'outputpath'):

    # Sacamos todos los distintos
    for folder in df[col_out].apply(lambda x: os.path.dirname(x)).unique():
        os.makedirs(folder, exist_ok=True)
        print('Generado directorio de carpetas', folder)
    print('Directorios creados!')
    for index, row in df.iterrows():
        try:
            """
            str_file = reex.retrieve_text(filepath=row[col_path])
            reex.write_to_file(output=row[col_out], text=str_file)
            """
            shutil.copy(row[col_path], row[col_out])
            print("File copied successfully.")
        # If source and destination are same
        except shutil.SameFileError:
            print("Source and destination represents the same file.")

        # If there is any permission issue
        except PermissionError:
            print("Permission denied.")
        except Exception as e:
            print('Error trying to transfer file', row['abspath'] + '/' + row['name'], '.')
            traceback.print_exc()
    print('Transferencia de ficheros finalizada')