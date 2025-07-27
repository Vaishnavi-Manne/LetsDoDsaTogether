import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import Header from './components/Header';  
import ThemeToggle from './components/ThemeToggle';

// Component to handle route synchronization with state
const RouteHandler = ({ setView }) => {
  const location = useLocation();

  useEffect(() => {
    // Map URL path to view state
    const path = location.pathname;
    if (path === '/' || path === '/home') {
      setView('home');
    } else if (path === '/beginner') {
      setView('beginner');
    } else if (path === '/advanced') {
      setView('advanced');
    } else if (path === '/contact' || path === '/about') {
      setView('contact');
    }
  }, [location.pathname, setView]);

  return null;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  // Handle page refresh - reset to home
  useEffect(() => {
    const handleBeforeUnload = () => {
      setView('home');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // If user is not logged in, show auth pages
  if (!isLoggedIn) {
    return (
      <div className="auth-app">
        <ThemeToggle />
        {authMode === 'login' ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            switchToSignup={() => setAuthMode('signup')}
          />
        ) : (
          <Signup
            setIsLoggedIn={setIsLoggedIn}
            switchToLogin={() => setAuthMode('login')}
          />
        )}
      </div>
    );
  }

  // Once logged in, show the main application with routing
  return (
    <Router>
      <RouteHandler setView={setView} />
      <ThemeToggle />
      <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
        <Routes>
          <Route path="/" element={<Home setView={setView} />} />
          <Route path="/home" element={<Home setView={setView} />} />
          <Route path="/practice" element={<Navigate to="/beginner" replace />} />
          <Route path="/beginner" element={<Panel setView={setView} tier="Beginner" />} />
          <Route path="/advanced" element={<Panel setView={setView} tier="Advanced" />} />
          <Route path="/contact" element={<ContactPage setView={setView} />} />
          <Route path="/about" element={<ContactPage setView={setView} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
