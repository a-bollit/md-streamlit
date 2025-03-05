import os  
import zipfile 
import panel as pn  
from pathlib import Path  
from common.read_explore import (  
    load_documents, create_db, retrieve_text, write_to_file,  
    extract_components, extract_elements_type, extract_scripts_java_spring, extract_component_parts, get_files_with_extension, transfer_files, eliminar_directorio, extract_service_script
)  
from crew import PruebaStreamlitCrew, chat_interface  
from crewcontroladorjava import javaCrew  
from crewcomponentsfront import componenteCrew  
from crewservicesfront import serviceCrew  
import threading  
import time
from io import StringIO  
from io import BytesIO  
from tools.endpoint_tool import set_code  
from crewai.agents.agent_builder.base_agent_executor_mixin import CrewAgentExecutorMixin  
pn.extension('websocket') 
pn.extension('codeeditor')  
  
# Widget para mostrar el contenido del archivo  
code_display = pn.widgets.CodeEditor(value="", language='xml', height=300, width=650)  
  
# Variables globales para manejar la entrada del usuario y el estado de la tripulación  
user_input = None  
crew_started = False  
crew_number = 1  # Rastrea qué tripulación está actualmente activa  
uploaded_file_contents = None  # Variable para almacenar el contenido del archivo subido  
continue_process = True  # Booleano para controlar la ejecución entre las crews 
 
 



a = Path(__file__).resolve().parent / 'documentacion' / 'Plantillas_proyecto' / 'mova_plantilla'
b = Path(__file__).resolve().parent / 'documentacion' / 'resultado_plantilla' / 'mova_plantilla_resultado'
eliminar_directorio(b)  
df_files_mova = get_files_with_extension(projectpath=str(a), outputpath=str(b))  
transfer_files(df_files_mova)

c = Path(__file__).resolve().parent / 'documentacion' / 'Plantillas_proyecto' / 'java_spring_boot_proyecto'
d = Path(__file__).resolve().parent / 'documentacion' / 'resultado_plantilla' / 'java_spring_boot_resultado'
eliminar_directorio(d)
df_files_java = get_files_with_extension(projectpath=str(c), outputpath=str(d)) 
transfer_files(df_files_java)


# Spinner para indicar que el procesamiento está en curso  
spinner = pn.indicators.LoadingSpinner(value=False, width=50, height=50)  


def create_file(text, filename="output.txt"):  
    """Crea un archivo en memoria para un string."""  
    sio = StringIO()  
    sio.write(text)  
    sio.seek(0)  
    return sio

# Crear un archivo .zip en memoria  
def create_zip(ruta_carpeta):  
    """Crea un archivo .zip en memoria a partir de una carpeta."""  
    zip_buffer = BytesIO()  
      
    with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:  
        for root, dirs, files in os.walk(ruta_carpeta):  
            for file in files:  
                file_path = Path(root) / file  
                zip_file.write(file_path, file_path.relative_to(ruta_carpeta))  
      
    # Asegurarse de que el puntero esté al principio del archivo  
    zip_buffer.seek(0)  
    return zip_buffer  

def create_button_download(name,extension,file):
    file_obj_component = create_file(file, f"{name}.{extension}")  
    download_button = pn.widgets.FileDownload(  
        callback=lambda: file_obj_component,  
        filename=f"{name}.{extension}",  
        button_type="success",  
        auto=False,  
        embed=False  
        )  
    input_panel.append(download_button)

def create_button_download_zipfile(ruta_carpeta, nombre):
    file_obj_component = create_zip(ruta_carpeta)  
    download_button = pn.widgets.FileDownload(  
        callback=lambda: file_obj_component,  
        filename=f"{nombre}.zip",  
        button_type="success",  
        auto=False,  
        embed=False  
        )  
    input_panel.append(download_button)
 
