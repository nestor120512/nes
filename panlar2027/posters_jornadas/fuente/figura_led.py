from PIL import Image, ImageDraw, ImageFont
I='/tmp/claude-0/-home-user-nes/3be3409c-3d45-5f3f-aa1c-5d65f222fb23/images/'
O='/tmp/claude-0/-home-user-nes/3be3409c-3d45-5f3f-aa1c-5d65f222fb23/scratchpad/led/'
a=Image.open(I+'36.jpg').convert('RGB'); b=Image.open(I+'35.jpg').convert('RGB')
da=ImageDraw.Draw(a); da.rectangle([520,150,1010,240],fill='black')
db=ImageDraw.Draw(b); db.rectangle([100,398,700,512],fill='black')
a=a.crop((430,70,1170,720)); b=b.crop((40,300,739,1000))
H=900
a=a.resize((round(a.width*H/a.height),H),Image.LANCZOS); b=b.resize((round(b.width*H/b.height),H),Image.LANCZOS)
g=14; W=a.width+b.width+g
c=Image.new('RGB',(W,H),'white'); c.paste(a,(0,0)); c.paste(b,(a.width+g,0))
d=ImageDraw.Draw(c)
try: f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',56)
except: f=ImageFont.load_default()
for x,t in ((0,'A'),(a.width+g,'B')):
    d.rectangle([x+14,14,x+84,84],fill='white'); d.text((x+26,18),t,fill='black',font=f)
c.save(O+'caso_LED_figura1.jpg',quality=95); print(c.size)
