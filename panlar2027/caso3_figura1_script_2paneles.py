import sys, math
from PIL import Image, ImageDraw, ImageFont
d_in, out = sys.argv[1], sys.argv[2]
W, H = 1320, 802
crops = [('9',(600,250,1160,590)), ('10',(380,230,940,570))]
labels = ['A','B']
arrows = {'A': ((40, 300), (180, 185)), 'B': ((60, 300), (205, 215))}
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 72)
def arrow(d, s, e, color, w):
    d.line([s, e], fill=color, width=w)
    ang = math.atan2(e[1]-s[1], e[0]-s[0]); L = w*4.5
    pts = [e] + [(e[0]+L*math.cos(ang+math.pi+t), e[1]+L*math.sin(ang+math.pi+t)) for t in (math.radians(28), -math.radians(28))]
    d.polygon(pts, fill=color)
panels = []
for (k, box), lab in zip(crops, labels):
    im = Image.open(f'{d_in}/{k}.jpg').convert('RGB').crop(box)
    sx, sy = W/im.width, H/im.height
    im = im.resize((W, H), Image.LANCZOS)
    dr = ImageDraw.Draw(im)
    if lab in arrows:
        s, e = arrows[lab]; arrow(dr, (s[0]*sx, s[1]*sy), (e[0]*sx, e[1]*sy), (255, 214, 0), 12)
    dr.text((28, 16), lab, fill='white', font=font, stroke_width=3, stroke_fill='black')
    panels.append(im)
g = 18
canvas = Image.new('RGB', (2*W+g, H), 'white')
for i, p in enumerate(panels): canvas.paste(p, (i*(W+g), 0))
canvas.save(out, quality=95, dpi=(300, 300)); print(canvas.size)
