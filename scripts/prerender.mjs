import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';
import { seo } from '../src/utils/seo.js';
const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
if (!template.includes('<div id="root"></div>'))
  throw Error('Missing empty root for pre-rendering');
await writeFile(
  path,
  template.replace(
    '<div id="root"></div>',
    () => '<div id="root">' + render() + '</div>',
  ),
);
await writeFile(
  new URL('../dist/sitemap.xml', import.meta.url),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' +
    seo.url +
    '</loc></url></urlset>\n',
);
await copyFile(
  new URL('../404.html', import.meta.url),
  new URL('../dist/404.html', import.meta.url),
);
console.log('Pre-rendered portfolio content, sitemap, and 404 page.');
