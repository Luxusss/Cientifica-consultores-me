// === Lista de mensajes rotativos para todos los banners ===
const messages = [
  { icon: 'fa-shield-halved', text: 'ABSOLUTA DISCRECIÓN' },
  { icon: 'fa-credit-card', text: 'ACEPTAMOS TODO MEDIO DE PAGO' },
  { icon: 'fa-gift', text: 'TU PRIMERA ASESORÍA GRATIS' },
  { icon: 'fa-phone', text: 'CONTÁCTANOS (051) 990 448 338' }
];

// === 1. Rotador del banner de INICIO ===
let idx = 0;
const rotator = document.getElementById('rotating-text');
const interval = 4000;

if (rotator) {
  function rotateMainText() {
    rotator.classList.remove('slide-in');
    rotator.classList.add('slide-out');

    setTimeout(() => {
      idx = (idx + 1) % messages.length;
      const { icon, text } = messages[idx];
      rotator.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
      rotator.classList.remove('slide-out');
      rotator.classList.add('slide-in');
    }, 600);
  }

  rotator.innerHTML = `<i class="fa-solid ${messages[0].icon}"></i> ${messages[0].text}`;
  rotator.classList.add('slide-in');
  setInterval(rotateMainText, interval);
}

// === 2. Rotador del banner del BLOG ===
let blogIdx = 0;
const blogRotator = document.getElementById('blog-rotating-text');
const blogInterval = 4000;

if (blogRotator) {
  function rotateBlogText() {
    blogRotator.classList.remove('slide-in');
    blogRotator.classList.add('slide-out');

    setTimeout(() => {
      blogIdx = (blogIdx + 1) % messages.length;
      const { icon, text } = messages[blogIdx];
      blogRotator.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
      blogRotator.classList.remove('slide-out');
      blogRotator.classList.add('slide-in');
    }, 600);
  }

  blogRotator.innerHTML = `<i class="fa-solid ${messages[0].icon}"></i> ${messages[0].text}`;
  blogRotator.classList.add('slide-in');
  setInterval(rotateBlogText, blogInterval);
}

// === 3. Rotador del banner del PROYECTO DE TESIS ===
let proyectoIdx = 0;
const proyectoRotator = document.getElementById('comohacertuproyectodetesis-rotating-text');
const proyectoInterval = 4000;

if (proyectoRotator) {
  function rotateProyectoText() {
    proyectoRotator.classList.remove('slide-in');
    proyectoRotator.classList.add('slide-out');

    setTimeout(() => {
      proyectoIdx = (proyectoIdx + 1) % messages.length;
      const { icon, text } = messages[proyectoIdx];
      proyectoRotator.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
      proyectoRotator.classList.remove('slide-out');
      proyectoRotator.classList.add('slide-in');
    }, 600);
  }

  proyectoRotator.innerHTML = `<i class="fa-solid ${messages[0].icon}"></i> ${messages[0].text}`;
  proyectoRotator.classList.add('slide-in');
  setInterval(rotateProyectoText, proyectoInterval);
}

// === 4. Rotador del banner del DÍA DEL PADRE ===
let padreIdx = 0;
const padreRotator = document.getElementById('diadelpadre-rotating-text');
const padreInterval = 4000;

if (padreRotator) {
  function rotatePadreText() {
    padreRotator.classList.remove('slide-in');
    padreRotator.classList.add('slide-out');

    setTimeout(() => {
      padreIdx = (padreIdx + 1) % messages.length;
      const { icon, text } = messages[padreIdx];
      padreRotator.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
      padreRotator.classList.remove('slide-out');
      padreRotator.classList.add('slide-in');
    }, 600);
  }

  padreRotator.innerHTML = `<i class="fa-solid ${messages[0].icon}"></i> ${messages[0].text}`;
  padreRotator.classList.add('slide-in');
  setInterval(rotatePadreText, padreInterval);
}
