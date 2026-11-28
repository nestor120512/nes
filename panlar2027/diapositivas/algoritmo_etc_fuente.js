// Diapositiva editable: algoritmo de sugerencia diagnóstica para enfermedad del tejido conectivo (16:9).
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';            // 13,333 x 7,5 in
pres.title = 'Algoritmo de sugerencia diagnóstica para enfermedad del tejido conectivo';
const s = pres.addSlide();
s.background = { color: 'FFFFFF' };
const F = 'Arial';
const NAVY = '1F3D7A', RED = 'C8323F', LINE = 'C8323F', PILL = 'DCE1E8', PILLT = '44546A', SOFT = 'F1F3F6';
const box = (txt, x, y, w, h, o = {}) => s.addText(txt, { x, y, w, h, fontFace: F, align: 'center', valign: 'middle', margin: 0.05,
  shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: o.r ?? 0.08, fill: { color: o.fill || NAVY }, line: { color: o.line || o.fill || NAVY, width: 1 },
  color: o.color || 'FFFFFF', fontSize: o.pt || 14, bold: o.bold ?? true, objectName: o.name || String(txt).slice(0, 30) });
const pill = (txt, cx, y, w = 1.1) => box(txt, cx - w / 2, y, w, 0.32, { fill: PILL, color: PILLT, pt: 12, r: 0.16, name: txt + ' ' + cx });
const stop = (x, y, w, h = 0.46) => box('No hay más pruebas', x, y, w, h, { fill: SOFT, line: 'C9D0DA', color: NAVY, pt: 11.5, bold: false, name: 'No hay más pruebas' });
const result = (txt, cx, y, w, h, pt = 11) => box(txt, cx - w / 2, y, w, h, { fill: RED, pt, bold: false, r: 0.1 });
const L = (x1, y1, x2, y2) => s.addShape(pres.shapes.LINE, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1),
  line: { color: LINE, width: 1.5 }, objectName: 'Conector' });

// Título
box('Algoritmo de sugerencia diagnóstica para enfermedad del tejido conectivo', 1.42, 0.22, 10.5, 0.6, { pt: 21, r: 0.1, name: 'Título' });

// Nivel 1: ANA
const ax = 6.665;
box('ANA', ax - 0.8, 1.05, 1.6, 0.46, { pt: 18, name: 'ANA' });
L(ax + 0.8, 1.28, 7.85, 1.28); pill('Negativo', 8.4, 1.12); L(8.95, 1.28, 9.3, 1.28); stop(9.3, 1.05, 1.75);
L(ax, 1.51, ax, 1.68); pill('Positivo', ax, 1.68); L(ax, 2.0, ax, 2.22);

// Nivel 2: tres ramas
const c1 = 1.6, c2 = 5.35, c3 = 11.75, y2 = 2.42, h2 = 0.78;
L(c1, 2.22, c3, 2.22); L(c1, 2.22, c1, y2); L(c2, 2.22, c2, y2); L(c3, 2.22, c3, y2);
box('dsDNA\n(ADN de doble cadena)', c1 - 1.25, y2, 2.5, h2, { pt: 14, name: 'dsDNA' });
box([{ text: 'Antígenos nucleares extraíbles', options: { breakLine: true } }, { text: 'ENA screen ', options: { bold: true } },
     { text: '(Jo1, Scl-70, SS-A, RNP, Sm, SS-B)', options: { bold: false, fontSize: 11.5 } }], c2 - 1.95, y2, 3.9, h2, { pt: 14, name: 'ENA screen' });
box('Anticuerpos antiribosomales IgG', c3 - 1.3, y2, 2.6, h2, { pt: 14, name: 'Anticuerpos ribosomales' });
L(c2 + 1.95, y2 + h2 / 2, 7.55, y2 + h2 / 2); pill('Negativo', 8.05, y2 + h2 / 2 - 0.16); L(8.6, y2 + h2 / 2, 8.8, y2 + h2 / 2); stop(8.8, y2 + h2 / 2 - 0.23, 1.5);

