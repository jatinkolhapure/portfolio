import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  LeetCodeIcon, 
  WhatsAppIcon 
} from '../common/Icons';
import './Footer.css';

const ArrowUpIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Streamlined Executive Brand Bar */}
        <div className="footer-main-row">
          
          {/* Brand Identity */}
          <div className="footer-brand-lockup">
            <div 
              className="footer-monogram" 
              onClick={scrollToTop} 
              role="button" 
              tabIndex={0} 
              title="Return to top"
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              JK
            </div>
            <div className="footer-brand-meta">
              <span className="footer-brand-name">Jatin Sandip Kolhapure</span>
              <p className="footer-tagline">
                Java Full Stack Developer
              </p>
            </div>
          </div>

          {/* Right Action Group: Social Links & Back to Top */}
          <div className="footer-actions-group">
            {/* Colorful Authentic Brand Social Links */}
            <div className="footer-social-links">
              <a
                href="https://github.com/jatinkolhapure"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn footer-btn-github"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-kolhapure-906a91292/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn footer-btn-linkedin"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://leetcode.com/u/Jatin077/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn footer-btn-leetcode"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
              >
                <LeetCodeIcon size={18} />
              </a>
              <a
                href={socialLinks.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn footer-btn-whatsapp"
                aria-label="Connect on WhatsApp"
                title="Connect on WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>

            {/* Back to Top Button */}
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="footer-back-to-top"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUpIcon size={13} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
