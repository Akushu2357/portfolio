import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { handleNavClick } from '../utils/navUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);

      // Get all sections
      const sections = ['home', 'about', 'experience', 'certificates', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Find current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSetMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${activeSection === 'home'
              ? 'gradient-text'
              : isScrolled
                ? 'text-slate-900 hover:text-cyan-600'
                : 'text-white hover:text-cyan-300'
              }`}
          >
            Tang's Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, handleSetMenuClose)}
                  className={`font-medium transition-all duration-300 relative group ${isActive
                    ? isScrolled
                      ? 'text-cyan-600'
                      : 'text-cyan-300'
                    : isScrolled
                      ? 'text-slate-700 hover:text-cyan-600'
                      : 'text-white/90 hover:text-white'
                    }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-slide-up">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, handleSetMenuClose)}
                  className={`block w-full text-left px-4 py-3 transition-all duration-300 ${isActive
                    ? 'text-cyan-600 bg-cyan-50 border-r-2 border-cyan-600'
                    : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;