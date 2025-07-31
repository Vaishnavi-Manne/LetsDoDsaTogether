import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import Aboutpage from './components/About/Aboutpage';
import AuthPage from './pages/AuthPage';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <Aboutpage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: ":level",
          element: <Panel />,
        },
        {
          path: "auth",
          element: <AuthPage />,
          children: [
            { index: true, element: <Login setIsLoggedIn={setIsLoggedIn} /> },
            { path: "login", element: <Login setIsLoggedIn={setIsLoggedIn} /> },
            { path: "signup", element: <Signup setIsLoggedIn={setIsLoggedIn} /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeToggle />
      <KeyboardShortcuts setIsLoggedIn={setIsLoggedIn} />
      <Header />
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  );
};

export default App;
