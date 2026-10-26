// Cargar el header.html y marcar activo el link
document.addEventListener('DOMContentLoaded', () => {
  fetch('/header.html')
    .then(response => response.text())
    .then(data => {
      // Insertar el header en el contenedor
      document.getElementById('header').innerHTML = data;

      // Detectar ruta actual
      const path = window.location.pathname;

      // Marcar el enlace activo
      document.querySelectorAll('#header a.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '/' && href.includes('index'))) {
          link.classList.add('active');
        }
      });

      // Estilo especial para contactanos.html
      if (path.includes('contactanos.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

      // Estilo especial para testimonios.html
      if (path.includes('testimonios.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
        }
      }

      // Estilo especial para libro-de-reclamaciones.html
      if (path.includes('libro-de-reclamaciones.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
        }
      }

      // Estilo especial para terminos-condiciones.html
      if (path.includes('terminos-condiciones.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
        }
      }

      // Estilo especial para terminos-condiciones.html
      if (path.includes('politica-privacidad.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
        }
      }

      // Estilo especial para blog.html
      if (path.includes('blog.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

      // Estilo especial para como-hacer-tu-proyecto-de-tesis.html
      if (path.includes('como-hacer-tu-proyecto-de-tesis.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

      // Estilo especial para dia-del-padre.html
      if (path.includes('dia-del-padre.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

      // Estilo especial para fiestas-patrias-peru.html
      if (path.includes('fiestas-patrias-peru.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

      // Estilo especial para fiestas-patrias-peru.html
      if (path.includes('tesis-vs-trabajo-suficiencia-profesional.html')) {
        const navbar = document.querySelector('#header nav');
        if (navbar) {
          navbar.classList.remove('header');
          navbar.classList.add('header-solid');
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.zIndex = '1000';
        }
      }

    })
    .catch(error => console.error('Error cargando header:', error));
});