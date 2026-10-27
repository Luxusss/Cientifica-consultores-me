import type { ImageMetadata } from 'astro';
import revision from '@/assets/images/otros_servicios/estudios_teoricos/revision_sistematica.jpg';
import metaanalisis from '@/assets/images/otros_servicios/estudios_teoricos/Metaanalisis.jpg';
import articuloRevision from '@/assets/images/otros_servicios/estudios_teoricos/articulo_revision.jpg';
import tsp from '@/assets/images/otros_servicios/estudios_empiricos/Trabajo-de-suficiencia-profesional.jpg';
import negocios from '@/assets/images/otros_servicios/estudios_empiricos/Plan-de-Negocios.png';
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

export type ServiceItem = { name: string; image: ImageMetadata; alt: string; details?: string[] };
export type ServiceGroup = { id: string; name: string; items: ServiceItem[] };

export const otherServices: ServiceGroup[] = [
  {
    id: 'estudios-teoricos',
    name: 'Estudios teóricos',
    items: [
      { name: 'Revisión sistemática', image: revision, alt: 'Revisión sistemática' },
      { name: 'Metaanálisis', image: metaanalisis, alt: 'Metaanálisis' },
      { name: 'Artículo de revisión', image: articuloRevision, alt: 'Artículo de revisión' },
    ],
  },
  {
    id: 'estudios-empiricos',
    name: 'Estudios empíricos',
    items: [
      { name: 'Trabajos de suficiencia profesional', image: tsp, alt: 'Trabajo de suficiencia profesional' },
      { name: 'Planes de negocio', image: negocios, alt: 'Plan de negocios' },
    ],
  },
  {
    id: 'proyectos',
    name: 'Proyectos',
    items: [
      { name: 'Proyectos de mejora', image: mejora, alt: 'Proyectos de mejora' },
      { name: 'Proyectos de innovación', image: innovacion, alt: 'Proyectos de innovación' },
      { name: 'Proyectos de factibilidad', image: factibilidad, alt: 'Proyecto de factibilidad' },
      { name: 'Proyectos tecnológicos', image: tecnologicos, alt: 'Proyectos tecnológicos' },
    ],
  },
  {
    id: 'datos',
    name: 'Datos e información',
    items: [
      { name: 'Trabajo de campo', image: campo, alt: 'Trabajo de campo', details: ['Obtención de datos a través de técnicas cuantitativas.', 'Obtención de información a partir de técnicas cualitativas.'] },
      { name: 'Procesamiento', image: procesamiento, alt: 'Procesamiento de datos', details: ['Elaboración de bases de datos cuantitativos.', 'Transcripción de entrevistas y grupos focales.'] },
      { name: 'Análisis', image: analisis, alt: 'Análisis de datos', details: ['Análisis estadístico (descriptivo e inferencial).', 'Análisis de contenido e información (cualitativo).'] },
    ],
  },
  {
    id: 'redaccion',
    name: 'Corrección de la redacción',
    items: [
      { name: 'Corrección ortotipográfica', image: ortotipografica, alt: 'Corrección ortotipográfica' },
      { name: 'Corrección de estilo', image: estilo, alt: 'Corrección de estilo' },
      { name: 'Normas de redacción', image: normas, alt: 'Manual de normas de redacción' },
    ],
  },
];
