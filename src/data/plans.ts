export const planNames = ['Plan Tesis Completa', 'Plan Científica Consultores'] as const;

export const planRows: { feature: string; values: [string, string] }[] = [
  { feature: 'Acompañamiento', values: ['Proyecto e informe final', 'Proyecto e informe final'] },
  { feature: 'Observaciones', values: ['Levantamiento por 4 meses después de la entrega final', 'Ilimitado, con garantía por 1 año desde el inicio'] },
  { feature: 'Asesorías personalizadas', values: ['6, una en cada entrega', '10, una en cada entrega'] },
  { feature: 'Turnitin (IA y similitud)', values: ['Del proyecto y de la tesis', 'En cada entrega'] },
  { feature: 'Presentación de la sustentación', values: ['Incluida', 'Diseñada por especialistas en diseño'] },
  { feature: 'Simulación de sustentación', values: ['1, virtual, de 45 minutos', '2, con especialistas en pedagogía, presencial o virtual'] },
  { feature: 'Software de análisis', values: ['—', '1 asesoría de manejo'] },
  { feature: 'Equipo', values: ['—', 'Metodólogo, temático y estadístico o cualitativo'] },
  { feature: 'Extras', values: ['—', 'PDF de todas las referencias y banco de preguntas para la sustentación'] },
];
