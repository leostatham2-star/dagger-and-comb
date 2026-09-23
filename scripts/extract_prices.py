import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)
html = data['data']['html']

# Find the prices section - look for price patterns
# Common pattern: service name + price
prices = re.findall(r'(\w[\w\s\'\-]{2,40}?)\s*</[^>]+>\s*(?:<[^>]+>\s*)*\$\s*(\d+)', html)
print('PRICE PATTERNS:')
for name, price in prices[:30]:
    print(f'  {name.strip()} -> ${price}')

# Try another pattern - look near $ signs
idx = html.find('Prices List')
if idx > 0:
    section = html[idx:idx+8000]
    text = re.sub(r'<script[^>]*>.*?</script>', ' ', section, flags=re.DOTALL)
    plain = re.sub(r'<[^>]+>', '|', text)
    plain = re.sub(r'\|+', ' | ', plain)
    plain = re.sub(r'\s+', ' ', plain)
    print()
    print('PRICES SECTION RAW:')
    print(plain[:3000])
