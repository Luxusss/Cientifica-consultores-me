const root = document.documentElement;
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window && targets.length) {
  const owners = new Map<Element, HTMLElement>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (owners.get(entry.target) ?? entry.target).classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );
  for (const el of targets) {
    const watched = el.dataset.reveal === 'shutter' && el.parentElement ? el.parentElement : el;
    owners.set(watched, el);
    io.observe(watched);
  }
}

root.setAttribute('data-reveal-ready', '');

const live = CSS.supports('animation-timeline: view()') && matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 64em)');
for (const scene of document.querySelectorAll<HTMLElement>('section.scene')) {
  const sync = () => {
    const on = !!live && live.matches;
    scene.classList.toggle('is-live', on);
    scene.classList.toggle('is-rest', !on);
  };
  sync();
  if (live) live.addEventListener('change', sync);
}
