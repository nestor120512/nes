import sys, math
from PIL import Image, ImageDraw, ImageFont
d_in, out = sys.argv[1], sys.argv[2]
W, H = 900, 545
crops = [('9',(600,250,1160,590)), ('10',(380,230,940,570)), ('12',(560,115,1100,442))]
labels = ['A','B','C']
arrows = {'A': ((40, 300), (180, 185)), 'B': ((60, 300), (205, 215)), 'C': ((95, 305), (245, 122))}
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 60)
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
    s, e = arrows[lab]; arrow(dr, (s[0]*sx, s[1]*sy), (e[0]*sx, e[1]*sy), (255, 214, 0), 9)
    dr.text((22, 12), lab, fill='white', font=font, stroke_width=3, stroke_fill='black')
    panels.append(im)
g = 14
canvas = Image.new('RGB', (3*W+2*g, H), 'white')
for i, p in enumerate(panels): canvas.paste(p, (i*(W+g), 0))
canvas.save(out, quality=95, dpi=(300, 300)); print(canvas.size)
