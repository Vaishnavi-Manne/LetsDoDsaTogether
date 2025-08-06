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

const App = () => {


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

      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  );
};

export default App;
