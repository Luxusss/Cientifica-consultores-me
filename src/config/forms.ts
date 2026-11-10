export const endpoints = {
  crm: 'https://app.automatacrm.net/api/webhooks/social/form?source_token=Jt79jZHvbEYVN8HUlfFNzpmXA5WnQp0PEJwJZF68PK8',
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
  { name: 'Chile', code: '+56' },
  { name: 'España', code: '+34' },
  { name: 'Otro país', code: '+' },
];
