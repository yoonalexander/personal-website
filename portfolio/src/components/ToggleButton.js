// src/components/ToggleButton.js
import React from 'react';
import './ToggleButton.css'; // Optional: styles specific to the toggle button

const ToggleButton = ({ darkMode, toggleTheme }) => {
  return (
    <button 
      className="toggle-btn" 
      onClick={toggleTheme} 
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleButton;
