import bz2

data = "Life is too short, You need python." * 10000
compress_data = bz2.compress(data.encode(encoding="utf-8"))
print(len(compress_data))

org_data = bz2.decompress(compress_data).decode("utf-8")
print(len(org_data))

assert data == org_data

with bz2.open("data.txt.bz2", "wb") as f:
    f.write(data.encode("utf-8"))

with bz2.open("data.txt.bz2", "rb") as f:
    read_data = f.read().decode("utf-8")

assert data == read_data