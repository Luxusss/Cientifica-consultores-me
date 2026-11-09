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
 * Testimonios de la segunda fila del inicio: lo que cada cliente escribió en esas mismas conversaciones,
 * redactado en un tono más formal. Se conserva el sentido de su mensaje y no se agrega nada que no haya dicho;
 * por eso cada tarjeta indica que es un mensaje de WhatsApp adaptado.
 */
export type ChatQuote = { name: string; tag: string; quote: string };
export const chatQuotes: ChatQuote[] = [
  { name: 'Hans', tag: 'Sustentación aprobada', quote: 'Sustenté el miércoles y obtuve una nota satisfactoria: entre el trabajo y la sustentación, la calificación fue 15. Estoy muy agradecido por el apoyo que me brindaron.' },
  { name: 'Sergio', tag: 'Tesis aprobada por unanimidad', quote: 'Quiero agradecerles por su apoyo. Realizamos la sustentación de nuestra tesis y fue aprobada por unanimidad. Muchas gracias.' },
  { name: 'Tesista', tag: 'Recomendación', quote: 'Muchas gracias por su apoyo. Los recomendaré, porque con ustedes no tuve mayores inconvenientes. Son muy profesionales.' },
  { name: 'Daniel y su compañera', tag: 'Aprobados con 15', quote: 'Gracias a Dios, aprobamos con 15 y por fin dejamos atrás el estrés. Agradecemos al equipo de Científica Consultores por su apoyo durante todo este proceso.' },
  { name: 'Angelo', tag: 'Tesis aprobada', quote: 'Me aprobaron la tesis. Muchas gracias por todo su apoyo y su guía.' },
  { name: 'Tesista', tag: 'Plan de tesis aprobado', quote: 'Les informo que la universidad aceptó mi plan de tesis y que ya presenté la solicitud para la designación de mi asesor.' },
  { name: 'Silvia', tag: 'Sustentación aprobada', quote: 'Ya sustenté y aprobé. Muchas gracias por todo; había estado con los nervios de punta.' },
  { name: 'Luz', tag: 'Agradecimiento', quote: 'Me uno al agradecimiento de Sergio. ¡Muchísimas gracias por todo! Bendiciones.' },
  { name: 'Jaime', tag: 'Sustentación aprobada', quote: 'Ayer sustenté y aprobé mi tesis. Muchas gracias por el apoyo.' },
  { name: 'Tesista', tag: 'Tesis aprobada', quote: 'Mi tesis fue aprobada. Gracias por el trabajo realizado; ahora continuaremos con las asesorías que faltan.' },
  { name: 'Jessica', tag: 'Sustentación aprobada', quote: '¡Aprobamos la sustentación! Muchas gracias por todo su apoyo.' },
  { name: 'Tesista', tag: 'Sustentación aprobada', quote: 'Buen día. Les comento que aprobé mi sustentación de tesis. Gracias.' },
];
