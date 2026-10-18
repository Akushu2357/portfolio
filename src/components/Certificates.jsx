import { useRef, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { certificates } from '../utils/certificatesUtils';
import AssetImage from './AssetImage';
const ordered = [...certificates].sort((a, b) => b.id - a.id);
export default function Certificates() {
  const touchStart = useRef(null);
  const [query, setQuery] = useState('');
  const [issuer, setIssuer] = useState('');
  const [skill, setSkill] = useState('');
  const [selectedId, setSelectedId] = useState(ordered[0].id);
  const filtered = ordered.filter(
    (cert) =>
      (!issuer || cert.issuer === issuer) &&
      (!skill || cert.skills.includes(skill)) &&
      [cert.title, cert.description, cert.issuer, ...cert.skills]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const foundIndex = filtered.findIndex((cert) => cert.id === selectedId);
  const active = foundIndex < 0 ? 0 : foundIndex;
  const reset = () => {
    setQuery('');
    setIssuer('');
    setSkill('');
    setSelectedId(ordered[0].id);
  };
  const select = (index) =>
    setSelectedId(filtered[(index + filtered.length) % filtered.length].id);
  const onCarouselKey = (event) => {
    if (event.target !== event.currentTarget) return;
    const keys = {
      ArrowLeft: active - 1,
      ArrowRight: active + 1,
      Home: 0,
      End: filtered.length - 1,
    };
    if (Object.hasOwn(keys, event.key)) {
      event.preventDefault();
      select(keys[event.key]);
    }
  };
  const onTouchStart = (event) => {
    if (event.target.closest('a,button') || event.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    const end = event.changedTouches[0];
    if (!start || !end) return;
    const x = end.clientX - start.x;
    const y = end.clientY - start.y;
    if (Math.abs(x) >= 50 && Math.abs(x) > Math.abs(y) * 1.5)
      select(active + (x < 0 ? 1 : -1));
  };
  return (
    <section
      id="certificates"
      className="section restored certificates-section"
    >
      <div className="container">
        <div className="section-heading">
          <h2>Certificates & Credentials</h2>
          <p className="muted">
            Coursework and credentials supporting practical project experience.
          </p>
        </div>
        <div className="filter-bar">
          <div className="field">
            <label htmlFor="certificate-search">
              <Search size={17} /> Search certificates
            </label>
            <input
              id="certificate-search"
              type="search"
              value={query}
              placeholder="Search credentials or skills"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="certificate-issuer">Issuer</label>
            <select
              id="certificate-issuer"
              value={issuer}
              onChange={(event) => setIssuer(event.target.value)}
            >
              <option value="">All issuers</option>
              {[...new Set(certificates.map((cert) => cert.issuer))]
                .sort()
                .map((name) => (
                  <option key={name}>{name}</option>
                ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="certificate-skill">Skill</label>
            <select
              id="certificate-skill"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            >
              <option value="">All skills</option>
              {[...new Set(certificates.flatMap((cert) => cert.skills))]
                .sort()
                .map((name) => (
                  <option key={name}>{name}</option>
                ))}
            </select>
          </div>
          {(query || issuer || skill) && (
            <button className="button" onClick={reset}>
              Reset filters
            </button>
          )}
        </div>
        {filtered.length ? (
          <div
            className="certificate-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Credentials"
            tabIndex={0}
            aria-describedby="carousel-help"
            onKeyDown={onCarouselKey}
          >
            <p className="carousel-help" id="carousel-help">
              Use the arrows, swipe, or focus this gallery and press ← / → to
              browse.
            </p>
            <div
              className="carousel-viewport"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onTouchCancel={() => {
                touchStart.current = null;
              }}
            >
              <div
                className="carousel-track"
                style={{ '--active-index': active }}
              >
                {filtered.map((cert, index) => (
                  <article
                    className={
                      'certificate-slide ' +
                      (index === active ? 'active-slide' : '')
                    }
                    key={cert.id}
                    aria-roledescription="slide"
                    aria-label={index + 1 + ' of ' + filtered.length}
                    aria-hidden={index !== active}
                    inert={index !== active ? '' : undefined}
                  >
                    <div className="certificate-image">
                      <AssetImage
                        src={cert.image}
                        alt={cert.title + ' certificate'}
                        fallback={
                          <>
                            <Award size={42} />
                            <span>Credential from {cert.issuer}</span>
                          </>
                        }
                      />
                    </div>
                    <div className="certificate-content">
                      <h3>{cert.title}</h3>
                      <p className="accent-text">{cert.issuer}</p>
                      <p className="muted">{cert.description}</p>
                      <p className="certificate-date">
                        Issued: {cert.date.replace('Semptember', 'September')}
                      </p>
                      <ul className="tags" aria-label="Skills">
                        {cert.skills.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === active ? 0 : -1}
                        >
                          View credential ↗
                          <span className="sr-only">
                            : {cert.title} (opens in a new tab)
                          </span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <button
                className="icon-button"
                aria-label="Previous certificate"
                disabled={filtered.length < 2}
                onClick={() => select(active - 1)}
              >
                <ChevronLeft size={20} />
              </button>
              <p role="status">
                Certificate {active + 1} of {filtered.length}
              </p>
              <button
                className="icon-button"
                aria-label="Next certificate"
                disabled={filtered.length < 2}
                onClick={() => select(active + 1)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div
              className="carousel-positions"
              aria-label="Certificate positions"
            >
              {filtered.map((cert, index) => (
                <button
                  key={cert.id}
                  aria-label={
                    'Show certificate ' + (index + 1) + ': ' + cert.title
                  }
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => select(index)}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <Award size={32} />
            <h3>No certificates found</h3>
            <p>Try another search or clear the filters.</p>
            <button className="button" onClick={reset}>
              Show all certificates
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
