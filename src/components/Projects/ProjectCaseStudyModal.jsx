import React, { useEffect } from 'react';
import {
  CloseIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  CpuIcon,
  DatabaseIcon,
  ServerIcon,
  LayersIcon,
  CheckIcon
} from '../common/Icons';
import './ProjectCaseStudyModal.css';

export const ProjectCaseStudyModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { resumePoints, techStack } = project;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.tagline}</p>
          </div>
          <div className="modal-header-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>View Live System</span>
                <ExternalLinkIcon size={14} />
              </a>
            )}
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Details"
            >
              <CloseIcon size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body modal-body-clean">
          
          {/* Tech Stack Chips at top */}
          {techStack && (
            <div className="modal-tech-stack-minimal">
              <span className="tech-stack-label">Tech Stack:</span>
              {techStack.map((tech, idx) => (
                <span key={idx} className="tech-stack-item">
                  {tech}{idx < techStack.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          )}

          {/* Core Contributions / Resume Points */}
          <ul className="modal-resume-list">
            {resumePoints && resumePoints.map((point, idx) => (
              <li key={idx} className="resume-list-item">
                <span className="list-bullet">&bull;</span>
                <span className="list-text">{point}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};
