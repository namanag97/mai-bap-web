import urllib.request
import urllib.parse
from html.parser import HTMLParser
import re

class DDGParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.results = []
        self.in_result = False
        self.current_url = ""
        self.current_title = ""

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == 'a' and 'class' in attrs_dict and 'result__url' in attrs_dict['class']:
            self.current_url = attrs_dict.get('href', '')
        if tag == 'a' and 'class' in attrs_dict and 'result__snippet' in attrs_dict['class']:
            self.current_url = attrs_dict.get('href', '')
            self.in_result = True

    def handle_data(self, data):
        if self.in_result:
            self.current_title += data

    def handle_endtag(self, tag):
        if tag == 'a' and self.in_result:
            self.results.append({'url': self.current_url, 'snippet': self.current_title.strip()})
            self.in_result = False
            self.current_title = ""
            self.current_url = ""

def search(query):
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    )
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        parser = DDGParser()
        parser.feed(html)
        return parser.results
    except Exception as e:
        print(f"Error: {e}")
        return []

print("Searching OCPM Celonis PQL...")
for res in search("Celonis PQL Process Query Language object-centric process mining"):
    print(res)

print("\nSearching Temporal Logic over Event Logs Vectorized...")
for res in search("Temporal logic LTL CTL event logs vectorized array SIMD"):
    print(res)

print("\nSearching Limitations of Process Mining simple relational algebra...")
for res in search("process mining limitations relational algebra SQL graph database"):
    print(res)
