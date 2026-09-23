import json
import re

with open('/home/z/my-project/scripts/berger_preview.json') as f:
    data = json.load(f)

html = data['data']['html']

# Find iframe srcs
iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', html)
print('IFRAMES:', iframes)

# Also search for the pattern themeforest uses for full screen preview
m = re.findall(r'(https?://[^"\']+)', html)
for u in set(m):
    low = u.lower()
    if 's3.envato' in low or 'demo' in low or 'berger' in low or '7oroof' in low:
        print('URL:', u)