def file_upload_callback(event):  
    global uploaded_file_contents  
    try:  
        print("Archivo subido")  
        if isinstance(event.new, bytes):  
            print("El contenido del archivo es de tipo bytes")  
            uploaded_file_contents = event.new.decode('utf-8')  
        elif isinstance(event.new, str):  
            print("El contenido del archivo es de tipo string")  
            uploaded_file_contents = event.new  
        else:  
            raise TypeError(f"Tipo inesperado para el contenido del archivo: {type(event.new)}")  
  
        print("Contenido del archivo manejado correctamente")  
        code_display.value = uploaded_file_contents  
    except Exception as e:  
        error_message = f"Error procesando el archivo subido: {e}"  
        print(error_message)  
        chat_interface.send(error_message, user="Assistant", respond=False)  
  
def submit_callback(event):  
    global uploaded_file_contents  
    try:  
        if uploaded_file_contents is None:  
            raise ValueError("No se ha subido ningún archivo")  
  
        print("Botón enviar presionado")  
        spinner.value = True  # Mostrar el spinner  
        set_code(uploaded_file_contents)  
        callback(uploaded_file_contents, user="User", instance=chat_interface)  
        print("Contenido del archivo procesado y enviado correctamente")  
    except Exception as e:  
        error_message = f"Error procesando el archivo subido: {e}"  
        print(error_message)  
        chat_interface.send(error_message, user="Assistant", respond=False)  
  
def custom_ask_human_input(self, final_answer: dict) -> str:  
    global user_input
    chat_interface.send("La siguiente respuesta requiere de una revisión.", user="System", respond=False) 
    chat_interface.send(final_answer, user="Assistant", respond=False) 
    prompt = "Por favor, proporciona una opinión sobre el resultado final."  
    chat_interface.send(prompt, user="System", respond=False)  
    while user_input is None:  
        time.sleep(30)  
    human_comments = user_input  
    user_input = None  
    return human_comments  
  
CrewAgentExecutorMixin._ask_human_input = custom_ask_human_input  
  
