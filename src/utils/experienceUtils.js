export const experiences = [
    {
      id: 1,
      title: 'Computer Engineering Student',
      company: 'King Mongkut\'s University of Technology Thonburi (KMUTT)',
      location: 'Bangkok, Thailand',
      period: 'July 2022 - June 2026',
      type: 'education',
      description: 'Pursuing a degree in Computer Engineering with a focus on software development, algorithms, and data structures. Engaged in various projects and research related to web development and machine learning.',
      achievements: [
        'Maintained a GPA of 3.53/4.0 with Second Class Honors',
        'Completed multiple projects in web development and data science',
        'Active member of the university\'s student council'
      ],
      technologies: ['Python', 'C', 'JavaScript', 'React', 'Node.js', 'SQL', 'NoSQL', 'Machine Learning'],
      current: false
    },
    {
      id: 2,
      title: 'Data Science (Intern)',
      company: 'iBotnoi Co, Ltd.',
      location: 'Bangkok, Thailand',
      period: 'June 2025 - August 2025',
      type: 'work',
      description: 'Worked as a Data Science Intern, focusing on data analysis, visualization, and machine learning model development to classify voice and noise.',
      achievements: [
        'Developed a machine learning model that classified accuracy by 80%',
        'Google Tag Manager implementation for data tracking and analysis',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'CatBoost', 'Matplotlib', 'Seaborn', 'Google Tag Manager'],
      current: false
    },
    {
      id: 3,
      title: 'Software QA (Part-time)',
      company: 'SCB Techhub',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - May 2026',
      type: 'work',
      description: 'Responsible for testing and ensuring data integrity in the system. Collaborated with developers to identify and resolve issues, improving overall software quality. Developed automated testing scripts to streamline the QA process and enhance efficiency with GUI application.',
      achievements: [
        'Improved workflow efficiency by 30% through automated testing',
        'Identified data integrity issues and collaborated with developers to resolve them',
        'Built GUI application for automated testing, reducing manual testing time by 50%'
      ],
      technologies: ['Python', 'Selenium', 'Robot Framework', 'Playwright', 'SQL', 'Databricks', 'GUI Development', 'PyQt'],
      current: false
    },
    {
      id: 4,
      title: 'Student ESL Program',
      company: 'QQ English',
      location: 'Cebu, Philippines',
      period: 'June 2026 - August 2026',
      type: 'education',
      description: 'Participated in an English as a Second Language program to improve communication skills especially for speaking and listening.',
      achievements: [
        'Completed 240 hours of English language training',
        'Gained TOEIC score of 765',
      ],
      technologies: ['English', 'Communication', 'Listening', 'Speaking'],
      current: false
    },
    {
      id: 5,
      title: 'Unemployed',
      company: 'N/A',
      location: 'Bangkok, Thailand',
      period: 'August 2026 - Present',
      type: 'work',
      description: 'Currently seeking new opportunities to apply my skills and knowledge in software development and data science.',
      achievements: [
        'Actively applying for software development and data science roles',
        'Continuing to learn new technologies and improve skills through online courses and personal projects',
      ],
      technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'NoSQL', 'Machine Learning'],
      current: true
    }
  ].reverse();

export const sumExperienceYears = () => {
  const totalMonths = experiences.reduce((acc, exp) => {
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