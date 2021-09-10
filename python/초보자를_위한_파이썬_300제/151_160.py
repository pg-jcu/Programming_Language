# 151
num_list = [3, -20, -3, 44]
for i in num_list:
    if i < 0:
        print(i)

# 152
num_list = [3, 100, 23, 44]
for i in num_list:
    if i % 3 == 0:
        print(i)

# 153
num_list = [13, 21, 12, 14, 30, 18]
for i in num_list:
    if i % 3 == 0 and i < 20:
        print(i)

# 154
s_list = ["I", "study", "python", "language", "!"]
for i in s_list:
    if len(i) >= 3:
        print(i)

# 155
c_list = ['A', 'b', 'c', 'D']
for i in c_list:
    if i.isupper():
        print(i)

# 156
c_list = ['A', 'b', 'c', 'D']
for i in c_list:
    if i.islower():
        print(i)

# 157
s_list = ["dog", "cat", "parrot"]
for i in s_list:
    print(i.capitalize())

# 158
file_name = ["hello.py", "ex01.py", "intro.hwp"]
for i in file_name:
    print(i.split('.')[0])

# 159
file_name = ["intra.h", "intra.c", "define.h", "run.py"]
for i in file_name:
    if i.endswith('h'):
        print(i)

# 160
file_name = ["intra.h", "intra.c", "define.h", "run.py"]
for i in file_name:
    if i.endswith('h') or i.endswith('c'):
        print(i)