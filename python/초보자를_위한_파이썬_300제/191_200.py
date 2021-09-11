# 191
data = [[ 2000,  3050,  2050,  1980],
        [ 7500,  2050,  2050,  1980],
        [15450, 15050, 15550, 14900]]
for i in data:
    for j in i:
        print(j * 1.00014)

# 192
for i in data:
    for j in i:
        print(j * 1.00014)
    print('-' * 4)

# 193
result = []
for i in data:
    for j in i:
        result.append(j * 1.00014)
print(result)

# 194
result = []
for i in data:
    x = []
    for j in i:
        x.append(j * 1.00014)
    result.append(x)
print(result)

# 195
ohlc = [["open", "high", "low", "close"],
        [100, 110, 70, 100],
        [200, 210, 180, 190],
        [300, 310, 300, 310]]
for i in ohlc[1:]:
    print(i[3])

# 196
for i in ohlc[1:]:
    if i[3] > 150:
        print(i[3])

# 197
for i in ohlc[1:]:
    if i[3] >= i[0]:
        print(i[3])

# 198
volatility = []
for i in ohlc[1:]:
    volatility.append(i[1] - i[2])
print(volatility)

# 199
for i in ohlc[1:]:
    if i[3] > i[0]:
        print(i[1] - i[2])

# 200
total = 0
for i in ohlc[1:]:
    total += i[3] - i[0]
print(total)