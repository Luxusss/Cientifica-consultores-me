export const site = {
  name: 'Científica Consultores',
  legalName: 'Científica Consultores S.A.C.',
  ruc: '20605810315',
  legalAddress: 'Cal. Los Chasquis N.° 7173, Urb. El Trébol, Los Olivos, Lima',
  url: 'https://cientificaconsultores.com',
  locale: 'es_PE',
  lang: 'es',
  themeColor: '#1d2d8c',
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
  countries: ['Perú', 'Colombia', 'México', 'Bolivia', 'Ecuador', 'Venezuela', 'Chile', 'España'],
  social: [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/tesisasyesoriacientificaconsultores' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/cientifica.consultores/' },
    { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@cientificaconsultores' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@Tesis.Cient%C3%ADficaConsultores' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/cient%C3%ADfica-consultores-9b9a56313/' },
  ],
  gtmId: 'GTM-5TNL7PM2',
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}`;

export const defaultWhatsAppMessage = 'Hola, quiero información sobre la asesoría de tesis.';

export function whatsappUrl(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
