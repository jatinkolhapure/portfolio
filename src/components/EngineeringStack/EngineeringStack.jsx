import React, { useState } from 'react';
import { engineeringDomains, quickStatsPillars } from '../../data/skills';
import './EngineeringStack.css';

export const EngineeringStack = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDomains = activeFilter === 'all'
    ? engineeringDomains
    : engineeringDomains.filter(d => d.id === activeFilter);

  return (
    <section id="engineering" className="section engineering-section">
      <div className="container">
        
        {/* Simplified, High-End Header */}
        <div className="matrix-header">
          <div className="matrix-title-wrap">
            <span className="matrix-eyebrow">ARCHITECTURE &bull; FULL-STACK SPEC</span>
            <h2 className="matrix-title">Engineering Capabilities</h2>
            <p className="matrix-subtitle">
              Backend architectures, distributed primitives, data persistence, and client interfaces applied in production.
            </p> 
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="matrix-filter-bar" role="tablist" aria-label="Filter engineering stack">
            <button
              type="button"
              className={`matrix-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              role="tab"
              aria-selected={activeFilter === 'all'}
            >
              All
            </button>
            {engineeringDomains.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`matrix-filter-pill ${activeFilter === d.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(d.id)}
                role="tab"
                aria-selected={activeFilter === d.id}
              >
                {d.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Architectural Matrix Rows */}
        <div className="matrix-rows-container">
          {filteredDomains.map((domain) => {
            const indexNumber = String(
              engineeringDomains.findIndex(d => d.id === domain.id) + 1
            ).padStart(2, '0');

            return (
              <div 
                key={domain.id} 
                className="matrix-spec-row"
                style={{ '--row-accent': domain.accentColor }}
              >
                {/* Left Column: Number & Domain Identity */}
                <div className="matrix-col-identity">
                  <span className="matrix-row-num">{indexNumber}</span>
                  <div className="matrix-id-content">
                    <h3 className="matrix-domain-name">{domain.title}</h3>
                    <p className="matrix-domain-tagline">{domain.tagline}</p>
                  </div>
                </div>

                {/* Right Column: Clean Stack & Concept Tags (No Bullet Dots) */}
                <div className="matrix-col-details">
                  
                  {/* Primary Technology Badges */}
                  <div className="matrix-tech-flow">
                    {domain.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`tech-pill ${tech.highlight ? 'tech-pill-primary' : ''}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Architectural Concepts Tags (Clean Micro-Chips, Zero Bullets) */}
                  <div className="matrix-concepts-flow">
                    {domain.concepts.map((concept, cIdx) => (
                      <span key={cIdx} className="concept-tag">
                        {concept}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Architectural Ribbon */}
        <div className="matrix-footer-strip">
          {quickStatsPillars.map((p, idx) => (
            <div key={idx} className="matrix-foot-cell">
              <span className="foot-label">{p.label}:</span>
              <span className="foot-val">{p.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
