// Resumen en Word para las Jornadas Médicas (máximo 500 palabras, sin tablas ni gráficas).
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');
const d = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const F = 'Arial';
const P = (runs, o = {}) => new Paragraph({ alignment: o.align ?? AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 120, before: o.before ?? 0, line: 276 },
  children: (Array.isArray(runs) ? runs : [runs]).map(r => typeof r === 'string' ? new TextRun({ text: r, font: F, size: o.size ?? 24 }) : new TextRun({ font: F, size: o.size ?? 24, ...r })) });
const words = t => (t.match(/\S+/g) || []).length;
const body = d.sections.map(([, ps]) => ps.join(' ')).join(' ');
const ch = [
  P({ text: d.title, bold: true }, { align: AlignmentType.CENTER, size: 28, after: 200 }),
  P(d.authors, { align: AlignmentType.CENTER, after: 80 }),
  ...d.affiliations.map(a => P(a, { align: AlignmentType.CENTER, size: 20, after: 40 })),
  P([{ text: 'Palabras clave: ', bold: true }, d.keywords], { before: 200, after: 200 }),
];
for (const [h, ps] of d.sections) {
  ch.push(P({ text: h, bold: true }, { before: 160, after: 80, align: AlignmentType.LEFT }));
  ps.forEach(p => ch.push(P(p)));
}
ch.push(P({ text: 'Referencias', bold: true }, { before: 200, after: 80, align: AlignmentType.LEFT }));
d.refs.forEach((r, i) => ch.push(P(`${i + 1}. ${r}`, { size: 20, after: 60, align: AlignmentType.LEFT })));
ch.push(P({ text: `Extensión del texto del resumen: ${words(body)} palabras (sin título, autores, filiaciones, palabras clave ni referencias).`, italics: true, color: '666666' }, { size: 18, before: 240, align: AlignmentType.LEFT }));
const doc = new Document({ styles: { default: { document: { run: { font: F, size: 24 } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } }, children: ch }] });
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[3], b); console.log('ok', words(body), 'palabras'); });
