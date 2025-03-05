from crewai import Agent, Crew, Process, Task, LLM
from crewai_tools import DOCXSearchTool, MDXSearchTool
from crewai.project import CrewBase, agent, crew, task
import os
import sys
from pathlib import Path
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
import warnings
import litellm

# Habilitar el modo de depuración para ver detalles de los errores
litellm.set_verbose = True

warnings.filterwarnings('ignore')
os.environ['OTEL_SDK_DISABLED'] = 'true'

#from tools.retrieval_chain import ConversationalRetrievalTool
#retrieval= ConversationalRetrievalTool()

from tools.endpoint_tool import EndpointTool
endpoints= EndpointTool()

import panel as pn
pn.extension('websocket') 
chat_interface = pn.chat.ChatInterface()


from crewai.tasks.task_output import TaskOutput
#se cambia el nombre de filename y asi se puede guardar de una forma u otra
from io import StringIO

# Steps descriptions  
steps = [  
    "Estructura Visual Agent: Analiza y describe los componentes visuales del formulario Oracle Forms.",  
    "Datos Negocio Agent: Proporciona una descripción detallada de la estructura de datos y lógica de negocio.",  
    "Comportamiento Control Agent: Analiza y describe la lógica de comportamiento y control del formulario.",  
    "Logica Negocio Agent: Proporciona instrucciones para implementar la lógica de negocio en Java Spring Boot.",  
    "Models Agent: Extrae una lista de entidades y sus atributos a partir de las sentencias SQL.",  
    "Requirements Backend Agent: Genera una lista detallada de requisitos para el desarrollo del backend en Java Spring Boot.",  
    "Requirements Controlador Servicio Agent: Proporciona una guía para replicar la funcionalidad del controlador y servicio en Java Spring Boot.",  
    "Requirements Components Agent: Genera una lista de requisitos para el desarrollo de componentes frontend en Angular.",  
    "Requirements Services Agent: Genera una lista de requisitos para el desarrollo de servicios frontend en Angular.",  
    "OpenAPI Generator Agent: Genera la configuración OpenAPI.",  
    "Java Generator Agent: Genera el código para service, DTO, mapper y controller en Java Spring Boot.",  
    "Services Angular Generator Agent: Genera los servicios frontend utilizando Angular y Mova.",  
    "Components Angular Generator Agent: Genera los componentes frontend utilizando Angular y Mova."  
]  

current_step=0
# Mapa de pasos a agentes  
  
"""def create_file(text, filename="output.txt"):  
    #Crea un archivo en memoria para un string.
    sio = StringIO()  
    sio.write(text)  
    sio.seek(0)  
    return sio  
  
def create_download_button(file_obj, filename):  
    #Crea un botón de descarga para un archivo en memoria.  
    download_button = pn.widgets.FileDownload(  
        callback=lambda: file_obj,  
        filename=filename,  
        button_type="success"  
    )  
    return download_button    
  
def print_output_and_download(output: TaskOutput, filename):  
    global current_step  
    # Verificar si debemos incrementar el paso  
    chat_interface.send(f"Ahora responderá el agente: {output.agent}", user="Sistema", respond=False)  
    message = output.raw  
    current_step += 1  # Esta línea estaba mal indentada
    chat_interface.send(message, user=output.agent, respond=False)  
    file_obj = create_file(message)  
    download_button = create_download_button(file_obj, filename)  
    download_button.show()  """
  
def print_output(output: TaskOutput):
    global current_step
    # Verificar si debemos incrementar el paso
    if current_step == 0:
        chat_interface.send(f"La siguiente respuesta será del {steps[current_step]}", user="Sistema", respond=False)
    message = output.raw
    current_step += 1  # Incrementar el paso
    chat_interface.send(message, user=output.agent, respond=False)
    if current_step < 9:
        chat_interface.send(f"La siguiente respuesta será del {steps[current_step]}", user="Sistema", respond=False)

def print_output_bucle(output: TaskOutput):  
      
    message = output.raw 
    chat_interface.send(message, user=output.agent, respond=False)  


