import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const literata = './node_modules/@fontsource-variable/literata/files/literata-latin-opsz';
const site = 'https://cientificaconsultores.com';

export default defineConfig({
  site,
  build: { format: 'file', inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !/\/(404|libro-de-reclamaciones)(\.html)?$/.test(page),
      serialize: (item) => ({ ...item, url: item.url === `${site}/` ? item.url : `${item.url.replace(/\/$/, '')}.html` }),
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
          { src: [`${literata}-normal.woff2`], weight: '200 900', style: 'normal' },
          { src: [`${literata}-italic.woff2`], weight: '200 900', style: 'italic' },
        ],
      },
    },
  ],
});
