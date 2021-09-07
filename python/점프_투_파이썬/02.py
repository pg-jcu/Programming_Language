# 01
korea = 80
english = 75
math = 55
print((korea + english + math) / 3)

# 02
num = 13
if (num % 2 == 0):
    print("even")
else:
    print("odd")

# 03
person_num = "881120-1068234"
YYYYMMDD = person_num[:6]
num = person_num[7:]
print("YYYYMMDD =", YYYYMMDD)
print("num =", num)

# 04
pin = "881120-1068234"
print(pin[7])

# 05
a = "a:b:c:d"
print(a.replace(':', '#'))

# 06
num_list = [1, 3, 5, 4, 2]
num_list.sort()
num_list.reverse()
print(num_list)

# 07
word_list = ["Life", "is", "too", "short"]
print(' '.join(word_list))

# 08
num_tuple = (1, 2, 3)
num_tuple = num_tuple + (4,)
print(num_tuple)

# 09
a = dict()
a['name'] = 'python'
a[('a',)] = 'python'
# a[[1]] = 'python' # immutable값이 아님
a[250] = 'python'
print(a)

# 10
a = {'A':90, 'B':80, 'C':70}
print(a.pop('B'))
print(a)

# 11
a = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]
print(list(set(a)))

# 12
a = b = [1, 2, 3]
a[1] = 4
print(b) # 동일한 리스트 객체를 가리키고 있기 때문