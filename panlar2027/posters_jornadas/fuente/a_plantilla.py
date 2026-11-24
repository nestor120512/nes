# Convierte el contenido de un póster (formato propio) al formato con la plantilla de las Jornadas.
# Uso: python3 a_plantilla.py origen.js destino.js "LOGO1,LOGO2,..." "ETIQUETA" bodyPt refPt
import sys, re
src, dst, logos, label, body, ref = sys.argv[1:7]
s = open(src, encoding='utf-8').read()
s = s.replace("__dirname + '/../../'", "'/home/user/nes/panlar2027/'").replace("__dirname + '/../logos/'", "__dirname + '/logos/'")
H = {'clinica_general_del_norte': 2.75, 'jornadas_xxix_hd': 1.7, 'universidad_libre': 1.9, 'universidad_metropolitana': 1.6,
     'ima_reumatologia': 2.2, 'fundacion_san_martin': 1.5}
items = ['clinica_general_del_norte', 'jornadas_xxix_hd'] + logos.split(',')
row = ',\n'.join(f"    {{ f: __dirname + '/logos/logo_{k}.png', h: {H[k]} }}" for k in items)
block = f"""  // Plantilla de las Jornadas reconstruida en alta resolución: franja y textos editables, pie y logos en imágenes nítidas
  topY: 6.85, bottomY: 47.85, noLogos: true, noPill: true,
  templateBand: {{ y: 3.894, h: 2.69, color: '38B599',
    icon: {{ path: __dirname + '/logos/icono_franja_hd.png', x: 10.10, y: 4.14, w: 2.10, h: 2.08 }},
    title: {{ text: 'Medicina integrada:', x: 12.30, y: 4.22, w: 16, h: 1.12, pt: 66, bold: true }},
    subtitle: {{ text: 'Desde la prevención hasta la precisión', x: 12.30, y: 5.36, w: 16, h: 0.82, pt: 44 }} }},
  footerImg: {{ path: __dirname + '/logos/pie_plantilla_hd.png', y: 43.83, h: 6.79 }},
  logoRow: {{ cy: 2.05, gap: 1.1, divH: 2.0, items: [
{row} ] }},
  bandLabel: {{ text: '{label}', x: {26.0 if len(label) <= 16 else 25.2}, y: 4.65, w: {8.4 if len(label) <= 16 else 9.2}, h: 1.15, pt: 30 }},
  bodyPt: {body}, refPt: {ref}, smallPt: 22, justify: true, textSlack: -0.12,
  // Paleta tomada de la plantilla: azul de "Jornadas Médicas" y verde de la franja "Medicina integrada"
  primary: '0E3149', accent: '38B599', tint: 'E8F6F2', border: 'B5DDD2', statColor: 'E62C4A',
  titleColor: '0E3149', titlePt: 50, bandHeads: true,
"""
a = s.index('  logos:') if '  logos:' in s else s.index('  label:')
b = s.index('  keywords:')
head = s[:a]
head = re.sub(r"\n  label: '[^']*',", '', head)
s = head + block + s[b:]
s = re.sub(r"\n  label: '[^']*',", '', s)
open(dst, 'w', encoding='utf-8').write(s)
print('ok', dst)
