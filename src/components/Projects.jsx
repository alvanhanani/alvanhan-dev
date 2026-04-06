import React, { useState } from 'react';
import './Projects.css';

// Import project images
import padelPromo1 from '../assets/padel-web-promosi1.png';
import padelPromo2 from '../assets/padel-web-promosi2.png';
import cmsImage from '../assets/cms-padel.png';
import ayoPramuka1 from '../assets/ayo-pramuka.png';
import ayoPramuka2 from '../assets/ayo-pramuka2.png';
import samRumah1 from '../assets/samrumah1.png';
import samRumah2 from '../assets/samrumah2.png';

const Projects = () => {
  const [activeImages, setActiveImages] = useState({});

  const projects = [
    {
      title: 'PadelBeach',
      subtitle: 'Court Booking Platform',
      description: 'National-scale digital platform for booking padel sports courts in Indonesia. Features real-time scheduling, membership management, and seamless payment integration.',
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Xendit'],
      images: [padelPromo1, padelPromo2, cmsImage],
      link: 'https://www.beachpadelclub.id'
    },
    {
      title: 'AyoPramuka',
      subtitle: 'National Education Platform',
      description: 'Official digital education platform for Indonesian Scout Movement serving 10M+ users across 34 provinces. Built with microservices architecture combining NestJS and Laravel.',
      technologies: ['NestJS', 'Laravel', 'PostgreSQL', 'RabbitMQ', 'Redis'],
      images: [ayoPramuka1, ayoPramuka2],
      link: 'https://ayopramuka-kwarnas.id/jelajah'
    },
    {
      title: 'Sam Rumah',
      subtitle: 'Property Management System',
      description: 'Property management and reservation system for Malaysian-based client. Featuring secure unit booking modules and multi-currency payment integration.',
      technologies: ['NestJS', 'PostgreSQL', 'TypeScript', 'Docker'],
      images: [samRumah1, samRumah2],
      link: null
    }
  ];

  const handleImageClick = (projectIndex, imageIndex) => {
    setActiveImages(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image-container">
                <img 
                  src={project.images[activeImages[index] || 0]} 
                  alt={project.title}
                  className="project-main-image"
                />
                {project.images.length > 1 && (
                  <div className="project-thumbnails">
                    {project.images.map((img, imgIndex) => (
                      <button
                        key={imgIndex}
                        className={`thumbnail-btn ${(activeImages[index] || 0) === imgIndex ? 'active' : ''}`}
                        onClick={() => handleImageClick(index, imgIndex)}
                      >
                        <img src={img} alt={`${project.title} ${imgIndex + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
