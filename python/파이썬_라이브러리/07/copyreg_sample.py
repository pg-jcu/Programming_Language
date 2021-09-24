import pickle
import copyreg

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.dummy = "dummy"

def pickle_student(student):
    kwargs = student.__dict__
    return unpickle_student, (kwargs, )

def unpickle_student(kwargs):
    return Student(**kwargs)

copyreg.pickle(Student, pickle_student)

# a = Student("jeong", 27)
# with open("student.p", "wb") as f:
#     pickle.dump(a, f)

with open("student.p", "rb") as f:
    student = pickle.load(f)

print(student.dummy)