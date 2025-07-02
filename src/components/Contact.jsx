import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Open email client with pre-filled content
    window.location.href = `mailto:tang.tang2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Reset form after sending
    setFormData({ name: '', message: '' });
    
    // Show success message (optional)
    alert('Email client opened! Please send the email from your email application.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tang.tang2004@gmail.com',
      link: 'mailto:tang.tang2004@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+66 (xxx) xxx-xxxx',
      link: 'tel:+66xxxxxxxxx',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Thailand',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-emerald-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">
                      {info.title}
                    </h4>
                    <p className="text-stone-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-stone-900 mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li>✓ 5+ years of professional experience</li>
                <li>✓ Fast turnaround and reliable communication</li>
                <li>✓ Modern, scalable solutions</li>
                <li>✓ Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>

          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="card p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;