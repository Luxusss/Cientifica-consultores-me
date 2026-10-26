# Páginas de servicio

Las 4 páginas comparten **una sola plantilla**. Hoy son 4 archivos de ~800 líneas con 4 CSS casi iguales. Cambia el contenido, no la estructura.

## Plantilla común

1. **Hero:** h1 + frase de apoyo + formulario corto "Pide tu primera asesoría gratis" **[D3: confirmar que la oferta sigue vigente]**. Campos: nombre, país (código), teléfono. Se envía igual que hoy (formsubmit + webhook de Sinaptiq).
2. **Qué incluye:** lista propia de cada grado.
3. **Tu carrera:** las 4 áreas con sus carreras (es igual en las 4 páginas; ver abajo).
4. **Etapas:** la pieza interactiva "Tu tesis por etapas", con este grado ya elegido.
5. **Por qué con nosotros:** hechos propios de cada grado.
6. **Preguntas frecuentes:** las que ya existen en cada página, con su JSON-LD `FAQPage`.
7. **Contacto:** el mismo cierre que la portada.
8. **Migas de pan:** Inicio › [Grado], con `BreadcrumbList` (hoy existe en las 4 páginas y se mantiene).

### Tu carrera (común a las 4 páginas)

- **h2:** Un asesor de tu carrera
- **Párrafo:** Accede a asesoría personalizada según tu disciplina, con especialistas para cada carrera.
- **Ingenierías:** Ingeniería Civil, de Sistemas, Industrial, Mecánica, Eléctrica, Mecatrónica, Electrónica y Arquitectura
- **Letras:** Literatura, Comunicación y Periodismo, Historia y Educación
- **Ciencias sociales:** Administración de Empresas, Derecho, Economía, Contabilidad, Ciencia Política y Sociología
- **Ciencias de la salud:** Medicina, Enfermería, Odontología, Farmacia, Bioquímica, Obstetricia y Nutrición

---

## Pregrado — `/tesis.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Asesoría de Tesis de Pregrado en Lima \| Científica Consultores | Igual |
| description | (igual que hoy, 149 car.) | Igual |
| h1 | **Asesoría de tesis de pregrado** *(30 car.)* | Antes estaba escrito dos veces |

- **Frase de apoyo:** El último paso para tu título, con un asesor de tu carrera a tu lado, en Lima, a nivel nacional y online.
- **h2 Qué incluye:** Qué incluye tu asesoría
  - **Párrafo:** Nuestra asesoría integral de tesis de pregrado cubre todas las fases, desde el tema hasta la sustentación, con metodología cualitativa, cuantitativa o mixta.
  - **Proyecto de tesis** *(ancla `#proyecto`)*: planteamiento del problema, objetivos, justificación, marco teórico y diseño metodológico, alineados a los criterios de tu universidad.
  - **Informe final y análisis de datos:** te acompañamos capítulo por capítulo, de los resultados a las conclusiones, con software especializado para datos cuantitativos o cualitativos.
  - **Levantamiento de observaciones:** si tu tesis ya fue revisada, identificamos y corregimos cada observación para que quede lista para su aprobación.
  - **Preparación para la sustentación:** estructura de tu presentación, ensayo de la exposición y simulación de preguntas del jurado.
  - **Normas de redacción:** APA, Vancouver o ISO 690, según tu universidad.
  - **Originalidad:** control de similitud con Turnitin.
- **h2 Por qué con nosotros:** Asesoría de tesis en Lima
  - **Párrafo:** Más de una década acompañando tesis de pregrado, con asesores especialistas que conocen la normativa de las universidades de Lima y del resto del país.
  - **Especialistas en tu tema:** un equipo multidisciplinario; tu asesor te guía hasta la sustentación.
  - **Originalidad comprobada:** control de Turnitin en cada entrega.
  - **A tu ritmo:** reuniones virtuales y seguimiento constante, estés donde estés.
- **h2 Normativa:** Conocemos tu universidad
  - **Párrafo:** Expertos en la normativa de las universidades de pregrado en Lima y a nivel nacional. → lista de universidades de Perú **[D3]**
- **Preguntas frecuentes:** hoy esta página no tiene → **[DECIDIR]** reutilizar las 6 de la portada o escribir 4–6 propias de pregrado.

---

