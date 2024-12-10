from crewai import Agent, Crew, Process, Task, LLM
from crewai_tools import DOCXSearchTool, MDXSearchTool

from crewai.project import CrewBase, agent, crew, task
import os
import sys
from pathlib import Path
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
import warnings
warnings.filterwarnings('ignore')
os.environ['OTEL_SDK_DISABLED'] = 'true'

from prueba_streamlit.tools.retrieval_chain import ConversationalRetrievalTool
retrieval= ConversationalRetrievalTool()

# Uncomment the following line to use an example of a custom tool
# from prueba_streamlit.tools.custom_tool import MyCustomTool

# Check our tools documentations for more information on how to use them
# from crewai_tools import SerperDevTool

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
	api_version_mod = os.getenv('OPENAI_API_VERSION')
	os.environ["OPENAI_API_KEY"] = os.environ['openai_api_key']
	os.environ["AZURE_ENDPOINT"] = os.environ['AZURE_OPENAI_ENDPOINT']
	os.environ["OPENAI_MODEL_NAME"] = f"azure/{os.environ['AZURE_DEPLOYMENT_LLM_MODEL']}"
	llm = LLM(
    model=f"azure/gpt-4o",             # model = azure/<your deployment name>
    api_key=os.environ['openai_api_key'],
    base_url=os.environ['AZURE_OPENAI_ENDPOINT'],
	max_tokens=16000)
	
	@agent
	def component_generator_agent(self) -> Agent:
		return Agent(
			config=self.agents_config['component_generator_agent'],
			allow_delegation=False,
			verbose=True,
			llm=self.llm,
			tools=[retrieval]
		)

	@task
	def component_generator_task(self) -> Task:
		return Task(
			config=self.tasks_config['component_generator_task'],
			agent=self.component_generator_agent(),
			#context=[ self.requirements_backend_task()],
			human_input=True,
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
			embedder={
				"provider": "azure_openai",
				"config": {
					"model": 'text-embedding-ada-002',
					"deployment_name": "text-embedding-ada-002"
				}},  # Enable respect of the context window for tasks
    		memory=True,# In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)