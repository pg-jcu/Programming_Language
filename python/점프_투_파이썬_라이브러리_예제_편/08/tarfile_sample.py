import tarfile

with tarfile.open("mytext.tar", 'w') as mytar:
    mytar.add("a.txt")
    mytar.add("b.txt")
    mytar.add("c.txt")

with tarfile.open("mytext.tar") as mytar:
    mytar.extractall()

with tarfile.open("mytext.tar") as mytar:
    mytar.extract("a.txt")

with tarfile.open('mytext.tar.gz', 'w:gz') as mytar:
    mytar.add('a.txt')
    mytar.add('b.txt')
    mytar.add('c.txt')

with tarfile.open('mytext.tar.gz') as mytar:
    mytar.extractall()