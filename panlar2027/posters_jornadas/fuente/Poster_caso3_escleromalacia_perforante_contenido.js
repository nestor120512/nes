// Póster 3 – escleromalacia perforante sin enfermedad autoinmune sistémica (formato de los pósteres 1 y 2).
const P = '/home/user/nes/panlar2027/';
const L = __dirname + '/logos/';
module.exports = {
  title: 'Escleromalacia perforante grave sin enfermedad autoinmune sistémica identificable: un dilema terapéutico para el reumatólogo. Reporte de caso',
  authors: 'Erlinda Esther Rivera Pertuz¹*, Nestor Fabian Sanabria Duarte¹, José Ángel Salas Siado²',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositora',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.6,
  bodyPt: 30, refPt: 20, justify: true, textSlack: 0,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'escleritis; escleromalacia perforante; inmunosupresores; azatioprina; glucocorticoides; toma de decisiones clínicas.',
  segments: [
    { full: { name: 'Figura 1', img: P + 'caso3_figura1_escleromalacia_3paneles.jpg', maxH: 5.6,
      caption: 'Figura 1. Ojo derecho con escleromalacia perforante. (A) Al ingreso, destrucción corneoescleral extensa con herniación de tejido uveal. (B) Ocho días después. (C) Tres meses después, con prednisona y azatioprina, en espera del parche esclerocorneal. Flechas: tejido uveal herniado.' } },
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 71 años sin enfermedad autoinmune conocida, con destrucción corneoescleral extensa y herniación uveal del ojo derecho por escleromalacia perforante. El estudio inmunológico e infeccioso fue negativo. Ante la amenaza para el órgano recibió pulsos de metilprednisolona, prednisona y azatioprina, en una decisión compartida con oftalmología. El globo se mantuvo sin perforación hasta un parche esclerocorneal tectónico, y el ojo izquierdo permanece sin compromiso.'] },
      { h: 'Introducción', p: [
        'La escleromalacia perforante es una escleritis anterior necrosante sin inflamación (1,2). Es rara y se asocia clásicamente con artritis reumatoide de larga evolución; también se ha descrito en granulomatosis con poliangeítis, policondritis recidivante y enfermedad de Behçet (3,4). La escleritis necrosante requiere inmunosupresión sistémica (5).',
        [['Aporte del caso: ', true], 'sin enfermedad sistémica identificable, el reumatólogo debe indicar y mantener la inmunosupresión sin diagnóstico ni criterios de clasificación para una enfermedad definida. La amenaza para el órgano guió la decisión.']] },
      { h: 'Tratamiento y evolución', p: [
        'Oftalmología la remitió a urgencias por la escleromalacia perforante; por el riesgo para el órgano recibió metilprednisolona IV 500 mg/día por 5 días, prednisona en descenso y azatioprina como ahorrador, por la edad y la toxicidad.',
        'Se mantuvo la inmunosupresión mientras se buscaba una etiología autoinmune, sin características clínicas ni paraclínicas de enfermedad sistémica. Durante el seguimiento, la junta de oftalmología estimó un compromiso del 60-70 % de la pared ocular y, con reumatología, se continuó para preservar el globo y proteger el ojo izquierdo, pese a la progresión en octubre.',
        'El 3 de noviembre de 2026 se colocó un parche esclerocorneal tectónico, sin perforación previa, y se tomó biopsia conjuntival. El ojo izquierdo, operado de catarata en octubre, se mantiene sin compromiso escleral.'] },
      { h: 'Conclusión', hl: true, p: [
        'La escleromalacia perforante grave puede presentarse sin enfermedad autoinmune sistémica identificable, y no cumplir criterios de clasificación para una enfermedad definida no excluye un proceso ocular inmunomediado.',
        'Este caso ilustra la necesidad de individualizar la inmunosupresión según la gravedad ocular, con decisiones compartidas entre oftalmología y reumatología, exclusión razonable de infección y seguimiento para detectar enfermedad sistémica emergente y toxicidad.',
        [['Consideraciones éticas: ', true], 'consentimiento informado firmado, incluidas las fotos.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 71 años que ingresó en junio de 2026 por pérdida visual del ojo derecho (cuenta dedos) con destrucción corneoescleral.'],
        [['Enfermedad actual: ', true], 'hemorragia conjuntival derecha indolora en octubre de 2024 y defecto escleral temporal en febrero de 2025; luego abandonó el seguimiento.'],
        [['Antecedentes relevantes: ', true], 'sin enfermedad autoinmune conocida, cirugía ocular ni trauma previos.'],
        [['Examen físico: ', true], 'destrucción corneoescleral extensa con herniación uveal e iridiana, sin dolor (Figura 1). Sin artritis ni compromiso otorrinolaringológico.'],
        [['Estudios relevantes: ', true], 'factor reumatoide limítrofe (14,8) con anti-CCP negativo; ANA, anti-ADNdc, anti-Ro, anti-La, anticentrómero y ANCA anti-PR3/MPO negativos; complemento normal. Tuberculina, TC de tórax y serologías para sífilis y hepatitis B y C negativas. TC de senos paranasales sin enfermedad inflamatoria; TC de abdomen y pelvis sin masas ni adenopatías.'],
        [['Diagnósticos diferenciales: ', true], 'artritis reumatoide (sin artritis, anti-CCP negativo), granulomatosis con poliangeítis (ANCA negativos, senos paranasales normales), lupus (ANA negativos), escleritis infecciosa (tuberculosis, sífilis y herpes zóster descartados) y escleritis posquirúrgica o traumática.'],
        [['Confirmación diagnóstica: ', true], 'diagnóstico clínico oftalmológico; la biopsia conjuntival (muestra escasa) mostró fibrosis e inflamación crónica no granulomatosa, sin displasia.']] },
      { h: 'Discusión', p: [
        'La escleromalacia perforante es una forma grave de escleritis necrosante, clásicamente asociada con artritis reumatoide y vasculitis sistémicas (2,3); la escleritis necrosante es, además, la forma que con mayor frecuencia se asocia con enfermedad sistémica (4). Su curso indoloro e insidioso favorece el diagnóstico tardío, como en esta paciente, que llegó con destrucción corneoescleral extensa tras interrumpir el seguimiento (2).',
        'Antes de inmunosuprimir deben descartarse la infección, causa de alrededor del 5-10 % de las escleritis (6), y la enfermedad sistémica (4). Descartadas ambas, la decisión depende de la gravedad ocular y no de cumplir criterios de clasificación para una enfermedad definida (5).',
        'Sin un diagnóstico definido y con una biopsia sin granulomas, la gravedad ocular guió el tratamiento: glucocorticoides con azatioprina, reservando la ciclofosfamida, el rituximab y los anti-TNF para casos seleccionados o refractarios (3,5). Como la escleritis puede preceder a la enfermedad sistémica, se requiere seguimiento reumatológico prolongado (4).',
        [['Fortalezas: ', true], 'evaluación etiológica dirigida (inmunológica, infecciosa, de senos paranasales y abdominopélvica) y decisión multidisciplinaria, con preservación del globo hasta la reconstrucción quirúrgica.'],
        [['Limitaciones: ', true], 'seguimiento aún corto para detectar una enfermedad sistémica emergente.']] },
    ] },
  ],
  refs: [
    'Watson PG, Hayreh SS. Scleritis and episcleritis. Br J Ophthalmol. 1976;60(3):163-91.',
    'Dutta Majumder P, Agarwal S, Shah M, Srinivasan B, K P, Iyer G, et al. Necrotizing scleritis: a review. Ocul Immunol Inflamm. 2024;32(7):1405-19.',
    'Greenbaum R, Castiblanco C. Update on scleritis diagnosis and management: a narrative review. Ann Eye Sci. 2026.',
    'Soubrier M, Vasseneix C, Jacquot R, Bert A, Gerfaud-Valentin M, Mathis T, et al. Scleritis and associated systemic diseases: contribution of systemic examination, follow-up, and additional investigations. J Ophthalmic Inflamm Infect. 2026;16:7.',
    'Richey A, Sattarova V, Kopplin LJ, Armbrust KR. Update on therapy for non-infectious scleritis. Clin Ophthalmol. 2026;20:563490. doi:10.2147/OPTH.S563490.',
    'Ghanbari H, Rahimi M, Momeni A, Hassanpour K, Bayan N, Lee KE, et al. Infectious scleritis: a comprehensive narrative review of epidemiology, clinical characteristics, and management strategies. Ther Adv Ophthalmol. 2025;17:25158414251357776.',
  ],
};
