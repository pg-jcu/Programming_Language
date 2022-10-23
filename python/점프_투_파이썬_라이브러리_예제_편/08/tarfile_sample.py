import tarfile

with tarfile.open("mytext.tar", 'w') as mytar:
    mytar.add("a.txt")
    mytar.add("b.txt")
    mytar.add("c.txt")

with tarfile.open("mytext.tar") as mytar:
    
    import os
    
    def is_within_directory(directory, target):
        
        abs_directory = os.path.abspath(directory)
        abs_target = os.path.abspath(target)
    
        prefix = os.path.commonprefix([abs_directory, abs_target])
        
        return prefix == abs_directory
    
    def safe_extract(tar, path=".", members=None, *, numeric_owner=False):
    
        for member in tar.getmembers():
            member_path = os.path.join(path, member.name)
            if not is_within_directory(path, member_path):
                raise Exception("Attempted Path Traversal in Tar File")
    
        tar.extractall(path, members, numeric_owner=numeric_owner) 
        
    
    safe_extract(mytar)

with tarfile.open("mytext.tar") as mytar:
    mytar.extract("a.txt")

with tarfile.open('mytext.tar.gz', 'w:gz') as mytar:
    mytar.add('a.txt')
    mytar.add('b.txt')
    mytar.add('c.txt')

with tarfile.open('mytext.tar.gz') as mytar:
    def is_within_directory(directory, target):
        
        abs_directory = os.path.abspath(directory)
        abs_target = os.path.abspath(target)
    
        prefix = os.path.commonprefix([abs_directory, abs_target])
        
        return prefix == abs_directory
    
    def safe_extract(tar, path=".", members=None, *, numeric_owner=False):
    
        for member in tar.getmembers():
            member_path = os.path.join(path, member.name)
            if not is_within_directory(path, member_path):
                raise Exception("Attempted Path Traversal in Tar File")
    
        tar.extractall(path, members, numeric_owner=numeric_owner) 
        
    
    safe_extract(mytar)