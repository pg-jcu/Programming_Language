# 221
def print_reverse(str):
    print(str[::-1])
print_reverse("python")

# 222
def print_score(list):
    print(sum(list) / len(list))
print_score([1, 2, 3])

# 223
def print_even(list):
    for i in list:
        if i % 2 == 0:
            print(i)
print_even([1, 3, 2, 10, 12, 11, 15])

# 224
def print_keys(dic):
    for key in dic.keys():
        print(key)
print_keys({"이름":"김말똥", "나이":30, "성별":0})

# 225
my_dict = {"10/26" : [100, 130, 100, 100],
           "10/27" : [10, 12, 10, 11]}
def print_value_by_key(dic, key):
    print(dic[key])
print_value_by_key(my_dict, "10/26")

# 226
def print_5xn(str):
    chunk_num = int(len(str) / 5)
    for i in range(chunk_num + 1):
        print(str[i * 5: i * 5 + 5])
print_5xn("아이엠어보이유알어걸")

# 227
def print_mxn(str, num):
    chunk_num = int(len(str) / num)
    for i in range(chunk_num + 1):
        print(str[i * num: i * num + num])
print_mxn("아이엠어보이유알어걸", 3)

# 228
def calc_monthly_salary(annual_salary):
    monthly_salary = int(annual_salary / 12)
    return monthly_salary
print(calc_monthly_salary(12000000))

# 229
def my_print(a, b):
    print("왼쪽:", a)
    print("오른쪽:", b)
my_print(a=100, b=200) # 명시적으로 a, b를 표현

# 230
def my_print(a, b):
    print("왼쪽:", a)
    print("오른쪽:", b)
my_print(b=100, a=200) 