import React from 'react';

function Skills() {
  const skills = [
    'Application Development',
    'Microsoft Azure',
    'Azure Databricks',
    'Prompt Engineering',
    'Data Structures and Algorithms',
    'Machine Learning',
    'C',
    'C++',
    'C#',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'MATLAB',
    'Git',
    'Android Studio',
    'Firebase',
    'Agile Methodologies',
    'Scrum',
    'Kanban',
    'Engineering Design',
    'Software Testing',
    'Software Design',
    'Engineering Management',
    'Software Development',
    'Object-Oriented Programming',
    'Microsoft Office',
    'Problem Solving',
    'Team Leadership'
  ];

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
