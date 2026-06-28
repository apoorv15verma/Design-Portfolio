import { motion } from 'framer-motion';
import { profile } from '../../data/projects';
import './Sidebar.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
});

/* ---- SVG Icons ---- */
const AvailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const RoleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const CompanyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function Sidebar() {
  const { name, role, company, location, website, availability, stats, about, skills, experience } = profile;

  return (
    <div className="sidebar">

      {/* Avatar */}
      <motion.div className="sidebar-avatar-block" {...fadeUp(0.05)}>
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">
            <img
              src="/images/avatar.png"
              alt={name}
              className="profile-avatar-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="profile-avatar-fallback">AV</div>
          </div>
          <span className="profile-available-dot" title="Available for work" />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h2 className="sidebar-name" {...fadeUp(0.1)}>{name}</motion.h2>

      {/* Info rows — matches the reference screenshot exactly */}
      <motion.div className="sidebar-meta-rows" {...fadeUp(0.15)}>
        <div className="meta-row">
          <span className="meta-icon"><AvailIcon /></span>
          <span className="meta-text">Available for Freelance &amp; Fulltime</span>
        </div>
        <div className="meta-row">
          <span className="meta-icon"><RoleIcon /></span>
          <span className="meta-text">{role}</span>
        </div>
        <div className="meta-row">
          <span className="meta-icon"><CompanyIcon /></span>
          <span className="meta-text">{company}</span>
        </div>
        <div className="meta-row">
          <span className="meta-icon"><LocationIcon /></span>
          <span className="meta-text">{location}</span>
        </div>
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="meta-row meta-row-link"
        >
          <span className="meta-icon"><LinkIcon /></span>
          <span className="meta-text meta-text-link">{website}</span>
        </a>
      </motion.div>

      {/* Action buttons */}
      <motion.div className="sidebar-actions" {...fadeUp(0.2)}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary sidebar-btn">
          <DownloadIcon />Resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary sidebar-btn">
          <LinkedInIcon />LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="btn btn-primary sidebar-btn sidebar-btn-hire">
          <MailIcon />Hire Me
        </a>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Availability */}
      <motion.div className="sidebar-section" {...fadeUp(0.25)}>
        <p className="sidebar-section-label">Availability</p>
        <div className="avail-list">
          {availability.map((item) => (
            <div className="avail-item" key={item}>
              <span className="avail-check"><CheckIcon /></span>
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Stats */}
      <motion.div className="sidebar-stats" {...fadeUp(0.3)}>
        <div className="stat-item">
          <span className="stat-num">{stats.projectViews}</span>
          <span className="stat-lbl">Project Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{stats.appreciations}</span>
          <span className="stat-lbl">Appreciations</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{stats.following}</span>
          <span className="stat-lbl">Following</span>
        </div>
      </motion.div>

      <div className="sidebar-divider" />

      {/* About */}
      <motion.div className="sidebar-section" {...fadeUp(0.35)}>
        <p className="sidebar-section-label">About</p>
        <p className="sidebar-about-text">{about}</p>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Skills */}
      <motion.div className="sidebar-section" {...fadeUp(0.4)}>
        <p className="sidebar-section-label">Skills</p>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span className="chip" key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Experience */}
      <motion.div className="sidebar-section" {...fadeUp(0.45)}>
        <p className="sidebar-section-label">Experience</p>
        <div className="exp-list">
          {experience.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-dot" />
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <span className="exp-company">{exp.company}</span>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Contact */}
      <motion.div className="sidebar-section sidebar-contact" {...fadeUp(0.5)}>
        <p className="sidebar-section-label">Contact</p>
        <a href={`mailto:${profile.email}`} className="sidebar-contact-link">
          <MailIcon />{profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="sidebar-contact-link">
          <LinkedInIcon />linkedin.com/in/apoorv15verma
        </a>
      </motion.div>

    </div>
  );
}
