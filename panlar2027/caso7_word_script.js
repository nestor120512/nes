const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, ImageRun } = require('docx');
const cfg = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const FONT = 'Arial';
const fmt = n => n.toLocaleString(cfg.locale);
const p = (text, o = {}) => new Paragraph({ spacing: { after: o.after ?? 120, before: o.before ?? 0 }, alignment: o.align, children: [new TextRun({ text, font: FONT, size: o.size ?? 22, bold: o.bold, italics: o.italics, color: o.color })] });
const label = (k, v) => new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: k + ' ', font: FONT, size: 22, bold: true }), new TextRun({ text: v, font: FONT, size: 22 })] });
const heading = (text, n) => new Paragraph({ spacing: { before: 240, after: 100 }, keepNext: true, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: '1F4E79', space: 2 } },
  children: [new TextRun({ text, font: FONT, size: 24, bold: true, color: '1F4E79' }), new TextRun({ text: `   (${fmt(n)} ${cfg.charsWord})`, font: FONT, size: 18, color: '808080' })] });
const ch = [p(cfg.header, { size: 18, color: '808080', after: 200 }), p(cfg.title, { size: 30, bold: true, after: cfg.subtitle ? 120 : 240 })];
if (cfg.subtitle) ch.push(p(cfg.subtitle, { size: 20, italics: true, color: '404040', after: 240 }));
cfg.labels.forEach(([k, v]) => ch.push(label(k, v)));
cfg.sec.forEach((s, i) => { ch.push(heading(cfg.names[i], s.length)); ch.push(p(s, { align: AlignmentType.JUSTIFIED })); });
ch.push(p(cfg.totalLine, { bold: true, before: 160, after: 200 }));
(cfg.notes || []).forEach(n => ch.push(p(n, { size: 20, color: '404040' })));
(cfg.figs || []).forEach(f => { ch.push(new Paragraph({ pageBreakBefore: f.pb, spacing: { before: 240, after: 80 }, alignment: AlignmentType.CENTER, children: [new ImageRun({ type: 'jpg', data: fs.readFileSync(f.path), transformation: { width: f.w, height: f.h } })] })); ch.push(new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: f.label + ' ', font: FONT, size: 20, bold: true }), new TextRun({ text: f.legend, font: FONT, size: 20 })] })); });
const doc = new Document({ styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } }, children: ch }] });
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[3], b); console.log('ok'); });
