import json
import glob
import os

for path in sorted(glob.glob('/home/z/my-project/scripts/img_*.json')):
    name = os.path.basename(path)
    try:
        with open(path) as f:
            data = json.load(f)
        results = data.get('results', [])
        print(f'=== {name}: {len(results)} results ===')
        for i, r in enumerate(results):
            w = r.get('original_width', '?')
            h = r.get('original_height', '?')
            print(f'  [{i}] {w}x{h} {r["original_url"]}')
    except Exception as e:
        print(f'=== {name}: ERROR {e}')