// Rama dsDNA
const yP = 3.45, n1 = 0.85, p1 = 2.45;
L(c1, y2 + h2, c1, 3.32); L(n1, 3.32, p1, 3.32); L(n1, 3.32, n1, yP); L(p1, 3.32, p1, yP);
pill('Negativo', n1, yP); pill('Positivo', p1, yP);
L(n1, yP + 0.32, n1, 3.98); L(p1, yP + 0.32, p1, 3.98);
stop(n1 - 0.7, 3.98, 1.4, 0.55);
box('dsDNA por Crithidia luciliae (IFI)', p1 - 0.88, 3.98, 1.76, 0.7, { fill: SOFT, line: 'C9D0DA', color: NAVY, pt: 11, name: 'Crithidia' });

// Rama ENA
L(c2, y2 + h2, c2, yP); pill('Positivo', c2, yP); L(c2, yP + 0.32, c2, 3.98);
box([{ text: 'ENA diferenciados ', options: { bold: true } }, { text: '(Jo1, Scl-70, SS-A, RNP, Sm, SS-B)', options: { bold: false, fontSize: 11.5 } }],
    c2 - 1.95, 3.98, 3.9, 0.6, { pt: 14, name: 'ENA diferenciados' });

// Rama ribosomal
L(c3, y2 + h2, c3, yP); pill('Positivo', c3, yP); L(c3, yP + 0.32, c3, 3.95);
result('Alta probabilidad de LES, especialmente asociado con manifestaciones neuropsiquiátricas', c3, 3.88, 2.75, 1.0, 12);

// Nivel 3: ENA diferenciados
const ab = [['Jo1', 'Indica alta probabilidad de polimiositis'], ['RNP', 'Indica alta probabilidad de enfermedad mixta del tejido conectivo'],
  ['Scl-70', 'Indica alta probabilidad de esclerodermia'], ['Sm', 'Indica alta probabilidad de LES'],
  ['SS-A', 'Indica alta probabilidad de síndrome de Sjögren u otra ETC'], ['SS-B', 'Indica alta probabilidad de síndrome de Sjögren u otra ETC']];
const xs = ab.map((_, i) => 1.15 + i * 2.2), yb = 5.12;
L(c2, 4.58, c2, 4.98); L(xs[0], 4.98, xs[5], 4.98);
ab.forEach(([n, t], i) => {
  const x = xs[i];
  L(x, 4.98, x, yb); box(n, x - 0.65, yb, 1.3, 0.42, { pt: 15, name: n });
  L(x, yb + 0.42, x, 5.66); pill('Positivo', x, 5.66);
  L(x, 5.98, x, 6.1); result(t, x, 6.1, 1.95, 0.78, 11);
});

// Abreviaturas
s.addShape(pres.shapes.LINE, { x: 0.35, y: 7.0, w: 0, h: 0.38, line: { color: NAVY, width: 2.5 }, objectName: 'Barra abreviaturas' });
s.addText([
  { text: 'Abreviaturas: ', options: { bold: true, color: NAVY } },
  { text: 'ANA: anticuerpos antinucleares; dsDNA: ADN de doble cadena; ENA: antígenos nucleares extraíbles; ETC: enfermedad del tejido conectivo; IFI: inmunofluorescencia indirecta; Jo1: histidil-ARNt sintetasa; LES: lupus eritematoso sistémico; RNP: ribonucleoproteína; Scl-70: antitopoisomerasa I; Sm: antígeno Smith; SS-A: anti-Ro; SS-B: anti-La.' }],
  { x: 0.45, y: 6.97, w: 12.6, h: 0.45, fontFace: F, fontSize: 10, color: '333F4F', valign: 'middle', margin: 0, objectName: 'Abreviaturas' });

pres.writeFile({ fileName: process.argv[2] }).then(f => console.log('ok', f));
