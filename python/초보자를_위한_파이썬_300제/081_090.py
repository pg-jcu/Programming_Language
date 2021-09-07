# 081
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
*valid_score, _, _ = scores
print(valid_score)

# 082
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, _, *valid_score = scores
print(valid_score)

# 083
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, *valid_score, _ = scores
print(valid_score)

# 084
temp = {}
print(temp, type(temp))

# 085
icecream = {"메로나": 1000, "폴라포": 1200, "빵빠레": 1800}
print(icecream)

# 086
icecream["죠스바"] = 1200
icecream["월드콘"] = 1500
print(icecream)

# 087
ice = {"메로나": 1000,
       "폴로포": 1200,
       "빵빠레": 1800,
       "죠스바": 1200,
       "월드콘": 1500}

print("메로나 가격:", ice["메로나"])

# 088
ice["메로나"] = 1300
print("메로나 가격:", ice["메로나"])

# 089
del ice["메로나"]
print(ice)

# 090
icecream = {"폴라포": 1200, "빵빠레": 1800, "월드콘": 1500, "메로나": 1000}
# icecream["누가바"] # 딕셔너리에 없는 키를 사용해서 인덱싱하면 에러가 발생