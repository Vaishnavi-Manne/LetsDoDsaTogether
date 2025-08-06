import { useNavigate } from 'react-router-dom';
import './Home.css';
import {toast} from "sonner";

const Home = ({ setView }) => {
  const navigate = useNavigate();
  const handleBeginnerClick = (level) => {
    navigate(`/${level}`);
    toast.success(`Master the ${level} level questions with our comprehensive guide!`);
  };
  return (
    <div className="home-container mt-10">
      {/* ───────── Hero ───────── */}
       {/* <Header /> */}
      <header className="home-header">
        <h1 className="main-heading">Let&apos;s Do DSA Together 🚀</h1>
        <p className="sub-heading">
          Your one-stop guide to mastering Data Structures &amp; Algorithms –
          from basics to advanced, all in one place.
        </p>
      </header>

      {/* ───────── How it works ───────── */}
      <section className=" how-it-works">
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
          <button onClick={() => handleBeginnerClick('Begineer')}>Explore Beginner</button>
        </div>

        <div className="card advanced">
          <h2>Advanced</h2>
          <p>
            Take your skills up a notch. Dive into complex patterns, DP,
            graphs, and real interview problems.
          </p>
          <button onClick={() => handleBeginnerClick('Advanced')}>Explore Advanced</button>
        </div>

        <div className="card both">
          <h2>All-in-One</h2>
          <p>
            Don&apos;t want to choose? Explore everything in a guided roadmap
            from beginner to advanced.
          </p>
          <button onClick={() => handleBeginnerClick('All-in-one')}>Start Full Journey</button>
        </div>
      </main>
      {/* ------Footer-------- */}
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
                <button onClick={() => setView("home")}>
                  <i className="fas fa-home" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => setView("beginner")}>
                  <i className="fas fa-play-circle" /> Beginner
                </button>
              </li>
              <li>
                <button onClick={() => setView("advanced")}>
                  <i className="fas fa-rocket" /> Advanced
                </button>
              </li>
              <li>
                <button onClick={() => setView("contact")}>
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
            <span>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              for aspiring developers
            </span>
            <span>
              © {new Date().getFullYear()} Let&apos;s Do DSA. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