## Maestría — `/tesis-maestria.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Asesoría de Tesis de Maestría en Lima \| Científica Consultores | Igual |
| description | (igual que hoy, 125 car.) | Igual |
| h1 | **Asesoría de tesis de maestría** *(30 car.)* | Antes estaba escrito dos veces |

- **Frase de apoyo:** Para quienes empiezan su tesis de maestría o necesitan levantar observaciones: investigación, redacción y sustentación con un asesor de posgrado.
- **h2 Qué incluye:** Qué incluye tu asesoría
  - Acompañamiento de toda la tesis o por capítulos
  - Marco teórico, metodología y conclusiones
  - Reporte de similitud con Turnitin
  - Preparación de la sustentación y de las diapositivas
  - Asesoría continua, online y personalizada
  - **[DECIDIR]** Hoy dice "Elaboración de tesis completas o por capítulo". Se reemplazó por "Acompañamiento de toda la tesis o por capítulos" (ver la nota del README).
- **h2 Por qué con nosotros:** Online y a tu horario
  - **Párrafo:** Trabajamos a distancia, sin importar tu ciudad o universidad, con un equipo multidisciplinario en horarios flexibles. También te recibimos en nuestra oficina de Los Olivos, previa cita.
  - Más de 10 años de experiencia en asesoría de tesis
  - Enfoque académico, práctico y ético
  - Atención personalizada
- **Preguntas frecuentes (las 6 actuales, iguales):**
  1. ¿Cuánto tiempo toma hacer una tesis de maestría? *(hoy: "entre 2 y 6 meses según tu disponibilidad")* **[D3: confirmar]**
  2. ¿Puedo contratar asesoría solo para una parte de mi tesis?
  3. ¿Incluyen revisión con Turnitin?
  4. ¿Pueden ayudarme si mi proyecto de tesis está avanzado?
  5. ¿Puedo recibir asesoría para la sustentación de mi tesis?
  6. ¿La asesoría es 100 % online?
- **Nuevo:** hoy esta página no tiene `FAQPage` en su JSON-LD aunque muestra 6 preguntas. Se agrega (mejora de SEO).

---

## Doctorado — `/tesis-doctoral.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Científica Consultores \| ✅ Asesoría de Tesis Doctoral | **[DECIDIR]** Recomiendo "Asesoría de Tesis Doctoral \| Científica Consultores": palabra clave al inicio, sin emoji, mismo formato que las otras 3 |
| description | (igual que hoy, 157 car.) | Igual |
| h1 | **Asesoría de tesis doctoral** *(27 car.)* | Antes estaba escrito dos veces |

- **Frase de apoyo:** Un asesor con experiencia en investigación avanzada te acompaña desde la propuesta doctoral hasta la defensa.
- **h2 Qué incluye:** Qué incluye tu asesoría
  - Propuesta doctoral y diseño del estudio
  - Construcción teórica y antecedentes
  - Análisis cualitativo o cuantitativo en profundidad
  - Argumentación académica de cada capítulo
  - Artículos y manuscritos publicables
  - Preparación para la defensa
- **h2 Por qué con nosotros:** Rigor de principio a fin
  - **Metodología rigurosa:** marcos teóricos sólidos y métodos de investigación apropiados.
  - **Originalidad comprobada:** control de similitud en cada entrega.
  - **Acompañamiento continuo:** el mismo asesor durante todo el proceso.
  - **Plazos cumplidos:** entregas según el cronograma acordado.
- **Preguntas frecuentes (las 3 actuales, iguales, con su JSON-LD):**
  1. ¿Qué incluye la asesoría de tesis doctoral?
  2. ¿Cuál es el costo de la asesoría para una tesis de doctorado?
  3. ¿Pueden ayudarme a elegir el tema de mi tesis?

---

## TSP — `/trabajo-de-suficiencia-profesional.html`

| Campo | Valor | Cambio |
|---|---|---|
| title | Científica Consultores \| Asesoría TSP y Tesis Académicas Perú | **[DECIDIR]** Recomiendo "Asesoría de Trabajo de Suficiencia Profesional (TSP) \| Científica Consultores" |
| description | "…Con +500 casos exitosos en Perú…" | **[D3]** La cifra choca con los 1791 clientes de la portada. Confirmar cuál es real |
| h1 | **Asesoría de TSP** *(16 car.)*, con la frase de apoyo "Trabajo de suficiencia profesional" justo debajo | Antes estaba escrito dos veces, con un error ("SuficienciaProfesional" sin espacio) |

- **Frase de apoyo:** ¿Tienes 3 años de experiencia laboral y te falta el título? Tu trabajo de suficiencia profesional, guiado paso a paso.
- **h2 Qué es:** Qué es un TSP
  - **Párrafo:** El trabajo de suficiencia profesional es un informe que aplica lo que aprendiste en tu carrera para resolver un problema real de tu trabajo. Es el último paso para tu título profesional.
- **h2 Estructura:** Cómo se estructura *(la lista actual, sin los dos puntos colgando)*
  - **Aspectos generales:** el área donde trabajas y la empresa (RUC, misión, visión y actividad económica).
  - **Fundamento del área:** el marco conceptual y teórico que sustenta tu trabajo.
  - **Experiencia y aportes:** tus logros, las soluciones que implementaste y su impacto.
  - **Desarrollo del proyecto:** la solución a un problema concreto de la empresa y cómo se llevó a cabo.
  - **Análisis y resultados:** los cambios esperados y la interpretación de los datos.
  - **Conclusiones y recomendaciones.**
- **h2 Qué incluye:** Qué incluye tu asesoría
  - Acompañamiento desde el tema hasta el informe final
  - Corrección y formato según las normas de tu universidad
  - Levantamiento de observaciones del jurado
  - Control de similitud con Turnitin
- **h2 Por qué con nosotros:** Conocemos tu universidad
  - Requisitos específicos de UPN, UCV, USIL, UTP y más universidades
  - **[D3]** Hoy dice: "98 % de aprobación en primera sustentación", "Más de 500 TSP exitosos" y "1–2 meses promedio". Solo se publican si se confirman con datos.
  - **[D3]** El h2 actual "¡Obtén tu título profesional en solo 1 mes!" choca con "1–2 meses promedio". Confirmar cuál es real; mientras tanto, no se publica ninguno.
- **Preguntas frecuentes:** hoy no tiene → **[DECIDIR]**, igual que en pregrado.

---

## Etapas (contenido de la pieza interactiva)

Cada etapa tiene nombre, lo que hacemos y una duración aproximada **[D3]**. Los nombres salen del contenido actual del sitio.

### Pregrado
1. **Tema y problema.** Elegimos un tema viable y planteamos el problema de investigación.
2. **Proyecto de tesis.** Objetivos, justificación, marco teórico y diseño metodológico.
3. **Datos.** Planificamos la recolección y analizamos los datos con software especializado.
4. **Informe final.** Te acompañamos en la redacción de resultados, discusión y conclusiones.
5. **Revisión.** Formato de tu universidad, normas de redacción y Turnitin.
6. **Observaciones.** Levantamos lo que señalen tu asesor o tu jurado.
7. **Sustentación.** Presentación, ensayo y simulación de preguntas.

### Maestría
Las mismas 7 etapas, con más peso en el marco teórico y en el análisis. Duración total de referencia: 2–6 meses (dato publicado hoy en la página) **[D3]**.

### Doctorado
1. **Elección del título.** El tema clave de la investigación y su principal punto de interés.
2. **Planteamiento del problema.** Por qué es relevante y necesaria la investigación.
3. **Marco teórico.** La base teórica y los antecedentes.
4. **Metodología.** El enfoque, la recolección y el análisis de datos.
5. **Redacción.** Te acompañamos en el estilo académico y el formato institucional.
6. **Revisión y entrega.** Control de calidad y correcciones finales.
7. **Defensa.** Preparación de la sustentación ante el tribunal.

### TSP
1. **Aspectos generales.** Tu empresa y tu área de trabajo.
2. **Fundamento del área.** El marco conceptual y teórico.
3. **Experiencia y aportes.** Lo que lograste y su impacto.
4. **Desarrollo del proyecto.** La solución a un problema real.
5. **Análisis y resultados.** Los datos y su interpretación.
6. **Conclusiones.** Hallazgos y recomendaciones.
7. **Observaciones y sustentación.** Correcciones del jurado y defensa.

Duración total de referencia: 1–2 meses (dato publicado hoy en la página) **[D3]**.
