from collections import defaultdict

text = "Life is too short, You need python"

d = dict()
for c in text:
    if c not in d:
        d[c] = 0
    d[c] += 1

print(d)

d = defaultdict(int)
for c in text:
    d[c] += 1

print(dict(d))