import datetime

day1 = datetime.date(2020, 12, 14)
day2 = datetime.date(1995, 6, 5)

diff = day1 -day2
print(diff.days)

day3 = datetime.datetime(2020, 12, 14, 14, 10, 50)
print(day3.hour, day3.minute, day3.second)

time = datetime.time(10, 14, 50)

dt = datetime.datetime.combine(day1, time)
print(dt)

print(day1.weekday(), day1.isoweekday())