export const experience = [
    {
      id: 1,
      title: 'Computer Engineering Student',
      image: 'https://thumb.wikimedia.org/wikipedia/th/thumb/7/76/Seal_of_King_Mongkut%27s_University_of_Technology_Thonburi.svg/500px-Seal_of_King_Mongkut%27s_University_of_Technology_Thonburi.svg.png?utm_source=th.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
      company: 'King Mongkut\'s University of Technology Thonburi (KMUTT)',
      location: 'Bangkok, Thailand',
      period: 'July 2022 - June 2026',
      type: 'education',
      description: 'Pursuing a degree in Computer Engineering with a focus on software development, algorithms, and data structures. Engaged in various projects and research related to web development and machine learning.',
      achievements: [
        'Maintained a GPA of 3.54/4.00 with Second Class Honors',
        'Completed multiple projects in web development and data science',
        'Active member of the university\'s student council'
      ],
      technologies: ['Python', 'C', 'JavaScript', 'React', 'Node.js', 'SQL', 'NoSQL', 'Machine Learning'],
      current: false,
      highlight: 'GPA of 3.54/4.00 with Second Class Honors'
    },
    {
      id: 2,
      title: 'Data Science (Intern)',
      image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/1668395583399-62f325874d874d2d318b1357.png',
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
      current: false,
      highlight: 'Developed a machine learning model that classified accuracy by 80%'
    },
    {
      id: 3,
      title: 'Software QA (Part-time)',
      company: 'SCB Techhub',
      image: 'https://cdn.brandfetch.io/id-4KsOaH3/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
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
      current: false,
      highlight: 'Improved workflow efficiency by 30% through automated testing'
    },
    {
      id: 4,
      title: 'Student ESL Program',
      company: 'QQ English',
      image: 'https://cdn.brandfetch.io/idb-uKsZpW/w/500/h/500/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
      location: 'Cebu, Philippines',
      period: 'June 2026 - August 2026',
      type: 'education',
      description: 'Participated in an English as a Second Language program to improve communication skills especially for speaking and listening.',
      achievements: [
        'Completed 240 hours of English language training',
        'Gained TOEIC score of 765',
      ],
      technologies: ['English', 'Communication', 'Listening', 'Speaking'],
      current: false,
      highlight: 'Gained TOEIC score of 765'
    },
    {
      id: 5,
      title: 'Unemployed',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      company: 'N/A',
      location: 'Bangkok, Thailand',
      period: 'August 2026 - Present',
      type: 'N/A',
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