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
  },
  {
    id: 'maestria',
    href: '/tesis-maestria.html',
    name: 'Maestría o máster',
    navLabel: 'Tesis de maestría',
    image: maestria,
    imageAlt: 'Asesor de tesis de maestría de Científica Consultores',
    summary: 'Marco teórico, análisis y defensa con un asesor de posgrado.',
  },
  {
    id: 'doctorado',
    href: '/tesis-doctoral.html',
    name: 'Doctorado',
    navLabel: 'Tesis doctoral',
    image: doctorado,
    imageAlt: 'Asesor de tesis doctoral de Científica Consultores',
    summary: 'Investigación avanzada, de la propuesta a la defensa.',
  },
  {
    id: 'tsp',
    href: '/trabajo-de-suficiencia-profesional.html',
    name: 'Trabajo de suficiencia profesional',
    navLabel: 'Trabajo de suficiencia profesional',
    image: tsp,
    imageAlt: 'Asesora de trabajo de suficiencia profesional de Científica Consultores',
    summary: 'Tu experiencia laboral convertida en tu título profesional.',
  },
  {
    id: 'articulos',
    href: '/articulos_cientificos.html',
    name: 'Artículos científicos',
    navLabel: 'Artículos científicos',
    image: articulos,
    imageAlt: 'Asesora de artículos científicos de Científica Consultores',
    summary: 'De tu investigación a una revista indexada.',
  },
  {
    id: 'proyecto',
    href: '/tesis.html#proyecto',
    name: 'Proyecto de tesis',
    navLabel: 'Proyecto de tesis',
    image: proyecto,
    imageAlt: 'Asesor de proyectos de investigación de Científica Consultores',
    summary: 'Un proyecto sólido, listo para que tu universidad lo apruebe.',
  },
];
