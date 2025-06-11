import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating
            digital solutions that bridge the gap between design and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Working"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Started as a curious student who loved solving problems through code,
              I've evolved into a full-stack developer who thrives on turning
              complex challenges into elegant solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
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
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;