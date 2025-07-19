from agents import Runner
from my_agent.teacher import math_agent

prompt=input("Enter your question: ")

res=Runner.run_sync(starting_agent=math_agent,input=prompt)

print(res.final_output)