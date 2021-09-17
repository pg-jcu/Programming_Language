import datetime

today = datetime.date.today()
diff_days = datetime.timedelta(days=50)

print(today + diff_days)
print(today - diff_days)