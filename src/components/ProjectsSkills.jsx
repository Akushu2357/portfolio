import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database, PenTool as Tool } from 'lucide-react';

const ProjectsSkills = () => {
  const [selectedProject, setSelectedProject] = useState(0); // Start with first project selected

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React', level: 95, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Node.js', level: 85, category: 'Backend', icon: <Database size={20} /> },
        { name: 'MongoDB', level: 78, category: 'Database', icon: <Database size={20} /> },
        { name: 'Stripe API', level: 82, category: 'Integration', icon: <Tool size={20} /> },
        { name: 'JWT Auth', level: 88, category: 'Security', icon: <Tool size={20} /> },
        { name: 'Responsive Design', level: 92, category: 'Frontend', icon: <Palette size={20} /> },
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React', level: 95, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'TypeScript', level: 90, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Socket.io', level: 85, category: 'Real-time', icon: <Tool size={20} /> },
        { name: 'PostgreSQL', level: 82, category: 'Database', icon: <Database size={20} /> },
        { name: 'Drag & Drop', level: 88, category: 'UX', icon: <Palette size={20} /> },
        { name: 'Team Collaboration', level: 85, category: 'Features', icon: <Tool size={20} /> },
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React', level: 95, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'API Integration', level: 90, category: 'Backend', icon: <Tool size={20} /> },
        { name: 'Chart.js', level: 85, category: 'Visualization', icon: <Palette size={20} /> },
        { name: 'Tailwind CSS', level: 92, category: 'Styling', icon: <Palette size={20} /> },
        { name: 'Geolocation', level: 80, category: 'Features', icon: <Tool size={20} /> },
        { name: 'Data Visualization', level: 88, category: 'Analytics', icon: <Palette size={20} /> },
      ]
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management platform with analytics, scheduling, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Python', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'Next.js', level: 88, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Python', level: 80, category: 'Backend', icon: <Database size={20} /> },
        { name: 'Redis', level: 75, category: 'Caching', icon: <Database size={20} /> },
        { name: 'AWS', level: 70, category: 'Cloud', icon: <Tool size={20} /> },
        { name: 'Social APIs', level: 85, category: 'Integration', icon: <Tool size={20} /> },
        { name: 'Analytics', level: 82, category: 'Data', icon: <Palette size={20} /> },
      ]
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chat application with AI-powered responses, real-time messaging, and advanced natural language processing.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'OpenAI', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React', level: 95, category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Python', level: 80, category: 'Backend', icon: <Database size={20} /> },
        { name: 'OpenAI API', level: 85, category: 'AI/ML', icon: <Tool size={20} /> },
        { name: 'WebSocket', level: 88, category: 'Real-time', icon: <Tool size={20} /> },
        { name: 'NLP', level: 75, category: 'AI/ML', icon: <Tool size={20} /> },
        { name: 'Chat UI/UX', level: 90, category: 'Design', icon: <Palette size={20} /> },
      ]
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness application with workout tracking, nutrition monitoring, and progress analytics.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Health APIs'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React Native', level: 85, category: 'Mobile', icon: <Code size={20} /> },
        { name: 'Firebase', level: 88, category: 'Backend', icon: <Database size={20} /> },
        { name: 'Chart.js', level: 85, category: 'Visualization', icon: <Palette size={20} /> },
        { name: 'Health APIs', level: 80, category: 'Integration', icon: <Tool size={20} /> },
        { name: 'Mobile UX', level: 90, category: 'Design', icon: <Palette size={20} /> },
        { name: 'Data Analytics', level: 82, category: 'Analytics', icon: <Tool size={20} /> },
      ]
    },
  ];

  const handleProjectHover = (index) => {
    setSelectedProject(index);
  };

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'bg-blue-100 text-blue-600 border-blue-200',
      'Backend': 'bg-green-100 text-green-600 border-green-200',
      'Database': 'bg-purple-100 text-purple-600 border-purple-200',
      'Integration': 'bg-orange-100 text-orange-600 border-orange-200',
      'Security': 'bg-red-100 text-red-600 border-red-200',
      'UX': 'bg-pink-100 text-pink-600 border-pink-200',
      'Real-time': 'bg-yellow-100 text-yellow-600 border-yellow-200',
      'Features': 'bg-indigo-100 text-indigo-600 border-indigo-200',
      'Visualization': 'bg-teal-100 text-teal-600 border-teal-200',
      'Styling': 'bg-cyan-100 text-cyan-600 border-cyan-200',
      'Analytics': 'bg-emerald-100 text-emerald-600 border-emerald-200',
      'Cloud': 'bg-slate-100 text-slate-600 border-slate-200',
      'Caching': 'bg-violet-100 text-violet-600 border-violet-200',
      'Data': 'bg-rose-100 text-rose-600 border-rose-200',
      'AI/ML': 'bg-amber-100 text-amber-600 border-amber-200',
      'Design': 'bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200',
      'Mobile': 'bg-lime-100 text-lime-600 border-lime-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  return (
    <section id="projects" className="min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="container-max section-padding h-full flex flex-col">
        <div className="text-center mb-8 sm:mb-12 flex-shrink-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Projects & Skills
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore my projects and discover the skills behind each one. Click or hover over any project to see the technologies and expertise involved.
          </p>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 h-full">
            {/* Projects Grid */}
            <div className="overflow-y-auto scrollbar-hide max-h-[70vh] lg:max-h-full">
              <div className="grid gap-4 sm:gap-6 pr-2 lg:pr-4">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`card overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedProject === index 
                        ? 'ring-2 ring-blue-500 shadow-2xl scale-[1.02]' 
                        : 'hover:shadow-xl hover:scale-[1.01]'
                    }`}
                    onMouseEnter={() => handleProjectHover(index)}
                    onClick={() => handleProjectClick(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-24 sm:h-32 lg:h-40 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="flex space-x-4">
                          <a
                            href={project.liveUrl}
                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} className="text-gray-700" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} className="text-gray-700" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4 lg:p-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Panel */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-y-auto scrollbar-hide max-h-[70vh] lg:max-h-full">
              <div className="animate-fade-in">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">Skills & Technologies</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {projects[selectedProject].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <div className="text-gray-600 flex-shrink-0">
                            {skill.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                {skill.name}
                              </span>
                              <div className={`inline-block px-2 py-1 text-xs rounded-full border flex-shrink-0 ${getCategoryColor(skill.category)}`}>
                                {skill.category}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0 ml-2">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                    Project Highlights
                  </h4>
                  <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkills;