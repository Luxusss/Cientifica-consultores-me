# Páginas restantes

## Nosotros — `/nosotros.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | 🎓 Nosotros \| Científica Consultores en Tesis e Investigación | **[DECIDIR]** Recomiendo quitar el emoji: "Nosotros \| Científica Consultores en Tesis e Investigación" |
| description | (igual que hoy) | Igual |
| h1 | **Quiénes somos** *(13 car.)* | Antes: "¿Quiénes Somos en Científica Consultores?". La marca ya está en el title y en el logo |
| Schema | AboutPage | Igual, más `Organization` con la dirección |

- **Frase de apoyo:** Asesoría especializada en tesis, investigación y capacitación académica, desde Lima, hace más de 10 años.
- **h2:** Nuestra historia
  - **Párrafo:** Brindamos asesoría especializada en tesis, investigación y capacitación académica. Nuestro equipo lleva más de 10 años difundiendo y contribuyendo a la cultura científica, y ayudando a estudiantes y profesionales a lograr un desarrollo académico integral.
  - **Cifras [D3]:** 1791 clientes · 967 proyectos · 132 eventos · 676 certificados emitidos
- **h2:** Cómo te acompañamos
  - **Compromiso con tu éxito académico.** Nos involucramos en cada etapa de tu proceso. Un equipo multidisciplinario te guía con responsabilidad y puntualidad.
  - **Experiencia que se mide en sustentaciones.** Cientos de estudiantes y profesionales sustentaron su tesis con nuestro acompañamiento.
  - **Trato humano y profesional.** Cada estudiante tiene su historia, sus metas y sus desafíos. Te acompañamos con orientación clara y práctica.
  - *(Se quita la numeración "1., 2., 3." de los títulos.)*
- **h2:** En qué creemos
  - **Misión:** Somos una empresa constituida por un equipo profesional multidisciplinario, cuyo objetivo es brindar a nuestros clientes el mejor servicio personalizado en investigación, asesoría y capacitación académica en las diferentes áreas de las ciencias. Nuestra prioridad es el desarrollo profesional de nuestros clientes.
  - **Visión:** Ser una de las más importantes empresas en el rubro de la investigación, asesoría de tesis y capacitación académica, reconocida por su excelencia y calidad en cada uno de sus servicios.
  - **Valores:** Seriedad, compromiso, responsabilidad y puntualidad en cada uno de nuestros servicios.
- **h2:** Dónde atendemos
  - Oficina: Calle Los Chasquis 7173, Los Olivos, Lima (a la altura de la cuadra 6 de la Av. Angélica Gamarra), previa cita
  - Online: Perú, Colombia, México, Bolivia, Ecuador y Venezuela (las banderas del menú actual, convertidas en información, decisión D5)
- **Cierre:** Contacto (igual que la portada)

---

## Contáctanos — `/contactanos.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Asesoría de Tesis Personalizada \| Contáctanos Hoy | Igual |
| description | (igual que hoy: "…Te respondemos en menos de 24 horas.") | Igual |
| h1 | **Asesoría de tesis en Lima** *(26 car.)* | Antes: "¿Necesitas una asesoría de tesis en Lima? Contáctanos" (52 car.) |
| Schema | BreadcrumbList, LocalBusiness | Igual; se completa `LocalBusiness` con dirección, teléfono y horarios |

- **Frase de apoyo:** Te guiamos en tu tesis de pregrado, maestría, doctorado o segunda especialización. Escríbenos y te respondemos en menos de 24 horas.
- **Formulario:** los mismos campos y el mismo envío de hoy (nombre y apellidos, código de país y teléfono, correo, mensaje).
  - El selector de país pone primero los 6 países donde atienden y después el resto.
  - Botón: **Enviar mensaje**
  - Alternativa al lado: Escríbenos por WhatsApp · 990 448 338
- **h2:** Nuestros planes
  - **Párrafo:** Dos formas de trabajar tu tesis completa.

