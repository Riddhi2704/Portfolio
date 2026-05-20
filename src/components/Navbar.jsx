import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Active section highlight trigger
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(7, 9, 19, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '1.4rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <Code2 size={24} style={{ color: 'var(--primary)' }} />
          <span>Riddhi<span style={{ color: 'var(--primary)' }}>.</span>Patel</span>
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2.5rem',
        }} className="desktop-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)',
                  position: 'relative',
                  padding: '0.25rem 0',
                }}
                className="nav-link-hover"
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '2px',
                  }} />
                )}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleClick(e, '#contact')}
            className="btn btn-primary" 
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'block',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          background: 'rgba(7, 9, 19, 0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 999,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                }}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleClick(e, '#contact')}
            className="btn btn-primary" 
            style={{ marginTop: '1rem' }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* CSS overrides specifically for media queries in JS-rendered styles */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link-hover:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </nav>
  );
}
