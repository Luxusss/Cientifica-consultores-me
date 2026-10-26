export const endpoints = {
  crm: 'https://sinaptiq.incitap.com/api/webhooks/social/form',
  leads: 'marketingcientificaconsultores@gmail.com',
  claims: 'informes@cientificaconsultores.com',
} as const;

export const formsubmit = (email: string, ajax = false) =>
  `https://formsubmit.co/${ajax ? 'ajax/' : ''}${email}`;

export type Country = { name: string; code: string };

export const countries: Country[] = [
  { name: 'Perú', code: '+51' },
  { name: 'Colombia', code: '+57' },
  { name: 'México', code: '+52' },
  { name: 'Bolivia', code: '+591' },
  { name: 'Ecuador', code: '+593' },
  { name: 'Venezuela', code: '+58' },
  { name: 'Argentina', code: '+54' },
  { name: 'Brasil', code: '+55' },
  { name: 'Chile', code: '+56' },
  { name: 'Costa Rica', code: '+506' },
  { name: 'Cuba', code: '+53' },
  { name: 'El Salvador', code: '+503' },
  { name: 'Guatemala', code: '+502' },
  { name: 'Honduras', code: '+504' },
  { name: 'Nicaragua', code: '+505' },
  { name: 'Panamá', code: '+507' },
  { name: 'Paraguay', code: '+595' },
  { name: 'República Dominicana', code: '+1' },
  { name: 'Uruguay', code: '+598' },
  { name: 'España', code: '+34' },
  { name: 'Portugal', code: '+351' },
  { name: 'Italia', code: '+39' },
  { name: 'Francia', code: '+33' },
  { name: 'Alemania', code: '+49' },
  { name: 'Reino Unido', code: '+44' },
  { name: 'Estados Unidos', code: '+1' },
  { name: 'Canadá', code: '+1' },
  { name: 'Japón', code: '+81' },
  { name: 'China', code: '+86' },
];
