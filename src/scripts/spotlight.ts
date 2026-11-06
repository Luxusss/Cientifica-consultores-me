/**
 * Luz que sigue al mouse sobre las tarjetas: un brillo suave y un borde que se ilumina
 * en naranja de la marca justo donde está el cursor. Solo en equipos con mouse y sin
 * “reducir movimiento”. Se aplica a las tarjetas existentes sin tocar cada componente.
 */
const CARDS = '.card, .tile, .rel-card, .post-link, .where-card, .q-card, .visit-card, .way, .pillar';
const fine = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

if (fine.matches) {
  let frame = 0;
  const ready = new WeakSet<HTMLElement>();

  const prepare = (el: HTMLElement) => {
    if (ready.has(el)) return;
    ready.add(el);
    el.classList.add('has-spot');
    const glow = document.createElement('span');
    glow.className = 'spot-glow';
    glow.setAttribute('aria-hidden', 'true');
    el.append(glow);
  };

  document.addEventListener('pointerover', (e) => {
    const el = (e.target as Element).closest<HTMLElement>(CARDS);
    if (el) prepare(el);
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('.has-spot');
    if (!el) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  }, { passive: true });
}
