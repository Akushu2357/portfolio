import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-stone-50 pt-20">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Tang</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-stone-700 mb-4">
            Worapat Chuchoed
          </h2>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating
            beautiful, functional web experiences that make a difference.
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-stone-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-emerald-600" />
            </a>
            <a
              href="mailto:tang.tang2004@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="text-teal-500" />
            </a>
          </div>
        </div>
        
        <div className="animate-bounce-slow">
          <ChevronDown size={32} className="text-stone-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;