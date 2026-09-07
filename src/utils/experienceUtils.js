export const experience = [
  {
    id: 1,
    title: 'Computer Engineering Student',
    image: 'https://thumb.wikimedia.org/wikipedia/th/thumb/7/76/Seal_of_King_Mongkut%27s_University_of_Technology_Thonburi.svg/500px-Seal_of_King_Mongkut%27s_University_of_Technology_Thonburi.svg.png?utm_source=th.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    company: 'King Mongkut\'s University of Technology Thonburi (KMUTT)',
    location: 'Bangkok, Thailand',
    period: 'July 2022 - June 2026',
    type: 'education',
    description:
      'Bachelor of Engineering in Computer Engineering with hands-on experience in software development, web applications, databases, data science, and machine learning.',
    achievements: [
      'Graduated with a GPA of 3.54/4.00 and Second Class Honors',
      'Developed web applications using React, Node.js, and database technologies',
      'Completed projects involving software engineering, machine learning, and data analysis',
      'Collaborated on team-based software engineering projects'
    ],
    technologies: [
      'Python',
      'C',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'SQL',
      'NoSQL',
      'Machine Learning'
    ],
    current: false,
    highlight: 'GPA 3.54/4.00 — Second Class Honors'
  },
  {
    id: 2,
    title: 'Data Science (Intern)',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/1668395583399-62f325874d874d2d318b1357.png',
    company: 'iBotnoi Co, Ltd.',
    location: 'Bangkok, Thailand',
    period: 'June 2025 - August 2025',
    type: 'work',
    description:
      'Worked on data analysis and machine learning for audio classification and noise-related problems. Built and evaluated machine learning models using Python and popular data science libraries.',
    achievements: [
      'Developed machine learning models for audio and noise classification',
      'Achieved approximately 80% classification accuracy',
      'Performed data preprocessing, analysis, visualization, and model evaluation',
      'Implemented Google Tag Manager for data tracking and analysis'
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'Matplotlib',
      'Seaborn',
      'Google Tag Manager'
    ],
    current: false,
    highlight: 'Developed an audio classification model achieving approximately 80% accuracy'
  },
  {
    id: 3,
    title: 'Software QA (Part-time)',
    company: 'SCB Techhub',
    image: 'https://cdn.brandfetch.io/id-4KsOaH3/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    location: 'Bangkok, Thailand',
    period: 'April 2025 - May 2026',
    type: 'work',
    description:
      'Worked on software quality assurance and test automation for data-related applications. Developed automated testing workflows and internal tools to improve testing efficiency and data validation.',
    achievements: [
      'Developed automated testing workflows using Python, Selenium, Robot Framework, and Playwright',
      'Built a PyQt-based GUI tool to simplify and automate testing workflows',
      'Worked with SQL and Databricks to validate data integrity and identify data-related issues',
      'Collaborated with developers to investigate defects and improve software quality'
    ],
    technologies: [
      'Python',
      'Selenium',
      'Robot Framework',
      'Playwright',
      'SQL',
      'Databricks',
      'PyQt'
    ],
    current: false,
    highlight: 'Built automated testing tools and workflows to improve QA efficiency'
  },
  {
    id: 4,
    title: 'Student ESL Program',
    company: 'QQ English',
    image: 'https://cdn.brandfetch.io/idb-uKsZpW/w/500/h/500/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    location: 'Cebu, Philippines',
    period: 'June 2026 - August 2026',
    type: 'education',
    description:
      'Completed an English as a Second Language program focused on improving English communication, listening, and speaking skills.',
    achievements: [
      'Completed 240 hours of English language training',
      'Achieved a TOEIC score of 765',
      'Practiced English communication in an international learning environment'
    ],
    technologies: [
      'English',
      'Communication',
      'Listening',
      'Speaking'
    ],
    current: false,
    highlight: 'TOEIC 765'
  },
].reverse();

export const sumExperienceYears = () => {
  const totalMonths = experience.reduce((acc, exp) => {
    if (exp.type !== 'work') return acc;
    const [startMonth, startYear] = exp.period.split(' - ')[0].split(' ');
    const [endMonth, endYear] = exp.period.split(' - ')[1].split(' ');
    const startDate = new Date(`${startMonth} 1, ${startYear}`);
    const endDate = exp.current ? new Date() : new Date(`${endMonth} 1, ${endYear}`);
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    return acc + months;
  }, 0);
  return (totalMonths / 12).toFixed(1);
};