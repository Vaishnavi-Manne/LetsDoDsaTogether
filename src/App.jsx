import { useState } from 'react';
import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');

  if (!isLoggedIn) return <Login setIsLoggedIn={setIsLoggedIn} />;

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
      {view === 'home' && <Home setView={setView} />}
{view === 'beginner' && <Panel tier="beginner" setView={setView} />}
{view === 'advanced' && <Panel tier="advanced" setView={setView} />}

    </div>
  );
};

export default App;
