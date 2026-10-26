# Plan de rediseño — cientificaconsultores.com

Fecha: 2026-10-26 · Estado: **borrador para aprobación** (no se ha tocado nada del sitio todavía)

## Objetivo

Rehacer el sitio completo para que sea profesional, rápido, coherente y fácil de mantener: un solo sistema de diseño, una sola estructura de código, sin librerías muertas ni archivos basura. Hay que conservar **todas las URLs actuales** (para no perder posicionamiento en Google), los formularios que ya generan leads, el Tag Manager y el Libro de Reclamaciones (obligatorio en Perú).

---

## 1. Diagnóstico del sitio actual

### 1.1 Medición objetiva (inspector de `design-taste-frontend`)

Resultado sobre la portada actual: **14 FAIL · 13 WARN**. Capturas en `.taste-skill/before/`.

| Problema medido | Detalle |
|---|---|
| Titular demasiado largo | "Asesoría de Tesis Online con Expertos en investigación académica": 3 líneas en desktop y **5 en celular** |
| Titular encima de las caras | En el hero el texto cae sobre los rostros del equipo |
| Sin botón en la primera pantalla | En celular no aparece ninguna acción visible al entrar |
| Texto cubierto | Los títulos de las tarjetas de servicio (pregrado, maestría, doctorado, TSP) quedan 100 % tapados en algún punto del scroll |
| Contenido invisible | Con "reducir movimiento" activado, 8 bloques de la primera pantalla nunca aparecen |
| Página descentrada | 150 px de margen a la izquierda y 44 px a la derecha |
| Texto pequeño | El cuerpo del texto está en 14–15 px (lo mínimo legible es 16) |
| 15 tamaños de letra distintos | Un sitio coherente usa unos 5 |
| Párrafos demasiado anchos | 148 caracteres por línea (lo cómodo son 45–75) |
| Adornos de plantilla | 19 sombras, 7 sombras de texto, degradado en el footer, 12 cajas con borde de 1 px, tarjetas con iconos |
| Secciones sin título | 2 secciones con texto pero sin encabezado |
| Fuente rota | Se declara "Nunito Sans" pero nunca carga |

### 1.2 Código

| Área | Situación |
|---|---|
| Páginas | 23 HTML + 4 artículos de blog, ~10 000 líneas, cada una con su propio CSS y JS |
| CSS | 15 556 líneas en 27 archivos; `style.css` solo tiene 4 020 |
| Bootstrap | **4.3.1 y 5.3 cargados a la vez** en 6 páginas (index, tesis, maestría, doctoral, TSP) |
| jQuery | 1.11.0 (2014), con vulnerabilidades conocidas |
| Librerías abandonadas | Owl Carousel 1.3, FlexSlider, Isotope, WOW.js, Waypoints, PrettyPhoto, CounterUp, style-switcher |
| Duplicados | Font Awesome 6.4.2 **y** 6.5.0; Bootstrap Icons 1.10.5 **y** 1.11.3 |
| Header/footer | Se insertan con `fetch()` después de cargar: Google no los ve en el HTML inicial y la página parpadea |
| Imágenes | 22 MB; una sola foto pesa 8,2 MB (`manual_de_redaccion.jpg`) y otra 3,2 MB; 5 formatos mezclados |

### 1.3 Basura encontrada (se elimina)

| Archivo / código | Qué es | Acción |
|---|---|---|
| `asesoria-pregrado/index.html` | Página de prueba de **CentOS-WebPanel**, publicada en `/asesoria-pregrado/` | Eliminar del servidor |
| `pago.html` | Formulario Culqi de pruebas que envía a `http://localhost:3000/pagar`; no funciona y nadie lo enlaza | Retirar (si quieren cobrar online, se hace bien en una fase aparte) |
| `xfbml.customerchat.js` (18 páginas) | Chat de Facebook que **Meta eliminó en 2024**: carga y no hace nada | Eliminar |
| `css/presets/preset1-6.css` | Temas de la plantilla original, sin uso | Eliminar |
| `css/componentes.css`, `js/list.js` | Ninguna página los usa | Eliminar |
| `plugins/style-switcher.js`, `plugins/google-map/gmap.js` | Restos de la plantilla | Eliminar |
| `fonts/glyphicons-*` | Iconos de Bootstrap 3 | Eliminar |
| `css/maps/style.css.map` | Mapa de depuración publicado | Eliminar |
| Banderas del menú | `<a>` sin `href`: parecen botones y no hacen nada (además es un fallo de accesibilidad) | Convertirlas en algo real (ver decisión D5) |
| Bootstrap 4 + 5, jQuery y todos los plugins | Sustituidos por el nuevo sistema | Eliminar al migrar |

