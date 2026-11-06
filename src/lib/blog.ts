/** Utilidades compartidas por la lista del blog y cada artículo */
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'guias', label: 'Guías de tesis' },
  { id: 'comunidad', label: 'Comunidad' },
];
export const categoryOf = (id: string) => (/tesis|proyecto|suficiencia/.test(id) ? 'guias' : 'comunidad');
export const categoryLabel = (c: string) => categories.find((x) => x.id === c)?.label ?? '';
export const readingMinutes = (body = '') => Math.max(2, Math.round(body.split(/\s+/).length / 200));
