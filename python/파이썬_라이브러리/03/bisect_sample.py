import bisect

result = []
for score in [33, 99, 77, 70, 89, 90, 100]:
    pos = bisect.bisect([60, 70, 80, 90], score)
    grade = "FDCBA"[pos]
    result.append(grade)

print(result)

# binarySearch

def binarySearch(array, value, low, high):
    if low > high:
        return False
    mid = (low + high) // 2
    if array[mid] > value:
        return binarySearch(array, value, low, mid-1)
    elif array[mid] < value:
        return binarySearch(array, value, mid+1, high)
    else:
        return mid

array = [1, 2, 3, 4, 5, 6, 7]

print(binarySearch(array, 7, 1, 7))