import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';

// Component Imports
import Panel from "./components/Panel";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactPage from "./components/ContactPage";
import Aboutpage from "./components/About/Aboutpage";
import MainLayout from "./components/MainLayout";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import Roadmap from "./components/Roadmap";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";


const App = () => {
  // This useEffect hook initializes the AOS library when the App component first loads.
  // While initialization is also in main.jsx, this ensures it's ready for the router.
  // It's also a good place to refresh animations if needed on route changes in more complex setups.
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
    });
    // Optional: Refresh AOS on component mount to recalculate positions
    AOS.refresh();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // The children routes are where the components with actual animations are rendered.
      // For example, HomePage, Aboutpage, and ContactPage have 'data-aos' attributes.
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
          path: "visualizer",
          element: <AlgorithmVisualizer />,
        },
        {
          path: ":level",
          element: <Panel />,
        },
        {
          path: "roadmap",
          element: <Roadmap />,
        },
        {
          path: "auth",
          element: <AuthPage />,
          children: [
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
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
