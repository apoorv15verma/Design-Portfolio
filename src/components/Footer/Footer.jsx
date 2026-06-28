import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">Apoorv Verma</span>
          <span className="footer-tagline">UI/UX Designer · New Delhi, India</span>
        </div>
        <div className="footer-center">
          <p className="footer-copy">
            &copy; {year} Apoorv Verma. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <a
            href="https://linkedin.com/in/apoorv15verma"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://apoorv15verma.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="mailto:apoorv@example.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
