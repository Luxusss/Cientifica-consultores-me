# Pendientes de la Fase 1

Puedes responder directamente en este archivo o por el chat. Todo lo que no se confirme **no se publica**.

## D3: datos que tiene que confirmar la empresa

| # | Dato | Dónde aparece hoy | Qué necesito |
|---|---|---|---|
| 1 | **1791 clientes, 967 proyectos, 132 eventos, 676 certificados** | Portada, Nosotros, Artículos | ¿Son reales y están actualizados? |
| 2 | **"+500 casos exitosos"** / **"Más de 500 TSP exitosos"** | TSP (description y página) | Choca con el n.º 1. ¿Cuál es el dato correcto? |
| 3 | **"98 % de aprobación en primera sustentación"** | TSP | ¿Hay registro que lo respalde? Si no, se quita |
| 4 | **"Título en solo 1 mes"** vs **"1–2 meses promedio"** | TSP | ¿Cuál es real? |
| 5 | **Maestría: 2–6 meses** | FAQ de Maestría | ¿Se mantiene? |
| 6 | **Duración aproximada de cada etapa** por grado | Nueva pieza "Tu tesis por etapas" | Semanas aproximadas por etapa (ver `servicios.md` › Etapas) |
| 7 | **"Obtén tu primera asesoría gratis"** | Formularios de servicios y Artículos | ¿La oferta sigue vigente? ¿Qué incluye? |
| 8 | **"Devolución del dinero si no apruebas"** | Plan Científica Consultores | **URGENTE: contradice los Términos actuales** (punto 7: "no se garantiza la aprobación automática de la tesis"). Mientras no se aclare, la garantía no se publica en el sitio nuevo |
| 9 | **Permiso de los 6 testimonios con nombre** | Portada, Testimonios | Confirmar el permiso (la página dice que lo autorizaron) |
| 10 | **Las 12 capturas de testimonios** | Testimonios | Permiso + autorizar que se transcriban como texto |
| 11 | **Lista de universidades** | `_inventario/universidades.md` | Revisar la limpieza de nombres y confirmar |
| 12 | ~~Razón social, RUC y dirección del proveedor~~ | Libro de reclamaciones | **Resuelto**: estaban en la Política de privacidad (Científica Consultores S.A.C., RUC 20605810315). Ya se muestran en el Libro de reclamaciones |
| 13 | ~~Ley citada en la Política de privacidad~~ | Política de privacidad | **Resuelto**: el texto cita la Ley N.° 29733 y el D. S. 016-2024-JUS |
| 14 | **Fotos del equipo** | Hero, Nosotros, Servicios | ¿Hay más fotos de las que están en `images/banner` y `images/otros`? Con 3–4 del mismo encuadre se hace el fundido del hero |
| 15 | **Logo en SVG (vectorial)** | Header, footer | Hoy solo existe en PNG y JPEG. El diseñador del logo debería tener el archivo `.svg` o `.ai` |
| 16 | **14 imágenes que hoy dan 404 en producción** (varias eran rutas mal escritas: los archivos sí existían y ya están bien enlazados) | Blog (Fiestas Patrias, Tesis vs TSP, Cómo hacer tu proyecto), Nosotros, miniatura del video, Artículos científicos, Testimonios y legales | ¿Existen los originales? Si no, se usan fotos del equipo que sí están |
| 17 | **Libro de reclamaciones roto** | Hoy envía a `https://formsubmit.co/ informes@…` (con un espacio) | Enviar un reclamo de prueba en el sitio actual para confirmar si llegan. En el sitio nuevo ya está corregido |
| 18 | **Correos visibles en el código** | Los formularios envían a formsubmit con el correo dentro del HTML (los bots lo recolectan para spam) | formsubmit da un alias aleatorio en el primer envío (llega por correo a `marketingcientificaconsultores@gmail.com`). Con ese alias el correo deja de estar expuesto |
| 20 | **4 variables de JavaScript personalizado en GTM** | Contenedor `GTM-5TNL7PM2` | Obligan a permitir `'unsafe-eval'` en la CSP. Si quien administra GTM las reemplaza por variables nativas, se quita y la seguridad queda al máximo. El contenedor también carga Píxel de Meta, Meta CAPI, Píxel de TikTok y la conversión de Google Ads: todos funcionan con la CSP nueva |
| 19 | **Medios de pago** | El footer actual muestra BCP, Interbank, Scotiabank, Banco de la Nación y PayPal | ¿Siguen vigentes? Si sí, van en Contáctanos |

## DECIDIR: decisiones de contenido

| # | Tema | Mi recomendación |
|---|---|---|
| A | **"Elaboración de tesis completas o por capítulo"** (Maestría) y **"Elaboración del proyecto y del informe final"** (planes) | Decir "Acompañamiento…": coincide con la palabra clave "asesoría" y evita que lo lean como plagio por encargo |
| B | **Retrato del testimonio de la portada** (no hay foto del cliente) | (a) conseguir la foto con permiso; si no, (c) la cita a todo el ancho |
| C | **3 guías sin artículo** (Estructura de una tesis, Tesis vs tesina vs TFG/TFM, Avanzar sin bloquearte) | Escribirlas como artículos del blog: suman SEO. Mientras tanto, se muestran sin enlace |
| D | **Preguntas frecuentes de Pregrado y TSP** (hoy no tienen) | Escribir 4–6 propias para cada una (cada FAQPage suma resultados enriquecidos en Google) |
| E | **Unificar los title** con el formato "Palabra clave \| Científica Consultores" y sin emojis (Doctorado, TSP, Nosotros, Testimonios, Otros servicios, Artículos, Libro de reclamaciones, legales) | Sí. Se mantienen las mismas palabras clave; solo cambia el orden y se quitan ✅ y 🎓 |
| F | **Title de Otros servicios** ("Capacitaciones" no coincide con el contenido) | "Otros servicios de investigación \| Científica Consultores" |
| G | **Description de Artículos científicos** (172 car.; Google la corta a ~155) | La versión de 140 car. propuesta en `paginas.md` |

## Observaciones sobre los textos legales

- Los Términos describen un "carrito de compra" y una "pasarela de pago" que el sitio no tiene. Conviene que el área legal los actualice; el texto no se tocó.
- El punto 1 de "Condiciones de contratación" describe diplomados, seminarios y cursos, pero no menciona la asesoría de tesis, que es el servicio principal.
