# 271
import random

class Account:
    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3

hong = Account("홍길동", 100)
print(hong.holder)
print(hong.balance)
print(hong.bank)
print(hong.account_number)

# 272
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3

        Account.account_count += 1

kim = Account("김", 100)
lee = Account("이", 200)
print(Account.account_count)

# 273
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

kim = Account("김", 100)
kim.get_account_num()
lee = Account("이", 200)
lee.get_account_num()

# 274
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount

# 275
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount

kim = Account("김", 100)
kim.deposit(100)
kim.withdraw(90)
print(kim.balance)

# 276
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount

    def display_info(self):
        print("은행이름:", self.bank)
        print("예금주:", self.holder)
        print("계좌번호:", self.account_number)
        print("잔고: {:,}원".format(self.balance))

kim = Account("김", 1000000)
kim.display_info()

# 277
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.deposit_count = 0

        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount
            self.deposit_count += 1
            
            if self.deposit_count % 5 == 0:
                self.balance = (self.balance * 1.01)

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount

    def display_info(self):
        print("은행이름:", self.bank)
        print("예금주:", self.holder)
        print("계좌번호:", self.account_number)
        print("잔고: {:,}원".format(self.balance))

kim = Account("김", 1000)
kim.deposit(1000)
kim.deposit(1000)
kim.deposit(1000)
kim.deposit(1000)
kim.deposit(1000)
print(kim.balance)

# 278
kim = Account("김", 1000000)
lee = Account("이", 1000)
park = Account("박", 1000)
account_list = [kim, lee, park]
print(account_list)

# 279
for i in account_list:
    if i.balance >= 1000000:
        i.display_info()

# 280
import random

class Account:
    account_count = 0

    def __init__(self, holder, balance):
        self.deposit_count = 0
        self.deposit_history_record = []
        self.withdraw_history_record = []

        self.holder = holder
        self.balance = balance
        self.bank = "SC은행"
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)
        num2 = str(num2).zfill(2)
        num3 = str(num3).zfill(6)
        self.account_number = num1 + '-' + num2 + '-' + num3
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)

    def deposit(self, amount):
        if amount >= 1:
            self.deposit_history_record.append(amount)
            self.balance += amount
            self.deposit_count += 1
            
            if self.deposit_count % 5 == 0:
                self.balance = (self.balance * 1.01)

    def withdraw(self, amount):
        if self.balance > amount:
            self.withdraw_history_record.append(amount)
            self.balance -= amount

    def display_info(self):
        print("은행이름:", self.bank)
        print("예금주:", self.holder)
        print("계좌번호:", self.account_number)
        print("잔고: {:,}원".format(self.balance))

    def deposit_history(self):
        for amount in self.deposit_history_record:
            print(amount)

    def withdraw_history(self):
        for amount in self.withdraw_history_record:
            print(amount)

kim = Account("김", 1000)
kim.deposit(1000)
kim.deposit(2000)
kim.deposit(3000)
kim.deposit_history()

kim.withdraw(1000)
kim.withdraw(2000)
kim.withdraw_history()
    