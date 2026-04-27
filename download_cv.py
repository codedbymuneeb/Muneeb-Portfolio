import urllib.request

url = "https://drive.google.com/uc?export=download&id=1BW-c6mued36Vuz2sDqB0KHVaHl4LAYPH"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        with open("d:\\Muneeb-Portfolio\\public\\cv.pdf", "wb") as f:
            f.write(response.read())
    print("Downloaded successfully.")
except Exception as e:
    print("Error:", e)
