import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database, PenTool as Tool, Filter, X } from 'lucide-react';

const ProjectsSkills = () => {
  const [selectedProject, setSelectedProject] = useState(0); // Start with first project selected
  const [selectedSkillFilter, setSelectedSkillFilter] = useState('all');
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      skills: [
        { name: 'React', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Node.js', category: 'Backend', icon: <Database size={20} /> },
        { name: 'MongoDB', category: 'Database', icon: <Database size={20} /> },
        { name: 'Stripe API', category: 'Integration', icon: <Tool size={20} /> },
        { name: 'JWT Auth', category: 'Security', icon: <Tool size={20} /> },
        { name: 'Responsive Design', category: 'Frontend', icon: <Palette size={20} /> },
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
        { name: 'React', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'TypeScript', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Socket.io', category: 'Real-time', icon: <Tool size={20} /> },
        { name: 'PostgreSQL', category: 'Database', icon: <Database size={20} /> },
        { name: 'Drag & Drop', category: 'UX', icon: <Palette size={20} /> },
        { name: 'Team Collaboration', category: 'Features', icon: <Tool size={20} /> },
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
        { name: 'React', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'API Integration', category: 'Backend', icon: <Tool size={20} /> },
        { name: 'Chart.js', category: 'Visualization', icon: <Palette size={20} /> },
        { name: 'Tailwind CSS', category: 'Styling', icon: <Palette size={20} /> },
        { name: 'Geolocation', category: 'Features', icon: <Tool size={20} /> },
        { name: 'Data Visualization', category: 'Analytics', icon: <Palette size={20} /> },
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
        { name: 'Next.js', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Python', category: 'Backend', icon: <Database size={20} /> },
        { name: 'Redis', category: 'Caching', icon: <Database size={20} /> },
        { name: 'AWS', category: 'Cloud', icon: <Tool size={20} /> },
        { name: 'Social APIs', category: 'Integration', icon: <Tool size={20} /> },
        { name: 'Analytics', category: 'Data', icon: <Palette size={20} /> },
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
        { name: 'React', category: 'Frontend', icon: <Code size={20} /> },
        { name: 'Python', category: 'Backend', icon: <Database size={20} /> },
        { name: 'OpenAI API', category: 'AI/ML', icon: <Tool size={20} /> },
        { name: 'WebSocket', category: 'Real-time', icon: <Tool size={20} /> },
        { name: 'NLP', category: 'AI/ML', icon: <Tool size={20} /> },
        { name: 'Chat UI/UX', category: 'Design', icon: <Palette size={20} /> },
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
        { name: 'React Native', category: 'Mobile', icon: <Code size={20} /> },
        { name: 'Firebase', category: 'Backend', icon: <Database size={20} /> },
        { name: 'Chart.js', category: 'Visualization', icon: <Palette size={20} /> },
        { name: 'Health APIs', category: 'Integration', icon: <Tool size={20} /> },
        { name: 'Mobile UX', category: 'Design', icon: <Palette size={20} /> },
        { name: 'Data Analytics', category: 'Analytics', icon: <Tool size={20} /> },
      ]
    },
  ];

  // Get all unique skills from projects
  const allSkills = [...new Set(projects.flatMap(project => 
    project.skills.map(skill => skill.name)
  ))].sort();

  // Filter projects based on selected skill
  const filteredProjects = selectedSkillFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.skills.some(skill => skill.name === selectedSkillFilter)
      );

  const handleProjectHover = (index) => {
    // Adjust index based on filtered projects
    const actualIndex = projects.findIndex(p => p === filteredProjects[index]);
    setSelectedProject(actualIndex);
  };

  const handleProjectClick = (index) => {
    // Adjust index based on filtered projects
    const actualIndex = projects.findIndex(p => p === filteredProjects[index]);
    setSelectedProject(actualIndex);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'Backend': 'bg-blue-100 text-blue-700 border-blue-200',
      'Database': 'bg-slate-100 text-slate-700 border-slate-200',
      'Integration': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'Security': 'bg-red-100 text-red-700 border-red-200',
      'UX': 'bg-rose-100 text-rose-700 border-rose-200',
      'Real-time': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Features': 'bg-purple-100 text-purple-700 border-purple-200',
      'Visualization': 'bg-teal-100 text-teal-700 border-teal-200',
      'Styling': 'bg-sky-100 text-sky-700 border-sky-200',
      'Analytics': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Cloud': 'bg-gray-100 text-gray-700 border-gray-200',
      'Caching': 'bg-violet-100 text-violet-700 border-violet-200',
      'Data': 'bg-orange-100 text-orange-700 border-orange-200',
      'AI/ML': 'bg-amber-100 text-amber-700 border-amber-200',
      'Design': 'bg-pink-100 text-pink-700 border-pink-200',
      'Mobile': 'bg-green-100 text-green-700 border-green-200',
    };
    return colors[category] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Projects & Skills
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore my projects and discover the skills behind each one. Filter by skills to find projects that match your interests.
          </p>
        </div>

        {/* Skills Filter Section */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSkillsFilter(!showSkillsFilter)}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all duration-300"
              >
                <Filter size={16} />
                <span className="font-medium">Filter by Skills</span>
              </button>
              
              {selectedSkillFilter !== 'all' && (
                <button
                  onClick={() => setSelectedSkillFilter('all')}
                  className="flex items-center space-x-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm hover:bg-cyan-200 transition-colors duration-300"
                >
                  <X size={14} />
                  <span>Clear Filter</span>
                </button>
              )}
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Skills Filter Options */}
          {showSkillsFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Filter by Skills:</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-hide">
                <button
                  onClick={() => {
                    setSelectedSkillFilter('all');
                    setShowSkillsFilter(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedSkillFilter === 'all'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  All Skills
                </button>
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      setSelectedSkillFilter(skill);
                      setShowSkillsFilter(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedSkillFilter === skill
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Projects Grid */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">
              Projects
            </h3>
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] overflow-y-auto scrollbar-hide p-2 sm:p-3 lg:p-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`card overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedProject === index 
                      ? 'ring-2 ring-cyan-500 shadow-2xl scale-[1.02]' 
                      : 'hover:shadow-xl hover:scale-[1.01]'
                  }`}
                  onMouseEnter={() => handleProjectHover(index)}
                  onClick={() => handleProjectClick(index)}
                >
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} className="text-slate-700" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} className="text-slate-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs sm:text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-slate-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  No projects found
                </h3>
                <p className="text-slate-600 mb-4">
                  No projects match the selected skill filter.
                </p>
                <button
                  onClick={() => setSelectedSkillFilter('all')}
                  className="btn-primary"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>

          {/* Skills Panel */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-6 lg:p-8 max-h-[70vh] flex flex-col">
            <div className="animate-fade-in flex-1 flex flex-col min-h-0">
              <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Code className="text-cyan-600" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 truncate">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">Skills & Technologies</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto scrollbar-hide min-h-0">
                {projects[selectedProject].skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 cursor-pointer ${
                      selectedSkillFilter === skill.name ? 'ring-2 ring-cyan-500' : ''
                    }`}
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    onClick={() => setSelectedSkillFilter(skill.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-slate-600 flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                            {skill.name}
                          </span>
                          <div className={`inline-block px-2 py-1 text-xs rounded-full border flex-shrink-0 ${
                            selectedSkillFilter === skill.name 
                              ? 'bg-cyan-600 text-white border-cyan-600' 
                              : getCategoryColor(skill.category)
                          }`}>
                            {skill.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg flex-shrink-0">
                <h4 className="font-semibold text-cyan-900 mb-2 text-sm sm:text-base">
                  {selectedSkillFilter !== 'all' ? `Projects using ${selectedSkillFilter}` : 'Project Highlights'}
                </h4>
                <p className="text-cyan-800 text-xs sm:text-sm leading-relaxed">
                  {projects[selectedProject].description}
                </p>
                {selectedSkillFilter !== 'all' && (
                  <div className="mt-3">
                    <button
                      onClick={() => setSelectedSkillFilter('all')}
                      className="text-xs text-cyan-700 hover:text-cyan-800 font-medium"
                    >
                      View all projects →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkills;