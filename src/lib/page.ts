const pages: Record<string, string> = {
  '/': 'inicio',
  '/tesis': 'pregrado',
  '/tesis-maestria': 'maestria',
  '/tesis-doctoral': 'doctorado',
  '/trabajo-de-suficiencia-profesional': 'tsp',
  '/articulos_cientificos': 'articulos',
  '/otros_servicios': 'otros_servicios',
  '/contactanos': 'contacto',
  '/nosotros': 'nosotros',
  '/testimonios': 'testimonios',
  '/blog': 'blog',
};

export const pageKey = (pathname: string) => {
  const path = pathname.replace(/\.html$/, '').replace(/(^|\/)index$/, '/').replace(/(.)\/$/, '$1');
  if (pages[path]) return pages[path];
  if (path.startsWith('/blog/')) return 'blog_articulo';
  return path.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'inicio';
};