@CrewBase
class PruebaStreamlitCrew():
	"""PruebaStreamlit crew"""

	agents_config='config/agents.yaml'
	tasks_config='config/tasks.yaml'
	
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
	embeddings_endpoint=os.getenv('AZURE_OPENAI_ENDPOINT_EMBEDDING')
	
	llm = LLM(
    model=f"azure/{deployment_model}",  # Usa el nombre correcto del modelo desplegado
    api_key=api_key,  # Usa la variable cargada
    base_url=azure_endpoint)  # Usa la variable cargada
	"""
	llm = ChatOpenAI(
            deployment_name=os.getenv("AZURE_DEPLOYMENT_LLM_MODEL"),
            openai_api_key=os.getenv("OPENAI_API_KEY"),
            openai_api_type=os.getenv("OPENAI_API_TYPE"),
            openai_api_base=os.getenv("AZURE_OPENAI_ENDPOINT"),
            openai_api_version=os.getenv("OPENAI_API_VERSION"),
            # openai_proxy = self.value_env["OPENAI_PROXY"],
            temperature=0,
        )
	"""	
	
	@agent
	def estructura_visual_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['estructura_visual_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm
		)
	
	@agent
	def datos_negocio_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['datos_negocio_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm
		)
	
	@agent
	def comportamiento_control_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['comportamiento_control_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm
		)
	
	@agent
	def logica_negocio_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['logica_negocio_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm
		)
	
	#-------------------------------backend agent-------------------------------------------------
	@agent
	def models_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['models_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
		)
	
	@agent
	def requirements_backend_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['requirements_backend_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
			tools=[endpoints]
		)
	
	@agent
	def requirements_controlador_servicio_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['requirements_controlador_servicio_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
		)
	#-------------------------------frontend agent-------------------------------------------------
	
	@agent
	def requirements_components_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['requirements_components_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
		)
	@agent
	def requirements_services_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['requirements_services_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
		)
	"""
	@agent
	def swagger_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['swagger_agent'],
			allow_delegation=False,
			verbose=True,
			llm=self.llm,
			tools=[endpoints]
		)
	"""
	#--------------------------------------------------------------------------------task
	
	
	@task
	def estructura_visual_task(self) -> Task:
		return Task(
			config=self.tasks_config['estructura_visual_task'],
			agent=self.estructura_visual_agent(),
			callback=print_output,
			human_input= False,
		)
	
	@task
	def datos_negocio_task(self) -> Task:
		return Task(
			config=self.tasks_config['datos_negocio_task'],
			agent=self.datos_negocio_agent(),
			callback=print_output,
			human_input= False,
		)
		

	@task
	def comportamiento_control_task(self) -> Task:
		return Task(
			config=self.tasks_config['comportamiento_control_task'],
			agent=self.comportamiento_control_agent(),
			callback=print_output
		)
	
	@task
	def logica_negocio_task(self) -> Task:
		return Task(
			config=self.tasks_config['logica_negocio_task'],
			agent=self.logica_negocio_agent(),
			human_input=False,
			callback=print_output,
		)
	
	
	@task
	def models_task(self) -> Task:
		return Task(
			config=self.tasks_config['models_task'],
			agent=self.models_agent(),
			callback=print_output,
		)	
	
	@task
	def requirements_backend_task(self) -> Task:
		return Task(
			config=self.tasks_config['requirements_backend_task'],
			agent=self.requirements_backend_agent(),
			context=[ self.datos_negocio_task(), self.comportamiento_control_task(), self.models_task()],
			human_input= False,
			callback=print_output,
		)
	
	@task
	def requirements_controlador_servicio_task(self) -> Task:
		return Task(
			config=self.tasks_config['requirements_controlador_servicio_task'],
			agent=self.requirements_controlador_servicio_agent(),
			context=[ self.requirements_backend_task(), self.models_task(), self.comportamiento_control_task(), self.logica_negocio_task()],
			callback=print_output,
			human_input=False,
		)
	
	@task
	def requirements_components_task(self) -> Task:
		return Task(
			config=self.tasks_config['requirements_components_task'],
			agent=self.requirements_components_agent(),
			context=[ self.estructura_visual_task(), self.comportamiento_control_task()],
			callback=print_output,
			human_input=False,
		)
	
	@task
	def requirements_services_task(self) -> Task:
		return Task(
			config=self.tasks_config['requirements_services_task'],
			agent=self.requirements_services_agent(),
			context=[ self.estructura_visual_task(), self.comportamiento_control_task()],
			callback=print_output,
			human_input=False,
		)
	
	"""
	@task
	def swagger_task(self) -> Task:
		return Task(
			config=self.tasks_config['swagger_task'],
			agent=self.swagger_agent(),
			#context=[ self.requirements_backend_task()],
			human_input=False,
			callback=print_output,
		)
	"""
	
	@crew
	def crew(self) -> Crew:
		"""Creates the PruebaStreamlit crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=False, 
			#process=Process.hierarchical,
			#manager_llm=self.LLM, 
			respect_context_window=True,
			#por algun motivo inconpremsible, si se hace en local pon azure, y si es docker azure_openai
			embedder={
				"provider": "azure",
				#"provider": "azure_openai",
				"config": {
					"api_key":os.getenv('OPENAI_API_KEY'),
					"model": 'text-embedding-ada-002',
					"deployment_name": "text-embedding-ada-002"
				}},  # Enable respect of the context window for tasks
    		memory=True,# In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)