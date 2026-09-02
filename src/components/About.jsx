import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, GraduationCap, Zap, Award, Folder } from 'lucide-react';
import { certificates } from '../utils/certificatesUtils';
import { experiences } from '../utils/experienceUtils';
import { projects } from '../utils/projectsUtils';
import { handleNavClick } from '../utils/navUtils';

const Cards = (icon, cards = null, href = null) => {
  if (!cards || cards.length === 0) {
    return (null);
  }

  return (
    <div className="flex items-center gap-6 shrink-0 cursor-pointer" onClick={() => handleNavClick(href)}>
      {
        cards && cards.length > 0 && (
          <div className='card overflow-hidden animate-slide-up flex-shrink-0 h-20 w-20 hover:scale-105 transition-transform duration-300 flex items-center justify-center'>
            {icon}
          </div>
        )
      }
      {
        cards && cards.map((card, index) => (
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
                <p className="text-white text-center px-4 text-wrap">{String(card.company || card.issuer || card.title).split('(').slice(-1)[0].split(')')[0].trim()}</p>
              </div>
            </div>
            <div className="p-1">
              <p className="text-slate-600 text-xs leading-tight line-clamp-1">
                {card.highlight || card.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern technologies.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results and exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          {
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I'm a graduate student in Computer Engineering with a passion for software development.
              I have a foundation in frontend and backend technologies.
              And also, I have experience in DS and software QA from my internship and part-time job.
              My goal is to continuously learn and grow as a developer while contributing to meaningful projects.
            </p>
          }
          {/* <div className='flex'>
            <div className='p-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 text-left rounded-lg'>
              <h3 className='text-xl md:text-2xl'>Education</h3>
              <div className='ml-1'>
                <p>King Mongkut's University of Technology Thonburi (KMUTT)</p>
                <div>
                  <p>Computer Engineering Bachelor's Degree</p>
                  <p>GPA: <span>3.54</span>/4.00 (Second Class Honors)</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Experiences</h3>
              <ul>
                <li>Software QA (Part-Time)</li>
                <li>Data Science (Internship)</li>
              </ul>
            </div>
          </div> */}
        </div>

        {/*Scroll*/}
        <div className="overflow-hidden whitespace-nowrap w-full pt-4 pb-4">
          <div
            className="flex w-max gap-6"
            style={{
              animation: 'scroll-left 10s linear infinite',
              animationPlayState: 'running',
            }}
          >
            <div className="flex shrink-0 gap-6">
              {Cards(<GraduationCap size={32} />, experiences.slice(-1), '#experience')}
              {Cards(<Zap size={32} />, experiences.filter((exp) => exp.type === 'work').slice(0, 3), '#experience')}
              {Cards(<Award size={32} />, certificates, '#certificates')}
              {Cards(<Folder size={32} />, projects, '#projects')}
            </div>

            <div className="flex shrink-0 gap-6">
              {Cards(<GraduationCap size={32} />, experiences.slice(-1), '#experience')}
              {Cards(<Zap size={32} />, experiences.filter((exp) => exp.type === 'work').slice(0, 3), '#experience')}
              {Cards(<Award size={32} />, certificates, '#certificates')}
              {Cards(<Folder size={32} />, projects, '#projects')}
            </div>
          </div>
        </div>

        {/* 
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Working"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              My Journey
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Started as a curious student who loved solving problems through code,
              After trying different roles, I want to growe up as a developer and making a positive impact through technology.

            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I am always eager to learn new technologies and improve my skills.
              I believe in the power of collaboration and enjoy working in teams to create innovative solutions.
            </p>
            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-cyan-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
         */}
      </div>
    </section>
  );
};

export default About;