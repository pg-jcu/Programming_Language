import glob

for filename in glob.glob("*/*.md"):
    print(filename)