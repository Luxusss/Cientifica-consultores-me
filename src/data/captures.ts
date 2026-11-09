/**
 * Capturas reales de WhatsApp compartidas por clientes con su autorización.
 * Para agregar una nueva: guarda la imagen como TESTIMONIOn.png en assets/images/fotos_testimonios
 * y añade aquí una entrada con el mismo número. La más reciente va primero.
 */
export type CaptureKind = 'sustentacion' | 'aprobada' | 'recomendacion';
export type Capture = { n: number; name: string; preview: string; kind: CaptureKind; tag: string };

export const captureKinds: { id: CaptureKind | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'sustentacion', label: 'Sustentaciones' },
  { id: 'aprobada', label: 'Tesis y planes aprobados' },
  { id: 'recomendacion', label: 'Recomendaciones' },
];

export const captures: Capture[] = [
  { n: 12, name: 'Angelo', preview: 'Me aprobaron mi tesis. Muchas gracias por todo su apoyo y guía.', kind: 'aprobada', tag: 'Tesis aprobada' },
  { n: 11, name: 'Tesista', preview: 'Comentarle que aprobé mi sustentación de tesis.', kind: 'sustentacion', tag: 'Sustentación aprobada' },
  { n: 10, name: 'Daniel', preview: 'Bien, gracias a Dios nos aprobaron con 15. Salimos del estrés.', kind: 'sustentacion', tag: 'Aprobado con 15' },
  { n: 9, name: 'Jaime', preview: 'Pasé la sustentación de mi tesis. Muchas gracias por el apoyo.', kind: 'sustentacion', tag: 'Sustentación aprobada' },
  { n: 8, name: 'Jessica', preview: '¡Aprobamos! Muchas gracias por su apoyo.', kind: 'sustentacion', tag: 'Sustentación aprobada' },
  { n: 7, name: 'Sergio', preview: 'Realizamos la sustentación de nuestra tesis y fue aprobada por unanimidad.', kind: 'sustentacion', tag: 'Aprobada por unanimidad' },
  { n: 6, name: 'Tesista', preview: 'Te recomendaré porque no he tenido tantos problemas. Súper profesionales ustedes.', kind: 'recomendacion', tag: 'Recomendación' },
  { n: 5, name: 'Kami', preview: 'Bien, muchas gracias. Ya sustenté.', kind: 'sustentacion', tag: 'Sustentación' },
  { n: 4, name: 'Silvia', preview: 'Ya sustenté. ¡Aprobé!', kind: 'sustentacion', tag: 'Sustentación aprobada' },
  { n: 3, name: 'Hans', preview: 'Sustenté con una nota satisfactoria. Muy agradecido con ustedes.', kind: 'sustentacion', tag: 'Nota satisfactoria' },
  { n: 2, name: 'Tesista', preview: 'Les comento que mi tesis fue aprobada. Gracias por el trabajo.', kind: 'aprobada', tag: 'Tesis aprobada' },
  { n: 1, name: 'Tesista', preview: 'La universidad aceptó el plan de tesis.', kind: 'aprobada', tag: 'Plan aprobado' },
];

/**
 * Lo que cada cliente escribió en esas mismas conversaciones, juntando sus mensajes seguidos
 * (solo se corrigen tildes y ortografía; no se agrega nada que no hayan dicho).
 * Se muestra en la segunda fila de testimonios del inicio, con el mismo estilo de las reseñas.
 */
export type ChatQuote = { name: string; tag: string; quote: string };
export const chatQuotes: ChatQuote[] = [
  { name: 'Hans', tag: 'Sustentación aprobada con 15', quote: 'El miércoles sustenté con una nota satisfactoria: entre trabajo y sustentación la calificación fue 15. Me fue bien. Muy agradecido con ustedes por el apoyo que me brindaron.' },
  { name: 'Tesista', tag: 'Recomendación', quote: 'Mil gracias por tu apoyo. Te recomendaré porque no he tenido tantos problemas con ustedes. Gracias en serio, súper profesionales ustedes.' },
  { name: 'Equipo de tesis de Daniel', tag: 'Aprobados con 15', quote: 'Bien, gracias a Dios nos aprobaron con 15. Salimos del estrés. Nuestro agradecimiento al equipo de Científica Consultores por el apoyo en este proceso.' },
  { name: 'Sergio', tag: 'Aprobada por unanimidad', quote: 'Buenos días, agradecer su apoyo. Realizamos la sustentación de nuestra tesis y fue aprobada por unanimidad. Muchas gracias.' },
  { name: 'Silvia', tag: 'Sustentación aprobada', quote: 'Ya sustenté. ¡Aprobé! Gracias, he estado con los nervios de punta.' },
  { name: 'Angelo', tag: 'Tesis aprobada', quote: 'Me aprobaron mi tesis. Muchas gracias por todo su apoyo y guía.' },
  { name: 'Luz', tag: 'Sustentación aprobada', quote: 'Estimados, buenos días, me uno al agradecimiento de Sergio. ¡Millón de gracias por todo! Bendiciones.' },
  { name: 'Jaime', tag: 'Sustentación aprobada', quote: 'Ayer sustenté y pasé la sustentación de mi tesis. Muchas gracias por el apoyo.' },
  { name: 'Tesista', tag: 'Plan de tesis aprobado', quote: 'Hola, buenas tardes. Para informar que la universidad aceptó el plan de tesis y se presentó la solicitud para la designación del asesor.' },
  { name: 'Jessica', tag: 'Sustentación aprobada', quote: 'Hola, buen día. ¡Aprobamos! Muchas gracias por su apoyo.' },
  { name: 'Tesista', tag: 'Tesis aprobada', quote: 'Les comento que mi tesis fue aprobada. Gracias por el trabajo; ahora falta programar las asesorías que faltaban.' },
  { name: 'Tesista', tag: 'Sustentación aprobada', quote: 'Buen día, estimados, para comentarles que aprobé mi sustentación de tesis.' },
];
