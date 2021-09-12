# 231
def n_plus_1(n):
    result = n + 1
n_plus_1(3)
# print(result) # 내부에서 사용한 변수는 함수 밖에서는 접근 불가능

# 232
def make_url(str):
    url = "www." + str + ".com"
    return url
print(make_url("naver"))

# 233
def make_list(str):
    str_list = []
    for i in str:
        str_list.append(i)
    return str_list
# def make_list(str):
#     return list(str)
print(make_list("abcd"))

# 234
def pickup_even(list):
    even_list = []
    for i in list:
        if i % 2 == 0:
            even_list.append(i)
    return even_list
print(pickup_even([3, 4, 5, 6, 7, 8]))

# 235
def convert_int(str):
    str = str.replace(',', '')
    num = int(str)
    return num
print(convert_int("1,234,567"))

# 236
def func(num):
    return num + 4
a = func(10)
b = func(a)
c = func(b)
print(c) # 22

# 237
def func(num):
    return num + 4
c = func(func(func(10)))
print(c) # 22

# 238
def func1(num):
    return num + 4
def func2(num):
    return num * 10
a = func1(10)
c = func2(a)
print(c) # 140

# 239
def func1(num):
    return num + 4
def func2(num):
    num = num + 2
    return func1(num)
c = func2(10)
print(c) # 16

# 240
def func0(num):
    return num * 2
def func1(num):
    return func0(num + 2)
def func2(num):
    num = num + 10
    return func1(num)
c = func2(2)
print(c) # 28