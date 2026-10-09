import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ServerIcon, CpuIcon, LayersIcon } from '../common/Icons';
import './About.css';

export const About = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    }
  };

  const charVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.05 } }
  };

  const text1 = "Java Full Stack ".split("");
  const text2 = "Engineer.".split("");

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-editorial-layout">
          {/* Left Column: Heading */}
          <div className="about-editorial-header">
            <div className="editorial-label-wrapper">
              <span className="editorial-label">PROFESSIONAL SUMMARY</span>
            </div>
            <motion.h2 
              className="editorial-title"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {text1.map((char, i) => (
                <motion.span key={`t1-${i}`} variants={charVariant} style={{ display: 'inline', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                  {char}
                </motion.span>
              ))}
              <span className="title-gradient">
                {text2.map((char, i) => (
                  <motion.span key={`t2-${i}`} variants={charVariant} style={{ display: 'inline' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Content */}
          <div className="about-editorial-content">
            <h3 className="editorial-subheading">
              Building software that scales, survives edge cases, and delivers uncompromising reliability.
            </h3>
            
            <p className="editorial-lead">
              I am a driven software engineer (MCA 2027) rooted in robust computer science principles. My expertise bridges deep <span className="highlight-text">core Java fundamentals</span> (OOP, Collections, Multithreading, Java 8&ndash;21) with the ability to design secure, distributed architectures.
            </p>
            
            <p className="editorial-body">
              I have independently engineered and deployed production-grade systems from the ground up—ranging from a <span className="highlight-text">7-service microservice payment infrastructure</span> powered by Spring Boot, Kafka, and Redis, to fully installable B2B SaaS platforms built with modern React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
