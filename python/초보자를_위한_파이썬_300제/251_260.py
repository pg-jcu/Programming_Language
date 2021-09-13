# 251

# 252
class Human:
    pass

# 253
areum = Human()

# 254
class Human:
    def __init__(self):
        print("응애응애")
areum = Human()

# 255
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
areum = Human("아름", 25, "여자")
print(areum.name)

# 256
print("이름: {}, 나이: {}, 성별: {}".format(areum.name, areum.age, areum.gender))

# 257
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    def who(self):
        print("이름: {}, 나이: {}, 성별: {}".format(self.name, self.age, self.gender))
areum = Human("아름", 25, "여자")
areum.who()

# 258
class Human:
    def __init__(self):
        pass
    def setInfo(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    def who(self):
        print("이름: {}, 나이: {}, 성별: {}".format(self.name, self.age, self.gender))
areum = Human()
areum.setInfo("아름", 25, "여자")
areum.who()

# 259
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    def __del__(self):
        print("나의 죽음을 알리지마라")
areum = Human("아름", 25, "여자")
del(areum)

# 260
class OMG:
    def print(): # self 추가해야함
        print("Oh my god")
mystock = OMG()
# mystock.print() # OMG.print(mystock)