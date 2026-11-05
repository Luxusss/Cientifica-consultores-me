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
