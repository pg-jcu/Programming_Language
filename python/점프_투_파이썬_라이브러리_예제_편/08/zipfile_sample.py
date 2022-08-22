import zipfile

with zipfile.ZipFile("mytext.zip", 'w') as myzip:
    myzip.write("a.txt")
    myzip.write("b.txt")
    myzip.write("c.txt")

with zipfile.ZipFile("mytext.zip") as myzip:
    myzip.extractall()

with zipfile.ZipFile("mytext.zip") as myzip:
    myzip.extract("a.txt")