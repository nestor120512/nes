// Póster de reporte de caso sobre la plantilla oficial de las Jornadas (fondo con encabezado y pie de la Clínica General del Norte); versión visual 2 (una diapositiva, 90 x 120 cm, editable en PowerPoint).
// Requisitos de las Jornadas: fondo blanco, Arial, títulos 44 pt, cuerpo 32 pt, letra negra.
// Uso: node build_poster2.js contenido.js salida.pptx
const pptxgen = require('pptxgenjs');
const path = require('path');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa6');
const { execFileSync } = require('child_process');
const sizeOf = f => { const o = execFileSync('python3', ['-I', '-c', 'import sys;from PIL import Image;print(*Image.open(sys.argv[1]).size)', f]).toString().trim().split(' '); return { w: +o[0], h: +o[1] }; };

const C = require(path.resolve(process.argv[2]));
const OUT = process.argv[3];

// ---------- Diseño ----------
// Tamaño final: 70 x 100 cm. El diseño se calcula en un lienzo virtual de 90 cm de ancho
// con la misma proporción (70:100) y luego todo se escala por K al tamaño real.
const OUT_W = 27.559, OUT_H = 39.370;    // 70 x 100 cm
const W = 35.433, K = OUT_W / W, H = OUT_H / K;
const M = 1.0, GAP = 0.7;
const COLW = (W - 2 * M - GAP) / 2;
const FONT = 'Arial', BLACK = '000000';
const PRIMARY = C.primary || '1D5C63';   // círculos de íconos, línea de tiempo, bordes
const TINT = C.tint || 'E3EFEE';         // fondo del encabezado y de mensajes clave
const CARD = 'FFFFFF', BORDER = C.border || 'C9DCDA', ACCENT = C.accent || PRIMARY, STAT = C.statColor || PRIMARY;
const PT_TITLE = C.titlePt || 44, BANDH = !!C.bandHeads;
const PT_T = 44, PT_B = C.bodyPt || 32, PT_S = C.smallPt || 24, PT_R = C.refPt || PT_S;
const LH = 1.17, PAD = 0.32, HEAD = 0.95, ICON = 0.88;

function lines(text, widthIn, pt, bold) {
  const cw = pt * (bold ? 0.50 : 0.46) / 72;
  const cpl = Math.floor((widthIn - 0.15) / cw);
  let n = 0;
  for (const para of String(text).split('\n')) {
    let cur = 0, l = 1;
    for (const w of para.split(' ')) { const len = w.length + (cur ? 1 : 0); if (cur + len > cpl) { l++; cur = w.length; } else cur += len; }
    n += l;
  }
  return n;
}
const hText = (n, pt) => n * pt * LH / 72;