---

## 2. Arquitectura nueva

### 2.1 Por qué Astro

Lo recomendé antes y lo mantengo, pero esto contradice una regla de la skill de diseño ("en un rediseño no se cambia de framework"). Esa regla está pensada para proyectos que ya tienen una base sana. Aquí no hay base: no hay componentes, cada página arrastra sus propias librerías y conviven dos Bootstrap. **La decisión final es tuya (D1).**

- Genera **HTML estático**: se sigue sirviendo desde el mismo VPS con el mismo nginx. El servidor no cambia.
- El header, el footer y el CTA pasan a ser **componentes**: se escriben una vez y salen dentro del HTML final, sin `fetch()`.
- Optimiza las imágenes al compilar (AVIF/WebP, tamaños responsivos): de 22 MB debería bajar a una fracción.
- Con `build.format: 'file'` genera `tesis.html`, `nosotros.html`, etc.: **las mismas URLs de hoy**.
- Cero JavaScript por defecto. Solo se envía el JS de las piezas interactivas.

### 2.2 Estructura del proyecto

```
src/
  layouts/        Base.astro (head, SEO, GTM, header, footer)
  components/     Header, Footer, Hero, ServiceRows, Process, Team, UniversityList,
                  Testimonial, StageTabs (la pieza interactiva), FAQ, Contact, WhatsAppButton
  pages/          index, tesis, tesis-maestria, tesis-doctoral, trabajo-de-suficiencia-profesional,
                  nosotros, contactanos, testimonios, blog, blog/[slug], articulos_cientificos,
                  otros_servicios, universidades, libro-de-reclamaciones,
                  politica-privacidad, terminos-condiciones
  content/        blog/*.md (los 4 artículos pasan a Markdown) · servicios · faq · testimonios
  styles/         tokens.css (colores, tipos, espacios) · base.css · un CSS por componente
public/           robots.txt, favicon, videos
_servidor/        config nginx (referencia)
```

Las 4 páginas de servicio (pregrado, maestría, doctorado y TSP) comparten **una sola plantilla** alimentada con contenido distinto. Hoy son 4 archivos de ~800 líneas cada uno, con 4 CSS casi iguales (`pregrado.css`, `maestria.css`, `doctoral.css`, `suficiencia.css`).

### 2.3 Lo que se conserva tal cual

- **Todo el SEO existente**: title, description, jerarquía de encabezados, canonical, Open Graph, datos estructurados y alt, página por página según [`_inventario/`](_inventario/README.md). Además se corrigen los 10 errores de SEO que se encontraron ahí.
- Todas las URLs públicas, más las redirecciones 301 de nginx (`sobre-nosotros.html`, `asesorias.html`).
- Google Tag Manager `GTM-5TNL7PM2` (y con él GA4 `G-LWLH86B85F`).
- Los formularios: el webhook de Sinaptiq y formsubmit (`marketingcientificaconsultores@gmail.com`), con el mismo comportamiento.
- El Libro de Reclamaciones, con todos los campos que exige INDECOPI.
- El botón de WhatsApp.
- `sitemap.xml` (se genera automáticamente) y `robots.txt`.
- El logo, los colores de marca, las fotos reales del equipo, el video y los logos de universidades.

---

## 3. Dirección de diseño

Elegida con `design-taste-frontend` entre tres opciones sorteadas (semilla `678790768`).

### 3.1 Dirección: "El informe impreso" (`editorial-report`)

