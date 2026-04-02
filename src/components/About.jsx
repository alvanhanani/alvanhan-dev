import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              variants={itemVariants}
            >
              Get to know me better
            </motion.p>
            
            <motion.div 
              className="about-description"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>
                A dedicated Website Developer with over <strong>four years of experience</strong> in developing 
                and maintaining enterprise-scale web applications within the Insurtech, e-commerce, and educational 
                technology sectors.
              </motion.p>
              <motion.p variants={itemVariants}>
                I possess deep expertise in both <strong>microservices and monolithic architectures</strong>, 
                specializing in NestJS, Laravel, and Golang. Highly experienced in system performance optimization, 
                third-party API integration including leading payment gateways such as Xendit and Midtrans.
              </motion.p>
              <motion.p variants={itemVariants}>
                I hold a proven ability to collaborate effectively within teams to deliver reliable and efficient 
                technological solutions that serve millions of users nationwide.
              </motion.p>
            </motion.div>

            <motion.div 
              className="about-stats"
              variants={containerVariants}
            >
              {[
                { number: "4+", label: "Years Experience" },
                { number: "10M+", label: "Users Served" },
                { number: "100+", label: "TPS Handled" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="stat-number"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-image"
            variants={containerVariants}
          >
            {[
              {
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Code Quality",
                text: "Writing clean, efficient, and maintainable code is my priority"
              },
              {
                icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                title: "Scalability",
                text: "Building systems that grow with your business needs"
              },
              {
                icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                title: "Performance",
                text: "Optimizing for speed and efficiency in every line of code"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="about-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-content">
                  <motion.div 
                    className="icon-wrapper"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={card.icon}/>
                    </svg>
                  </motion.div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
