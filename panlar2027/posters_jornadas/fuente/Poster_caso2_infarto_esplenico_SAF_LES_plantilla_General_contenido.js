// Póster 2 – infarto esplénico, SAF con aPL IgM aislados y LES de inicio tardío (formato del póster 1).
const P = __dirname + '/../../';
const L = __dirname + '/../logos/';
module.exports = {
  title: 'Infarto esplénico como manifestación de síndrome antifosfolípido con anticuerpos IgM aislados en lupus de inicio tardío: reporte de caso',
  authors: 'Jhonatan Padilla Navarro¹*, Nestor Fabian Sanabria Duarte¹, Jessica Morales Holguin¹, Edison Hernández Ebradh², José Ángel Salas Siado³',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Metropolitana, Barranquilla, Colombia. ³Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositor',
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
    { f: __dirname + '/../logos/logo_universidad_metropolitana.png', h: 1.6 },
    { f: __dirname + '/../logos/logo_ima_reumatologia.png', h: 2.2 } ] },
  bandLabel: { text: 'REPORTE DE CASO', x: 26.0, y: 4.65, w: 8.4, h: 1.15, pt: 30 },
  bodyPt: 30, refPt: 19, smallPt: 22, justify: true, textSlack: -0.12,
  // Paleta tomada de la plantilla: azul de "Jornadas Médicas" y verde de la franja "Medicina integrada"
  primary: '0E3149', accent: '38B599', tint: 'E8F6F2', border: 'B5DDD2', statColor: 'E62C4A',
  titleColor: '0E3149', titlePt: 50, bandHeads: true,
  keywords: 'síndrome antifosfolípido; lupus eritematoso sistémico; infarto del bazo; anticuerpos anticardiolipina; beta 2-glicoproteína I; criterios de clasificación; anticoagulación.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 63 años con lupus eritematoso sistémico (LES) de inicio tardío y anticardiolipina (aCL) y anti-β2-glicoproteína I (aβ2GPI) IgM persistentes, que reingresó con pancitopenia, serositis, proteinuria en rango nefrótico e infarto esplénico en la tomografía. Cumplía los criterios de Sydney, pero no los del American College of Rheumatology y la European Alliance of Associations for Rheumatology (ACR/EULAR) 2023, por sumar solo 1 punto de laboratorio. Se consideró un síndrome antifosfolípido (SAF) clínico secundario a LES y se anticoaguló con warfarina, con recuperación hematológica.'] },
      { h: 'Introducción', p: [
        'El SAF se asocia con frecuencia al LES y empeora su pronóstico (1). Los criterios ACR/EULAR 2023 ponderan los anticuerpos antifosfolípidos (aPL) por isotipo: la aCL y la aβ2GPI IgM aisladas suman solo 1 de los 3 puntos de laboratorio requeridos (2), mientras que los criterios de Sydney las aceptan (3). Tras una trombosis, las recomendaciones EULAR indican anticoagulación con antagonistas de la vitamina K (4).',
        'El infarto esplénico es raro en el SAF: se describe en el 1,1-1,8 % de los pacientes, con frecuencia en el contexto de un SAF catastrófico (5). Obliga a descartar embolia cardíaca, trombosis portal y otros estados de hipercoagulabilidad.',
        [['Aporte del caso: ', true], 'una trombosis en sitio inusual que muestra la discordancia entre ambos sistemas de criterios.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 63 años que reingresó en septiembre de 2026 por pancitopenia.'],
        [['Antecedentes relevantes: ', true], 'LES diagnosticado en julio de 2026, con debut por pancitopenia, tratado con metilprednisolona y azatioprina. Perfil inicial de aPL: aCL IgM 69,38 U/mL y aβ2GPI IgM >200 UR/mL, con aCL y aβ2GPI IgG y anticoagulante lúpico negativos.'],
        [['Examen físico: ', true], 'livedo reticularis y ascitis.'],
        [['Estudios relevantes: ', true], 'hemoglobina 8,6 g/dL y plaquetas 46.000/µL, sin esquistocitos; Coombs directo positivo; proteinuria de 3,8 g/24 h; C3 52 mg/dL y C4 <2,9 mg/dL. La tomografía abdominal mostró una lesión periférica en cuña en el polo inferior del bazo, compatible con infarto esplénico (Figura 1).'],
        [['Diagnósticos diferenciales: ', true], 'embolia cardíaca (ritmo sinusal, ecocardiograma normal), trombosis o hipertensión portal (Doppler normal; gradiente de albúmina sérica-ascitis [GASA] <1,1) y microangiopatía trombótica (sin esquistocitos).'],
        [['Confirmación diagnóstica: ', true], 'a las 12 semanas persistió la doble positividad IgM (aCL 80 U/mL; aβ2GPI en título alto), con anticoagulante lúpico negativo: cumplía Sydney, pero no ACR/EULAR 2023, al sumar solo 1 de los 3 puntos de laboratorio. Se consideró un SAF clínico secundario a LES.'],
        [['Tratamiento y evolución: ', true], 'pulsos de metilprednisolona, hidroxicloroquina y micofenolato por nefritis lúpica presunta (biopsia rechazada). Con plaquetas de 127.000/µL, enoxaparina como puente a warfarina (razón internacional normalizada [INR] 2-3); a las 2 semanas, plaquetas 239.000/µL y hemoglobina 10,0 g/dL.']] },
    ] },
    { split: 0.53, left: [
      { name: 'Figura 1', img: P + 'caso2_figura1_TC_infarto_esplenico.png',
        caption: 'Figura 1. Tomografía abdominal con contraste: área hipodensa periférica en el bazo (flechas amarillas), compatible con infarto esplénico. Ascitis perihepática. (A) Corte coronal; (B) corte axial.' },
    ], right: [
      { name: 'Tabla 1', table: {
        title: 'Tabla 1. Sydney frente a ACR/EULAR 2023',
        colW: [0.40, 0.28, 0.32], pt: 27, tiles: true, rowH: [0.8, 0.85, 1.15, 1.0, 0.72, 0.72],
        header: ['Hallazgos de la paciente', 'Sydney 2006', 'ACR/EULAR 2023'],
        rows: [
          [{ text: 'Infarto esplénico', bold: true, fill: 'E7F3F0' }, { text: 'Cumple', bold: true, color: '17663F', fill: 'DDF1E6', align: 'center' }, { text: '4 puntos (cumple)', bold: true, color: '17663F', fill: 'DDF1E6', align: 'center' }],
          [{ text: 'aCL y aβ2GPI IgM positivas y persistentes a 12 semanas', bold: true, fill: 'E7F3F0' }, { text: 'Cumple', bold: true, color: '17663F', fill: 'DDF1E6', align: 'center' }, { text: '1 punto (no cumple)', bold: true, color: 'A3202E', fill: 'FADADD', align: 'center' }],
          [{ text: '¿Clasifica como SAF?', bold: true, fill: 'E7F3F0', size: 30 }, { text: 'SÍ', bold: true, color: 'FFFFFF', fill: '1E7D4F', align: 'center', size: 32 }, { text: 'NO', bold: true, color: 'FFFFFF', fill: 'C8323F', align: 'center', size: 32 }],
          [{ text: 'Sensibilidad', bold: true, fill: 'E7F3F0' }, { text: '99 %', bold: true, align: 'center' }, { text: '84 %', align: 'center' }],
          [{ text: 'Especificidad', bold: true, fill: 'E7F3F0' }, { text: '86 %', align: 'center' }, { text: '99 %', bold: true, align: 'center' }],
        ],
        note: 'ACR/EULAR 2023 exige al menos 3 puntos en el dominio de laboratorio. Sensibilidad y especificidad en la cohorte de validación (2). aCL: anticardiolipina; aβ2GPI: anti-β2-glicoproteína I.' } },
    ] },
    { left: [
      { h: 'Discusión', p: [
        'En el LES, los aPL son frecuentes y se asocian con mayor riesgo trombótico, por lo que las recomendaciones EULAR indican buscarlos desde el diagnóstico (1,6). En esta paciente, la doble positividad IgM persistente y de título alto, junto con un infarto esplénico sin causa embólica ni portal, orientó a un SAF secundario al LES y no a una complicación atribuible solo a la actividad lúpica.',
        'ACR/EULAR 2023 asigna poco peso a la IgM y fue diseñado para clasificar, no para diagnosticar (2) (Tabla 1); por ello se anticoaguló con antagonista de la vitamina K, como recomienda EULAR (4).',
        [['Fortalezas y limitaciones: ', true], 'aPL repetidos a las 12 semanas y exclusión de embolia y trombosis portal; sin biopsia renal y con seguimiento corto.']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'Este caso ilustra la discordancia entre ambos sistemas: un perfil IgM aislado, persistente y de títulos altos, con trombosis en un sitio inusual en el contexto de un LES, cumple Sydney pero no ACR/EULAR 2023, que sacrifican sensibilidad para ganar especificidad.',
        'Los criterios de clasificación no sustituyen el juicio clínico: la decisión terapéutica debe integrar el evento trombótico, el perfil de aPL, los factores de riesgo alternativos y el riesgo hemorrágico.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado de la paciente.']] },
    ] },
  ],
  refs: [
    'Garcia D, Erkan D. Diagnosis and management of the antiphospholipid syndrome. N Engl J Med. 2018;378(21):2010-21.',
    'Barbhaiya M, Zuily S, Naden R, Hendry A, Manneville F, Amigo MC, et al. The 2023 ACR/EULAR antiphospholipid syndrome classification criteria. Arthritis Rheumatol. 2023;75(10):1687-702.',
    'Miyakis S, Lockshin MD, Atsumi T, Branch DW, Brey RL, Cervera R, et al. International consensus statement on an update of the classification criteria for definite antiphospholipid syndrome (APS). J Thromb Haemost. 2006;4(2):295-306.',
    'Tektonidou MG, Andreoli L, Limper M, Amoura Z, Cervera R, Costedoat-Chalumeau N, et al. EULAR recommendations for the management of antiphospholipid syndrome in adults. Ann Rheum Dis. 2019;78(10):1296-304.',
    'Azañero-Haro J, Chambi L, Soto A. Infarto esplénico como presentación del síndrome antifosfolipídico y lupus eritematoso sistémico: reporte de un caso. Rev Colomb Reumatol. 2024;31(1):127-32.',
    'Fanouriakis A, Kostopoulou M, Andersen J, Aringer M, Arnaud L, Bae SC, et al. EULAR recommendations for the management of systemic lupus erythematosus: 2023 update. Ann Rheum Dis. 2024;83(1):15-29.',
  ],
};
