import React from 'react';
import { Database, Layout, Settings, Layers, Star } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Databases",
    icon: <Database size={22} style={{ color: 'var(--primary)' }} />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML5 & CSS3", level: 95 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={22} style={{ color: 'var(--secondary)' }} />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Nest.js", level: 75 },
      { name: "Redux Toolkit", level: 80 },
      { name: "React Query", level: 80 },
      { name: "React Hook Form", level: 85 },
      { name: "OpenAI API", level: 75 }
    ]
  },
  {
    title: "Tools, UI & Practices",
    icon: <Settings size={22} style={{ color: 'var(--accent)' }} />,
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Git & GitLab", level: 90 },
      { name: "Google Antigravity", level: 80 },
      { name: "RESTful API Dev", level: 90 },
      { name: "Agile & Scrum", level: 85 },
      { name: "Responsive Web Design", level: 95 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="glow-spot" style={{ bottom: '10%', left: '5%', backgroundColor: 'var(--primary-glow)', width: '300px', height: '300px' }} />

      <div className="container">
        <div className="section-header">
          <span className="accent-badge">Technical Arsenal</span>
          <h2 className="section-title" style={{ display: 'block' }}>Technical Skills</h2>
          <p className="section-subtitle">A comprehensive stack curated for high-performance frontend and backend engineering.</p>
        </div>

        <div className="grid-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingBottom: '1rem',
              }}>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{category.title}</h3>
              </div>

              {/* Skills List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                flexGrow: 1,
              }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}>
                      <span style={{
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                      {/* Active progress bar */}
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: idx === 0 
                          ? 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)'
                          : idx === 1
                          ? 'linear-gradient(90deg, var(--secondary) 0%, var(--accent) 100%)'
                          : 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)',
                        borderRadius: '3px',
                        boxShadow: idx === 0 
                          ? '0 0 8px var(--primary)' 
                          : idx === 1 
                          ? '0 0 8px var(--secondary)' 
                          : '0 0 8px var(--accent)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
