document.addEventListener('DOMContentLoaded', () => {
  // Normalizar path (remueve slash final)
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();

  // Rutas donde NO queremos cargar el CTA
  const excluir = [
    '/blog.html',
    '/blog/como-hacer-tu-proyecto-de-tesis.html',
    '/blog/dia-del-padre.html',
    '/blog/fiestas-patrias-peru.html'
  ].map(p => p.toLowerCase());

  if (excluir.includes(path)) return; // No cargar CTA en las páginas excluidas

  fetch('/cta.html')
    .then(res => {
      if (!res.ok) throw new Error('HTTP error ' + res.status);
      return res.text();
    })
    .then(html => {
      const placeholder = document.getElementById('cta-placeholder');
      if (!placeholder) return;
      placeholder.innerHTML = html;

      // Detectamos si estamos en tesis-maestria o tesis-doctoral
      const isTesisPage =
        path.endsWith('/tesis-maestria.html') ||
        path.endsWith('/tesis-maestria') ||
        path.endsWith('/tesis-doctoral.html') ||
        path.endsWith('/tesis-doctoral') ||
        path.endsWith('/trabajo-suficiencia.html') ||
        path.endsWith('/trabajo-suficiencia') ||
        window.location.href.toLowerCase().includes('tesis-maestria') ||
        window.location.href.toLowerCase().includes('tesis-doctoral')||
        window.location.href.toLowerCase().includes('trabajo-suficiencia');

      if (isTesisPage) {
        // Selector al heading dentro del CTA
        const heading = placeholder.querySelector('.display-5, .cta-section h2');
        if (heading) {
          heading.textContent = '¡Agenda una consulta hoy!';
        }
        // Si también quieres cambiar el texto secundario (lead), descomenta y edita:
        // const lead = placeholder.querySelector('.lead');
        // if (lead) lead.textContent = 'Agenda tu consulta con nuestros asesores expertos.';
      }
    })
    .catch(err => console.error('Error cargando CTA:', err));
});
