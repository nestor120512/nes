// Póster 2 – infarto esplénico, SAF con aPL IgM aislados y LES de inicio tardío (formato del póster 1).
const P = __dirname + '/../../';
const L = __dirname + '/../logos/';
module.exports = {
  title: 'Infarto esplénico como manifestación de síndrome antifosfolípido con anticuerpos IgM aislados en lupus de inicio tardío: reporte de caso',
  authors: 'Jhonatan Padilla Navarro¹*, Nestor Fabian Sanabria Duarte¹, Jessica Morales Holguin¹, Edison Hernández Ebradh², José Ángel Salas Siado³',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Programa de Especialización en Medicina Interna, Universidad Metropolitana, Barranquilla, Colombia. ³Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositor',
  logos: { band: [L + 'logo_clinica_general_del_norte.png', L + 'logo_universidad_libre.png', L + 'logo_universidad_metropolitana.png', L + 'logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.1, logoH: 1.5,
  bodyPt: 30, refPt: 22, justify: true,
  primary: '1F3D7A', accent: '2E9C8A', tint: 'E7F3F0', border: 'BCCBE0',
  titleColor: '1F3D7A', titlePt: 54, bandHeads: true,
  keywords: 'síndrome antifosfolípido; lupus eritematoso sistémico; infarto del bazo; anticuerpos anticardiolipina; beta 2-glicoproteína I; criterios de clasificación; anticoagulación.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 63 años con lupus eritematoso sistémico (LES) de inicio tardío y anticardiolipina (aCL) y anti-β2-glicoproteína I (aβ2GPI) IgM persistentes, que reingresó con pancitopenia, serositis, proteinuria en rango nefrótico e infarto esplénico en la tomografía. Cumplía los criterios de Sydney, pero no los ACR/EULAR 2023, por sumar solo 1 punto de laboratorio. Se consideró un síndrome antifosfolípido (SAF) clínico secundario a LES y se anticoaguló con warfarina, con recuperación hematológica.'] },
      { h: 'Introducción', p: [
        'El SAF se asocia con frecuencia al LES y empeora su pronóstico (1). Los criterios ACR/EULAR 2023 ponderan los anticuerpos antifosfolípidos (aPL) por isotipo: la aCL y la aβ2GPI IgM aisladas suman solo 1 de los 3 puntos de laboratorio requeridos (2), mientras que los criterios de Sydney las aceptan (3). Tras una trombosis, las recomendaciones EULAR indican anticoagulación con antagonistas de la vitamina K (4).',
        'El infarto esplénico es una manifestación trombótica infrecuente del SAF y obliga a descartar embolia de origen cardíaco, trombosis portal, enfermedades hematológicas y otros estados de hipercoagulabilidad.',
        [['Aporte del caso: ', true], 'una trombosis en sitio inusual que muestra la discordancia entre ambos sistemas y recuerda que los criterios de clasificación no son diagnósticos.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 63 años que reingresó en septiembre de 2026 por pancitopenia.'],
        [['Antecedentes relevantes: ', true], 'LES diagnosticado en julio de 2026, con debut por pancitopenia, tratado con pulsos de metilprednisolona, prednisolona y azatioprina. Perfil inicial de aPL: aCL IgM 69,38 U/mL y aβ2GPI IgM >200 UR/mL, con aCL y aβ2GPI IgG y anticoagulante lúpico negativos.'],
        [['Examen físico: ', true], 'livedo reticularis y ascitis.'],
        [['Estudios relevantes: ', true], 'hemoglobina 8,6 g/dL y plaquetas 46.000/µL, sin esquistocitos; Coombs directo positivo; proteinuria de 3,8 g/24 h; C3 52 mg/dL y C4 <2,9 mg/dL. La tomografía abdominal mostró una lesión periférica en cuña en el polo inferior del bazo, compatible con infarto esplénico (Figura 1).'],
        [['Diagnósticos diferenciales: ', true], 'embolia cardíaca (ritmo sinusal, ecocardiograma normal), trombosis o hipertensión portal (Doppler normal) y microangiopatía trombótica (sin esquistocitos).'],
        [['Confirmación diagnóstica: ', true], 'a las 12 semanas persistió la doble positividad IgM (aCL 80 U/mL; aβ2GPI en título alto), con anticoagulante lúpico negativo: cumplía Sydney, pero no ACR/EULAR 2023, al sumar solo 1 de los 3 puntos de laboratorio. Se consideró un SAF clínico secundario a LES.'],
        [['Tratamiento y evolución: ', true], 'nuevos pulsos de metilprednisolona, hidroxicloroquina y micofenolato mofetilo por nefritis lúpica presunta (la paciente no aceptó la biopsia). Con plaquetas de 127.000/µL se inició enoxaparina 1 mg/kg como puente a warfarina (INR 2-3). A las 2 semanas: plaquetas 239.000/µL y hemoglobina 10,0 g/dL.']] },
    ] },
    { split: 0.56, left: [
      { name: 'Figura 1', img: P + 'caso2_figura1_TC_infarto_esplenico.png',
        caption: 'Figura 1. Tomografía abdominal con contraste: área hipodensa periférica en el bazo (flechas amarillas), compatible con infarto esplénico. Ascitis perihepática. (A) Corte coronal; (B) corte axial.' },
    ], right: [
      { name: 'Tabla 1', table: {
        title: 'Tabla 1. Sydney frente a ACR/EULAR 2023',
        colW: [0.30, 0.35, 0.35], pt: 26,
        header: ['', 'Sydney 2006', 'ACR/EULAR 2023'],
        rows: [
          [{ text: 'Dominio clínico', bold: true }, 'Trombosis (infarto esplénico)', 'Trombosis arterial (infarto esplénico)'],
          [{ text: 'Dominio de laboratorio', bold: true }, 'aCL y aβ2GPI IgM persistentes a 12 semanas', 'IgM aisladas: 1 de los 3 puntos requeridos'],
          [{ text: '¿Clasifica como SAF?', bold: true }, { text: 'Sí', bold: true, color: '1E7D4F' }, { text: 'No', bold: true, color: 'C8323F' }],
          [{ text: 'Sensibilidad', bold: true }, '99 %', '84 %'],
          [{ text: 'Especificidad', bold: true }, '86 %', '99 %'],
        ],
        note: 'Sensibilidad y especificidad en la cohorte de validación de los criterios ACR/EULAR 2023 (2). aCL: anticardiolipina; aβ2GPI: anti-β2-glicoproteína I.' } },
    ] },
    { left: [
      { h: 'Discusión', p: [
        'Los criterios ACR/EULAR 2023 sacrifican sensibilidad para ganar especificidad y fueron diseñados para clasificar pacientes en estudios, no para el diagnóstico individual (2); la Tabla 1 resume la discordancia en esta paciente. Un perfil IgM aislado, persistente y de título alto, con trombosis en un sitio inusual en el contexto de un LES, cumple Sydney (3) y puede justificar la anticoagulación, en línea con las recomendaciones EULAR (4,5).',
        [['Fortalezas y limitaciones: ', true], 'perfil completo de aPL repetido a las 12 semanas, imagen característica y exclusión de embolia cardíaca y trombosis portal; sin biopsia renal, seguimiento corto y proteinuria nefrótica como posible factor protrombótico.']] },
    ], right: [
      { h: 'Conclusión', hl: true, p: [
        'No cumplir los criterios ACR/EULAR 2023 no excluye el diagnóstico clínico de SAF ni debe retrasar la anticoagulación.',
        'Los aPL IgM aislados, persistentes y de título alto pueden acompañar a una trombosis en un sitio inusual en el LES.',
        'La decisión terapéutica debe integrar el evento trombótico, el perfil de aPL, los factores de riesgo alternativos y el riesgo hemorrágico.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado de la paciente.']] },
    ] },
  ],
  refs: [
    'Garcia D, Erkan D. Diagnosis and management of the antiphospholipid syndrome. N Engl J Med. 2018;378(21):2010-21.',
    'Barbhaiya M, Zuily S, Naden R, Hendry A, Manneville F, Amigo MC, et al. The 2023 ACR/EULAR antiphospholipid syndrome classification criteria. Arthritis Rheumatol. 2023;75(10):1687-702.',
    'Miyakis S, Lockshin MD, Atsumi T, Branch DW, Brey RL, Cervera R, et al. International consensus statement on an update of the classification criteria for definite antiphospholipid syndrome (APS). J Thromb Haemost. 2006;4(2):295-306.',
    'Tektonidou MG, Andreoli L, Limper M, Amoura Z, Cervera R, Costedoat-Chalumeau N, et al. EULAR recommendations for the management of antiphospholipid syndrome in adults. Ann Rheum Dis. 2019;78(10):1296-304.',
    'Fanouriakis A, Kostopoulou M, Andersen J, Aringer M, Arnaud L, Bae SC, et al. EULAR recommendations for the management of systemic lupus erythematosus: 2023 update. Ann Rheum Dis. 2024;83(1):15-29.',
  ],
};
