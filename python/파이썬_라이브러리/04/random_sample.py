import random

result = []
while len(result) < 6:
    num = random.randint(1, 45)
    if num not in result:
        result.append(num)
print(result)

a = [1, 2, 3, 4, 5]
random.shuffle(a)
print(a)
print(random.choice(a))