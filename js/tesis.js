(function () {
  const forms = document.querySelectorAll('form.lead-form');

  forms.forEach(form => {
    form.removeAttribute('novalidate');

    // --- VARIABLES Y ELEMENTOS ---
    const nombre = form.elements['nombre'];
    const tel = form.elements['telefono'];
    const select = form.querySelector('select[name*="pais"]');
    const wrapper = select ? select.closest('.lf-country-wrapper') || select.closest('.mobile-country-wrapper') : null;
    const start = Date.now();

    // --- FUNCIONES DE LIMPIEZA ---
    const clearValidityOnInput = (el) => {
      if (!el) return;
      el.addEventListener('input', () => el.setCustomValidity(''));
      el.addEventListener('blur', () => el.setCustomValidity(''));
    };
    clearValidityOnInput(nombre);
    clearValidityOnInput(tel);

    const trimOnBlur = (el) => {
      if (!el) return;
      el.addEventListener('blur', () => { el.value = (el.value || '').trim(); });
    };
    trimOnBlur(nombre);
    trimOnBlur(tel);

    // --- LÓGICA DEL SELECT DE PAÍS ---
    if (select) {
      const originalName = select.getAttribute('name') || 'pais';
      select.setAttribute('name', originalName + '_codigo');

      let hidden = form.querySelector('input[name="' + originalName + '"]');
      if (!hidden) {
        hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = originalName;
        form.appendChild(hidden);
      }

      const allOptions = Array.from(select.querySelectorAll('option'));
      const placeholder = select.querySelector('option[disabled][selected]');
      const realOptions = allOptions.filter(opt => opt !== placeholder);
      
      select.innerHTML = '';
      if (placeholder) select.appendChild(placeholder);
      realOptions.slice(0, 10).forEach(opt => select.appendChild(opt));
      realOptions.slice(10).forEach(opt => select.appendChild(opt));

      Array.from(select.options).forEach(opt => {
        if (!opt.dataset.full) opt.dataset.full = opt.textContent.trim();
      });

      const updateOptions = (isClosed) => {
        const idx = select.selectedIndex;
        Array.from(select.options).forEach((opt, i) => {
          if (!opt.dataset.full) return;
          opt.textContent = (isClosed && i === idx && opt.value) ? opt.value : opt.dataset.full;
        });
        if (wrapper) {
          wrapper.classList.toggle('has-value', !!select.value);
        }
        
        if (hidden) {
            const selectedOpt = select.options[idx];
            let countryName = '';
            if (selectedOpt) {
                if (selectedOpt.dataset.full) {
                    const match = selectedOpt.dataset.full.match(/\)\s*(.+)$/);
                    countryName = match ? match[1] : selectedOpt.dataset.full;
                } else {
                    countryName = selectedOpt.textContent.trim();
                }
            }
            hidden.value = countryName;
        }
      };

      select.addEventListener('mousedown', () => updateOptions(false));
      select.addEventListener('focus', () => updateOptions(false));
      select.addEventListener('change', () => updateOptions(true));
      select.addEventListener('blur', () => updateOptions(true));
      
      updateOptions(true);
    }

    // --- EVENTO SUBMIT (LA PARTE CRÍTICA) ---
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // 1. Detenemos el envío automático

      let ok = true;
      if (nombre) nombre.setCustomValidity('');
      if (tel) tel.setCustomValidity('');

      const n = (nombre?.value || '').trim();
      const t = (tel?.value || '').trim();
      const phoneRe = /^\+?\d{7,15}$/;

      if (!n || n.length < 3) {
        nombre?.setCustomValidity('Ingresa tu nombre y apellido (mínimo 3 caracteres).');
        ok = false;
      }
      if (!t || !phoneRe.test(t)) {
        tel?.setCustomValidity('Ingresa un teléfono válido (7–15 dígitos, puedes incluir +).');
        ok = false;
      }

      if (Date.now() - start < 2000) ok = false; // Anti-bot

      if (!ok || !form.checkValidity()) {
        form.reportValidity();
        (form.querySelector(':invalid') || nombre)?.focus();
        return;
      }

      const fd = new FormData(form);
      const paisCodigo = select ? fd.get(select.getAttribute('name')) : '';
      const telefono = fd.get('telefono');
      const finalPhone = ((paisCodigo || "") + " " + (telefono || "")).trim();

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const dispositivo = isMobile ? "(Móvil)" : "(PC)";
      const mensajeUsuario = fd.get("mensaje") || "Interesado en asesoría";

      const payload = {
        social_network: "google",
        external_id: "google_" + Date.now(),
        name: fd.get("nombre") || "",
        email: fd.get("email") || "",
        phone: finalPhone,
        notes: `${dispositivo} - ${mensajeUsuario}`,
        page: window.location.href
      };

      // 2. PRIMERO ENVIAMOS AL CRM Y ESPERAMOS
      fetch("https://sinaptiq.incitap.com/api/webhooks/social/form", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload),
        keepalive: true, // Esto ayuda a que no muera si el navegador se cierra
        mode: 'cors'
      })
      .then(res => {
          console.log("Respuesta CRM:", res.status);
      })
      .catch(err => console.error("Error CRM:", err))
      .finally(() => {
          // 3. SOLO CUANDO EL CRM HAYA RESPONDIDO (BIEN O MAL), ENVIAMOS EL CORREO
          console.log("Enviando correo a FormSubmit...");
          fetch("https://formsubmit.co/marketingcientificaconsultores@gmail.com", {
            method: "POST",
            body: fd
          })
          .then(() => {
              alert("Gracias. Tu solicitud ha sido enviada correctamente.");
              form.reset();
              if (select) {
                select.selectedIndex = 0;
                if (wrapper) wrapper.classList.remove('has-value');
                Array.from(select.options).forEach((opt) => {
                  if (opt.dataset.full) opt.textContent = opt.dataset.full;
                });
              }
          })
          .catch(() => alert("Hubo un error al enviar el formulario."));
      });
    });
  });
})();