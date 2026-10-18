import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profile from '../assets/profile.jpg';
export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">WORAPAT CHUCHOED · SOFTWARE DEVELOPER</p>
          <h1>
            Thoughtful code.
            <br />
            <span>Practical solutions.</span>
          </h1>
          <p className="hero-intro">
            Hi, I’m Tang. I build APIs, connect databases, and turn ideas into
            working web applications.
          </p>
          <p className="muted">
            Computer Engineering graduate with hands-on full-stack development
            and professional experience in testing and automation.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <a className="button" href="#contact">
              Contact me <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="hero-caption">
            Python / JavaScript / FastAPI / React / SQL
          </p>
        </div>
        <div className="portrait-wrap">
          <img
            className="portrait"
            src={profile}
            alt="Tang — Worapat Chuchoed"
            width="440"
            height="490"
            fetchpriority="high"
          />
          <div className="portrait-note">
            <span className="accent-dot" /> From the API to the interface.
            <small>Backend thinking. Full-stack experience.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
