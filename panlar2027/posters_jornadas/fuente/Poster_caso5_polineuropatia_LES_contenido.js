// Póster – polineuropatía axonal severa en LES con ANA negativos (formato de los demás pósteres, 70 x 100 cm).
const L = __dirname + '/../logos/';
module.exports = {
  title: 'Polineuropatía sensitivo-motora axonal severa como manifestación incapacitante de lupus eritematoso sistémico con anticuerpos antinucleares negativos: reporte de caso',
  authors: 'Jessica Morales Holguin¹*, Nestor Fabian Sanabria Duarte¹, Jhonatan Padilla Navarro¹, Karen Milagros Pérez Molinares², José Ángel Salas Siado³',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Metropolitana, Barranquilla, Colombia. ³Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositora',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_universidad_metropolitana.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 30, refPt: 22, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 50, bandHeads: true,
  keywords: 'lupus eritematoso sistémico; polineuropatías; anticuerpos antinucleares; lupus eritematoso sistémico neuropsiquiátrico; nefritis lúpica; rituximab.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 33 años con pancitopenia, hipocomplementemia, anti-ADN de doble cadena positivo y anticuerpos antinucleares (ANA) negativos en dos determinaciones, que desarrolló una polineuropatía sensitivo-motora axonal severa con pérdida de la marcha independiente. Tras excluir causas alternativas, durante la hospitalización recibió pulsos de metilprednisolona y rituximab por la neuropatía, y recuperó la marcha. En el seguimiento, la biopsia renal mostró nefritis lúpica clase IV + V.'] },
      { h: 'Introducción', p: [
        'La neuropatía periférica es uno de los síndromes neuropsiquiátricos del lupus eritematoso sistémico (LES); es infrecuente y su atribución exige excluir causas metabólicas, infecciosas, tóxicas y neoplásicas (1). El LES con ANA negativos es raro (2) y no cumple el criterio de entrada de la clasificación EULAR/ACR 2019 (3), aunque los criterios SLICC 2012 permiten clasificarlo (4).',
        [['Aporte del caso: ', true], 'una manifestación rara y grave del LES en una paciente con ANA negativos, tratada de forma dirigida antes de conocer la biopsia renal.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 33 años, sin enfermedad autoinmune conocida, hospitalizada en julio de 2026 por hemorragia digestiva y pancitopenia.'],
        [['Enfermedad actual: ', true], 'poliartralgias inflamatorias, rigidez matutina, alopecia y lesiones vesiculares pruriginosas en miembros inferiores; desde seis semanas antes, parestesias en las cuatro extremidades, debilidad progresiva y caídas, hasta perder la marcha independiente.'],
        [['Examen físico: ', true], 'debilidad de miembros inferiores, alteración sensitiva distal y paresia del VI par izquierdo, no atribuida al LES (resonancia magnética con cambios microangiopáticos).'],
        [['Estudios relevantes: ', true], 'ver Tabla 1. La electromiografía mostró una polineuropatía sensitivo-motora axonal severa y difusa, sin mononeuritis múltiple ni radiculopatía.'],
        [['Diagnósticos diferenciales: ', true], 'neuropatía carencial, metabólica, infecciosa, paraproteinémica, neoplásica y vasculítica, todas descartadas (Tabla 1).'],
        [['Confirmación diagnóstica: ', true], 'LES por criterios SLICC 2012 (4); en el seguimiento, la biopsia renal con nefritis lúpica clase IV + V confirmó el diagnóstico.']] },
    ] },
    { full: { name: 'Tabla 1', table: {
      title: 'Tabla 1. Estudios y hallazgos por dominio',
      colW: [0.19, 0.81], pt: 30, tiles: true, rowH: [0.62, 1.62, 0.64, 1.13, 1.13, 0.64, 0.64, 1.13],
      header: ['Dominio', 'Hallazgos'],
      rows: [
        [{ text: 'Inmunológico', bold: true, fill: 'E7F3F0' }, 'ANA por inmunofluorescencia indirecta en células HEp-2 negativos en dos determinaciones; anti-ADN de doble cadena positivo (Crithidia luciliae 1:40); C3 y C4 bajos; antígenos nucleares extraíbles, anticuerpos antifosfolípidos y anticoagulante lúpico negativos; inmunoglobulinas normales'],
        [{ text: 'Hematológico', bold: true, fill: 'E7F3F0' }, 'Hemoglobina 10,6 g/dL; leucocitos 1.890/µL; plaquetas 75.000/µL; médula ósea sin población neoplásica por citometría de flujo'],
        [{ text: 'Renal', bold: true, fill: 'E7F3F0' }, 'Proteinuria 1.732,5 mg/24 h; creatinina 0,62 mg/dL; biopsia: glomerulonefritis proliferativa difusa con componente membranoso (nefritis lúpica clase IV + V)'],
        [{ text: 'Neurológico', bold: true, fill: 'E7F3F0' }, 'Electromiografía: polineuropatía sensitivo-motora axonal severa y difusa; resonancia cerebral: cambios microangiopáticos sin lesión estructural explicativa'],
        [{ text: 'Cutáneo y articular', bold: true, fill: 'E7F3F0' }, 'Alopecia; lesiones vesiculares erosivas en miembros inferiores (biopsia: cambios posinflamatorios, sin vasculitis); poliartralgias inflamatorias'],
        [{ text: 'Cardiovascular y hepático', bold: true, fill: 'E7F3F0' }, 'Derrame pericárdico leve; colestasis por azatioprina, con mejoría al suspenderla'],
        [{ text: 'Causas alternativas excluidas', bold: true, fill: 'E7F3F0' }, 'Vitamina B12, folato, TSH y creatina quinasa normales; VIH, hepatitis B y C y sífilis negativos; anti-MPO y anti-PR3 negativos; sin componente monoclonal'],
      ],
      note: 'MPO: mieloperoxidasa; PR3: proteinasa 3; TSH: hormona estimulante de la tiroides; VIH: virus de la inmunodeficiencia humana.' } } },
    { left: [
      { h: 'Tratamiento y evolución', p: [
        'Recibió prednisolona, hidroxicloroquina, azatioprina (suspendida por colestasis) y luego micofenolato; pese a ello perdió la marcha independiente.',
        'Durante la hospitalización, y sin contar aún con biopsia renal, la polineuropatía se trató con metilprednisolona intravenosa 500 mg/día por 3 días y rituximab 1.000 mg los días 1 y 15. Unos 7 días después del rituximab mejoró y recuperó la marcha independiente, con síntomas sensitivos persistentes. La biopsia renal, valorada en el seguimiento, mostró nefritis lúpica clase IV + V.'] },
      { h: 'Conclusión', hl: true, p: [
        'La polineuropatía axonal severa puede ser una manifestación incapacitante del LES, incluso con ANA negativos. Tras excluir causas alternativas, la pérdida de la marcha justificó intensificar la inmunosupresión, con recuperación funcional. Unos ANA negativos no descartan el LES si el perfil clínico, serológico e histológico es consistente.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de la paciente.']] },
    ], right: [
      { h: 'Discusión', p: [
        [['ANA negativos, LES indudable. ', true], 'Los ANA fueron negativos dos veces por la técnica de referencia, lo que impedía la clasificación EULAR/ACR 2019 (3). Sin embargo, el anti-ADN de doble cadena, la hipocomplementemia, las citopenias y la serositis cumplían SLICC 2012 (4), y la nefritis lúpica clase IV + V comprobada por biopsia despejó cualquier duda. Los criterios de clasificación no sustituyen el diagnóstico clínico (2).'],
        [['Una manifestación rara que exige excluir otras causas. ', true], 'La polineuropatía axonal en el LES solo puede atribuirse tras descartar causas alternativas (1), como se hizo de forma sistemática (Tabla 1).'],
        [['Tratamiento de manifestaciones raras. ', true], 'Su evidencia es escasa. Las recomendaciones europeas para las manifestaciones raras del LES (red ERN ReCONNET) (5) y para el LES neuropsiquiátrico (6) apoyan los pulsos de glucocorticoides y, en formas graves o refractarias, el rituximab o la ciclofosfamida. En esta paciente, el rituximab se indicó por la neuropatía, antes de disponer de la biopsia renal.'],
        [['Fortalezas y limitaciones: ', true], 'estudio etiológico exhaustivo y confirmación histológica renal; seguimiento aún corto.']] },
    ] },
  ],
  refs: [
    'ACR Ad Hoc Committee on Neuropsychiatric Lupus Nomenclature. The American College of Rheumatology nomenclature and case definitions for neuropsychiatric lupus syndromes. Arthritis Rheum. 1999;42(4):599-608.',
    'Choi MY, Clarke AE, St Pierre Y, Hanly JG, Urowitz MB, Romero-Diaz J, et al. Antinuclear antibody-negative systemic lupus erythematosus in an international inception cohort. Arthritis Care Res (Hoboken). 2019;71(7):893-902.',
    'Aringer M, Costenbader K, Daikh D, Brinks R, Mosca M, Ramsey-Goldman R, et al. 2019 European League Against Rheumatism/American College of Rheumatology classification criteria for systemic lupus erythematosus. Arthritis Rheumatol. 2019;71(9):1400-12.',
    'Petri M, Orbai AM, Alarcón GS, Gordon C, Merrill JT, Fortin PR, et al. Derivation and validation of the Systemic Lupus International Collaborating Clinics classification criteria for systemic lupus erythematosus. Arthritis Rheum. 2012;64(8):2677-86.',
    '[ERN ReCONNET: recomendaciones para el manejo de manifestaciones raras del LES. Completar autores, título, revista, año, volumen y páginas].',
    'Bertsias GK, Ioannidis JP, Aringer M, Bollen E, Bombardieri S, Bruce IN, et al. EULAR recommendations for the management of systemic lupus erythematosus with neuropsychiatric manifestations: report of a task force of the EULAR standing committee for clinical affairs. Ann Rheum Dis. 2010;69(12):2074-82.',
  ],
};
