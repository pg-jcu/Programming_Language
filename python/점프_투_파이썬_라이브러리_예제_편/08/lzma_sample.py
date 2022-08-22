import lzma

data = "Life is too short, You need python." * 10000
compress_data = lzma.compress(data.encode(encoding="utf-8"))
print(len(compress_data))

org_data = lzma.decompress(compress_data).decode("utf-8")
print(len(org_data))

assert data == org_data

with lzma.open("data.txt.xz", "wb") as f:
    f.write(data.encode("utf-8"))

with lzma.open("data.txt.xz", "rb") as f:
    read_data = f.read().decode("utf-8")

assert data == read_data