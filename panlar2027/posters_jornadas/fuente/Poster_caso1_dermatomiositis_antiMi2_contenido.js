// Póster 1 – contenido tomado del manuscrito "dermatomiositis_antimi2_3" y del resumen enviado a PANLAR.
module.exports = {
  title: 'Dermatomiositis juvenil anti-Mi-2 de curso policíclico con respuesta repetida a inmunoglobulina intravenosa: reporte de caso',
  authors: 'Nestor Fabian Sanabria Duarte¹*, José Ángel Salas Siado², Sandra Sofía Sánchez Hernández¹, Juan Camilo Tafur Vidal¹',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositor',
  logos: { band: [__dirname + '/../logos/logo_clinica_general_del_norte.png', __dirname + '/../logos/logo_universidad_libre.png', __dirname + '/../logos/logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.6,
  bodyPt: 28, refPt: 22, justify: true,
  // Diseño para impresión: paleta tomada de los logos (azul IMA, verde y rojo de la Clínica General del Norte)
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0', statColor: 'C8323F',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true, statPt: 58,
  stats: [
    { big: '12.588', small: 'CK al diagnóstico (U/L)' },
    { big: '4', small: 'recaídas en 19 meses' },
    { big: '2', small: 'rescates con IGIV, ambos con mejoría' },
    { big: '202', small: 'CK (U/L) al 3.er ciclo mensual de IGIV' },
  ],
  keywords: 'dermatomiositis juvenil; anticuerpos anti-Mi-2; inmunoglobulinas intravenosas; disfagia; miopatía esteroidea; resonancia magnética.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 17 años con dermatomiositis juvenil anti-Mi-2α/β, disfagia e hiperCKemia grave, confirmada por biopsia. Ante la respuesta incompleta a glucocorticoides y azatioprina, la inmunoglobulina intravenosa (IGIV) permitió recuperar la deglución. Tuvo cuatro recaídas en 19 meses; en la última, la CK y la resonancia magnética (RM) orientaron a actividad inflamatoria y no a miopatía esteroidea, y la IGIV mensual se asoció con descenso de la CK a 202 U/L, resolución de la disfagia y recuperación de la marcha con apoyo.'] },
      { h: 'Introducción', p: [
        'La dermatomiositis juvenil es una miopatía inflamatoria con debilidad proximal simétrica y lesiones cutáneas características, cuyo fenotipo varía según el autoanticuerpo específico. Los pacientes anti-Mi-2 tienen compromiso muscular prominente, menor riesgo de enfermedad pulmonar intersticial y de neoplasia, y buena respuesta a la inmunosupresión, aunque se describen cursos policíclicos (1,2). La superposición con lupus eritematoso sistémico (LES) es un reto diagnóstico (2).',
        [['Aporte del caso: ', true], 'un curso grave y policíclico en un fenotipo considerado favorable, con respuesta repetida a la IGIV.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 17 años hospitalizada en enero de 2025 por deterioro funcional y disfagia para sólidos.'],
        [['Enfermedad actual: ', true], 'desde diciembre de 2024, lesiones papulares eritemato-hiperpigmentadas faciales, interescapulares y extensoras, mialgias y debilidad proximal progresiva.'],
        [['Antecedentes relevantes: ', true], 'previamente sana.'],
        [['Examen físico: ', true], 'signo de Gottron, fuerza proximal 3/5 y disfagia.'],
        [['Estudios relevantes: ', true], 'CK 12.588 U/L, LDH 1.247 U/L, AST 657,9 y ALT 293,7 U/L (origen muscular); ANA 1:160 moteado; anti-Mi-2α y anti-Mi-2β positivos; anti-Jo-1 negativo. Biopsia muscular: cambios miopáticos, infiltrado linfoide y fibras atróficas.'],
        [['Diagnósticos diferenciales: ', true], 'superposición con LES (ANA hasta 1:1280, eritema facial, alopecia, artralgias, derrames pleurales), descartada por anti-ADNdc negativo, complemento normal, antifosfolípidos negativos y sin nefritis; enfermedad mixta, descartada por anti-RNP negativo; miopatía esteroidea (cuarta recaída).'],
        [['Confirmación diagnóstica: ', true], 'criterios EULAR/ACR 2017 con 9,6 puntos (probabilidad ≥90 %): dermatomiositis juvenil anti-Mi-2.']] },
    ] },
    { full: { name: 'Tabla 1', table: {
      title: 'Tabla 1. Evolución clínica y tratamiento',
      colW: [0.11, 0.13, 0.41, 0.35], pt: 28,
      header: ['Fecha', 'Evento', 'Hallazgos', 'Tratamiento y respuesta'],
      rows: [
        ['Dic 2024', 'Inicio (17 años)', 'Lesiones cutáneas con signo de Gottron, mialgias y debilidad proximal progresiva', '—'],
        ['Ene 2025', 'Diagnóstico', 'Fuerza 3/5, disfagia, CK 12.588 U/L, anti-Mi-2α/β+, biopsia con miopatía inflamatoria; EULAR/ACR 9,6', 'MPIV 500 mg/día × 3, prednisolona 60 mg/día y AZA 150 mg/día; por respuesta incompleta, IGIV 2 g/kg: recupera la deglución'],
        ['Oct 2025', 'Recaída 1', 'Mialgias, debilidad proximal, CK 2.760 U/L', 'Aumento de GC + MMF: mejoría'],
        ['Dic 2025', 'Recaída 2', 'Tras suspender MMF: fuerza 4/5, CK 1.399 U/L', 'MPIV × 3 + reinicio de MMF: CK 393 U/L'],
        ['May 2026', 'Recaída 3', 'En descenso de GC: lesiones cutáneas, mialgias intensas, CK 11.284 U/L, LDH 1.067 U/L, aldolasa 39,2 U/L', 'Pulsos de MPIV y ajuste de GC'],
        ['Ago 2026', 'Recaída 4 (19 años)', 'Fuerza 2/5, no camina, CK 5.720 U/L; facies cushingoide; RM: edema muscular difuso y fascial; TC de tórax sin EPI', 'MPIV × 5: CK 2.073 → 3.492 U/L y disfagia (respuesta incompleta) → IGIV cada 4 semanas'],
        ['3.er ciclo', 'Respuesta', 'CK 202 U/L, disfagia resuelta, fuerza 4/5, marcha con apoyo', 'IGIV hasta 6 meses; rituximab si persiste la actividad, recae o depende de IGIV'],
      ],
      note: 'AZA: azatioprina; CK: creatina quinasa; EPI: enfermedad pulmonar intersticial; GC: glucocorticoides; IGIV: inmunoglobulina intravenosa; MMF: micofenolato mofetilo; MPIV: metilprednisolona intravenosa; RM: resonancia magnética.' } } },
    { left: [
      { h: 'Discusión', p: [
        'El perfil anti-Mi-2 suele tener buen pronóstico, pero existe un subgrupo recidivante que requiere escalar el tratamiento (1). La magnitud y persistencia de la hiperCKemia y el edema en la RM distinguieron actividad inflamatoria de miopatía esteroidea.',
        [['¿Por qué IGIV y no rituximab? ', true], 'Por la respuesta previa de la paciente; la eficacia de la IGIV en dermatomiositis activa (ensayo ProDERM) (3) y en la disfagia refractaria (4); y porque el ensayo RIM de rituximab no cumplió su objetivo primario (5).'],
        [['Fortalezas y limitaciones: ', true], 'biopsia, anticuerpo específico y seguimiento con CK y RM; caso único y retrospectivo, con glucocorticoides concomitantes y seguimiento corto.']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'El fenotipo anti-Mi-2, aunque habitualmente de buen pronóstico, no excluye un curso grave y policíclico. Las recaídas coincidieron con la suspensión del ahorrador y el descenso del glucocorticoide, lo que apoya descensos lentos y mantener el inmunosupresor.',
        'Ante nueva debilidad con exposición prolongada a esteroides, la CK y la RM distinguen la actividad inflamatoria de la miopatía esteroidea; no toda debilidad es miopatía esteroidea.',
        'La IGIV es una alternativa de rescate ante respuesta incompleta a glucocorticoides, en especial con disfagia, y puede repetirse en ciclos periódicos. Un ANA positivo y manifestaciones compartidas no bastan para diagnosticar superposición con LES.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado de la paciente.']] },
    ] },
  ],
  refs: [
    'Pinal-Fernandez I, Mecoli CA, Casal-Dominguez M, Pak K, Hosono Y, Huapaya J, et al. More prominent muscle involvement in patients with dermatomyositis with anti-Mi2 autoantibodies. Neurology. 2019;93(19):e1768-77.',
    'Papadopoulou C, Chew C, Wilkinson MGL, McCann L, Wedderburn LR. Juvenile idiopathic inflammatory myositis: an update on pathophysiology and clinical care. Nat Rev Rheumatol. 2023;19(6):343-62.',
    'Aggarwal R, Charles-Schoeman C, Schessl J, Bata-Csörgő Z, Dimachkie MM, Griger Z, et al. Trial of intravenous immune globulin in dermatomyositis. N Engl J Med. 2022;387(14):1264-78.',
    'Marie I, Menard JF, Hatron PY, Hachulla E, Mouthon L, Tiev K, et al. Intravenous immunoglobulins for steroid-refractory esophageal involvement related to polymyositis and dermatomyositis: a series of 73 patients. Arthritis Care Res (Hoboken). 2010;62(12):1748-55.',
    'Oddis CV, Reed AM, Aggarwal R, Rider LG, Ascherman DP, Levesque MC, et al. Rituximab in the treatment of refractory adult and juvenile dermatomyositis and adult polymyositis: a randomized, placebo-phase trial. Arthritis Rheum. 2013;65(2):314-24.',
  ],
};
