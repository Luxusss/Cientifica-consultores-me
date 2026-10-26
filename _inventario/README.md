# Inventario del sitio actual (Fase 0)

Esto es el **contrato de la migración**: todo lo que figura aquí tiene que existir igual o mejor en el sitio rediseñado. Se extrajo del HTML de producción (copia exacta del VPS) el 2026-10-26.

| Archivo | Qué contiene |
|---|---|
| [`urls.md`](urls.md) | Todas las URLs públicas con su estado en producción (200 / 301) |
| [`seo.md`](seo.md) · `seo.json` | Resumen SEO por página: title, description, h1, h2, canonical, Open Graph, Schema, alt |
| [`paginas/`](paginas/) | Ficha completa de cada página: metadatos, árbol de encabezados, imágenes con su alt, enlaces internos, JSON-LD completo y todo el texto visible |
| [`faq.md`](faq.md) | Las preguntas frecuentes que Google ya tiene indexadas (JSON-LD `FAQPage`) |
| [`testimonios.md`](testimonios.md) | Testimonios con nombre y universidad, más las 12 capturas |
| [`universidades.md`](universidades.md) | Los 49 logos, con la limpieza de nombres propuesta |

## El SEO existente: qué se conserva

El sitio tiene un trabajo de SEO serio y **se mantiene tal cual**:

- **Title y description** de cada página, con las mismas palabras clave.
- **Jerarquía de encabezados** (`h1` → `h2` → `h3`) y su texto, ficha por ficha.
- **Canonical** en las 18 páginas.
- **Open Graph** en 16 de 18 páginas.
- **Datos estructurados**: `Organization`, `WebSite`, `FAQPage`, `VideoObject`, `LocalBusiness`, `BreadcrumbList`, `AboutPage`, `Article`, `WebPage`.
- **Textos alternativos**: todas las imágenes tienen `alt`.
- **URLs y redirecciones** de `urls.md`.

## Errores de SEO encontrados (se corrigen en la migración)

| # | Problema | Dónde | Efecto | Corrección |
|---|---|---|---|---|
| 1 | El `<h1>` **nunca se cierra** (falta `</h1>`) | `index.html` línea 210 | HTML inválido; el navegador adivina dónde termina | El componente Hero genera un `h1` bien formado |
| 2 | El texto del `h1` está **escrito dos veces** (versión PC + versión celular, una oculta con CSS) | portada y las 4 páginas de servicio | Google lee "Asesoría de Tesis Doctoral Asesoría de Tesis Doctoral" | Un solo texto; los saltos de línea se resuelven con CSS (`text-wrap: balance`) |
| 3 | La imagen principal tiene `fetchpriority="high"` **y** `loading="lazy"` a la vez | `index.html` | Retrasa la imagen más importante y empeora el LCP de Core Web Vitals | La imagen del hero se carga con prioridad, sin lazy |
| 4 | Páginas **sin `h1`** | libro de reclamaciones, política de privacidad, términos, otros servicios | Google no sabe de qué trata la página | Cada plantilla lleva su `h1` |
| 5 | Páginas **sin `description`** | otros servicios, política de privacidad, términos | Google inventa el fragmento del resultado | Escribir una para cada una |
| 6 | **Sin Open Graph** | `blog.html`, `otros_servicios.html` | Al compartir por WhatsApp o Facebook no sale vista previa | Open Graph en todas las páginas, desde el layout |
| 7 | `Article` en páginas que no son artículos | `blog.html`, `otros_servicios.html`, `articulos_cientificos.html` | Datos estructurados incorrectos | `CollectionPage` para el listado del blog y `Service` para los servicios |
| 8 | Sin Schema | `blog/dia-del-padre.html` | — | `BlogPosting` en todos los artículos |
| 9 | El header, el footer y el CTA se insertan con `fetch()` | todas las páginas | Los enlaces del menú y del footer no están en el HTML inicial | Componentes de Astro: salen en el HTML |
| 10 | Testimonios como **capturas de imagen** | `testimonios.html` | Su texto no lo leen Google ni los lectores de pantalla | Transcribirlos como texto (pendiente de D3) |

## Pendiente de confirmar (D3)

Cifras (1791 / 132 / 967), etapas y tiempos de cada grado, permiso para usar cada testimonio y la lista final de universidades.
