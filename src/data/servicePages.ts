import type { ImageMetadata } from 'astro';
import type { Faq } from './faq';
import { doctoradoFaq, maestriaFaq, pregradoFaq, tspFaq } from './faq';
import pregradoImg from '@/assets/images/tesis/asesora-de-proyecto-de-tesis.jpg';
import maestriaImg from '@/assets/images/otros/asesor-de-tesis-de-maestria-cientifica-consultores.jpg';
import doctoradoImg from '@/assets/images/tesis/asesor-de-tesis-doctoral.jpg';
import tspImg from '@/assets/images/tesis/asesora-de-trabajo-de-suficiencia-profesional.png';

export type Point = { title?: string; text: string; id?: string };
export type Block = { id: string; title: string; intro?: string; points: Point[] };

export type ServicePage = {
  id: string;
  path: string;
  crumb: string;
  title: string;
  description: string;
  h1: string;
  subtitle?: string;
  lede: string;
  image: ImageMetadata;
  imageAlt: string;
  formSubject: string;
  includes: Block;
  why: Block;
  extra?: Block[];
  faq: Faq[];
};

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
    includes: {
      id: 'incluye',
      title: 'Qué incluye tu asesoría',
      intro: 'Nuestra asesoría integral de tesis de pregrado cubre todas las fases, desde el tema hasta la sustentación, con metodología cualitativa, cuantitativa o mixta.',
      points: [
        { id: 'proyecto', title: 'Proyecto de tesis', text: 'Planteamiento del problema, objetivos, justificación, marco teórico y diseño metodológico, alineados a los criterios de tu universidad.' },
        { title: 'Informe final y análisis de datos', text: 'Te acompañamos capítulo por capítulo, de los resultados a las conclusiones, con software especializado para datos cuantitativos o cualitativos.' },
        { title: 'Levantamiento de observaciones', text: 'Si tu tesis ya fue revisada, identificamos y corregimos cada observación para que quede lista para su aprobación.' },
        { title: 'Preparación para la sustentación', text: 'Estructura de tu presentación, ensayo de la exposición y simulación de preguntas del jurado.' },
        { title: 'Normas de redacción', text: 'APA, Vancouver o ISO 690, según tu universidad.' },
        { title: 'Originalidad', text: 'Control de similitud con Turnitin.' },
      ],
    },
    why: {
      id: 'por-que',
      title: 'Asesoría de tesis en Lima',
      intro: 'Más de una década acompañando tesis de pregrado, con asesores especialistas que conocen la normativa de las universidades de Lima y del resto del país.',
      points: [
        { title: 'Especialistas en tu tema', text: 'Un equipo multidisciplinario; tu asesor te guía hasta la sustentación.' },
        { title: 'Originalidad comprobada', text: 'Control de Turnitin en cada entrega.' },
        { title: 'A tu ritmo', text: 'Reuniones virtuales y seguimiento constante, estés donde estés.' },
      ],
    },
    faq: pregradoFaq,
  },
  maestria: {
    id: 'maestria',
    path: '/tesis-maestria.html',
    crumb: 'Tesis de maestría',
    title: 'Asesoría de Tesis de Maestría en Lima | Científica Consultores',
    description: 'Asesoría online en tesis de Maestría: metodología, redacción y sustentación. Titúlate con el respaldo de expertos académicos.',
    h1: 'Asesoría de tesis de maestría',
    lede: 'Para quienes empiezan su tesis de maestría o necesitan levantar observaciones: investigación, redacción y sustentación con un asesor de posgrado.',
    image: maestriaImg,
    imageAlt: 'Asesor de tesis de maestría de Científica Consultores en una biblioteca',
    formSubject: 'Nuevo lead - Tesis de Maestría',
    includes: {
      id: 'incluye',
      title: 'Qué incluye tu asesoría',
      points: [
        { text: 'Acompañamiento de toda la tesis o por capítulos' },
        { text: 'Marco teórico, metodología y conclusiones' },
        { text: 'Reporte de similitud con Turnitin' },
        { text: 'Preparación de la sustentación y de las diapositivas' },
        { text: 'Asesoría continua, online y personalizada' },
      ],
    },
    why: {
      id: 'por-que',
      title: 'Online y a tu horario',
      intro: 'Trabajamos a distancia, sin importar tu ciudad o universidad, con un equipo multidisciplinario en horarios flexibles. También te recibimos en nuestra oficina de Los Olivos, previa cita.',
      points: [
        { text: 'Más de 10 años de experiencia en asesoría de tesis' },
        { text: 'Enfoque académico, práctico y ético' },
        { text: 'Atención personalizada' },
      ],
    },
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
    includes: {
      id: 'incluye',
      title: 'Qué incluye tu asesoría',
      points: [
        { text: 'Propuesta doctoral y diseño del estudio' },
        { text: 'Construcción teórica y antecedentes' },
        { text: 'Análisis cualitativo o cuantitativo en profundidad' },
        { text: 'Argumentación académica de cada capítulo' },
        { text: 'Artículos y manuscritos publicables' },
        { text: 'Preparación para la defensa' },
      ],
    },
    why: {
      id: 'por-que',
      title: 'Rigor de principio a fin',
      points: [
        { title: 'Metodología rigurosa', text: 'Marcos teóricos sólidos y métodos de investigación apropiados.' },
        { title: 'Originalidad comprobada', text: 'Control de similitud en cada entrega.' },
        { title: 'Acompañamiento continuo', text: 'El mismo asesor durante todo el proceso.' },
        { title: 'Plazos cumplidos', text: 'Entregas según el cronograma acordado.' },
      ],
    },
    faq: doctoradoFaq,
  },
  tsp: {
    id: 'tsp',
    path: '/trabajo-de-suficiencia-profesional.html',
    crumb: 'Trabajo de suficiencia profesional',
    title: 'Asesoría de Trabajo de Suficiencia Profesional (TSP)',
    description: 'Asesoría para tu trabajo de suficiencia profesional (TSP): estructura, redacción, Turnitin y observaciones del jurado, según el formato de tu universidad.',
    h1: 'Asesoría de TSP',
    subtitle: 'Trabajo de suficiencia profesional',
    lede: '¿Tienes 3 años de experiencia laboral y te falta el título? Tu trabajo de suficiencia profesional, guiado paso a paso.',
    image: tspImg,
    imageAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    formSubject: 'Nuevo lead - TSP',
    includes: {
      id: 'incluye',
      title: 'Qué incluye tu asesoría',
      points: [
        { text: 'Acompañamiento desde el tema hasta el informe final' },
        { text: 'Corrección y formato según las normas de tu universidad' },
        { text: 'Levantamiento de observaciones del jurado' },
        { text: 'Control de similitud con Turnitin' },
      ],
    },
    why: {
      id: 'por-que',
      title: 'Conocemos tu universidad',
      intro: 'Conocemos los requisitos específicos de UPN, UCV, USIL, UTP y más universidades.',
      points: [],
    },
    extra: [
      {
        id: 'que-es',
        title: 'Qué es un TSP',
        intro: 'El trabajo de suficiencia profesional es un informe que aplica lo que aprendiste en tu carrera para resolver un problema real de tu trabajo. Es el último paso para tu título profesional.',
        points: [],
      },
      {
        id: 'estructura',
        title: 'Cómo se estructura',
        points: [
          { title: 'Aspectos generales', text: 'El área donde trabajas y la empresa: RUC, misión, visión y actividad económica.' },
          { title: 'Fundamento del área', text: 'El marco conceptual y teórico que sustenta tu trabajo.' },
          { title: 'Experiencia y aportes', text: 'Tus logros, las soluciones que implementaste y su impacto.' },
          { title: 'Desarrollo del proyecto', text: 'La solución a un problema concreto de la empresa y cómo se llevó a cabo.' },
          { title: 'Análisis y resultados', text: 'Los cambios esperados y la interpretación de los datos.' },
          { title: 'Conclusiones y recomendaciones', text: 'Los hallazgos principales y las sugerencias a futuro.' },
        ],
      },
    ],
    faq: tspFaq,
  },
};

export const careerAreas = [
  { name: 'Ingenierías', careers: ['Ingeniería Civil', 'de Sistemas', 'Industrial', 'Mecánica', 'Eléctrica', 'Mecatrónica', 'Electrónica', 'Arquitectura'] },
  { name: 'Letras', careers: ['Literatura', 'Comunicación y Periodismo', 'Historia', 'Educación'] },
  { name: 'Ciencias sociales', careers: ['Administración de Empresas', 'Derecho', 'Economía', 'Contabilidad', 'Ciencia Política', 'Sociología'] },
  { name: 'Ciencias de la salud', careers: ['Medicina', 'Enfermería', 'Odontología', 'Farmacia', 'Bioquímica', 'Obstetricia', 'Nutrición'] },
];
