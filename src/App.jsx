import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSkills from './components/ProjectsSkills';
import Experience from './components/Experience';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProjectsSkills />
        <Experience />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
