import React, { useState, useEffect } from 'react';
import { certificationsData } from '../../data/certificationsData';
import { 
  ShieldCheckIcon, 
  ExternalLinkIcon, 
  CopyIcon, 
  CheckIcon, 
  CloseIcon 
} from '../common/Icons';
import './Certifications.css';

// Custom Bespoke Brand & Function Icons
const AwsBrandIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#FF9900" fillOpacity="0.2" stroke="#FF9900" strokeWidth="1.6"/>
    <path d="M7 15l2.5-3 2.5 3M12 15l2.5-4 2.5 4" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const JavaBrandIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#F59E0B" fillOpacity="0.2"/>
    <path d="M6 1v3M10 1v3M14 1v3" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const CiscoBrandIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#06B6D4" strokeWidth="1.6" fill="#06B6D4" fillOpacity="0.2"/>
    <path d="M9 12l2 2 4-4" stroke="#06B6D4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HackathonBrandIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3M6 3h12v7a6 6 0 0 1-12 0V3zM12 16v5M8 21h8" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#10B981" fillOpacity="0.2"/>
  </svg>
);

const DriveIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.74 2.25h8.52l7.74 13.41h-8.52L7.74 2.25zm8.52 14.91L12.01 24 4.26 10.59l4.25-7.34 7.75 13.91zm-9.78.84H22l-4.25 6H1.5l4.98-6z"/>
  </svg>
);

const SearchEyeIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const GridViewIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const TableViewIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18" />
  </svg>
);

