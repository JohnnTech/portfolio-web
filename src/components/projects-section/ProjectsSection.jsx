import React from 'react';
import './ProjectsSection.css'
import ProjectCard from './../project-card/ProjectCard';

const ProjectsSection = ({ title, projects }) => {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')}>
      <h2>{title}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;