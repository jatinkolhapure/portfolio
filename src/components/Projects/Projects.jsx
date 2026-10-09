import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectShowcaseCard } from './ProjectShowcaseCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import './Projects.css';

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const showcaseProjects = projects.filter(p => p.id === 'nexuspay' || p.id === 'pg-manager');

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-showcase-layout">
          {showcaseProjects.map((project) => (
            <ProjectShowcaseCard 
              key={project.id} 
              project={project} 
              onViewDetails={() => handleOpenDetails(project)} 
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <ProjectCaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};
