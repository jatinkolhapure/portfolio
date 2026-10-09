import React from 'react';
import { motion } from 'framer-motion';
import { educationHistory } from '../../data/education';
import { AwardIcon, SparklesIcon, CalendarIcon } from '../common/Icons';
import './AcademicExcellence.css';

export const AcademicExcellence = () => {
  const mca = educationHistory.find(e => e.degree.includes('MCA'));
  const bca = educationHistory.find(e => e.degree.includes('BCA'));
  const hsc = educationHistory.find(e => e.degree.includes('HSC'));
  const ssc = educationHistory.find(e => e.degree.includes('SSC'));

  const timelineData = [
    { ...mca, side: 'left', theme: 'blue', icon: <SparklesIcon size={18} />, badgeLabel: 'Currently Pursuing' },
    { ...bca, side: 'right', theme: 'gold', icon: <AwardIcon size={18} />, badgeLabel: '1st Rank in University' },
    { ...hsc, side: 'left', theme: 'neutral', icon: null, badgeLabel: null },
    { ...ssc, side: 'right', theme: 'neutral', icon: null, badgeLabel: null },
  ];

  const cardVariants = {
    hidden: (side) => ({ 
      opacity: 0, 
      x: side === 'left' ? -50 : 50,
      y: 20
    }),
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section id="academics" className="section academics-timeline-section">
      <div className="container">
        
        <div className="academics-header-epic">
          <h2 className="epic-title">Academic Journey</h2>
          <p className="epic-subtitle">
            A track record of absolute excellence and rigorous computer science discipline.
          </p>
        </div>

        <div className="epic-timeline-container">
          {/* Center Glowing Line */}
          <div className="epic-timeline-line">
            <div className="epic-timeline-line-glow"></div>
          </div>

          {timelineData.map((item, idx) => (
            <div key={idx} className={`epic-timeline-row ${item.side}`}>
              
              {/* Timeline Node Center */}
              <div className={`epic-timeline-node ${item.theme}-node`}>
                <div className="node-inner"></div>
                <div className="node-pulse"></div>
              </div>

              {/* The Card */}
              <motion.div 
                className={`epic-glass-card ${item.theme}-glass`}
                custom={item.side}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Optional Top Badge */}
                {item.badgeLabel && (
                  <div className={`epic-card-badge badge-${item.theme}`}>
                    {item.icon} <span>{item.badgeLabel}</span>
                  </div>
                )}

                <h3 className="epic-degree">{item.degree}</h3>
                <p className="epic-institution">{item.institution}</p>
                
                <div className="epic-score-block">
                  <span className={`epic-score-value text-${item.theme}`}>{item.score.replace('Year 1 CGPA: ', '').replace('CGPA: ', '').replace('Score: ', '').split(' —')[0]}</span>
                  <span className="epic-score-label">{item.score.includes('CGPA') ? 'CGPA' : 'Score'}</span>
                </div>
                
                <p className="epic-details">{item.details}</p>
                
                <div className="epic-footer">
                  <span className="epic-date"><CalendarIcon size={14} /> {item.timeline}</span>
                </div>
              </motion.div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};
