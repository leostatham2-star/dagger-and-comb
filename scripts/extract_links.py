import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)

html = data['data']['html']

# Find all links
links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', html, re.DOTALL)
print('ALL LINKS:')
seen = set()
for href, text in links:
    clean = re.sub(r'<[^>]+>', '', text).strip()
    clean = re.sub(r'\s+', ' ', clean)
    if href not in seen and ('berger.themerex' in href or href.startswith('/')):
        seen.add(href)
        print(f'  {clean[:50]:50} -> {href}')