El sitio se compone como una publicación académica bien editada: una banda de imagen arriba, un título grande y firme, texto alineado a un eje vertical fijo (~42 % del ancho) y secciones completas en color plano, como en una impresión a dos tintas.

**Por qué esta y no las otras dos:** una tesis *es* un documento impreso, con portada, índice, capítulos y sustentación. Esta dirección le da al sitio autoridad académica y escala bien a más de 20 páginas y al blog. El "póster estridente" no transmite la confianza que se necesita para que alguien contrate una asesoría de tesis, y "la página es el objeto" funciona para una página suelta, no para un sitio completo.

### 3.2 La idea (lo que solo tiene Científica)

> En este sitio, **las universidades reales donde sustentaron sus clientes y el equipo real de asesores** se convierten en **el índice y la portada del informe**.

- Los 49 logos de universidades pasan a ser una lista tipográfica en columnas (nombres, sin logos), como el índice de un anuario.
- Las fotos reales del equipo forman la banda de portada (mosaico).
- Prueba de la competencia: otra asesoría de tesis no puede poner *estas* universidades ni *estas* personas.

### 3.3 La pieza interactiva

**"Tu tesis por etapas":** el visitante elige su grado (pregrado, maestría, doctorado o TSP) y ve el recorrido real (proyecto → marco teórico → metodología → análisis → informe final → sustentación), con lo que incluye cada etapa y su duración aproximada. El botón final abre WhatsApp con un mensaje ya escrito que dice qué grado eligió. Usa contenido real, se maneja con el pulgar en el celular y sin JavaScript se ve como una lista simple. **Necesito que confirmen las etapas y los tiempos (D3).**

### 3.4 Sistema visual

| Elemento | Decisión |
|---|---|
| Colores | **Los de la marca:** azul marino `#1d2d8c` como color de campo y tinta, naranja `#fe8f01` como acento (solo en la acción principal y una cosa más), papel blanco o hueso como fondo |
| Tipografía | **Literata** (serif de lectura en pantalla) para todo, en 5 tamaños. Cambia respecto al Inter actual: le da tono académico. El logo conserva su fuente propia |
| Tamaños | Cuerpo 18–21 px · lead 20–26 px · títulos de sección 32–64 px · display del hero 44–60 px |
| Márgenes | Un solo par de márgenes iguales en todo el sitio (32 px en desktop, 16 px en celular) |
| Botones | Un solo estilo: rectángulo plano de color sólido, esquinas rectas |
| Imágenes | Esquinas rectas, un mismo tratamiento en cada mosaico, siempre las fotos propias primero |

### 3.5 Reglas de la casa (se miden con el inspector)

Titulares de 2 líneas como máximo en cualquier pantalla · un solo `h1` claro · un título en cada sección · sin etiquetas pequeñas sobre los títulos · sin degradados · sin sombras en elementos quietos · sin bordes finos de 1 px · sin tarjetas con iconos · sin vidrio/blur · sin emojis · como máximo 2 tipografías · texto en tinta completa, nunca gris claro.

### 3.6 Portada, sección por sección

El orden sale del argumento (una afirmación por sección, cada una con su prueba).

| # | Sección | Lo que afirma | Composición sorteada |
|---|---|---|---|
| 1 | **Hero** | "Te acompañamos hasta la sustentación" | Foto del equipo a pantalla completa con el sujeto a la derecha; titular de 2 líneas a la izquierda; botón de WhatsApp arriba a la derecha; dos tarjetas en la esquina (último artículo del blog y testimonios) |
| 2 | **Servicios** | Hay una asesoría para cada grado | Título fijo a la izquierda mientras pasan a la derecha las 4 asesorías, cada una con foto del asesor y lista de lo que incluye |
| 3 | **Cómo trabajamos** | Ordenamos el caos de la tesis | Diagrama de cuadrados: dispersos → comprimidos → ordenados en naranja |
| 4 | **Nosotros** | Equipo real, 10+ años, en Lima | Foto grande del equipo + bloque de color con el mapa de los 6 países que atienden + cifras |
| 5 | **Universidades** | Sus clientes sustentaron en estas universidades | Nombres en columnas, sin logos (la "idea") |
| 6 | **Testimonio** | Lo dice alguien que ya sustentó | Retrato alto + cita desplazada |
| 7 | **Tu tesis por etapas** | Sabes exactamente qué viene | La pieza interactiva (pestañas por grado, bandas por etapa) |
| 8 | **Preguntas frecuentes** | Respondemos todo de un vistazo | Preguntas y respuestas como texto de lectura en 2 columnas, sin acordeón |
| 9 | **Contacto** | Escríbenos, respondemos rápido | Frase + retrato + WhatsApp y correo + tiempo de respuesta |
| 10 | **Footer** | Cierre con el nombre | Nombre de la marca a todo el ancho, países y medios de contacto, enlaces legales |

