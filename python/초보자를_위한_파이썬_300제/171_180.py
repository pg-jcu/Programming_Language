# 171
price_list = [32100, 32150, 32000, 32500]
for i in range(len(price_list)):
    print(price_list[i])

# 172
for i, data in enumerate(price_list):
    print(i, data)

# 173
for i, data in enumerate(price_list):
    print((len(price_list) - 1) - i, data)

# 174
for i in range(1, len(price_list)):
    print(90 + 10 * i, price_list[i])

# 175
my_list = ["가", "나", "다", "라"]
for i in range(len(my_list) - 1):
    print(my_list[i], my_list[i+1])

# 176
my_list = ["가", "나", "다", "라", "마"]
for i in range(2, len(my_list)):
    print(my_list[i-2], my_list[i-1], my_list[i])

# 177
my_list = ["가", "나", "다", "라"]
for i in range(len(my_list) - 1, 0, -1):
    print(my_list[i], my_list[i-1])

# 178
my_list = [100, 200, 400, 800]
for i in range(1, len(my_list)):
    print(my_list[i] - my_list[i-1])

# 179
my_list = [100, 200, 400, 800, 1000, 1300]
for i in range(2, len(my_list)):
    average = (my_list[i-2] + my_list[i-1] + my_list[i]) / 3
    print(average)

# 180
low_prices  = [100, 200, 400, 800, 1000]
high_prices = [150, 300, 430, 880, 1000]
volatility = []
for i in range(5):
    volatility.append(high_prices[i] - low_prices[i])
print(volatility)