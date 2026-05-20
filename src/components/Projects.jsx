import React, { useState } from 'react';
import { ExternalLink, BookOpen, Layers, BarChart2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

const projects = [
  {
    title: "Smart Notebook System",
    description: "Developed a cloud-based digital notebook platform allowing users to create, store, and manage notes efficiently. Supports secure user sessions and rapid search functions.",
    role: "Full Stack Developer",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloud Auth"],
    category: "fullstack",
    icon: <BookOpen size={20} style={{ color: 'var(--primary)' }} />,
    github: "https://github.com/Riddhi2704/smart_system_notebook.git",
    demo: "https://smart-system-notebook.vercel.app/"
  },
  {
    title: "Inventory Management System (IMS)",
    description: "A comprehensive control system featuring secure role-based access for Admin, Manager, and Staff roles. Designed multi-functional responsive dashboards tailored to specific permissions.",
    role: "Full Stack Developer",
    tech: ["MERN Stack", "Express.js", "React.js", "Node.js", "MongoDB"],
    category: "fullstack",
    icon: <Layers size={20} style={{ color: 'var(--secondary)' }} />,
    github: "https://github.com/Riddhi2704/Inventory_management_sysytem.git",
    demo: null
  },
  {
    title: "Hospital Management System",
    description: "Built a full-stack solution to streamline healthcare workflows, managing medical records, patient check-ins, appointment schedules, and staff assignments dynamically.",
    role: "Full Stack Developer",
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
    category: "fullstack",
    icon: <Layers size={20} style={{ color: 'var(--primary)' }} />,
    github: "https://github.com/Riddhi2704/Online_Appoinment_system.git",
    demo: null
  },
  {
    title: "Customer Classification using KNN",
    description: "Implemented a machine learning model to classify and segment customers based on behavioral attributes. Handled rigorous data cleaning, feature scaling, and hyperparameter tuning.",
    role: "ML Developer",
    tech: ["Python", "K-Nearest Neighbors", "Data Preprocessing", "Scikit-Learn"],
    category: "ml",
    icon: <BarChart2 size={20} style={{ color: 'var(--accent)' }} />,
    github: "https://github.com/Riddhi2704/knn_customer_classification_final.git",
    demo: null
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ top: '20%', left: '50%', backgroundColor: 'var(--secondary-glow)', width: '400px', height: '400px' }} />

      <div className="container">
        <div className="section-header">
          <span className="accent-badge">Completed Works</span>
          <h2 className="section-title" style={{ display: 'block' }}>Featured Projects</h2>
          <p className="section-subtitle">A collection of web applications and machine learning projects developed during my academic and internship paths.</p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {['all', 'fullstack', 'ml'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: '0.5rem 1.5rem',
                fontSize: '0.9rem',
                backgroundColor: filter === cat ? 'var(--secondary)' : 'rgba(255, 255, 255, 0.03)',
                color: 'var(--text-primary)',
                border: filter === cat ? '1px solid var(--secondary)' : '1px solid var(--border-color)',
                boxShadow: filter === cat ? '0 0 15px var(--secondary-glow)' : 'none',
              }}
            >
              {cat === 'all' && 'All Projects'}
              {cat === 'fullstack' && 'MERN / Full-Stack'}
              {cat === 'ml' && 'Machine Learning'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Project Card Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {project.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{project.title}</h3>
                </div>
                
                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-secondary)', hover: 'var(--primary)' }}
                      title="GitHub Repository"
                      className="project-link"
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-secondary)' }}
                      title="Live Deployment"
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Subtitle / Role */}
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                Role: {project.role}
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                flexGrow: 1,
              }}>
                {project.description}
              </p>

              {/* Tech Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: 'auto',
              }}>
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .project-link {
          transition: color var(--transition-fast), transform var(--transition-fast);
        }
        .project-link:hover {
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
