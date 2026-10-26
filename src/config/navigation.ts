export type NavLink = { label: string; href: string };

export const services: NavLink[] = [
  { label: 'Tesis de pregrado', href: '/tesis.html' },
  { label: 'Tesis de maestría', href: '/tesis-maestria.html' },
  { label: 'Tesis doctoral', href: '/tesis-doctoral.html' },
  { label: 'Trabajo de suficiencia profesional', href: '/trabajo-de-suficiencia-profesional.html' },
  { label: 'Artículos científicos', href: '/articulos_cientificos.html' },
  { label: 'Otros servicios', href: '/otros_servicios.html' },
];

export const mainNav: NavLink[] = [
  { label: 'Nosotros', href: '/nosotros.html' },
  { label: 'Testimonios', href: '/testimonios.html' },
  { label: 'Blog', href: '/blog.html' },
  { label: 'Contacto', href: '/contactanos.html' },
];

export const legalNav: NavLink[] = [
  { label: 'Política de privacidad', href: '/politica-privacidad.html' },
  { label: 'Términos y condiciones', href: '/terminos-condiciones.html' },
  { label: 'Libro de reclamaciones', href: '/libro-de-reclamaciones.html' },
];
