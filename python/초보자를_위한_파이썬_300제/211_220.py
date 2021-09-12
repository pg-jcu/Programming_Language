# 211
def func(str):
    print(str)
func("안녕")
func("Hi")

# 212
def func(a, b):
    print(a + b)
func(3, 4)
func(7, 8)

# 213
def func(str):
    print(str)
# func() # 하나의 파라미터를 입력해야함

# 214
def func(a, b):
    print(a + b)
# func("안녕", 3) # 문자열과 숫자는 더할 수 없음

# 215
def print_with_smile(str):
    print(str + ":D")

# 216
print_with_smile("안녕하세요")

# 217
def print_upper_price(price):
    print(price * 1.3)

# 218
def print_sum(a, b):
    print(a + b)

# 219
def print_arithmetic_operation(a, b):
    print("{} + {} = {}".format(a, b, a + b))
    print("{} - {} = {}".format(a, b, a - b))
    print("{} * {} = {}".format(a, b, a * b))
    print("{} / {} = {}".format(a, b, a / b))
print_arithmetic_operation(3, 4)

# 220
def print_max(a, b, c):
    max_num = a
    if max_num < b:
        max_num = b
    if max_num < c:
        max_num = c
    print(max_num)
print_max(1, 2, 3)