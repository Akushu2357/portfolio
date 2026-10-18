import { useState } from 'react';
import {
  ArrowUpRight,
  Code,
  Database,
  Server,
  Search,
  Layers,
} from 'lucide-react';
import { projects, filterProjects } from '../utils/projectsUtils';
import AssetImage from './AssetImage';
import useDetailNavigation from '../hooks/useDetailNavigation';
function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          Source code <ArrowUpRight size={15} />
          <span className="sr-only">
            {' '}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Visit website <ArrowUpRight size={15} />
          <span className="sr-only">
            {' '}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
    </div>
  );
}
function Flow() {
  return (
    <figure className="flow">
      <figcaption>How the legal information reaches the answer</figcaption>
      <ol>
        {[
          'Collect legal documents · Robot Framework',
          'Prepare text · Python / regex',
          'Store & retrieve context · PostgreSQL / Supabase vectors',
          'Handle questions · React → FastAPI',
          'Generate answer · Retrieved context → Typhoon LLM',
        ].map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <p>
        Deployment: React on Netlify · FastAPI on Google Cloud VM · Data on
        Supabase
      </p>
    </figure>
  );
}

const groups = [
  {
    title: 'Backend & APIs',
    icon: Server,
    technologies: ['Python', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    title: 'Data & databases',
    icon: Database,
    technologies: [
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'SQL',
      'PySpark',
      'Databricks',
    ],
  },
  {
    title: 'Frontend',
    icon: Code,
    technologies: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
  },
];
export default function ProjectsSkills() {
  const { panelRef, revealDetails, returnToSelection, hasSelection } =
    useDetailNavigation();
  const [query, setQuery] = useState('');
  const [technology, setTechnology] = useState('');
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const filtered = filterProjects(projects, query).filter(
    (project) => !technology || project.technologies.includes(technology),
  );
  const selected =
    filtered.find((project) => project.id === selectedId) || filtered[0];
  const reset = () => {
    setQuery('');
    setTechnology('');
  };
  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();
  const known = new Set(groups.flatMap((group) => group.technologies));
  const selectedGroups = selected
    ? [
        ...groups.map((group) => ({
          ...group,
          technologies: group.technologies.filter((tech) =>
            selected.technologies.includes(tech),
          ),
        })),
        {
          title: 'Tools & platforms',
          icon: Layers,
          technologies: selected.technologies.filter(
            (tech) => !known.has(tech),
          ),
        },
      ].filter((group) => group.technologies.length)
    : [];
  return (
    <section id="projects" className="section restored projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>Projects & Skills</h2>
          <p className="muted">
            From legal-data retrieval to full-stack applications. Here’s what I
            worked on, how it was built, and what I learned.
          </p>
        </div>
        <div className="filter-bar">
          <div className="field">
            <label htmlFor="project-search">
              <Search size={17} /> Search projects or technologies
            </label>
            <input
              id="project-search"
              type="search"
              placeholder="Try Python, React, or MongoDB"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="project-technology">Technology</label>
            <select
              id="project-technology"
              value={technology}
              onChange={(event) => setTechnology(event.target.value)}
            >
              <option value="">All technologies</option>
              {technologies.map((tech) => (
                <option key={tech}>{tech}</option>
              ))}
            </select>
          </div>
          {(query || technology) && (
            <button className="button" onClick={reset}>
              Reset search
            </button>
          )}
        </div>
        <p className="result-count" role="status">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>
        {selected ? (
          <div className="split-layout project-layout">
            <div className="project-collection">
              {filtered.map((project) => (
                <article
                  key={project.id}
                  id={'project-' + project.id}
                  className={
                    'selection-card project-card ' +
                    (selected.id === project.id ? 'selected-card' : '')
                  }
                >
                  {project.image && (
                    <div className="project-art">
                      <AssetImage
                        src={project.image}
                        alt={project.title + ' project'}
                        fallback={
                          <>
                            <Code size={32} aria-hidden="true" />
                            <span>{project.title}</span>
                          </>
                        }
                      />
                    </div>
                  )}
                  <div className="project-card-body">
                    <p className="eyebrow">{project.kind}</p>
                    <h3>{project.title}</h3>
                    <p className="muted">{project.description}</p>
                    <ul className="tags" aria-label="Technologies">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                      {project.technologies.length > 5 && (
                        <li>+{project.technologies.length - 5}</li>
                      )}
                    </ul>
                    <button
                      className="button select-project"
                      aria-pressed={selected.id === project.id}
                      aria-controls="project-details"
                      onClick={(event) => {
                        setSelectedId(project.id);
                        revealDetails(event);
                      }}
                    >
                      {selected.id === project.id ? 'Selected' : 'View details'}
                      <span className="sr-only">: {project.title}</span>
                    </button>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              ))}
            </div>
            <aside
              className="detail-panel"
              ref={panelRef}
              tabIndex={-1}
              id="project-details"
              aria-label="Selected project details"
            >
              {hasSelection && (
                <button
                  className="text-button mobile-panel-return"
                  onClick={returnToSelection}
                >
                  ← Back to projects
                </button>
              )}
              <div className="panel-title">
                <span className="panel-icon">
                  <Code size={25} />
                </span>
                <div>
                  <h3>{selected.title}</h3>
                  <p className="muted">Skills & Technologies</p>
                </div>
              </div>
              <p className="project-overview muted">{selected.description}</p>
              <div className="skill-groups">
                {selectedGroups.map((group) => {
                  const { title, technologies: techs } = group;
                  const Icon = group.icon;
                  return (
                    <div className="skill-group" key={title}>
                      <h4>
                        <Icon size={18} />
                        {title}
                      </h4>
                      <div className="skill-buttons">
                        {techs.map((tech) => (
                          <button
                            key={tech}
                            className="skill-chip"
                            aria-pressed={technology === tech}
                            onClick={() => {
                              setTechnology(technology === tech ? '' : tech);
                              setSelectedId(selected.id);
                            }}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="detail-block">
                <h4>My contribution</h4>
                <p>{selected.contributions}</p>
              </div>
              <details key={selected.id} className="technical-details">
                <summary>
                  Technical decisions & outcome
                  <span className="sr-only">: {selected.title}</span>
                </summary>
                <div className="case-study">
                  <h4>Technical decisions</h4>
                  <p>{selected.decisions}</p>
                  {selected.id === 'labor-law' && <Flow />}
                  <h4>Outcome & learning</h4>
                  <p>{selected.outcome}</p>
                </div>
              </details>
            </aside>
          </div>
        ) : (
          <div className="empty-state">
            <h3>No projects found</h3>
            <p>Try another project name or technology.</p>
            <button className="button" onClick={reset}>
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
