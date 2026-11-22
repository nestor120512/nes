// Póster – artrosis erosiva de manos, dos casos (Jornadas de la Clínica General del Norte, 70 x 100 cm).
const P = __dirname + '/../';
const L = __dirname + '/../logos/';
module.exports = {
  label: 'SERIE DE CASOS',
  title: 'Artrosis erosiva de manos: dos rostros de una misma enfermedad. Serie de casos',
  authors: 'José Ángel Salas Siado¹, María Fernanda Torres Ferias²*, Gustavo Andrés Ochoa Bastidas³, Karen Milagros Pérez Molinares⁴, Edison Hernández Ebradh⁴, Nestor Fabian Sanabria Duarte⁵',
  affiliations: '¹Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. ²Internado Médico, Universidad Libre, Barranquilla, Colombia. ³Internado Médico, Universidad Metropolitana, Barranquilla, Colombia. ⁴Programa de Especialización en Medicina Interna, Universidad Metropolitana, Barranquilla, Colombia. ⁵Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. *Expositora',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_universidad_metropolitana.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 26, refPt: 20, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'osteoartritis; artrosis erosiva de manos; articulaciones de los dedos; radiografía; artritis reumatoide; metotrexato.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Tres pacientes con artrosis erosiva de manos (AEM): mujeres de 63 y 79 años y un hombre de 73 años. En todos, la radiografía mostró erosiones centrales de predominio interfalángico, con esclerosis, osteofitos y anticuerpos de artritis reumatoide (AR) negativos. Dos reciben metotrexato 12,5 mg semanales como alternativa para el componente inflamatorio.'] },
      { h: 'Introducción', p: [
        'La AEM es un subtipo inflamatorio y agresivo de la artrosis de manos, con una prevalencia cercana al 2,8 %, con erosiones subcondrales centrales en las interfalángicas, dolor y mayor discapacidad (1,2). Por su componente inflamatorio puede confundirse con la AR, y el patrón radiológico es la clave del diagnóstico (2).',
        [['Aporte: ', true], 'la artrosis también erosiona, y sus erosiones difieren de las de la AR.']] },
    ], right: [
      { h: 'Información de los casos', p: [
        [['Paciente 1. ', true], 'Mujer de 63 años con artrosis y túnel del carpo izquierdo. La radiografía mostró erosiones e imágenes en alas de gaviota en interfalángicas proximales y distales de ambas manos (Figura 1). Factor reumatoide y anticuerpos antipéptido cíclico citrulinado (anti-CCP) negativos. Recibe metotrexato 12,5 mg semanales, ácido fólico y acetaminofén.'],
        [['Paciente 2. ', true], 'Hombre de 73 años remitido como AR seronegativa por 6 meses de dolor poliarticular, rigidez y fatiga, con nódulos de Heberden; factor reumatoide y anti-CCP negativos y proteína C reactiva normal. La radiografía mostró erosiones centrales en alas de gaviota y destrucción de la interfalángica del pulgar (Figura 2). Se diagnosticaron AEM, coxartrosis y fibromialgia; recibe metotrexato 12,5 mg semanales, hidroxicloroquina, metilprednisolona a dosis baja, pregabalina y sertralina.'],
        [['Paciente 3. ', true], 'Mujer de 79 años con AEM y artritis; radiografía de 2021 compatible con AEM. La de 2026 mostró erosiones y cambios osteoartrósicos en interfalángicas distales y en ambos pulgares, con esclerosis subcondral y osteofitos marginales (Figura 3). Factor reumatoide y anti-CCP negativos. Recibe acetaminofén según dolor y colágeno hidrolizado.']] },
    ] },
    { split: 0.68, left: [
      { name: 'Figura 1', img: P + 'caso_AEM_figura1_paciente1.jpg',
        caption: 'Figura 1. Paciente 1. Ambas manos en proyección posteroanterior (A) y oblicua (B): erosiones centrales en alas de gaviota en interfalángicas proximales y distales (círculos), con respeto de metacarpofalángicas y carpo.' },
    ], right: [
      { name: 'Figura 2', img: P + 'caso_AEM_figura2_paciente2.jpg',
        caption: 'Figura 2. Paciente 2. Mano derecha, proyección posteroanterior (A) y oblicua (B): erosiones centrales en alas de gaviota y destrucción de la interfalángica del pulgar (círculos).' },
    ] },
    { split: 0.33, left: [
      { name: 'Figura 3', img: P + 'caso_AEM_figura3_paciente3.jpg',
        caption: 'Figura 3. Paciente 3. Ambas manos: erosiones y cambios osteoartrósicos en interfalángicas distales y pulgares, con esclerosis y osteofitos (círculos).' },
    ], right: [
      { name: 'Tabla 1', table: {
        title: 'Tabla 1. Erosiones en AEM frente a AR',
        colW: [0.24, 0.37, 0.39], pt: 26, tiles: true,
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
        'Ninguna guía lo recomienda de rutina (3). En AEM, 10 mg/semana no superó al placebo en una población tardía con escasa sinovitis (4). En artrosis de manos con sinovitis por resonancia, 20 mg/semana redujo el dolor a 6 meses (tamaño del efecto 0,45), sin más eventos adversos (5). En rodilla fue modesto o nulo (6,7); un metaanálisis de 6 ensayos confirmó una reducción moderada del dolor (8).'] },
    ] },
    { left: [
      { h: 'Discusión', p: [
        [['Diferencia con la AR. ', true], 'En la AEM las erosiones son centrales y con formación ósea; en la AR, marginales y con osteopenia (Tabla 1) (1,2). En el paciente 2, remitido como AR seronegativa, la imagen, los nódulos de Heberden y la serología negativa reorientaron el diagnóstico.'],
        [['¿Por qué metotrexato? ', true], 'No hay fármacos modificadores aprobados para la AEM. El único ensayo con fenotipo inflamatorio y dosis plenas fue positivo (5); el negativo usó dosis bajas en enfermedad tardía (4). Su efecto es modesto y sin beneficio estructural demostrado (4,8).'],
        [['Fortalezas y limitaciones: ', true], 'correlación clínico-radiológica y serología negativa en los tres pacientes; sin estudio ecográfico.']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'No hay que olvidar que, aunque la artrosis habitualmente no se asocia con erosiones, sí puede producirlas. En la AEM, las erosiones centrales en alas de gaviota de las interfalángicas, con formación ósea y anticuerpos de AR negativos, permiten distinguirla de la AR y evitar un diagnóstico y un tratamiento equivocados.',
        'En el fenotipo inflamatorio con dolor refractario, el metotrexato a dosis plenas y con monitorización es una alternativa razonable fuera de indicación.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de los tres pacientes.']] },
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
