# 01
def is_odd(num):
    if num % 2 != 0:
        return True
    else:
        return False
print(is_odd(3))
print(is_odd(4))

# 02
def average(*num):
    sum_num = 0
    for i in num:
        sum_num += i
    return sum_num / len(num)
print(average(1, 2))
print(average(1, 2, 3, 4, 5))

# 03
input1 = input("첫번째 숫자를 입력하세요:")
input2 = input("두번째 숫자를 입력하세요:")

total = int(input1) + int(input2)
print("두 수의 합은 %d 입니다" % total)

# 04
print("you" "need" "python")
print("you" + "need" + "python")
print("you", "need", "python") # 다름
print("".join(["you", "need", "python"]))

# 05
f1 = open("C:/Users/jeong/Desktop/test.txt", 'w')
f1.write("Life is too short")
f1.close()

f2 = open("C:/Users/jeong/Desktop/test.txt", 'r')
print(f2.read())
f2.close()

with open("C:/Users/jeong/Desktop/test.txt", 'w') as f1:
    f1.write("Life is too short")
with open("C:/Users/jeong/Desktop/test.txt", 'r') as f2:
    print(f2.read())

# 06
with open("C:/Users/jeong/Desktop/test.txt", "a") as f1:
    user_input = input("입력:")
    f1.write(user_input)
    f1.write('\n')

# 07
with open("C:/Users/jeong/Desktop/test.txt", "w") as f1:
    f1.write("Life is too short\n")
    f1.write("you need java")
with open("C:/Users/jeong/Desktop/test.txt", "r") as f2:
    body = f2.read()

body = body.replace("java", "python")

with open("C:/Users/jeong/Desktop/test.txt", "w") as f3:
    f3.write(body)

f = open('C:/Users/jeong/Desktop/test.txt', 'w')
f.write("Life is too short\n")
f.write("you need java")
f.close()

f = open('C:/Users/jeong/Desktop/test.txt', 'r')
body = f.read()
f.close()

body = body.replace('java', 'python')

f = open('C:/Users/jeong/Desktop/test.txt', 'w')
f.write(body)
f.close()