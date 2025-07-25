import { useState, useEffect } from 'react';
import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import KeyboardShortcuts from './components/KeyboardShortcuts';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [view, setView] = useState('home');
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="auth-app">
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

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
      <KeyboardShortcuts setView={setView} setIsLoggedIn={setIsLoggedIn} />
      {view === 'home' && <Home setView={setView} />}
      {view === 'beginner' && <Panel setView={setView} tier="Beginner" />}
      {view === 'advanced' && <Panel setView={setView} tier="Advanced" />}
      {view === 'contact' && <ContactPage setView={setView} />}
    </div>
  );
};

export default App;
