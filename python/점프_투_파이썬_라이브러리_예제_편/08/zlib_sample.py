import zlib

data = "Life is too short, You need python." * 10000
compress_data = zlib.compress(data.encode(encoding="utf-8"))
print(len(compress_data))

org_data = zlib.decompress(compress_data).decode("utf-8")
print(len(org_data))

# 인코딩
a = "Life is too short"
print(type(a))

b = a.encode("utf-8")
print(b)
print(type(b))

a = "한글"
# print(a.encode("ascii")) # error
b = a.encode("euc-kr")
print(b)
c = a.encode("utf-8")
print(c)

# 디코딩
print(b.decode("euc-kr"))

# print(b.decode("utf-8")) # error

# 입출력과 인코딩
with open("euc_kr.txt", encoding="euc-kr") as f:
    data = f.read() # unicode string

data = data + '\n' + "add string"

with open("euc_kr.txt", encoding="euc-kr", mode='w') as f:
    f.write(data)