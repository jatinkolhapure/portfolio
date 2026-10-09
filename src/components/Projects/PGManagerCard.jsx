import React from 'react';
import { ShieldCheckIcon, LayersIcon, CheckIcon } from '../common/Icons';
import './PGManagerCard.css';

export const PGManagerCard = ({ project }) => {
  return (
    <div className="client-project-card card-base">
      <div className="client-project-header">
        <div className="client-badge-group">
          <span className="tag-badge tag-badge-accent">{project.badge}</span>
          <span className="client-type-label">Commercial Deployment</span>
        </div>
        <h3 className="client-project-title">{project.title}</h3>
        <p className="client-project-tagline">{project.tagline}</p>
      </div>

      <p className="client-project-desc">
        {project.description}
      </p>

      {/* Client Context Banner */}
      <div className="client-context-box">
        <span className="client-context-title">Operational Context</span>
        <p className="client-context-text">{project.clientContext}</p>
      </div>

      {/* Storytelling Flow */}
      <div className="client-story-flow">
        <h4 className="story-flow-title">Engineering Case Study</h4>
        <div className="story-flow-steps">
          {project.highlights.map((item, idx) => (
            <div key={idx} className="story-step-item">
              <div className="story-step-header">
                <div className="story-step-indicator">
                  <CheckIcon size={12} />
                </div>
                <span className="story-step-label">{item.title}</span>
              </div>
              <p className="story-step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="client-tech-wrap">
        <span className="client-tech-label">Technologies</span>
        <div className="client-tech-pills">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tag-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
