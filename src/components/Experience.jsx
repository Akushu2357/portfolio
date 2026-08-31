import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Briefcase, Star, TrendingUp } from 'lucide-react';
import { experiences, sumExperienceYears } from '../utils/experienceUtils';

const Experience = () => {
  const [focusExperience, setFocusExperience] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(focusExperience);
  const [hoveredExperience, setHoveredExperience] = useState(null);

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
    setFocusExperience((prev) => (prev === index ? null : index));
  };

  const handleExperienceHover = (index) => {
    setHoveredExperience(index);
  };

  const handleExperienceHoverLeave = () => {
    setHoveredExperience(null);
  };

  useEffect(() => {
    if (hoveredExperience !== null) {
      setSelectedExperience(hoveredExperience);
    } else {
      setSelectedExperience(focusExperience);
    }
    console.log(`Hovered: ${hoveredExperience}, Focused: ${focusExperience}, Selected: ${selectedExperience}`);
  }, [hoveredExperience, focusExperience, selectedExperience]);

  const careerStatsComponent = () => {
    return (
      <div className="bg-slate-100 rounded-lg p-4">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Career Overview</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-cyan-600">{sumExperienceYears()}+</div>
            <div className="text-xs text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-blue-600">20+</div>
            <div className="text-xs text-slate-600">Projects Completed</div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through education and professional development, showcasing the experiences that shaped my skills and expertise.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Details Panel - Fixed Height to Match Timeline */}
          {selectedExperience !== null ?
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-[70vh] flex flex-col">
              <div className="animate-fade-in flex-1 flex flex-col min-h-0">
                <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    {getIcon(experiences[selectedExperience].type)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                      {experiences[selectedExperience].title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      {experiences[selectedExperience].company}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 flex-1 overflow-y-auto scrollbar-hide min-h-0">
                  {/* Description */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Description</h4>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {experiences[selectedExperience].description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-900 mb-3 text-sm sm:text-base">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].achievements.map((achievement, index) => (
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
                          {experiences[selectedExperience].technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full font-medium flex-shrink-0"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {experiences[selectedExperience].technologies.length > 5 && (
                        <p className="text-xs text-blue-700 italic">
                          Scroll to see all {experiences[selectedExperience].technologies.length} technologies
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Career Stats */}
                  {careerStatsComponent()}
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
            </div>
            :
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-[70vh] flex flex-col">
              <div className="animate-fade-in flex-1 flex flex-col min-h-0">
                <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    {getIcon("N/A")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                      Select an Experience to View Details
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      Click on any experience in the timeline to see more information about that role or education.
                    </p>
                  </div>
                </div>

                {/* Career Stats */}
                {careerStatsComponent()}
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
          }

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
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`relative cursor-pointer transition-all duration-300 ${selectedExperience === index ? '' : 'hover:scale-102'
                        }`}
                      onClick={() => handleExperienceClick(index)}
                      onMouseEnter={() => handleExperienceHover(index)}
                      onMouseLeave={() => handleExperienceHoverLeave()}
                    >
                      {/* Timeline Node - Properly centered with adequate spacing */}
                      <div className={`absolute left-[-31px] top-6 w-4 h-4 bg-white border-4 rounded-full z-10 transition-all duration-300 ${selectedExperience === index ? 'border-cyan-500 bg-cyan-500 shadow-lg' : 'border-slate-300'
                        }`}></div>

                      {/* Content Card - All on right side for mobile, alternating for desktop */}
                      <div className='lg:pr-8'>
                        <div className={`bg-slate-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 ${selectedExperience === index ? 'ring-2 ring-cyan-500 shadow-xl bg-cyan-50' : ''}`}>
                          {/* Header */}
                          <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2'>
                            <div className='flex items-center space-x-2'>
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
                          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3 gap-1'>
                            <h5 className="text-sm sm:text-base font-semibold text-cyan-600">
                              {exp.company}
                            </h5>
                            <div className="flex items-center space-x-1 text-slate-500">
                              <MapPin size={12} />
                              <span className="text-xs">{exp.location}</span>
                            </div>
                          </div>

                          {/* Technologies - Show all with proper wrapping */}
                          <div className='flex flex-wrap gap-1'>
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
        </div>
      </div>
    </section >
  );
};

export default Experience;