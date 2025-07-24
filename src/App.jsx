import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage'; // Add this import

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const location = useLocation();

  // If user is not logged in, always redirect to login/signup and reset URL to '/'
  if (!isLoggedIn) {
    if (location.pathname !== '/') {
      return <Navigate to="/" replace />;
    }
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

  // Once logged in, show the main application with routes
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Panel tier="Beginner" />} />
        <Route path="/practice/advanced" element={<Panel tier="Advanced" />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;

