import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'University of Informatics and Business Indonesia (UNIBI)',
      degree: 'Bachelor of Informatics Engineering',
      period: '2022 - 2026',
      location: 'Bandung, Indonesia',
      gpa: '3.75',
      highlight: true
    },
    {
      institution: 'SMK Negeri 4 Bandung',
      degree: 'Software Engineering Major',
      period: '2018 - 2021',
      location: 'Bandung, Indonesia',
      gpa: null,
      highlight: false
    }
  ];

  const technicalSkills = [
    {
      category: 'System Design & Modeling',
      items: ['Data Flow Diagrams (DFD)', 'Entity Relationship Diagrams (ERD)', 'Flowcharts', 'System Architecture']
    },
    {
      category: 'Documentation',
      items: ['PRD (Product Requirement Document)', 'BRD (Business Requirement Document)', 'Technical Specifications', 'API Documentation']
    }
  ];

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="education-header">
                <h3 className="education-institution">{edu.institution}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-location">{edu.location}</p>
              {edu.gpa && (
                <div className="education-gpa">
                  <span className="gpa-label">GPA</span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="section-heading" style={{ marginTop: '48px' }}>Technical Expertise</h2>
        
        <div className="technical-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="technical-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="technical-category">{skill.category}</h3>
              <ul className="technical-list">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
