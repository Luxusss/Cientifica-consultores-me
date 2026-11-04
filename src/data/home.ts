export const intro = {
  title: 'Tu tesis, con un experto a tu lado',
  text: 'Te guiamos en metodología, análisis y redacción, adaptándonos a tu universidad y a la terminología de tu país.',
  levels: ['Pregrado', 'Maestría', 'Doctorado', 'TSP', 'Artículos científicos'],
};

export const servicesSection = {
  title: 'Nuestros servicios',
  text: 'Elige tu grado y trabaja con un asesor especialista de tu carrera, del tema a la sustentación.',
};

export const processSection = {
  title: '¿Cómo trabajamos?',
  text: 'Seis pasos simples, desde tu primer mensaje hasta tener a tu asesor asignado.',
  steps: [
    { name: 'Nos escribes', short: 'Por WhatsApp, correo o formulario, con tu universidad y fechas.', text: 'Nos escribes por WhatsApp, correo o formulario web. Nos comentas tu universidad, tipo de trabajo académico y fechas de entrega para entender tu caso desde el inicio.' },
    { name: 'Elegimos el tipo de trabajo', short: 'Tesis, tesina, TFG, TFM o TSP, según tu nivel.', text: 'Escoges si deseas trabajar tesis, proyecto de grado, tesina, TFG, TFM o trabajo de suficiencia profesional. Te ayudamos a elegir la opción adecuada según tu nivel académico.' },
    { name: 'Diagnóstico', short: 'Revisamos tu tema, avances y el reglamento.', text: 'Analizamos tu tema, avances y requisitos del reglamento. Detectamos fortalezas, riesgos y ajustes necesarios para planificar una ruta de trabajo realista.' },
    { name: 'Presupuesto', short: 'Propuesta clara con alcances y forma de pago.', text: 'Te enviamos una propuesta económica alineada a la complejidad de tu tesis o proyecto de grado, indicando alcances, número de asesorías y forma de pago.' },
    { name: 'Contrato digital', short: 'Protege tus datos y fija plazos y alcances.', text: 'Formalizamos el servicio con un contrato digital que protege tus datos y fija los plazos y alcances de la asesoría contratada.' },
    { name: 'Tu asesor', short: 'Un experto de tu área te acompaña hasta la defensa.', text: 'Te asignamos un asesor experto en tu área. Coordinarás tus avances, revisiones y observaciones de cada capítulo, con acompañamiento personalizado hasta la defensa.' },
  ],
};

export const whyUs = {
  title: '¿Por qué elegirnos?',
  text: 'Más de 10 años y un equipo multidisciplinario comprometido con tu avance.',
  items: [
    { name: 'Protección de tus datos', text: 'Todo queda en un contrato digital: tu tema, tus datos y tus avances solo los ve tu asesor.' },
    { name: 'Integridad académica', text: 'La tesis es tuya. Te enseñamos a citar y parafrasear, y revisamos la originalidad con Turnitin antes de cada entrega.' },
    { name: 'Flexibilidad', text: 'Sesiones por videollamada en el horario que te acomode, aunque trabajes o vivas en otro país.' },
    { name: 'Respuesta ágil', text: 'Te devolvemos cada capítulo revisado con observaciones claras, para que avances sin esperar semanas.' },
    { name: 'Equipo integral', text: 'Asesores de ingeniería, salud, negocios, educación y ciencias sociales: siempre trabajas con alguien de tu área.' },
  ],
};

export const team = {
  kicker: 'Más de 10 años investigando',
  title: 'Asesores reales, de tu misma carrera',
  text: 'Somos un equipo en Lima que acompaña tesis de pregrado a doctorado. Cada asesor viene de tu área —ingeniería, salud, ciencias sociales o letras— y trabaja contigo, no por ti.',
};

export const quality = [
  { title: 'Calidad en cada etapa', text: 'Revisamos cada capítulo según el reglamento de tu universidad y las normas de citación que te exijan.' },
  { title: 'Acompañamiento personalizado', text: 'Un mismo asesor te acompaña de principio a fin: conoce tu tema, tus avances y las observaciones de tu jurado.' },
];

export const toolsSection = {
  title: 'Herramientas profesionales',
  text: 'Cuidamos la originalidad y el rigor de tu investigación con el mismo software que usan las universidades.',
  items: [
    { tool: 'Turnitin', name: 'Originalidad', text: 'Revisamos la originalidad y te orientamos para citar cada fuente.' },
    { tool: 'Mendeley', name: 'Referencias', text: 'Organizamos tu bibliografía con citas precisas.' },
    { tool: 'Atlas.ti', name: 'Análisis cualitativo', text: 'Analizamos entrevistas y datos cualitativos con rigor.' },
    { tool: 'SPSS', name: 'Análisis cuantitativo', text: 'Estadística confiable para tus resultados.' },
  ],
};

export const resources = {
  title: 'Recursos académicos',
  text: 'Guías gratuitas para avanzar tu tesis sin bloquearte.',
  items: [
    { title: 'Cómo elaborar un proyecto de tesis paso a paso', text: 'Tema, objetivos, problema, marco teórico y metodología: todo lo que necesita tu propuesta, explicado en orden.', link: { label: 'Cómo hacer tu proyecto de tesis', href: '/blog/como-hacer-tu-proyecto-de-tesis.html' } },
    { title: 'Estructura de una tesis', text: 'Qué debe llevar cada capítulo, de la introducción a las conclusiones.' },
    { title: 'Tesis o trabajo de suficiencia profesional', text: 'Diferencias en objetivos, metodología y entrega para elegir bien.', link: { label: 'Tesis vs trabajo de suficiencia profesional', href: '/blog/tesis-vs-trabajo-suficiencia-profesional.html' } },
    { title: 'Tesis, tesina, TFG o TFM', text: 'Cada país usa un nombre distinto; te ayudamos a saber cuál te toca.' },
    { title: 'Consejos para no bloquearte', text: 'Organiza tu tiempo, mejora tu redacción y mantén el ritmo.' },
  ],
};

export const faqIntro = 'Resolvemos las dudas más comunes antes de empezar.';

export const closing = {
  title: '¿Empezamos tu tesis?',
  text: 'Cuéntanos tu universidad, tu grado y tu fecha de entrega, y te decimos cómo podemos ayudarte.',
};

/** Resumen corto de cada servicio para las tarjetas de la portada (se muestra completo). */
export const serviceTeasers: Record<string, string> = {
  pregrado: 'Te acompañamos desde que eliges el tema hasta que sustentas, con un asesor de tu misma carrera que conoce el formato de tu universidad.',
  maestria: 'Ordenamos juntos tu investigación: un marco teórico sólido, la metodología correcta y el análisis de tus datos, capítulo por capítulo.',
  doctorado: 'Un investigador con experiencia doctoral te ayuda a sostener tu aporte, elegir el análisis adecuado y llegar seguro a la defensa.',
  tsp: 'Convierte lo que haces en tu trabajo en un informe profesional bien estructurado, listo para presentar según las reglas de tu universidad.',
  articulos: 'Te guiamos para escribir tu artículo con estructura IMRyD, elegir la revista indexada adecuada y responder a los revisores.',
  proyecto: '¿Te piden un plan de tesis? Definimos contigo el problema, los objetivos y la metodología para que presentes una propuesta clara.',
};
