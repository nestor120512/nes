// Póster – artrosis erosiva de manos, dos casos (Jornadas de la Clínica General del Norte, 70 x 100 cm).
const P = __dirname + '/../';
const L = __dirname + '/../logos/';
module.exports = {
  label: 'REPORTE DE DOS CASOS',
  title: 'Artrosis erosiva de manos: dos rostros de una misma enfermedad. Reporte de dos casos',
  authors: 'José Ángel Salas Siado¹, María Fernanda Torres Ferias²*, Gustavo Andrés Ochoa Bastidas³, Nestor Fabian Sanabria Duarte⁴',
  affiliations: '¹Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. ²Internado Médico, Universidad Libre, Barranquilla, Colombia. ³Internado Médico, Universidad Metropolitana, Barranquilla, Colombia. ⁴Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. *Expositora',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_universidad_metropolitana.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 27, refPt: 20, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'osteoartritis; artrosis erosiva de manos; articulaciones de los dedos; radiografía; artritis reumatoide; metotrexato.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Dos pacientes con artrosis erosiva de manos (AEM): una mujer de 63 años y un hombre de 73 años. En ambos, la radiografía mostró erosiones centrales e imágenes en alas de gaviota en las interfalángicas, con respeto de metacarpofalángicas y carpo. Ambos reciben metotrexato 12,5 mg semanales como alternativa para el componente inflamatorio.'] },
      { h: 'Introducción', p: [
        'La AEM es un subtipo inflamatorio y agresivo de la artrosis de manos, con una prevalencia cercana al 2,8 %, con erosiones subcondrales centrales en las interfalángicas, dolor y mayor discapacidad (1,2). Por su componente inflamatorio puede confundirse con la artritis reumatoide (AR), y el patrón radiológico es la clave del diagnóstico (2).',
        [['Aporte: ', true], 'la artrosis también erosiona, y sus erosiones difieren de las de la AR.']] },
    ], right: [
      { h: 'Información de los casos', p: [
        [['Paciente 1. ', true], 'Mujer de 63 años con artrosis y síndrome de túnel del carpo izquierdo confirmado por electromiografía. La radiografía de manos mostró erosiones óseas e imágenes en alas de gaviota en interfalángicas proximales y distales de ambas manos (Figura 1). Factor reumatoide y anticuerpos antipéptido cíclico citrulinado (anti-CCP) negativos. Recibe metotrexato 12,5 mg semanales, ácido fólico y acetaminofén.'],
        [['Paciente 2. ', true], 'Hombre de 73 años remitido con diagnóstico de AR seronegativa por 6 meses de dolor poliarticular, rigidez, fatiga y trastorno del sueño. Presentaba nódulos de Heberden, crepitación en hombros y rodillas y más de 12 puntos dolorosos. Factor reumatoide <6 UI/mL y anti-CCP negativos, proteína C reactiva normal y VSG 22 mm/h. La radiografía de mano mostró erosiones centrales y colapso en alas de gaviota en las interfalángicas, con destrucción de la interfalángica del pulgar (Figura 2); la de cadera, coxartrosis.'],
        [['Diagnóstico y manejo del paciente 2: ', true], 'AEM, coxartrosis y fibromialgia. Al igual que la paciente 1, recibe metotrexato 12,5 mg semanales, además de hidroxicloroquina, metilprednisolona a dosis baja, pregabalina y sertralina; fue remitido a ortopedia.']] },
    ] },
    { full: { name: 'Figura 1', img: P + 'caso_AEM_figura1_paciente1.jpg', maxH: 6.2,
      caption: 'Figura 1. Paciente 1. Radiografías de ambas manos en proyección posteroanterior (A) y oblicua (B): erosiones centrales e imágenes en alas de gaviota en interfalángicas proximales y distales (círculos), con respeto de metacarpofalángicas y carpo.' } },
    { split: 0.42, left: [
      { name: 'Figura 2', img: P + 'caso_AEM_figura2_paciente2.jpg',
        caption: 'Figura 2. Paciente 2. Radiografías de la mano derecha en proyección posteroanterior (A) y oblicua (B): erosiones centrales con colapso en alas de gaviota en interfalángicas distales y proximales, y destrucción de la interfalángica del pulgar (círculos).' },
    ], right: [
      { name: 'Tabla 1', table: {
        title: 'Tabla 1. Erosiones en AEM frente a AR',
        colW: [0.24, 0.37, 0.39], pt: 26, tiles: true, rowH: [0.58, 1.02, 0.58, 0.58, 0.62, 1.02],
        header: ['', 'Artrosis erosiva', 'Artritis reumatoide'],
        rows: [
          [{ text: 'Articulaciones', bold: true, fill: 'E7F3F0' }, 'Interfalángicas distales y proximales', 'Metacarpofalángicas, interfalángicas proximales y carpo'],
          [{ text: 'Erosión', bold: true, fill: 'E7F3F0' }, 'Central, subcondral', 'Marginal, en las "zonas desnudas"'],
          [{ text: 'Aspecto', bold: true, fill: 'E7F3F0' }, 'Alas de gaviota o dientes de sierra', 'Erosión en sacabocados'],
          [{ text: 'Hueso', bold: true, fill: 'E7F3F0' }, 'Osteofitos, esclerosis; posible anquilosis', 'Osteopenia periarticular, sin osteofitos'],
          [{ text: 'Laboratorio', bold: true, fill: 'E7F3F0' }, 'Factor reumatoide y anti-CCP negativos', 'Factor reumatoide o anti-CCP positivos con frecuencia'],
        ],
        note: 'AEM: artrosis erosiva de manos; AR: artritis reumatoide; anti-CCP: anticuerpos antipéptido cíclico citrulinado (1,2).' } },
      { h: 'Evidencia del metotrexato', p: [
        'Ninguna guía lo recomienda de rutina (3). En AEM, 10 mg/semana no superó al placebo en una población tardía con escasa sinovitis (4). En artrosis de manos con sinovitis por resonancia, 20 mg/semana redujo el dolor a 6 meses (tamaño del efecto 0,45) sin más eventos adversos (5). En rodilla el beneficio fue modesto o nulo (6,7), y un metaanálisis de 6 ensayos mostró una reducción moderada del dolor (8).'] },
    ] },
    { left: [
      { h: 'Discusión', p: [
        [['Diferencia con la AR. ', true], 'En la AEM las erosiones son centrales y con formación ósea; en la AR, marginales y con osteopenia (Tabla 1) (1,2). En el paciente 2, remitido como AR seronegativa, la imagen, los nódulos de Heberden y la serología negativa reorientaron el diagnóstico.'],
        [['¿Por qué metotrexato? ', true], 'No hay fármacos modificadores aprobados para la AEM. El único ensayo con fenotipo inflamatorio y dosis plenas fue positivo (5), y el negativo usó dosis bajas en enfermedad tardía (4). Es barato, conocido y seguro con monitorización: una alternativa razonable fuera de indicación, aunque de efecto modesto y sin beneficio estructural demostrado (4,8).']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'La artrosis puede ser erosiva. Las erosiones centrales en alas de gaviota en interfalángicas, con formación ósea y serología negativa, orientan a AEM y la distinguen de la AR.',
        'El metotrexato es una alternativa fuera de indicación en el fenotipo inflamatorio con dolor refractario, a dosis plenas y con monitorización.',
        [['Fortalezas y limitaciones: ', true], 'correlación clínico-radiológica y anticuerpos de artritis reumatoide negativos en ambos; sin ecografía ni seguimiento.'],
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de ambos pacientes.']] },
    ] },
  ],
  refs: [
    'Favero M, Belluzzi E, Ortolan A, Lorenzin M, Oliviero F, Doria A, et al. Erosive hand osteoarthritis: latest findings and outlook. Nat Rev Rheumatol. 2022;18(3):171-83.',
    'Bean MB, Favero M, Ramonda R, Scanzello CR. Erosive hand osteoarthritis: recent advances and future treatments. Curr Rheumatol Rep. 2024;26(4):103-11.',
    'Kloppenburg M, Kroon FP, Blanco FJ, Doherty M, Dziedzic KS, Greibrokk E, et al. 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis. 2019;78(1):16-24.',
    'Ferrero S, Wittoek R, Allado E, Cruzel C, Fontas E, Breuil V, et al. Methotrexate treatment in hand osteoarthritis refractory to usual treatments: a randomised, double-blind, placebo-controlled trial. Semin Arthritis Rheum. 2021;51(4):831-8.',
    'Wang Y, Jones G, Keen HI, Hill CL, Wluka AE, Kasza J, et al. Methotrexate to treat hand osteoarthritis with synovitis (METHODS): an Australian, multisite, parallel-group, double-blind, randomised, placebo-controlled trial. Lancet. 2023;402(10414):1764-72.',
    'Kingsbury SR, Tharmanathan P, Keding A, Watt FE, Scott DL, Roddy E, et al. Pain reduction with oral methotrexate in knee osteoarthritis: a randomized, placebo-controlled clinical trial. Ann Intern Med. 2024;177(9):1145-56.',
    'Zhu Z, Yu Q, Leng X, et al. Low-dose methotrexate for the treatment of inflammatory knee osteoarthritis: a randomized clinical trial. JAMA Intern Med. 2025.',
    'Wong W, Huang Y, Wichienwantana N, et al. Efficacy and safety of methotrexate in osteoarthritis: a systematic review and meta-analysis of randomized controlled trials. Osteoarthritis Cartilage. 2025.',
  ],
};
