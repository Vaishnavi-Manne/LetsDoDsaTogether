import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Brain, Zap, Target, BookOpen, Trophy } from 'lucide-react';
import './Home.css';
import {toast} from "sonner";
import ProblemOfTheDay from './ProblemOfTheDay';

const Home = () => {
  const navigate = useNavigate();
  const handleBeginnerClick = (level) => {
    navigate(`/${level}`);
    toast.success(`Master the ${level} level questions with our comprehensive guide!`);
  };


  const features = [
    { icon: Code2, title: "Structured Learning", desc: "Step-by-step approach" },
    { icon: Brain, title: "Problem Solving", desc: "Think like a programmer" },
    { icon: Target, title: "Interview Ready", desc: "Ace technical interviews" }
  ];

  return (
    <div className="home-container">
      {/* ───────── Enhanced Hero Section ───────── */}
      <header className="home-header">
        <div className="hero-badge">
          <Zap className="hero-badge-icon" size={16} />
          <span>Master DSA with confidence</span>
        </div>

        <h1 className="main-heading">
          Let's Do DSA Together
          <span className="heading-rocket">🚀</span>
        </h1>

        <p className="sub-heading">
          Your one-stop guide to mastering Data Structures & Algorithms –
          from basics to advanced, all in one place.
        </p>

        <div className="hero-features">
          {features.map((feature, index) => (
            <div key={index} className="hero-feature">
              <feature.icon className="feature-icon" size={20} />
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* ───────── Enhanced How it works ───────── */}
      <section className="how-it-works">
        <div className="section-header">
          <BookOpen className="section-icon" size={32} />
          <h2>How it works</h2>
        </div>
        <p>
          Choose a level based on your comfort—Beginner or Advanced. Work
          through curated problems with explanations, or follow our full
          roadmap for a structured approach!
        </p>

        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Choose your level</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Practice problems</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Master concepts</p>
          </div>
        </div>
      </section>

      {/* ───────── Problem of the Day ───────── */}
      <ProblemOfTheDay />

      {/* ───────── Enhanced Level Cards ───────── */}
      <main className="cards-section">
        <div className="card beginner">
          <div className="card-header">
            <div className="card-icon beginner-icon">
              <BookOpen size={28} />
            </div>
            <h2>Beginner</h2>
          </div>
          <p>
            Start your DSA journey with hand-picked beginner-level problems and
            concepts explained simply.
          </p>
          <button
            onClick={() => handleBeginnerClick('Begineer')}
            className="cta-button"
          >
            Explore Beginner
            <ArrowRight size={16} />
          </button>
          <div className="card-stats">
            <span>200+ Problems</span>
            <span>Basic Concepts</span>
          </div>
        </div>

        <div className="card advanced">
          <div className="card-header">
            <div className="card-icon advanced-icon">
              <Brain size={28} />
            </div>
            <h2>Advanced</h2>
          </div>
          <p>
            Take your skills up a notch. Dive into complex patterns, DP,
            graphs, and real interview problems.
          </p>
          <button
            onClick={() => handleBeginnerClick('Advanced')}
            className="cta-button"
          >
            Explore Advanced
            <ArrowRight size={16} />
          </button>
          <div className="card-stats">
            <span>300+ Problems</span>
            <span>Complex Patterns</span>
          </div>
        </div>

        <div className="card both">
          <div className="card-header">
            <div className="card-icon all-in-one-icon">
              <Trophy size={28} />
            </div>
            <h2>All-in-One</h2>
          </div>
          <p>
            Don't want to choose? Explore everything in a guided roadmap
            from beginner to advanced.
          </p>
          <button
            onClick={() => handleBeginnerClick('All-in-one')}
            className="cta-button featured"
          >
            Start Full Journey
            <ArrowRight size={16} />
          </button>
          <div className="card-stats">
            <span>500+ Problems</span>
            <span>Complete Roadmap</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
