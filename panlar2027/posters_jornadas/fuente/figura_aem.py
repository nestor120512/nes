# Figuras del caso de artrosis erosiva: recorte sin datos de identificación, círculos en articulaciones erosivas y rótulos.
import sys
from PIL import Image, ImageDraw, ImageFont
d, out = sys.argv[1], sys.argv[2]
FONT = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 60)
Y = (255, 214, 0)
def panel(fn, crop, circles, lab, scale, r):
    im = Image.open(f'{d}/{fn}').convert('RGB').crop(crop)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    dr = ImageDraw.Draw(im)
    for (x, y) in circles:
        X, Yc = (x - crop[0]) * scale, (y - crop[1]) * scale
        dr.ellipse([X - r, Yc - r, X + r, Yc + r], outline=Y, width=7)
    dr.text((24, 14), lab, fill='white', font=FONT, stroke_width=4, stroke_fill='black')
    return im
def row(ims, h, gap=16):
    ims = [i.resize((round(i.width * h / i.height), h), Image.LANCZOS) for i in ims]
    W = sum(i.width for i in ims) + gap * (len(ims) - 1)
    R = Image.new('RGB', (W, h), 'white'); x = 0
    for i in ims: R.paste(i, (x, 0)); x += i.width + gap
    return R
which = sys.argv[3]
if which == 'p1':
    a = panel('p1_pa.png', (130, 130, 930, 600),
              [(230, 237), (242, 292), (293, 202), (377, 212), (647, 222), (740, 212), (791, 305), (864, 342)], 'A', 2.5, 36)
    b = panel('p1_obl.png', (130, 130, 960, 610), [], 'B', 2.5, 30)
    row([a, b], 1175).save(out, quality=95)
else:
    a = panel('p2_pa.png', (60, 40, 720, 1000),
              [(215, 240), (222, 362), (387, 167), (540, 210), (525, 365), (665, 380)], 'A', 1.6, 52)
    b = panel('p2_obl.png', (30, 140, 695, 800),
              [(130, 392), (220, 428), (345, 238), (540, 255), (532, 410), (105, 620)], 'B', 1.6, 52)
    row([a, b], 1500).save(out, quality=95)
print(out, Image.open(out).size)
