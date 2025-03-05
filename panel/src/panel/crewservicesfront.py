from crewai import Agent, Crew, Process, Task, LLM
from crewai_tools import DOCXSearchTool, MDXSearchTool
from crewai.tasks.task_output import TaskOutput
from crewai.project import CrewBase, agent, crew, task
import os
import sys
from pathlib import Path
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
import warnings
from crew import chat_interface, print_output_bucle
warnings.filterwarnings('ignore')
os.environ['OTEL_SDK_DISABLED'] = 'true'

from tools.retrieval_chain import ConversationalRetrievalTool
retrieval= ConversationalRetrievalTool()

	
@CrewBase
class serviceCrew():
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
	#os.environ["OPENAI_API_KEY"] = os.environ['openai_api_key']
	#os.environ["AZURE_ENDPOINT"] = os.environ['AZURE_OPENAI_ENDPOINT']
	#os.environ["OPENAI_MODEL_NAME"] = f"azure/{os.environ['AZURE_DEPLOYMENT_LLM_MODEL']}"
	OPENAI_API_KEY="86705e203c994131907a6a7106c7f70b"
	OPENAI_API_TYPE="azure"
	AZURE_OPENAI_ENDPOINT="https://labopenaiplai.openai.azure.com/"
	AZURE_DEPLOYMENT_LLM_MODEL="gpt-35-turbo"
	AZURE_DEPLOYMENT_EMB_MODEL="text-embedding-ada-002" 
	AZURE_OPENAI_ENDPOINT_EMBEDDING="https://labopenaiplai.openai.azure.com/openai/deployments/text-embedding-ada-002/embeddings?api-version=2023-05-15" 
	OPENAI_API_VERSION="2024-05-01-preview"
	llm = LLM(
    model=f"azure/{deployment_model}",  # Usa el nombre correcto del modelo desplegado
    api_key=api_key,  # Usa la variable cargada
    base_url=azure_endpoint)  # Usa la variable cargada
	
	@agent
	def services_generator_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['services_generator_agent'],
			allow_delegation=False,
			verbose=False,
			llm=self.llm,
			tools=[retrieval]
		)

	@task
	def services_generator_task(self) -> Task:
		return Task(
			config=self.tasks_config['services_generator_task'],
			agent=self.services_generator_agent(),
			#context=[ self.requirements_backend_task()],
			callback=print_output_bucle,
			human_input=False,
		)

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