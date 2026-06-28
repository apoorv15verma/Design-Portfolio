import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import Footer from '../../components/Footer/Footer';
import { projects, profile } from '../../data/projects';
import './Home.css';

function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp - 1}px)`);
    const h = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [bp]);
  return isMobile;
}

/* ── Info Panel ── */
function InfoPanel() {
  return (
    <motion.section className="info-panel" role="tabpanel"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>

      <div className="info-block">
        <h3 className="info-block-title">About</h3>
        <p className="info-block-body">{profile.about}</p>
      </div>

      <div className="info-block">
        <h3 className="info-block-title">Skills &amp; Tools</h3>
        <div className="skills-grid">
          {profile.skills.map((s) => <div className="skill-pill" key={s}>{s}</div>)}
        </div>
      </div>

      <div className="info-block">
        <h3 className="info-block-title">Education</h3>
        <div className="edu-card">
          <div className="edu-icon-wrap">🎓</div>
          <div className="edu-info">
            <h4 className="edu-degree">{profile.education.degree}</h4>
            <span className="edu-school">{profile.education.school}, {profile.education.location}</span>
            <div className="edu-meta">
              <span className="edu-year">{profile.education.period}</span>
              <span className="edu-grade">Grade: {profile.education.grade}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-block">
        <h3 className="info-block-title">Achievements</h3>
        <ul className="achievements-list">
          {profile.achievements.map((a, i) => (
            <li className="achievement-item" key={i}>
              <span className="achievement-dot">★</span>
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="info-block">
        <h3 className="info-block-title">Contact</h3>
        <div className="contact-cards">
          {[
            { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
            { icon: '📞', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/apoorv15verma', href: profile.linkedin },
            { icon: '🎨', label: 'Behance', value: 'behance.net/apoorv15verma', href: profile.behance },
          ].map((c) => (
            <a key={c.label} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">{c.icon}</div>
              <div className="contact-card-info">
                <span className="contact-card-label">{c.label}</span>
                <span className="contact-card-value">{c.value}</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ── Experience Panel ── */
function ExperiencePanel() {
  return (
    <motion.section className="info-panel" role="tabpanel"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>

      <div className="info-block">
        <h3 className="info-block-title">Work Experience</h3>
        <div className="exp-timeline">
          {profile.experience.map((exp, i) => (
            <div className="exp-timeline-item" key={i}>
              <div className="exp-timeline-line">
                <div className="exp-timeline-dot" />
                {i < profile.experience.length - 1 && <div className="exp-timeline-connector" />}
              </div>
              <div className="exp-timeline-content">
                <div className="exp-header-row">
                  <div>
                    <h4 className="exp-title">{exp.role}</h4>
                    <div className="exp-company-row">
                      <span className="exp-company-name">{exp.company}</span>
                      <span className="exp-location">· {exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-right">
                    <span className="exp-type-badge">{exp.type}</span>
                    <span className="exp-duration">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet-item">
                      <span className="exp-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-block">
        <h3 className="info-block-title">Education</h3>
        <div className="edu-card">
          <div className="edu-icon-wrap">🎓</div>
          <div className="edu-info">
            <h4 className="edu-degree">{profile.education.degree}</h4>
            <span className="edu-school">{profile.education.school}</span>
            <div className="edu-meta">
              <span className="edu-year">{profile.education.period}</span>
              <span className="edu-grade">Grade: {profile.education.grade}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ── Mobile Profile Card ── */
function MobileProfile() {
  return (
    <div className="mobile-profile">
      <div className="mobile-profile-avatar-wrap">
        <div className="mobile-profile-avatar">
          <img src="/images/avatar.png" alt="Apoorv Verma"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
          <div className="mobile-profile-avatar-fallback">AV</div>
        </div>
      </div>
      <h2 className="mobile-profile-name">Apoorv Verma</h2>

      <div className="mobile-meta-rows">
        {[
          { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, text: 'Available for Freelance & Fulltime' },
          { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, text: 'UI/UX Designer' },
          { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, text: 'Webority Technologies' },
          { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: 'New Delhi, India' },
        ].map((r, i) => (
          <div className="mobile-meta-row" key={i}>
            {r.icon}<span>{r.text}</span>
          </div>
        ))}
        <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="mobile-meta-row mobile-meta-link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span>{profile.website}</span>
        </a>
      </div>

      <div className="mobile-profile-ctas">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">Hire Me</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume</a>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function Home() {
  const [activeTab, setActiveTab] = useState('work');
  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (!['work', 'info', 'experience'].includes(activeTab)) setActiveTab('work');
  }, [isMobile]);

  const renderContent = () => {
    switch (activeTab) {
      case 'info':       return <InfoPanel key="info" />;
      case 'experience': return <ExperiencePanel key="experience" />;
      default:
        return (
          <motion.div key="work" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProjectGrid projects={projects} />
          </motion.div>
        );
    }
  };

  return (
    <div className="page-wrapper">
      <Hero />
      <MobileProfile />
      <div className="content-wrapper">
        <div className="sidebar-col">
          <div className="sidebar-sticky"><Sidebar /></div>
        </div>
        <div className="main-col">
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}
