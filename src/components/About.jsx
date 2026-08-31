import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

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
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a graduate student in Computer Engineering with a passion for software development.
            I have a foundation in frontend and backend technologies.
            And also, I have experience in software QA and Data Science from my internship and part-time job.
            My goal is to continuously learn and grow as a developer while contributing to meaningful projects.
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
      </div>
    </section>
  );
};

export default About;