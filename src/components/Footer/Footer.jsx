import "../Home.css";
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
                  <button onClick={() => setView('home')}>
                    <i className="fas fa-home" /> Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('beginner')}>
                    <i className="fas fa-play-circle" /> Beginner
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('advanced')}>
                    <i className="fas fa-rocket" /> Advanced
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('contact')}>
                    <i className="fas fa-envelope" /> Contact
                  </button>
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