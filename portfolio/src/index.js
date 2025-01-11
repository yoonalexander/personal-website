import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct module for React 18+
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
