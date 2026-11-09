import type { ImageMetadata } from 'astro';
import revision from '@/assets/images/otros_servicios/estudios_teoricos/revision-sistematica-asesora.jpg';
import metaanalisis from '@/assets/images/otros_servicios/estudios_teoricos/metaanalisis-asesor.jpg';
import articuloRevision from '@/assets/images/otros_servicios/estudios_teoricos/articulo-revision-asesora.jpg';
import tsp from '@/assets/images/otros_servicios/estudios_empiricos/tsp-asesor-empresa.jpg';
import negocios from '@/assets/images/otros_servicios/estudios_empiricos/plan-negocio-asesora-cafeteria.jpg';
import mejora from '@/assets/images/otros_servicios/proyectos/Proyectos-de-mejora.jpg';
import innovacion from '@/assets/images/otros_servicios/proyectos/Proyectos-de-innovacion.jpg';
import factibilidad from '@/assets/images/otros_servicios/proyectos/Proyecto-de-factibilidad.jpg';
import tecnologicos from '@/assets/images/otros_servicios/proyectos/Proyectos-tecnologicos.jpg';
import campo from '@/assets/images/otros_servicios/datos_informacion/trabajo_de_campo.jpg';
import procesamiento from '@/assets/images/otros_servicios/datos_informacion/procesamiento.jpg';
import analisis from '@/assets/images/otros_servicios/datos_informacion/analisis.jpg';
import ortotipografica from '@/assets/images/otros_servicios/correccion_redaccion/Correccion_ortotipo.jpg';
import estilo from '@/assets/images/otros_servicios/correccion_redaccion/correcion_de_estilo.jpeg';
import normas from '@/assets/images/otros_servicios/correccion_redaccion/manual_de_redaccion.jpg';

export type ServiceItem = { name: string; image: ImageMetadata; alt: string; text: string; href?: string };
export type ServiceGroup = {
  id: string;
  name: string;
  icon: 'document' | 'users' | 'bolt' | 'list' | 'pen';
  /** De qué se trata el grupo, en una o dos frases */
  summary: string;
  /** Para quién es */
  forWho: string;
  items: ServiceItem[];
};

export const otherServices: ServiceGroup[] = [
  {
    id: 'estudios-teoricos',
    name: 'Estudios teóricos',
    icon: 'document',
    summary: 'Investigaciones que se construyen a partir de lo que ya se ha publicado, sin trabajo de campo. Ordenamos la evidencia y te ayudamos a sacar conclusiones sólidas.',
    forWho: 'Para tesis, artículos y quienes no pueden recoger datos propios.',
    items: [
      { name: 'Revisión sistemática', image: revision, alt: 'Revisión sistemática', text: 'Buscamos, seleccionamos y analizamos los estudios sobre una pregunta concreta, siguiendo protocolos como PRISMA.' },
      { name: 'Metaanálisis', image: metaanalisis, alt: 'Metaanálisis', text: 'Combinamos estadísticamente los resultados de varios estudios para llegar a una conclusión más confiable.' },
      { name: 'Artículo de revisión', image: articuloRevision, alt: 'Artículo de revisión', text: 'Te acompañamos a ordenar y discutir el estado del arte de un tema para publicarlo en una revista.' },
    ],
  },
  {
    id: 'estudios-empiricos',
    name: 'Estudios empíricos',
    icon: 'users',
    summary: 'Trabajos basados en tu experiencia o en datos reales de una empresa o un mercado. Te guiamos para que el resultado sea aplicable y bien sustentado.',
    forWho: 'Para profesionales que trabajan y emprendedores.',
    items: [
      { name: 'Trabajo de suficiencia profesional', image: tsp, alt: 'Trabajo de suficiencia profesional', text: 'Convierte tu experiencia laboral en un informe para titularte, según el formato de tu universidad.', href: '/trabajo-de-suficiencia-profesional.html' },
      { name: 'Planes de negocio', image: negocios, alt: 'Plan de negocios', text: 'Estructuramos contigo el estudio de mercado, el modelo de negocio y las proyecciones financieras.' },
    ],
  },
  {
    id: 'proyectos',
    name: 'Proyectos',
    icon: 'bolt',
    summary: 'Propuestas aplicadas que resuelven un problema real de una organización, con objetivos, plan de trabajo e indicadores para medir el resultado.',
    forWho: 'Para cursos de titulación, empresas e instituciones.',
    items: [
      { name: 'Proyectos de mejora', image: mejora, alt: 'Proyectos de mejora', text: 'Diagnóstico de un proceso y una propuesta para optimizarlo con indicadores medibles.' },
      { name: 'Proyectos de innovación', image: innovacion, alt: 'Proyectos de innovación', text: 'Diseño de un producto, servicio o proceso nuevo, desde la idea hasta su validación.' },
      { name: 'Proyectos de factibilidad', image: factibilidad, alt: 'Proyecto de factibilidad', text: 'Evaluación técnica, económica y financiera para saber si un proyecto es viable.' },
      { name: 'Proyectos tecnológicos', image: tecnologicos, alt: 'Proyectos tecnológicos', text: 'Formulación de proyectos que aplican tecnología o software a un problema concreto.' },
    ],
  },
  {
    id: 'datos',
    name: 'Datos e información',
    icon: 'list',
    summary: 'La parte más técnica de tu investigación: recoger, ordenar y analizar tus datos con el software adecuado, para que tus resultados sean confiables.',
    forWho: 'Para tesis, artículos e investigaciones de cualquier área.',
    items: [
      { name: 'Trabajo de campo', image: campo, alt: 'Trabajo de campo', text: 'Recojo de datos con técnicas cuantitativas (encuestas) y cualitativas (entrevistas y grupos focales).' },
      { name: 'Procesamiento', image: procesamiento, alt: 'Procesamiento de datos', text: 'Armamos tus bases de datos y transcribimos entrevistas y grupos focales.' },
      { name: 'Análisis', image: analisis, alt: 'Análisis de datos', text: 'Análisis estadístico descriptivo e inferencial, y análisis cualitativo de contenido.' },
    ],
  },
  {
    id: 'redaccion',
    name: 'Corrección de la redacción',
    icon: 'pen',
    summary: 'Cuidamos que tu documento se lea claro, sin errores y con el formato que exige tu universidad o la revista.',
    forWho: 'Para tesis, artículos y libros antes de entregarlos.',
    items: [
      { name: 'Corrección ortotipográfica', image: ortotipografica, alt: 'Corrección ortotipográfica', text: 'Revisamos ortografía, puntuación, tildes y tipografía en todo el documento.' },
      { name: 'Corrección de estilo', image: estilo, alt: 'Corrección de estilo', text: 'Mejoramos la claridad, la coherencia y el tono académico de tu texto.' },
      { name: 'Normas de redacción', image: normas, alt: 'Manual de normas de redacción', text: 'Aplicamos APA, Vancouver, ISO 690 u otra norma en citas, referencias y formato.' },
    ],
  },
];
