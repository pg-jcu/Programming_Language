# python 3.9 above
from graphlib import TopologicalSorter

ts = TopologicalSorter()

ts.add('영어중급', '영어초급')  
ts.add('영어고급', '영어중급')

ts.add('영어문법', '영어중급') 
ts.add('영어고급', '영어문법')  

ts.add('영어회화', '영어문법')

print(list(ts.static_order()))