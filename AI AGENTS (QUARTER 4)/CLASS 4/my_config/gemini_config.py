from dotenv import load_dotenv, find_dotenv
import os
import asyncio
from agents import AsyncOpenAI,OpenAIChatCompletionsModel

load_dotenv(find_dotenv(), override=True)

key = os.getenv("GEMINI_API_KEY")
base_url = os.getenv("GEMINI_BASE_URL")
model = os.getenv("GEMINI_MODEL")


client=AsyncOpenAI(api_key=key,base_url=base_url)
MODEL=OpenAIChatCompletionsModel(model=model,openai_client=client)


                   