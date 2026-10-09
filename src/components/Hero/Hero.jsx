import React from 'react';
import { ArrowRight, Download, Server, Database, Code2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../common/Icons';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';
import './Hero.css';

export const Hero = () => {
  // Elegant, Vercel/Linear-style staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 } 
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", stiffness: 100, damping: 20, mass: 1,
        staggerChildren: 0.015,
        delayChildren: 0.4
      } 
    }
  };

  const charVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } }
  };

  // Pre-split text for typewriter effect
  const sub1 = "Specializing in ".split("");
  const sub2 = "secure backend architectures".split("");
  const sub3 = ", distributed event-driven services, and mission-critical payment infrastructure built with ".split("");
  const sub4 = "Java, Spring Boot, Kafka, and React".split("");
  const sub5 = ".".split("");

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            I build systems that{' '}
            <span className="text-highlight">solve real problems.</span>
          </motion.h1>
          
          <motion.p variants={subtitleVariants} className="hero-subtitle">
            {sub1.map((char, i) => <motion.span key={`s1-${i}`} variants={charVariant}>{char}</motion.span>)}
            <strong className="text-strong">
              {sub2.map((char, i) => <motion.span key={`s2-${i}`} variants={charVariant}>{char}</motion.span>)}
            </strong>
            {sub3.map((char, i) => <motion.span key={`s3-${i}`} variants={charVariant}>{char}</motion.span>)}
            <strong className="text-strong">
              {sub4.map((char, i) => <motion.span key={`s4-${i}`} variants={charVariant}>{char}</motion.span>)}
            </strong>
            {sub5.map((char, i) => <motion.span key={`s5-${i}`} variants={charVariant}>{char}</motion.span>)}
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions-container">
            <a href="#projects" className="btn btn-primary btn-lg group">
              <span>View My Work</span>
              <ArrowRight size={18} className="btn-icon-right" strokeWidth={2} />
            </a>
            <a href={socialLinks.resumeUrl} className="btn btn-outline btn-lg group" download="Jatin_Kolhapure_Resume.pdf">
              <Download size={18} className="btn-icon-bounce" strokeWidth={2} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-bottom-section">
            <div className="hero-social-section">
              <p className="section-title">Connect</p>
              <div className="hero-social-links">
                {socialLinks.links.map(link => {
                  let Icon = null;
                  let brandClass = "";
                  if (link.id === 'github') { Icon = GitHubIcon; brandClass = "brand-github"; }
                  if (link.id === 'linkedin') { Icon = LinkedInIcon; brandClass = "brand-linkedin"; }
                  if (link.id === 'leetcode') { Icon = LeetCodeIcon; brandClass = "brand-leetcode"; }
                  
                  if (!Icon) return null;
                  
                  return (
                    <a 
                      key={link.id} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`social-link ${brandClass}`} 
                      aria-label={link.name}
                    >
                      <Icon size={20} className="social-icon-svg" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="hero-tech-stack">
              <p className="section-title">Tech Stack</p>
              <div className="tech-icons-row">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" title="Java" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" title="Spring Boot" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" title="Redis" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" title="Docker" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" title="Azure" className="tech-icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" alt="Kafka" title="Kafka" className="tech-icon tech-icon-invert" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Side: Visual */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="profile-container">
            <img 
              src="/portrait.jpg" 
              alt={socialLinks.name} 
              className="profile-image"
              onError={(e) => {
                e.target.src = 'https://github.com/jatinkolhapure.png';
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
