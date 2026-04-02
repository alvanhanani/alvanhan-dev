import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    // Backend
    'NestJS', 'ExpressJs', 'Laravel', 'Golang', 'Java Springboot',
    // Frontend
    'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vue.js', 'React', 'React Native',
    // Database
    'MySQL', 'PostgreSQL', 'Elasticsearch', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ',
    // Payment
    'Xendit', 'Midtrans',
    // Tools
    'Git', 'Docker', 'Apache', 'Nginx', 'Postman'
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-badge"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
