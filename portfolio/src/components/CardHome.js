// src/components/Card.js
import React from 'react';
import SocialIcons from './SocialIcons';
import ButtonGroup from './ButtonGroup';
import './Card.css'; // Optional: include your card-specific styles here

const Card = () => {
  return (
    <div className="card">
      <p>
        👋 Hey, I'm Alex! I'm a software engineering student who enjoys exploring AI, 
        machine learning, and the world of data and development.
      </p>
      <p>
        Outside of coding, I enjoy playing volleyball, running around the neighbourhood, 
        and finding treasure at my local thrift store.
      </p>
      <SocialIcons />
      <ButtonGroup />
    </div>
  );
};

export default Card;
