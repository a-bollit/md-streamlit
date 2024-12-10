#!/usr/bin/env python
import sys
import os

# Asegúrate de agregar la ruta al directorio 'src'
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))
import streamlit as st 
from prueba_streamlit.crew import PruebaStreamlitCrew

# This main file is intended to be a way for your to run your
# crew locally, so refrain from adding necessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

def run():
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
        "description":descripcion,
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
  
