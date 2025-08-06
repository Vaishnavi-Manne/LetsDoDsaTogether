import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './darkmode.css';
import { ThemeProvider } from './components/ThemeContext';
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster/>
    </ThemeProvider>
  </React.StrictMode>
);

