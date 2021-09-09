# 01
a = "Life is too short, you need python"

if "wife" in a: print("wife")
elif "python" in a and "you" not in a: print("python")
elif "shirt" not in a: print("shirt")
elif "need" in a: print("need")
else: print("none")
# shirt

# 02
i = 1
result = 0
while i <= 1000:
    if i % 3 == 0:
        result += i
    i += 1
print(result)

# 03
i = 1
while i <= 5:
    print('*' * i)
    i += 1

# 04
for i in range(1, 101):
    print(i)

# 05
score = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
total = 0
for i in score:
    total += i
print(total / len(score))

# 06
numbers = [1, 2, 3, 4, 5]
result = [n * 2 for n in numbers if n % 2 == 1]
print(result)