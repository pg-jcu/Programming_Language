import pickle

def get_all_data():
    try:
        with open("data.p", "rb") as f:
            return pickle.load(f)
    except FileNotFoundError:
        return {}

def add_data(no, subject, content):
    data = get_all_data()
    assert no not in data
    data[no] = {"no":no, "subject":subject, "content":content}
    with open("data.p", "wb") as f:
        pickle.dump(data, f)

def get_data(no):
    data = get_all_data()
    return data[no]

add_data(1, "subject", "content")

data = get_data(1)
print(data["no"])
print(data["subject"])
print(data["content"])

data = get_all_data()
print(data)