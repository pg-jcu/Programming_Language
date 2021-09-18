from fractions import Fraction

a = Fraction(1, 5)
print(a)

b = Fraction('1/5')
print(b)

print(a == b)

print(a.numerator, a.denominator)

result = Fraction(1, 5) + Fraction(2, 5)
print(result, float(result))