export const Certifications = () => {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderBrandIcon = (id, size = 20) => {
    if (id.includes('aws')) return <AwsBrandIcon size={size} />;
    if (id.includes('apna') || id.includes('dsa')) return <JavaBrandIcon size={size} />;
    if (id.includes('cisco') || id.includes('cyber')) return <CiscoBrandIcon size={size} />;
    return <HackathonBrandIcon size={size} />;
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        
        {/* Clean, Human-Crafted Header */}
        <div className="cert-section-header">
          <div className="cert-title-group">
            <h2 className="cert-main-title">Certifications &amp; Credentials</h2>
            <p className="cert-main-subtitle">
              Verified technical credentials across cloud architecture, algorithms &amp; data structures, network security, and competitive hackathons.
            </p>
          </div>

          {/* Clean View Toggle */}
          <div className="cert-mode-toggle" role="tablist">
            <button
              type="button"
              className={`cert-toggle-tab ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
              aria-selected={viewMode === 'cards'}
              role="tab"
            >
              <GridViewIcon size={14} />
              <span>Cards</span>
            </button>
            <button
              type="button"
              className={`cert-toggle-tab ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              aria-selected={viewMode === 'table'}
              role="tab"
            >
              <TableViewIcon size={14} />
              <span>Audit Table</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: REALISTIC CARDS SHOWCASE */}
        {viewMode === 'cards' && (
          <div className="cert-cards-container">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-doc-card"
                style={{ '--cert-theme-color': cert.accentColor }}
              >
                {/* Header: Organization Identity */}
                <div className="cert-doc-header">
                  <div className="cert-issuer-identity">
                    <div className="cert-issuer-icon-frame">
                      {renderBrandIcon(cert.id, 22)}
                    </div>
                    <div className="cert-issuer-meta">
                      <span className="cert-org-name">{cert.issuer}</span>
                      <span className="cert-program-name">{cert.platform}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Stage: Framed Authentic Document Preview */}
                <div 
                  className="cert-doc-stage"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  title={`Inspect ${cert.title}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(cert)}
                >
                  <div className="cert-doc-mat">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`} 
                      className="cert-doc-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="cert-stage-hover-overlay">
                    <span className="cert-stage-zoom-btn">
                      <SearchEyeIcon size={14} /> Inspect Full Certificate
                    </span>
                  </div>
                </div>

                {/* Card Information: Factual, Realistic Engineering Context */}
                <div className="cert-doc-info">
                  <h3 className="cert-doc-title" onClick={() => setSelectedCert(cert)}>
                    {cert.title}
                  </h3>

                  <div className="cert-signers-line">
                    <span className="signer-label">Instructors / Authority:</span>
                    <span className="signer-val">{cert.signatories}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="cert-id-badge-bar">
                      <span className="id-tag-label">Credential ID:</span>
                      <code className="id-tag-code">{cert.credentialId}</code>
                      <button
                        type="button"
                        className="id-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(cert.id, cert.credentialId);
                        }}
                        title="Copy ID"
                        aria-label="Copy Credential ID"
                      >
                        {copiedId === cert.id ? (
                          <CheckIcon size={13} className="text-emerald" />
                        ) : (
                          <CopyIcon size={13} />
                        )}
                      </button>
                    </div>
                  )}

                  <div className="cert-competencies-strip">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-competency-pill">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="cert-doc-actions">
                    <a
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn cert-btn-drive"
                      title="Open Certificate in Google Drive"
                    >
                      <DriveIcon size={14} />
                      <span>Drive Link</span>
                      <ExternalLinkIcon size={12} />
                    </a>

                    <button
                      type="button"
                      className="btn cert-btn-inspect"
                      onClick={() => setSelectedCert(cert)}
                      title="Inspect full resolution certificate"
                    >
                      <SearchEyeIcon size={14} />
                      <span>Inspect</span>
                    </button>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn cert-btn-official"
                        title="Verify officially on Coursera"
                      >
                        <ShieldCheckIcon size={14} />
                        <span>Coursera</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: AUDIT TABLE VIEW */}
        {viewMode === 'table' && (
          <div className="cert-table-wrapper">
            <div className="cert-table-scroll">
              <table className="cert-table-data">
                <thead>
                  <tr>
                    <th>Certificate</th>
                    <th>Authority</th>
                    <th>Credential ID</th>
                    <th>Specialization</th>
                    <th className="text-right">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {certificationsData.map((cert) => (
                    <tr key={cert.id} className="cert-row-item">
                      <td>
                        <div className="table-doc-cell">
                          <button
                            type="button"
                            className="table-thumb-box"
                            onClick={() => setSelectedCert(cert)}
                            title="Inspect certificate"
                          >
                            <img src={cert.image} alt={cert.title} />
                            <span className="table-hover-zoom"><SearchEyeIcon size={12} /></span>
                          </button>
                          <div>
                            <div className="table-title-link" onClick={() => setSelectedCert(cert)}>
                              {cert.title}
                            </div>
                            <div className="table-platform-sub">{cert.issuer} &bull; {cert.platform}</div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="table-signer-text">{cert.signatories}</div>
                      </td>

                      <td>
                        <div className="table-id-flex">
                          <code>{cert.credentialId}</code>
                          <button
                            type="button"
                            className="table-id-copy"
                            onClick={() => handleCopy(cert.id, cert.credentialId)}
                            title="Copy ID"
                          >
                            {copiedId === cert.id ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
                          </button>
                        </div>
                      </td>

                      <td>
                        <div className="table-skills-flow">
                          {cert.skills.map((s, idx) => (
                            <span key={idx} className="table-chip">{s}</span>
                          ))}
                        </div>
                      </td>

                      <td className="text-right">
                        <div className="table-actions-strip">
                          <a
                            href={cert.driveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn table-drive-btn"
                          >
                            <DriveIcon size={13} /> Drive ↗
                          </a>
                          <button
                            type="button"
                            className="btn table-inspect-btn"
                            onClick={() => setSelectedCert(cert)}
                          >
                            Inspect
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* LIGHTBOX INSPECT MODAL: EXECUTIVE DOSSIER */}
        {selectedCert && (
          <div 
            className="cert-dossier-modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div 
              className="cert-dossier-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className="cert-dossier-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Preview"
              >
                <CloseIcon size={18} />
              </button>

              <div className="cert-dossier-grid">
                {/* Left: Certificate Document Viewer */}
                <div className="cert-dossier-viewer">
                  <div className="cert-dossier-frame">
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="cert-dossier-img"
                    />
                  </div>
                </div>

                {/* Right: Realistic Verification Sheet */}
                <div className="cert-dossier-sheet">
                  <div className="dossier-header-bar">
                    <div className="dossier-org-badge">
                      {renderBrandIcon(selectedCert.id, 20)}
                      <span>{selectedCert.issuer}</span>
                    </div>
                  </div>

                  <h3 className="dossier-title">{selectedCert.title}</h3>
                  <div className="dossier-program-sub">{selectedCert.platform} Curriculum</div>

                  <div className="dossier-section">
                    <span className="dossier-label">INSTRUCTORS &amp; SIGNATORIES</span>
                    <p className="dossier-value">{selectedCert.signatories}</p>
                  </div>

                  {selectedCert.credentialId && (
                    <div className="dossier-section dossier-id-section">
                      <span className="dossier-label">AUTHENTICATED CREDENTIAL ID</span>
                      <div className="dossier-id-box">
                        <code>{selectedCert.credentialId}</code>
                        <button
                          type="button"
                          className="dossier-copy-btn"
                          onClick={() => handleCopy('modal', selectedCert.credentialId)}
                        >
                          {copiedId === 'modal' ? (
                            <><CheckIcon size={13} /> Copied to Clipboard</>
                          ) : (
                            <><CopyIcon size={13} /> Copy ID</>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="dossier-section">
                    <span className="dossier-label">SPECIFICATION &amp; FOCUS</span>
                    <p className="dossier-desc">{selectedCert.description}</p>
                  </div>

                  <div className="dossier-section">
                    <span className="dossier-label">VERIFIED ENGINEERING COMPETENCIES</span>
                    <div className="dossier-skills-wrap">
                      {selectedCert.skills.map((s, idx) => (
                        <span key={idx} className="dossier-skill-tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="dossier-footer-actions">
                    <a
                      href={selectedCert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn dossier-btn-drive"
                    >
                      <DriveIcon size={15} />
                      <span>Open in Google Drive</span>
                      <ExternalLinkIcon size={13} />
                    </a>

                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn dossier-btn-verify"
                      >
                        <ShieldCheckIcon size={15} />
                        <span>Coursera Official Verification</span>
                        <ExternalLinkIcon size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