| | Plan Tesis Completa | Plan Científica Consultores |
|---|---|---|
| Acompañamiento | Proyecto e informe final **[DECIDIR: hoy dice "Elaboración"]** | Proyecto e informe final **[DECIDIR]** |
| Observaciones | Levantamiento por 4 meses después de la entrega final | Ilimitado, con garantía por 1 año desde el inicio |
| Asesorías personalizadas | 6, una en cada entrega | 10, una en cada entrega |
| Turnitin (IA y similitud) | Del proyecto y de la tesis | En cada entrega |
| Presentación de la sustentación | Incluida | Diseñada por especialistas en diseño |
| Simulación de sustentación | 1, virtual, de 45 minutos | 2, con especialistas en pedagogía, presencial o virtual |
| Software de análisis | — | 1 asesoría de manejo |
| Equipo | — | Metodólogo, temático y estadístico o cualitativo |
| Extras | — | PDF de todas las referencias y banco de preguntas para la sustentación |
| Garantía | — | Devolución del dinero si no apruebas **[D3: confirmar condiciones; si se publica, tienen que estar escritas en Términos]** |

  - Precios: hoy no se publican. Se mantiene así, con el botón "Escríbenos por WhatsApp" debajo de cada plan.
- **h2:** Horarios y ubicación
  - Lunes a viernes: 9:00 a. m. – 6:00 p. m.
  - Sábado: 9:00 a. m. – 1:00 p. m.
  - Calle Los Chasquis 7173, Los Olivos, Lima, a la altura de la cuadra 6 de la Av. Angélica Gamarra
  - Mapa: se carga solo cuando el visitante lo pide (hoy carga un iframe de Google Maps en cada visita y pesa)

---

## Testimonios — `/testimonios.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Testimonios de nuestros clientes | **[DECIDIR]** Recomiendo "Testimonios de clientes \| Científica Consultores" |
| description | (igual que hoy) | Igual |
| h1 | **Testimonios de nuestros clientes** *(32 car.)* | Igual |

- **Frase de apoyo:** Agradecemos a quienes, por iniciativa propia, autorizan que compartamos su caso. *(Es el texto de hoy, más corto.)*
- **h2:** Historias de quienes sustentaron
- **Contenido:** los 6 testimonios con texto (nombre, universidad, país y cita), más las 12 capturas transcritas como texto **[D3: permiso y transcripción]**. Lista en `_inventario/testimonios.md`.
- Cada testimonio con texto se marca con `Review` en el JSON-LD solo si la empresa lo autoriza.

---

## Blog — `/blog.html` y `/blog/*.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Blog de asesoría en tesis \| Científica consultores | Se corrige a "Científica Consultores" (mayúscula) |
| description | (igual que hoy) | Igual |
| h1 | **Guías para tu tesis** *(19 car.)* | Antes: "Tu guía para la tesis: blog académico" |
| Schema | Article (incorrecto) | `CollectionPage` + `BlogPosting` en cada artículo |
| Open Graph | No tenía | Se agrega |

- **Frase de apoyo:** Guías prácticas y recursos para tu tesis de pregrado, maestría o doctorado.
- **Lista de artículos:** título, fecha, resumen y enlace. Se quitan "Deja tu comentario" y las tarjetas "Próximamente".
- **Los 4 artículos:** el texto, el title, la description y los encabezados de cada uno **se mantienen palabra por palabra**. Solo cambia la plantilla de lectura. Dos correcciones:
  - "¿Cómo HACER TU PROYECTO DE TESIS?" → "¿Cómo hacer tu proyecto de tesis?" (sin mayúsculas sostenidas; el title SEO no cambia)
  - "DÍA DEL PADRE: …" → "Día del Padre: …"
- **Fechas:** hoy están mezcladas ("mayo 26, 2025" / "Agosto 06, 2025"). Formato único: "26 de mayo de 2025".

---

## Otros servicios — `/otros_servicios.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Capacitaciones - Científica Consultores | **[DECIDIR]** El title dice "Capacitaciones", pero la página habla de otros servicios. Recomiendo "Otros servicios de investigación \| Científica Consultores" |
| description | **No tiene** | Nueva: "Revisiones sistemáticas, metaanálisis, planes de negocio, trabajo de campo, análisis estadístico y corrección de estilo para tu investigación." (139 car.) |
| h1 | **No tiene** → **Otros servicios** | Nuevo |
| Schema | Article (incorrecto) | `Service`, uno por grupo |

- **Frase de apoyo:** Más allá de la tesis: apoyo en cada parte de tu investigación.
- **Grupos (con todo el contenido actual):**
  - **Estudios teóricos:** revisión sistemática, metaanálisis, artículo de revisión
  - **Estudios empíricos:** trabajos de suficiencia profesional, planes de negocio
  - **Proyectos:** de mejora, de innovación, de factibilidad y tecnológicos
  - **Datos e información:** trabajo de campo (técnicas cuantitativas y cualitativas) · procesamiento (bases de datos cuantitativas, transcripción de entrevistas y grupos focales) · análisis (estadística descriptiva e inferencial, análisis de contenido cualitativo)
  - **Corrección de la redacción:** ortotipográfica, de estilo y normas de redacción
