import type { ImageMetadata } from 'astro';
import pregrado from '@/assets/images/otros/asesora-de-tesis-de-pregardo.jpg';
import maestria from '@/assets/images/otros/asesor-de-tesis-de-maestria.jpg';
import doctorado from '@/assets/images/otros/asesor-tesis-doctoral-cientifica-consultores.jpg';
import tsp from '@/assets/images/otros/asesor-de-trabajo-de-suficiencia-profesional.jpg';
import articulos from '@/assets/images/otros/asesora-de-articulos-cientificos.jpg';
import proyecto from '@/assets/images/otros/asesor-en-investigador-y-proyectos-academicos.jpg';

export type Service = {
  id: string;
  href: string;
  name: string;
  navLabel: string;
  image: ImageMetadata;
  imageAlt: string;
  summary: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'pregrado',
    href: '/tesis.html',
    name: 'Pregrado y licenciatura',
    navLabel: 'Tesis de pregrado',
    image: pregrado,
    imageAlt: 'Asesora de tesis de pregrado de Científica Consultores',
    summary: 'Del tema a la sustentación, con un asesor de tu carrera.',
    title: 'Asesoría de pregrado y licenciatura',
    description: 'Recibe acompañamiento personalizado de un asesor de tesis con experiencia en proyectos de pregrado, licenciatura y grado. Te guiamos en la elección del tema, la elaboración del marco teórico, la definición del enfoque metodológico y la redacción del documento final. Nos adaptamos a los lineamientos de tu universidad y a las distintas denominaciones académicas —tesis, tesina o trabajo de grado— para que avances con claridad y presentes un estudio sólido y bien estructurado.',
  },
  {
    id: 'maestria',
    href: '/tesis-maestria.html',
    name: 'Maestría o máster',
    navLabel: 'Tesis de maestría',
    image: maestria,
    imageAlt: 'Asesor de tesis de maestría de Científica Consultores',
    summary: 'Marco teórico, análisis y defensa con un asesor de posgrado.',
    title: 'Asesoría de tesis de maestría o máster',
    description: 'Un asesor de tesis con experiencia en investigación de posgrado te acompaña en todas las etapas de tu tesis de maestría. Te ayudamos a elaborar un marco teórico sólido, definir el enfoque metodológico, realizar análisis cualitativos o cuantitativos y redactar cada capítulo con claridad académica. Esta asesoría está adaptada para programas de maestría en Latinoamérica, España y la comunidad hispana en Estados Unidos.',
  },
  {
    id: 'doctorado',
    href: '/tesis-doctoral.html',
    name: 'Doctorado',
    navLabel: 'Tesis doctoral',
    image: doctorado,
    imageAlt: 'Asesor de tesis doctoral de Científica Consultores',
    summary: 'Investigación avanzada, de la propuesta a la defensa.',
    title: 'Asesoría de tesis doctoral',
    description: 'Un asesor de tesis doctoral con experiencia en investigación avanzada te acompaña en el diseño del estudio, la construcción teórica, el análisis cualitativo o cuantitativo profundo y la argumentación académica necesaria para sustentar tu tesis. Te apoyamos en la elaboración de la propuesta doctoral y el desarrollo de capítulos, artículos o manuscritos publicables, con un trabajo riguroso, coherente y alineado a los estándares de programas internacionales de doctorado.',
  },
  {
    id: 'tsp',
    href: '/trabajo-de-suficiencia-profesional.html',
    name: 'Trabajo de suficiencia profesional',
    navLabel: 'Trabajo de suficiencia profesional',
    image: tsp,
    imageAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    summary: 'Tu experiencia laboral convertida en tu título profesional.',
    title: 'Asesoría para trabajo de suficiencia profesional',
    description: 'Recibe apoyo especializado para la elaboración de tu trabajo de suficiencia profesional (TSP) con la guía de un asesor académico. Te orientamos en la estructura del documento, el análisis aplicado, la argumentación, la metodología y la redacción final. Nos adaptamos a diferentes formatos institucionales —informe profesional, estudio de caso, proyecto aplicado o reporte técnico— para que presentes un trabajo claro, bien organizado y alineado a los requisitos académicos de tu programa.',
  },
  {
    id: 'articulos',
    href: '/articulos_cientificos.html',
    name: 'Artículos científicos',
    navLabel: 'Artículos científicos',
    image: articulos,
    imageAlt: 'Asesora de artículos científicos de Científica Consultores',
    summary: 'De tu investigación a una revista indexada.',
    title: 'Asesoría de artículos científicos y publicaciones',
    description: 'Recibe apoyo especializado para la elaboración de artículos científicos y manuscritos académicos orientados a revistas indexadas. Te guiamos en la estructura IMRyD, la revisión de literatura, el diseño metodológico, el análisis riguroso de resultados y la redacción precisa según normas internacionales. Un asesor académico te ayuda a fortalecer la calidad del paper, optimizar la argumentación y preparar tu artículo para procesos de arbitraje, indexación o presentación en congresos científicos.',
  },
  {
    id: 'proyecto',
    href: '/tesis.html#proyecto',
    name: 'Proyecto de tesis',
    navLabel: 'Proyecto de tesis',
    image: proyecto,
    imageAlt: 'Asesor de proyectos de investigación de Científica Consultores',
    summary: 'Un proyecto sólido, listo para que tu universidad lo apruebe.',
    title: 'Asesoría de proyecto de tesis',
    description: 'Te apoyamos en la elaboración de tu proyecto de tesis, definiendo objetivos claros, el planteamiento del problema, la justificación, la metodología y el diseño de la investigación. Todo el proceso se desarrolla con acompañamiento personalizado para que presentes un proyecto sólido y aprobado sin observaciones.',
  },
];
