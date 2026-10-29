import { pageKey } from './page';

const slug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .split('_')
    .slice(0, 5)
    .join('_');

const kindOf = (el: HTMLElement) => {
  const href = el.getAttribute('href') ?? '';
  if (href.includes('wa.me')) return 'whatsapp';
  if (href.startsWith('mailto:')) return 'correo';
  if (href.startsWith('tel:')) return 'telefono';
  if (href.includes('#formulario')) return 'formulario';
  if (el.classList.contains('button')) return 'boton';
  return '';
};

const zoneOf = (el: HTMLElement) => {
  if (el.closest('[data-header]')) return 'cabecera';
  if (el.closest('footer')) return 'pie';
  if (el.closest('[data-floats]')) return 'flotante';
  const section = el.closest('section');
  const label = section?.getAttribute('aria-labelledby');
  const heading = (label && document.getElementById(label)?.textContent) || section?.querySelector('h1, h2')?.textContent || '';
  return slug(heading) || 'pagina';
};

document.addEventListener(
  'click',
  (event) => {
    const el = (event.target as Element | null)?.closest<HTMLElement>('a, button');
    if (!el) return;
    const kind = kindOf(el);
    if (!kind && !el.dataset.analytics) return;
    if (el.matches('button[type="submit"]')) return;
    const page = pageKey();
    (window.dataLayer ??= []).push({
      event: 'cta_click',
      cta_id: el.dataset.analytics ?? `lead_${kind}_${page}`,
      cta_type: kind || 'boton',
      cta_zone: zoneOf(el),
      cta_page: page,
      cta_text: (el.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 80),
      cta_url: el.getAttribute('href') ?? '',
    });
  },
  { capture: true },
);
