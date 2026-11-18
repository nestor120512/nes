// Póster 3 – escleromalacia perforante sin enfermedad autoinmune sistémica (formato de los pósteres 1 y 2).
const P = __dirname + '/../../';
const L = __dirname + '/../logos/';
module.exports = {
  title: 'Escleromalacia perforante grave sin enfermedad autoinmune sistémica identificable: un dilema terapéutico para el reumatólogo. Reporte de caso',
  authors: 'Erlinda Esther Rivera Pertuz¹*, Nestor Fabian Sanabria Duarte¹, José Ángel Salas Siado²',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositora',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.6,
  bodyPt: 29, refPt: 20, justify: true, textSlack: 0,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'escleritis; escleromalacia perforante; inmunosupresores; azatioprina; glucocorticoides; grupo de atención al paciente.',
  segments: [
    { full: { name: 'Figura 1', img: P + 'caso3_figura1_escleromalacia_3paneles.jpg', maxH: 4.75,
      caption: 'Figura 1. Ojo derecho con escleromalacia perforante. (A) Al ingreso, destrucción corneoescleral extensa con herniación de tejido uveal. (B) Ocho días después. (C) Tres meses después, con prednisona y azatioprina, en espera del parche esclerocorneal. Flechas: tejido uveal herniado.' } },
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 71 años sin enfermedad autoinmune conocida, con destrucción corneoescleral extensa y herniación uveal del ojo derecho por escleromalacia perforante. El estudio inmunológico e infeccioso fue negativo. Ante la amenaza para el órgano recibió pulsos de metilprednisolona, prednisona y azatioprina, en una decisión compartida con oftalmología. El globo se mantuvo sin perforación hasta un parche esclerocorneal tectónico, y el ojo izquierdo permanece sin compromiso.'] },
      { h: 'Introducción', p: [
        'La escleromalacia perforante es una escleritis anterior necrosante sin inflamación (1). Es rara y se asocia clásicamente con artritis reumatoide de larga evolución; también se ha descrito en granulomatosis con poliangeítis, policondritis recidivante y enfermedad de Behçet (2,3). La escleritis necrosante requiere inmunosupresión sistémica (4).',
        [['Aporte del caso: ', true], 'sin enfermedad sistémica identificable, el reumatólogo debe indicar y mantener la inmunosupresión sin diagnóstico ni criterios de clasificación. Este caso muestra cómo resolver ese dilema guiándose por la amenaza para el órgano.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 71 años que ingresó en junio de 2026 por pérdida visual del ojo derecho (cuenta dedos) con destrucción corneoescleral.'],
        [['Enfermedad actual: ', true], 'hemorragia conjuntival derecha indolora en octubre de 2024 y defecto escleral temporal en febrero de 2025; luego abandonó el seguimiento.'],
        [['Antecedentes relevantes: ', true], 'sin enfermedad autoinmune conocida, cirugía ocular ni trauma previos.'],
        [['Examen físico: ', true], 'destrucción corneoescleral extensa con herniación uveal e iridiana, sin dolor (Figura 1). Sin artritis ni compromiso otorrinolaringológico.'],
        [['Estudios relevantes: ', true], 'factor reumatoide limítrofe (14,8) con anti-CCP negativo; ANA, anti-ADNdc, antígenos nucleares extraíbles, anticentrómero y ANCA anti-PR3/MPO negativos; complemento normal. Tuberculina, TC de tórax y serologías para sífilis y hepatitis B y C negativas.'],
        [['Diagnósticos diferenciales: ', true], 'artritis reumatoide (sin artritis, anti-CCP negativo), granulomatosis con poliangeítis (ANCA negativos), lupus (ANA negativos), escleritis infecciosa (tuberculosis, sífilis y herpes zóster descartados) y escleritis posquirúrgica o traumática.'],
        [['Confirmación diagnóstica: ', true], 'diagnóstico clínico oftalmológico, tras excluir causas sistémicas, infecciosas, quirúrgicas y traumáticas.']] },
    ] },
    { left: [
      { h: 'Tratamiento y evolución', p: [
        'Sin diagnóstico sistémico, la indicación se basó en la amenaza para el órgano: metilprednisolona IV 500 mg/día por 5 días, prednisona en descenso y azatioprina como ahorrador, elegida por la edad y el riesgo de toxicidad.',
        'La junta de oftalmología estimó un compromiso del 60-70 % de la pared ocular; con reumatología se mantuvo la inmunosupresión para preservar el globo y proteger el ojo izquierdo, pese a que en octubre aumentaron el adelgazamiento y la herniación iridiana.',
        'El 3 de noviembre de 2026 se colocó un parche esclerocorneal tectónico con membrana amniótica y tarsorrafia temporal, sin perforación previa. El ojo izquierdo, operado de catarata en octubre, se mantiene sin compromiso escleral.'] },
      { h: 'Conclusión', hl: true, p: [
        'La escleromalacia perforante grave puede presentarse sin enfermedad autoinmune sistémica identificable, y no cumplir criterios de clasificación no excluye un proceso ocular inmunomediado.',
        'Este caso ilustra la necesidad de individualizar la inmunosupresión según la gravedad ocular, con decisiones compartidas entre oftalmología y reumatología, exclusión razonable de infección y seguimiento para detectar enfermedad sistémica emergente y toxicidad.',
        [['Consideraciones éticas: ', true], 'consentimiento informado firmado, incluidas las fotos.']] },
    ], right: [
      { h: 'Discusión', p: [
        'La escleritis necrosante es la forma más grave de escleritis y la que con mayor frecuencia se asocia con enfermedad sistémica (2,3). La escleromalacia perforante es indolora y progresa de forma insidiosa, por lo que suele diagnosticarse tarde (1), como en esta paciente, que consultó con destrucción establecida tras abandonar el seguimiento.',
        'Antes de inmunosuprimir es obligatorio excluir una causa infecciosa, porque la escleritis infecciosa empeora con glucocorticoides. Descartadas la infección y la enfermedad sistémica, la decisión de inmunosuprimir depende de la gravedad ocular y no de cumplir criterios de clasificación (4,5).',
        'Los glucocorticoides solos rara vez controlan la escleritis necrosante y suele requerirse un inmunosupresor (4). La ciclofosfamida, el rituximab y los anti-TNF se describen sobre todo en escleritis asociada a artritis reumatoide o vasculitis (5); sin un diagnóstico sistémico que oriente, escalar a estas terapias es una decisión empírica, guiada por la amenaza para el órgano. Como la escleritis puede preceder a la enfermedad sistémica, se requiere seguimiento reumatológico prolongado (3).',
        [['Fortalezas: ', true], 'estudio sistémico, inmunológico e infeccioso amplio antes de inmunosuprimir; decisión documentada y compartida; globo preservado hasta la cirugía.'],
        [['Limitaciones: ', true], 'progresión del adelgazamiento con el tratamiento y seguimiento aún corto.']] },
    ] },
  ],
  refs: [
    'Watson PG, Hayreh SS. Scleritis and episcleritis. Br J Ophthalmol. 1976;60(3):163-91.',
    'Sainz de la Maza M, Molina N, Gonzalez-Gonzalez LA, Doctor PP, Tauber J, Foster CS. Clinical characteristics of a large cohort of patients with scleritis and episcleritis. Ophthalmology. 2012;119(1):43-50.',
    'Akpek EK, Thorne JE, Qazi FA, Do DN, Jabs DA. Evaluation of patients with scleritis for systemic disease. Ophthalmology. 2004;111(3):501-6.',
    'Jabs DA, Mudun A, Dunn JP, Marsh MJ. Episcleritis and scleritis: clinical features and treatment results. Am J Ophthalmol. 2000;130(4):469-76.',
    'Promelle V, Goeb V, Gueudry J. Rheumatoid arthritis associated episcleritis and scleritis: an update on treatment perspectives. J Clin Med. 2021;10(10):2118.',
  ],
};
