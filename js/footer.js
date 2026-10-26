document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;

  const esSoloCopyright = (
    path.includes('/blog.html') ||
    path.includes('como-hacer-tu-proyecto-de-tesis') ||
    path.includes('fiestas-patrias-peru') ||
    path.includes('dia-del-padre') ||
    path.includes('tesis-vs-trabajo-suficiencia-profesional')
  );

  fetch('/footer.html')
    .then(r => r.text())
    .then(html => {
      const ph = document.getElementById('footer-placeholder');
      if (!ph) { console.warn('No existe #footer-placeholder'); return; }
      ph.innerHTML = html;

      if (esSoloCopyright) {
        ph.querySelectorAll('.no-blog').forEach(el => el.remove());
      }

      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        window.addEventListener('scroll', () => {
          backToTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
        }, { passive: true });
        backToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      initFloatingCTAs();
    })
    .catch(err => console.error('Error al cargar footer:', err));
});

function initFloatingCTAs() {
  const root = document.querySelector('.floating-ctas');
  if (!root) {
    console.warn('No se encontró .floating-ctas');
    return;
  }

  const LEAD_WHITELIST = [
    '/tesis.html',
    '/tesis-maestria.html',
    '/tesis-doctoral.html',
    '/articulos_cientificos.html',
    '/trabajo-de-suficiencia-profesional.html'
  ];
  const CURRENT_PATH = location.pathname.replace(/\/+$/, '');
  const canShowLead = LEAD_WHITELIST.some(p => CURRENT_PATH.endsWith(p));

  const wspURL = 'https://api.whatsapp.com/send?phone=51990448338&text=%C2%A1Hola%F0%9F%98%8A!%20Quisiera%20mayor%20informaci%C3%B3n%20sobre%20asesoramiento%20personalizado%20de%20tesis%20%F0%9F%93%9A';

  const btnWsp  = document.getElementById('btn-whatsapp');
  const btnLead = document.getElementById('btn-lead');

  if (btnWsp) btnWsp.href = wspURL;

  const selectors = (root.dataset.formSelectors || '.lead-form,#leadForm,#banner-form').split(',');
  const formTargets = selectors
    .map(s => s.trim())
    .flatMap(s => Array.from(document.querySelectorAll(s)))
    .filter((el, i, arr) => arr.indexOf(el) === i);

  let apartadoVisible = false;
  const setVisible = (el, v) => el && el.classList.toggle('is-visible', !!v);

  function updateVisibility() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;

    const showWsp  = apartadoVisible || scrolled > 200;
    const showLead = canShowLead && scrolled > 200;

    setVisible(btnWsp,  showWsp);
    setVisible(btnLead, showLead);

    root.classList.toggle('is-duo',    showWsp && showLead);
    root.classList.toggle('is-single', showWsp && !showLead);

    const isDesktop = (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= 769);
    if (btnWsp){
      if (isDesktop && showWsp){
        btnWsp.classList.add('desktop-loop');
      } else {
        btnWsp.classList.remove('desktop-loop');
      }
    }

    const newState = showWsp && showLead ? 'duo' : (showWsp ? 'single' : 'none');
    if (newState !== window.__ctaState){
      root.classList.add('swap');
      root.classList.remove('swap-done');
      setTimeout(() => { root.classList.remove('swap'); root.classList.add('swap-done'); }, 220);
      window.__ctaState = newState;
    }
  }

  if (formTargets.length) {
    const io = new IntersectionObserver(entries => {
      apartadoVisible = entries.some(e => e.isIntersecting && e.intersectionRatio >= 0.2);
      updateVisibility();
    }, { threshold: [0, 0.2, 0.5, 1] });
    formTargets.forEach(t => io.observe(t));
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('load',   updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility, { passive: true });

  function pickBestForm() {
    if (!formTargets.length) return null;

    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vw < 768) {
      const mobileForm = formTargets.find(el => el.closest('.lead-form--mobile'));
      if (mobileForm) return mobileForm;
    } else {
      const desktopForm = formTargets.find(el => el.closest('.lead-form--desktop')) ||
                          formTargets.find(el => el.id === 'leadForm');
      if (desktopForm) return desktopForm;
    }

    return formTargets[0];
  }

  function scrollToForm(formEl) {
    const firstField = formEl.querySelector('input, textarea, select') || formEl;

    const rect = formEl.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const extraOffset = (vw < 768 ? 250 : 330);

    const y = rect.top + scrollTop - extraOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setTimeout(() => {
      firstField?.focus({ preventScroll: true });
    }, 380);
  }

  btnLead?.addEventListener('click', e => {
    e.preventDefault();
    const target = pickBestForm();
    if (!target) return;

    const collapse = target.closest('.collapse');
    if (collapse && collapse.classList.contains('collapse')) {
      const trigger = document.querySelector(
        `[data-bs-toggle="collapse"][data-bs-target="#${collapse.id}"]`
      );
      try { trigger?.click(); } catch { }
      setTimeout(() => scrollToForm(target), 240);
    } else {
      scrollToForm(target);
    }
  });

  (function startCTAVibration() {
    setInterval(() => {
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (vw > 480) return;

      const targets = [];
      if (btnWsp?.classList.contains('is-visible'))  targets.push(btnWsp);
      if (btnLead?.classList.contains('is-visible')) targets.push(btnLead);

      targets.forEach(el => {
        el.classList.add('vibrate');
        setTimeout(() => el.classList.remove('vibrate'), 900);
      });
    }, 3000);
  })();

  (function startDesktopCTAAnim(){
    setInterval(() => {
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (vw < 769) return;

      const targets = [];
      if (btnWsp?.classList.contains('is-visible'))  targets.push(btnWsp);
      if (btnLead?.classList.contains('is-visible')) targets.push(btnLead);

      targets.forEach(el => {
        el.classList.add('desktop-pop');
        setTimeout(() => el.classList.remove('desktop-pop'), 700);
      });
    }, 600);
  })();
}