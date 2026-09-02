import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  PenTool,
  Wrench,
  X,
  TrendingUp,
  Search,
  Tag,
  Brain,
  Cpu,
  Eye,
  Code,
  Server,
  Database,
  Plug,
  Shield,
  Layout,
  Zap,
  Layers,
  PieChart,
  Palette,
  BarChart3,
  Cloud,
  HardDrive,
  Table,
  Bot,
  Smartphone,
  Rocket,
} from 'lucide-react';
import { projects } from '../utils/projectsUtils';

const ProjectsSkills = () => {
  const [selectedProject, setSelectedProject] = useState(0); // Start with first project selected
  const [selectedSkillFilters, setSelectedSkillFilters] = useState([]);
  const [selectedTechFilter, setSelectedTechFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [showTechFilter, setShowTechFilter] = useState(false);

  const categoryIconMap = {
    Frontend: [Code, "#0e7490"],
    Backend: [Server, "#3b82f6"],
    Database: [Database, "#6b7280"],
    Integration: [Plug, "#8b5cf6"],
    Security: [Shield, "#ef4444"],
    UX: [Layout, "#ec4899"],
    'Real-time': [Zap, "#f59e0b"],
    Features: [Layers, "#8b5cf6"],
    Visualization: [PieChart, "#10b981"],
    Styling: [Palette, "#8b5cf6"],
    Analytics: [BarChart3, "#3b82f6"],
    Cloud: [Cloud, "#6b7280"],
    Caching: [HardDrive, "#6b7280"],
    Data: [Table, "#6b7280"],
    'AI/ML': [Bot, "#f59e0b"],
    Design: [Palette, "#8b5cf6"],
    Mobile: [Smartphone, "#10b981"],
    Deployment: [Rocket, "#f59e0b"],
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
      'Deployment': 'bg-lime-100 text-lime-700 border-lime-200',
    };
    return colors[category] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const groupedSkills = (project) => project.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = { skills: [] };
      const [Icon, color] = categoryIconMap[skill.category] || [Code, "#6b7280"];
      acc[skill.category].icon = <Icon size={20} color={color} />;
    }
    acc[skill.category].skills.push(skill.name);
    return acc;
  }, {});

  // Get all unique skills from projects
  const allSkills = [...new Set(projects.flatMap(project =>
    project.skills.map(skill => skill.name)
  ))].sort();

  const allTechnologies = [...new Set(projects.flatMap(project =>
    project.technologies
  ))].sort();

  // Filter projects based on multiple criteria
  const filteredProjects = projects.filter(project => {
    // Search filter
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.skills.some(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Skills filter (multiple selection)
    const matchesSkills = selectedSkillFilters.length === 0 ||
      selectedSkillFilters.every(skillName =>
        project.skills.some(skill => skill.name === skillName)
      );

    // Technology filter
    const matchesTech = selectedTechFilter === 'all' ||
      project.technologies.includes(selectedTechFilter);

    return matchesSearch && matchesSkills && matchesTech;
  });

  const handleSkillToggle = (skillName) => {
    setSelectedSkillFilters(prev =>
      prev.includes(skillName)
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };

  const clearAllFilters = () => {
    setSelectedSkillFilters([]);
    setSelectedTechFilter('all');
    setSearchQuery('');
    setShowSkillsFilter(false);
    setShowTechFilter(false);
  };

  const hasActiveFilters = selectedSkillFilters.length > 0 ||
    selectedTechFilter !== 'all' ||
    searchQuery !== '';

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

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-teal-50">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Projects & Skills
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore my projects and discover the skills behind each one. Use search and filters to find projects that match your interests.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 lg:mb-12">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, skills, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Skills Filter */}
              <button
                onClick={() => setShowSkillsFilter(!showSkillsFilter)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${selectedSkillFilters.length > 0
                  ? 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                  : 'bg-white/90 hover:bg-white'
                  }`}
              >
                <Tag size={16} />
                <span className="font-medium">
                  Skills {selectedSkillFilters.length > 0 && `(${selectedSkillFilters.length})`}
                </span>
              </button>

              {/* Technology Filter */}
              <button
                onClick={() => setShowTechFilter(!showTechFilter)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${selectedTechFilter !== 'all'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white/90 hover:bg-white'
                  }`}
              >
                <Code size={16} />
                <span className="font-medium">Technology</span>
              </button>

              {/* Clear All Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors duration-300"
                >
                  <X size={14} />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Active filters:</span>

                {searchQuery && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Search: "{searchQuery}"
                  </span>
                )}

                {selectedSkillFilters.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full flex items-center space-x-1">
                    <span>{skill}</span>
                    <button onClick={() => handleSkillToggle(skill)}>
                      <X size={12} />
                    </button>
                  </span>
                ))}

                {selectedTechFilter !== 'all' && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full flex items-center space-x-1">
                    <span>Tech: {selectedTechFilter}</span>
                    <button onClick={() => setSelectedTechFilter('all')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Filter Dropdowns */}
          {showSkillsFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Select Skills (multiple selection):</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-hide">
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${selectedSkillFilters.includes(skill)
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

          {showTechFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Filter by Technology:</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-hide">
                <button
                  onClick={() => {
                    setSelectedTechFilter('all');
                    setShowTechFilter(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${selectedTechFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                >
                  All Technologies
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTechFilter(tech);
                      setShowTechFilter(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${selectedTechFilter === tech
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                      }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Projects Grid */}
          <div className="bg-white/90 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">
              Projects
            </h3>
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] overflow-y-auto scrollbar-hide p-2 sm:p-3 lg:p-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`card overflow-hidden cursor-pointer transition-all duration-300 ${selectedProject === index
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
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} className="text-slate-700" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} className="text-slate-700" />
                          </a>
                        )}
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
                  onClick={clearAllFilters}
                  className="btn-primary"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>

          {/* Skills Panel */}
          <div className="bg-white/90 rounded-xl p-4 sm:p-6 lg:p-8 max-h-[70vh] flex flex-col">
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
                {Object.entries(groupedSkills(projects[selectedProject].skills)).map(([category, { skills, icon }]) => (
                  <div
                    key={category}
                    className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:border-slate-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={"flex-shrink-0 p-2 rounded-lg " + getCategoryColor(category)}>
                        {icon}
                      </div>
                      <div className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                        {category}
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 ml-3 flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <div
                            key={skill}
                            className={getCategoryColor(category) + " bg-opacity-50 text-xs sm:text-sm font-medium px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 hover:bg-opacity-100 " + (selectedSkillFilters.includes(skill) ? 'ring-2 ring-cyan-500' : '')}
                            onClick={() => handleSkillToggle(skill)}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg flex-shrink-0">
                <h4 className="font-semibold text-cyan-900 mb-2 text-sm sm:text-base">
                  {hasActiveFilters ? 'Filtered Results' : 'Project Highlights'}
                </h4>
                <p className="text-cyan-800 text-xs sm:text-sm leading-relaxed">
                  {projects[selectedProject].description}
                </p>
                {hasActiveFilters && (
                  <div className="mt-3">
                    <button
                      onClick={clearAllFilters}
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