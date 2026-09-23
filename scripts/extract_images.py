import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)

html = data['data']['html']

# Extract all image URLs
imgs = re.findall(r'<img[^>]*src="([^"]+)"', html)
print('IMAGES:')
seen = set()
for img in imgs:
    if img not in seen:
        seen.add(img)
        print(' ', img)
print()
print('TOTAL UNIQUE:', len(seen))
