import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { seo } from '../src/utils/seo.js';
const html = await readFile(
  new URL('../dist/index.html', import.meta.url),
  'utf8',
);
const document = new JSDOM(html, { url: seo.url }).window.document;
assert.equal(document.title, seo.title);
assert.equal(document.documentElement.lang, 'en');
assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
assert.equal(document.querySelector('link[rel="canonical"]').href, seo.url);
assert.equal(
  document.querySelector('meta[name="description"]').content,
  seo.description,
);
assert(
  !document.querySelector('meta[name="robots"]').content.includes('noindex'),
);
assert.equal(
  document.querySelector('meta[property="og:url"]').content,
  seo.url,
);
assert.equal(
  document.querySelector('meta[property="og:image"]').content,
  seo.image,
);
assert.equal(
  document.querySelector('meta[name="twitter:image"]').content,
  seo.image,
);
const data = JSON.parse(
  document.querySelector('script[type="application/ld+json"]').textContent,
);
const person = data['@graph'].find((item) => item['@type'] === 'Person');
assert.equal(person.name, seo.name);
assert.deepEqual(person.sameAs, seo.sameAs);
assert.equal(
  data['@graph'].find((item) => item['@type'] === 'ProfilePage').mainEntity[
    '@id'
  ],
  person['@id'],
);
const main = document.querySelector('#root main');
assert(main, 'Main content must be present without executing JavaScript');
assert.equal(main.querySelectorAll('h1').length, 1);
for (const text of [
  seo.name,
  'Thai Labor Law Chatbot',
  'KOO-KIN',
  'SCB Techhub',
  'Computer Engineering',
  'Certificates',
])
  assert(main.textContent.includes(text), 'Missing pre-rendered text: ' + text);
for (const id of [
  'home',
  'projects',
  'experience',
  'about',
  'certificates',
  'contact',
])
  assert(main.querySelector('#' + id));
assert(!html.includes('/src/assets/'), 'SSR must use production image paths');
for (const node of document.querySelectorAll(
  'img[src],script[src],link[rel="stylesheet"],link[rel="icon"]',
)) {
  const url = new URL(
    node.getAttribute('src') || node.getAttribute('href'),
    seo.url,
  );
  if (url.origin !== new URL(seo.url).origin) continue;
  assert(
    url.pathname.startsWith('/portfolio/'),
    'Asset must use the hosting base: ' + url,
  );
  await access(
    new URL(
      '../dist/' + url.pathname.slice('/portfolio/'.length),
      import.meta.url,
    ),
  );
}
await access(new URL('../dist/social/profile.jpg', import.meta.url));
const sitemap = new JSDOM(
  await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'),
  { contentType: 'text/xml' },
).window.document;
assert.deepEqual(
  [...sitemap.querySelectorAll('loc')].map((node) => node.textContent),
  [seo.url],
);
const missing = new JSDOM(
  await readFile(new URL('../dist/404.html', import.meta.url), 'utf8'),
  { url: seo.url },
).window.document;
assert(
  missing.querySelector('meta[name="robots"]').content.includes('noindex'),
);
assert.equal(missing.querySelector('a').href, seo.url);
console.log(
  'SEO checks passed: static content, metadata, structured data, production assets, sitemap, and 404.',
);
