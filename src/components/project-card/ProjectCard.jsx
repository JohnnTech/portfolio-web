import './ProjectCard.css'
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;