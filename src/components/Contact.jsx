import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success State
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Trigger Canvas Confetti
    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti failed to load/render', err);
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ bottom: '15%', right: '10%', backgroundColor: 'var(--primary-glow)', width: '300px', height: '300px' }} />

      <div className="container">
        <div className="section-header">
          <span className="accent-badge">Get In Touch</span>
          <h2 className="section-title" style={{ display: 'block' }}>Contact Me</h2>
          <p className="section-subtitle">Let's build something amazing together. Reach out via the form or contact channels below.</p>
        </div>

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'stretch' }}>
          {/* Left Column: Coordinates Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Email Card */}
              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 242, 254, 0.08)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</h4>
                  <a href="mailto:riddhisanjaykumarpatel@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem' }}>
                    riddhisanjaykumarpatel@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(139, 92, 246, 0.08)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</h4>
                  <a href="tel:+919328312048" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem' }}>
                    +91 9328312048
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(236, 72, 153, 0.08)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.05rem' }}>
                    Ahmedabad, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Connect Badge */}
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Explore My Code</h3>
              <a 
                href="https://github.com/Riddhi2704" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                <GithubIcon size={20} />
                <span>Riddhi2704 on GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Validation Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Inquiry / Project discussion"
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Hi Riddhi, I would love to connect to build..."
                  style={{ resize: 'vertical' }}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              {/* Submit Button / Status */}
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ justifyContent: 'center', width: '100%', gap: '0.75rem' }}
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>

              {submitted && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  animation: 'fadeIn 0.5s ease',
                }}>
                  Thank you! Your message was sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }
        .form-error {
          color: #f87171;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          font-weight: 500;
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
