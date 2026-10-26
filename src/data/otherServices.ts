import type { ImageMetadata } from 'astro';
import teoricos from '@/assets/images/otros_servicios/estudios_teoricos/revision_sistematica.jpg';
import empiricos from '@/assets/images/otros_servicios/estudios_empiricos/Plan-de-Negocios.png';
import proyectos from '@/assets/images/otros_servicios/proyectos/Proyectos-de-innovacion.jpg';
import datos from '@/assets/images/otros_servicios/datos_informacion/analisis.jpg';
import redaccion from '@/assets/images/otros_servicios/correccion_redaccion/Correccion_ortotipo.jpg';

export type ServiceGroup = { id: string; name: string; image: ImageMetadata; items: string[] };

export const otherServices: ServiceGroup[] = [
  { id: 'estudios-teoricos', name: 'Estudios teóricos', image: teoricos, items: ['Revisión sistemática', 'Metaanálisis', 'Artículo de revisión'] },
  { id: 'estudios-empiricos', name: 'Estudios empíricos', image: empiricos, items: ['Trabajos de suficiencia profesional', 'Planes de negocio'] },
  { id: 'proyectos', name: 'Proyectos', image: proyectos, items: ['Proyectos de mejora', 'Proyectos de innovación', 'Proyectos de factibilidad', 'Proyectos tecnológicos'] },
  {
    id: 'datos',
    name: 'Datos e información',
    image: datos,
    items: [
      'Trabajo de campo con técnicas cuantitativas y cualitativas',
      'Bases de datos cuantitativas y transcripción de entrevistas o grupos focales',
      'Análisis estadístico descriptivo e inferencial, y análisis de contenido cualitativo',
    ],
  },
  { id: 'redaccion', name: 'Corrección de la redacción', image: redaccion, items: ['Corrección ortotipográfica', 'Corrección de estilo', 'Normas de redacción'] },
];
