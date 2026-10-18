import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSelector from './Theme';
const links = [
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['about', 'About'],
  ['certificates', 'Certificates'],
  ['contact', 'Contact'],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggle = useRef(null);
  useEffect(() => {
    const update = () => {
      const sections = ['home', ...links.map(([id]) => id)];
      setActive(
        sections
          .filter(
            (id) =>
              document.getElementById(id)?.getBoundingClientRect().top <= 140,
          )
          .at(-1) || 'home',
      );
    };
    const escape = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('keydown', escape);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('keydown', escape);
      window.removeEventListener('resize', resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          tang<span>.</span>
        </a>
        <div
          id="navigation-links"
          className={'nav-links ' + (open ? 'is-open' : '')}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <ThemeSelector />
          <button
            ref={toggle}
            className="icon-button menu-toggle"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="navigation-links"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
