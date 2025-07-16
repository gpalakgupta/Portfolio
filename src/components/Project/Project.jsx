import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        These projects showcase my technical skills and experience through real-world applications. Each project includes a brief description and links to the code repository and live demo.
      </p>

      <div className="projects-placeholder">
        <p className="coming-soon">Projects coming soon...</p>
      </div>
    </section>
  );
};

export default Projects;
