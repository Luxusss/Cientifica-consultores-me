import { site } from '@/config/site';
import { universities } from '@/data/proof';

export const stats = {
  years: 10,
  clients: 4000,
  projects: 967,
  events: 132,
  certificates: 676,
  tsp: 1000,
  universities: universities.reduce((n, g) => n + g.names.length, 0),
  countries: site.countries.length,
};
