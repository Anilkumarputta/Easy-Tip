import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { unregister } from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// register optional service worker for basic caching
// ensure light theme and clear any persisted theme choice (toggle removed)
try {
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('theme');
} catch (e) {}

unregister();

