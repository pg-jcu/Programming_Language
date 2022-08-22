import itertools

emp_pool = itertools.cycle(['김은경', '이명자', '이성진'])
for _ in range(10):
    print(next(emp_pool))

# Iterator
a = [1, 2, 3]
# print(next(a)) # not iterator

ia = iter(a)
print(type(ia))

for _ in range(3):
    print(next(ia))

# print(next(ia)) # StopIterator

ia = iter(a)
for i in ia:
    print(i)

for i in ia:
    print(i) # not return

# make Iterator
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.position = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.position >= len(self.data):
            raise StopIteration
        result = self.data[self.position]
        self.position += 1
        return result

if __name__ == "__main__":
    i = MyIterator([1, 2, 3])
    for item in i:
        print('MyIterator:', item)

class ReverseIterator:
    def __init__(self, data):
        self.data = data
        self.position = len(data) - 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.position < 0:
            raise StopIteration
        result = self.data[self.position]
        self.position -= 1
        return result

if __name__ == "__main__":
    i = ReverseIterator([1, 2, 3])
    for item in i:
        print("ReverseIterator:", item)

# Generator
def gen():
    yield 'a'
    yield 'b'
    yield 'c'

g = gen()
print(type(g))
print(next(g))
print(next(g))
print(next(g))
# print(next(g)) # StopIteration

def mygen():
    for i in range(1, 1000):
        result = i * i
        yield result

myg = mygen()

genexp = (i * i for i in range(1, 1000)) # generator expression
print(type(genexp))

import time

def longtime_job():
    print("job start")
    time.sleep(1)
    return "done"

list_job = iter([longtime_job() for i in range(5)])
print(next(list_job))

list_job = (longtime_job() for i in range(5)) # Lazy evaluation
print(next(list_job))