import { services as serviceData } from '@/data/services';

export type NavLink = { label: string; href: string };

export const services: NavLink[] = [
  ...serviceData.filter((s) => s.id !== 'proyecto').map((s) => ({ label: s.navLabel, href: s.href })),
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
