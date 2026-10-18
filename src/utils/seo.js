export const seo = {
  url: 'https://akushu2357.github.io/portfolio/',
  name: 'Worapat Chuchoed',
  title: 'Worapat Chuchoed (Tang) | Software Developer',
  description:
    'Worapat Chuchoed (Tang), software developer building APIs and web applications with Python, FastAPI, Node.js, React, PostgreSQL, and MongoDB.',
  image: 'https://akushu2357.github.io/portfolio/social/profile.jpg',
  imageAlt: 'Worapat Chuchoed (Tang), software developer',
  sameAs: [
    'https://github.com/Akushu2357',
    'https://www.linkedin.com/in/worapat-chuchoed-9352b929b/',
  ],
};
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': seo.url + '#website',
      url: seo.url,
      name: seo.title,
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': seo.url + '#webpage',
      url: seo.url,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en',
      isPartOf: { '@id': seo.url + '#website' },
      mainEntity: { '@id': seo.url + '#person' },
    },
    {
      '@type': 'Person',
      '@id': seo.url + '#person',
      name: seo.name,
      alternateName: 'Tang',
      url: seo.url,
      image: seo.image,
      sameAs: seo.sameAs,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'King Mongkut’s University of Technology Thonburi',
      },
      knowsAbout: [
        'Python',
        'JavaScript',
        'FastAPI',
        'Node.js',
        'Express.js',
        'React',
        'PostgreSQL',
        'MongoDB',
        'API development',
        'Software testing',
      ],
    },
  ],
};
