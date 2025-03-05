#!/usr/bin/env python
import sys
import os
from pathlib import Path
from dotenv import load_dotenv
from crewai import Agent, Crew, Process, Task, LLM
from crewai_tools import DOCXSearchTool, MDXSearchTool

# Asegúrate de agregar la ruta al directorio 'src'
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))
from panel.crew import PruebaStreamlitCrew

project_root = Path(__file__).resolve().parents[2]  # Esto apunta a "C:/Users/abollit/Desktop/gits/madrid-digital-git"

ruta_credenciales = project_root / '.env'
if os.path.isfile(ruta_credenciales):
		# Carga las variables de entorno desde un archivo .env específico para el despliegue
	load_dotenv(ruta_credenciales)
else:
	sys.exit(f"El archivo de credenciales {ruta_credenciales} no existe")

api_key = os.getenv('OPENAI_API_KEY')
api_type = os.getenv('OPENAI_API_TYPE')
azure_endpoint =os.getenv('AZURE_OPENAI_ENDPOINT')
embeddings_model = os.getenv('AZURE_DEPLOYMENT_EMB_MODEL')
deployment_model = os.getenv('AZURE_DEPLOYMENT_LLM_MODEL')
api_version_mod = os.getenv('OPENAI_API_VERSION')
os.environ["OPENAI_API_KEY"] = os.environ['openai_api_key']
os.environ["AZURE_ENDPOINT"] = os.environ['AZURE_OPENAI_ENDPOINT']
os.environ["OPENAI_MODEL_NAME"] = f"azure/{os.environ['AZURE_DEPLOYMENT_LLM_MODEL']}"
llm = LLM(
model=f"azure/gpt-4o",             # model = azure/<your deployment name>
api_key=os.environ['OPENAI_API_KEY'],
base_url=os.environ['AZURE_OPENAI_ENDPOINT'],
max_tokens=16000)
# This main file is intended to be a way for your to run your
# crew locally, so refrain from adding necessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information


def run(description):
    """
    Run the crew.
    """
    descripcion="""   El componente FormsMenu actúa como un menú de navegación visual que presenta una serie de opciones al usuario en forma de botones. Cada botón dirige al usuario a una ruta diferente dentro de la aplicación, cada una asociada con un tipo específico de formulario (reactivo o de plantilla) o un diseño de formulario (con wizard, sin menú, etc.).

Elementos Clave:
 

Navegación mediante Botones:
Los botones son los elementos interactivos principales. Cada uno tiene un enlace (link) que define la ruta de navegación cuando se hace clic.
Los botones están estilizados para tener una apariencia elevada (appearance="raised") y pueden adaptarse a diferentes contextos (adapt=true).
Diseño Responsivo:
Utiliza una estructura de cuadrícula similar a Bootstrap para asegurar que la interfaz se adapte a diferentes tamaños de pantalla. Esto se logra con clases como col-sm-12, col-md-12, y col-lg-12.
Componentización:
El componente está encapsulado en una tarjeta, lo que le da un contorno visual claro y posiblemente sombra o borde, dependiendo de los estilos.
Íconos y Texto:
Cada botón incluye un ícono  y un texto descriptivo (span.title). El texto está diseñado para ser truncado si es demasiado largo, asegurando que se mantenga dentro de los límites del botón."""

    inputs = {
        "description":description,
    }
    crew_instance = PruebaStreamlitCrew()
    crew_instance.crew().kickoff(inputs=inputs)


def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        "topic": "AI LLMs"
    }
    try:
        PruebaStreamlitCrew().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        PruebaStreamlitCrew().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        "topic": "AI LLMs"
    }
    try:
        PruebaStreamlitCrew().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

"""
# Configurar la interfaz de Streamlit
st.title('Interfaz de PruebaStreamlitCrew)😊')


# Entrada para el tema del artículo
descripcion = st.text_input('Ingrese la descripción para ejecutar el crew:')

 

  
    # Botón para ejecutar  
if st.button("Ejecutar Crew"):  
        if descripcion:  
            try:  
                # Ejecutar el método run con la descripción proporcionada  
                inputs = {"description": descripcion} 
                crew_instance = PruebaStreamlitCrew()
                crew_instance.crew().kickoff(inputs=inputs) 
                st.success("El crew se ha ejecutado con éxito.")  
                result = crew_instance.component_generator_task().output
                # Mostrar el resultado
                st.subheader('Artículo Generado:')
                st.write(result)
            except Exception as e:  
                st.error(f"Ocurrió un error al ejecutar el crew: {str(e)}")  
        else:  
            st.warning("Por favor, ingrese una descripción.")  
  
"""