def initiate_chat(message):  
    global crew_started, crew_number, continue_process , logs 
    global descripcion_controlador_java, componentes_description_angular, services_description_angular  
    crew_started = True  
    try:  
        modelos_path = Path(__file__).resolve().parent / 'documentacion' / 'MODELOS.md'  
        modelos = retrieve_text(modelos_path)

        openapi_plantilla_path= Path(__file__).resolve().parent / 'documentacion' / 'plantilla_definicion_API_OA3.yaml'
        openapi = retrieve_text(openapi_plantilla_path)

        openapi_path= Path(__file__).resolve().parent / 'documentacion' / '1234_rest_prueba.yaml'
        openapi_funcional = retrieve_text(openapi_plantilla_path)
        
        inputs = {"code": message, "modelos": modelos, "plantilla_openapi": openapi, "openapi": openapi_funcional}  
  
        if crew_number == 1:  
            crew_number += 1
            crew_instance = PruebaStreamlitCrew()  
            crew_instance.crew().kickoff(inputs=inputs)
            if continue_process:  
                chat_interface.send("El proceso de la primera Crew ha sido completado. Las respuestas han sido mostradas, y la configuracion OpenAPI está disponible para descargar", user="Assistant", respond=False)   
                chat_interface.send("Antes de empezar el proceso de la segunda Crew, se debe examinar la configuración OpenAPI que se genera en la primera. Puedes utilizar JAPI mapping para mapear esta configuración a la base de datos de Madrid Digital. Con el proyecto de Java Spring Boot generado debes buscar la implementación del servicio (serviceImpl) de la entidad que se quiere migrar, localizado en `src/main/java/org/madrid/[ARTIFACT_ID]`.  ", user="Assistant", respond=False)  
                chat_interface.send("Por favor, sube el archivo serviceImpl.java de la entidad que se quiera migrar utilizando el menú de carga de archivos", user="Assistant", respond=False)  

                #aqui se añade los txt con las respuestas, mensajes muy seguidos e iguales
                result_1= f"Result from estructura_visual_task: {crew_instance.estructura_visual_task().output.raw}"
                result_2= f"Result from datos_negocio_task: {crew_instance.datos_negocio_task().output.raw}"                      
                result_3= f"Result from comportamiento_control_task: {crew_instance.comportamiento_control_task().output.raw}"               
                result_4= f"Result from logica_negocio_task: {crew_instance.logica_negocio_task().output.raw}"                
                result_5= f"Result from models_task: {crew_instance.models_task().output.raw}"                
                result_6= f"Result from requirements_generation_backend: {crew_instance.requirements_backend_task().output}"
                logs = result_1 + result_2 + result_3 + result_4 + result_5 + result_6
                write_to_file(output=f'resultados/carpeta/estructura_visual_task.txt', text=result_1)
                write_to_file(output=f'resultados/carpeta/datos_negocio_task.txt', text=result_2)
                write_to_file(output=f'resultados/carpeta/comportamiento_control_task.txt', text=result_3)
                write_to_file(output=f'resultados/carpeta/logica_negocio_task.txt', text=result_4)  
                write_to_file(output=f'resultados/carpeta/models_task.txt', text=result_5)
                write_to_file(output=f'resultados/carpeta/requirements_generation_backend.txt', text=result_6)    
    
                descripcion_controlador_java = f"{crew_instance.requirements_controlador_servicio_task().output}"  
                componentes_description_angular = f"{crew_instance.requirements_components_task().output}"  
                services_description_angular = f"{crew_instance.requirements_services_task().output}"
                logs += descripcion_controlador_java + componentes_description_angular + services_description_angular
                write_to_file(output=f'resultados/carpeta/requirements_controlador_servicio.txt', text=descripcion_controlador_java)
                write_to_file(output=f'resultados/carpeta/requirements_components.txt', text=componentes_description_angular)
                write_to_file(output=f'resultados/carpeta/requirements_services.txt', text=services_description_angular)
                #se acabo
                """
                resultado_openapi= ''
                resultado_openapi = f"{crew_instance.swagger_task().output}"
                create_button_download("OpenAPI","yaml",resultado_openapi)
                write_to_file(output=f'resultados/carpeta/openapi.yaml', text=resultado_openapi)
                 """
            crew_started= False  
            if not continue_process:
                chat_interface.send("El proceso ha sido reseteado. Por favor vuelve a subir un formulario Oracle Forms en formato XML, para empezar de vuelta.", user="Assistant", respond=False)  
                spinner.value = False
        elif crew_number == 2:  
            crew_number += 1

            resultado_java = ''
            resultado_java_DTO = '' 
            resultado_java_controller = '' 

            #definicion del agente y de los inputs
            second_crew = javaCrew() 
            inputs_second = {  
                "descripcion_code": descripcion_controlador_java,  
                "serviceimpl": message  
            }
            #-----------------------------------------------chat_interface.send(f"Ahora saldra como respuesta uno de los componenetes generados", user="Sistema", respond=False)  
            second_crew.crew().kickoff(inputs=inputs_second) 
                   
            if not continue_process:
                chat_interface.send("El proceso ha sido reseteado. Por favor vuelve a subir un formulario Oracle Forms en formato XML, para empezar de vuelta.", user="Assistant", respond=False)  
                spinner.value = False

            if continue_process:
                #resultados crew 2--------------------------
                resultado_java_DTO = f"{second_crew.DTO_MAPPER_generator_task().output}" 
                lista_java_DTO = extract_scripts_java_spring(resultado_java_DTO)
                #aqui habria que ahcer un if contains controller tal, ademas de modificar lo de que ahora solo se puede para t238
                for item in lista_java_DTO:
                    name = item['name']
                    script = item['script']
                    create_button_download(name,"java",script)
                    #esto habria que cambiarlo con cada iteracion en la diferente entidad
                    if "DTO" in name:
                        write_to_file(output=f'documentacion/resultado_plantilla/java_spring_boot_resultado/src/main/java/org/madrid/1234/rest/prueba/t238/dtos/{name}.java', text=script)
                        write_to_file(output=f'resultados/carpeta/java/DTO/{name}.java', text=script)
                    else: 
                        write_to_file(output=f'documentacion/resultado_plantilla/java_spring_boot_resultado/src/main/java/org/madrid/1234/rest/prueba/t238/mappers/{name}.java', text=script)
                        write_to_file(output=f'resultados/carpeta/java/Mapper/{name}.java', text=script)

                resultado_java_controller = f"{second_crew.service_controller_generator_task().output}"
                lista_java_controller= extract_scripts_java_spring(resultado_java_controller)
                for item in lista_java_controller:
                    name = item['name']
                    script = item['script']  
                    create_button_download(name,"java",script)
                    #esto habria que cambiarlo con cada iteracion en la diferente entidad
                    if "Controller" in name or "controller" in name:
                        write_to_file(output=f'documentacion/resultado_plantilla/java_spring_boot_resultado/src/main/java/org/madrid/1234/rest/prueba/t238/{name}.java', text=script)
                        write_to_file(output=f'resultados/carpeta/java/{name}.java', text=script)
                    else: 
                        write_to_file(output=f'documentacion/resultado_plantilla/java_spring_boot_resultado/src/main/java/org/madrid/1234/rest/prueba/t238/services/T238ServiceImpl.java', text=script)
                        write_to_file(output=f'resultados/carpeta/java/{name}.java', text=script)

                resultado_java += f"{second_crew.DTO_MAPPER_generator_task().output}" 
                resultado_java += f"{second_crew.service_controller_generator_task().output}"
                logs +=f"{second_crew.DTO_MAPPER_generator_task().output}" 
                logs += f"{second_crew.service_controller_generator_task().output}"

                write_to_file(output='resultados/carpeta/java/java_completos.md', text=resultado_java)  
                chat_interface.send("El proceso de la segunda crew ha sido completado. Se han generado DTOs, Mappers, un Service y un Controller, y estan disponibles para su descarga.", user="Assistant", respond=False)
                chat_interface.send("Seguidamente empieza el proceso de la tercera Crew, donde busca crear los servicios frontend del proyecto utilizando Angular y Mova. Se toma como entrada el código generado en la segunda crew, las descripciones, requirements, guías y requisitos generados por la primera crew. Además se usa una herramienta que utiliza la documentación de Mova para generar los códigos con los elementos y clases específicos de Mova. Saldrán los servicios generados de uno en uno, ademas de estar a disposición de descarga. ", respond=False)
                crew_number += 1

                #empieza crew 3----------------------------------------------------------------------------------------------

                resultado_service = '' 
                resultado_service_individual=''
                #de las descripciones se saca las descripciones individuales para generar codigo por separado
                lista_services = extract_elements_type(services_description_angular, 'servicio')
                third_crew = serviceCrew()  
                for name, text in lista_services:  
                    inputs_third = {  
                        "description": text,  
                        "requirements_contexto": resultado_java  
                    }  
                    chat_interface.send(f"Nuevo servicio generado", user="Sistema", respond=False)
                    third_crew.crew().kickoff(inputs=inputs_third)  
                    resultado_service += f"Result from service_generator_task: {third_crew.services_generator_task().output}" 
                    resultado_service_individual = f"Result from component_generator_task: {third_crew.services_generator_task().output}" 
                    logs += resultado_service_individual
                    resultado_sin_comentarios = extract_service_script(resultado_service_individual)
                    create_button_download(name,"ts",resultado_service_individual) 
                    write_to_file(output=f'documentacion/resultado_plantilla/mova_plantilla_resultado/src/app/services/{name}/{name}.ts', text=resultado_sin_comentarios) 
                    write_to_file(output=f'resultados/carpeta/mova/service/{name}.ts', text=resultado_service_individual) 
                    
            if not continue_process:
                chat_interface.send("El proceso ha sido reseteado. Por favor vuelve a subir un formulario Oracle Forms en formato XML, para empezar de vuelta.", user="Assistant", respond=False)  
                spinner.value = False
            if continue_process: 
                #resultados agente 3
                #write_to_file(output='resultados/services/services_completos.md', text=resultado_service)  
                chat_interface.send("El proceso de la tercera Crew ha sido completado. Los servicios estan disponibles para su descarga.", user="Assistant", respond=False) 
                chat_interface.send("Seguidamente empieza el proceso de la cuarta Crew, donde busca crear los componentes frontend del proyecto utilizando Angular y Mova. Se toma como entrada el código generado en la segunda crew, la tercera crew y las descripciones, requirements, guías y requisitos generados por la primera crew. Además se usa una herramienta que utiliza la documentación de Mova para generar los códigos con los elementos y clases específicos de Mova. Saldran los componentes generados de uno en uno, ademas de estar a disposición de descarga. ", respond=False)
                #empieza crew 4
                crew_number += 1
                fourth_crew = componenteCrew()  
                resultado_componente = ''
                resultado_componente_individual = ''
                #de las descripciones se saca las descripciones individuales para generar codigo por separado
                lista_componentes = extract_elements_type(componentes_description_angular, 'componente')  
                for name, text in lista_componentes:  
                    inputs_fourth = {  
                        "description": text,  
                        "requirements_contexto": resultado_service  
                    }  
                    chat_interface.send(f"Nuevo componente generado", user="Sistema", respond=False)
                    fourth_crew.crew().kickoff(inputs=inputs_fourth)  
                    resultado_componente += f"Result from component_generator_task: {fourth_crew.component_generator_task().output}"
                    resultado_componente_individual=f"Result from component_generator_task: {fourth_crew.component_generator_task().output}"
                    logs += resultado_componente_individual
                    #para cada resultado de componente se genera html, scss y ts, con lo siguiente lo separo y los guarda separados
                    componentes_separados=extract_component_parts(resultado_componente_individual)
                    for file_name, details in componentes_separados.items():
                        print(f"File: {file_name}")
                        for file_type, content in details.items():
                            create_button_download(file_name,file_type,content)
                            write_to_file(output=f'documentacion/resultado_plantilla/mova_plantilla_resultado/src/app/components/{file_name}/{file_name}.{file_type}', text=content)
                            write_to_file(output=f'resultados/carpeta/mova/component/{file_name}.{file_type}', text=content)

                #write_to_file(output='resultados/componentes/componentes_completos.md', text=resultado_componente)  
                create_button_download_zipfile('documentacion/resultado_plantilla/java_spring_boot_resultado', 'java_spring_boot_project')
                create_button_download_zipfile('documentacion/resultado_plantilla/mova_plantilla_resultado', 'mova_project')
                chat_interface.send("El proceso de la cuarta Crew ha sido completado. Los servicios estan disponibles para su descarga.", user="Assistant", respond=False) 
                write_to_file(output=f'resultados/carpeta/logs.md', text=logs) 


          
    except Exception as e:  
        chat_interface.send(f"An error occurred: {e}", user="Assistant", respond=False)  
        print(f"Error en initiate_chat: {e}")
        crew_started = False  
    finally:  
        print('paso a finally directamente')
        spinner.value = False  # Ocultar el spinner al finalizar el proceso  
  
