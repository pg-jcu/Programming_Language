from datetime import date

def get_menu(input_date):
    weekday = input_date.isoweekday()
    if weekday == 1:
        menu = "김치찌개"
    elif weekday == 2:
        menu = "비빔밥"
    elif weekday == 3:
        menu = "된장찌개"
    elif weekday == 4:
        menu = "불고기"
    elif weekday == 5:
        menu = "갈비탕"
    elif weekday == 6:
        menu = "라면"
    elif weekday == 7:
        menu = "건빵"
    return menu


print(get_menu(date(2020, 12, 6)))
print(get_menu(date(2020, 12, 18)))

from enum import IntEnum

class Week(IntEnum):
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7

def get_menu(input_date):
    menu = {
        Week.MONDAY: "김치찌개",
        Week.TUESDAY: "비빔밥",
        Week.WEDNESDAY: "된장찌개",
        Week.THURSDAY: "불고기",
        Week.FRIDAY: "갈비탕",
        Week.SATURDAY: "라면",
        Week.SUNDAY: "건빵",
    }
    return menu[input_date.isoweekday()]

print(get_menu(date(2020, 12, 6)))
print(get_menu(date(2020, 12, 18)))

print(Week.MONDAY.name)
print(Week.MONDAY.value)

for week in Week:
    print("{}:{}".format(week.name, week.value))