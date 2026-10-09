import React from 'react';
import { journeyMilestones } from '../../data/achievements';
import './Journey.css';

export const Journey = () => {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Engineering Evolution</span>
          <h2 className="section-title">Engineering Journey</h2>
          <p className="section-subtitle">
            A progression marked by compounding depth: from foundational algorithmic principles to
            distributed payment infrastructure and production client delivery.
          </p>
        </div>

        <div className="journey-timeline">
          {journeyMilestones.map((item, idx) => (
            <div key={idx} className="timeline-node">
              <div className="timeline-marker">
                <span className="timeline-phase">{item.phase}</span>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content card-base">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
