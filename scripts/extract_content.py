import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)

html = data['data']['html']

# Background images in inline styles or CSS
bg = re.findall(r'background(?:-image)?\s*:\s*url\(([^)]+)\)', html)
print('BACKGROUND IMAGES:')
for b in set(bg):
    print(' ', b)

print()
# Full text content per section - strip tags but keep structure
text = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.DOTALL)
text = re.sub(r'<style[^>]*>.*?</style>', ' ', text, flags=re.DOTALL)

# Find paragraphs
paras = re.findall(r'<p[^>]*>(.*?)</p>', text, re.DOTALL)
print('PARAGRAPHS:')
for p in paras[:50]:
    clean = re.sub(r'<[^>]+>', '', p).strip()
    clean = re.sub(r'\s+', ' ', clean)
    if clean and len(clean) > 3:
        print('  -', clean[:300])
