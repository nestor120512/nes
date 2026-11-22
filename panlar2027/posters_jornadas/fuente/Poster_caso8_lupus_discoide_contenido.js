// Póster – lupus discoide con serología de LES sin manifestaciones extracutáneas (Jornadas Clínica General del Norte, 70 x 100 cm).
const P = '/home/user/nes/panlar2027/posters_jornadas/';
const L = __dirname + '/logos/';
const OK = { bold: true, color: '17663F', fill: 'DDF1E6', align: 'center' };
const NO = { bold: true, color: 'A3202E', fill: 'FADADD', align: 'center' };
const H = { bold: true, fill: 'E7F3F0' };
module.exports = {
  title: 'Lupus discoide con serología de lupus sistémico y sin manifestaciones extracutáneas: cuando la clasificación supera a la clínica. Reporte de caso',
  authors: 'José Ángel Salas Siado¹, Manuel Alejandro Pertuz Garcia², Nestor Fabian Sanabria Duarte³*',
  affiliations: '¹Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Metropolitana, Barranquilla, Colombia. ³Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. *Expositor',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_universidad_metropolitana.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 27, refPt: 21, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 48, bandHeads: true,
  keywords: 'lupus eritematoso discoide; lupus eritematoso sistémico; anticuerpos antinucleares; anticuerpos anti-ADN de doble cadena; hidroxicloroquina; clasificación.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 67 años con lupus eritematoso discoide (LED) facial confirmado por biopsia, anticuerpos antinucleares (ANA) 1:640 y anti-ADN de doble cadena positivo, sin ninguna manifestación extracutánea. Alcanza 10 puntos de los criterios de clasificación de lupus eritematoso sistémico (LES) de 2019, pero no los previos. Se interpretó como LED con serología de LES, tratado con hidroxicloroquina y terapia tópica, con vigilancia sistémica.'] },
      { h: 'Introducción', p: [
        'El LED es la forma más frecuente de lupus cutáneo crónico y puede dejar atrofia y cicatriz; hasta el 28 % de los pacientes desarrolla LES (5). Los criterios de la European Alliance of Associations for Rheumatology y el American College of Rheumatology (EULAR/ACR) 2019 exigen ANA ≥1:80 y al menos 10 puntos: el LED aporta 4 y el anti-ADN de doble cadena, 6 (1). Así, una enfermedad limitada a la piel puede clasificarse como LES.',
        [['Aporte del caso: ', true], 'cumplir criterios de clasificación no equivale a tener enfermedad sistémica.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 67 años remitida por dermatología a reumatología en 2026 para descartar LES.'],
        [['Enfermedad actual: ', true], 'lesiones faciales asintomáticas de ocho meses de evolución, sin fotosensibilidad. Sin enfermedad autoinmune conocida.'],
        [['Examen físico: ', true], 'placas eritematovioláceas descamativas en arcos ciliares, mejillas, dorso nasal y piel del labio superior, la mayor en la punta nasal (Figura 1); en las cejas, alopecia cicatricial con escama adherente, atrofia central e hiperpigmentación periférica. Dolor mecánico de hombros y rodillas, sin sinovitis, atribuido a artrosis.'],
        [['Revisión por sistemas: ', true], 'negó fiebre, pérdida de peso, úlceras orales, alopecia no cicatricial, fenómeno de Raynaud, artritis, serositis y síntomas neurológicos.'],
        [['Estudios relevantes: ', true], 'biopsia compatible con LED; ANA y anti-ADN de doble cadena positivos, sin citopenias, hipocomplementemia ni alteraciones urinarias (Tabla 1).'],
        [['Diagnósticos diferenciales: ', true], 'LES con compromiso orgánico (descartado por clínica y laboratorio), lupus inducido por fármacos (antihistonas negativos), rosácea, sarcoidosis y dermatosis pigmentarias (descartadas por la histopatología).'],
        [['Tratamiento y evolución: ', true], 'hidroxicloroquina 200 mg/día, tacrolimus 0,1 % y mometasona tópicos y fotoprotección, con mejoría importante de las lesiones; continúa en seguimiento por dermatología y reumatología.']] },
    ] },
    { split: 0.53, left: [
      { name: 'Figura 1', img: P + 'caso_LED_figura1.jpg',
        caption: 'Figura 1. Lupus eritematoso discoide facial. Vista frontal (A) y oblicua (B): placas eritematovioláceas en punta y dorso nasal, máculas hiperpigmentadas en la piel del labio superior y compromiso de los arcos ciliares.' },
    ], right: [
      { name: 'Tabla 1', table: {
        title: 'Tabla 1. Estudios de la paciente',
        colW: [0.27, 0.73], pt: 26, tiles: true,
        header: ['Estudio', 'Resultado'],
        rows: [
          [{ text: 'Biopsia de piel', ...H }, 'Estrato córneo compacto, aplanamiento de la red de crestas y daño de interfase vacuolar con cuerpos apoptóticos; infiltrado linfoplasmocitario perivascular superficial y perianexial, con mucina dérmica'],
          [{ text: 'Autoanticuerpos', ...H }, 'ANA 1:640, patrón nuclear homogéneo (inmunofluorescencia indirecta en células HEp-2); anti-ADN de doble cadena positivo 1:80 por Crithidia luciliae (corte 1:10); anti-Ro, anti-La, anti-Sm, anti-RNP y antihistonas negativos'],
          [{ text: 'Complemento', ...H }, 'C3 123,9 mg/dL y C4 19,2 mg/dL (normales)'],
          [{ text: 'Hemograma', ...H }, 'Leucocitos 4.650/µL, hemoglobina 12,4 g/dL, plaquetas 294.000/µL'],
          [{ text: 'Función renal', ...H }, 'Uroanálisis sin proteinuria, hematuria ni cilindros; creatinina y relación proteína/creatinina normales'],
          [{ text: 'Reactantes', ...H }, 'Velocidad de sedimentación globular 55 mm/h; proteína C reactiva 0,77 mg/dL (normal ≤0,33)'],
        ],
        note: 'Anti-RNP: antirribonucleoproteína; anti-Sm: anti-Smith.' } },
    ] },
    { left: [
      { name: 'Tabla 2', table: {
        title: 'Tabla 2. Clasificación de LES en la paciente',
        colW: [0.34, 0.21, 0.21, 0.24], pt: 28, tiles: true,
        header: ['Hallazgo', 'ACR 1997', 'SLICC 2012', 'EULAR/ACR 2019'],
        rows: [
          [{ text: 'Lupus discoide', ...H }, { text: '1 criterio', align: 'center' }, { text: '1 criterio', align: 'center' }, { text: '4 puntos', align: 'center' }],
          [{ text: 'ANA 1:640', ...H }, { text: '1 criterio', align: 'center' }, { text: '1 criterio', align: 'center' }, { text: 'Entrada', align: 'center' }],
          [{ text: 'Anti-ADN de doble cadena', ...H }, { text: '1 criterio', align: 'center' }, { text: '1 criterio', align: 'center' }, { text: '6 puntos', align: 'center' }],
          [{ text: 'Total', ...H }, { text: '3 de 4', ...NO }, { text: '3 de 4', ...NO }, { text: '10 de 10', ...OK }],
          [{ text: '¿Clasifica como LES?', bold: true, fill: 'E7F3F0', size: 28 }, { text: 'NO', bold: true, color: 'FFFFFF', fill: 'C8323F', align: 'center', size: 30 }, { text: 'NO', bold: true, color: 'FFFFFF', fill: 'C8323F', align: 'center', size: 30 }, { text: 'SÍ', bold: true, color: 'FFFFFF', fill: '1E7D4F', align: 'center', size: 30 }],
        ],
        note: 'ACR: American College of Rheumatology; SLICC: Systemic Lupus International Collaborating Clinics. ACR 1997 y SLICC 2012 exigen 4 criterios; EULAR/ACR 2019, ANA ≥1:80 y 10 puntos (1-3).' } },
      { h: 'Fortalezas y limitaciones', p: [
        [['Fortalezas: ', true], 'confirmación histológica, estudio sistémico completo (hematológico, renal, complemento y autoanticuerpos) y comparación de tres sistemas de clasificación.'], [['Limitaciones: ', true], 'anti-ADN de doble cadena en una sola determinación y seguimiento aún corto para descartar progresión.']] },
    ], right: [
      { h: 'Discusión', p: [
        [['Clasificar no es diagnosticar. ', true], 'La paciente alcanza 10 puntos EULAR/ACR 2019, pero no cumple ACR 1997 ni SLICC 2012 (Tabla 2) (1-3). Fueron diseñados para clasificar, no para diagnosticar (7).'],
        [['Lupus cutáneo con serología de LES. ', true], 'En 184 pacientes con lupus cutáneo confirmado por biopsia, el 14,7 % cumplía EULAR/ACR 2019 al inicio; su compromiso orgánico fue nulo o leve y la proporción no cambió en casi 5 años (4). Por ello no se indicó inmunosupresión sistémica.'],
        [['¿Por qué vigilar? ', true], 'Los ANA ≥1:320 fueron el principal predictor de progresión del LED a LES grave (6), y el anti-ADN de doble cadena, las citopenias y la velocidad de sedimentación elevada también se asocian con progresión (5). Esta paciente reúne varios: requiere control periódico de hemograma, orina, complemento y anti-ADN.']] },
      { h: 'Conclusión', hl: true, p: [
        'Un LED con ANA de título alto y anti-ADN de doble cadena positivo puede alcanzar el umbral EULAR/ACR 2019 para LES sin ninguna manifestación extracutánea. Cumplir criterios de clasificación no equivale a tener enfermedad sistémica: el tratamiento se dirige a la piel, y el seguimiento, a detectar a tiempo la progresión.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de la paciente.']] },
    ] },
  ],
  refs: [
    'Aringer M, Costenbader K, Daikh D, Brinks R, Mosca M, Ramsey-Goldman R, et al. 2019 European League Against Rheumatism/American College of Rheumatology classification criteria for systemic lupus erythematosus. Arthritis Rheumatol. 2019;71(9):1400-12.',
    'Hochberg MC. Updating the American College of Rheumatology revised criteria for the classification of systemic lupus erythematosus. Arthritis Rheum. 1997;40(9):1725.',
    'Petri M, Orbai AM, Alarcón GS, Gordon C, Merrill JT, Fortin PR, et al. Derivation and validation of the Systemic Lupus International Collaborating Clinics classification criteria for systemic lupus erythematosus. Arthritis Rheum. 2012;64(8):2677-86.',
    'Stec-Polak M, Matyja-Bednarczyk A, Wojas-Pelc A, Pastuszczak M. Higher specificity of the new EULAR/ACR 2019 criteria for diagnosing systemic lupus erythematosus in patients with biopsy-proven cutaneous lupus. Clin Exp Rheumatol. 2021;39(5):955-60.',
    'Chong BF, Song J, Olsen NJ. Determining risk factors for developing systemic lupus erythematosus in patients with discoid lupus erythematosus. Br J Dermatol. 2012;166(1):29-35.',
    'Fredeau L, Courvoisier DS, Ait Mehdi R, Ingen-Housz-Oro S, Mahe E, Costedoat-Chalumeau N, et al. Risk factors of progression from discoid lupus to severe systemic lupus erythematosus: a registry-based cohort study of 164 patients. J Am Acad Dermatol. 2023;88(3):551-9.',
    'Hoi A, Igel T, Mok CC, Arnaud L. Systemic lupus erythematosus. Lancet. 2024;403(10441):2326-38.',
  ],
};
