import sys, math
from PIL import Image, ImageDraw, ImageFont
d, out = sys.argv[1], sys.argv[2]
W, g = 2000, 16
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 64)
def arrow(dr, s, e, color=(255, 214, 0), w=8):
    dr.line([s, e], fill=color, width=w)
    ang = math.atan2(e[1]-s[1], e[0]-s[0]); L = w*4.5
    dr.polygon([e] + [(e[0]+L*math.cos(ang+math.pi+t), e[1]+L*math.sin(ang+math.pi+t)) for t in (math.radians(28), -math.radians(28))], fill=color)
def panel(fn, lab, arrows, w):
    im = Image.open(f'{d}/{fn}').convert('RGB'); k = w / im.width
    im = im.resize((w, round(im.height*k)), Image.LANCZOS); dr = ImageDraw.Draw(im)
    for s, e in arrows: arrow(dr, (s[0]*k, s[1]*k), (e[0]*k, e[1]*k))
    dr.text((22, 12), lab, fill='white', font=font, stroke_width=3, stroke_fill='black')
    return im
ra = {f: (lambda i: i.width / i.height)(Image.open(f'{d}/{f}')) for f in ('hand.png', 'hands_xray.png', 'hands_xray_oblique.png')}
# A on the left (full height); B and C stacked on the right
w = round((W - g - g*ra['hand.png']) / (1 + ra['hand.png']*(1/ra['hands_xray.png'] + 1/ra['hands_xray_oblique.png'])))
B = panel('hands_xray.png', 'B', [], w); C = panel('hands_xray_oblique.png', 'C', [], w)
H = B.height + g + C.height
A = panel('hand.png', 'A', [((880, 800), (1010, 625)), ((330, 1150), (480, 985))], W - g - w)
A = A.crop((0, 0, A.width, min(A.height, H)))
F = Image.new('RGB', (W, H), 'white')
F.paste(A, (0, (H - A.height)//2)); F.paste(B, (A.width + g, 0)); F.paste(C, (A.width + g, B.height + g))
F.save(out, quality=95, dpi=(300, 300)); print(F.size, A.size, B.size, C.size)
