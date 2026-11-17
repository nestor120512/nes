// Póster de reporte de caso (una diapositiva, 90 x 120 cm, editable en PowerPoint).
// Requisitos de las Jornadas: fondo blanco, Arial, títulos 44 pt, cuerpo 32 pt, letra negra.
// Uso: node build_poster.js contenido.js salida.pptx
const pptxgen = require('pptxgenjs');
const path = require('path');
const sizeOf = f => { const { execFileSync } = require('child_process');
  const out = execFileSync('python3', ['-I', '-c', 'import sys;from PIL import Image;print(*Image.open(sys.argv[1]).size)', f]).toString().trim().split(' ');
  return { w: +out[0], h: +out[1] }; };

const C = require(path.resolve(process.argv[2]));
const OUT = process.argv[3];

const W = 35.433, H = 47.244;            // 90 x 120 cm
const M = 1.0, GAP = 0.8;                // margen y separación entre columnas
const COLW = (W - 2 * M - GAP) / 2;
const FONT = 'Arial', BLACK = '000000';
const TINT = C.tint || 'DCEAE7';         // fondo suave de los encabezados de sección
const PT_T = 44, PT_B = 32, PT_S = 24;   // título, cuerpo, notas/leyendas/referencias
const LH = 1.17;                          // interlineado aproximado de PowerPoint

// Estimación de líneas con ajuste por palabras (ancho medio de Arial ≈ 0,52 em).
function lines(text, widthIn, pt, bold) {
  const cw = pt * (bold ? 0.51 : 0.47) / 72;
  const cpl = Math.floor((widthIn - 0.2) / cw);
  let n = 0;
  for (const para of String(text).split('\n')) {
    let cur = 0, l = 1;
    for (const w of para.split(' ')) {
      const len = w.length + (cur ? 1 : 0);
      if (cur + len > cpl) { l++; cur = w.length; } else cur += len;
    }
    n += l;
  }
  return n;
}
const hText = (n, pt) => n * pt * LH / 72;

const pres = new pptxgen();
pres.defineLayout({ name: 'POSTER_90x120', width: W, height: H });
pres.layout = 'POSTER_90x120';
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
pres.title = C.title;
const s = pres.addSlide();
s.background = { color: 'FFFFFF' };

// ---------- Encabezado ----------
let y = M;
const tl = lines(C.title, W - 2 * M, PT_T, true);
s.addText(C.title, { x: M, y, w: W - 2 * M, h: hText(tl, PT_T) + 0.3, fontFace: FONT, fontSize: PT_T, bold: true,
  color: BLACK, align: 'center', valign: 'middle', margin: 0, isTextBox: true, objectName: 'Título' });
y += hText(tl, PT_T) + 0.45;
s.addText(C.authors, { x: M, y, w: W - 2 * M, h: hText(lines(C.authors, W - 2 * M, PT_B), PT_B) + 0.1, fontFace: FONT,
  fontSize: PT_B, color: BLACK, align: 'center', margin: 0, isTextBox: true, objectName: 'Autores' });
y += hText(lines(C.authors, W - 2 * M, PT_B), PT_B) + 0.2;
const affH = hText(lines(C.affiliations, W - 2 * M, PT_S), PT_S);
s.addText(C.affiliations, { x: M, y, w: W - 2 * M, h: affH + 0.1, fontFace: FONT, fontSize: PT_S, color: BLACK,
  align: 'center', margin: 0, isTextBox: true, objectName: 'Filiaciones' });
y += affH + 0.5;
// Palabras clave en una franja suave
const kwRuns = [{ text: 'Palabras clave: ', options: { bold: true } }, { text: C.keywords }];
const kwH = hText(lines('Palabras clave: ' + C.keywords, W - 2 * M - 0.8, PT_B), PT_B) + 0.5;
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: W - 2 * M, h: kwH, fill: { color: 'F2F2F2' }, line: { color: 'F2F2F2' },
  rectRadius: 0.15, objectName: 'Fondo palabras clave' });
s.addText(kwRuns, { x: M + 0.4, y, w: W - 2 * M - 0.8, h: kwH, fontFace: FONT, fontSize: PT_B, color: BLACK,
  valign: 'middle', margin: 0, isTextBox: true, objectName: 'Palabras clave' });
y += kwH + 0.6;
for (const f of (C.full || [])) {
  const d = sizeOf(f.img); const fw = W - 2 * M; const fh = Math.min(fw * d.h / d.w, f.maxH || 99); const iw = fh * d.w / d.h;
  s.addImage({ path: f.img, x: M + (fw - iw) / 2, y, w: iw, h: fh, altText: f.caption, objectName: f.name || 'Figura' });
  y += fh + 0.15;
  const ch = hText(lines(f.caption, fw, PT_S), PT_S) + 0.1;
  s.addText(f.caption, { x: M, y, w: fw, h: ch, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0, isTextBox: true,
    objectName: (f.name || 'Figura') + ' leyenda' });
  y += ch + 0.6;
}
const TOP = y;

