// Póster 1 – contenido tomado del manuscrito "dermatomiositis_antimi2_3" y del resumen enviado a PANLAR.
module.exports = {
  title: 'Dermatomiositis juvenil anti-Mi-2 de curso policíclico con respuesta repetida a inmunoglobulina intravenosa: reporte de caso',
  authors: 'Nestor Fabian Sanabria Duarte¹*, José Ángel Salas Siado², Sandra Sofía Sánchez Hernández¹, Juan Camilo Tafur Vidal¹',
  affiliations: '¹Programa de Especialización en Medicina Interna, Universidad Libre, Barranquilla, Colombia. ²Investigación Médica Atlántico (IMA) y Clínica General del Norte, Barranquilla, Colombia. *Expositor',
  logos: { band: [__dirname + '/../logos/logo_universidad_libre.png', __dirname + '/../logos/logo_clinica_general_del_norte.png', __dirname + '/../logos/logo_ima_reumatologia.png'] },
  logoBand: true, bandH: 2.4, logoH: 1.75,
  bodyPt: 28, refPt: 20,
  keywords: 'dermatomiositis juvenil; anticuerpos anti-Mi-2; inmunoglobulinas intravenosas; disfagia; miopatía esteroidea; resonancia magnética.',
  segments: [
    { left: [
      { h: 'Resumen', p: [
        'Mujer de 17 años con dermatomiositis juvenil anti-Mi-2α/β, disfagia e hiperCKemia grave (CK 12.588 U/L), confirmada por biopsia. Ante la respuesta incompleta a glucocorticoides y azatioprina, la inmunoglobulina intravenosa (IGIV) permitió recuperar la deglución. Tuvo cuatro recaídas en 19 meses; en la última, la CK y la resonancia magnética (RM) orientaron a actividad inflamatoria y no a miopatía esteroidea, y la IGIV mensual se asoció con descenso de la CK a 202 U/L, resolución de la disfagia y recuperación de la marcha con apoyo.'] },
      { h: 'Introducción', p: [
        'La dermatomiositis juvenil es una miopatía inflamatoria con debilidad proximal simétrica y lesiones cutáneas características, cuyo fenotipo varía según el autoanticuerpo específico. Los pacientes anti-Mi-2 tienen compromiso muscular prominente, menor riesgo de enfermedad pulmonar intersticial y de neoplasia, y buena respuesta a la inmunosupresión, aunque se describen cursos policíclicos (1,2). La superposición con lupus eritematoso sistémico (LES) es un reto por los hallazgos mucocutáneos y articulares compartidos (3,4).',
        [['Aporte del caso: ', true], 'un curso grave y policíclico en un fenotipo considerado favorable, con respuesta repetida a la IGIV.']] },
    ], right: [
      { h: 'Información del caso', p: [
        [['Datos demográficos y motivo de consulta: ', true], 'mujer de 17 años hospitalizada en enero de 2025 por deterioro funcional y disfagia para sólidos.'],
        [['Enfermedad actual: ', true], 'desde diciembre de 2024, lesiones papulares eritemato-hiperpigmentadas faciales, interescapulares y extensoras, mialgias y debilidad proximal progresiva.'],
        [['Antecedentes relevantes: ', true], 'previamente sana.'],
        [['Examen físico: ', true], 'signo de Gottron, fuerza proximal 3/5 y disfagia.'],
        [['Estudios relevantes: ', true], 'CK 12.588 U/L, LDH 1.247 U/L, AST 657,9 y ALT 293,7 U/L (origen muscular); ANA 1:160 moteado; anti-Mi-2α y anti-Mi-2β positivos; anti-Jo-1 negativo. Biopsia muscular: cambios miopáticos, infiltrado linfoide y fibras atróficas.'],
        [['Diagnósticos diferenciales: ', true], 'superposición con LES (ANA hasta 1:1280, eritema facial, alopecia, artralgias y derrames pleurales pequeños), descartada por anti-ADNdc negativo, complemento normal, antifosfolípidos negativos y ausencia de nefritis; enfermedad mixta del tejido conectivo, descartada por anti-RNP negativo; miopatía esteroidea en la cuarta recaída.'],
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
        'El perfil anti-Mi-2 suele tener buen pronóstico, pero existe un subgrupo recidivante que requiere escalar el tratamiento (5). La magnitud y persistencia de la hiperCKemia y el edema en la RM distinguieron actividad inflamatoria de miopatía esteroidea. Anti-ADNdc negativo, complemento normal, ausencia de nefritis y anti-RNP negativo descartaron la superposición con LES y la enfermedad mixta (3,6).',
        [['¿Por qué IGIV y no rituximab? ', true], 'Por la respuesta previa de la paciente; la eficacia de la IGIV en dermatomiositis activa (ensayo ProDERM) y en la disfagia refractaria (7-11); y porque el ensayo RIM de rituximab no cumplió su objetivo primario (12).'],
        [['Fortalezas y limitaciones: ', true], 'biopsia, anticuerpo específico y seguimiento con CK y RM; caso único y retrospectivo, con glucocorticoides concomitantes y seguimiento corto.']] },
    ], right: [
      { h: 'Conclusión', p: [
        'El fenotipo anti-Mi-2 no excluye un curso grave y policíclico. La IGIV es una opción de rescate ante respuesta incompleta a glucocorticoides, sobre todo con disfagia. Un ANA positivo y manifestaciones compartidas no bastan para diagnosticar superposición con LES.',
        [['Consideraciones éticas: ', true], 'se obtuvo consentimiento informado de la paciente.']] },
    ] },
  ],
  refs: [
    'Pinal-Fernandez I, Mecoli CA, Casal-Dominguez M, Pak K, Hosono Y, Huapaya J, et al. More prominent muscle involvement in patients with dermatomyositis with anti-Mi2 autoantibodies. Neurology. 2019;93(19):e1768-77.',
    'Wolstencroft PW, Fiorentino DF. Dermatomyositis clinical and pathological phenotypes associated with myositis-specific autoantibodies. Curr Rheumatol Rep. 2018;20(5):28.',
    'Uzun GS, Isenberg D. Clinical characteristics and long-term outcomes in SLE-myositis overlap syndrome: a controlled retrospective cohort study. Rheumatology (Oxford). 2026:keag452.',
    'Papadopoulou C, Chew C, Wilkinson MGL, McCann L, Wedderburn LR. Juvenile idiopathic inflammatory myositis: an update on pathophysiology and clinical care. Nat Rev Rheumatol. 2023;19(6):343-62.',
    'Kwiatkowska D, Reich A. The significance of autoantibodies in juvenile dermatomyositis. Biomed Res Int. 2021;2021:5513544.',
    "Selva-O'Callaghan A, Pinal-Fernandez I, Trallero-Araguás E, Milisenda JC, Grau-Junyent JM, Mammen AL. Classification and management of adult inflammatory myopathies. Lancet Neurol. 2018;17(9):816-28.",
    'Aggarwal R, Charles-Schoeman C, Schessl J, Bata-Csörgő Z, Dimachkie MM, Griger Z, et al. Trial of intravenous immune globulin in dermatomyositis. N Engl J Med. 2022;387(14):1264-78.',
    'Raaphorst J, Gullick NJ, Shokraneh F, Brassington R, Min M, Ali SS, et al. Non-targeted immunosuppressive and immunomodulatory therapies for idiopathic inflammatory myopathies. Cochrane Database Syst Rev. 2025;8(8):CD015855.',
    'Gandiga PC, Ghetie D, Anderson E, Aggarwal R. Intravenous immunoglobulin in idiopathic inflammatory myopathies: a practical guide for clinical use. Curr Rheumatol Rep. 2023;25(8):152-68.',
    'Marie I, Menard JF, Hatron PY, Hachulla E, Mouthon L, Tiev K, et al. Intravenous immunoglobulins for steroid-refractory esophageal involvement related to polymyositis and dermatomyositis: a series of 73 patients. Arthritis Care Res (Hoboken). 2010;62(12):1748-55.',
    'Danieli MG, Verga JU, Mezzanotte C, Terrenato I, Svegliati S, Bilo MB, et al. Replacement and immunomodulatory activities of 20% subcutaneous immunoglobulin treatment: a single-center retrospective study in autoimmune myositis and CVID patients. Front Immunol. 2022;12:805705.',
    'Oddis CV, Reed AM, Aggarwal R, Rider LG, Ascherman DP, Levesque MC, et al. Rituximab in the treatment of refractory adult and juvenile dermatomyositis and adult polymyositis: a randomized, placebo-phase trial. Arthritis Rheum. 2013;65(2):314-24.',
  ],
};
