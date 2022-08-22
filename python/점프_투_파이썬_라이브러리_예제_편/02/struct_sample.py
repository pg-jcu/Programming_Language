import struct

with open("C:/Users/jeong/Desktop/Folder/coding/programming_language/python/파이썬_라이브러리/02/output", "rb") as f:
    chunk = f.read(16)
    result = struct.unpack('dicccc', chunk)
    print(result)