import subprocess

with open('out.txt', 'w') as f:
    out = subprocess.run(['dir'], capture_output=True, text=True)
    f.write(out.stdout)