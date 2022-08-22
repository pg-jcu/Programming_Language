import functools

data = [1, 2, 3, 4, 5]
result = functools.reduce(lambda x, y: x + y, data) # ((((1+2)+3)+4)+5)
print(result)

num_list = [3, 2, 8, 1, 6, 7]
max_num = functools.reduce(lambda x, y: x if x > y else y, num_list)
print(max_num)

min_num = functools.reduce(lambda x, y: x if x < y else y, num_list)
print(min_num)