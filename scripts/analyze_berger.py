import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)

html = data['data']['html']
print('TITLE:', data['data'].get('title'))
print('HTML LEN:', len(html))
print('=' * 60)

# Extract structure: headings, nav links, sections
# Find nav menu items
navs = re.findall(r'<li[^>]*menu-item[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>([^<]+)</a>', html, re.DOTALL)
print('NAV ITEMS:')
for href, text in navs[:40]:
    print(' ', text.strip(), '->', href)

print('=' * 60)
# Extract headings
headings = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', html, re.DOTALL)
print('HEADINGS:')
for level, text in headings[:60]:
    clean = re.sub(r'<[^>]+>', '', text).strip()
    if clean:
        print(f'  H{level}: {clean[:80]}')