// ---------- Columnas (dos pasadas: medir y luego repartir el espacio) ----------
const cols = [[], []];   // cada bloque: { h, draw(y) }
const X = col => M + col * (COLW + GAP);
function header(col, title) {
  const h = 0.95;
  return { h, gapAfter: 0.3, draw: y => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: X(col), y, w: COLW, h, fill: { color: TINT }, line: { color: TINT },
      rectRadius: 0.12, objectName: 'Fondo ' + title });
    s.addText(title, { x: X(col) + 0.3, y, w: COLW - 0.6, h, fontFace: FONT, fontSize: PT_T, bold: true, color: BLACK,
      valign: 'middle', margin: 0, isTextBox: true, objectName: 'Sección ' + title }); } };
}
function paragraphs(col, paras, name, pt = PT_B) {
  const runs = []; let n = 0;
  paras.forEach((p, i) => {
    const parts = Array.isArray(p) ? p : [p];
    n += lines(parts.map(r => (typeof r === 'string' ? r : r[0])).join(''), COLW, pt);
    parts.forEach((r, j) => {
      const text = typeof r === 'string' ? r : r[0];
      const last = j === parts.length - 1;
      runs.push({ text, options: { bold: typeof r !== 'string' && !!r[1], breakLine: last && i < paras.length - 1, paraSpaceAfter: last ? 10 : 0 } });
    });
  });
  const h = hText(n, pt) + (paras.length - 1) * 10 / 72 + 0.15;
  return { h, gapAfter: 0.5, draw: y => s.addText(runs, { x: X(col), y, w: COLW, h, fontFace: FONT, fontSize: pt, color: BLACK,
    valign: 'top', margin: 0, isTextBox: true, objectName: name }) };
}
function image(col, file, caption, name) {
  const d = sizeOf(file); const ih = COLW * d.h / d.w;
  const ch = hText(lines(caption, COLW, PT_S), PT_S) + 0.1;
  return { h: ih + 0.15 + ch, gapAfter: 0.5, draw: y => {
    s.addImage({ path: file, x: X(col), y, w: COLW, h: ih, altText: caption, objectName: name });
    s.addText(caption, { x: X(col), y: y + ih + 0.15, w: COLW, h: ch, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0,
      isTextBox: true, objectName: name + ' leyenda' }); } };
}
function table(col, t, name) {
  const pt = t.pt || 26;
  const widths = t.colW.map(f => f * COLW);
  const rows = [t.header.map(c => ({ text: c, options: { bold: true, fill: { color: TINT } } })), ...t.rows.map(r => r.map(c => ({ text: c })))];
  let th = 0, tb = 0, nh = 0;
  if (t.title) th = hText(lines(t.title, COLW, PT_B, true), PT_B) + 0.1;
  rows.forEach(r => { const m = Math.max(...r.map((c, i) => lines(c.text, widths[i] - 0.16, pt))); tb += hText(m, pt) + 0.09; });
  if (t.note) nh = hText(lines(t.note, COLW, PT_S), PT_S) + 0.1;
  return { h: th + 0.1 + nh + 0.1 + tb, gapAfter: 0.5, draw: y => {
    if (t.title) s.addText(t.title, { x: X(col), y, w: COLW, h: th, fontFace: FONT, fontSize: PT_B, bold: true, color: BLACK,
      margin: 0, isTextBox: true, objectName: name + ' título' });
    if (t.note) s.addText(t.note, { x: X(col), y: y + th + 0.05, w: COLW, h: nh, fontFace: FONT, fontSize: PT_S,
      color: BLACK, margin: 0, isTextBox: true, objectName: name + ' nota' });
    s.addTable(rows, { x: X(col), y: y + th + 0.1 + nh + 0.1, w: COLW, colW: widths, fontFace: FONT, fontSize: pt, color: BLACK, valign: 'middle',
      border: { type: 'solid', pt: 1, color: 'A6A6A6' }, margin: [0.05, 0.08, 0.05, 0.08], objectName: name });
  } };
}
function chart(col, c, name) {
  const ch = c.h || 6.5;
  const cap = hText(lines(c.caption, COLW, PT_S), PT_S) + 0.1;
  return { h: ch + 0.15 + cap, gapAfter: 0.5, draw: y => {
    s.addChart(pres.charts.LINE, [{ name: c.series, labels: c.labels, values: c.values }], {
      x: X(col), y, w: COLW, h: ch, objectName: name, showTitle: true, title: c.title, titleFontFace: FONT, titleFontSize: PT_B,
      titleColor: BLACK, showLegend: false, chartColors: [c.color || '1F6F68'], lineSize: 4, lineDataSymbol: 'circle',
      lineDataSymbolSize: 14, showValue: true, dataLabelPosition: 't', dataLabelFontSize: 20, dataLabelFontFace: FONT,
      dataLabelColor: BLACK, dataLabelFormatCode: '#,##0', catAxisLabelFontSize: 18, catAxisLabelFontFace: FONT,
      catAxisLabelColor: BLACK, valAxisLabelFontSize: 18, valAxisLabelFontFace: FONT, valAxisLabelColor: BLACK,
      valAxisLabelFormatCode: '#,##0', valGridLine: { color: 'D9D9D9', size: 1 }, catGridLine: { style: 'none' },
      showValAxisTitle: true, valAxisTitle: c.yTitle, valAxisTitleFontSize: 20, valAxisTitleColor: BLACK, valAxisTitleFontFace: FONT });
    s.addText(c.caption, { x: X(col), y: y + ch + 0.15, w: COLW, h: cap, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0,
      isTextBox: true, objectName: name + ' leyenda' }); } };
}
function keyMsgs(col, items, name) {
  const pad = 0.4, iw = COLW - 2 * pad;
  const n = items.reduce((a, it) => a + lines(it, iw - 0.5, PT_B), 0);
  const bh = hText(n, PT_B) + items.length * 10 / 72;
  const h = pad + 0.95 + 0.25 + bh + pad;
  return { h, gapAfter: 0.5, draw: y => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: X(col), y, w: COLW, h, fill: { color: 'EEF5F3' }, line: { color: TINT, width: 2 },
      rectRadius: 0.2, objectName: 'Fondo ' + name });
    s.addText(name, { x: X(col) + pad, y: y + pad, w: iw, h: 0.95, fontFace: FONT, fontSize: PT_T, bold: true, color: BLACK,
      valign: 'middle', margin: 0, isTextBox: true, objectName: 'Título ' + name });
    s.addText(items.map((it, i) => ({ text: it, options: { bullet: { indent: 30 }, breakLine: i < items.length - 1, paraSpaceAfter: 10 } })),
      { x: X(col) + pad, y: y + pad + 1.2, w: iw, h: bh, fontFace: FONT, fontSize: PT_B, color: BLACK, valign: 'top', margin: 0,
        isTextBox: true, objectName: name }); } };
}
// Bloques: un encabezado y su contenido forman un grupo indivisible
for (const b of C.blocks) {
  const g = [];
  if (b.h) g.push(header(b.col, b.h));
  if (b.p) g.push(paragraphs(b.col, b.p, b.name || b.h || 'Texto'));
  if (b.img) g.push(image(b.col, b.img, b.caption, b.name || 'Figura'));
  if (b.table) g.push(table(b.col, b.table, b.name || 'Tabla'));
  if (b.chart) g.push(chart(b.col, b.chart, b.name || 'Gráfico'));
  if (b.key) g.push(keyMsgs(b.col, b.key, 'Mensajes clave'));
  cols[b.col].push(g);
}

