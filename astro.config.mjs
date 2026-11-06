import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const literata = './src/assets/fonts/literata';
const site = 'https://cientificaconsultores.com';

export default defineConfig({
  site,
  build: { format: 'file', inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !/\/404(\.html)?$/.test(page),
      serialize: (item) => {
        const url = item.url === `${site}/` ? item.url : `${item.url.replace(/\/$/, '')}.html`;
        const legal = /(politica-privacidad|terminos-condiciones|libro-de-reclamaciones)/.test(url);
        const service = /(tesis|suficiencia|articulos|otros_servicios)/.test(url) && !url.includes('/blog/');
        return { ...item, url, lastmod: new Date().toISOString(), changefreq: legal ? 'yearly' : 'monthly', priority: url === `${site}/` ? 1 : service ? 0.9 : legal ? 0.3 : 0.7 };
      },
    }),
  ],
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "font-src 'self'",
        "img-src 'self' data: https:",
        "media-src 'self'",
        "connect-src 'self' https:",
        "frame-src https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://td.doubleclick.net https://www.facebook.com",
        "form-action 'self' https://formsubmit.co",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        resources: ["'self'", "'unsafe-eval'", 'https://www.googletagmanager.com'],
        strictDynamic: true,
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Literata',
      cssVariable: '--font-literata',
      fallbacks: ['Georgia', 'serif'],
      optimizedFallbacks: true,
      display: 'swap',
      options: {
        variants: [
          { src: [`${literata}-normal.woff2`], weight: '400 600', style: 'normal' },
          { src: [`${literata}-italic.woff2`], weight: '400 600', style: 'italic' },
        ],
      },
    },
  ],
});
