import chainlit as cl
from agents import Runner
from my_agent.teacher import math_agent

@cl.on_message
async def main(msg: cl.Message):
    prompt = msg.content
    
    res = Runner.run_sync(math_agent, input=prompt) 


    await cl.Message(content=f"Ai reply: {res.final_output} ").send()


