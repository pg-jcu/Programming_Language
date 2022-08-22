import itertools

students = ['한민서', '황지민', '이영철', '이광수', '김승민']
rewards = ['사탕', '초컬릿', '젤리']

result = zip(students, rewards)
print(list(result))

result = itertools.zip_longest(students, rewards, fillvalue='새우깡')
print(list(result))