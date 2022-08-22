import textwrap

long_text = "Life is too short, you need python." * 10

result = textwrap.wrap(long_text, width=70)
print('\n'.join(result))

result = textwrap.fill(long_text, width=70)
print(result)