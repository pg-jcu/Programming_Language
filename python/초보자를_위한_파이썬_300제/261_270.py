# 261
class Stock:
    pass

# 262
class Stock:
    def __init__(self, name, code):
        self.name = name
        self.code = code
samsung = Stock("삼성전자", "005930")
print(samsung.name)
print(samsung.code)

# 263
class Stock:
    def __init__(self, name, code):
        self.name = name
        self.code = code
    def set_name(self, name):
        self.name = name
a = Stock(None, None)
a.set_name("삼성전자") # Stock.set_name(a, "삼성전자")
print(a.name)

# 264
class Stock:
    def __init__(self, name, code):
        self.name = name
        self.code = code
    def set_code(self, code):
        self.code = code
a = Stock(None, None)
a.set_code("005930")
print(a.code)

# 265
class Stock:
    def __init__(self, name, code):
        self.name = name
        self.code = code
    def get_name(self):
        return self.name
    def get_code(self):
        return self.code
samsung = Stock("삼성전자", "005930")
print(samsung.get_name())
print(samsung.get_code())

# 266
class Stock:
    def __init__(self, name, code, per, pbr, revenue):
        self.name = name
        self.code = code
        self.per = per
        self.pbr = pbr
        self.revenue = revenue

# 267
samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
print(samsung.revenue)

# 268
class Stock:
    def __init__(self, name, code, per, pbr, dividend):
        self.name = name
        self.code = code
        self.per = per
        self.pbr = pbr
        self.dividend = dividend
    def set_per(self, per):
        self.per = per
    def set_pbr(self, pbr):
        self.pbr = pbr
    def set_dividend(self, dividend):
        self.dividend = dividend

# 269
samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
samsung.set_per(12.75)
print(samsung.per)

# 270
samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
hyundai = Stock("현대차", "005380", 8.70, 0.35, 4.27)
LGElec = Stock("LG전자", "066570", 317.34, 0.69, 1.37)
stock_list = [samsung, hyundai, LGElec]
for i in stock_list:
    print(i.code, i.per)