# 121
word = input()
if word.islower():
    print(word.upper())
else:
    print(word.lower())

# 122
score = int(input("score: "))
if score > 80 and score <= 100:
    print("grade is A")
elif score > 60 and score <= 80:
    print("grade is B")
elif score > 40 and score <= 60:
    print("grade is C")
elif score > 20 and score <= 40:
    print("grade is D")
else:
    print("grade is E")

# 123
exchange_rate = {"달러": 1167, "엔": 1.096, "유로": 1268, "위안": 171}
user = input("입력: ").split()
won, currency = user
print(float(won) * exchange_rate[currency], "원")

# 124
number = list(range(3))
for i in range(3):
    number_input = int(input(f"input number{i+1}: "))
    number[i] = number_input
print(max(number))

# 125
phone_number = input("휴대전화 번호 입력: ")
number = phone_number.split('-')[0]
if number == "011":
    com = "SKT"
elif number == "016":
    com = "KT"
elif number == "019":
    com = "LGU"
else:
    com = "알수없음"
print(f"당신은 {com} 사용자입니다.")

# 126
zip_code = input("우편번호: ")[:3]
if zip_code in ["010", "011", "012"]:
    print("강북구")
elif zip_code in ["013", "014", "015"]:
    print("도봉구")
else:
    print("노원구")

# 127
p_num = input("주민등록번호: ").split('-')
gender = p_num[1][0]
if gender in ['1', '3']:
    print("남자")
elif gender in ['2', '4']:
    print("여자")
else:
    print("오류")

# 128
p_num = input("주민등록번호: ").split('-')
loc = p_num[1][1:3]
if 0 <= int(loc) <= 8:
    print("서울입니다.")
else:
    print("서울이 아닙니다.")

# 129
p_num = input("주민등록번호: ").replace('-', '')
num_list = []
mul_list = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
for i in range(12):
    num_list.append(int(p_num[i]) * mul_list[i])
cal1 = sum(num_list) % 11
cal2 = 11 - cal1
if cal2 == int(p_num[-1]):
    print("유효한 주민등록번호입니다.")
else:
    print("유효하지 않은 주민등록번호입니다.")

# 130
import requests
btc = requests.get("https://api.bithumb.com/public/ticker/").json()['data']
f_range = float(btc["max_price"]) - float(btc["min_price"])
if float(btc["opening_price"]) + f_range > float(btc["max_price"]):
    print("상승장")
else:
    print("하락장")