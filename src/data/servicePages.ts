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
import ingenieriasImg from '@/assets/images/otros_servicios/datos_informacion/procesamiento.jpg';
import letrasImg from '@/assets/images/otros_servicios/correccion_redaccion/manual_de_redaccion.jpg';
import socialesImg from '@/assets/images/otros_servicios/proyectos/Proyectos-de-innovacion.jpg';
import saludImg from '@/assets/images/carreras/ciencias-de-la-salud.jpg';
import equipoImg from '@/assets/images/otros/asesores-tesis-peru-cientifica.jpg';
import onlineAsesoriaImg from '@/assets/images/blog/mujer-con-laptop-en-oficina.jpg';
import tspTrabajoImg from '@/assets/images/otros_servicios/estudios_empiricos/Trabajo-de-suficiencia-profesional.jpg';

export type Point = { title?: string; text: string; id?: string; image?: ImageMetadata; imageAlt?: string; tag?: string; stat?: string; statLabel?: string; logos?: string[]; bullets?: string[] };
export type Block = { id: string; title: string; intro?: string; points: Point[]; variant?: 'overlay' | 'feature' };

export type Section =
  | { kind: 'points'; id: string; title: string; intro?: string; points: Point[]; variant?: 'overlay' | 'feature' }
  | { kind: 'text'; id: string; title: string; text: string[]; image?: ImageMetadata; imageAlt?: string; cta?: string }
  | { kind: 'list'; id: string; title: string; intro?: string; items: string[]; aside?: { title: string; text: string }; variant?: 'icons' }
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
  /** Parte del título que va resaltada en naranja (el servicio) */
  h1Accent?: string;
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
    h1Accent: 'de pregrado',
    lede: 'El último paso para tu título, con un asesor de tu carrera a tu lado, en Lima, a nivel nacional y online.',
    image: pregradoImg,
    imageAlt: 'Asesoría de tesis de pregrado en Lima y online',
    formSubject: 'Nuevo lead - Tesis de Pregrado',
    introAlt: 'Asesoría de tesis de pregrado, licenciatura y grado',
    intro: [
      'La tesis es el último paso para tu título, y no tienes que darlo solo. Te acompañamos en Lima, a nivel nacional y online: del tema y la metodología (cualitativa, cuantitativa o mixta) a la redacción, la revisión con Turnitin y la sustentación.',
    ],
    sections: [
      {
        kind: 'text',
        id: 'metodo',
        title: 'Nuestra asesoría de tesis de pregrado: supera el desafío con expertos',
        text: ['Más de 10 años y asesores de tu área. Te acompañamos de forma personalizada en cada fase, para que avances con menos estrés y con una investigación propia y original.'],
      },
      { kind: 'careers', title: 'Áreas de especialización: asesoría de tesis por carrera', intro: careersIntro, prefix: 'Asesoría de tesis para ' },
      {
        kind: 'points',
        id: 'por-que',
        title: '¿Por qué elegir nuestra asesoría para tu proyecto de grado en Lima?',
        intro: 'Más de una década en Lima acompañando proyectos de grado, con asesores que conocen los estándares de tu universidad.',
        points: [
          { image: especialistaImg, imageAlt: 'Especialista en tesis', title: 'Especialista en tesis para ti', text: 'Un asesor con experiencia en tu carrera te guía hasta la sustentación.' },
          { image: turnitinImg, imageAlt: 'Asesor de tesis revisando el reporte de originalidad de Turnitin en Lima', title: 'Originalidad y buenas prácticas de citación', text: 'Revisamos tu tesis con Turnitin y te enseñamos a citar y parafrasear bien.' },
          { image: onlineImg, imageAlt: 'Asesoría online', title: 'Asesoría online a tu medida', text: 'Reuniones virtuales en tu horario y seguimiento constante, estés donde estés.' },
        ],
      },
      {
        kind: 'points',
        id: 'incluye',
        title: '¿Qué incluye nuestra asesoría integral de tesis de pregrado?',
        points: [
          { id: 'proyecto', image: proyectoImg, imageAlt: 'Desarrollo de tu proyecto de tesis', title: 'Desarrollo de tu proyecto de tesis', text: 'Del tema a la estructura: problema, objetivos, justificación, marco teórico y diseño metodológico, según tu universidad.' },
          { image: informeImg, imageAlt: 'Redacción del informe final y análisis de datos', title: 'Redacción del informe final y análisis de datos', text: 'Revisamos tu redacción capítulo por capítulo y te apoyamos en el análisis de datos con software especializado.' },
          { image: observacionesImg, imageAlt: 'Levantamiento de observaciones y correcciones', title: 'Levantamiento de observaciones y correcciones', text: '¿Te observaron la tesis? Te explicamos cada observación y te guiamos en las correcciones.' },
          { image: sustentacionImg, imageAlt: 'Asesoría para la sustentación de tesis', title: 'Asesoría para la sustentación de tesis', text: 'Armamos contigo la presentación y ensayamos las preguntas del jurado para que defiendas con seguridad.' },
          { image: normasImg, imageAlt: 'Normas de redacción con el estilo APA, Vancouver, ISO 690', title: 'Normas de redacción (APA, Vancouver, ISO 690)', text: 'Citas, referencias y formato en APA, Vancouver, ISO 690 o el estilo que te pidan.' },
        ],
      },
      { kind: 'photos' },
      {
        kind: 'text',
        id: 'normativa',
        title: 'Expertos en la normativa de todas las universidades de pregrado en Lima y a nivel nacional',
        text: ['Adaptamos tu tesis al reglamento de tu facultad, en Lima o en cualquier universidad del país, y te acompañamos online hasta la sustentación.'],
        image: equipoImg,
        imageAlt: 'Equipo de asesores de Científica Consultores en reunión',
      },
      {
        kind: 'points',
        id: 'tipos',
        title: 'Tipos de asesorías',
        intro: 'Elige el apoyo que necesitas o combínalos según la etapa de tu tesis.',
        variant: 'overlay',
        points: [
          { image: tematicaImg, imageAlt: 'Asesoría temática', title: 'Temática', tag: 'Contenido', text: 'Un especialista de tu carrera te orienta en el contenido de tu investigación: el tema, los antecedentes y el marco teórico.' },
          { image: metodologicaImg, imageAlt: 'Asesoría metodológica', title: 'Metodológica', tag: 'Diseño', text: 'Definimos el enfoque, el diseño, la población, la muestra y los instrumentos de tu investigación.' },
          { image: estadisticaImg, imageAlt: 'Asesoría estadística', title: 'Estadística', tag: 'SPSS · Excel', text: 'Procesamos y analizamos tus datos cuantitativos con software especializado e interpretamos los resultados.' },
          { image: cualitativoImg, imageAlt: 'Asesoría análisis de datos cualitativos', title: 'Análisis de datos cualitativos', tag: 'Atlas.ti', text: 'Codificamos y analizamos entrevistas y grupos focales con Atlas.ti para construir tus categorías y hallazgos.' },
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
    h1Accent: 'de maestría',
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
      { kind: 'photos' },
      {
        kind: 'text',
        id: 'online',
        title: 'Acompañamiento 100 % online y adaptado a tu horario',
        text: ['Trabajamos contigo a distancia, sin importar tu ciudad o universidad. Nuestro equipo multidisciplinario está disponible en horarios flexibles para avanzar a tu ritmo.'],
        image: onlineAsesoriaImg,
        imageAlt: 'Estudiante de maestría en una asesoría online desde su laptop',
      },
      {
        kind: 'list',
        id: 'confianza',
        title: '¿Por qué cientos de estudiantes confían en Científica Consultores?',
        variant: 'icons',
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
    h1Accent: 'doctoral',
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
    h1Accent: 'suficiencia profesional (TSP)',
    lede: '¿Tienes experiencia laboral de 3 años pero necesitas tu título universitario?',
    image: tspImg,
    imageAlt: 'Asesoría de trabajo de suficiencia profesional',
    formSubject: 'Nuevo lead - TSP',
    introImage: tspIntro,
    introAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    intro: ['Enfrentar tu trabajo de suficiencia profesional es el último paso para obtener tu título. En Científica Consultores ofrecemos una asesoría TSP integral para guiarte en cada etapa, asegurando que tu trabajo cumpla con los más altos estándares académicos y profesionales. Nuestro equipo de expertos te acompaña hasta tu sustentación.'],
    sections: [
      {
        kind: 'text',
        id: 'que-es',
        title: '¿Qué es un trabajo de suficiencia profesional?',
        text: ['Es un informe donde aplicas lo que aprendiste en tu carrera para resolver un problema real de tu trabajo. Es una modalidad para obtener tu título sin hacer una tesis, y te guiamos para que cumpla lo que pide tu universidad.'],
        image: tspTrabajoImg,
        imageAlt: 'Profesionales revisando reportes y resultados de su trabajo',
        cta: 'Solicitar presupuesto gratuito',
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
        variant: 'feature',
        points: [
          { title: 'Resultados comprobados', stat: `+${stats.tsp}`, statLabel: 'profesionales acompañados en su TSP', text: 'Si el jurado te observa, te guiamos para levantar las observaciones sin costo adicional.', bullets: ['Asesoría personalizada según tu universidad', 'Levantamiento de observaciones incluido', 'Acompañamiento hasta tu sustentación'] },
          { title: 'Expertos por universidad', text: 'Conocemos el formato y los requisitos del TSP en estas universidades y en muchas más.', logos: ['Universidad_Privada_del_Norte_UPN.png', 'u-universidad-cesar-vallejo.png', 'usil.png', 'UTP.jpeg'] },
        ],
      },
      { kind: 'stages', title: 'Tu TSP por etapas' },
    ],
    faqTitle: 'Preguntas frecuentes sobre el TSP',
    faq: tspFaq,
  },
};

export const careerAreas = [
  { name: 'Ingenierías', image: ingenieriasImg, careers: ['Ingeniería Civil', 'Ingeniería de Sistemas', 'Ingeniería de Software', 'Ingeniería Industrial', 'Ingeniería Mecánica', 'Ingeniería Eléctrica', 'Ingeniería Electrónica', 'Ingeniería Mecatrónica', 'Ingeniería Ambiental', 'Ingeniería Química', 'Ingeniería de Minas', 'Ingeniería Agroindustrial', 'Ingeniería Agronómica', 'Ingeniería de Telecomunicaciones', 'Arquitectura'] },
  { name: 'Letras', image: letrasImg, careers: ['Literatura', 'Comunicación', 'Periodismo', 'Historia', 'Filosofía', 'Lingüística', 'Traducción e Interpretación', 'Educación Inicial', 'Educación Primaria', 'Educación Secundaria', 'Arte y Diseño'] },
  { name: 'Ciencias sociales', image: socialesImg, careers: ['Administración de Empresas', 'Derecho', 'Economía', 'Contabilidad', 'Marketing', 'Negocios Internacionales', 'Psicología', 'Sociología', 'Ciencia Política', 'Antropología', 'Trabajo Social', 'Relaciones Internacionales', 'Turismo y Hotelería', 'Gestión Pública'] },
  { name: 'Ciencias de la salud', image: saludImg, careers: ['Medicina Humana', 'Enfermería', 'Odontología', 'Obstetricia', 'Farmacia y Bioquímica', 'Nutrición', 'Tecnología Médica', 'Terapia Física', 'Psicología Clínica', 'Biología', 'Medicina Veterinaria', 'Salud Pública'] },
];
