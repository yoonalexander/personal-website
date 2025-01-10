import React from 'react';

function Projects() {
  const projectList = [
    'Island Generator',
    'Fitness Run App',
    'Company Communication App',
    'Dice Roll Game'
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
