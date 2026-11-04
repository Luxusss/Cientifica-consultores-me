export type UniversityGroup = { country: string; names: string[] };

export const universities: UniversityGroup[] = [
  {
    country: 'Perú',
    names: [
      'Universidad Nacional Mayor de San Marcos',
      'Pontificia Universidad Católica del Perú',
      'Universidad Nacional de Ingeniería',
      'Universidad Peruana Cayetano Heredia',
      'Universidad de Lima',
      'Universidad de Piura',
      'Universidad Peruana de Ciencias Aplicadas',
      'Universidad San Ignacio de Loyola',
      'Universidad de San Martín de Porres',
      'Universidad Nacional Federico Villarreal',
      'Universidad Nacional Agraria La Molina',
      'Universidad Nacional del Callao',
      'Universidad César Vallejo',
      'Universidad Privada del Norte',
      'Universidad Tecnológica del Perú',
      'Universidad Continental',
      'Universidad Científica del Sur',
      'Universidad Norbert Wiener',
      'Universidad María Auxiliadora',
      'Universidad Femenina del Sagrado Corazón',
      'Universidad Antonio Ruiz de Montoya',
      'Universidad Nacional del Centro del Perú',
      'Universidad Católica de Santa María',
      'Universidad Nacional de la Amazonía Peruana',
      'Universidad Nacional de Ucayali',
      'IPAE',
    ],
  },
  {
    country: 'Colombia',
    names: [
      'Universidad Nacional de Colombia',
      'Universidad de los Andes',
      'Pontificia Universidad Javeriana',
      'Universidad del Rosario',
      'Universidad de Antioquia',
      'Universidad del Valle',
      'Universidad Simón Bolívar',
    ],
  },
  {
    country: 'México',
    names: [
      'Universidad Nacional Autónoma de México',
      'Universidad Autónoma Metropolitana',
      'Universidad Iberoamericana',
      'Universidad de Guadalajara',
      'Universidad de Monterrey',
      'Universidad Autónoma de Guerrero',
    ],
  },
  {
    country: 'Chile',
    names: ['Pontificia Universidad Católica de Chile', 'Universidad Diego Portales', 'Universidad de Tarapacá'],
  },
  {
    country: 'España',
    names: ['Universidad Complutense de Madrid'],
  },
];

export type Testimonial = { name: string; university: string; country: string; quote: string; highlight?: string };

export const testimonials: Testimonial[] = [
  {
    name: 'Isaac Daniel Vargas Pérez',
    university: 'Universidad María Auxiliadora',
    country: 'Perú',
    quote: 'Gracias al asesoramiento de especialistas, logré desarrollar exitosamente mi tesis y obtener una excelente valoración. Recomiendo a Científica Consultores a futuros colegas de distintas disciplinas.',
    highlight: 'Gracias al asesoramiento de especialistas, logré desarrollar exitosamente mi tesis y obtener una excelente valoración.',
  },
  {
    name: 'María Angélica Benítez Barreto',
    university: 'Universidad Simón Bolívar, sede Barranquilla',
    country: 'Colombia',
    quote: 'Excelentes profesionales. Estoy muy contenta con la habilidad que tienen para resolver inquietudes. Muchas gracias por sus asesorías y por despejar mis dudas en la elaboración de mi tesis.',
  },
  {
    name: 'Shelly Pastor Mendizábal',
    university: 'Universidad Nacional Mayor de San Marcos',
    country: 'Perú',
    quote: 'Científica Consultores realizó un buen trabajo en la asesoría de mi tesis. Estoy muy agradecida y definitivamente volvería a contratar sus servicios para futuros proyectos.',
  },
  {
    name: 'Yara Alejandra Saldaña Saenz',
    university: 'Universidad Autónoma de Guerrero',
    country: 'México',
    quote: 'Sus asesorías fueron de mucha ayuda para culminar mi tesis. Recomiendo ampliamente sus servicios, ya que demostraron profesionalismo y amabilidad en todo momento.',
  },
  {
    name: 'Janet Córdova Crisóstomo',
    university: 'Pontificia Universidad Católica del Perú',
    country: 'Perú',
    quote: 'Las asesorías me ayudaron bastante en la elaboración de mi tesis. El equipo de Científica Consultores fue muy amable y responsable. Los recomiendo plenamente.',
  },
  {
    name: 'Elizabeth Valentina Pastor Gonzales',
    university: 'Universidad Nacional Mayor de San Marcos',
    country: 'Perú',
    quote: 'Estoy muy satisfecha con la asesoría recibida. Desde el inicio, resolvieron mis dudas con profesionalismo y compromiso, cumpliendo todas mis expectativas.',
  },
];

export const tools = ['Turnitin', 'SPSS', 'Atlas.ti', 'Mendeley'] as const;


/** Más universidades por país, del mismo tipo que las peruanas de la lista (no suman al total de clientes ni al buscador). */
export const moreUniversities: { country: string; names: string[] }[] = [
  { country: 'Colombia', names: ['Universidad Industrial de Santander', 'Universidad de Cartagena', 'Universidad Pontificia Bolivariana', 'Universidad EAFIT', 'Universidad del Norte'] },
  { country: 'México', names: ['Instituto Politécnico Nacional', 'Universidad Autónoma de Nuevo León', 'Benemérita Universidad Autónoma de Puebla', 'Tecnológico de Monterrey', 'Universidad Anáhuac'] },
  { country: 'Bolivia', names: ['Universidad Mayor de San Andrés', 'Universidad Mayor de San Simón', 'Universidad Autónoma Gabriel René Moreno', 'Universidad Católica Boliviana San Pablo', 'Universidad Privada Boliviana', 'Universidad Privada de Santa Cruz de la Sierra'] },
  { country: 'Ecuador', names: ['Universidad Central del Ecuador', 'Escuela Politécnica Nacional', 'Universidad de Guayaquil', 'Pontificia Universidad Católica del Ecuador', 'Universidad San Francisco de Quito', 'Universidad Técnica Particular de Loja'] },
  { country: 'Venezuela', names: ['Universidad Central de Venezuela', 'Universidad del Zulia', 'Universidad de Los Andes', 'Universidad de Carabobo', 'Universidad Católica Andrés Bello', 'Universidad Metropolitana'] },
  { country: 'Chile', names: ['Universidad de Chile', 'Universidad de Concepción', 'Universidad de Santiago de Chile', 'Pontificia Universidad Católica de Valparaíso', 'Universidad Andrés Bello'] },
  { country: 'España', names: ['Universidad de Granada', 'Universidad de Salamanca', 'Universidad de Barcelona', 'Universidad Pontificia Comillas', 'Universidad Internacional de La Rioja (UNIR)', 'UNED'] },
];
