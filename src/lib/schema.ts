import { site } from '@/config/site';

const orgId = `${site.url}/#organizacion`;
const websiteId = `${site.url}/#sitio`;

export const organization = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': orgId,
  name: site.name,
  url: site.url,
  logo: `${site.url}/og/cientifica-consultores.jpg`,
  image: `${site.url}/og/cientifica-consultores.jpg`,
  email: site.email,
  telephone: site.phone.e164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: site.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days === 'Sábado' ? ['Saturday'] : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: site.countries,
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  inLanguage: 'es',
  publisher: { '@id': orgId },
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

export function graph(nodes: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [organization, website, ...nodes] }).replace(/</g, String.fromCharCode(92) + 'u003c');
}
