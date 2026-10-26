// 🔹 Oculta el spinner (pantalla de carga) al terminar de cargar la página
window.onload = function () {
  const contenedor = document.querySelector(".spinner-index");
  if (contenedor) {
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = "0";
  }
};

// 🔹 Cambia el estilo del header al hacer scroll
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('.header').addClass('header-solid animated fadeInDown'); // Aplica fondo y animación
  } else {
    $('.header').removeClass('header-solid animated fadeInDown');
  }
});

// 🔹 Inicializa el carrusel de testimonios con Owl Carousel
$('#testimonial-carousel').owlCarousel({
  navigation: false,
  slideSpeed: 500,
  pagination: true,
  singleItem: true
});

// 🔹 Inicializa FlexSlider para slides de imágenes con efecto de desvanecimiento
$(window).on('load', function () {
  $('.flexSlideshow').flexslider({
    animation: 'fade',
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 8000
  });
});

// 🔹 Mostrar botón "ver más" al pasar el mouse por cada card
let cards = [
  { card: "card-inicio", ver: "ver" },
  { card: "card-inicio1", ver: "ver1" },
  { card: "card-inicio2", ver: "ver2" }
];

cards.forEach(({ card, ver }) => {
  const cardElem = document.getElementById(card);
  const verElem = document.getElementById(ver);

  if (cardElem && verElem) {
    cardElem.addEventListener('mouseenter', () => {
      verElem.style.visibility = 'visible'; // Mostrar
    });

    cardElem.addEventListener('mouseleave', () => {
      verElem.style.visibility = 'hidden'; // Ocultar
    });
  }
});

// 🔹 Carrusel horizontal para tarjetas de blog con paginación por puntos
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('blogCarousel');
  const dotsContainer = document.getElementById('blogDots');

  if (!container || !dotsContainer) return;

  const blogCards = container.querySelectorAll('.blog-card');
  const cardsVisible = Math.floor(container.offsetWidth / 300);
  const totalPages = Math.ceil(blogCards.length / cardsVisible);
  let currentPage = 0;

  function scrollBlog(direction) {
    const scrollAmount = 320;
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    currentPage += direction;
    if (currentPage < 0) currentPage = 0;
    if (currentPage > totalPages - 1) currentPage = totalPages - 1;
    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.blog-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage); // Marca el punto activo
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
        container.scrollTo({ left: i * 320, behavior: 'smooth' });
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  }

  generateDots();
  window.scrollBlog = scrollBlog; // Permite usar scrollBlog desde HTML si se desea
});