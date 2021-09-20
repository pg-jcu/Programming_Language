from functools import partial

def add_mul(choice, *args):
    if choice == "add":
        result = 0
        for i in args:
            result = result + i
    elif choice == "mul":
        result = 1
        for i in args:
            result = result * i
    return result

def add(*args):
    return add_mul("add", *args)

def mul(*args):
    return add_mul("mul", *args)

print(add(1, 2, 3, 4, 5))
print(mul(1, 2, 3, 4, 5))

add = partial(add_mul, "add")
add = partial(add_mul, "mul")

print(add(1, 2, 3, 4, 5))
print(mul(1, 2, 3, 4, 5))

add = partial(add_mul, "add", 100)
mul = partial(add_mul, "mul", 1000)

print(add(1))
print(mul(1, 2))

print(add.func)
print(add.args)