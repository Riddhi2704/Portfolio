import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GithubIcon from './components/GithubIcon';
import { Heart, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(11, 15, 25, 0.8)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '3rem 0 2rem 0',
        marginTop: '4rem',
        color: 'var(--text-secondary)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem',
          }} className="footer-layout">
            
            {/* Logo Name */}
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Riddhi Patel
              </h3>
              <p style={{ fontSize: '0.85rem' }}>
                Full-Stack Developer Intern
              </p>
            </div>

            {/* Quick Link Handles */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a 
                href="https://github.com/Riddhi2704" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                className="footer-icon-link"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="mailto:riddhisanjaykumarpatel@gmail.com" 
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                className="footer-icon-link"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919328312048" 
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                className="footer-icon-link"
              >
                <Phone size={20} />
              </a>
            </div>

          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }} className="footer-bottom">
            <span>© {new Date().getFullYear()} Riddhi Patel. All rights reserved.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Made with <Heart size={14} style={{ color: 'var(--accent)', fill: 'var(--accent)' }} /> using React & Custom CSS.
            </span>
          </div>
        </div>

        <style>{`
          .footer-icon-link:hover {
            color: var(--primary) !important;
          }
          @media (max-width: 576px) {
            .footer-layout, .footer-bottom {
              flex-direction: column !important;
              text-align: center !important;
              justify-content: center !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}

export default App;
