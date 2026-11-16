import sys, math
from PIL import Image, ImageDraw, ImageFont
d, out = sys.argv[1], sys.argv[2]
W, g = 2000, 16
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 64)
def arrow(dr, s, e, color, w):
    dr.line([s, e], fill=color, width=w)
    ang = math.atan2(e[1]-s[1], e[0]-s[0]); L = w*4.5
    dr.polygon([e] + [(e[0]+L*math.cos(ang+math.pi+t), e[1]+L*math.sin(ang+math.pi+t)) for t in (math.radians(28), -math.radians(28))], fill=color)
def panel(fn, lab, arrows, h):
    im = Image.open(f'{d}/{fn}').convert('RGB'); k = h / im.height
    im = im.resize((round(im.width*k), h), Image.LANCZOS); dr = ImageDraw.Draw(im)
    for s, e in arrows: arrow(dr, (s[0]*k, s[1]*k), (e[0]*k, e[1]*k), (255, 214, 0), 8)
    dr.text((22, 12), lab, fill='white', font=font, stroke_width=3, stroke_fill='black')
    return im
rows = [[('xray1.png', 'A', []), ('flank.png', 'B', [])],
        [('hand.png', 'C', [((880, 800), (1010, 625)), ((330, 1150), (480, 985))]),
         ('hands_xray.png', 'D', [((95, 145), (134, 80)), ((330, 300), (390, 228)), ((600, 140), (538, 86))])]]
built = []
for row in rows:
    ratios = [Image.open(f'{d}/{fn}').width / Image.open(f'{d}/{fn}').height for fn, _, _ in row]
    h = round((W - g*(len(row)-1)) / sum(ratios))
    ims = [panel(fn, lab, ar, h) for fn, lab, ar in row]
    R = Image.new('RGB', (W, h), 'white'); x = 0
    for i in ims: R.paste(i, (x, 0)); x += i.width + g
    built.append(R)
H = sum(r.height for r in built) + g
S = Image.new('RGB', (W, H), 'white'); y = 0
for r in built: S.paste(r, (0, y)); y += r.height + g
S.save(out, quality=95, dpi=(300, 300)); print(S.size)
