
         
         
         
         
         
         
         
         
         
         
         
import { useState } from 'react';

import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
// import ContactPage from './components/ContactPage'; // ❌ Not implemented
// import ThemeToggle from './components/ThemeToggle'; // ❌ Not implemented

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  // If user is not logged in, show auth pages
  if (!isLoggedIn) {
    return (
      <div className="auth-app">
        {/* <ThemeToggle /> */} {/* Commented because file is missing */}
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

  // Once logged in, show the main application
  return (
    <>
      {/* <ThemeToggle /> */} {/* Commented because file is missing */}
      <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
        {view === 'home' && <Home setView={setView} />}
        {view === 'beginner' && <Panel setView={setView} tier="Beginner" />}
        {view === 'advanced' && <Panel setView={setView} tier="Advanced" />}
        {/* {view === 'contact' && <ContactPage setView={setView} />} */} {/* Commented because file is missing */}
      </div>
    </>
  );
};

export default App;

