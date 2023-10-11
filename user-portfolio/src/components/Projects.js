// Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of your project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'A description of your project 2.',
      link: 'https://example.com/project2',
    },
    // Add more project objects as needed
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
