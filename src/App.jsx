import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSkills from './components/ProjectsSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProjectsSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;