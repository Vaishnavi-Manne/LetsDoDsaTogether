import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Panel from './components/Panel';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import Aboutpage from './components/About/Aboutpage';
import AuthPage from './pages/AuthPage';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import Roadmap from './components/Roadmap';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <Aboutpage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: ':level', // example: /beginner or /advanced
        element: <Panel />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
        children: [
          { index: true, element: <Login /> },
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <Signup /> },
        ],
      },
    ],
  },
  {
    path: ':level/roadmap',
    element: <Roadmap />,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default App;
