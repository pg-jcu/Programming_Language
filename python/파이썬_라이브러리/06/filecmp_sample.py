import filecmp

fd = filecmp.dircmp('C:/Users/jeong/Downloads', 'C:/Users/jeong')

for a in fd.left_only:
    print("a: {}".format(a))

for b in fd.right_only:
    print("b: {}".format(b))

for x in fd.diff_files:
    print("x: {}".format(x))