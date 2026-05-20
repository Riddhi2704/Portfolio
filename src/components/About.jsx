import React from 'react';
import { Award, BookOpen, Calendar, MapPin, Smile } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="accent-badge">Who I Am</span>
          <h2 className="section-title" style={{ display: 'block' }}>About Me</h2>
          <p className="section-subtitle">A blend of academic foundations and hands-on professional experiences.</p>
        </div>

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'stretch' }}>
          {/* Left Side: Summary & Mission Card */}
          <div className="glass-card" style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Smile size={28} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Full-Stack Developer & ML Enthusiast</h3>
            </div>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Hello! I'm Riddhi Patel, a highly motivated and detail-oriented Full-Stack Developer currently pursuing an **Integrated Bachelor of Computer Application & Information Technology / BSC Computer Science and IT** at **GU University**.
            </p>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Currently, I am gaining hands-on industry experience through a web development internship at **CodeAlpha**, specializing in building robust web applications with the **MERN Stack** (MongoDB, Express, React, Node). I'm also deeply fascinated by Artificial Intelligence, data preprocessing, and training machine learning models like KNN and linear regression to draw intelligence from behavioral data.
            </p>
            
            <p style={{ lineHeight: 1.7 }}>
              I am committed to designing high-performance user interfaces, writing clean documentation, and collaborating with cross-functional teams to build scaleable digital experiences.
            </p>
          </div>

          {/* Right Side: Education & Key Attributes Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
            
            {/* Education Sub-card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 242, 254, 0.1)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Education</h4>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    BSC Computer Science & Information Technology
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    GU University — Ahmedabad, India
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}>
                      <Calendar size={14} />
                      <span>June 2023 - May 2026</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}>
                      <Award size={14} style={{ color: 'var(--primary)' }} />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>8.4 CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
            }} className="quick-grid">
              
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>Key Focus Areas</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>• Scalable Web Apps</li>
                  <li>• ML Algorithm Dev</li>
                  <li>• Database Modeling</li>
                  <li>• API Architectures</li>
                </ul>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Soft Skills</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>• High Collaboration</li>
                  <li>• Detail-Oriented</li>
                  <li>• Technical Writing</li>
                  <li>• Agile Framework</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .quick-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
