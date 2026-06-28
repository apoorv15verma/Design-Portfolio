import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectDetails.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to portfolio
        </button>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Back navigation */}
      <div className="details-top-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          Back
        </button>
        <div className="details-breadcrumb">
          <Link to="/" className="breadcrumb-link">Portfolio</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="details-hero" style={{ background: project.gradient }}>
        <div className="details-hero-inner">
          <motion.div className="details-hero-content" {...fadeUp(0.1)}>
            <span className="details-hero-cat">{project.category}</span>
            <h1 className="details-hero-title">{project.title}</h1>
            <p className="details-hero-desc">{project.description}</p>
            <div className="details-hero-meta">
              <div className="details-meta-item">
                <span className="details-meta-label">Year</span>
                <span className="details-meta-value">{project.year}</span>
              </div>
              <div className="details-meta-item">
                <span className="details-meta-label">Role</span>
                <span className="details-meta-value">UI/UX Designer</span>
              </div>
              <div className="details-meta-item">
                <span className="details-meta-label">Type</span>
                <span className="details-meta-value">{project.subtitle}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="details-hero-stats"
            {...fadeUp(0.25)}
          >
            {Object.entries(project.stats ?? {}).map(([key, val]) => (
              <div className="details-stat" key={key}>
                <span className="details-stat-val">{val}</span>
                <span className="details-stat-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div className="details-tags" {...fadeUp(0.35)}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="details-tag"
              style={{
                background: project.isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                color: project.isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.6)',
                borderColor: project.isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Behance-style image gallery */}
      {project.images && project.images.length > 0 && (
        <section className="behance-gallery">
          {project.images.map((src, i) => (
            <motion.div
              className="behance-gallery-item"
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={src}
                alt={`${project.title} – screen ${i + 1}`}
                className="behance-gallery-img"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </motion.div>
          ))}
        </section>
      )}

      {/* Case study body */}
      <div className="details-body">

        {/* 2. Overview */}
        <CaseSection index={0} title="01. Overview">
          <p className="cs-body">{project.overview}</p>
        </CaseSection>

        {/* 3. Problem Statement */}
        <CaseSection index={1} title="02. Problem Statement" accent>
          <div className="cs-problem-box">
            <span className="cs-problem-quote">"</span>
            <p className="cs-problem-text">{project.problem}</p>
          </div>
        </CaseSection>

        {/* 4. Goals */}
        <CaseSection index={2} title="03. Goals &amp; Objectives">
          <ul className="cs-goals-list">
            {project.goals.map((g, i) => (
              <li className="cs-goal-item" key={i}>
                <span className="cs-goal-num">{String(i + 1).padStart(2, '0')}</span>
                <p className="cs-goal-text">{g}</p>
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* 5. Research */}
        <CaseSection index={3} title="04. Research &amp; Discovery">
          <p className="cs-body">{project.research}</p>
          <div className="cs-research-chips">
            {['User Interviews', 'Surveys', 'Competitive Analysis', 'Usability Testing'].map((m) => (
              <span className="cs-chip" key={m}>{m}</span>
            ))}
          </div>
        </CaseSection>

        {/* 6. User Persona */}
        {project.persona && (
          <CaseSection index={4} title="05. User Persona">
            <div className="cs-persona-card">
              <div className="cs-persona-avatar">
                {project.persona.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="cs-persona-info">
                <h4 className="cs-persona-name">{project.persona.name}</h4>
                <p className="cs-persona-role">{project.persona.role}, {project.persona.age} years old</p>
                <div className="cs-persona-details">
                  <div className="cs-persona-detail">
                    <span className="cs-persona-detail-label">Goal</span>
                    <p className="cs-persona-detail-text">{project.persona.goal}</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-detail-label">Frustration</span>
                    <p className="cs-persona-detail-text">{project.persona.frustration}</p>
                  </div>
                </div>
              </div>
            </div>
          </CaseSection>
        )}

        {/* 7. Design System */}
        <CaseSection index={5} title="06. Design System">
          <div className="cs-design-row">
            {/* Color palette */}
            <div className="cs-design-block">
              <h4 className="cs-design-block-title">Color Palette</h4>
              <div className="cs-colors">
                {project.colorPalette.map((color, i) => (
                  <div className="cs-color-item" key={i}>
                    <div className="cs-color-swatch" style={{ background: color }} />
                    <span className="cs-color-hex">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="cs-design-block">
              <h4 className="cs-design-block-title">Typography</h4>
              <div className="cs-typo-list">
                {Object.entries(project.typography).map(([key, val]) => (
                  <div className="cs-typo-item" key={key}>
                    <span className="cs-typo-role">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <div className="cs-typo-details">
                      <span className="cs-typo-name">{val.name}</span>
                      <span className="cs-typo-meta">{val.weight} · {val.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CaseSection>

        {/* 8. Screens */}
        {project.screens && (
          <CaseSection index={6} title="07. Key Screens">
            <div className="cs-screens-grid">
              {project.screens.map((screen, i) => (
                <div className="cs-screen-card" key={i} style={{ background: project.gradient }}>
                  <div className="cs-screen-mockup">
                    <div className="cs-screen-header">
                      <div className="cs-screen-dot" />
                      <div className="cs-screen-dot" />
                      <div className="cs-screen-dot" />
                    </div>
                    <div className="cs-screen-body">
                      <span className="cs-screen-name-text">{screen}</span>
                    </div>
                  </div>
                  <span className="cs-screen-name">{screen}</span>
                </div>
              ))}
            </div>
          </CaseSection>
        )}

        {/* 9. Results */}
        {project.results && (
          <CaseSection index={7} title="08. Results &amp; Impact" accent>
            <div className="cs-results-grid">
              {project.results.map((result, i) => (
                <div className="cs-result-card" key={i}>
                  <span className="cs-result-num">{String(i + 1).padStart(2, '0')}</span>
                  <p className="cs-result-text">{result}</p>
                </div>
              ))}
            </div>
          </CaseSection>
        )}

        {/* 10. Learnings */}
        {project.learnings && (
          <CaseSection index={8} title="09. Key Learnings">
            <div className="cs-learnings-box">
              <span className="cs-learnings-icon">💡</span>
              <p className="cs-learnings-text">{project.learnings}</p>
            </div>
          </CaseSection>
        )}
      </div>

      {/* Related Projects */}
      <RelatedProjects currentId={id} />

      {/* Project navigation */}
      <div className="details-project-nav">
        <Link to={`/project/${prevProject.id}`} className="proj-nav-item proj-nav-prev">
          <span className="proj-nav-dir">← Previous</span>
          <span className="proj-nav-title">{prevProject.title}</span>
        </Link>
        <Link to="/" className="proj-nav-home">
          <span>View All Work</span>
        </Link>
        <Link to={`/project/${nextProject.id}`} className="proj-nav-item proj-nav-next">
          <span className="proj-nav-dir">Next →</span>
          <span className="proj-nav-title">{nextProject.title}</span>
        </Link>
      </div>
    </motion.div>
  );
}

/* ---- Related Projects ---- */
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function RelatedProjects({ currentId }) {
  const related = projects.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <section className="related-projects">
      <div className="related-projects-inner">
        <div className="related-header">
          <h2 className="related-heading">
            <em className="related-heading-em">Related</em> Projects
          </h2>
          <Link to="/" className="related-see-all-btn">
            See All <ArrowRightIcon />
          </Link>
        </div>
        <div className="related-grid">
          {related.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Section wrapper with scroll reveal ---- */
function CaseSection({ index = 0, title, children, accent = false }) {
  return (
    <motion.section
      className={`cs-section${accent ? ' cs-section--accent' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className="cs-section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="cs-section-body">{children}</div>
    </motion.section>
  );
}
