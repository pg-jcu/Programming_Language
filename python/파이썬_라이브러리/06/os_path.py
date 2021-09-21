import os
import pathlib

def search(dirname):
    filenames = os.listdir(dirname)
    for filename in filenames:
        filepath = os.path.join(dirname, filename)
        if os.path.isdir(filepath):
            search(filepath)
        elif os.path.isfile(filepath):
            name, ext = os.path.splitext(filepath)
            if ext == '.py':
                print(filepath)

dirname = "C:/Users/jeong/Desktop/Folder/coding/programming_language/python/파이썬_라이브러리"
search(dirname)
print('-'*50)

def search_pathlib(dirname):
    for p in pathlib.Path(dirname).rglob("*.py"):
        print(p)

search_pathlib(dirname)