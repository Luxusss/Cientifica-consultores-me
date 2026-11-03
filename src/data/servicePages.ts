import { stats } from '@/data/stats';
import type { ImageMetadata } from 'astro';
import type { Faq } from './faq';
import { doctoradoFaq, maestriaFaq, pregradoFaq, tspFaq } from './faq';
import pregradoImg from '@/assets/images/banner/asesoria-tesis-pregrado.jpg';
import maestriaImg from '@/assets/images/banner/asesoria-tesis-maestria.jpg';
import doctoradoImg from '@/assets/images/banner/asesoria-tesis-doctoral.jpg';
import tspImg from '@/assets/images/banner/asesoria-de-trabajo-de-suficiencia-profesional.jpg';
import maestriaIntro from '@/assets/images/otros/asesor-de-tesis-de-maestria-cientifica-consultores.jpg';
import doctoradoIntro from '@/assets/images/tesis/asesor-de-tesis-doctoral.jpg';
import tspIntro from '@/assets/images/tesis/asesora-de-trabajo-de-suficiencia-profesional.jpg';
import especialistaImg from '@/assets/images/tesis/secciones/especialista-en-tesis.jpg';
import turnitinImg from '@/assets/images/tesis/secciones/asesor-de-tesis-especializado-en-turnitin.jpg';
import onlineImg from '@/assets/images/tesis/secciones/analisis_de_similitud.webp';
import proyectoImg from '@/assets/images/tesis/asesora-de-proyecto-de-tesis.jpg';
import informeImg from '@/assets/images/tesis/secciones/asesoria_img1.jpg';
import observacionesImg from '@/assets/images/tesis/secciones/levantamiento_de_observaciones.jpg';
import sustentacionImg from '@/assets/images/tesis/secciones/asesoria_img3.jpg';
import normasImg from '@/assets/images/tesis/secciones/informe_final.jpg';
import tematicaImg from '@/assets/images/tesis/secciones/tematica_img.jpg';
import metodologicaImg from '@/assets/images/tesis/metodologica_img.jpg';
import estadisticaImg from '@/assets/images/tesis/secciones/estadistica_img.jpg';
import cualitativoImg from '@/assets/images/tesis/secciones/analisis_contenido_img.jpg';

