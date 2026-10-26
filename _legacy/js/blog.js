// ✅ Script rotativo del banner del blog
const mensajes = [
  { icon: "fa-shield-halved", texto: "ABSOLUTA DISCRECIÓN" },
  { icon: "fa-credit-card", texto: "ACEPTAMOS TODO MEDIO DE PAGO" },
  { icon: "fa-gift", texto: "TU PRIMERA ASESORÍA GRATIS" },
  { icon: "fa-phone-volume", texto: "CONTÁCTANOS (051) 990448338" }
];

let index = 0;

const iconEl = document.querySelector("#blogbanner-rotating-text i");
const textEl = document.getElementById("rotating-text-content");

// ✅ Mostrar el primer mensaje al instante
textEl.textContent = mensajes[0].texto;
iconEl.className = `fa-solid ${mensajes[0].icon}`;
index = 1;

// ✅ Cada 3 segundos rota el mensaje con animaciones
setInterval(() => {
  textEl.classList.add("slide-out");
  iconEl.classList.add("slide-out");

  setTimeout(() => {
    const mensaje = mensajes[index % mensajes.length];
    textEl.textContent = mensaje.texto;
    iconEl.className = `fa-solid ${mensaje.icon}`;

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

// ✅ Script para hacer que el navbar se quede arriba al hacer scroll
window.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".info-bar");
  const nav = document.getElementById("mainNav");

  if (banner && nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= banner.offsetHeight) {
        nav.classList.add("fixed-top");
      } else {
        nav.classList.remove("fixed-top");
      }
    });
  }
});



// ✅ Script para los botones debajo de las tarjetas
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('blogCarousel');
  const dotsContainer = document.getElementById('blogDots');
  const cards = container.querySelectorAll('.col-md-4');

  const cardWidth = 316; // 300px + 16px gap
  const totalPages = cards.length;
  let currentPage = 0;

  function scrollBlog(direction) {
    // Recalcular posición en base al múltiplo más cercano
    const scrollLeft = container.scrollLeft;
    const nextIndex = Math.round(scrollLeft / cardWidth) + direction;

    // Limitar el índice
    currentPage = Math.max(0, Math.min(totalPages - 1, nextIndex));
    const targetScroll = currentPage * cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.blog-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }

  function generateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('blog-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentPage = i;
        container.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  }

  generateDots();
  // Exponer la función globalmente para los botones de flechac
  window.scrollBlog = scrollBlog;
});