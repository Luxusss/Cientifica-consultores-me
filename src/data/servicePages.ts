import type { ImageMetadata } from 'astro';
import type { Faq } from './faq';
import { doctoradoFaq, maestriaFaq, pregradoFaq, tspFaq } from './faq';
import pregradoImg from '@/assets/images/tesis/asesora-de-proyecto-de-tesis.jpg';
import maestriaImg from '@/assets/images/otros/asesor-de-tesis-de-maestria-cientifica-consultores.jpg';
import doctoradoImg from '@/assets/images/tesis/asesor-de-tesis-doctoral.jpg';
import tspImg from '@/assets/images/tesis/asesora-de-trabajo-de-suficiencia-profesional.png';

export type Point = { title?: string; text: string; id?: string };
export type Block = { id: string; title: string; intro?: string; points: Point[] };

export type Section =
  | { kind: 'points'; id: string; title: string; intro?: string; points: Point[] }
  | { kind: 'text'; id: string; title: string; text: string[] }
  | { kind: 'list'; id: string; title: string; intro?: string; items: string[] }
  | { kind: 'careers'; title: string; intro: string; prefix?: string }
  | { kind: 'stages'; title: string }
  | { kind: 'cta'; id: string; title: string; text?: string }
  | { kind: 'photos' };

export type ServicePage = {
  id: string;
  path: string;
  crumb: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  image: ImageMetadata;
  imageAlt: string;
  formSubject: string;
  intro: string[];
  sections: Section[];
  faqTitle: string;
  faq: Faq[];
};

const careersIntro = 'Accede a asesoría personalizada según tu disciplina, con expertos para cada carrera específica.';

