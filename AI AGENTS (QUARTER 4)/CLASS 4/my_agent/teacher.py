from agents import Agent
from my_config.gemini_config import MODEL
from my_tool.tools import plus

math_agent=Agent(name='math_agent',instructions='You are a math teacher who solves question ,dont give answer to question not related to math',model=MODEL,tools=[plus])