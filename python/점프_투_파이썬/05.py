# 01
class Calculator:
    def __init__(self):
        self.value = 0

    def add(self, val):
        self.value += val

class UpgradeCalculator(Calculator):
    def minus(self, val):
        self.value -= val

# 02
class MaxLimitCalculator(Calculator):
    def add(self, val):
        self.value += val
        if self.value > 100:
            self.value = 100  

# 03
print(all([1, 2, abs(-3)-3])) # False
print(chr(ord('a')) == 'a') # True

# 04
print(list(filter(lambda x: x > 0, [1, -2, 3, -5, 8, -3])))

# 05
print(int('0xea', 16))

# 06
print(list(map(lambda x: x*3, [1, 2, 3, 4])))

# 07
num_list = [-8, 2, 7, 5, -3, 5, 0, 1]
print(max(num_list) + min(num_list))

# 08
print(round(17/3, 4))

# 09
import sys

numbers = sys.argv[1:]
result = 0

for number in numbers:
    result += int(number)
print(result)

# 10
import os

os.chdir("C:/")

result = os.popen("dir")

print(result.read())

# 11
import glob

print(glob.glob("C:/Windows/*.log"))

# 12
import time

print(time.strftime("%Y/%m/%d %H:%M:%S"))

# 13
import random

result = []
while len(result) < 6:
    num = random.randint(1, 45)
    if num not in result:
        result.append(num)

print(result)