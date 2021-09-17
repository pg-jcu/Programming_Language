import heapq

data = [
    (12.23, "강보람"),
    (12.31, "김지원"),
    (11.98, "박시우"),
    (11.99, "장준혁"),
    (11.67, "차정웅"),
    (12.02, "박중수"),
    (11.57, "차동현"),
    (12.04, "고미숙"),
    (11.92, "한시우"),
    (12.22, "이민석"),
]

h = []
for score in data:
    heapq.heappush(h, score)

for i in range(3):
    print(heapq.heappop(h))


print(heapq.nsmallest(3, data))
print(heapq.nlargest(3, data))

heapq.heapify(data)

for i in range(3):
    print(heapq.heappop(data))