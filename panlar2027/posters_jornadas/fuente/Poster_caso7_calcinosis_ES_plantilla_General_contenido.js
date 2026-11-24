// Póster 5 – calcinosis en esclerosis sistémica (formato de los pósteres 1 a 3).
const P = __dirname + '/../../';
const L = __dirname + '/../logos/';
module.exports = {
  title: 'Lo que la piel esconde: dos extremos clínico-radiológicos de la calcinosis en esclerosis sistémica. Reporte de dos casos',
  authors: 'José Ángel Salas Siado¹, Nestor Fabian Sanabria Duarte², Xamy Paola Arrieta Escorcia³*, Silena María Arias Fuentes³',
  affiliations: '¹Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ³Internado Médico, Fundación Universitaria San Martín, Barranquilla, Colombia. *Expositora',
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
    { f: __dirname + '/../logos/logo_fundacion_san_martin.png', h: 1.5 },
    { f: __dirname + '/../logos/logo_ima_reumatologia.png', h: 2.2 } ] },
  bandLabel: { text: 'REPORTE DE DOS CASOS', x: 25.2, y: 4.65, w: 9.2, h: 1.15, pt: 30 },
  bodyPt: 30, refPt: 19, smallPt: 22, justify: true, textSlack: -0.12, lineSpacing: 0.94, blockGap: 0.25,
  // Paleta tomada de la plantilla: azul de "Jornadas Médicas" y verde de la franja "Medicina integrada"
  primary: '0E3149', accent: '38B599', tint: 'E8F6F2', border: 'B5DDD2', statColor: 'E62C4A',
  titleColor: '0E3149', titlePt: 50, bandHeads: true,
  keywords: 'esclerosis sistémica; esclerodermia limitada; calcinosis; calcinosis cutis; radiografía; acroosteólisis.',
  segments: [
    { split: 0.425, left: [
      { h: 'Resumen', p: [
        'Dos mujeres con esclerosis sistémica (ES) cutánea limitada y calcinosis distrófica. En la primera, la radiografía de pelvis reveló una calcinosis masiva glútea, trocantérica y de muslos, mucho más extensa que las lesiones visibles; en la segunda, la radiografía de manos mostró calcificaciones de los pulpejos y acroosteólisis.'] },
      { h: 'Introducción', p: [
        'La calcinosis cutánea es frecuente en la ES y causa dolor, ulceración, infección y discapacidad, y ningún tratamiento ha demostrado eficacia en ensayos controlados (1). El examen físico puede subestimar su extensión, y la radiografía simple es el método más accesible para dimensionarla.',
        [['Aporte de los casos: ', true], 'dos extremos del espectro, acral y proximal masivo, y el valor de la radiografía.']] },
    ], right: [
      { h: 'Información de los casos', slack: 0.12, p: [
        [['Paciente 1. ', true], 'Mujer de 48 años remitida en agosto de 2026 por esclerodermia: induración de manos, esclerodactilia, facies inexpresiva, microstomía y disfagia; calcificaciones dolorosas en ingle, brazos y glúteos, con extracciones previas.'],
        [['Estudios: ', true], 'anticuerpos antinucleares (ANA) 1:640 con patrón centromérico y anticentrómero 1:640; anti-Scl-70, anti-Ro, anti-La, anti-Sm y anti-RNP negativos; calcio, fósforo y creatinina normales. La radiografía de pelvis mostró calcinosis masiva, bilateral y simétrica, con conglomerados de aspecto tumoral (Figura 1).'],
        [['Paciente 2. ', true], 'Mujer de 41 años con ES cutánea limitada: piel indurada en cara y manos, fenómeno de Raynaud, úlceras digitales previas, microstomía y síndrome de Sjögren. Presentaba depósitos blanquecinos puntiformes en los pulpejos y contracturas en flexión.'],
        [['Estudios: ', true], 'calcio, fósforo y creatinina normales. La radiografía de manos mostró calcificaciones múltiples de partes blandas en los pulpejos y acroosteólisis (Figura 2).'],
        [['Diagnósticos diferenciales: ', true], 'calcinosis metastásica y calcifilaxis (calcio, fósforo y función renal normales), gota tofácea y calcinosis de la dermatomiositis (sin miopatía).'],
        [['Confirmación diagnóstica: ', true], 'calcinosis distrófica, por la imagen radiológica y el estudio metabólico normal.']] },
    ] },
    { split: 0.546, left: [
      { name: 'Figura 1', img: P + 'caso7_figura1_paciente1.jpg', maxH: 7.0,
        caption: 'Figura 1. Paciente 1, calcinosis masiva de partes blandas. (A) Radiografía de pelvis: calcinosis bilateral en región glútea, caderas y muslos. (B) Nódulos subcutáneos de calcinosis en flanco, algunos ulcerados con salida de material blanquecino.' },
    ], right: [
      { name: 'Figura 2', img: P + 'caso7_figura2_paciente2.jpg', maxH: 7.0,
        caption: 'Figura 2. Paciente 2, calcinosis acral. (A) Calcinosis puntiforme en los pulpejos (flechas). Radiografías de ambas manos en proyección posteroanterior (B) y oblicua (C): calcificaciones de partes blandas y acroosteólisis.' },
    ] },
    { split: 0.52, left: [
      { h: 'Discusión', p: [
        [['Calcinosis frecuente y asociada a vasculopatía. ', true], 'Afecta al menos a una cuarta parte de los pacientes con ES y se asocia con úlceras digitales, acroosteólisis y anticuerpos anticentrómero (1). Es una calcificación distrófica, en la que la isquemia crónica y el traumatismo repetido son los mecanismos principales (2).'],
        [['Dos extremos del espectro. ', true], 'La paciente 2 reúne el patrón acral clásico: Raynaud, úlceras digitales, calcificaciones de pulpejos y acroosteólisis. La paciente 1, con anticentrómero a título alto, presentó conglomerados de aspecto tumoral en glúteos, trocánteres y muslos, lejos de la piel engrosada: el subtipo limitado se define por la extensión del engrosamiento cutáneo, no por la localización de la calcinosis (3).'],
        [['El examen físico subestima la carga real. ', true], 'En la paciente 1, la radiografía mostró una extensión mucho mayor que las lesiones visibles y palpables. En una cohorte multicéntrica de 226 pacientes, el 40,7 % de la calcinosis radiológica era subclínica, y la sensibilidad del examen clínico (58,2 %) fue menor que la de la radiografía de manos (74,7 %) (4).'],
        [['La radiografía simple es una herramienta práctica. ', true], 'Es sensible, específica, ampliamente disponible, de baja radiación y cuenta con un puntaje validado para manos (5). Sigue siendo la modalidad más usada; la ecografía y la tomografía computarizada se reservan para cuando se requiere más detalle anatómico (6).'],
        [['Fortalezas. ', true], 'correlación clínico-radiológica y estudio metabólico que confirma la calcinosis distrófica.']] },
    ], right: [
      { h: 'Aporte y limitaciones', p: [
        [['Aporte del caso. ', true], 'El cribado radiográfico se ha centrado en manos, codos, rodillas y pies (4). La radiografía dirigida de pelvis y muslos no está sistematizada, pero es razonable ante nódulos dolorosos o ulcerados en esas zonas.'],
        [['Limitaciones de la técnica. ', true], 'La radiografía es bidimensional y cuantifica de forma limitada (5). En conglomerados masivos, la tomografía, incluida la de energía dual, puede delimitar mejor la carga y orientar un eventual desbridamiento quirúrgico (2,6).'],
        [['Limitaciones del reporte. ', true], 'dos casos retrospectivos, sin comparación con otras técnicas de imagen ni seguimiento longitudinal.']] },
      { h: 'Conclusión', hl: true, p: [
        'La calcinosis de la ES va desde depósitos acrales hasta conglomerados proximales masivos, incluso en la forma cutánea limitada. La radiografía simple dirigida, accesible y de bajo costo, permite dimensionar su extensión real e identificar lesiones asociadas como la acroosteólisis.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de ambas pacientes.']] },
    ] },
  ],
  refs: [
    'Valenzuela A, Song P, Chung L. Calcinosis in scleroderma. Curr Opin Rheumatol. 2018;30(6):601-7.',
    'Avanoglu-Guler A, Campochiaro C, De Luca G, Hughes M, Tufan A, Green L, et al. Calcinosis in systemic sclerosis: an update on pathogenesis, related complications, and management: a heavy burden still waiting to be lifted off patients\' hands. Semin Arthritis Rheum. 2024;66:152431.',
    'LeRoy EC, Black C, Fleischmajer R, Jablonska S, Krieg T, Medsger TA Jr, et al. Scleroderma (systemic sclerosis): classification, subsets and pathogenesis. J Rheumatol. 1988;15(2):202-5.',
    'Samões B, Guimarães da Fonseca D, Beirão T, et al. Assessment of calcinosis in Portuguese patients with systemic sclerosis: a multicenter study. Clin Rheumatol. 2023;42(8):2125-34.',
    'Richardson C, Plaas A, Varga J. Calcinosis in systemic sclerosis: updates in pathophysiology, evaluation, and treatment. Curr Rheumatol Rep. 2020;22(10):73.',
    'Mar D, Valenzuela A, Stevens KJ, Chung L, Fairchild RM. A narrative review of imaging in calcinosis associated with systemic sclerosis. Clin Rheumatol. 2021;40(10). doi:10.1007/s10067-021-05696-6.',
  ],
};
