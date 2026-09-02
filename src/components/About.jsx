import React, { useEffect, useRef, useState } from 'react';
import { Code, LineChart, GraduationCap, Zap, Award, Folder, Puzzle } from 'lucide-react';
import { certificates } from '../utils/certificatesUtils';
import { experience } from '../utils/experienceUtils';
import { projects } from '../utils/projectsUtils';
import { handleNavClick } from '../utils/navUtils';

const CardsList = ({ icon, cards = [], href = null }) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  const extractLabel = (card) => {
    return String(card.company || card.issuer || card.title)
      .split('(')
      .slice(-1)[0]
      .split(')')[0]
      .trim();
  };

  return (
    <div className="flex items-center gap-6 shrink-0 cursor-pointer" onClick={() => handleNavClick(href)}>
      <div className="card overflow-hidden animate-slide-up flex-shrink-0 h-20 w-20 hover:scale-105 transition-transform duration-300 flex items-center justify-center text-cyan-600">
        {icon}
      </div>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="card overflow-hidden animate-slide-up flex-shrink-0 w-40 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4 text-wrap">{extractLabel(card)}</p>
            </div>
          </div>
          <div className="p-1">
            <p className="text-slate-600 text-xs leading-tight line-clamp-1">
              {card.highlight || card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Building Software',
      description: 'Writing maintainable and scalable code.',
    },
    {
      icon: <Puzzle size={32} />,
      title: 'Solving Problems',
      description: 'Enjoy tackling complex challenges and finding effective solutions.',
    },
    {
      icon: <LineChart size={32} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and improving my skills.',
    },
  ];

  return (
    <section id="about" className="py-10 lg:py-20 bg-cyan-50">
      <div className="section-padding flex flex-col lg:flex-row gap-0 lg:gap-12 items-center justify-center">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg shadow-lg p-8 mb-12 max-w-2xl mx-auto animate-slide-up">
          <div className="flex flex-col md:flex-row lg:flex-col gap-8 items-center md:items-start lg:items-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-40 h-40 flex items-center justify-center">
                <Code size={80} className="text-cyan-600" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Software Engineer</h3>
              <p className="text-lg text-cyan-600 font-semibold mb-4">Backend Developer</p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                I enjoy building reliable software and backend systems that solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center md:justify-start">
                <button className="btn-primary" onClick={() => window.open('/Worapat_Chuchoed_Resume.pdf', '_blank')}>
                  Download Resume
                </button>
                <button className="btn-secondary" onClick={() => handleNavClick('#contact')}>
                  Contact Me
                </button>
              </div>
              {/* Skills */}
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-3">Tech I Work With</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'NoSQL', 'Machine Learning'].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 pt-0 md:pt-8">
          {/* About Me */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              I'm a Computer Engineering graduate who enjoys turning ideas into software that people can actually use. My main interests are Software Engineering and Backend Development, with hands-on experience building APIs, web applications, and automated testing systems.
            </p>
            {/* <p className="text-base md:text-lg text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              I enjoy learning new technologies, solving problems, and improving the way software is built. I'm currently looking for a Software Engineer role where I can continue developing my skills and contribute to real-world projects.
            </p> */}
          </div>

          {/* What I Enjoy */}
          <div className="text-center mb-0 md:mb-12 bg-white rounded-lg shadow-lg p-8 animate-slide-up">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What I Enjoy</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card p-4 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-cyan-600 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Featured Items */}
      <div className="overflow-hidden whitespace-nowrap w-full pt-4 pb-4">
        <div
          className="flex w-max gap-6"
          style={{
            animation: 'scroll-left 15s linear infinite',
            animationPlayState: 'running',
          }}
        >
          {[0, 1].map((iteration) => (
            <div key={iteration} className="flex shrink-0 gap-6">
              <CardsList icon={<GraduationCap size={32} />} cards={experience.slice(-1)} href="#experience" />
              <CardsList icon={<Zap size={32} />} cards={experience.filter((exp) => exp.type === 'work').slice(0, 3)} href="#experience" />
              <CardsList icon={<Award size={32} />} cards={certificates} href="#certificates" />
              <CardsList icon={<Folder size={32} />} cards={projects} href="#projects" />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default About;