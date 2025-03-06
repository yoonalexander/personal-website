// src/components/SocialIcons.js
import React from 'react';
import './SocialIcons.css'; // Optional: styles specific to social icons

const SocialIcons = () => {
  return (
    <div className="icon-container">
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">💻</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Email">✉️</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Other 1">❤️</a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Other 2">⭐</a>
    </div>
  );
};

export default SocialIcons;
