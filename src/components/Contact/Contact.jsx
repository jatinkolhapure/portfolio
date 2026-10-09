import React, { useState } from 'react';
import { socialLinks } from '../../data/socialLinks';
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  WhatsAppIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
  DownloadIcon,
  ExternalLinkIcon
} from '../common/Icons';
import './Contact.css';

// Bespoke Location & Response Icons
const LocationPinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockResponseIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const getSocialCardData = (id) => {
    switch (id) {
      case 'github':
        return {
          icon: <GitHubIcon size={22} />,
          platformClass: 'social-card-github',
          actionText: 'Explore Repositories',
          subtitle: 'Source Code & Repositories'
        };
      case 'linkedin':
        return {
          icon: <LinkedInIcon size={22} />,
          platformClass: 'social-card-linkedin',
          actionText: 'Connect on LinkedIn',
          subtitle: 'Professional Network & Career'
        };
      case 'leetcode':
        return {
          icon: <LeetCodeIcon size={22} />,
          platformClass: 'social-card-leetcode',
          actionText: 'View Solved Problems',
          subtitle: 'Algorithmic Problem Solving'
        };
      default:
        return {
          icon: null,
          platformClass: '',
          actionText: 'View Profile',
          subtitle: ''
        };
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container container-narrow">
        
        {/* Main Glassmorphic Contact Card */}
        <div className="contact-box">
          
          {/* Header Area */}
          <div className="contact-header">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2 className="contact-title">Let's work together.</h2>
            <p className="contact-subtext">
              I am actively looking for full-time software engineering roles and internships.
              Feel free to reach out directly via email, WhatsApp, or connect on my profiles below.
            </p>
          </div>

          {/* Dual Direct Channels: Email & WhatsApp / Phone */}
          <div className="contact-channels-grid">
            
            {/* Channel 1: Primary Email */}
            <div className="contact-channel-card channel-card-email">
              <div className="channel-card-top">
                <div className="channel-icon-box channel-icon-email">
                  <MailIcon size={20} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">EMAIL</span>
                  <a href={`mailto:${socialLinks.email}`} className="channel-value">
                    {socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="channel-btn-group">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn channel-btn-secondary"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <CheckIcon size={15} className="text-emerald" /> : <CopyIcon size={15} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${socialLinks.email}`}
                  className="btn channel-btn-primary-email"
                  aria-label="Send email directly"
                >
                  <span>Send Email</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>

            {/* Channel 2: Direct WhatsApp Chat */}
            <div className="contact-channel-card channel-card-whatsapp">
              <div className="channel-card-top">
                <div className="channel-icon-box channel-icon-whatsapp">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="channel-meta">
                  <span className="channel-tag">WHATSAPP</span>
                  <a 
                    href={socialLinks.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-value"
                  >
                    Direct WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="channel-btn-group">
                <a
                  href={socialLinks.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn channel-btn-primary-whatsapp channel-btn-full"
                  aria-label="Chat directly on WhatsApp"
                >
                  <WhatsAppIcon size={15} />
                  <span>Chat on WhatsApp</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Social Profiles Grid with High-Contrast Typography & Brand Glow */}
          <div className="contact-social-grid">
            {socialLinks.links.map((item) => {
              const cardData = getSocialCardData(item.id);
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-card ${cardData.platformClass}`}
                  aria-label={`Open ${item.name} profile in new window`}
                >
                  <div className="contact-social-card-top">
                    <div className="contact-social-icon-frame">
                      {cardData.icon}
                    </div>
                    <ExternalLinkIcon size={15} className="contact-social-external" />
                  </div>

                  <div className="contact-social-card-body">
                    <span className="contact-social-name">{item.name}</span>
                    <span className="contact-social-handle">{cardData.subtitle}</span>
                  </div>

                  <div className="contact-social-action-row">
                    <span className="contact-social-action-text">{cardData.actionText}</span>
                    <span className="contact-social-action-arrow">&rarr;</span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom Fast Meta Strip */}
          <div className="contact-meta-strip">
            <div className="contact-meta-item">
              <LocationPinIcon size={15} />
              <span>{socialLinks.location}</span>
            </div>
            <div className="contact-meta-divider">/</div>
            <div className="contact-meta-item">
              <ClockResponseIcon size={15} />
              <span>Response time: Under 24 hours</span>
            </div>
            <div className="contact-meta-divider">/</div>
            <a 
              href={socialLinks.resumeUrl} 
              download="Jatin_Kolhapure_Resume.pdf"
              className="contact-meta-item contact-meta-resume-link"
              title="Download Jatin's Resume"
            >
              <DownloadIcon size={15} />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
