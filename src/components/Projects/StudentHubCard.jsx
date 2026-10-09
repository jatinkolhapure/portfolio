import React from 'react';
import { ExternalLinkIcon, CheckIcon, CpuIcon, LayersIcon } from '../common/Icons';
import './StudentHubCard.css';

export const StudentHubCard = ({ project }) => {
  return (
    <div className="studenthub-card card-base">
      <div className="studenthub-header">
        <div className="studenthub-badge-group">
          <span className="tag-badge tag-badge-accent">{project.badge}</span>
          <span className="studenthub-source-label">Source Available</span>
        </div>
        <h3 className="studenthub-title">{project.title}</h3>
        <p className="studenthub-tagline">{project.tagline}</p>
      </div>

      <p className="studenthub-desc">
        {project.description}
      </p>

      {/* Metrics Row */}
      <div className="studenthub-signals">
        {project.signals.map((sig, idx) => (
          <div key={idx} className="studenthub-signal-box">
            <span className="sh-sig-metric">{sig.metric}</span>
            <span className="sh-sig-label">{sig.label}</span>
          </div>
        ))}
      </div>

      {/* Highlights List */}
      <div className="studenthub-highlights-list">
        {project.highlights.map((h, idx) => (
          <div key={idx} className="sh-highlight-item">
            <div className="sh-highlight-icon">
              <CheckIcon size={12} />
            </div>
            <div>
              <span className="sh-hl-title">{h.title}</span>
              <p className="sh-hl-desc">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="studenthub-tech-wrap">
        <span className="studenthub-tech-label">Technologies</span>
        <div className="studenthub-tech-pills">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tag-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action: Strict View Source Only (NO fake live demo) */}
      <div className="studenthub-actions">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          aria-label="View StudentHub Source on GitHub"
        >
          <span>View Source</span>
          <ExternalLinkIcon size={14} />
        </a>
      </div>
    </div>
  );
};