def callback(contents: str, user: str, instance: pn.chat.ChatInterface):  
    global crew_started, user_input, continue_process  

    if not crew_started:  
        spinner.value = True  # Mostrar el spinner  
        thread = threading.Thread(target=initiate_chat, args=(contents,))  
        thread.start() 
        continue_process = True 
    else:  
        user_input = contents  
        continue_process = True  # Set the flag to continue the process  
  
def undo_before(instance, event):  
    global crew_started, crew_number, user_input, uploaded_file_contents, continue_process, input_panel  
    crew_started = False  
    crew_number = 1  
    user_input = None  
    uploaded_file_contents = None  
    continue_process = False  
    code_display.value = ""  # Reset the code display widget  
    chat_interface.send("The process is being reset. Wait until the procces is over.", user="Assistant", respond=False)  
    input_panel.clear()  # Clear the input panel, including download buttons  
    input_panel.extend([pn.pane.Markdown("### Por favor, sube el código XML:"), file_input, code_display, submit_button, spinner])  
    a = Path(__file__).resolve().parent / 'documentacion' / 'Plantillas_proyecto' / 'mova_plantilla'
    b = Path(__file__).resolve().parent / 'documentacion' / 'resultado_plantilla' / 'mova_plantilla_resultado'
    eliminar_directorio(b)  
    df_files_mova = get_files_with_extension(projectpath=str(a), outputpath=str(b))  
    transfer_files(df_files_mova)
    c = Path(__file__).resolve().parent / 'documentacion' / 'Plantillas_proyecto' / 'java_spring_boot_proyecto'
    d = Path(__file__).resolve().parent / 'documentacion' / 'resultado_plantilla' / 'java_spring_boot_resultado'
    eliminar_directorio(d)
    df_files_java = get_files_with_extension(projectpath=str(c), outputpath=str(d)) 
    transfer_files(df_files_java)
  
