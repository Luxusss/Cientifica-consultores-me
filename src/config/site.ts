export const site = {
  name: 'Científica Consultores',
  url: 'https://cientificaconsultores.com',
  locale: 'es_PE',
  lang: 'es',
  themeColor: '#f7f7f5',
  phone: {
    display: '990 448 338',
    e164: '+51990448338',
    whatsapp: '51990448338',
  },
  email: 'informes@cientificaconsultores.com',
  address: {
    street: 'Calle Los Chasquis 7173',
    district: 'Los Olivos',
    city: 'Lima',
    country: 'PE',
    reference: 'a la altura de la cuadra 6 de la Av. Angélica Gamarra',
  },
  hours: [
    { days: 'Lunes a viernes', opens: '09:00', closes: '18:00', label: '9:00 a. m. – 6:00 p. m.' },
    { days: 'Sábado', opens: '09:00', closes: '13:00', label: '9:00 a. m. – 1:00 p. m.' },
  ],
  replyTime: 'menos de 24 horas',
  countries: ['Perú', 'Colombia', 'México', 'Bolivia', 'Ecuador', 'Venezuela'],
  gtmId: 'GTM-5TNL7PM2',
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}`;

export const defaultWhatsAppMessage = 'Hola, quiero información sobre la asesoría de tesis.';

export function whatsappUrl(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
