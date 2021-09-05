# 051
movie_rank = ["닥터 스트레인지", "스플릿", "럭키"]
print(movie_rank)

# 052
movie_rank.append("배트맨")
print(movie_rank)

# 053
movie_rank.insert(1, "슈퍼맨")
print(movie_rank)

# 054
movie_rank.remove("럭키")
# del movie_rank[3]
print(movie_rank)

# 055
del movie_rank[2]
del movie_rank[2] # 먼저 삭제된 후 남는 원소들에 대해서 순서를 새로 고려한 후 삭제
print(movie_rank)

# 056
lang1 = ["C", "C++", "JAVA"]
lang2 = ["Python", "Go", "C#"]
langs = lang1 + lang2
print(langs)

# 057
nums = [1, 2, 3, 4, 5, 6, 7]
print("max: ", max(nums))
print("min: ", min(nums))

# 058
nums = [1, 2, 3, 4, 5]
print(sum(nums))

# 059
cook = ["피자", "김밥", "만두", "양념치킨", "족발", "피자", "김치만두", "쫄면", "쏘세지", "라면", "팥빙수", "김치전"]
print(len(cook))

# 060
nums = [1, 2, 3, 4, 5]
average = sum(nums) / len(nums)
print(average)