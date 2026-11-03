export type Stage = { name: string; detail: string };
export type StageTrack = { id: string; label: string; degree: string; stages: Stage[] };

const pregrado: Stage[] = [
  { name: 'Tema y problema', detail: 'Elegimos un tema viable y planteamos el problema de investigación.' },
  { name: 'Proyecto de tesis', detail: 'Objetivos, justificación, marco teórico y diseño metodológico.' },
  { name: 'Datos', detail: 'Planificamos la recolección y analizamos los datos con software especializado.' },
  { name: 'Informe final', detail: 'Te acompañamos en la redacción de resultados, discusión y conclusiones.' },
  { name: 'Revisión', detail: 'Formato de tu universidad, normas de redacción y Turnitin.' },
  { name: 'Observaciones', detail: 'Levantamos lo que señalen tu asesor o tu jurado.' },
  { name: 'Sustentación', detail: 'Presentación, ensayo y simulación de preguntas.' },
];

export const stageTracks: StageTrack[] = [
  { id: 'pregrado', label: 'Pregrado', degree: 'pregrado', stages: pregrado },
  {
    id: 'maestria',
    label: 'Maestría',
    degree: 'maestría',
    stages: pregrado.map((s) =>
      s.name === 'Proyecto de tesis'
        ? { ...s, detail: 'Objetivos, justificación, un marco teórico sólido y el diseño metodológico.' }
        : s.name === 'Datos'
          ? { ...s, detail: 'Análisis cualitativo o cuantitativo en profundidad, con software especializado.' }
          : s,
    ),
  },
  {
    id: 'doctorado',
    label: 'Doctorado',
    degree: 'doctorado',
    stages: [
      { name: 'Elección del título', detail: 'El tema clave de la investigación y su principal punto de interés.' },
      { name: 'Planteamiento del problema', detail: 'Por qué es relevante y necesaria la investigación.' },
      { name: 'Marco teórico', detail: 'La base teórica y los antecedentes.' },
      { name: 'Metodología', detail: 'El enfoque, la recolección y el análisis de datos.' },
      { name: 'Redacción', detail: 'Te acompañamos en el estilo académico y el formato institucional.' },
      { name: 'Revisión final', detail: 'Revisión integral y orientación en las últimas correcciones.' },
      { name: 'Defensa', detail: 'Preparación de la sustentación ante el tribunal.' },
    ],
  },
  {
    id: 'tsp',
    label: 'TSP',
    degree: 'trabajo de suficiencia profesional',
    stages: [
      { name: 'Aspectos generales', detail: 'Tu empresa y tu área de trabajo.' },
      { name: 'Fundamento del área', detail: 'El marco conceptual y teórico.' },
      { name: 'Experiencia y aportes', detail: 'Lo que lograste y su impacto.' },
      { name: 'Desarrollo del proyecto', detail: 'La solución a un problema real.' },
      { name: 'Análisis y resultados', detail: 'Los datos y su interpretación.' },
      { name: 'Conclusiones', detail: 'Hallazgos y recomendaciones.' },
      { name: 'Observaciones y sustentación', detail: 'Correcciones del jurado y defensa.' },
    ],
  },
];
