export const projects = [
  {
    id: 'labor-law',
    title: 'Thai Labor Law Chatbot',
    kind: 'Senior project · Full stack',
    featured: true,
    description:
      'Making Thai labor-law information easier to find and understand through a searchable library and natural-language questions.',
    contributions:
      'I worked on the full-stack application, particularly backend APIs, legal-data processing, database integration, deployment, and automation for collecting legal information.',
    decisions:
      'React provides the interface; FastAPI handles backend requests. PostgreSQL/Supabase stores legal and user data, with vector-based retrieval supplying relevant context to the Typhoon LLM. Python and regex prepare legal documents; Robot Framework automates collection from the Office of the Council of State website.',
    outcome:
      'Our team built a working web application combining a labor-law information library with an AI chatbot. Users can search for information and ask questions in natural language.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Supabase',
      'RAG',
      'Typhoon LLM',
      'Robot Framework',
      'Google Cloud VM',
      'Netlify',
    ],
    completed: true,
  },
  {
    id: 'koo-kin',
    title: 'KOO-KIN',
    kind: 'Team of eight · Full stack',
    featured: true,
    description:
      'A food connection web application designed to help people find others interested in eating together.',
    contributions:
      'As part of an eight-person team, I contributed to frontend and backend development, REST APIs, database integration, requirements definition, and coordination between parts of the team.',
    decisions:
      'React and Tailwind CSS support the frontend, Node.js/Express.js provides REST APIs, and MongoDB stores application data.',
    outcome:
      'Our team produced a full-stack web application. I gained practical experience translating requirements and UI designs into working interfaces, APIs, and database functionality. A key lesson was keeping requirements and UI designs synchronized during team development.',
    technologies: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    githubUrl: 'https://github.com/SOtwoX1/Project-SE',
    completed: true,
  },
  {
    id: 'databricks',
    title: 'Databricks validation tools',
    kind: 'Professional work · Automation',
    description:
      'Python dataset comparisons and Qt GUI tools supporting repeatable data validation and repetitive Databricks operations.',
    contributions:
      'I wrote automated dataset comparisons and built Python/Qt tools for validation workflows, including Databricks UI file uploads and execution.',
    decisions:
      'Python, SQL/PySpark, and Databricks support data validation; Robot Framework, Selenium, and Playwright support testing and UI automation.',
    outcome:
      'Reduced repetitive manual verification and made validation workflows more repeatable. Internal work; no public source or demo is provided.',
    technologies: [
      'Python',
      'Qt',
      'SQL',
      'PySpark',
      'Databricks',
      'Robot Framework',
      'Selenium',
      'Playwright',
    ],
    completed: true,
  },
  {
    id: 'dek-vocab',
    title: 'dek-vocab',
    kind: 'Personal project · In progress',
    description:
      'An interactive vocabulary learning project with crossword puzzles generated from English vocabulary data.',
    contributions:
      'Developing a vocabulary learning application and exploring frontend, database, and API integration.',
    decisions:
      'Uses TypeScript, React, Tailwind CSS, and PostgreSQL/Supabase, with Cloudflare deployment tooling.',
    outcome:
      'Work in progress; included as an example of ongoing learning rather than a completed production system.',
    technologies: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Cloudflare',
    ],
    completed: false,
  },
  {
    id: 'portfolio',
    title: 'Personal portfolio',
    kind: 'Personal project · Web development',
    description:
      'A responsive portfolio connecting software engineering skills to project and professional experience.',
    contributions:
      'Designed and developed a single-page application to present projects, experience, and credentials.',
    decisions:
      'React and Vite with Tailwind CSS and static hosting through GitHub Pages.',
    outcome: 'A central place to explore my work and contact me.',
    technologies: [
      'JavaScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'GitHub Pages',
    ],
    githubUrl: 'https://github.com/Akushu2357/portfolio',
    liveUrl: 'https://akushu2357.github.io/portfolio/',
    completed: true,
  },
];
export const countCompletedProjects = () =>
  projects.filter((project) => project.completed).length;
export const getImageUrl = (path) =>
  /^https?:\/\//.test(path || '')
    ? path
    : import.meta.env.BASE_URL +
      (path || 'projects/default.jpg').replace(/^(\.\.\/|\/)+/, '');
export const filterProjects = (items, query) => {
  const term = query.trim().toLowerCase();
  return items.filter((project) =>
    [project.title, project.description, ...project.technologies]
      .join(' ')
      .toLowerCase()
      .includes(term),
  );
};
