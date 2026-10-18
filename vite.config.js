import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { seo, structuredData } from './src/utils/seo.js';
const meta = (attribute, key, content) => ({
  tag: 'meta',
  attrs: { [attribute]: key, content },
  injectTo: 'head',
});
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-seo',
      transformIndexHtml() {
        return [
          { tag: 'title', children: seo.title, injectTo: 'head' },
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: seo.url },
            injectTo: 'head',
          },
          {
            tag: 'link',
            attrs: {
              rel: 'icon',
              type: 'image/svg+xml',
              href: '/portfolio/favicon.svg',
            },
            injectTo: 'head',
          },
          meta('name', 'description', seo.description),
          meta('name', 'author', seo.name),
          meta('name', 'robots', 'index, follow'),
          meta('property', 'og:type', 'website'),
          meta('property', 'og:url', seo.url),
          meta('property', 'og:title', seo.title),
          meta('property', 'og:description', seo.description),
          meta('property', 'og:site_name', 'Worapat Chuchoed Portfolio'),
          meta('property', 'og:locale', 'en_US'),
          meta('property', 'og:image', seo.image),
          meta('property', 'og:image:alt', seo.imageAlt),
          meta('name', 'twitter:card', 'summary'),
          meta('name', 'twitter:title', seo.title),
          meta('name', 'twitter:description', seo.description),
          meta('name', 'twitter:image', seo.image),
          meta('name', 'twitter:image:alt', seo.imageAlt),
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
            injectTo: 'head',
          },
        ];
      },
    },
  ],
  base: '/portfolio/',
});
