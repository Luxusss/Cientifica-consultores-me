// 1. Cargar el HTML primero
fetch('testimonios-clientes.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('testimonios-clientes-placeholder').innerHTML = html;

    // 2. Luego de insertar el HTML, ejecutar el carrusel
    iniciarCarruselTestimonios();
  });

// 3. Función que contiene toda la lógica del carrusel
function iniciarCarruselTestimonios() {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial-item');
  const dotsContainer = document.getElementById('testimonialDots');
  let intervalId;   
  let isAnimating = false;

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  function showTestimonial(index) {
    if (isAnimating) return;
    isAnimating = true;

    testimonials.forEach(item => item.classList.remove('active'));

    setTimeout(() => {
      testimonials[index].classList.add('active');
      isAnimating = false;
    }, 100);

    updateDots(index);
  }

  function changeTestimonial(direction) {
    if (isAnimating) return;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = testimonials.length - 1;
    if (currentIndex >= testimonials.length) currentIndex = 0;

    showTestimonial(currentIndex);
  }

  function startAutoSlide() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      changeTestimonial(1);
    }, 7000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function createDots() {
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('testimonial-dot');
      dot.title = testimonials[i].querySelector('.testimonial-name')?.textContent || 'Testimonio';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        showTestimonial(currentIndex);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }

  // Inicializar
  showTestimonial(currentIndex);
  createDots();
  startAutoSlide();

  document.querySelectorAll('.testimonial-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = btn.classList.contains('left') ? -1 : 1;
      changeTestimonial(direction);
      resetAutoSlide();
    });
  });

  // Aquí asignamos las flechas SIN usar onclick en el HTML
  document.querySelectorAll('.testimonial-arrow.left').forEach(btn => {
    btn.addEventListener('click', () => {
      changeTestimonial(-1);
      resetAutoSlide();
    });
  });

  document.querySelectorAll('.testimonial-arrow.right').forEach(btn => {
    btn.addEventListener('click', () => {
      changeTestimonial(1);
      resetAutoSlide();
    });
  });
}

