import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react';

const titles = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "AI & ML Enthusiast",
  "Problem Solver"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8rem',
      paddingBottom: '4rem',
    }}>
      {/* Background blobs for depth */}
      <div className="glow-spot" style={{ top: '15%', left: '10%', backgroundColor: 'var(--primary-glow)', width: '400px', height: '400px' }} />
      <div className="glow-spot" style={{ bottom: '20%', right: '10%', backgroundColor: 'var(--secondary-glow)', width: '350px', height: '350px' }} />

      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column - Intro */}
          <div>
            <span className="accent-badge">Available for Work</span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
            }}>
              Hi, I'm <span style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Riddhi Patel</span>
            </h1>
            
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              minHeight: '3.5rem',
            }}>
              I am a <span style={{
                color: 'var(--primary)',
                borderRight: '3px solid var(--primary)',
                paddingRight: '4px',
                animation: 'blink 0.75s step-end infinite',
              }}>{displayText}</span>
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              A motivated Full-Stack Developer specializing in building responsive MERN Stack web applications and implementing machine learning solutions to solve real-world problems.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
            }}>
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="btn btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="btn btn-secondary"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Contacts Panel */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--primary)' }} />
                <span>riddhisanjaykumarpatel@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--secondary)' }} />
                <span>+91 9328312048</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent)' }} />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Interface Mockup */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Interactive coding glass console */}
            <div className="glass-card" style={{
              width: '100%',
              maxWidth: '480px',
              padding: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
            }}>
              {/* Mock Mac Controls */}
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '0.75rem',
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fbbf24', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                <span style={{ color: 'var(--text-muted)', marginLeft: 'auto', fontSize: '0.75rem' }}>riddhi.js</span>
              </div>

              {/* Mock Code Block */}
              <div>
                <p><span style={{ color: '#f43f5e' }}>const</span> <span style={{ color: '#60a5fa' }}>developer</span> = &#123;</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>name</span>: <span style={{ color: '#34d399' }}>'Riddhi Patel'</span>,</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>role</span>: <span style={{ color: '#34d399' }}>'Full-Stack Developer'</span>,</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>education</span>: <span style={{ color: '#34d399' }}>'BSC Computer Science & IT'</span>,</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>cgpa</span>: <span style={{ color: '#60a5fa' }}>8.4</span>,</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>internship</span>: <span style={{ color: '#34d399' }}>'CodeAlpha'</span>,</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>skills</span>: [</p>
                <p style={{ paddingLeft: '3rem' }}><span style={{ color: '#34d399' }}>'MERN'</span>, <span style={{ color: '#34d399' }}>'TypeScript'</span>, <span style={{ color: '#34d399' }}>'Next.js'</span>,</p>
                <p style={{ paddingLeft: '3rem' }}><span style={{ color: '#34d399' }}>'Nest.js'</span>, <span style={{ color: '#34d399' }}>'Machine Learning'</span></p>
                <p style={{ paddingLeft: '1.5rem' }}>],</p>
                <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fb923c' }}>passionateAbout</span>: <span style={{ color: '#34d399' }}>'AI-driven solutions'</span></p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* Floating Quick Badges */}
            <div className="glass-card animate-float" style={{
              position: 'absolute',
              top: '-20px',
              right: '-10px',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>8.4</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CGPA (GU)</span>
            </div>

            <div className="glass-card animate-float-delayed" style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              padding: '0.75rem 1.25rem',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>CodeAlpha Intern</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
}