chat_interface.callback = callback  
  
# Widget para subir archivo XML  
file_input = pn.widgets.FileInput(name="Subir archivo", accept=".xml,.txt,.json,.java,.md")  
  
# Vincular el callback del archivo al evento de cambio de valor  
file_input.param.watch(file_upload_callback, 'value')  
  
# Botón para enviar la entrada  
submit_button = pn.widgets.Button(name="Enviar", button_type="primary")  
submit_button.on_click(submit_callback)  
  
chat_interface.show_rerun = False  
chat_interface.show_clear = False  
chat_interface.button_properties = {  
    "undo": {"callback": undo_before}  
}  
  
# Crear la interfaz de usuario  
input_panel = pn.Column(  
    pn.pane.Markdown("Upload your files here:"),  
    file_input,  
    code_display,  # Añadir la caja de texto a la disposición  
    submit_button,  
    spinner,  # Añadir el spinner a la disposición  
    width=650,  
)  
  
# Enviar mensaje de bienvenida  
chat_interface.send(
    "¡Hola! 👋 Soy tu asistente especializado en la migración de Oracle Forms a una arquitectura moderna con backend en **Java Spring Boot** y frontend en **Angular**.", 
    user="Assistant", 
    respond=False
)

chat_interface.send(
    """
    Este proceso consta de cuatro fases, cada una manejada por un equipo especializado de agentes (crew):

    1. **Análisis y Requisitos:**  
        - Objetivo: Analizar y describir el código Oracle Forms.  
        - Input: Código XML de Oracle Forms.
        - Salida: Descripciones detalladas, requisitos funcionales/técnicos y configuración OpenAPI.  

    2. **Generación de Código Java Spring Boot:**  
        - Objetivo: Crear código para service, DTO, mapper y controller.  
        - Input: Requisitos backend y código generado por JAPI. 
        - Salida: Código Java Spring Boot modificado.  

    3. **Servicios Frontend con Angular:**  
        - Objetivo: Generar servicios frontend.  
        - Input: Código backend generado y requisitos frontend.  
        - Salida: Servicios frontend en Angular.  

    4. **Componentes Frontend con Angular:**  
        - Objetivo: Crear componentes frontend.  
        - Input: Servicios frontend y requisitos frontend.  
        - Salida: Componentes frontend en Angular.
    """,
    user="Assistant",
    respond=False
)

chat_interface.send(
    "Te guiaré a través de cada paso del proceso de migración. El usuario tiene que proporcionar solo dos inputs, el formulario de oracle Forms en formato XML para empezar el proceso, y el archivo serviceImpl de la entidad que se quiere migrar en el inicio de la segunda Crew. Para empezar, necesitarás proporcionar el código de tu formulario de Oracle Forms en formato **XML**. "
    "Este archivo contendrá toda la estructura y lógica del formulario original, que será la base para generar componentes modernos.",
    user="Assistant",
    respond=False
)


chat_interface.send(
    "Por favor, carga el archivo **XML** correspondiente al formulario de Oracle Forms que deseas migrar. Una vez cargado, el proceso se iniciará automáticamente. ¡Comencemos! 🚀", 
    user="Assistant", 
    respond=False
)

# Hacer que el panel sea servible  
app = pn.Row(input_panel, chat_interface)  
app.servable()  
