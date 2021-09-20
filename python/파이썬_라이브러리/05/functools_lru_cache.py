import urllib.request
from functools import lru_cache

@lru_cache(maxsize=32)
def get_wikidocs(page):
    print("wikidocs page:{}".format(page))
    resource = "https://wikidocs.net/{}".format(page)
    try:
        with urllib.request.urlopen(resource) as s:
            return s.read()
    except urllib.error.HTTPError:
        return "Not Found"

first_6 = get_wikidocs(6)
first_7 = get_wikidocs(7)

second_6 = get_wikidocs(6)
second_7 = get_wikidocs(7)

assert first_6 == second_6
assert first_7 == second_7


# 클로저
class Mul:
    def __init__(self, m):
        self.m = m

    def mul(self, n):
        return self.m * n

if __name__ == "__main__":
    mul3 = Mul(3)
    mul5 = Mul(5)

    print(mul3.mul(10))
    print(mul5.mul(10))

class Mul:
    def __init__(self, m):
        self.m = m
    
    def __call__(self, n):
        return self.m * n

if __name__ == "__main__":
    mul3 = Mul(3)
    mul5 = Mul(5)

    print(mul3(10))
    print(mul5(10))

def mul(m):
    def wrapper(n):
        return m * n
    return wrapper

if __name__ == "__main__":
    mul3 = mul(3)
    mul5 = mul(5)

    print(mul3(10))
    print(mul5(10))

# 데코레이터

import time

def myfunc():
    start = time.time()
    print("함수가 실행됩니다.")
    end = time.time()
    print("함수 수행시간: {}초".format(end - start))

myfunc()

def elapsed(original_func):
    def wrapper():
        start = time.time()
        result = original_func()
        end = time.time()
        print("함수 수행시간: {}초".format(end - start))
        return result
    return wrapper

def myfunc():
    print("함수가 실행됩니다.")

decorated_myfunc = elapsed(myfunc)
decorated_myfunc()

def elapsed(original_func):
    def wrapper():
        start = time.time()
        result = original_func()
        end = time.time()
        print("함수 수행시간: {}초".format(end - start))
        return result
    return wrapper

@elapsed
def myfunc():
    print("함수가 실행됩니다.")

myfunc()

def elapsed(original_func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = original_func(*args, **kwargs)
        end = time.time()
        print("함수 수행시간: {}초".format(end - start))
        return result
    return wrapper

@elapsed
def myfunc(msg):
    print("{}을 출력합니다.".format(msg))

myfunc("You need python")