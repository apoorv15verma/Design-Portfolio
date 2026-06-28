import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const DESKTOP_TABS = [
  { id: 'work', label: 'Work' },
  { id: 'info', label: 'Info' },
  { id: 'experience', label: 'Experience' },
];

const MOBILE_TABS = [
  { id: 'work', label: 'Work' },
  { id: 'info', label: 'Info' },
  { id: 'experience', label: 'Experience' },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tabs = isMobile ? MOBILE_TABS : DESKTOP_TABS;

  return (
    <nav
      ref={navRef}
      className={`content-nav${isScrolled ? ' content-nav--scrolled' : ''}`}
      role="tablist"
      aria-label="Portfolio sections"
    >
      <div className="content-nav-inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              className={`nav-tab${isActive ? ' nav-tab--active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="nav-tab-label">{tab.label}</span>
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="nav-tab-indicator"
                    layoutId="nav-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Desktop right actions */}
      <div className="nav-right desktop-only">
        <button className="nav-action-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Filter
        </button>
        <button className="nav-action-btn nav-action-btn--icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
