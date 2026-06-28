import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Portfolio hero">

      {/* Cover image */}
      <div className="hero-cover">
        <img
          src="/images/cover.png"
          alt="Apoorv Verma – Let's Create Designs People Love"
          className="hero-cover-img"
          loading="eager"
        />
        {/* Bottom fade into page */}
        <div className="hero-cover-fade" />
      </div>

      {/* Name + role bottom-left overlay */}
      <motion.div
        className="hero-name-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="hero-name">APOORV VERMA</h1>
        <p className="hero-tagline">UI/UX Designer · New Delhi, India</p>
      </motion.div>

      {/* Floating stat chips */}
      <motion.div
        className="hero-chip hero-chip-1"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <span className="hero-chip-dot" style={{ background: '#00D4AA' }} />
        22 Appreciations
      </motion.div>

      <motion.div
        className="hero-chip hero-chip-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <span className="hero-chip-dot" style={{ background: '#fff' }} />
        668 Views
      </motion.div>

    </section>
  );
}
