import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from './Header';

const Home = ({ setView }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    setView(route);
    navigate(`/${route === 'home' ? '' : route}`);
  };

  return (
    <div className="home-container">
      {/* ───────── Hero ───────── */}
       <Header />
      <header className="home-header">
        <h1 className="main-heading">Let&apos;s Do DSA Together 🚀</h1>
        <p className="sub-heading">
          Your one-stop guide to mastering Data Structures &amp; Algorithms –
          from basics to advanced, all in one place.
        </p>
      </header>

      {/* ───────── How it works ───────── */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <p>
          Choose a level based on your comfort—Beginner or Advanced. Work
          through curated problems with explanations, or follow our full
          roadmap for a structured approach!
        </p>
      </section>

      {/* ───────── Level Cards ───────── */}
      <main className="cards-section">
        <div className="card beginner">
          <h2>Beginner</h2>
          <p>
            Start your DSA journey with hand-picked beginner-level problems and
            concepts explained simply.
          </p>
          <button onClick={() => handleNavigation('beginner')}>Explore Beginner</button>
        </div>

        <div className="card advanced">
          <h2>Advanced</h2>
          <p>
            Take your skills up a notch. Dive into complex patterns, DP,
            graphs, and real interview problems.
          </p>
          <button onClick={() => handleNavigation('advanced')}>Explore Advanced</button>
        </div>

        <div className="card both">
          <h2>All-in-One</h2>
          <p>
            Don&apos;t want to choose? Explore everything in a guided roadmap
            from beginner to advanced.
          </p>
          <button onClick={() => handleNavigation('beginner')}>Start Full Journey</button>
        </div>
      </main>

      {/* ───────── Enhanced Professional Footer ───────── */}
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
                  <button onClick={() => handleNavigation('home')}>
                    <i className="fas fa-home" /> Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('beginner')}>
                    <i className="fas fa-play-circle" /> Beginner
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('advanced')}>
                    <i className="fas fa-rocket" /> Advanced
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('contact')}>
                    <i className="fas fa-envelope" /> Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="GitHub" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
                  <i className="fab fa-github" />
                </a>
                <a href="#" aria-label="LinkedIn" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" aria-label="Twitter" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Discord" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
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
  );
};

export default Home;
