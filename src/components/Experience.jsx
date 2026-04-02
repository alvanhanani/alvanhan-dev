import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'PT Vodjo Teknologi Indonesia',
      location: 'Bandung, Indonesia',
      period: 'Nov 2025 - Feb 2026',
      description: 'Holding primary responsibility for the backend architecture and implementation of PadelBeach, a national-scale digital platform for booking padel sports courts in Indonesia.',
      highlights: [
        'Architected and implemented a high-performance backend for a national-scale padel court booking system, featuring real-time scheduling, membership management, and automated workflows',
        'Developed Sam Rumah property management and reservation system for Malaysian-based client, focusing on secure unit booking modules and multi-currency payment integration',
        'Designed and maintained secure RESTful APIs to handle high-volume transactions and seamless payment gateway integrations'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Xendit']
    },
    {
      title: 'Backend Developer',
      company: 'PT Rahadyan Integrasi Nusantara',
      location: 'Bandung, Indonesia',
      period: 'Aug 2024 - Sept 2025',
      duration: '1 year',
      description: 'Lead backend architect for AyoPramuka, the official national-scale digital education platform for the Indonesian Scout Movement.',
      highlights: [
        'Contributed as the lead backend architect in building a complex, distributed system combining microservices (NestJS) and monolithic (Laravel) architectures',
        'Engineered and scaled RESTful API-driven backend systems to successfully support a platform with over 10 million active users',
        'Delivered critical "Event and Training" features through RESTful APIs exposed by NestJS microservices, serving more than 5,000 active users across 34 provinces nationwide',
        'Implemented a secure, high-volume registration and payment system integrated with leading payment gateways'
      ],
      technologies: ['NestJS', 'Laravel', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'PT Salvus Inti',
      location: 'Jakarta, Indonesia',
      period: 'Jul 2021 - Jul 2024',
      duration: '3 years',
      description: 'Initiated the development of enterprise applications within the Insurtech, Fintech and e-commerce sectors, focusing on data management, business process automation, and client service enhancement.',
      highlights: [
        'Led the full-stack development of "Spectrum", a high-throughput insurance claim service. Engineered its backend API to process over 100 transactions per second and built the web-based administrative dashboard for real-time monitoring with Golang and Spring for microservices',
        'Executed the full-stack implementation of a secure payment processing module. Architected the backend APIs for Xendit and Midtrans integration and developed the frontend components for system configuration and transaction management'
      ],
      technologies: ['Golang', 'Spring Boot', 'Vue.js', 'MySQL', 'Xendit', 'Midtrans']
    },
  ];

  return (
    <section className="experience">
      <div className="container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-title">{exp.title}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                {exp.duration && <span className="experience-duration">{exp.duration}</span>}
              </div>
            </div>
            
            <p className="experience-description">{exp.description}</p>
            
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
            
            <div className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
