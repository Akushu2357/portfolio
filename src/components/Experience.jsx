import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Experience = () => {
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
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript']
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
      technologies: ['React', 'Vue.js', 'PHP', 'MySQL', 'JavaScript']
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
      technologies: ['Java', 'Python', 'C++', 'Database Design', 'Software Engineering']
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
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git']
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
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
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
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'education':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-stone-50">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
            My journey through education and professional development, showcasing the experiences that shaped my skills and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Timeline Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 lg:mb-6">
              Career Timeline
            </h3>
            <div className="max-h-[60vh] overflow-y-auto scrollbar-hide p-2 sm:p-3 lg:p-4">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-amber-500"></div>

                {/* Timeline Items */}
                <div className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative flex items-start">
                      {/* Timeline Node */}
                      <div className="absolute left-6 transform -translate-x-1/2 -translate-y-1 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 sm:border-4 border-emerald-500 rounded-full z-10"></div>

                      {/* Content Card */}
                      <div className="ml-12 sm:ml-16 flex-1">
                        <div className="bg-stone-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                            <div className="flex items-center space-x-2">
                              <div className={`p-1.5 rounded-lg ${exp.type === 'work' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                                {getIcon(exp.type)}
                              </div>
                              <div className={`px-2 py-1 text-xs rounded-full border font-medium ${getTypeColor(exp.type)}`}>
                                {exp.type === 'work' ? 'Work' : 'Education'}
                              </div>
                            </div>
                            <div className="text-xs text-stone-500 flex items-center space-x-1">
                              <Calendar size={12} />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          {/* Title and Company */}
                          <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3 gap-1">
                            <h5 className="text-sm sm:text-base font-semibold text-emerald-600">
                              {exp.company}
                            </h5>
                            <div className="flex items-center space-x-1 text-stone-500">
                              <MapPin size={12} />
                              <span className="text-xs">{exp.location}</span>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-stone-200 text-stone-700 text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-stone-200 text-stone-700 text-xs rounded-full font-medium">
                                +{exp.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 max-h-[70vh] flex flex-col">
            <div className="animate-fade-in flex-1 flex flex-col min-h-0">
              <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Briefcase className="text-emerald-600" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-900">
                    {experiences[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600">Current Position</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-1 overflow-y-auto scrollbar-hide min-h-0">
                {/* Description */}
                <div className="bg-stone-50 rounded-lg p-4">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">Description</h4>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    {experiences[0].description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-3 text-sm sm:text-base">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[0].achievements.map((achievement, index) => (
                      <li key={index} className="text-xs sm:text-sm text-emerald-800 flex items-start space-x-2">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Technologies */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-3 text-sm sm:text-base">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-200 text-amber-800 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Stats */}
                <div className="bg-stone-100 rounded-lg p-4">
                  <h4 className="font-semibold text-stone-900 mb-3 text-sm sm:text-base">Career Overview</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-emerald-600">5+</div>
                      <div className="text-xs text-stone-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-amber-600">20+</div>
                      <div className="text-xs text-stone-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg flex-shrink-0">
                <h4 className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">
                  Ready to Collaborate?
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm mb-3">
                  Let's discuss how my experience can help bring your project to life.
                </p>
                <a href="#contact" className="btn-primary text-xs sm:text-sm px-4 py-2">
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