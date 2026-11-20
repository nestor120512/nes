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
  bodyPt: 32, refPt: 22, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'esclerosis sistémica; esclerodermia limitada; calcinosis; calcinosis cutis; radiografía; acroosteólisis.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Dos mujeres con esclerosis sistémica (ES) cutánea limitada y calcinosis distrófica, con calcio, fósforo y creatinina normales. La primera, con perfil anticentrómero, presentaba nódulos glúteos ulcerados; la radiografía de pelvis reveló una calcinosis masiva glútea, trocantérica y de muslos, mucho más extensa que las lesiones visibles. La segunda presentaba depósitos puntiformes en los pulpejos; la radiografía de manos mostró calcificaciones bilaterales y acroosteólisis.'] },
      { h: 'Introducción', p: [
        'La calcinosis cutánea es frecuente en la ES y causa dolor, ulceración, infección y discapacidad. Se asocia con úlceras digitales (1) y con acroosteólisis (2), lo que apoya un papel de la isquemia crónica, y ningún tratamiento ha demostrado eficacia en ensayos controlados (3). El examen físico puede subestimar su extensión, y la radiografía simple es el método más accesible para dimensionarla.',
        [['Aporte de los casos: ', true], 'dos extremos del espectro, uno acral de menor extensión y otro proximal masivo, y el valor de la correlación clínico-radiológica.']] },
    ], right: [
      { h: 'Información de los casos', p: [
        [['Paciente 1. ', true], 'Mujer de 48 años remitida a reumatología en agosto de 2026 por esclerodermia: induración de la piel de las manos, esclerodactilia, facies inexpresiva, microstomía y disfagia; calcificaciones dolorosas en ingle, brazos y glúteos, con cicatrices de extracciones previas.'],
        [['Estudios: ', true], 'ANA 1:640 con patrón centromérico y anticentrómero 1:640; anti-Scl-70, anti-Ro, anti-La, anti-Sm y anti-RNP negativos; calcio, fósforo y creatinina normales. La radiografía de pelvis mostró calcinosis masiva, bilateral y simétrica, con placas confluentes y conglomerados de aspecto tumoral (Figura 1).'],
        [['Paciente 2. ', true], 'Mujer de 41 años con ES cutánea limitada: piel indurada en cara y manos, fenómeno de Raynaud, úlceras digitales previas, microstomía y síndrome de Sjögren. Presentaba depósitos blanquecinos puntiformes en los pulpejos y contracturas en flexión.'],
        [['Estudios: ', true], 'calcio, fósforo y creatinina normales. La radiografía de manos mostró calcificaciones múltiples de partes blandas en los pulpejos y acroosteólisis (Figura 2).'],
        [['Diagnósticos diferenciales: ', true], 'calcinosis metastásica y calcifilaxis (calcio, fósforo y función renal normales), gota tofácea y calcinosis de la dermatomiositis (sin miopatía).'],
        [['Confirmación diagnóstica: ', true], 'calcinosis distrófica, por la imagen radiológica y el estudio metabólico normal.']] },
    ] },
    { split: 0.546, left: [
      { name: 'Figura 1', img: P + 'caso7_figura1_paciente1.jpg', maxH: 8.4,
        caption: 'Figura 1. Paciente 1, calcinosis masiva de partes blandas. (A) Radiografía de pelvis: calcinosis bilateral en región glútea, caderas y muslos. (B) Nódulos subcutáneos de calcinosis en flanco, algunos ulcerados con salida de material blanquecino.' },
    ], right: [
      { name: 'Figura 2', img: P + 'caso7_figura2_paciente2.jpg', maxH: 8.4,
        caption: 'Figura 2. Paciente 2, calcinosis acral. (A) Calcinosis puntiforme en los pulpejos (flechas). Radiografías de ambas manos en proyección posteroanterior (B) y oblicua (C): calcificaciones de partes blandas y acroosteólisis.' },
    ] },
    { left: [
      { h: 'Discusión', p: [
        'La calcinosis de la ES es distrófica: se deposita sobre tejido dañado, con calcio y fósforo normales, y se relaciona con la hipoxia crónica y la vasculopatía digital (3). Por eso se asocia con úlceras digitales (1) y con acroosteólisis (2), como en la paciente 2.',
        'El subtipo cutáneo limitado se define por la extensión del engrosamiento de la piel y no por la localización de la calcinosis (4). La paciente 1 muestra que los depósitos masivos pueden aparecer en regiones proximales, lejos de la piel engrosada, y que la inspección cutánea subestima una extensión que solo la radiografía permitió dimensionar.',
        [['Fortalezas: ', true], 'correlación entre fotografía clínica y radiografía; estudio metabólico que clasifica la calcinosis como distrófica.'],
        [['Limitaciones: ', true], 'dos casos retrospectivos.']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'La calcinosis de la ES va desde depósitos acrales de menor extensión hasta conglomerados proximales masivos, que pueden aparecer incluso en la forma cutánea limitada, lejos de la piel engrosada. En la paciente 1, la radiografía delimitó una extensión mucho mayor que la sugerida por la inspección cutánea.',
        'Ante nódulos dolorosos o ulcerados en pacientes con ES, la radiografía simple dirigida, accesible y de bajo costo, permite dimensionar la extensión real de la calcinosis e identificar lesiones asociadas, como la acroosteólisis.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado firmado de ambas pacientes, incluidas las fotografías.']] },
    ] },
  ],
  refs: [
    'Valenzuela A, Baron M, Herrick AL, Proudman S, Stevens W, Rodriguez-Reyna TS, et al. Calcinosis is associated with digital ulcers and osteoporosis in patients with systemic sclerosis: a Scleroderma Clinical Trials Consortium study. Semin Arthritis Rheum. 2016;46(3):344-9.',
    'Johnstone EM, Hutchinson CE, Vail A, Chevance A, Herrick AL. Acro-osteolysis in systemic sclerosis is associated with digital ischaemia and severe calcinosis. Rheumatology (Oxford). 2012;51(12):2234-8.',
    'Valenzuela A, Chung L. Calcinosis: pathophysiology and management. Curr Opin Rheumatol. 2015;27(6):542-8.',
    'LeRoy EC, Black C, Fleischmajer R, Jablonska S, Krieg T, Medsger TA Jr, et al. Scleroderma (systemic sclerosis): classification, subsets and pathogenesis. J Rheumatol. 1988;15(2):202-5.',
  ],
};
