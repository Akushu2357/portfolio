import React, { useState } from 'react';
import { Calendar, MapPin, Award, Briefcase, Star, TrendingUp, Filter, X } from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangkok, Thailand',
      period: '2022 - Present',
      type: 'work',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      current: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      location: 'Bangkok, Thailand',
      period: '2020 - 2022',
      type: 'work',
      description: 'Developed responsive web applications and e-commerce platforms for various clients. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Delivered 15+ successful projects',
        'Improved client satisfaction by 35%',
        'Reduced development time by implementing reusable components'
      ],
      technologies: ['React', 'Vue.js', 'PHP', 'MySQL', 'JavaScript'],
      current: false
    },
    {
      id: 3,
      title: 'Bachelor of Computer Science',
      company: 'Chulalongkorn University',
      location: 'Bangkok, Thailand',
      period: '2018 - 2022',
      type: 'education',
      description: 'Graduated with First Class Honors. Specialized in Software Engineering and Web Development. Active member of the Computer Science Club.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for 6 semesters',
        'Led university hackathon team to 2nd place'
      ],
      technologies: ['Java', 'Python', 'C++', 'Database Design', 'Software Engineering'],
      current: false
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      location: 'Bangkok, Thailand',
      period: '2019 - 2020',
      type: 'work',
      description: 'Part-time position during university. Developed landing pages and small web applications for startup clients. Gained experience in agile development.',
      achievements: [
        'Built 10+ landing pages',
        'Learned modern development workflows',
        'Contributed to open-source projects'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
      current: false
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      company: 'Code Academy Thailand',
      location: 'Bangkok, Thailand',
      period: '2018',
      type: 'education',
      description: 'Intensive 6-month bootcamp covering full-stack web development. Built multiple projects including e-commerce sites and social media applications.',
      achievements: [
        'Top 5% of graduating class',
        'Built 8 full-stack projects',
        'Received job placement assistance'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      current: false
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
      verifyUrl: '#'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Google Cloud', 'Kubernetes', 'Docker', 'CI/CD'],
      verifyUrl: '#'
    },
    {
      id: 3,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-003',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing'],
      verifyUrl: '#'
    },
    {
      id: 4,
      title: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022-004',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX'],
      verifyUrl: '#'
    },
    {
      id: 5,
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-005',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Docker'],
      verifyUrl: '#'
    }
  ];

  // Get all unique skills from experiences and certificates
  const allSkills = [...new Set([
    ...experiences.flatMap(exp => exp.technologies),
    ...certificates.flatMap(cert => cert.skills)
  ])];

  const filterOptions = [
    { value: 'all', label: 'All', count: experiences.length + certificates.length },
    { value: 'work', label: 'Work Experience', count: experiences.filter(exp => exp.type === 'work').length },
    { value: 'education', label: 'Education', count: experiences.filter(exp => exp.type === 'education').length },
    { value: 'certificates', label: 'Certificates', count: certificates.length }
  ];

  const getFilteredItems = () => {
    switch (selectedFilter) {
      case 'work':
        return { experiences: experiences.filter(exp => exp.type === 'work'), certificates: [] };
      case 'education':
        return { experiences: experiences.filter(exp => exp.type === 'education'), certificates: [] };
      case 'certificates':
        return { experiences: [], certificates };
      default:
        return { experiences, certificates };
    }
  };

  const filteredItems = getFilteredItems();

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} />;
      case 'education':
        return <Award size={20} />;
      default:
        return <Calendar size={20} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
      case 'education':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Experience, Education & Certificates
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through education, professional development, and certifications that shaped my skills and expertise.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Filter size={16} />
                <span className="font-medium">Filter</span>
              </button>
              
              {selectedFilter !== 'all' && (
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="flex items-center space-x-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm hover:bg-cyan-200 transition-colors duration-300"
                >
                  <X size={14} />
                  <span>Clear Filter</span>
                </button>
              )}
            </div>

            {/* Skills Filter */}
            <div className="flex flex-wrap gap-2 max-w-md">
              {allSkills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium hover:bg-slate-200 transition-colors duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
              {allSkills.length > 6 && (
                <span className="px-3 py-1 bg-slate-200 text-slate-600 text-sm rounded-full font-medium">
                  +{allSkills.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedFilter(option.value);
                      setShowFilters(false);
                    }}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      selectedFilter === option.value
                        ? 'bg-cyan-100 text-cyan-700 border-2 border-cyan-300'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-sm opacity-75">{option.count} items</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current Position Highlight - Mobile & Desktop */}
        {selectedFilter === 'all' || selectedFilter === 'work' ? (
          <div className="mb-8 lg:mb-12">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 lg:p-8 border border-cyan-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-cyan-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                        {experiences[0].title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-cyan-600">
                          {experiences[0].company}
                        </h4>
                        <div className="flex items-center space-x-1 text-slate-500">
                          <MapPin size={14} />
                          <span className="text-sm">{experiences[0].location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium border border-green-200">
                        Current Position
                      </div>
                      <div className="text-sm text-slate-500 flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{experiences[0].period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {experiences[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experiences[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Certificates Section */}
        {(selectedFilter === 'all' || selectedFilter === 'certificates') && certificates.length > 0 && (
          <div className="mb-8 lg:mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
              <Award className="text-cyan-600" size={24} />
              <span>Certificates & Credentials</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.certificates.map((cert) => (
                <div key={cert.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1 text-sm leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-cyan-600 font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>Issued: {cert.date}</span>
                      <a
                        href={cert.verifyUrl}
                        className="text-cyan-600 hover:text-cyan-700 font-medium"
                      >
                        Verify
                      </a>
                    </div>
                    
                    <div className="text-xs text-slate-400">
                      ID: {cert.credentialId}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Timeline */}
        {(selectedFilter === 'all' || selectedFilter === 'work' || selectedFilter === 'education') && filteredItems.experiences.length > 0 && (
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 lg:p-8 border border-cyan-200">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Timeline Section - Fixed Height */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-[70vh] flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 lg:mb-6 flex items-center space-x-2 flex-shrink-0">
              <TrendingUp className="text-cyan-600" size={24} />
              <span>Career Timeline</span>
            </h3>
            <div className="relative flex-1 overflow-y-auto scrollbar-hide">
              {/* Timeline Container with proper padding for circles */}
              <div className="relative pl-12 pr-4 py-4">
                {/* Vertical Timeline Line - extends through all content */}
                <div className="absolute left-6 top-4 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" style={{ height: `calc(100% - 2rem)` }}></div>

                {/* Timeline Items */}
                <div className="space-y-8 sm:space-y-10 py-8">
                  {filteredItems.experiences.map((exp, index) => (
                    <div 
                      key={exp.id} 
                      className={`relative cursor-pointer transition-all duration-300 ${
                        selectedExperience === index ? '' : 'hover:scale-102'
                      }`}
                      onClick={() => handleExperienceClick(index)}
                    >
                      {/* Timeline Node - Properly centered with adequate spacing */}
                      <div className={`absolute left-[-31px] top-6 w-4 h-4 bg-white border-4 rounded-full z-10 transition-all duration-300 ${
                        selectedExperience === index ? 'border-cyan-500 bg-cyan-500 shadow-lg' : 'border-slate-300'
                      }`}></div>

                      {/* Content Card - All on right side for mobile, alternating for desktop */}
                      <div className={`${
                        index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-8'
                      }`}>
                        <div className={`bg-slate-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 ${
                          selectedExperience === index ? 'ring-2 ring-cyan-500 shadow-xl bg-cyan-50' : ''
                        } ${
                          index % 2 === 1 ? 'lg:text-right' : ''
                        }`}>
                          {/* Header */}
                          <div className={`flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2 ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                          }`}>
                            <div className={`flex items-center space-x-2 ${
                              index % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''
                            }`}>
                              <div className={`p-1.5 rounded-lg ${exp.type === 'work' ? 'bg-cyan-100 text-cyan-600' : 'bg-blue-100 text-blue-600'}`}>
                                {getIcon(exp.type)}
                              </div>
                              <div className={`px-2 py-1 text-xs rounded-full border font-medium ${getTypeColor(exp.type)}`}>
                                {exp.type === 'work' ? 'Work' : 'Education'}
                              </div>
                            </div>
                            <div className="text-xs text-slate-500 flex items-center space-x-1">
                              <Calendar size={12} />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          {/* Title and Company */}
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                            {exp.title}
                          </h4>
                          <div className={`flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3 gap-1 ${
                            index % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''
                          }`}>
                            <h5 className="text-sm sm:text-base font-semibold text-cyan-600">
                              {exp.company}
                            </h5>
                            <div className="flex items-center space-x-1 text-slate-500">
                              <MapPin size={12} />
                              <span className="text-xs">{exp.location}</span>
                            </div>
                          </div>

                          {/* Technologies - Show all with proper wrapping */}
                          <div className={`flex flex-wrap gap-1 ${
                            index % 2 === 1 ? 'lg:justify-end' : ''
                          }`}>
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel - Fixed Height to Match Timeline */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-[70vh] flex flex-col">
            {filteredItems.experiences.length > 0 && (
              <div className="animate-fade-in flex-1 flex flex-col min-h-0">
              <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  {getIcon(filteredItems.experiences[selectedExperience]?.type)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                    {filteredItems.experiences[selectedExperience]?.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {filteredItems.experiences[selectedExperience]?.company}
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-1 overflow-y-auto scrollbar-hide min-h-0">
                {/* Description */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Description</h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {filteredItems.experiences[selectedExperience]?.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-900 mb-3 text-sm sm:text-base">Key Achievements</h4>
                  <ul className="space-y-2">
                    {filteredItems.experiences[selectedExperience]?.achievements.map((achievement, index) => (
                      <li key={index} className="text-xs sm:text-sm text-cyan-800 flex items-start space-x-2">
                        <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Technologies - Show all skills with proper scrolling */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Technologies & Skills</h4>
                  <div className="space-y-2">
                    {/* Show all technologies in a scrollable container */}
                    <div className="max-h-32 overflow-y-auto scrollbar-hide">
                      <div className="flex flex-wrap gap-2">
                        {filteredItems.experiences[selectedExperience]?.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full font-medium flex-shrink-0"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {filteredItems.experiences[selectedExperience]?.technologies.length > 5 && (
                      <p className="text-xs text-blue-700 italic">
                        Scroll to see all {filteredItems.experiences[selectedExperience]?.technologies.length} technologies
                      </p>
                    )}
                  </div>
                </div>

                {/* Career Stats */}
                <div className="bg-slate-100 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Career Overview</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-600">5+</div>
                      <div className="text-xs text-slate-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-blue-600">20+</div>
                      <div className="text-xs text-slate-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg flex-shrink-0">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">
                  Ready to Collaborate?
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm mb-3">
                  Let's discuss how my experience can help bring your project to life.
                </p>
                <a href="#contact" className="btn-primary text-xs sm:text-sm px-4 py-2">
                  Get In Touch
                </a>
              </div>
            </div>
            )}
          </div>
        </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;