# 141
num_list = [100, 200, 300]
for i in num_list:
    print(i + 10)

# 142
menu = ["김밥", "라면", "튀김"]
for i in menu:
    print("오늘의 메뉴:", i)

# 143 
s_list = ["SK하이닉스", "삼성전자", "LG전자"]
for i in s_list:
    print(len(i))

# 144
a_list = ['dog', 'cat', 'parrot']
for i in a_list:
    print(i, len(i))

# 145
for i in a_list:
    print(i[0])

# 146
n_list = [1, 2, 3]
for i in n_list:
    print("3 x", i)

# 147
for i in n_list:
    print("3 x", i, '=', 3 * i)
    # print("3 x {} = {}".format(i, 3 * i))

# 148
h_list = ["가", "나", "다", "라"]
for i in h_list[1:]:
    print(i)

# 149
for i in h_list[::2]:
    print(i)

# 150
for i in h_list[::-1]:
    print(i)
