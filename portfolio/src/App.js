// src/App.js
import React, { useState } from 'react';
import Card from './components/CardHome.js';
import ToggleButton from './components/ToggleButton';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <ToggleButton darkMode={darkMode} toggleTheme={toggleTheme} />
      <Card />
    </div>
  );
}

export default App;
