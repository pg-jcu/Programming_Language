# 241
import datetime
now = datetime.datetime.now()
print(now)

# 242
print(now, type(now))

# 243
for day in range(5, 0, -1):
    delta = datetime.timedelta(days=day)
    date = now - delta
    print(date)

# 244
print(now.strftime("%H:%M:%S"))

# 245
day = "2020-05-04"
ret = datetime.datetime.strptime(day, "%Y-%m-%d")
print(ret, type(ret))

# 246
import time
while True:
    now = datetime.datetime.now()
    print(now)
    time.sleep(1)

# 247
# import 모듈명
# from 모듈명 import 함수명
# from 모듈명 import *
# import 모듈명 as 내가 사용할 이름

# 248
import os
ret = os.getcwd()
print(ret, type(ret))

# 249
os.rename("C:/Users/before.txt", "C:/Users/after.txt")

# 250
import numpy
for i in numpy.arange(0, 5, 0.1):
    print(i)