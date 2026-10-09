import React, { useState, useEffect } from 'react';
import { socialLinks } from '../../data/socialLinks';
import { DownloadIcon, MenuIcon, CloseIcon, SunIcon, MoonIcon } from '../common/Icons';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'projects', 'academics', 'certifications', 'engineering', 'achievements', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      setIsLightMode(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsLightMode(true);
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="brand-name">JATIN KOLHAPURE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#academics"
            className={`nav-link ${activeSection === 'academics' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'academics')}
          >
            Academics
          </a>
          <a
            href="#certifications"
            className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'certifications')}
          >
            Certificates
          </a>
          <a
            href="#engineering"
            className={`nav-link ${activeSection === 'engineering' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'engineering')}
          >
            Engineering
          </a>
          <a
            href="#achievements"
            className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'achievements')}
          >
            Honors
          </a>
          <a
            href="#journey"
            className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'journey')}
          >
            Journey
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isLightMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>

          <a
            href={socialLinks.resumeUrl}
            download="Jatin_Kolhapure_Resume.pdf"
            className="btn btn-secondary btn-sm resume-nav-btn"
            aria-label="Download Jatin's Resume"
          >
            <DownloadIcon size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-links">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-nav-link">
              About
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="mobile-nav-link">
              Selected Projects
            </a>
            <a href="#academics" onClick={(e) => handleNavClick(e, 'academics')} className="mobile-nav-link">
              Academic Excellence
            </a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="mobile-nav-link">
              Certifications &amp; Honors
            </a>
            <a href="#engineering" onClick={(e) => handleNavClick(e, 'engineering')} className="mobile-nav-link">
              Engineering Stack
            </a>
            <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className="mobile-nav-link">
              Key Honors &amp; Recognition
            </a>
            <a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="mobile-nav-link">
              Engineering Journey
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mobile-nav-link">
              Contact
            </a>
            <div className="mobile-drawer-cta">
              <a
                href={socialLinks.resumeUrl}
                download="Jatin_Kolhapure_Resume.pdf"
                className="btn btn-primary btn-sm"
                style={{ width: '100%' }}
              >
                <DownloadIcon size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
