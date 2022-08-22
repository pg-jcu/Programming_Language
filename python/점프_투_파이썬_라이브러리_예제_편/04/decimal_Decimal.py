import math
from decimal import Decimal

print(0.1 * 3 == 0.3)
print(1.2 - 0.1 == 1.1)
print(0.1 * 0.1 == 0.01)

print(math.isclose(0.1 * 3, 0.3))
print(math.isclose(1.2 - 0.1, 1.1))
print(math.isclose(0.1 * 0.1, 0.01))

print(float(Decimal('0.1') * 3) == 0.3) # 3.0 X
print(float(Decimal('1.2') - Decimal('0.1')) == 1.1)
print(float(Decimal('0.1') * Decimal('0.1')) == 0.01)