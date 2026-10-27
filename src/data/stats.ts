import { site } from '@/config/site';
import { universities } from '@/data/proof';

export const stats = {
  years: 10,
  clients: 1791,
  projects: 967,
  events: 132,
  certificates: 676,
  tsp: 500,
  tspApproval: 98,
  tspMonths: '1 a 2 meses',
  universities: universities.reduce((n, g) => n + g.names.length, 0),
  countries: site.countries.length,
};
