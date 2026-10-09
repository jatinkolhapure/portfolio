import React from 'react';
import { ExternalLinkIcon, ArrowRightIcon, ServerIcon, ShieldCheckIcon, CpuIcon, LayersIcon } from '../common/Icons';
import './NexusPayFlagship.css';

export const NexusPayFlagship = ({ project, onExploreArchitecture }) => {
  return (
    <div className="nexuspay-card card-base">
      <div className="nexuspay-main-content">
        {/* Top Meta Bar */}
        <div className="nexuspay-meta-bar">
          <div className="nexuspay-badge-group">
            <span className="tag-badge tag-badge-accent">{project.badge}</span>
            <span className="status-indicator">
              <span className="status-dot"></span>
              <span>Live System</span>
            </span>
          </div>

          <span className="nexuspay-platform-id">PAYMENT INFRASTRUCTURE</span>
        </div>

        {/* Title & Tagline */}
        <div className="nexuspay-title-group">
          <h3 className="nexuspay-title">{project.title}</h3>
          <p className="nexuspay-tagline">{project.tagline}</p>
        </div>

        {/* Narrative Description */}
        <p className="nexuspay-description">
          {project.description}
        </p>

        {/* Engineering Metrics Row */}
        <div className="nexuspay-signals-grid">
          {project.signals.map((sig, idx) => (
            <div key={idx} className="nexuspay-signal-box">
              <span className="signal-metric">{sig.metric}</span>
              <span className="signal-label">{sig.label}</span>
            </div>
          ))}
        </div>

        {/* Architecture Key Strengths */}
        <div className="nexuspay-strengths-grid">
          <div className="strength-item">
            <div className="strength-icon"><ShieldCheckIcon size={16} /></div>
            <div>
              <span className="strength-title">Stateless Security &amp; HMAC</span>
              <p className="strength-desc">JWT + OAuth2 authentication with cryptographic SHA-256 HMAC webhook signing.</p>
            </div>
          </div>

          <div className="strength-item">
            <div className="strength-icon"><CpuIcon size={16} /></div>
            <div>
              <span className="strength-title">Event Streaming &amp; Idempotency</span>
              <p className="strength-desc">Apache Kafka pub/sub with Redis-backed distributed lock deduplication.</p>
            </div>
          </div>

          <div className="strength-item">
            <div className="strength-icon"><LayersIcon size={16} /></div>
            <div>
              <span className="strength-title">Double-Entry Ledger</span>
              <p className="strength-desc">Rigorous accounting invariants guaranteeing permanent mathematical balance.</p>
            </div>
          </div>

          <div className="strength-item">
            <div className="strength-icon"><ServerIcon size={16} /></div>
            <div>
              <span className="strength-title">Cloud Gateway &amp; Docker</span>
              <p className="strength-desc">Spring Cloud Gateway routing with Resilience4j circuit breaker isolation.</p>
            </div>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="nexuspay-tech-list">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tag-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="nexuspay-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="View Live NexusPay System"
          >
            <span>View Live System</span>
            <ExternalLinkIcon size={16} />
          </a>

          <button
            type="button"
            onClick={onExploreArchitecture}
            className="btn btn-secondary"
            aria-label="Explore NexusPay Architecture Case Study"
          >
            <span>Explore Architecture</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
