
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="main-heading">Let's Do DSA Together 🚀</h1>
        <p className="sub-heading">
          Your one-stop guide to mastering Data Structures & Algorithms. From basics to advanced, all in one place.
        </p>
      </header>

      {/* New How it Works Section */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <p>Choose a level based on your comfort—Beginner or Advanced. Work through curated problems and learn with explanations. You can also go through our full roadmap for a structured approach!</p>
      </section>

      <section className="cards-section">
        <div className="card beginner">
          <h2>Beginner</h2>
          <p>Start your DSA journey with handpicked beginner-level problems and concepts explained simply.</p>
          <button onClick={() => navigate('/practice')}>Explore Beginner</button>
        </div>

        <div className="card advanced">
          <h2>Advanced</h2>
          <p>Take your skills up a notch. Dive into complex patterns, DP, graphs, and real interview problems.</p>
          <button onClick={() => navigate('/practice/advanced')}>Explore Advanced</button>
        </div>

        <div className="card both">
          <h2>All-in-One</h2>
          <p>Don't want to choose? Explore everything from beginner to advanced in a guided roadmap format.</p>
          <button onClick={() => navigate('/practice')}>Start Full Journey</button>
        </div>
      </section>

      <footer className="home-footer">
        <div className="flex justify-center gap-6 mb-2">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#about" className="hover:underline">About</a>
          <Link to="/contact" className="hover:underline bg-transparent border-none text-white cursor-pointer">Contact</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
        <p>Made with ❤️ for aspiring developers</p>
        <p className="text-xs text-gray-400">© 2025 Let's Do DSA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
