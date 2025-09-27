import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Toaster } from "sonner";
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import './darkmode.css';
import './index.css';

// 1. Import AOS library and styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. Initialize AOS with default settings
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
