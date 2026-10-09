import React from 'react';
import { achievements } from '../../data/achievements';
import { AwardIcon } from '../common/Icons';
import './Achievements.css';

// Custom Bespoke Honor Icons
const HackathonPodiumIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3M6 3h12v7a6 6 0 0 1-12 0V3zM12 16v5M8 21h8" />
  </svg>
);

const AlgorithmicCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

export const Achievements = () => {
  const getHonorIcon = (id, size = 20) => {
    switch (id) {
      case 'rank-1':
        return <AwardIcon size={size} />;
      case 'vishwacode':
        return <HackathonPodiumIcon size={size} />;
      case 'leetcode':
        return <AlgorithmicCodeIcon size={size} />;
      default:
        return <AwardIcon size={size} />;
    }
  };

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="honors-header">
          <div className="honors-eyebrow-wrap">
            <span className="honors-eyebrow">HONORS / COMPETITIVE RECOGNITION</span>
          </div>
          <h2 className="honors-title">Key Honors &amp; Distinctions</h2>
          <p className="honors-subtitle">
            Academic gold-standard performance, competitive hackathon sprints, and continuous algorithmic problem solving.
          </p>
        </div>

        {/* 3-Card Balanced Minimalist Grid */}
        <div className="honors-cards-grid">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="honor-card-item"
              style={{ '--honor-accent': item.accentColor }}
            >
              {/* Top Row: Icon */}
              <div className="honor-card-topbar">
                <div 
                  className="honor-icon-frame"
                  style={{ color: item.accentColor }}
                >
                  {getHonorIcon(item.id, 20)}
                </div>
              </div>

              {/* Highlight Metric Callout */}
              <div className="honor-metric-callout" style={{ color: item.accentColor }}>
                <span>{item.metric}</span>
              </div>

              {/* Title & Organization */}
              <h3 className="honor-card-title">{item.title}</h3>
              <div className="honor-card-meta">
                <span className="honor-meta-org">{item.organization}</span>
                <span className="honor-meta-slash">/</span>
                <span className="honor-meta-date">{item.date}</span>
              </div>

              {/* Short Description */}
              <p className="honor-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
