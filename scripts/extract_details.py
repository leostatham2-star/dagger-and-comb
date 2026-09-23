import json
import re

with open('/home/z/my-project/scripts/berger_home.json') as f:
    data = json.load(f)
html = data['data']['html']

# Top bar content
idx = html.find('Address')
if idx > 0:
    section = html[max(0,idx-500):idx+2500]
    text = re.sub(r'<script[^>]*>.*?</script>', ' ', section, flags=re.DOTALL)
    plain = re.sub(r'<[^>]+>', '|', text)
    plain = re.sub(r'\|+', ' | ', plain)
    plain = re.sub(r'\s+', ' ', plain)
    print('TOP BAR AREA:')
    print(plain[:1500])

# Welcome section
idx = html.find('Welcome to Berger')
if idx > 0:
    section = html[idx:idx+4000]
    text = re.sub(r'<script[^>]*>.*?</script>', ' ', section, flags=re.DOTALL)
    plain = re.sub(r'<[^>]+>', '|', text)
    plain = re.sub(r'\|+', ' | ', plain)
    plain = re.sub(r'\s+', ' ', plain)
    print()
    print('WELCOME SECTION:')
    print(plain[:2000])

# Hero slider text
idx = html.find('banner_home')
if idx > 0:
    section = html[max(0,idx-2000):idx+2000]
    text = re.sub(r'<[^>]+>', '|', section)
    plain = re.sub(r'\|+', ' | ', text)
    plain = re.sub(r'\s+', ' ', plain)
    print()
    print('HERO AREA:')
    print(plain[:1500])

# Footer
idx = html.rfind('footer')
section = html[idx:idx+4000] if idx > 0 else ''
text = re.sub(r'<script[^>]*>.*?</script>', ' ', section, flags=re.DOTALL)
plain = re.sub(r'<[^>]+>', '|', text)
plain = re.sub(r'\|+', ' | ', plain)
plain = re.sub(r'\s+', ' ', plain)
print()
print('FOOTER AREA:')
print(plain[:1200])