**Movimiento firma:** fundido lento entre 3–4 fotos del equipo en el hero (con "reducir movimiento" activado, solo la primera).

---

## 4. Plan por fases

Cada fase termina con algo que puedes revisar en `localhost` antes de seguir.

### Fase 0 — Preparación
- Crear la rama `rediseno` en el repo; `main` queda intacto como respaldo de producción.
- Agregar `.taste-skill/` al `.gitignore`.
- Inventariar todo el contenido real (textos, precios si los hay, testimonios, preguntas frecuentes, universidades) en `src/content/`.
- Hacer la lista de todas las URLs actuales para verificar al final que ninguna se rompe.

### Fase 1 — Contenido (`design-taste-frontend` §2 y §5)
- Escribir el argumento: una afirmación con su prueba por cada sección de cada página.
- Redactar todos los textos antes de diseñar, con titulares de 32 caracteres como máximo.
- Reescribir el titular del hero: hoy tiene 62 caracteres y 9 palabras.
- **No se inventa ninguna prueba**: las cifras (1791 clientes, 132 eventos, 967 proyectos), los testimonios y las universidades se usan solo si los confirman (D3).
- Entregable: un documento de textos para que lo aprueben.

### Fase 2 — Sistema de diseño (`design-taste-frontend`, `ui-ux-pro-max`, `emil-design-eng`)
- `tokens.css`: colores de marca, los 5 tamaños de letra, espaciados, el eje del 42 % y los márgenes.
- Componentes base: botón, enlace, encabezado de sección y campos de formulario, con sus estados (hover, foco, activo, error y deshabilitado).
- Línea base móvil de `mobile-native` desde el primer componente: `viewport-fit=cover`, `theme-color`, sin destello al tocar, inputs de 16 px, `:hover` solo en dispositivos con puntero, `100svh` en el hero.
- Entregable: una página de muestra con todos los componentes.

### Fase 3 — Esqueleto en Astro
- Crear el proyecto Astro con `build.format: 'file'` para conservar las URLs `.html`.
- `Base.astro`: SEO (title, description, Open Graph y canónica por página), GTM, Schema.org (`EducationalOrganization` + `Service`), header y footer.
- Las imágenes pasan por `astro:assets` (AVIF/WebP y tamaños responsivos).
- Formularios: el mismo envío al webhook de Sinaptiq y a formsubmit, sin jQuery, con validación accesible.

### Fase 4 — Construcción de páginas (`design-taste-frontend` §6)
En este orden (de más tráfico y valor a menos):
1. **Portada** (`index.html`)
2. **Plantilla de servicio** → tesis, maestría, doctorado y TSP
3. **Contáctanos** y **Libro de reclamaciones** (formularios)
4. **Nosotros** y **Testimonios**
5. **Blog** (listado + los 4 artículos en Markdown con una plantilla de lectura)
6. **Otros servicios**, **Artículos científicos** y **Universidades**
7. **Política de privacidad** y **Términos** (plantilla de texto legal)

Cada página pasa por la "compuerta" (`lint.mjs` + `inspect.mjs` con **0 FAIL** a 1440, 768 y 390 px) y por hasta 3 rondas de crítica sobre capturas antes de darla por terminada.

