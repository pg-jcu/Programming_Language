import itertools

it = itertools.combinations(range(1, 46), 6)

# for num in it:
#     print(num)

print(len(list(it)))
print(len(list(itertools.combinations_with_replacement(range(1, 46), 6))))