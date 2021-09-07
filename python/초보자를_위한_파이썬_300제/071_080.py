# 071
my_variable = tuple() # ()
print(type(my_variable))

# 072
movie_rank = ("닥터 스트레인지", "스플릿", "럭키")
print(movie_rank, type(movie_rank))

# 073
one_tuple = (1, )
print(one_tuple, type(one_tuple))

# 074
t = (1, 2, 3)
# t[0] = 'a' # error

# 075
t = 1, 2, 3, 4
print(t, type(t))

# 076
t = ('a', 'b', 'c')
t = ('A', 'b', 'c')
print(t)

# 077
interest = ("삼성전자", "LG전자", "SK Hynix")
interest_list = list(interest)
print(interest_list, type(interest_list))

# 078
interest = ["삼성전자", "LG전자", "SK Hynix"]
interest_tuple = tuple(interest)
print(interest_tuple, type(interest_tuple))

# 079
temp = ("apple", "banana", "cake")
a, b, c = temp
print(a, b, c)

# 080
even_num = tuple(range(2, 100, 2))
print(even_num, type(even_num))