import calendar

for i in [0, 1, 4, 1200, 700, 2020]:
    print(calendar.isleap(i), end=' ')

print()

def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

for i in [0, 1, 4, 1200, 700, 2020]:
    print(is_leap_year(i), end=' ')