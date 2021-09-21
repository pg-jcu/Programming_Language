import pathlib
import collections

print("dir path :", pathlib.Path.cwd())
print(list(pathlib.Path.cwd().glob("*.md")))

p = list(pathlib.Path.cwd().glob("*.md"))
print(p[0].parent)
print(p[0].parent.joinpath("test", p[0].name))

for p in pathlib.Path.cwd().glob("*.txt"):
    new_p = p.parent.joinpath("archive", p.name)
    p.replace(new_p) # shutil.move

count = collections.Counter([p.suffix for p in pathlib.Path.cwd().iterdir()])
print(count)