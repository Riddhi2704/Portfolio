import React from 'react';
import { Briefcase, Calendar, Globe, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ top: '30%', right: '5%', backgroundColor: 'var(--secondary-glow)', width: '300px', height: '300px' }} />
      
      <div className="container">
        <div className="section-header">
          <span className="accent-badge">Professional Path</span>
          <h2 className="section-title" style={{ display: 'block' }}>Experience</h2>
          <p className="section-subtitle">Real-world development practice in high-growth team environments.</p>
        </div>

        <div className="timeline">
          {/* Timeline Item 1: CodeAlpha Internship */}
          <div className="timeline-item left" style={{ width: '100%', left: 0 }}>
            <div className="timeline-content" style={{
              maxWidth: '800px',
              margin: '0 auto',
              borderLeft: '4px solid var(--primary)',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Briefcase size={20} style={{ color: 'var(--primary)' }} />
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Full Stack Developer Intern</h3>
                  </div>
                  <a 
                    href="https://codealpha.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <span>CodeAlpha</span>
                    <Globe size={14} />
                  </a>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}>
                  <Calendar size={14} />
                  <span>2026 - Present</span>
                </div>
              </div>

              <p style={{
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                fontSize: '1.05rem',
                fontWeight: 500,
              }}>
                Passionate Full Stack Developer with hands-on internship experience at CodeAlpha, skilled in building responsive web applications using frontend and backend technologies.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <p style={{ fontSize: '0.95rem' }}>
                    Developed and optimized responsive frontend user interfaces using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, ensuring seamless performance across all screen sizes.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <p style={{ fontSize: '0.95rem' }}>
                    Implemented modular and scalable REST APIs with <strong>Node.js</strong> and <strong>Express.js</strong> to support business logic operations.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <p style={{ fontSize: '0.95rem' }}>
                    Wrote queries and configured backend databases using <strong>MongoDB</strong> and <strong>MySQL</strong>.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <p style={{ fontSize: '0.95rem' }}>
                    Collaborated in an Agile workflow, version-controlling work via Git and participating in active team sprints.
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git'].map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    color: '#a5b4fc',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overriding timeline lines when only one item exists to center nicely */}
      <style>{`
        @media (min-width: 769px) {
          .timeline::after {
            display: none; /* Hide timeline line when we have a single centered item */
          }
        }
      `}</style>
    </section>
  );
}
