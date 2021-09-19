import itertools

print(list(itertools.permutations(['1', '2', '3'], 2)))
print(list(itertools.combinations(['1', '2', '3'], 2)))

for a, b in itertools.permutations(['1', '2', '3'], 2):
    print(a + b)