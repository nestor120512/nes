# Reconstruye en alta resolución los elementos de la plantilla de las Jornadas (pie, ícono de la franja y logo de las Jornadas)
# a partir de la imagen original de baja resolución. Cada forma se trata como una máscara continua (0-1), que se amplía,
# se suaviza y se umbraliza para obtener curvas lisas; luego se pinta con los colores planos originales.
import sys, numpy as np
from PIL import Image, ImageFilter
SRC, OUT = sys.argv[1], sys.argv[2]
im = np.array(Image.open(SRC).convert('RGB')).astype(np.float32)
HI, AA = 8, 2      # ampliación de trabajo y submuestreo final para antialias

def smooth(alpha, hi=HI, blur=0.7):
    """alpha: máscara 0-1 en baja resolución -> máscara 0-1 lisa en resolución hi/AA."""
    h, w = alpha.shape
    big = Image.fromarray((np.clip(alpha, 0, 1) * 255).astype(np.uint8)).resize((w * hi, h * hi), Image.BICUBIC)
    big = big.filter(ImageFilter.GaussianBlur(hi * blur))
    big = big.point(lambda v: 255 if v >= 128 else 0)
    return np.array(big.resize((w * hi // AA, h * hi // AA), Image.LANCZOS)).astype(np.float32) / 255

def lum(a): return a @ np.array([0.299, 0.587, 0.114], np.float32)

# 1) Pie: onda roja (degradado horizontal), onda verde y símbolo blanco
y0 = 2150
foot = im[y0:]
color = np.clip((255 - foot.min(-1)) / 200, 0, 1)                 # 1 = zona de color, 0 = blanco
teal = np.clip((foot[:, :, 1] - 40) / (181 - 40), 0, 1) * color   # verde: canal G alto
m_color, m_teal = smooth(color), smooth(teal)
H, W = m_color.shape
t = np.linspace(0, 1, W, dtype=np.float32)[None, :, None]
RED0, RED1 = np.array([190, 22, 36], np.float32), np.array([224, 39, 66], np.float32)
red = RED0 + (RED1 - RED0) * t
tealc = np.array([56, 181, 153], np.float32)
rgb = red * (1 - m_teal[..., None]) + tealc * m_teal[..., None]
Image.fromarray(np.dstack([rgb.astype(np.uint8), (m_color * 255).astype(np.uint8)]), 'RGBA').save(OUT + '/pie_plantilla_hd.png')
print('pie', (W, H), 'y0', y0)

# 2) Ícono de la franja: blanco sobre verde -> PNG blanco con transparencia
icon = im[300:402, 500:604]
a = np.clip((lum(icon) - lum(np.array([56, 181, 153], np.float32))) / (255 - 140.6), 0, 1)
m = smooth(a, hi=12, blur=0.6)
Image.fromarray(np.dstack([np.full(m.shape + (3,), 255, np.uint8), (m * 255).astype(np.uint8)]), 'RGBA').save(OUT + '/icono_franja_hd.png')
print('icono', m.shape[::-1])

# 3) Logo de las Jornadas: búho (gris), "DAVID HERRERA XXIX" (azul claro) y "JORNADAS MÉDICAS" (azul oscuro)
logo = im[90:210, 972:1352]
h, w, _ = logo.shape
regions = [((0, 66), (34, 31, 33)), ((66, 178), (38, 157, 183)), ((178, w), (14, 49, 73))]
canvas = None
for (x0, x1), col in regions:
    sub = np.full_like(logo, 255); sub[:, x0:x1] = logo[:, x0:x1]
    a = np.clip((255 - lum(sub)) / (255 - lum(np.array(col, np.float32))), 0, 1)
    m = smooth(a, hi=10, blur=0.55)
    if canvas is None: canvas = np.zeros(m.shape + (4,), np.float32)
    for k in range(3): canvas[..., k] = canvas[..., k] * (1 - m) + col[k] * m
    canvas[..., 3] = np.maximum(canvas[..., 3], m)
rgb = canvas[..., :3] / np.maximum(canvas[..., 3:], 1e-3)
Image.fromarray(np.dstack([np.clip(rgb, 0, 255).astype(np.uint8), (canvas[..., 3] * 255).astype(np.uint8)]), 'RGBA').save(OUT + '/logo_jornadas_xxix_hd.png')
print('logo', canvas.shape[1::-1])
