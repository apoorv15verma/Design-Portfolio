import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ProjectCard({ project, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate(`/project/${project.id}`);
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') handleClick();
  };

  const images = project.images && project.images.length > 0
    ? project.images
    : project.cover
    ? [project.cover]
    : null;

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKey}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} case study`}
    >
      {/* Thumbnail — all project images stacked in sequence */}
      <div className="card-thumb">

        {images ? (
          <div className="card-images-stack">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screen ${i + 1}`}
                className="card-stack-img"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        ) : (
          /* Gradient fallback when no images */
          <div className="card-thumb-gradient" style={{ background: project.gradient }}>
            <div className="card-thumb-content">
              <div className={`card-thumb-label ${project.isDark ? 'card-thumb-label--light' : ''}`}>
                {project.title}
              </div>
              <div className={`card-thumb-category ${project.isDark ? 'card-thumb-category--light' : ''}`}>
                {project.subtitle}
              </div>
            </div>
          </div>
        )}

        {/* Category tag */}
        <div className="card-tag">{project.category}</div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="card-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="card-cta-btn"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 6, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                tabIndex={-1}
              >
                View Case Study
                <ArrowIcon />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card info */}
      <div className="card-info">
        <div className="card-info-main">
          <h3 className="card-title">{project.title}</h3>
          <span className="card-year">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