export const servicePages: Record<string, ServicePage> = {
  pregrado: {
    id: 'pregrado',
    path: '/tesis.html',
    crumb: 'Tesis de pregrado',
    title: 'Asesoría de Tesis de Pregrado en Lima | Científica Consultores',
    description: 'Asesoría profesional para tesis de pregrado en Lima y online: proyecto, informe final, observaciones, anti-plagio y sustentación. ¡Consulta gratuita!',
    h1: 'Asesoría de tesis de pregrado',
    lede: 'El último paso para tu título, con un asesor de tu carrera a tu lado, en Lima, a nivel nacional y online.',
    image: pregradoImg,
    imageAlt: 'Egresada con toga celebrando su graduación',
    formSubject: 'Nuevo lead - Tesis de Pregrado',
    intro: [
      'La tesis de pregrado es el último gran paso para obtener tu título universitario, pero suele ser un proceso complejo y estresante. En Científica Consultores te ofrecemos asesoría de tesis en Lima, a nivel nacional y online. Nuestro acompañamiento cubre todas las fases: desde la elección del tema de investigación y la metodología (cualitativa, cuantitativa o mixta) hasta la redacción final, la verificación anti-plagio con Turnitin y la preparación para la sustentación. Enfócate en tu futuro académico y profesional.',
    ],
    sections: [
      {
        kind: 'text',
        id: 'metodo',
        title: 'Nuestra asesoría de tesis de pregrado: supera el desafío con expertos',
        text: ['Nuestro método de trabajo se basa en la experiencia de más de 10 años y un equipo de asesores especialistas en tu área. Te ofrecemos una solución integral, 100% personalizada y garantizada para que cada fase de tu proyecto de tesis sea exitosa, liberándote del estrés y asegurando la máxima calidad y originalidad de tu investigación.'],
      },
      { kind: 'careers', title: 'Áreas de especialización: asesoría de tesis por carrera', intro: careersIntro, prefix: 'Asesoría de tesis para ' },
      {
        kind: 'points',
        id: 'por-que',
        title: '¿Por qué elegir nuestra asesoría para tu proyecto de grado en Lima?',
        intro: 'Elegirnos es optar por la seguridad y la experiencia local. Somos la empresa de ayuda de tesis en Lima con más de una década de trayectoria, dedicada a convertir tu proyecto de grado en un éxito. Nuestro equipo de asesores especialistas en diversas áreas de estudio garantiza que tu investigación no solo cumpla con los estándares de tu universidad, sino que también destaque por su calidad, originalidad y un proceso sin estrés.',
        points: [
          { title: 'Especialista en tesis para ti', text: 'Contamos con un equipo multidisciplinario de asesores de tesis con amplia experiencia. Cada experto te guiará en tu investigación hasta la sustentación.' },
          { title: 'Calidad académica garantizada', text: 'Garantizamos originalidad en tu tesis con control de Turnitin. Recibe un trabajo único, listo para sustentar.' },
          { title: 'Asesoría online a tu medida', text: 'Nuestra asesoría online se adapta a tus horarios con reuniones virtuales y seguimiento constante, estés donde estés.' },
        ],
      },
      {
        kind: 'points',
        id: 'incluye',
        title: '¿Qué incluye nuestra asesoría integral de tesis de pregrado?',
        points: [
          { id: 'proyecto', title: 'Desarrollo de tu proyecto de tesis', text: 'Te guiamos en el desarrollo de tu proyecto de tesis, desde la elección del tema hasta su estructuración. Incluye planteamiento del problema, objetivos, justificación, marco teórico y diseño metodológico. Nuestra asesoría de tesis online ofrece una base sólida alineada a los criterios académicos para lograr la aprobación del trabajo.' },
          { title: 'Redacción del informe final y análisis de datos', text: 'Te apoyamos en la redacción de tesis, capítulo por capítulo, desde los resultados hasta las conclusiones y recomendaciones. Además, brindamos soporte en el análisis de datos cuantitativos o cualitativos, con el uso de software especializado según los requerimientos de tu investigación.' },
          { title: 'Levantamiento de observaciones y correcciones', text: '¿Tu tesis ya fue revisada? Te ayudamos con el levantamiento de observaciones. Nuestros especialistas identifican y corrigen cada detalle para que tu trabajo de tesis cumpla con los estándares académicos exigidos y esté listo para su aprobación.' },
          { title: 'Asesoría para la sustentación de tesis', text: 'Prepárate con confianza para tu sustentación de tesis. Te orientamos en la estructura de la presentación, el manejo de preguntas y técnicas de exposición para lograr una defensa clara, segura y exitosa.' },
          { title: 'Normas de redacción (APA, Vancouver, ISO 690)', text: 'Te ayudamos a aplicar correctamente las normas de redacción según el estilo requerido —APA, Vancouver, ISO 690 u otros—. Nuestros asesores se aseguran de que tu tesis cumpla con los estándares académicos en citas, referencias y formatos, mejorando su presentación y calidad formal.' },
        ],
      },
      { kind: 'photos' },
      {
        kind: 'text',
        id: 'normativa',
        title: 'Expertos en la normativa de todas las universidades de pregrado en Lima y a nivel nacional',
        text: ['El éxito de una tesis de pregrado depende de cumplir al detalle la normativa interna de tu facultad. Nuestros asesores especialistas cuentan con la experiencia para adaptar tu investigación a los estándares metodológicos de cualquier institución, desde las principales universidades en Lima hasta las casas de estudio más prestigiosas a nivel nacional. Gracias a nuestra metodología 100% online, garantizamos un soporte de tesis eficiente, sin importar tu ubicación, asegurando que tu proyecto final cumpla con todos los requisitos para la sustentación y la obtención de tu título.'],
      },
      { kind: 'stages', title: 'Tipos de asesorías' },
    ],
    faqTitle: 'Preguntas frecuentes sobre tesis de pregrado',
    faq: pregradoFaq,
  },
  maestria: {
    id: 'maestria',
    path: '/tesis-maestria.html',
    crumb: 'Tesis de maestría',
    title: 'Asesoría de Tesis de Maestría en Lima | Científica Consultores',
    description: 'Asesoría online en tesis de Maestría: metodología, redacción y sustentación. Titúlate con el respaldo de expertos académicos.',
    h1: 'Asesoría de tesis de maestría',
    lede: '¿Buscas ayuda profesional para hacer tu tesis de maestría?',
    image: maestriaImg,
    imageAlt: 'Asesor de tesis de maestría de Científica Consultores en una biblioteca',
    formSubject: 'Nuevo lead - Tesis de Maestría',
    intro: ['En Científica Consultores ofrecemos asesoría de tesis en Lima, con un enfoque integral para cada etapa de tu proyecto. Te garantizamos un proceso transparente y eficiente, adaptado a tus necesidades académicas.'],
    sections: [
      { kind: 'careers', title: 'Áreas de especialización en asesoría de tesis', intro: careersIntro },
      {
        kind: 'text',
        id: 'empezar',
        title: '¿Necesitas hacer tu tesis de maestría y no sabes por dónde empezar?',
        text: ['Este servicio está diseñado para estudiantes de maestría que buscan apoyo integral en la investigación, redacción y sustentación de su tesis. Ya sea que estés iniciando o necesites levantar observaciones, podemos ayudarte.'],
      },
      {
        kind: 'list',
        id: 'incluye',
        title: '¿Qué incluye nuestra asesoría de tesis de maestría?',
        items: [
          'Elaboración de tesis completas o por capítulo.',
          'Redacción con marco teórico, metodología y conclusiones.',
          'Revisión y control antiplagio con Turnitin.',
          'Preparación para la sustentación y diapositivas en PPT.',
          'Asesoría continua, online y personalizada.',
        ],
      },
      { kind: 'photos' },
      {
        kind: 'text',
        id: 'online',
        title: 'Acompañamiento 100 % online y adaptado a tu horario',
        text: ['Trabajamos contigo a distancia, sin importar tu ciudad o universidad. Nuestro equipo multidisciplinario está disponible en horarios flexibles para avanzar a tu ritmo.'],
      },
      {
        kind: 'list',
        id: 'confianza',
        title: '¿Por qué cientos de estudiantes confían en Científica Consultores?',
        items: [
          'Más de 10 años de experiencia en asesoría de tesis.',
          'Enfoque académico, práctico y ético.',
          'Atención personalizada y horarios flexibles.',
          'Éxito en sustentaciones y proyectos finales.',
        ],
      },
      { kind: 'stages', title: 'Tu tesis de maestría por etapas' },
    ],
    faqTitle: 'Preguntas frecuentes sobre tesis de maestría',
    faq: maestriaFaq,
  },
  doctorado: {
    id: 'doctorado',
    path: '/tesis-doctoral.html',
    crumb: 'Tesis doctoral',
    title: 'Asesoría de Tesis Doctoral | Científica Consultores',
    description: '¿Necesitas ayuda con tu tesis doctoral? Ofrecemos asesoría especializada en tu investigación y redacción. ¡Contáctanos vía WhatsApp para una consulta gratuita!',
    h1: 'Asesoría de tesis doctoral',
    lede: 'Un asesor con experiencia en investigación avanzada te acompaña desde la propuesta doctoral hasta la defensa.',
    image: doctoradoImg,
    imageAlt: 'Asesor de tesis doctoral de Científica Consultores',
    formSubject: 'Nuevo lead - Tesis Doctoral',
    intro: ['En Científica Consultores somos especialistas en brindar ayuda para tesis doctoral a profesionales que buscan completar su trabajo de investigación con excelencia. Sabemos que el proceso de una tesis de doctorado es exigente, por lo que nuestros asesores de tesis doctorales te acompañan en cada etapa, desde la planificación hasta la sustentación.'],
    sections: [
      { kind: 'careers', title: 'Áreas de especialización en asesoría de tesis', intro: careersIntro },
      { kind: 'cta', id: 'inicia', title: '¡Inicia tu proyecto doctoral hoy!', text: 'No postergues tu investigación doctoral. Nuestro equipo de expertos te ayudará.' },
      {
        kind: 'points',
        id: 'ventajas',
        title: 'Ventajas de nuestro servicio',
        points: [
          { title: 'Metodología rigurosa', text: 'Aplicamos marcos teóricos sólidos y métodos de investigación apropiados.' },
          { title: 'Originalidad garantizada', text: 'Cada trabajo doctoral es único y libre de plagio.' },
          { title: 'Asesoramiento continuo', text: 'Acompañamiento personalizado durante todo el proceso.' },
          { title: 'Cumplimiento de plazos', text: 'Entregas puntuales según el cronograma acordado.' },
        ],
      },
      {
        kind: 'points',
        id: 'metodologia',
        title: 'Metodología de trabajo',
        intro: 'Nuestro proceso de elaboración de trabajos doctorales sigue una metodología estructurada que garantiza la calidad y el rigor académico en cada etapa:',
        points: [
          { title: 'Elección del título', text: 'Identifica el tema clave de la investigación y su principal punto de interés.' },
          { title: 'Planteamiento del problema', text: 'Describe el problema que justifica la investigación, demostrando su relevancia y necesidad.' },
          { title: 'Marco teórico', text: 'Presenta la base teórica y los antecedentes para contextualizar el problema y definir los pilares de la investigación.' },
          { title: 'Metodología', text: 'El enfoque y los procedimientos del estudio, junto a la recolección y el análisis de datos, aseguran el rigor científico.' },
          { title: 'Redacción especializada', text: 'Elaboración del documento final con estilo académico y formato institucional.' },
          { title: 'Revisión y entrega', text: 'Control de calidad, correcciones finales y entrega del trabajo completo.' },
        ],
      },
      { kind: 'photos' },
      { kind: 'stages', title: 'Tu tesis doctoral por etapas' },
    ],
    faqTitle: 'Preguntas frecuentes sobre tesis de doctorado',
    faq: doctoradoFaq,
  },
  tsp: {
    id: 'tsp',
    path: '/trabajo-de-suficiencia-profesional.html',
    crumb: 'Trabajo de suficiencia profesional',
    title: 'Asesoría de Trabajo de Suficiencia Profesional (TSP)',
    description: 'Asesoría para tu trabajo de suficiencia profesional (TSP): estructura, redacción, Turnitin y observaciones del jurado, según el formato de tu universidad.',
    h1: 'Asesoría para tu trabajo de suficiencia profesional (TSP)',
    lede: '¿Tienes experiencia laboral de 3 años pero necesitas tu título universitario?',
    image: tspImg,
    imageAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    formSubject: 'Nuevo lead - TSP',
    intro: ['Enfrentar tu trabajo de suficiencia profesional es el último paso para obtener tu título. En Científica Consultores ofrecemos una asesoría TSP integral para guiarte en cada etapa, asegurando que tu trabajo cumpla con los más altos estándares académicos y profesionales. Nuestro equipo de expertos está listo para ayudarte a alcanzar el éxito.'],
    sections: [
      { kind: 'cta', id: 'titulo', title: '¡Obtén tu título profesional en solo 1 mes con apoyo de expertos!' },
      {
        kind: 'text',
        id: 'que-es',
        title: '¿Qué es un trabajo de suficiencia profesional?',
        text: ['Es un informe en el que aplicas lo que aprendiste en tu carrera para resolver un problema real de tu trabajo, y una de las modalidades para obtener el título profesional. Enfrentarlo es el último paso para titularte, y nuestros asesores te guían en cada etapa para que cumpla con los estándares académicos y profesionales de tu universidad.'],
      },
      {
        kind: 'points',
        id: 'estructura',
        title: 'Estructura clave de un TSP',
        intro: 'Para garantizar la aprobación de tu trabajo de suficiencia profesional, es vital seguir una estructura rigurosa. Nuestros asesores se especializan en guiarte a través de cada uno de los siguientes elementos:',
        points: [
          { title: 'Aspectos generales', text: 'Descripción detallada del área en la que te desempeñas, incluyendo el RUC, la misión, la visión y la actividad económica de la empresa.' },
          { title: 'Fundamento del área elegida', text: 'Desarrollo del marco conceptual y teórico que sustenta tu trabajo, alineado con tu carrera profesional y las actividades del área de estudio.' },
          { title: 'Experiencia y aportes', text: 'Análisis de tu contribución a la empresa, detallando los logros, las soluciones implementadas y el impacto de tu experiencia profesional.' },
          { title: 'Desarrollo del proyecto', text: 'Descripción de la solución planteada para un problema específico dentro de la empresa, detallando la metodología y las acciones que se llevaron a cabo.' },
          { title: 'Análisis y resultados', text: 'Proyección y evaluación de los cambios esperados en la empresa tras la implementación de la solución propuesta. Incluye el análisis de los datos obtenidos y su interpretación.' },
          { title: 'Conclusiones y recomendaciones', text: 'Resumen de los hallazgos principales y sugerencias futuras basadas en los resultados de tu trabajo.' },
        ],
      },
      {
        kind: 'points',
        id: 'incluye',
        title: 'Nuestros servicios de asesoría TSP incluyen',
        points: [
          { title: 'Asesoría TSP', text: 'Desde la elección del tema hasta el informe final.' },
          { title: 'Corrección y formato', text: 'Garantizamos la calidad y el cumplimiento de las normas de tu universidad.' },
          { title: 'Levantamiento de observaciones', text: 'Te ayudamos a corregir cualquier detalle señalado por tu jurado.' },
          { title: 'Similitud con Turnitin', text: 'Nos aseguramos de que tu trabajo sea 100% original y esté listo para su revisión.' },
        ],
      },
      { kind: 'photos' },
      {
        kind: 'points',
        id: 'por-que',
        title: '¿Por qué elegir nuestro servicio de asesoría TSP?',
        points: [
          { title: 'Resultados garantizados', text: '98% de aprobación en primera sustentación. Más de 500 TSP exitosos desarrollados. Tiempo récord: 1 a 2 meses en promedio. Asesoría personalizada según tu universidad.' },
          { title: 'Expertos por universidad', text: 'Conocemos los requisitos específicos de la UPN (Universidad Privada del Norte), la UCV (César Vallejo), la USIL (Universidad San Ignacio de Loyola), la UTP (Universidad Tecnológica del Perú) y más universidades.' },
        ],
      },
      { kind: 'stages', title: 'Tu TSP por etapas' },
    ],
    faqTitle: 'Preguntas frecuentes sobre el TSP',
    faq: tspFaq,
  },
};

export const careerAreas = [
  { name: 'Ingenierías', careers: ['Ingeniería Civil', 'Ingeniería de Sistemas', 'Ingeniería Industrial', 'Ingeniería Mecánica', 'Ingeniería Eléctrica', 'Ingeniería Mecatrónica', 'Ingeniería Electrónica', 'Arquitectura'] },
  { name: 'Letras', careers: ['Literatura', 'Comunicación y Periodismo', 'Historia', 'Educación'] },
  { name: 'Ciencias sociales', careers: ['Administración de Empresas', 'Derecho', 'Economía', 'Contabilidad', 'Ciencia Política', 'Sociología'] },
  { name: 'Ciencias de la salud', careers: ['Medicina', 'Enfermería', 'Odontología', 'Farmacia', 'Bioquímica', 'Obstetricia', 'Nutrición'] },
];
