import React, { useState } from 'react';
import { Calendar, MapPin, Award, Briefcase, Star, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through education and professional development, showcasing the experiences that shaped my skills and expertise.
          </p>
        </div>

        {/* Current Position Highlight */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="text-cyan-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {experiences[0].title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-cyan-600">
                        {experiences[0].company}
                      </h4>
                      <div className="flex items-center space-x-1 text-slate-500">
                        <MapPin size={16} />
                        <span>{experiences[0].location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium border border-green-200">
                      Current Position
                    </div>
                    <div className="text-slate-500 flex items-center space-x-1">
                      <Calendar size={16} />
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
                      className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timeline Section */}
          <div className="bg-white rounded-xl p-8 h-[70vh] flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
              <TrendingUp className="text-cyan-600" size={24} />
              <span>Career Timeline</span>
            </h3>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="relative pl-12 py-6">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div 
                      key={exp.id} 
                      className="relative cursor-pointer transition-all duration-300 hover:scale-102"
                      onClick={() => handleExperienceClick(index)}
                    >
                      {/* Timeline Node */}
                      <div className={`absolute left-[-31px] top-6 w-4 h-4 bg-white border-4 rounded-full transition-all duration-300 ${
                        selectedExperience === index ? 'border-cyan-500 bg-cyan-500 shadow-lg' : 'border-slate-300 hover:border-cyan-400'
                      }`}></div>

                      {/* Content Card */}
                      <div className={`bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                        selectedExperience === index ? 'ring-2 ring-cyan-500 shadow-xl bg-cyan-50' : ''
                      }`}>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-cyan-100 text-cyan-600' : 'bg-blue-100 text-blue-600'}`}>
                              {getIcon(exp.type)}
                            </div>
                            <div className={`px-2 py-1 text-xs rounded-full border font-medium ${getTypeColor(exp.type)}`}>
                              {exp.type === 'work' ? 'Work' : 'Education'}
                            </div>
                          </div>
                          <div className="text-sm text-slate-500 flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Title and Company */}
                        <h4 className="text-lg font-bold text-slate-900 mb-1">
                          {exp.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3">
                          <h5 className="font-semibold text-cyan-600">
                            {exp.company}
                          </h5>
                          <div className="flex items-center space-x-1 text-slate-500">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-slate-300 text-slate-600 text-xs rounded-full font-medium">
                              +{exp.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="bg-white rounded-xl p-8 h-[70vh] flex flex-col">
            <div className="animate-fade-in flex-1 flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                  {getIcon(experiences[selectedExperience].type)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {experiences[selectedExperience].title}
                  </h3>
                  <p className="text-slate-600">
                    {experiences[selectedExperience].company}
                  </p>
                </div>
              </div>

              <div className="space-y-6 flex-1 overflow-y-auto scrollbar-hide">
                {/* Description */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Description</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {experiences[selectedExperience].description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[selectedExperience].achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-cyan-800 flex items-start space-x-2">
                        <span className="text-cyan-500 mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto scrollbar-hide">
                    {experiences[selectedExperience].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-200 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Stats */}
                <div className="bg-slate-100 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Career Overview</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">5+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">20+</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Ready to Collaborate?
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Let's discuss how my experience can help bring your project to life.
                </p>
                <a href="#contact" className="btn-primary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;