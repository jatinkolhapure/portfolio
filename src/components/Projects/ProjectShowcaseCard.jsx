import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import './ProjectShowcaseCard.css';

export const ProjectShowcaseCard = ({ project, onViewDetails }) => {
  const cardRef = useRef(null);
  
  return (
    <motion.div
      ref={cardRef}
      className="project-showcase-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-showcase-inner">
        
        {/* Project Image Section */}
        <div className="project-image-wrapper">
          <div className="project-image-overlay"></div>
          <img src={project.image} alt={project.title} className="project-showcase-image" />
        </div>

        {/* Project Content Section */}
        <div className="project-content-section">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>

          <p className="project-description">{project.description}</p>

          {/* Tech Stack Chips */}
          <div className="project-tech-stack">
            {project.techStack.slice(0, 6).map((tech, idx) => (
              <span key={idx} className="project-tech-chip">{tech}</span>
            ))}
            {project.techStack.length > 6 && (
              <span className="project-tech-chip">+{project.techStack.length - 6} more</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="project-actions">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-glow"
            >
              <span>Live Project</span>
              <ExternalLink size={16} />
            </a>
            
            <button 
              onClick={onViewDetails} 
              className="btn btn-secondary btn-outline"
            >
              <span>View Details</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};
