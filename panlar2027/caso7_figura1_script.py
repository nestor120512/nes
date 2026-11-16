import sys, math
from PIL import Image, ImageDraw, ImageFont
d, out = sys.argv[1], sys.argv[2]
H = 900
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 66)
def arrow(dr, s, e, color, w):
    dr.line([s, e], fill=color, width=w)
    ang = math.atan2(e[1]-s[1], e[0]-s[0]); L = w*4.5
    dr.polygon([e] + [(e[0]+L*math.cos(ang+math.pi+t), e[1]+L*math.sin(ang+math.pi+t)) for t in (math.radians(28), -math.radians(28))], fill=color)
panels = [('xray1.png', 'A', []), ('flank.png', 'B', []), ('hand.png', 'C', [((880, 800), (1010, 625)), ((330, 1150), (480, 985))])]
out_ims = []
for fn, lab, arrows in panels:
    im = Image.open(f'{d}/{fn}').convert('RGB'); k = H / im.height
    im = im.resize((round(im.width*k), H), Image.LANCZOS); dr = ImageDraw.Draw(im)
    for s, e in arrows: arrow(dr, (s[0]*k, s[1]*k), (e[0]*k, e[1]*k), (255, 214, 0), 10)
    dr.text((24, 14), lab, fill='white', font=font, stroke_width=3, stroke_fill='black')
    out_ims.append(im)
g = 16; W = sum(i.width for i in out_ims) + g*(len(out_ims)-1)
S = Image.new('RGB', (W, H), 'white'); x = 0
for i in out_ims: S.paste(i, (x, 0)); x += i.width + g
S.save(out, quality=95, dpi=(300, 300)); print(S.size)