// ---------- Referencias, ancladas al pie ----------
const refW = W - 2 * M;
const refRuns = C.refs.map((r, i) => ({ text: `${i + 1}. ${r}`, options: { breakLine: i < C.refs.length - 1, paraSpaceAfter: 4 } }));
const rn = C.refs.reduce((a, r, i) => a + lines(`${i + 1}. ${r}`, refW, PT_S), 0);
const rh = hText(rn, PT_S) + C.refs.length * 4 / 72 + 0.1;
const refTop = H - M - rh - 1.25;
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: refTop, w: refW, h: 0.95, fill: { color: TINT }, line: { color: TINT },
  rectRadius: 0.12, objectName: 'Fondo Referencias' });
s.addText('Referencias', { x: M + 0.3, y: refTop, w: refW - 0.6, h: 0.95, fontFace: FONT, fontSize: PT_T, bold: true,
  color: BLACK, valign: 'middle', margin: 0, isTextBox: true, objectName: 'Sección Referencias' });
s.addText(refRuns, { x: M, y: refTop + 1.25, w: refW, h: rh, fontFace: FONT, fontSize: PT_S, color: BLACK, margin: 0, valign: 'top',
  isTextBox: true, objectName: 'Referencias' });

// Reparto del espacio sobrante entre los grupos de cada columna
const avail = refTop - 0.7 - TOP;
cols.forEach((groups, ci) => {
  const used = groups.reduce((a, g) => a + g.reduce((b, it, k) => b + it.h + (k < g.length - 1 ? it.gapAfter : 0), 0), 0);
  const nGaps = Math.max(groups.length - 1, 1);
  const free = avail - used;
  const gap = Math.min(Math.max(free / nGaps, 0.6), 1.6);
  let y = TOP;
  groups.forEach(g => { g.forEach((it, k) => { it.draw(y); y += it.h + (k < g.length - 1 ? it.gapAfter : 0); }); y += gap; });
  console.log(`columna ${ci + 1}: usa ${used.toFixed(1)} de ${avail.toFixed(1)} in (separación entre secciones ${gap.toFixed(2)} in)`);
  if (used + nGaps * 0.6 > avail) console.log(`AVISO: la columna ${ci + 1} no cabe`);
});
pres.writeFile({ fileName: OUT }).then(() => console.log('ok ' + OUT));
