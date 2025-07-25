import { useEffect } from 'react';

function KeyboardShortcuts({ setView, setIsLoggedIn }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('Pressed:', e.key, 'Alt?', e.altKey);
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            console.log('Go Home');
            setView('home');
            break;
          case 'b':
            console.log('Go Beginner');
            setView('beginner');
            break;
          case 'a':
            console.log('Go Advanced');
            setView('advanced');
            break;
          case 'c':
            console.log('Go Contact');
            setView('contact');
            break;
          case 'l':
            console.log('Logging out');
            setIsLoggedIn(false);
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setView, setIsLoggedIn]);

  return null;
}

export default KeyboardShortcuts;
