import { useState } from 'react';

import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import Aboutpage from './components/About/Aboutpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import { AlgorithmVisualizer } from './components/AlgorithmVisualizer';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [view, setView] = useState('home');
  // const [authMode, setAuthMode] = useState('login'); 


  // auth setup will be done through backened and integrated later using rtk query

  // If user is not logged in, show auth pages
  // if (!isLoggedIn) {
  //   return (
  //     <div className="auth-app">
  //       <ThemeToggle />
  //       {authMode === 'login' ? (
  //         <Login
  //           setIsLoggedIn={setIsLoggedIn}
  //           switchToSignup={() => setAuthMode('signup')}
  //         />
  //       ) : (
  //         <Signup
  //           setIsLoggedIn={setIsLoggedIn}
  //           switchToLogin={() => setAuthMode('login')}
  //         />
  //       )}
  //     </div>
  //   );
  // }

  const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <HomePage />
          </>
        ),
      },
      {
        path: "about",
        element: <Aboutpage />,
      },
      {
        path: "contact",
        element: <ContactPage/>,
      },
      {
        path: "visualizer",
        element: <AlgorithmVisualizer/>,
      },
      {
        path: ":level",
        element: <Panel/>,
      },
      {
        path: "auth",
        element: (
          <AuthPage/>
        ),
        children: [
          { index: true, element: <Login /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> }
        ]
      }
    ],
  },
]);
  return (
    <>
      {/* {view !== 'home' && (
        <div className="navbar-wrapper">
          <Header setView={setView} />
        </div>
      )}
      <ThemeToggle />
      <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
        {view === 'home' && <Home setView={setView} />}
        {view === 'beginner' && <Panel setView={setView} tier="Beginner" />}
        {view === 'advanced' && <Panel setView={setView} tier="Advanced" />}
        {view === 'contact' && <ContactPage setView={setView} />}
        {view === 'about' && <Aboutpage setView={setView} />}
      </div> */}
      {/* <Navbar/>
      <Aboutpage/> */}
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  );
};

export default App;