async function icon(name) {
  const svg = RDS.renderToStaticMarkup(React.createElement(fa[name], { color: '#FFFFFF', size: 256 }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}
const ICONS = { 'Resumen': 'FaFileLines', 'Introducción': 'FaBookOpen', 'Información del caso': 'FaClipboardUser',
  'Información de los casos': 'FaUsers', 'Tratamiento y evolución': 'FaPills', 'Manejo': 'FaPills', 'Discusión': 'FaComments',
  'Conclusión': 'FaCircleCheck', 'Mensajes clave': 'FaLightbulb', 'Referencias': 'FaBookMedical', 'Cronología': 'FaClock',
  'Tabla': 'FaTable', 'Figura': 'FaImage', 'Gráfico': 'FaChartLine' };

(async () => {
  const icons = {};
  for (const [k, v] of Object.entries(ICONS)) icons[k] = await icon(v);

  const pres = new pptxgen();
  pres.defineLayout({ name: 'POSTER_70x100', width: OUT_W, height: OUT_H });
  pres.layout = 'POSTER_70x100';
  pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
  pres.title = C.title;
  const raw = pres.addSlide();
  raw.background = C.bgImage ? { path: C.bgImage } : { color: 'FFFFFF' };
  // Escala todas las medidas (pulgadas y puntos) por K
  const LEN = new Set(['x', 'y', 'w', 'h', 'fontSize', 'rectRadius', 'paraSpaceAfter', 'charSpacing', 'indent', 'blur', 'offset']);
  function sc(o) {
    if (Array.isArray(o)) return o.map(sc);
    if (!o || typeof o !== 'object') return o;
    const r = {};
    for (const [k, v] of Object.entries(o)) {
      if (LEN.has(k) && typeof v === 'number') r[k] = v * K;
      else if ((k === 'colW' || k === 'rowH') && Array.isArray(v)) r[k] = v.map(n => n * K);
      else if (k === 'margin') r[k] = Array.isArray(v) ? v.map(n => n * K) : v * K;
      else if (k === 'line' && v && typeof v === 'object') r[k] = Object.assign({}, v, v.width ? { width: v.width * K } : {});
      else if (k === 'border' && v && typeof v === 'object' && !Array.isArray(v)) r[k] = Object.assign({}, v, v.pt ? { pt: v.pt * K } : {});
      else if (k === 'options' || k === 'shadow' || k === 'bullet') r[k] = sc(v);
      else r[k] = v;
    }
    return r;
  }
  const runs = v => Array.isArray(v) ? v.map(r => (r && typeof r === 'object' && 'text' in r) ? Object.assign({}, r, { options: sc(r.options || {}) }) : r) : v;
  const s = {
    addText: (t, o) => raw.addText(runs(t), sc(o)),
    addShape: (sh, o) => raw.addShape(sh, sc(o)),
    addImage: o => raw.addImage(sc(o)),
    addTable: (rows, o) => raw.addTable(rows.map(r => r.map(c => Object.assign({}, c, { options: sc(c.options || {}) }))), sc(o)),
    addChart: (ty, d, o) => raw.addChart(ty, d, sc(o)),
  };

  const card = (x, y, w, h, name, fill = CARD, edge) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.25,
    fill: { color: fill }, line: edge || { color: BORDER, width: 1.5 },
    shadow: { type: 'outer', color: '7F9C99', opacity: 0.25, blur: 8, offset: 3, angle: 90 }, objectName: 'Tarjeta ' + name });
  const headRow = (x, y, w, title, iconKey) => {
    if (BANDH) {
      // Franja de color en la parte superior de la tarjeta, con título blanco
      const bx = x - PAD, by = y - PAD, bw = w + 2 * PAD, bh = PAD + HEAD + 0.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: bx, y: by, w: bw, h: bh, rectRadius: 0.25, fill: { color: PRIMARY }, line: { color: PRIMARY },
        objectName: 'Franja ' + title });
      s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by + bh - 0.3, w: bw, h: 0.3, fill: { color: PRIMARY }, line: { color: PRIMARY },
        objectName: 'Franja base ' + title });
      s.addShape(pres.shapes.OVAL, { x, y: by + (bh - ICON) / 2, w: ICON, h: ICON, fill: { color: ACCENT }, line: { color: 'FFFFFF', width: 2 },
        objectName: 'Círculo ' + title });
      s.addImage({ data: icons[iconKey] || icons['Resumen'], x: x + ICON * 0.24, y: by + (bh - ICON) / 2 + ICON * 0.24, w: ICON * 0.52, h: ICON * 0.52,
        altText: '', objectName: 'Ícono ' + title });
      s.addText(title, { x: x + ICON + 0.3, y: by, w: w - ICON - 0.3, h: bh, fontFace: FONT, fontSize: PT_T, bold: true, color: 'FFFFFF',
        valign: 'middle', margin: 0, isTextBox: true, objectName: 'Sección ' + title });
      return;
    }
    s.addShape(pres.shapes.OVAL, { x, y: y + (HEAD - ICON) / 2, w: ICON, h: ICON, fill: { color: PRIMARY }, line: { color: PRIMARY },
      objectName: 'Círculo ' + title });
    s.addImage({ data: icons[iconKey] || icons['Resumen'], x: x + ICON * 0.24, y: y + (HEAD - ICON) / 2 + ICON * 0.24, w: ICON * 0.52, h: ICON * 0.52,
      altText: '', objectName: 'Ícono ' + title });
    s.addText(title, { x: x + ICON + 0.3, y, w: w - ICON - 0.3, h: HEAD, fontFace: FONT, fontSize: PT_T, bold: true, color: BLACK,
      valign: 'middle', margin: 0, isTextBox: true, objectName: 'Sección ' + title });
  };

  // ---------- Encabezado ----------
  const Y0 = C.topY || M;   // con plantilla, el encabezado propio empieza debajo de la franja de la plantilla
  // Logos de las instituciones participantes en el espacio blanco del encabezado de la plantilla
  if (C.footerImg) {
    // Pie de la plantilla reconstruido en alta resolución (onda roja y verde con el símbolo)
    const F = C.footerImg;
    s.addImage({ path: F.path, x: 0, y: F.y, w: W, h: F.h, altText: 'Pie de la plantilla', objectName: 'Pie plantilla' });
  }
  if (C.templateBand) {
    // Franja verde "Medicina integrada" de la plantilla, redibujada como forma y texto editables
    const T = C.templateBand;
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: T.y, w: W, h: T.h, fill: { color: T.color }, line: { color: T.color }, objectName: 'Franja plantilla' });
    if (T.icon) s.addImage({ path: T.icon.path, x: T.icon.x, y: T.icon.y, w: T.icon.w, h: T.icon.h, altText: 'Ícono Medicina integrada', objectName: 'Ícono franja' });
    for (const [k, t] of [['título', T.title], ['subtítulo', T.subtitle]]) if (t)
      s.addText(t.text, { x: t.x, y: t.y, w: t.w, h: t.h, fontFace: FONT, fontSize: t.pt, bold: !!t.bold, color: 'FFFFFF', valign: 'middle', margin: 0,
        isTextBox: true, objectName: 'Franja ' + k });
  }
  if (C.logoRow) {
    // Fila única de logos centrada en el encabezado blanco, con divisores verticales como en la plantilla
    const R = C.logoRow; let items = R.items.map(it => { const d = sizeOf(it.f); return { f: it.f, h: it.h, w: it.h * d.w / d.h }; });
    let gap = R.gap || 1.0, totalW = items.reduce((a, it) => a + it.w, 0) + (items.length - 1) * 2 * gap;
    const fit = Math.min(1, (W - 2.0) / totalW);   // si no caben, se reduce toda la fila proporcionalmente
    if (fit < 1) { items = items.map(it => ({ f: it.f, h: it.h * fit, w: it.w * fit })); gap *= fit; totalW *= fit; }
    let lx = (W - totalW) / 2;
    items.forEach((it, k) => {
      s.addImage({ path: it.f, x: lx, y: R.cy - it.h / 2, w: it.w, h: it.h, altText: path.basename(it.f, '.png').replace(/_/g, ' '), objectName: 'Logo ' + (k + 1) });
      lx += it.w;
      if (k < items.length - 1) {
        s.addShape(pres.shapes.LINE, { x: lx + gap, y: R.cy - (R.divH || 1.6) / 2, w: 0, h: R.divH || 1.6, line: { color: R.divColor || '6B6B69', width: 2 }, objectName: 'Divisor ' + (k + 1) });
        lx += 2 * gap;
      }
    });
  }
  if (C.bandLabel) {
    // Etiqueta del tipo de trabajo sobre la franja verde de la plantilla
    const B = C.bandLabel;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: B.x, y: B.y, w: B.w, h: B.h, rectRadius: B.h / 2, fill: { color: 'FFFFFF' }, line: { color: 'FFFFFF', width: 1 }, objectName: 'Etiqueta tipo' });
    s.addText(B.text, { x: B.x, y: B.y, w: B.w, h: B.h, fontFace: FONT, fontSize: B.pt || 30, bold: true, color: B.color || PRIMARY, align: 'center', valign: 'middle',
      margin: 0, charSpacing: 2, isTextBox: true, objectName: 'Texto etiqueta' });
  }
  if (C.headerLogos) {
    const HL = C.headerLogos;
    for (const side of ['left', 'right']) {
      const files = HL[side] || []; if (!files.length) continue;
      const area = HL[side + 'Area'];   // [x0, x1] en pulgadas virtuales
      const dims = files.map(f => { const d = sizeOf(f); return { f, w: HL.h * d.w / d.h, h: HL.h }; });
      const totalW = dims.reduce((a, d) => a + d.w, 0) + (dims.length - 1) * (HL.gap || 0.5);
      let lx = area[0] + (area[1] - area[0] - totalW) / 2;
      dims.forEach((d, k) => { s.addImage({ path: d.f, x: lx, y: HL.cy - d.h / 2, w: d.w, h: d.h,
        altText: path.basename(d.f, '.png').replace(/_/g, ' '), objectName: 'Logo encabezado ' + side + ' ' + (k + 1) }); lx += d.w + (HL.gap || 0.5); });
    }
  }
  const BAND = !!(C.logos && C.logoBand);
  const LOGO = (BAND || C.noLogos) ? -0.9 : (C.logos ? (C.logoW || 6.2) : 3.4);
  const hx = M, hw = W - 2 * M, tx = hx + LOGO + 0.9, tw = hw - 2 * (LOGO + 0.9);
  const tl = lines(C.title, tw, PT_TITLE, true);
  const al = lines(C.authors, tw, PT_B), fl = lines(C.affiliations, tw, PT_S);
  const pillH = C.noPill ? 0 : 0.75, pillGap = C.noPill ? 0 : 0.3;
  const kwW = hw - 1.0, kwTxt = 'Palabras clave: ' + C.keywords, kl = lines(kwTxt, kwW, PT_B);
  const bandH = BAND ? (C.bandH || 2.6) : 0;
  let topH = (BAND ? 0.3 + bandH + 0.45 : 0.5) + pillH + pillGap + hText(tl, PT_TITLE) + 0.3 + hText(al, PT_B) + 0.12 + hText(fl, PT_S) + 0.4;
  if (C.logos && C.minTopH) topH = Math.max(topH, C.minTopH);
  const headerH = topH + hText(kl, PT_B) + 0.5;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: hx, y: Y0, w: hw, h: headerH, rectRadius: 0.35, fill: { color: TINT }, line: { color: TINT },
    objectName: 'Fondo encabezado' });
  if (BAND) {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: hx + 0.3, y: Y0 + 0.3, w: hw - 0.6, h: bandH, rectRadius: 0.25, fill: { color: 'FFFFFF' },
      line: { color: BORDER, width: 1 }, objectName: 'Franja de logos' });
    const files = C.logos.band, lh = C.logoH || 1.8, inner = hw - 0.6 - 2 * 1.0;
    const dims = files.map(f => { const d = sizeOf(f); return { f, w: lh * d.w / d.h, h: lh }; });
    const free = inner - dims.reduce((a, d) => a + d.w, 0), step = free / Math.max(dims.length - 1, 1);
    let lx = hx + 0.3 + 1.0;
    dims.forEach((d, k) => { s.addImage({ path: d.f, x: lx, y: Y0 + 0.3 + (bandH - d.h) / 2, w: d.w, h: d.h,
      altText: path.basename(d.f, '.png').replace(/_/g, ' '), objectName: 'Logo ' + (k + 1) }); lx += d.w + step; });
  } else if (C.logos) {
    // Logos reales: un panel blanco por lado, con los logos apilados y centrados
    [['left', hx + 0.45], ['right', hx + hw - 0.45 - LOGO]].forEach(([side, lx]) => {
      const files = C.logos[side] || []; if (!files.length) return;
      const ph = topH - 0.7, py = Y0 + 0.35;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: lx, y: py, w: LOGO, h: ph, rectRadius: 0.25, fill: { color: 'FFFFFF' },
        line: { color: BORDER, width: 1 }, objectName: 'Panel logos ' + side });
      const pad = 0.3, slotH = (ph - pad * (files.length + 1)) / files.length;
      files.forEach((f, k) => {
        const d = sizeOf(f); let w = LOGO - 2 * pad, h = w * d.h / d.w;
        if (h > slotH) { h = slotH; w = h * d.w / d.h; }
        s.addImage({ path: f, x: lx + (LOGO - w) / 2, y: py + pad + k * (slotH + pad) + (slotH - h) / 2, w, h,
          altText: path.basename(f, '.png').replace(/_/g, ' '), objectName: 'Logo ' + side + ' ' + (k + 1) });
      });
    });
  } else if (!C.noLogos) {
  for (const [i, lx] of [[0, hx + 0.45], [1, hx + hw - 0.45 - LOGO]]) {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: lx, y: Y0 + (topH - LOGO) / 2, w: LOGO, h: LOGO, rectRadius: 0.2,
      fill: { color: 'FFFFFF' }, line: { color: PRIMARY, width: 1.5, dashType: 'dash' }, objectName: 'Espacio logo ' + (i + 1) });
    s.addText('Logo', { x: lx, y: Y0 + (topH - LOGO) / 2, w: LOGO, h: LOGO, fontFace: FONT, fontSize: PT_S, color: BLACK,
      align: 'center', valign: 'middle', margin: 0, isTextBox: true, objectName: 'Texto logo ' + (i + 1) });
  }
  }
  let y = Y0 + (BAND ? 0.3 + bandH + 0.45 : 0.5);
  const pillW = C.label && C.label.length > 16 ? 7.2 : 5.6;
  if (!C.noPill) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: tx + (tw - pillW) / 2, y, w: pillW, h: pillH, rectRadius: 0.37, fill: { color: 'FFFFFF' },
    line: { color: PRIMARY, width: 2 }, objectName: 'Etiqueta tipo' });
  s.addText(C.label || 'REPORTE DE CASO', { x: tx + (tw - pillW) / 2, y, w: pillW, h: pillH, fontFace: FONT, fontSize: PT_S, bold: true,
    color: BLACK, align: 'center', valign: 'middle', margin: 0, charSpacing: 2, isTextBox: true, objectName: 'Texto etiqueta' });
  }
  y += pillH + pillGap;
  s.addText(C.title, { x: tx, y, w: tw, h: hText(tl, PT_TITLE) + 0.05, fontFace: FONT, fontSize: PT_TITLE, bold: true, color: C.titleColor || BLACK,
    align: 'center', valign: 'middle', margin: 0, isTextBox: true, objectName: 'Título' });
  y += hText(tl, PT_TITLE) + 0.3;
  s.addText(C.authors, { x: tx, y, w: tw, h: hText(al, PT_B), fontFace: FONT, fontSize: PT_B, color: BLACK, align: 'center',
    margin: 0, isTextBox: true, objectName: 'Autores' });
  y += hText(al, PT_B) + 0.12;
  s.addText(C.affiliations, { x: tx, y, w: tw, h: hText(fl, PT_S), fontFace: FONT, fontSize: PT_S, color: BLACK, align: 'center',
    margin: 0, isTextBox: true, objectName: 'Filiaciones' });
  // Palabras clave en una franja blanca dentro del encabezado
  const ky = Y0 + topH;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: hx + 0.3, y: ky - 0.1, w: hw - 0.6, h: hText(kl, PT_B) + 0.35, rectRadius: 0.18,
    fill: { color: 'FFFFFF' }, line: { color: BORDER, width: 1 }, objectName: 'Fondo palabras clave' });
  s.addText([{ text: 'Palabras clave: ', options: { bold: true } }, { text: C.keywords }], { x: hx + 0.5, y: ky + 0.05, w: kwW, h: hText(kl, PT_B),
    fontFace: FONT, fontSize: PT_B, color: BLACK, valign: 'middle', margin: 0, isTextBox: true, objectName: 'Palabras clave' });
  y = Y0 + headerH + 0.45;

  // Cifras destacadas (opcional)
  if (C.stats) {
    const n = C.stats.length, g = 0.5, tw2 = (W - 2 * M - g * (n - 1)) / n, bigPt = C.statPt || 64, lblPt = 26;
    const ml = Math.max(...C.stats.map(st => lines(st.small, tw2 - 0.5, lblPt)));
    const th = 0.3 + bigPt * 1.15 / 72 + 0.05 + hText(ml, lblPt) + 0.3;
    C.stats.forEach((st, i) => {
      const x = M + i * (tw2 + g);
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: tw2, h: th, rectRadius: 0.25, fill: { color: 'FFFFFF' }, line: { color: PRIMARY, width: 3 },
        shadow: { type: 'outer', color: '7F9C99', opacity: 0.25, blur: 8, offset: 3, angle: 90 }, objectName: 'Cifra ' + (i + 1) });
      s.addText(st.big, { x: x + 0.2, y: y + 0.3, w: tw2 - 0.4, h: bigPt * 1.15 / 72, fontFace: FONT, fontSize: bigPt, bold: true, color: STAT,
        align: 'center', valign: 'middle', margin: 0, isTextBox: true, objectName: 'Cifra valor ' + (i + 1) });
      s.addText(st.small, { x: x + 0.25, y: y + 0.35 + bigPt * 1.15 / 72, w: tw2 - 0.5, h: hText(ml, lblPt), fontFace: FONT, fontSize: lblPt, color: BLACK,
        align: 'center', valign: 'top', margin: 0, isTextBox: true, objectName: 'Cifra texto ' + (i + 1) });
    });
    y += th + 0.5;
  }

  // Figura a ancho completo (opcional)
  for (const f of (C.full || [])) {
    const d = sizeOf(f.img); const fw = W - 2 * M - 2 * PAD; let fh = fw * d.h / d.w; if (f.maxH) fh = Math.min(fh, f.maxH);
    const iw = fh * d.w / d.h; const ch = hText(lines(f.caption, fw, PT_S), PT_S);
    card(M, y, W - 2 * M, PAD + fh + 0.2 + ch + PAD, f.name || 'Figura');
    s.addImage({ path: f.img, x: M + (W - 2 * M - iw) / 2, y: y + PAD, w: iw, h: fh, altText: f.caption, objectName: f.name || 'Figura' });
    s.addText(f.caption, { x: M + PAD, y: y + PAD + fh + 0.2, w: fw, h: ch, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0,
      isTextBox: true, objectName: (f.name || 'Figura') + ' leyenda' });
    y += PAD + fh + 0.2 + ch + PAD + 0.55;
  }

  // Línea de tiempo (opcional)
  if (C.timeline) {
    const n = C.timeline.length, iw = W - 2 * M - 2 * PAD, slot = iw / n, tpt = 24;
    const maxL = Math.max(...C.timeline.map(e => lines(e.text, slot - 0.3, tpt)));
    const bodyH = 0.75 + 0.55 + 0.25 + hText(maxL, tpt);
    const th = PAD + HEAD + 0.3 + bodyH + PAD;
    card(M, y, W - 2 * M, th, 'Cronología');
    headRow(M + PAD, y + PAD, iw, 'Cronología', 'Cronología');
    const ly = y + PAD + HEAD + 0.3 + 0.75 + 0.275;
    s.addShape(pres.shapes.LINE, { x: M + PAD + slot / 2, y: ly, w: iw - slot, h: 0, line: { color: PRIMARY, width: 4 }, objectName: 'Línea de tiempo' });
    C.timeline.forEach((e, i) => {
      const cx = M + PAD + slot * i + slot / 2;
      s.addText(e.date, { x: cx - slot / 2 + 0.1, y: y + PAD + HEAD + 0.3, w: slot - 0.2, h: 0.7, fontFace: FONT, fontSize: 26, bold: true,
        color: BLACK, align: 'center', valign: 'bottom', margin: 0, isTextBox: true, objectName: 'Fecha ' + (i + 1) });
      s.addShape(pres.shapes.OVAL, { x: cx - 0.275, y: ly - 0.275, w: 0.55, h: 0.55, fill: { color: 'FFFFFF' }, line: { color: PRIMARY, width: 5 },
        objectName: 'Hito ' + (i + 1) });
      s.addText(e.text, { x: cx - slot / 2 + 0.15, y: ly + 0.5, w: slot - 0.3, h: hText(maxL, tpt), fontFace: FONT, fontSize: tpt,
        color: BLACK, align: 'center', valign: 'top', margin: 0, isTextBox: true, objectName: 'Evento ' + (i + 1) });
    });
    y += th + 0.55;
  }
  const TOP = y;

  // ---------- Bloques (medir y luego dibujar) ----------
  const X = col => M + col * (COLW + GAP);
  const IW = COLW - 2 * PAD;
  function runsOf(paras, IW) {
    const runs = []; let n = 0;
    paras.forEach((p, i) => {
      const parts = Array.isArray(p) ? p : [p];
      n += lines(parts.map(r => (typeof r === 'string' ? r : r[0])).join(''), IW, PT_B);
      parts.forEach((r, j) => { const last = j === parts.length - 1;
        runs.push({ text: typeof r === 'string' ? r : r[0], options: { bold: typeof r !== 'string' && !!r[1], breakLine: last && i < paras.length - 1, paraSpaceAfter: last ? 12 : 0 } }); });
    });
    return { runs, h: hText(n, PT_B) + (paras.length - 1) * 12 / 72 + 0.1 + (C.textSlack || 0) };
  }
  function build(b, geo) {
    const name = b.name || b.h || 'Bloque';
    const gx = geo ? geo.x : X(b.col), gw = geo ? geo.w : COLW, IW = gw - 2 * PAD;
    if (b.p) {
      const { runs, h } = runsOf(b.p, IW);
      const total = PAD + HEAD + 0.3 + h + PAD;
      return { h: total, draw: (y, hh = total) => { card(gx, y, gw, hh, name, b.hl ? TINT : CARD, b.hl ? { color: PRIMARY, width: 4 } : undefined); headRow(gx + PAD, y + PAD, IW, b.h, b.h);
        s.addText(runs, { x: gx + PAD, y: y + PAD + HEAD + 0.3, w: IW, h, fontFace: FONT, fontSize: PT_B, color: BLACK, valign: 'top', align: C.justify ? 'justify' : 'left',
          margin: 0, isTextBox: true, objectName: name }); } };
    }
    if (b.key) {
      const n = b.key.reduce((a, t) => a + lines(t, IW - 0.6, PT_B), 0);
      const bh = hText(n, PT_B) + b.key.length * 12 / 72;
      const total = PAD + HEAD + 0.3 + bh + PAD;
      return { h: total, draw: (y, hh = total) => { card(gx, y, gw, hh, 'Mensajes clave', TINT); headRow(gx + PAD, y + PAD, IW, 'Mensajes clave', 'Mensajes clave');
        s.addText(b.key.map((t, i) => ({ text: t, options: { bullet: { indent: 32 }, breakLine: i < b.key.length - 1, paraSpaceAfter: 12 } })),
          { x: gx + PAD, y: y + PAD + HEAD + 0.3, w: IW, h: bh, fontFace: FONT, fontSize: PT_B, color: BLACK, valign: 'top', margin: 0,
            isTextBox: true, objectName: 'Mensajes clave' }); } };
    }
    if (b.img) {
      const d = sizeOf(b.img); let ih = IW * d.h / d.w; if (b.maxH && ih > b.maxH) ih = b.maxH; const iw = ih * d.w / d.h;
      const ch = hText(lines(b.caption, IW, PT_S), PT_S);
      const total = PAD + ih + 0.2 + ch + PAD;
      return { h: total, draw: (y, hh = total) => { card(gx, y, gw, hh, name);
        s.addImage({ path: b.img, x: gx + PAD + (IW - iw) / 2, y: y + PAD, w: iw, h: ih, altText: b.caption, objectName: name });
        s.addText(b.caption, { x: gx + PAD, y: y + PAD + ih + 0.2, w: IW, h: ch, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0,
          isTextBox: true, objectName: name + ' leyenda' }); } };
    }
    if (b.table) {
      const t = b.table, pt = t.pt || 26, widths = t.colW.map(f => f * IW);
      const rows = [t.header.map(c => ({ text: c, options: { bold: true, fill: { color: BANDH ? ACCENT : TINT }, color: BANDH ? 'FFFFFF' : BLACK } })), ...t.rows.map((r, ri) => r.map(c => { const o = typeof c === 'string' ? { text: c } : c;
        const base = t.tiles ? (o.fill ? {} : { fill: { color: ri % 2 ? 'F4F7FB' : 'FFFFFF' } }) : (ri % 2 ? { fill: { color: 'F6FAF9' } } : {});
        return { text: o.text, options: Object.assign(base, o.bold ? { bold: true } : {}, o.color ? { color: o.color } : {}, o.fill ? { fill: { color: o.fill } } : {},
          o.align ? { align: o.align } : {}, o.size ? { fontSize: o.size } : {}) }; }))];
      if (t.tiles) rows[0] = t.header.map((c, i) => ({ text: c, options: { bold: true, fill: { color: PRIMARY }, color: 'FFFFFF', align: i ? 'center' : 'left' } }));
      let tb = 0; rows.forEach((r, ri) => { const m = Math.max(...r.map((c, i) => lines(c.text, widths[i] - 0.35, pt))); tb += t.rowH ? t.rowH[ri] : hText(m, pt) + 0.14; });
      const titleTxt = t.title.replace(/^Tabla \d+\.\s*/, ''); const lbl = (t.title.match(/^Tabla \d+/) || ['Tabla'])[0];
      const nh = t.note ? hText(lines(t.note, IW, PT_S), PT_S) + 0.15 : 0;
      const th = hText(lines(lbl + '. ' + titleTxt, IW - ICON - 0.3, PT_T, true), PT_T);
      const head = Math.max(HEAD, th);
      const total = PAD + head + 0.3 + tb + 0.2 + nh + PAD;
      return { h: total, draw: (y, hh = total) => { card(gx, y, gw, hh, name);
        if (BANDH) headRow(gx + PAD, y + PAD, IW, lbl + '. ' + titleTxt, 'Tabla'); else {
        s.addShape(pres.shapes.OVAL, { x: gx + PAD, y: y + PAD + (HEAD - ICON) / 2, w: ICON, h: ICON, fill: { color: PRIMARY }, line: { color: PRIMARY }, objectName: 'Círculo ' + name });
        s.addImage({ data: icons['Tabla'], x: gx + PAD + ICON * 0.24, y: y + PAD + (HEAD - ICON) / 2 + ICON * 0.24, w: ICON * 0.52, h: ICON * 0.52, altText: '', objectName: 'Ícono ' + name });
        s.addText([{ text: lbl + '. ', options: { bold: true } }, { text: titleTxt, options: { bold: true } }], { x: gx + PAD + ICON + 0.3, y: y + PAD, w: IW - ICON - 0.3, h: head,
          fontFace: FONT, fontSize: PT_T, color: BLACK, valign: 'middle', margin: 0, isTextBox: true, objectName: name + ' título' }); }
        s.addTable(rows, { x: gx + PAD, y: y + PAD + head + 0.3, w: IW, colW: widths, fontFace: FONT, fontSize: pt, color: BLACK, valign: 'middle',
          border: t.tiles ? { type: 'solid', pt: 4, color: 'FFFFFF' } : { type: 'solid', pt: 1, color: BORDER }, margin: t.tiles ? [0.08, 0.16, 0.08, 0.16] : [0.06, 0.1, 0.06, 0.1],
          ...(t.rowH ? { rowH: t.rowH } : {}), objectName: name });
        if (t.note) s.addText(t.note, { x: gx + PAD, y: y + PAD + head + 0.3 + tb + 0.2, w: IW, h: nh, fontFace: FONT, fontSize: PT_S, color: BLACK,
          margin: 0, isTextBox: true, objectName: name + ' nota' }); } };
    }
    if (b.chart) {
      const c = b.chart, ch = c.h || 6.8, cap = hText(lines(c.caption, IW, PT_S), PT_S);
      const total = PAD + ch + 0.2 + cap + PAD;
      return { h: total, draw: (y, hh = total) => { card(gx, y, gw, hh, name);
        s.addChart(pres.charts.LINE, [{ name: c.series, labels: c.labels, values: c.values }], {
          x: gx + PAD, y: y + PAD, w: IW, h: ch, objectName: name, showTitle: true, title: c.title, titleFontFace: FONT, titleFontSize: PT_B,
          titleColor: BLACK, showLegend: false, chartColors: [PRIMARY], lineSize: 4, lineDataSymbol: 'circle', lineDataSymbolSize: 14,
          showValue: true, dataLabelPosition: 't', dataLabelFontSize: 20, dataLabelFontFace: FONT, dataLabelColor: BLACK, dataLabelFormatCode: '#,##0',
          catAxisLabelFontSize: 18, catAxisLabelFontFace: FONT, catAxisLabelColor: BLACK, valAxisLabelFontSize: 18, valAxisLabelFontFace: FONT,
          valAxisLabelColor: BLACK, valAxisLabelFormatCode: '#,##0', valGridLine: { color: 'D9D9D9', size: 1 }, catGridLine: { style: 'none' },
          showValAxisTitle: true, valAxisTitle: c.yTitle, valAxisTitleFontSize: 20, valAxisTitleColor: BLACK, valAxisTitleFontFace: FONT });
        s.addText(c.caption, { x: gx + PAD, y: y + PAD + ch + 0.2, w: IW, h: cap, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0,
          isTextBox: true, objectName: name + ' leyenda' }); } };
    }
    throw new Error('bloque sin tipo: ' + JSON.stringify(b).slice(0, 80));
  }
  const segs = C.segments ? C.segments.map(sg => sg.full ? { full: build(sg.full, { x: M, w: W - 2 * M }) }
    : (() => { const tw = W - 2 * M - GAP, w0 = sg.split ? tw * sg.split : COLW, w1 = sg.split ? tw - w0 : COLW;
        return { cols: [sg.left.map(b => build(b, { x: M, w: w0 })), sg.right.map(b => build(b, { x: M + w0 + GAP, w: w1 }))] }; })()) : null;
  const cols = [[], []];
  if (!segs) for (const b of C.blocks) cols[b.col].push(build(b));

  // ---------- Referencias al pie ----------
  const RW = W - 2 * M, RIW = RW - 2 * PAD, RCW = (RIW - 0.6) / 2;
  const refL = C.refs.map((r, i) => lines(`${i + 1}. ${r}`, RCW, PT_R));
  const tot = refL.reduce((a, v) => a + v, 0);
  let cut = 0, acc = 0; while (cut < C.refs.length && acc + refL[cut] <= tot / 2 + 1) { acc += refL[cut]; cut++; }
  const halves = [[0, cut], [cut, C.refs.length]];
  const rh = Math.max(...halves.map(([a, b]) => hText(refL.slice(a, b).reduce((x, v) => x + v, 0), PT_R) + (b - a) * 4 / 72)) + 0.05;
  const refH = PAD + HEAD + 0.2 + rh + PAD;
  const refTop = (C.bottomY || (H - M)) - refH;
  card(M, refTop, RW, refH, 'Referencias');
  headRow(M + PAD, refTop + PAD, RIW, 'Referencias', 'Referencias');
  halves.forEach(([a, b], k) => {
    const items = C.refs.slice(a, b);
    s.addText(items.map((r, i) => ({ text: `${a + i + 1}. ${r}`, options: { breakLine: i < items.length - 1, paraSpaceAfter: 4 } })),
      { x: M + PAD + k * (RCW + 0.6), y: refTop + PAD + HEAD + 0.2, w: RCW, h: rh, fontFace: FONT, fontSize: PT_R, color: BLACK, margin: 0, align: C.justify ? 'justify' : 'left',
        valign: 'top', isTextBox: true, objectName: 'Referencias ' + (k + 1) });
  });

  // ---------- Reparto vertical ----------
  const avail = refTop - 0.55 - TOP;
  let warn = false;
  if (segs) {
    const G = 0.4;
    const segH = segs.map(sg => sg.full ? sg.full.h : Math.max(...sg.cols.map(c => c.reduce((a, it) => a + it.h, 0) + (c.length - 1) * G)));
    const used = segH.reduce((a, v) => a + v, 0);
    const between = Math.min(Math.max((avail - used) / Math.max(segs.length - 1, 1), 0.4), 1.2);
    segs.forEach((sg, k) => { if (sg.cols) console.log('  seg ' + (k + 1) + ': izq ' + sg.cols[0].reduce((a, it) => a + it.h, 0).toFixed(1) + ' / der ' + sg.cols[1].reduce((a, it) => a + it.h, 0).toFixed(1)); });
    console.log('  segmentos: ' + segH.map(v => v.toFixed(1)).join(' / ') + `; usa ${used.toFixed(1)} de ${avail.toFixed(1)} in`);
    if (used + (segs.length - 1) * 0.4 > avail) { warn = true; console.log('AVISO: el contenido no cabe'); }
    let yy = TOP;
    segs.forEach((sg, k) => {
      if (sg.full) sg.full.draw(yy);
      else sg.cols.forEach(c => { let y2 = yy; c.forEach((it, i) => { const last = i === c.length - 1;
        const hh = last ? (yy + segH[k]) - y2 : it.h; it.draw(y2, hh); y2 += it.h + G; }); });
      yy += segH[k] + between;
    });
  }
  cols.forEach((items, ci) => {
    if (segs) return;
    const used = items.reduce((a, it) => a + it.h, 0);
    const gap = Math.min(Math.max((avail - used) / Math.max(items.length - 1, 1), 0.4), 1.4);
    let yy = TOP;
    items.forEach(it => { it.draw(yy); yy += it.h + gap; });
    console.log('  alturas: ' + items.map(it => it.h.toFixed(1)).join(' / '));
    console.log(`columna ${ci + 1}: usa ${used.toFixed(1)} de ${avail.toFixed(1)} in (separación ${gap.toFixed(2)} in)`);
    if (used + (items.length - 1) * 0.4 > avail) { warn = true; console.log(`AVISO: la columna ${ci + 1} no cabe`); }
  });
  await pres.writeFile({ fileName: OUT });
  console.log((warn ? 'CON AVISOS ' : 'ok ') + OUT);
})();
