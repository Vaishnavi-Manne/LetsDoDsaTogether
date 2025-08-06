import "../Home.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-title">Let&apos;s Do DSA</h3>
              <p className="brand-tagline">Master algorithms, ace interviews</p>
            </div>

            <div className="footer-navigation">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/Beginner">
                    <i className="fas fa-play-circle" /> Beginner
                  </Link>
                </li>
                <li>
                  <Link to="/Advanced">
                    <i className="fas fa-rocket" /> Advanced
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <i className="fas fa-envelope" /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Discord">
                  <i className="fab fa-discord" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              <span>Made with <span role="img" aria-label="love">❤️</span> for aspiring developers</span>
              <span>© {new Date().getFullYear()} Let&apos;s Do DSA. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer