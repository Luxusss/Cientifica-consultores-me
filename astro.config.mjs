// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

const literata = './node_modules/@fontsource-variable/literata/files/literata-latin-opsz';

export default defineConfig({
  site: 'https://cientificaconsultores.com',
  // Genera tesis.html, nosotros.html…: las mismas URLs que hoy tiene el sitio.
  build: { format: 'file' },
  devToolbar: { enabled: false },
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
