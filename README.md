# cientificaconsultores.com

Código del sitio web de Científica Consultores — **copia exacta del servidor de producción**.

- **Origen:** `/var/www/cientificaconsultores` del VPS Hetzner `5.161.193.202` (servidor "Automata"), traído por SSH el 2026-10-26.
- **Hosting:** nginx (sitio estático, sin PHP). Config en [`_servidor/`](_servidor/).
- **Stack:** HTML estático + CSS/SCSS + jQuery (Bootstrap, Owl Carousel, FlexSlider, Isotope, WOW.js).
- **Medición:** Google Tag Manager `GTM-5TNL7PM2` → GA4 `G-LWLH86B85F` (cuenta `marketingcientificaconsultores@gmail.com`).

## Estructura

| Ruta | Qué hay |
|---|---|
| `*.html` | Páginas del sitio (incluye parciales `header.html`, `footer.html`, `cta.html`) |
| `blog/` | Artículos del blog |
| `asesoria-pregrado/` | Sección de asesoría de pregrado |
| `css/` · `scss/` | Estilos compilados y fuentes SCSS |
| `js/` | Scripts propios |
| `plugins/` | Librerías de terceros |
| `fonts/` · `images/` · `videos/` | Recursos estáticos |
| `_servidor/` | Configuración de nginx del vhost (referencia, no se sirve) |

## Desplegar cambios al servidor

El sitio se sirve desde `/var/www/cientificaconsultores` en el VPS. Para publicar cambios hay que copiar los archivos a esa ruta (vía SSH/SCP) con el usuario que tenga acceso. La carpeta `_servidor/` es solo referencia de cómo está configurado nginx; no forma parte del contenido servido.
