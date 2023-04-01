import openai
import os
from dotenv import load_dotenv
import re

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')
openai.Model.list()

def generateActivity():
    message = [{"role":"user","content": """Generate a ecofriendly activity that assists sustainability for the environment. Think very abstractly, do not write about composting or anything related to composting. 
    An example is shown how to format the task below: 
    Example:
    Activity: Plant a tree
    
    Description: Planting a tree is an activity that involves digging a hole in the ground, placing a young tree into the hole, and covering the roots with soil. This activity can be done in a variety of settings, including backyards, parks, and forests.
    The process of planting a tree typically begins by choosing an appropriate location for the tree based on factors such as the amount of sunlight and shade the tree will receive, the type of soil in the area, and the amount of space available for the tree to grow.
   
    Example:
    Activity: Start a vegetable Garden in your backyard 

    Description: Start a vegetable garden in your backyard or balcony. Grow your own fruits and vegetables using sustainable and organic gardening practices. This can help reduce the carbon footprint associated with food transportation and packaging, and provide you with fresh, healthy produce."

    Example:
    Activity: Organize a neighborhood clean-up day

    Description: Organize a neighborhood clean-up day where you and your neighbors go around your community and pick up litter and other debris. This can help prevent trash from ending up in local waterways or natural habitats, and keep your neighborhood looking clean and attractive."
    do not write about composting or anything related to composting."""}]

    response = openai.ChatCompletion.create(model="gpt-4", messages= message, temperature=0.8, max_tokens=1500)
    text = response.choices[0].message.content
    text = text.replace("\n", "")

    textList = re.split(r"Activity: |Description: ", text)
    
    
    activity = textList[1]
    description = textList[2]


    return {"Activity": activity, "Description": description}