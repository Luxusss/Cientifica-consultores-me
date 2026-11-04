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

/**
 * Universidades con un desarrollo de tesis parecido al de las universidades peruanas que asesoramos:
 * misma estructura base (planteamiento, marco teórico, metodología, resultados y discusión) y un perfil equivalente
 * (pública nacional, católica o privada profesional). NO son clientes: no suman al total ni al buscador.
 */
export type SimilarGroup = { country: string; modality: string; names: { name: string; like: string }[] };
export const similarUniversities: SimilarGroup[] = [
  {
    country: 'Perú',
    modality: 'Tesis, trabajo de suficiencia profesional o artículo científico',
    names: [],
  },
  {
    country: 'Colombia',
    modality: 'Trabajo de grado, monografía o tesis de maestría',
    names: [
      { name: 'Universidad Industrial de Santander', like: 'Universidad Nacional de Ingeniería' },
      { name: 'Universidad de Cartagena', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad Pontificia Bolivariana', like: 'Pontificia Universidad Católica del Perú' },
      { name: 'Universidad EAFIT', like: 'Universidad de Lima' },
      { name: 'Universidad del Norte', like: 'Universidad Peruana de Ciencias Aplicadas' },
    ],
  },
  {
    country: 'México',
    modality: 'Tesis, tesina o reporte de experiencia profesional',
    names: [
      { name: 'Instituto Politécnico Nacional', like: 'Universidad Nacional de Ingeniería' },
      { name: 'Universidad Autónoma de Nuevo León', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Benemérita Universidad Autónoma de Puebla', like: 'Universidad Nacional Federico Villarreal' },
      { name: 'Tecnológico de Monterrey', like: 'Universidad Peruana de Ciencias Aplicadas' },
      { name: 'Universidad Anáhuac', like: 'Universidad de Lima' },
    ],
  },
  {
    country: 'Bolivia',
    modality: 'Tesis de grado, proyecto de grado o trabajo dirigido',
    names: [
      { name: 'Universidad Mayor de San Andrés', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad Mayor de San Simón', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad Autónoma Gabriel René Moreno', like: 'Universidad Nacional del Centro del Perú' },
      { name: 'Universidad Católica Boliviana San Pablo', like: 'Pontificia Universidad Católica del Perú' },
      { name: 'Universidad Privada Boliviana', like: 'Universidad Peruana de Ciencias Aplicadas' },
      { name: 'Universidad Privada de Santa Cruz de la Sierra', like: 'Universidad San Ignacio de Loyola' },
    ],
  },
  {
    country: 'Ecuador',
    modality: 'Trabajo de integración curricular o examen complexivo',
    names: [
      { name: 'Universidad Central del Ecuador', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Escuela Politécnica Nacional', like: 'Universidad Nacional de Ingeniería' },
      { name: 'Universidad de Guayaquil', like: 'Universidad Nacional Federico Villarreal' },
      { name: 'Pontificia Universidad Católica del Ecuador', like: 'Pontificia Universidad Católica del Perú' },
      { name: 'Universidad San Francisco de Quito', like: 'Universidad de Lima' },
      { name: 'Universidad Técnica Particular de Loja', like: 'Universidad Continental' },
    ],
  },
  {
    country: 'Venezuela',
    modality: 'Trabajo especial de grado (TEG) o trabajo de grado de maestría',
    names: [
      { name: 'Universidad Central de Venezuela', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad del Zulia', like: 'Universidad Nacional Federico Villarreal' },
      { name: 'Universidad de Los Andes (Venezuela)', like: 'Universidad Nacional del Centro del Perú' },
      { name: 'Universidad de Carabobo', like: 'Universidad Nacional del Callao' },
      { name: 'Universidad Católica Andrés Bello', like: 'Pontificia Universidad Católica del Perú' },
      { name: 'Universidad Metropolitana', like: 'Universidad de Lima' },
    ],
  },
  {
    country: 'Chile',
    modality: 'Memoria, tesis de título o actividad formativa equivalente',
    names: [
      { name: 'Universidad de Chile', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad de Concepción', like: 'Universidad Nacional del Centro del Perú' },
      { name: 'Universidad de Santiago de Chile', like: 'Universidad Nacional de Ingeniería' },
      { name: 'Pontificia Universidad Católica de Valparaíso', like: 'Universidad Católica de Santa María' },
      { name: 'Universidad Andrés Bello', like: 'Universidad Peruana de Ciencias Aplicadas' },
    ],
  },
  {
    country: 'España',
    modality: 'Trabajo de fin de grado (TFG), de máster (TFM) o tesis doctoral',
    names: [
      { name: 'Universidad de Granada', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad de Salamanca', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad de Barcelona', like: 'Universidad Nacional Mayor de San Marcos' },
      { name: 'Universidad Pontificia Comillas', like: 'Pontificia Universidad Católica del Perú' },
      { name: 'Universidad Internacional de La Rioja (UNIR)', like: 'Universidad Continental' },
      { name: 'UNED', like: 'Universidad Continental' },
    ],
  },
];
