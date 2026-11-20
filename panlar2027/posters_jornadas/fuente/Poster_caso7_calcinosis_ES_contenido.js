// Póster 5 – calcinosis en esclerosis sistémica (formato de los pósteres 1 a 3).
const P = __dirname + '/../../';
const L = __dirname + '/../logos/';
module.exports = {
  label: 'REPORTE DE DOS CASOS',
  title: 'Lo que la piel esconde: dos extremos clínico-radiológicos de la calcinosis en esclerosis sistémica. Reporte de dos casos',
  authors: 'José Ángel Salas Siado¹, Nestor Fabian Sanabria Duarte²*, Xamy Paola Arrieta Escorcia³, Silena María Arias Fuentes³',
  affiliations: '¹Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ³Internado Médico, Fundación Universitaria San Martín, Barranquilla, Colombia. *Expositor',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_fundacion_san_martin.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 30, refPt: 22, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'esclerosis sistémica; esclerodermia limitada; calcinosis; calcinosis cutis; radiografía; acroosteólisis.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Dos mujeres con esclerosis sistémica (ES) cutánea limitada y calcinosis distrófica. En la primera, la radiografía de pelvis reveló una calcinosis masiva glútea, trocantérica y de muslos, mucho más extensa que las lesiones visibles; en la segunda, la radiografía de manos mostró calcificaciones de los pulpejos y acroosteólisis.'] },
      { h: 'Introducción', p: [
        'La calcinosis cutánea es frecuente en la ES y causa dolor, ulceración, infección y discapacidad, y ningún tratamiento ha demostrado eficacia en ensayos controlados (1). El examen físico puede subestimar su extensión, y la radiografía simple es el método más accesible para dimensionarla.',
        [['Aporte de los casos: ', true], 'dos extremos del espectro, acral y proximal masivo, y el valor de la radiografía.']] },
    ], right: [
      { h: 'Información de los casos', p: [
        [['Paciente 1. ', true], 'Mujer de 48 años remitida en agosto de 2026 por esclerodermia: induración de manos, esclerodactilia, facies inexpresiva, microstomía y disfagia; calcificaciones dolorosas en ingle, brazos y glúteos, con extracciones previas.'],
        [['Estudios: ', true], 'ANA 1:640 con patrón centromérico y anticentrómero 1:640; anti-Scl-70, anti-Ro, anti-La, anti-Sm y anti-RNP negativos; calcio, fósforo y creatinina normales. La radiografía de pelvis mostró calcinosis masiva, bilateral y simétrica, con conglomerados de aspecto tumoral (Figura 1).'],
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
    { left: [
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
    'Avanoglu-Guler A, et al. Semin Arthritis Rheum. 2024.',
    'LeRoy EC, Black C, Fleischmajer R, Jablonska S, Krieg T, Medsger TA Jr, et al. Scleroderma (systemic sclerosis): classification, subsets and pathogenesis. J Rheumatol. 1988;15(2):202-5.',
    'Samões B, Guimarães da Fonseca D, Beirão T, et al. Assessment of calcinosis in Portuguese patients with systemic sclerosis: a multicenter study. Clin Rheumatol. 2023;42(8).',
    'Richardson C, Plaas A, Varga J. Calcinosis in systemic sclerosis: updates in pathophysiology, evaluation, and treatment. Curr Rheumatol Rep. 2020;22(10):73.',
    'Mar D, Valenzuela A, Stevens KJ, Chung L, Fairchild RM. A narrative review of imaging in calcinosis associated with systemic sclerosis. Clin Rheumatol. 2021;40(10).',
  ],
};
