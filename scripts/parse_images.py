import json
import glob
import os

def parse_file(path):
    with open(path) as f:
        content = f.read()
    # Strip log lines before JSON
    start = content.find('{')
    if start == -1:
        return None
    try:
        return json.loads(content[start:])
    except json.JSONDecodeError:
        return None

all_images = {}
for path in sorted(glob.glob('/home/z/my-project/scripts/img_*.json')):
    name = os.path.basename(path).replace('img_', '').replace('.json', '')
    data = parse_file(path)
    if not data or not data.get('success'):
        print(f'=== {name}: FAILED')
        continue
    results = data.get('results', [])
    print(f'=== {name}: {len(results)} ===')
    urls = []
    for r in results:
        w = r.get('original_width', '?')
        h = r.get('original_height', '?')
        print(f'  {w}x{h}  {r["original_url"]}')
        urls.append(r['original_url'])
    all_images[name] = urls

with open('/home/z/my-project/scripts/all_images.json', 'w') as f:
    json.dump(all_images, f, indent=2)
print()
print('Saved to all_images.json')
