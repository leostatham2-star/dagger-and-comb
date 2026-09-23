import json
import re
import sys

def analyze(path, name):
    with open(path) as f:
        data = json.load(f)
    html = data['data']['html']
    print('=' * 70)
    print(f'PAGE: {name} | title: {data["data"].get("title")}')
    print('=' * 70)

    # Page title / breadcrumb
    m = re.search(r'<title>([^<]+)</title>', html)
    if m:
        print('TITLE TAG:', m.group(1))

    # Headings
    headings = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', html, re.DOTALL)
    print('HEADINGS:')
    for level, text in headings[:50]:
        clean = re.sub(r'<[^>]+>', '', text).strip()
        clean = re.sub(r'\s+', ' ', clean)
        if clean:
            print(f'  H{level}: {clean[:100]}')

    # Paragraphs
    paras = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
    print('PARAGRAPHS (first 25):')
    for p in paras[:25]:
        clean = re.sub(r'<[^>]+>', '', p).strip()
        clean = re.sub(r'\s+', ' ', clean)
        if clean and len(clean) > 3:
            print('  -', clean[:250])

    # Images
    imgs = re.findall(r'<img[^>]*src="([^"]+)"', html)
    bg = re.findall(r'background(?:-image)?\s*:\s*url\(([^)]+)\)', html)
    print('IMAGES:')
    for img in list(dict.fromkeys(imgs))[:15]:
        print('  ', img)
    print('BG IMAGES:')
    for b in list(dict.fromkeys(bg))[:10]:
        print('  ', b)

    # Lists (for prices/services)
    lists = re.findall(r'<li[^>]*>(.*?)</li>', html, re.DOTALL)
    print('LIST ITEMS (first 30):')
    for li in lists[:30]:
        clean = re.sub(r'<[^>]+>', ' ', li).strip()
        clean = re.sub(r'\s+', ' ', clean)
        if clean:
            print('  *', clean[:120])

analyze('/home/z/my-project/scripts/berger_about.json', 'ABOUT US')
analyze('/home/z/my-project/scripts/berger_services.json', 'OUR SERVICES')
