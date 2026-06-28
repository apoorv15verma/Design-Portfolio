import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.css';

export default function ProjectGrid({ projects }) {
  return (
    <section className="project-grid-section" id="panel-work" role="tabpanel" aria-label="Work">
      <div className="section-header-row">
        <motion.div
          className="section-header-left"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="projects-heading">Projects</h2>
          <span className="projects-count">{projects.length}</span>
        </motion.div>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
