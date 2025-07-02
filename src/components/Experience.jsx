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
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'education':
        return 'bg-green-100 text-green-600 border-green-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through education and professional development, showcasing the experiences that shaped my skills and expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                            {getIcon(exp.type)}
                          </div>
                          <div className={`px-3 py-1 text-xs rounded-full border font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type === 'work' ? 'Work' : 'Education'}
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title and Company */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <h4 className="text-lg font-semibold text-blue-600">
                          {exp.company}
                        </h4>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;