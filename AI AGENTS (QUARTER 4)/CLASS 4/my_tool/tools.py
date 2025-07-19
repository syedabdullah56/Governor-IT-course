from agents import function_tool


@function_tool
def plus(a,b):
    """Simple Plus Function that returns the sum of two numbers"""
    return f"The sum of {a} and {b} is {a+b}"