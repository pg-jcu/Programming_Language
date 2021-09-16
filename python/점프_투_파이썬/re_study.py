import re

# 정규식을 이용한 문자열 검색

p = re.compile("[a-z]+")
m = p.match("python")
print(m)

m = p.match("3 python")
print(m)

p = re.compile("\w+")
m = p.match("String goes here")
if m:
    print("Match found:", m.group())
else:
    print("No match")

p = re.compile("[a-z]+")
m = p.search("python")
print(m)

m = p.search("3 python")
print(m)

result = p.findall("life is too short")
print(result)

result = p.finditer("life is too short")
print(result)

# match 객체의 메서드

m = p.match("python")
print(m.group())
print(m.start())
print(m.end())
print(m.span())

m = p.search("3 python")
print(m.group())
print(m.start())
print(m.end())
print(m.span())

# 컴파일 옵션

p = re.compile("a.b")
m = p.match("a\nb")
print(m)

p = re.compile("a.b", re.DOTALL) # re.S
m = p.match("a\nb")
print(m)

p = re.compile("[a-z]", re.IGNORECASE) # re.I
print(p.match("Python"))

p = re.compile("^python\s\w+", re.MULTILINE) # re.M

data = """python one
life is too short
python two
you need python
python three"""

print(p.findall(data))

charref = re.compile(r"""
 &[#]                # Start of a numeric entity reference
 (
     0[0-7]+         # Octal form
   | [0-9]+          # Decimal form
   | x[0-9a-fA-F]+   # Hexadecimal form
 )
 ;                   # Trailing semicolon
""", re.VERBOSE) # re.X

# 백슬래시 문제

p = re.compile("\\\\section")
m = p.search("A \\section")
print(m)

p = re.compile(r"\\section")
m = p.search("A \\section")
print(m)