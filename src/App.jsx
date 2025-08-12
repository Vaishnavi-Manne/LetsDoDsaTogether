import { useState } from "react";

import Panel from "./components/Panel";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactPage from "./components/ContactPage";
import Aboutpage from "./components/About/Aboutpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import Roadmap from "./components/Roadmap";

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
