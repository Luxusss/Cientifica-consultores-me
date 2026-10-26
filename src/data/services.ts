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
  includes: string[];
};

export const services: Service[] = [
  {
    id: 'pregrado',
    href: '/tesis.html',
    name: 'Pregrado y licenciatura',
    navLabel: 'Tesis de pregrado',
    image: pregrado,
    imageAlt: 'Asesora de tesis de pregrado de Científica Consultores',
    includes: [
      'Elección del tema y planteamiento del problema',
      'Marco teórico y diseño metodológico',
      'Acompañamiento en la redacción de cada capítulo',
      'Análisis de datos cuantitativos o cualitativos',
      'Control de similitud con Turnitin',
      'Preparación para la sustentación',
    ],
  },
  {
    id: 'maestria',
    href: '/tesis-maestria.html',
    name: 'Maestría o máster',
    navLabel: 'Tesis de maestría',
    image: maestria,
    imageAlt: 'Asesor de tesis de maestría de Científica Consultores',
    includes: [
      'Marco teórico sólido y enfoque metodológico',
      'Análisis cualitativo o cuantitativo',
      'Revisión capítulo por capítulo',
      'Reporte de similitud con Turnitin',
      'Diapositivas y ensayo de la sustentación',
    ],
  },
  {
    id: 'doctorado',
    href: '/tesis-doctoral.html',
    name: 'Doctorado',
    navLabel: 'Tesis doctoral',
    image: doctorado,
    imageAlt: 'Asesor de tesis doctoral de Científica Consultores',
    includes: [
      'Propuesta doctoral y diseño del estudio',
      'Construcción teórica y antecedentes',
      'Análisis profundo de datos',
      'Artículos y manuscritos publicables',
      'Preparación de la defensa',
    ],
  },
  {
    id: 'tsp',
    href: '/trabajo-de-suficiencia-profesional.html',
    name: 'Trabajo de suficiencia profesional',
    navLabel: 'Trabajo de suficiencia profesional',
    image: tsp,
    imageAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    includes: [
      'Estructura según el formato de tu universidad',
      'Fundamento teórico de tu área',
      'Cómo presentar tu experiencia y tus aportes',
      'Corrección, formato y Turnitin',
      'Levantamiento de observaciones del jurado',
    ],
  },
  {
    id: 'articulos',
    href: '/articulos_cientificos.html',
    name: 'Artículos científicos',
    navLabel: 'Artículos científicos',
    image: articulos,
    imageAlt: 'Asesora de artículos científicos de Científica Consultores',
    includes: [
      'Estructura IMRyD',
      'Revisión de literatura y metodología',
      'Redacción según normas internacionales',
      'Preparación para revistas indexadas y congresos',
    ],
  },
  {
    id: 'proyecto',
    href: '/tesis.html#proyecto',
    name: 'Proyecto de tesis',
    navLabel: 'Proyecto de tesis',
    image: proyecto,
    imageAlt: 'Asesor de proyectos de investigación de Científica Consultores',
    includes: [
      'Objetivos y planteamiento del problema',
      'Justificación',
      'Metodología y diseño de la investigación',
      'Revisión antes de presentarlo a tu universidad',
    ],
  },
];
