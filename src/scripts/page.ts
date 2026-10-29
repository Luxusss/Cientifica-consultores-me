const pages: Record<string, string> = {
  '/': 'inicio',
  '/tesis.html': 'pregrado',
  '/tesis-maestria.html': 'maestria',
  '/tesis-doctoral.html': 'doctorado',
  '/trabajo-de-suficiencia-profesional.html': 'tsp',
  '/articulos_cientificos.html': 'articulos',
  '/otros_servicios.html': 'otros_servicios',
  '/contactanos.html': 'contacto',
  '/nosotros.html': 'nosotros',
  '/testimonios.html': 'testimonios',
  '/blog.html': 'blog',
};

export const pageKey = () => {
  const path = location.pathname;
  if (pages[path]) return pages[path];
  if (path.startsWith('/blog/')) return 'blog_articulo';
  return path.replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'inicio';
};
