import random
import tempfile

def sumfile(f):
    result = 0
    for line in f.readlines():
        num = int(line)
        result += num
    return result

tf = tempfile.TemporaryFile(mode='w+')
for i in range(10):
    num = random.randint(1, 100)
    tf.write(str(num))
    tf.write('\n')

tf.seek(0)
result = sumfile(tf)
tf.close()

print(result)