### Fase 5 — Movimiento (`find-animation-opportunities` → `animate` → `animation-performance`)
- El fundido del hero, una entrada escalonada en cada sección (título → texto → imagen, 60–90 ms) y respuesta al tocar o pasar el mouse en cada control.
- Solo `transform` y `opacity`, y siempre con alternativa para "reducir movimiento" (corrige el FAIL actual de contenido invisible).
- `review-animations` al final para auditar el resultado.

### Fase 6 — Calidad
- `mobile-native`: revisión completa en **un celular real** (el emulador no detecta hover pegado, zoom en inputs ni el notch).
- `break-ui`: estresar los componentes con nombres de universidad larguísimos, testimonios muy largos o muy cortos, campos vacíos.
- `code-review` y `security-review`: formularios, envío al webhook, cabeceras de seguridad.
- `simplify`: limpieza final del código.
- Lighthouse / PageSpeed: objetivo de **90+** en rendimiento, accesibilidad, buenas prácticas y SEO, en móvil.
- Accesibilidad: contraste, foco visible, textos alternativos, navegación con teclado.
- Verificar que **todas las URLs antiguas** respondan (200 o 301).

### Fase 7 — Publicación
- Desplegar primero en un subdominio de pruebas (p. ej. `nuevo.cientificaconsultores.com`) en el mismo VPS para revisar con datos reales.
- Probar los formularios de punta a punta: que el lead llegue a Sinaptiq y al correo.
- Cambio a producción: respaldo del directorio actual (`/var/www/cientificaconsultores` → `cientificaconsultores.bak-FECHA`), subir la compilación y recargar nginx. **Volver atrás tarda un minuto.**
- Quitar del servidor la página de prueba de CentOS y `pago.html`.
- Después: revisar Search Console y GA4 durante 2 semanas (errores 404, caídas de tráfico).

---

## 5. Decisiones que necesito de ti

| # | Decisión | Mi recomendación |
|---|---|---|
| **D1** | ¿Migramos a Astro o limpiamos el HTML actual? | Astro |
| **D2** | ¿Aprobamos la dirección "informe impreso" con tipografía Literata (serif)? | Sí. Si prefieres seguir con una sans-serif, se cambia solo el tipo y se mantiene la composición |
| **D3** | Confirmar los datos reales: las cifras 1791/132/967, las etapas y tiempos de cada grado, el permiso para usar los testimonios y la lista de universidades | Imprescindible antes de la Fase 1 |
| **D4** | ¿`pago.html` se elimina o quieren cobrar con tarjeta en la web? | Eliminarlo ahora; el cobro online, si se quiere, en un proyecto aparte y bien hecho |
| **D5** | Banderas de países: ¿para qué deberían servir? | Convertirlas en "Atendemos en Perú, Colombia, México, Bolivia, Ecuador y Venezuela" dentro de Nosotros y el footer, con WhatsApp por país si tienen números distintos |
| **D6** | Subdominio de pruebas para revisar antes de publicar | `nuevo.cientificaconsultores.com` |

## 6. Skills y dónde se usa cada una

| Skill | Fase |
|---|---|
| `design-taste-frontend` | Diagnóstico (hecho), dirección (hecha), contenido, construcción, compuerta y crítica |
| `ui-ux-pro-max` · `emil-design-eng` · `apple-design` | Sistema de diseño y pulido de componentes |
| `mobile-native` | Línea base desde la Fase 2 y revisión en celular real en la Fase 6 |
| `find-animation-opportunities` · `animate` · `animation-performance` · `review-animations` · `improve-animations` | Fase 5 |
| `animation-vocabulary` | Para ponerle nombre a los efectos cuando hablemos de ellos |
| `break-ui` | Fase 6 |
| `code-review` · `security-review` · `simplify` | Fase 6 |
| `run` | Para verificar cada fase en el navegador |
| `clean-code` | **No se usará**: borra todos los comentarios y en un proyecto nuevo algunos son útiles. Solo si lo pides |
| `ask-sonner` · `animate-expo` · `write-swift` | No aplican (son para React, apps nativas y Swift) |