- Los 14 botones "COTICE AHORA" se reemplazan por un solo botón **Escríbenos por WhatsApp** por grupo, con el servicio ya escrito en el mensaje.
- Se corrige "Obtensión" → "Obtención".

---

## Artículos científicos — `/articulos_cientificos.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Artículos Científicos - Científica Consultores | Formato unificado: "Artículos Científicos \| Científica Consultores" |
| description | "Servicio de redacción y asesoría…" (172 car., Google la corta) | **[DECIDIR]** Recomiendo: "Asesoría para publicar tu artículo científico: desde cero, desde tu tesis o como capítulo de libro, hasta su envío a revistas indexadas." (140 car.) |
| h1 | **Asesoría de artículos científicos** *(33 car.)* | Antes estaba escrito dos veces y sin tildes ("Articulos Cientificos"). Pasa 1 carácter del ideal de 32; se mantiene por la palabra clave y en el celular se compone a ~36 px para que entre en 2 líneas |
| Schema | Article (incorrecto) | `Service` |

- **Frase de apoyo:** Convierte tu investigación en una publicación: desde cero, desde tu tesis o como capítulo de libro.
- **Formulario:** el actual "Obtén tu primera asesoría gratis" **[D3]**
- **h2:** Tres puntos de partida *(hoy son 3 bloques casi iguales, con los títulos "¿Cómo iniciamos?" repetido y "Continuemos")*
  - **Desde cero.** Tú te encargas del trabajo de campo (recolección de datos, experimentos, entrevistas) y nosotros te acompañamos en la estructura, el análisis y la redacción hasta la publicación.
  - **Desde una tesis.** Necesitamos tu tesis aprobada para evaluar si puede convertirse en artículo.
  - **Capítulo de libro.** Tú realizas la recolección de datos y las acciones de campo; nosotros te asesoramos en el resto.
- **h2:** Nuestro compromiso *(una sola vez; hoy se repite 3 veces)*
  - Seguimiento detallado en cada paso
  - Manejo confidencial del manuscrito
  - Más de 10 años en publicaciones académicas
  - Claridad y rigor hasta la publicación
- **Cifras [D3]:** las mismas 4 de Nosotros

---

## Libro de reclamaciones — `/libro-de-reclamaciones.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Libro de reclamaciones | "Libro de Reclamaciones \| Científica Consultores" |
| description | **Copiada de Testimonios** (error) | Nueva: "Registra tu reclamo o queja sobre nuestros servicios. Te respondemos en un plazo máximo de 15 días hábiles, según la normativa de INDECOPI." (139 car.) |
| h1 | **No tiene** → **Libro de reclamaciones** | Nuevo |

- **Formulario:** los mismos campos, validaciones y envío de hoy (identificación del consumidor, del servicio y detalle; reclamo o queja; adjuntos de hasta 5 MB por archivo y 10 MB en total).
- **Texto legal:** igual, palabra por palabra.
- **[D3] Datos del proveedor:** la norma de INDECOPI pide mostrar la razón social, el RUC y la dirección del proveedor en la hoja de reclamación. Hoy no aparecen; hay que confirmarlos para agregarlos.

---

## Política de privacidad y Términos y condiciones

| Página | title | description | h1 |
|---|---|---|---|
| `/politica-privacidad.html` | "Política de Privacidad \| Científica Consultores" | Nueva: "Cómo Científica Consultores recoge, usa y protege tus datos personales, conforme a la Ley N.° 29733 de Protección de Datos Personales del Perú." **[D3: confirmar que el texto legal cita esa ley]** | **Política de privacidad** (no tenía) |
| `/terminos-condiciones.html` | "Términos y Condiciones \| Científica Consultores" | Nueva: "Condiciones de uso del sitio y de contratación de los servicios de asesoría de Científica Consultores." | **Términos y condiciones** (no tenía) |

- El texto legal no se toca. Solo cambian la plantilla de lectura (columna cómoda y títulos navegables) y los metadatos.

---

## Se eliminan

| URL | Motivo |
|---|---|
| `/pago.html` | Formulario de pruebas que envía a `localhost` (D4) |
| `/asesoria-pregrado/` | Página de prueba de CentOS-WebPanel |
| `/header.html`, `/footer.html`, `/cta.html`, `/testimonios-clientes.html`, `/universidades.html` | Eran partes que se cargaban con `fetch()`. Pasan a ser componentes y dejan de existir como URL (ya estaban bloqueadas en robots.txt, así que no tienen posicionamiento que perder) |
