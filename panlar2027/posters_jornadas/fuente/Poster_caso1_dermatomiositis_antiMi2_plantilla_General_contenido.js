// Póster 1 – contenido tomado del manuscrito "dermatomiositis_antimi2_3" y del resumen enviado a PANLAR.
module.exports = {
  title: 'Dermatomiositis juvenil anti-Mi-2 de curso policíclico con respuesta repetida a inmunoglobulina intravenosa: reporte de caso',
  authors: 'Nestor Fabian Sanabria Duarte¹*, José Ángel Salas Siado², Sandra Sofía Sánchez Hernández¹, Juan Camilo Tafur Vidal¹',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositor',
  // Plantilla oficial de las Jornadas (fondo con encabezado y pie de la Clínica General del Norte)
  // Plantilla de las Jornadas reconstruida en alta resolución: franja y textos editables, pie y logos en imágenes nítidas
  topY: 6.85, bottomY: 47.85, noLogos: true, noPill: true,
  templateBand: { y: 3.894, h: 2.69, color: '38B599',
    icon: { path: __dirname + '/../logos/icono_franja_hd.png', x: 10.10, y: 4.14, w: 2.10, h: 2.08 },
    title: { text: 'Medicina integrada:', x: 12.30, y: 4.22, w: 16, h: 1.12, pt: 66, bold: true },
    subtitle: { text: 'Desde la prevención hasta la precisión', x: 12.30, y: 5.36, w: 16, h: 0.82, pt: 44 } },
  footerImg: { path: __dirname + '/../logos/pie_plantilla_hd.png', y: 43.83, h: 6.79 },
  logoRow: { cy: 2.05, gap: 1.1, divH: 2.0, items: [
    { f: __dirname + '/../logos/logo_clinica_general_del_norte.png', h: 2.75 },
    { f: __dirname + '/../logos/logo_jornadas_xxix_hd.png', h: 1.7 },
    { f: __dirname + '/../logos/logo_universidad_libre.png', h: 1.9 },
    { f: __dirname + '/../logos/logo_ima_reumatologia.png', h: 2.2 } ] },
  bandLabel: { text: 'REPORTE DE CASO', x: 26.0, y: 4.65, w: 8.4, h: 1.15, pt: 30 },
  bodyPt: 30, refPt: 19, smallPt: 22, justify: true, textSlack: -0.12,
  // Paleta tomada de la plantilla: azul de "Jornadas Médicas" y verde de la franja "Medicina integrada"
  primary: '0E3149', accent: '38B599', tint: 'E8F6F2', border: 'B5DDD2', statColor: 'E62C4A',
  titleColor: '0E3149', titlePt: 50, bandHeads: true, statPt: 58,
  keywords: 'dermatomiositis juvenil; anticuerpos anti-Mi-2; inmunoglobulinas intravenosas; disfagia; miopatía esteroidea; resonancia magnética.',
  segments: [
    { split: 0.47, left: [
      { h: 'Resumen', p: [
        'Mujer de 19 años con dermatomiositis juvenil anti-Mi-2α/β, diagnosticada a los 17 años y confirmada por biopsia, que ingresó por su cuarta recaída en 19 meses: fuerza proximal 2/5, incapacidad para caminar y CK de 5.720 U/L. Pese a los signos cushingoides, la CK y la resonancia magnética (RM) orientaron a actividad inflamatoria y no a miopatía esteroidea. Ante la respuesta incompleta a metilprednisolona y la reaparición de la disfagia, se reinició la inmunoglobulina intravenosa (IGIV), eficaz ya al diagnóstico; al tercer ciclo mensual, la CK bajó a 202 U/L, la disfagia se resolvió y recuperó la marcha con apoyo.'] },
      { h: 'Introducción', p: [
        'La dermatomiositis juvenil es una miopatía inflamatoria con debilidad proximal simétrica y lesiones cutáneas características, cuyo fenotipo varía según el autoanticuerpo específico. Los pacientes anti-Mi-2 tienen compromiso muscular prominente, menor riesgo de enfermedad pulmonar intersticial y de neoplasia, y buena respuesta a la inmunosupresión, aunque se describen cursos policíclicos (1,2). La superposición con lupus eritematoso sistémico (LES) es un reto diagnóstico (2).',
        [['Aporte del caso: ', true], 'un curso grave y policíclico en un fenotipo considerado favorable, con respuesta repetida a la IGIV.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 19 años que ingresó en agosto de 2026 por un mes de debilidad proximal progresiva, hasta no poder caminar, y mialgias incapacitantes.'],
        [['Antecedentes relevantes: ', true], 'dermatomiositis juvenil anti-Mi-2α/β diagnosticada a los 17 años (enero de 2025) por signo de Gottron, debilidad proximal 3/5, disfagia y CK de 12.588 U/L; biopsia con cambios miopáticos, infiltrado linfoide y fibras atróficas (EULAR/ACR 2017: 9,6 puntos). Respondió a la IGIV tras una respuesta incompleta a glucocorticoides y azatioprina, y tuvo tres recaídas previas (Tabla 1).'],
        [['Examen físico: ', true], 'fuerza proximal 2/5, incapacidad para la marcha, facies cushingoide y estrías.'],
        [['Estudios relevantes: ', true], 'CK 5.720 U/L; RM de muslos con edema muscular difuso transcompartimental y compromiso fascial; TC de tórax sin enfermedad pulmonar intersticial; FEVI 63 %.'],
        [['Diagnósticos diferenciales: ', true], 'miopatía esteroidea, por la exposición prolongada a glucocorticoides; superposición con LES (ANA hasta 1:1280, eritema facial, alopecia, artralgias, derrames pleurales), descartada por anti-ADNdc negativo, complemento normal, antifosfolípidos negativos y sin nefritis; enfermedad mixta, descartada por anti-RNP negativo.'],
        [['Confirmación diagnóstica: ', true], 'la CK elevada y el edema en la RM confirmaron una recaída inflamatoria y no una miopatía esteroidea.']] },
    ] },
    { full: { name: 'Tabla 1', table: {
      title: 'Tabla 1. Evolución clínica y tratamiento',
      colW: [0.095, 0.115, 0.42, 0.37], pt: 30, rowH: [0.57, 1.07, 1.52, 0.6, 0.58, 1.07, 1.07, 1.07],
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
        'Ante nueva debilidad con exposición prolongada a esteroides, la CK y la RM distinguen la actividad inflamatoria de la miopatía esteroidea.',
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
