# 111
string = input()
print(string * 2)

# 112
num = int(input("숫자를 입력하세요: "))
print(num + 10)

# 113
num = int(input())
if num % 2 == 0:
    print("짝수")
else:
    print("홀수")

# 114
num = int(input("입력값: "))
if num + 20 <= 255:
    print("출력값:", num + 20)
else:
    print("출력값:", 255)

# 115
num = int(input("입력값: "))
if num - 20 < 0:
    print("출력값:", 0)
elif num - 20 > 255:
    print("출력값:", 255)
else:
    print("출력값:", num - 20)

# 116
time = input("현재시간:")
if time[-2:] == "00":
    print("정각 입니다.")
else:
    print("정각이 아닙니다.")

# 117
fruit = ["사과", "포도", "홍시"]
user = input("좋아하는 과일은? ")
if user in fruit:
    print("정답입니다")
else:
    print("오답입니다.")

# 118
warn_investment_list = ["Microsoft", "Google", "Naver", "Kakao", "SAMSUNG", "LG"]
user = input("투자 경고 종목?")
if user in warn_investment_list:
    print("투자 경고 종목입니다.")
else:
    print("투자 경고 종목이 아닙니다.")

# 119
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
season = input("제가좋아하는계절은: ")
if season in fruit:
    print("정답입니다.")
else:
    print("오답입니다.")

# 120
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
fav_fruit = input("제가좋아하는과일은: ")
if fav_fruit in fruit.values():
    print("정답입니다.")
else:
    print("오답입니다.")