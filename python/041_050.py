# 041
ticker = "btc_krw"
print(ticker.upper())

# 042
ticker = "BTC_KRW"
print(ticker.lower())

# 043
string = "hello"
print(string.capitalize())

# 044
file_name = "보고서.xlsx"
print(file_name.endswith("xlsx"))

# 045
file_name = "보고서.xlsx"
print(file_name.endswith(("xlsx", "xls")))

# 046
file_name = "2020_보고서.xlsx"
print(file_name.startswith("2020"))

# 047
a = "hello world"
a_split = a.split(' ')
print(a_split)

# 048
ticker = "btc_krw"
ticker_split = ticker.split('_')
print(ticker_split)

# 049
data = "2020-05-01"
data_split = data.split('-')
print(data_split)

# 050
data = "039490    "
print(data.rstrip())