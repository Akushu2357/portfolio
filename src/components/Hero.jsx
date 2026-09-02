import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import { handleNavClick } from '../utils/navUtils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 pt-20">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white aspect-auto object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Tang</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-700 mb-4">
            Worapat Chuchoed
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer with QA and DS experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Akushu2357"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-slate-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/worapat-chuchoed-9352b929b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-cyan-600" />
            </a>
            <a
              href="mailto:tang.tang2004@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="text-blue-500" />
            </a>
          </div>
        </div>

        <div className="animate-bounce-slow cursor-pointer" onClick={() => handleNavClick('#contact')} >
          <ChevronDown size={32} className="text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;