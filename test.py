import re
sample = "Activity: Construct a rainwater harvesting system\n\nDescription: Building a rainwater harvesting system involves setting up a structure that captures, stores, and utilizes rainwater for various purposes such as watering plants, flushing toilets, and even for domestic use after proper filtration and treatment. This activity can be done at individual household levels, community spaces, or larger public infrastructures.\n\nThe process of constructing a rainwater harvesting system includes identifying a suitable location like rooftops or open areas, setting up gutters and pipes to collect and channel rainwater, installing a storage tank, and implementing a filtration system if necessary. This sustainable practice helps conserve water resources, reduce the burde"
sample = sample.replace("\n", "")
filtered = re.split(r"Activity: |Description: ", sample)
print(sample)
print(filtered)