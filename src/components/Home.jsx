import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain, Zap, Target, BookOpen, Trophy } from 'lucide-react';
import './Home.css';
import {toast} from "sonner";

const Home = () => {
  const navigate = useNavigate();
  const handleBeginnerClick = (level) => {
    navigate(`/${level}`);
    toast.success(`Master the ${level} level questions with our comprehensive guide!`);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { icon: Code2, title: "Structured Learning", desc: "Step-by-step approach" },
    { icon: Brain, title: "Problem Solving", desc: "Think like a programmer" },
    { icon: Target, title: "Interview Ready", desc: "Ace technical interviews" }
  ];

  return (
    <motion.div 
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ───────── Enhanced Hero Section ───────── */}
      <motion.header className="home-header" variants={itemVariants}>
        <motion.div className="hero-badge" variants={itemVariants}>
          <Zap className="hero-badge-icon" size={16} />
          <span>Master DSA with confidence</span>
        </motion.div>
        
        <motion.h1 className="main-heading" variants={itemVariants}>
          Let&apos;s Do DSA Together 
          <motion.span 
            className="heading-rocket"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            🚀
          </motion.span>
        </motion.h1>
        
        <motion.p className="sub-heading" variants={itemVariants}>
          Your one-stop guide to mastering Data Structures & Algorithms –
          from basics to advanced, all in one place.
        </motion.p>

        <motion.div className="hero-features" variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="hero-feature"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="feature-icon" size={20} />
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.header>

      {/* ───────── Enhanced How it works ───────── */}
      <motion.section className="how-it-works" variants={itemVariants}>
        <motion.div className="section-header" variants={itemVariants}>
          <BookOpen className="section-icon" size={32} />
          <h2>How it works</h2>
        </motion.div>
        <motion.p variants={itemVariants}>
          Choose a level based on your comfort—Beginner or Advanced. Work
          through curated problems with explanations, or follow our full
          roadmap for a structured approach!
        </motion.p>
        
        <motion.div className="process-steps" variants={itemVariants}>
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
        </motion.div>
      </motion.section>

      {/* ───────── Enhanced Level Cards ───────── */}
      <motion.main className="cards-section" variants={itemVariants}>
        <motion.div 
          className="card beginner"
          variants={cardVariants}
          whileHover="hover"
        >
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
          <motion.button 
            onClick={() => handleBeginnerClick('Begineer')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Explore Beginner
            <ArrowRight size={16} />
          </motion.button>
          <div className="card-stats">
            <span>200+ Problems</span>
            <span>Basic Concepts</span>
          </div>
        </motion.div>

        <motion.div 
          className="card advanced"
          variants={cardVariants}
          whileHover="hover"
        >
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
          <motion.button 
            onClick={() => handleBeginnerClick('Advanced')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Explore Advanced
            <ArrowRight size={16} />
          </motion.button>
          <div className="card-stats">
            <span>300+ Problems</span>
            <span>Complex Patterns</span>
          </div>
        </motion.div>

        <motion.div 
          className="card both"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="card-header">
            <div className="card-icon all-in-one-icon">
              <Trophy size={28} />
            </div>
            <h2>All-in-One</h2>
          </div>
          <p>
            Don&apos;t want to choose? Explore everything in a guided roadmap
            from beginner to advanced.
          </p>
          <motion.button 
            onClick={() => handleBeginnerClick('All-in-one')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button featured"
          >
            Start Full Journey
            <ArrowRight size={16} />
          </motion.button>
          <div className="card-stats">
            <span>500+ Problems</span>
            <span>Complete Roadmap</span>
          </div>
        </motion.div>
      </motion.main>
    </motion.div>
  );
};

export default Home;
