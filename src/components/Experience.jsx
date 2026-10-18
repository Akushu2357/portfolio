import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import useDetailNavigation from '../hooks/useDetailNavigation';
import { experience } from '../utils/experienceUtils';
export default function Experience() {
  const { panelRef, revealDetails, returnToSelection, hasSelection } =
    useDetailNavigation();
  const [selectedId, setSelectedId] = useState(experience[0].id);
  const selected = experience.find((job) => job.id === selectedId);
  return (
    <section id="experience" className="section restored experience-section">
      <div className="container">
        <div className="section-heading">
          <h2>Experience</h2>
          <p className="muted">
            Professional testing and data experience that informs how I approach
            software development.
          </p>
        </div>
        <div className="split-layout experience-layout">
          <aside
            className="detail-panel"
            ref={panelRef}
            tabIndex={-1}
            id="experience-details"
            aria-label="Selected experience details"
          >
            {hasSelection && (
              <button
                className="text-button mobile-panel-return"
                onClick={returnToSelection}
              >
                ← Back to timeline
              </button>
            )}
            <div className="panel-title">
              <span className="panel-icon">
                <Briefcase size={25} />
              </span>
              <div>
                <h3>{selected.title}</h3>
                <p className="accent-text">{selected.company}</p>
              </div>
            </div>
            <div className="detail-block">
              <h4>Description</h4>
              <p>{selected.description}</p>
            </div>
            <div className="detail-block highlight-block">
              <h4>Key contributions</h4>
              <ul>
                {selected.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="detail-block">
              <h4>Impact & learning</h4>
              <p>{selected.outcome}</p>
            </div>
          </aside>
          <ol className="experience-timeline" aria-label="Experience timeline">
            {experience.map((job) => (
              <li key={job.id}>
                <button
                  className={
                    'selection-card timeline-card ' +
                    (selected.id === job.id ? 'selected-card' : '')
                  }
                  aria-pressed={selected.id === job.id}
                  aria-controls="experience-details"
                  onClick={(event) => {
                    setSelectedId(job.id);
                    revealDetails(event);
                  }}
                >
                  <span className="timeline-meta">
                    <span className="work-badge">
                      <Briefcase size={14} /> Work
                    </span>
                    <span>
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </span>
                  <span className="timeline-title">{job.title}</span>
                  <span className="timeline-company">{job.company}</span>
                  <span className="muted timeline-location">
                    Bangkok, Thailand
                  </span>
                  <span className="tags">
                    {job.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
