(() => {
  if (window.__lrBound) return; window.__lrBound = true;

  const form  = document.getElementById('lr-form');
  const okBox = document.getElementById('lr-exito');
  const errBx = document.getElementById('lr-error');

  if (!form) return;
  // blindaje extra
  form.setAttribute('method', 'POST');
  form.setAttribute('action', '');           // nunca navegar
  form.addEventListener('submit', onSubmit, { capture:true });

  // _next solo por compatibilidad visual
  const next = document.getElementById('lr-next');
  if (next) next.value = location.origin + location.pathname + '?ok=1#libro-reclamaciones';

  // muestra éxito si venías de ?ok=1
  const params = new URLSearchParams(location.search);
  if (params.get('ok') === '1' && okBox) {
    okBox.hidden = false;
    history.replaceState(null, '', location.pathname + '#libro-reclamaciones');
  }

  // DNI solo 8 dígitos (opcional)
  form.elements['dni']?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g,'').slice(0,8);
  });

  async function onSubmit(ev){
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();

    hideErr();
    if (!form.checkValidity()){ form.reportValidity?.(); return; }

    const btn = form.querySelector('.lr-btn');
    const old = btn?.textContent; if (btn){ btn.disabled = true; btn.textContent = 'Enviando…'; }

    const fd = new FormData(form);

    // normaliza adjuntos y valida tamaño
    const fi = document.getElementById('lr-attachments');
    if (fi){
      fd.delete('attachments'); fd.delete('attachments[]');
      const MAX_ONE = 5 * 1024 * 1024, MAX_ALL = 10 * 1024 * 1024;
      let total = 0;
      for (const f of fi.files){
        total += f.size;
        if (f.size > MAX_ONE){ showErr('Cada archivo debe pesar máx. 5 MB.'); resetBtn(); return; }
        fd.append('attachment', f);  // nombre correcto
      }
      if (total > MAX_ALL){ showErr('El total no debe superar 10 MB.'); resetBtn(); return; }
    }

    const endpoint = form.getAttribute('data-endpoint');
    if (!endpoint){ showErr('Falta el endpoint del formulario.'); resetBtn(); return; }

    try{
      const res = await fetch(endpoint, { method:'POST', body: fd, headers:{ 'Accept':'application/json' }});
      if (!res.ok){
        let msg = 'No se pudo enviar.';
        if (res.status === 422) msg = 'Verifica tu correo destino en FormSubmit (revisa tu bandeja y confirma).';
        if (res.status === 413) msg = 'Adjuntos muy grandes (máx. 5 MB c/u y 10 MB total).';
        showErr(`${msg} (HTTP ${res.status})`); resetBtn(); return;
      }

      // éxito: mostrar mensaje y resetear SIN redirigir
      okBox.hidden = false;
      form.reset();
      location.hash = 'libro-reclamaciones';
      okBox.setAttribute('tabindex','-1');
      okBox.focus({ preventScroll:false });

    } catch (e){
      console.error(e);
      showErr('Error de red/bloqueo. Prueba otra vez o envía sin adjuntos.');
    } finally {
      resetBtn();
    }

    function showErr(t){ if (errBx){ errBx.textContent = '⚠ ' + t; errBx.hidden = false; } else alert(t); }
    function hideErr(){ if (errBx){ errBx.hidden = true; errBx.textContent = ''; } }
    function resetBtn(){ if (btn){ btn.disabled = false; btn.textContent = old; } }
  }
})();