export type Point = { title?: string; text: string; id?: string; image?: ImageMetadata; imageAlt?: string };
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
  introImage?: ImageMetadata;
  introAlt: string;
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
    description: 'Asesoría profesional para tesis de pregrado en Lima y online: proyecto, informe final, observaciones, originalidad y sustentación. ¡Consulta gratuita!',
    h1: 'Asesoría de tesis de pregrado',
    lede: 'El último paso para tu título, con un asesor de tu carrera a tu lado, en Lima, a nivel nacional y online.',
    image: pregradoImg,
    imageAlt: 'Asesoría de tesis de pregrado en Lima y online',
    formSubject: 'Nuevo lead - Tesis de Pregrado',
    introAlt: 'Asesoría de tesis de pregrado, licenciatura y grado',
    intro: [
      'La tesis de pregrado es el último gran paso para obtener tu título universitario, pero suele ser un proceso complejo y estresante. En Científica Consultores te ofrecemos asesoría de tesis en Lima, a nivel nacional y online. Nuestro acompañamiento cubre todas las fases: desde la elección del tema de investigación y la metodología (cualitativa, cuantitativa o mixta) hasta la revisión de tu redacción, el análisis de originalidad con Turnitin y la preparación para la sustentación. Enfócate en tu futuro académico y profesional.',
    ],
    sections: [
      {
        kind: 'text',
        id: 'metodo',
        title: 'Nuestra asesoría de tesis de pregrado: supera el desafío con expertos',
        text: ['Nuestro método de trabajo se basa en la experiencia de más de 10 años y un equipo de asesores especialistas en tu área. Te ofrecemos un acompañamiento integral y 100% personalizado en cada fase de tu proyecto de tesis, para que avances con menos estrés y desarrolles una investigación propia, original y de calidad.'],
      },
      { kind: 'careers', title: 'Áreas de especialización: asesoría de tesis por carrera', intro: careersIntro, prefix: 'Asesoría de tesis para ' },
      {
        kind: 'points',
        id: 'por-que',
        title: '¿Por qué elegir nuestra asesoría para tu proyecto de grado en Lima?',
        intro: 'Elegirnos es optar por la seguridad y la experiencia local. Somos la empresa de ayuda de tesis en Lima con más de una década de trayectoria, dedicada a acompañarte en tu proyecto de grado. Nuestro equipo de asesores especialistas en diversas áreas de estudio te orienta para que tu investigación cumpla con los estándares de tu universidad y destaque por su calidad, su originalidad y un proceso ordenado.',
        points: [
          { image: especialistaImg, imageAlt: 'Especialista en tesis', title: 'Especialista en tesis para ti', text: 'Contamos con un equipo multidisciplinario de asesores de tesis con amplia experiencia. Cada experto te guiará en tu investigación hasta la sustentación.' },
          { image: turnitinImg, imageAlt: 'Asesor de tesis revisando el reporte de originalidad de Turnitin en Lima', title: 'Originalidad y buenas prácticas de citación', text: 'Revisamos la originalidad de tu tesis con Turnitin y te enseñamos a citar y parafrasear correctamente para que tu investigación sea tuya.' },
          { image: onlineImg, imageAlt: 'Asesoría online', title: 'Asesoría online a tu medida', text: 'Nuestra asesoría online se adapta a tus horarios con reuniones virtuales y seguimiento constante, estés donde estés.' },
        ],
      },
      {
        kind: 'points',
        id: 'incluye',
        title: '¿Qué incluye nuestra asesoría integral de tesis de pregrado?',
        points: [
          { id: 'proyecto', image: proyectoImg, imageAlt: 'Desarrollo de tu proyecto de tesis', title: 'Desarrollo de tu proyecto de tesis', text: 'Te guiamos en el desarrollo de tu proyecto de tesis, desde la elección del tema hasta su estructuración. Incluye planteamiento del problema, objetivos, justificación, marco teórico y diseño metodológico. Nuestra asesoría de tesis online te ayuda a construir una base sólida, alineada a los criterios académicos de tu universidad.' },
          { image: informeImg, imageAlt: 'Redacción del informe final y análisis de datos', title: 'Redacción del informe final y análisis de datos', text: 'Te apoyamos en la redacción de tesis, capítulo por capítulo, desde los resultados hasta las conclusiones y recomendaciones. Además, brindamos soporte en el análisis de datos cuantitativos o cualitativos, con el uso de software especializado según los requerimientos de tu investigación.' },
          { image: observacionesImg, imageAlt: 'Levantamiento de observaciones y correcciones', title: 'Levantamiento de observaciones y correcciones', text: '¿Tu tesis ya fue revisada? Te ayudamos con el levantamiento de observaciones. Nuestros especialistas te explican cada observación y te guían en las correcciones para que tu trabajo de tesis cumpla con los estándares académicos exigidos.' },
          { image: sustentacionImg, imageAlt: 'Asesoría para la sustentación de tesis', title: 'Asesoría para la sustentación de tesis', text: 'Prepárate con confianza para tu sustentación de tesis. Te orientamos en la estructura de la presentación, el manejo de preguntas y técnicas de exposición para lograr una defensa clara, segura y exitosa.' },
          { image: normasImg, imageAlt: 'Normas de redacción con el estilo APA, Vancouver, ISO 690', title: 'Normas de redacción (APA, Vancouver, ISO 690)', text: 'Te ayudamos a aplicar correctamente las normas de redacción según el estilo requerido —APA, Vancouver, ISO 690 u otros—. Nuestros asesores se aseguran de que tu tesis cumpla con los estándares académicos en citas, referencias y formatos, mejorando su presentación y calidad formal.' },
        ],
      },
      { kind: 'photos' },
      {
        kind: 'text',
        id: 'normativa',
        title: 'Expertos en la normativa de todas las universidades de pregrado en Lima y a nivel nacional',
        text: ['El éxito de una tesis de pregrado depende de cumplir al detalle la normativa interna de tu facultad. Nuestros asesores especialistas cuentan con la experiencia para adaptar tu investigación a los estándares metodológicos de cualquier institución, desde las principales universidades en Lima hasta las casas de estudio más prestigiosas a nivel nacional. Gracias a nuestra metodología 100% online, te brindamos un soporte de tesis eficiente, sin importar tu ubicación, para que tu proyecto cumpla con los requisitos de tu universidad rumbo a la sustentación.'],
      },
      {
        kind: 'points',
        id: 'tipos',
        title: 'Tipos de asesorías',
        points: [
          { image: tematicaImg, imageAlt: 'Asesoría temática', title: 'Temática', text: 'Un especialista de tu carrera te orienta en el contenido de tu investigación: el tema, los antecedentes y el marco teórico.' },
          { image: metodologicaImg, imageAlt: 'Asesoría metodológica', title: 'Metodológica', text: 'Definimos el enfoque, el diseño, la población, la muestra y los instrumentos de tu investigación.' },
          { image: estadisticaImg, imageAlt: 'Asesoría estadística', title: 'Estadística', text: 'Procesamos y analizamos tus datos cuantitativos con software especializado e interpretamos los resultados.' },
          { image: cualitativoImg, imageAlt: 'Asesoría análisis de datos cualitativos', title: 'Análisis de datos cualitativos', text: 'Codificamos y analizamos entrevistas y grupos focales con Atlas.ti para construir tus categorías y hallazgos.' },
        ],
      },
      { kind: 'stages', title: 'Tu tesis de pregrado por etapas' },
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
    imageAlt: 'Asesoría de tesis de maestría',
    formSubject: 'Nuevo lead - Tesis de Maestría',
    introImage: maestriaIntro,
    introAlt: 'Asesor de tesis de maestría de Científica Consultores',
    intro: ['En Científica Consultores ofrecemos asesoría de tesis en Lima, con un enfoque integral para cada etapa de tu proyecto. Te ofrecemos un proceso transparente y eficiente, adaptado a tus necesidades académicas.'],
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
          'Análisis de originalidad con Turnitin y orientación en citación.',
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
          `Más de ${stats.years} años de experiencia en asesoría de tesis.`,
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
    imageAlt: 'Asesoría de tesis doctoral',
    formSubject: 'Nuevo lead - Tesis Doctoral',
    introImage: doctoradoIntro,
    introAlt: 'Asesor de tesis doctoral de Científica Consultores',
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
          { title: 'Integridad académica', text: 'Tu investigación doctoral es tuya: te orientamos en citación y revisamos su originalidad.' },
          { title: 'Asesoramiento continuo', text: 'Acompañamiento personalizado durante todo el proceso.' },
          { title: 'Cumplimiento de plazos', text: 'Revisiones puntuales según el cronograma acordado.' },
        ],
      },
      {
        kind: 'points',
        id: 'metodologia',
        title: 'Metodología de trabajo',
        intro: 'Nuestra asesoría de trabajos doctorales sigue una metodología estructurada que cuida la calidad y el rigor académico en cada etapa:',
        points: [
          { title: 'Elección del título', text: 'Identifica el tema clave de la investigación y su principal punto de interés.' },
          { title: 'Planteamiento del problema', text: 'Describe el problema que justifica la investigación, demostrando su relevancia y necesidad.' },
          { title: 'Marco teórico', text: 'Presenta la base teórica y los antecedentes para contextualizar el problema y definir los pilares de la investigación.' },
          { title: 'Metodología', text: 'El enfoque y los procedimientos del estudio, junto a la recolección y el análisis de datos, aseguran el rigor científico.' },
          { title: 'Revisión de redacción', text: 'Revisamos tu redacción para que tenga estilo académico y cumpla el formato institucional.' },
          { title: 'Revisión final', text: 'Revisión integral de tu trabajo y orientación en las últimas correcciones antes de presentarlo.' },
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
    imageAlt: 'Asesoría de trabajo de suficiencia profesional',
    formSubject: 'Nuevo lead - TSP',
    introImage: tspIntro,
    introAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    intro: ['Enfrentar tu trabajo de suficiencia profesional es el último paso para obtener tu título. En Científica Consultores ofrecemos una asesoría TSP integral para guiarte en cada etapa, asegurando que tu trabajo cumpla con los más altos estándares académicos y profesionales. Nuestro equipo de expertos te acompaña hasta tu sustentación.'],
    sections: [
      { kind: 'cta', id: 'titulo-profesional', title: '¡Avanza hacia tu título profesional con el acompañamiento de expertos!' },
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
        intro: 'Un trabajo de suficiencia profesional bien planteado sigue una estructura rigurosa. Nuestros asesores se especializan en guiarte a través de cada uno de los siguientes elementos:',
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
          { title: 'Corrección y formato', text: 'Revisamos que tu trabajo cumpla las normas de formato de tu universidad.' },
          { title: 'Levantamiento de observaciones', text: 'Te ayudamos a corregir cualquier detalle señalado por tu jurado.' },
          { title: 'Originalidad con Turnitin', text: 'Revisamos la originalidad de tu trabajo y te orientamos para citar correctamente tus fuentes.' },
        ],
      },
      { kind: 'photos' },
      {
        kind: 'points',
        id: 'por-que',
        title: '¿Por qué elegir nuestro servicio de asesoría TSP?',
        points: [
          { title: 'Resultados comprobados', text: `Más de ${stats.tsp} profesionales acompañados en su TSP. Si el jurado te observa, te guiamos para levantar las observaciones sin costo adicional. Asesoría personalizada según tu universidad.` },
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
