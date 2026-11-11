import sys, math
from PIL import Image, ImageDraw, ImageFont
cor, axi, out = sys.argv[1], sys.argv[2], sys.argv[3]
H = 900
def arrow(d, start, end, color, w):
    d.line([start, end], fill=color, width=w)
    ang = math.atan2(end[1]-start[1], end[0]-start[0]); L = w*4.5
    for s in (+1, -1):
        a = ang + math.pi - s*math.radians(28)
        d.line([end, (end[0]+L*math.cos(a), end[1]+L*math.sin(a))], fill=color, width=w)
    d.polygon([end, (end[0]+L*math.cos(ang+math.pi-math.radians(28)), end[1]+L*math.sin(ang+math.pi-math.radians(28))),
               (end[0]+L*math.cos(ang+math.pi+math.radians(28)), end[1]+L*math.sin(ang+math.pi+math.radians(28)))], fill=color)
def panel(path, crop, a_start, a_end, label):
    im = Image.open(path).convert('RGB').crop(crop)
    k = H / im.height
    im = im.resize((round(im.width*k), H), Image.LANCZOS)
    d = ImageDraw.Draw(im)
    tr = lambda p: ((p[0]-crop[0])*k, (p[1]-crop[1])*k)
    arrow(d, tr(a_start), tr(a_end), (255, 214, 0), 9)
    try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 70)
    except Exception: f = ImageFont.load_default()
    d.text((30, 20), label, fill='white', font=f)
    return im
A = panel(cor, (0, 20, 369, 360), (348, 202), (293, 158), 'A')
B = panel(axi, (0, 0, 548, 400), (472, 342), (410, 285), 'B')
g = 24
canvas = Image.new('RGB', (A.width + B.width + g, H), 'black')
canvas.paste(A, (0, 0)); canvas.paste(B, (A.width + g, 0))
canvas.save(out, dpi=(300, 300))
print(canvas.size)
