def getTotalPage(total_post, page_post):
    if total_post % page_post == 0:
        return total_post // page_post
    else:
        return total_post // page_post + 1

print(getTotalPage(5, 10))
print(getTotalPage(15, 10))
print(getTotalPage(25, 10))
print(getTotalPage(30, 10))