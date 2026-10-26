const mensajes = [
  { icon: "fa-shield-halved", texto: "ABSOLUTA DISCRECIÓN" },
  { icon: "fa-credit-card", texto: "ACEPTAMOS TODO MEDIO DE PAGO" },
  { icon: "fa-gift", texto: "TU PRIMERA ASESORÍA GRATIS" },
  { icon: "fa-phone-volume", texto: "CONTÁCTANOS (051) 990448338" }
];

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const iconEl = document.getElementById("contactanos-icon");
  const textEl = document.getElementById("contactanos-text-content");

  if (iconEl && textEl) {
    setInterval(() => {
      textEl.classList.add("slide-out");
      iconEl.classList.add("slide-out");

      setTimeout(() => {
        const mensaje = mensajes[index % mensajes.length];
        iconEl.className = `fa-solid ${mensaje.icon}`;
        textEl.textContent = mensaje.texto;

        textEl.classList.remove("slide-out");
        iconEl.classList.remove("slide-out");
        textEl.classList.add("slide-in");
        iconEl.classList.add("slide-in");

        setTimeout(() => {
          textEl.classList.remove("slide-in");
          iconEl.classList.remove("slide-in");
        }, 600);

        index++;
      }, 600);
    }, 3000);
  }

  const select = document.getElementById("contactCountry");
  const wrapper = document.getElementById("contactCountryWrapper");
  if (!select || !wrapper) return;

  Array.from(select.options).forEach(opt => {
    opt.dataset.full = opt.dataset.full || opt.textContent.trim();
  });

  const openDropdown = () => {
    Array.from(select.options).forEach(opt => opt.textContent = opt.dataset.full);
  };

  const closeDropdown = () => {
    const idx = select.selectedIndex;
    Array.from(select.options).forEach((opt, i) => {
      opt.textContent = i === idx && opt.value ? opt.value : opt.dataset.full;
    });
    wrapper.classList.toggle("has-value", !!select.value);
  };

  select.addEventListener("mousedown", openDropdown);
  select.addEventListener("focus", openDropdown);
  select.addEventListener("change", closeDropdown);
  select.addEventListener("blur", closeDropdown);

  closeDropdown();

  const form = document.getElementById("contactForm");
  if (!form) return;

  const originalName = select.name || "pais";
  select.name = originalName + "_codigo";

  const hidden = document.createElement("input");
  hidden.type = "hidden";
  hidden.name = originalName;
  form.appendChild(hidden);

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const opt = select.options[select.selectedIndex];
    let countryName = "";
    if (opt && opt.dataset.full) {
      const m = opt.dataset.full.match(/\)\s*(.+)$/);
      countryName = m ? m[1] : opt.dataset.full;
    }
    hidden.value = countryName;

    const fd = new FormData(form);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const dispositivo = isMobile ? "(Móvil)" : "(PC)";
    
    const subjectOriginal = fd.get('_subject') || "Web Principal";
    const mensajeUsuario = fd.get("mensaje") || "";

    const payload = {
      social_network: "google",
      external_id: "google_" + Date.now(),
      name: fd.get("nombre") || "",
      email: fd.get("email") || "",
      phone: ((fd.get(originalName + "_codigo") || "") + " " + (fd.get("telefono") || "")).trim(),
      notes: `${subjectOriginal} ${dispositivo} - ${mensajeUsuario}`,
      page: window.location.href
    };

    fetch("https://sinaptiq.incitap.com/api/webhooks/social/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .catch(error => console.error(error));

    fetch("https://formsubmit.co/marketingcientificaconsultores@gmail.com", {
      method: "POST",
      body: fd
    }).catch(() => {});

    alert("Mensaje enviado correctamente. Nos contactaremos contigo.");
    form.reset();
    closeDropdown();
  });
});