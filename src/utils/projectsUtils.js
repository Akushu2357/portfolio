export const projects = [
    {
        title: 'Vocabulary Crossword Puzzles',
        description: 'A web site for learning new vocabulary words through interactive crossword puzzles, with a focus on enhancing language skills and retention.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Scrabble_2015.jpg/500px-Scrabble_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
        liveUrl: 'https://vocabulary-crossword-puzzles.vercel.app/',
        // githubUrl: 'https://github.com/Akushu2357/Vocabulary-Crossword-Puzzles',
        skills: [
            { name: 'TypeScript', category: 'Frontend'},
            { name: 'React', category: 'Frontend'},
            { name: 'Next.js', category: 'Frontend'},
            { name: 'Tailwind CSS', category: 'Styling'},
            { name: 'Responsive Design', category: 'Frontend'},
            { name: 'Node.js', category: 'Backend'},
            { name: 'PostgreSQL', category: 'Database' },
            { name: 'Supabase', category: 'Database' },
            { name: 'Vercel', category: 'Deployment' },
            { name: 'Integration API', category: 'Backend' },
            { name: 'OAuth 2.0', category: 'Security' },
        ],
        completed: true,
    },
];

export const countCompletedProjects = () => {
    return projects.filter(project => project.completed).length;
}