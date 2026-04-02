import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './PaperReveal.css';

const PaperReveal = ({ children, onComplete }) => {
  const [isRevealing, setIsRevealing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealing(false);
      if (onComplete) onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <AnimatePresence>
        {isRevealing && (
          <motion.div className="paper-reveal-container">
            {/* Top fold */}
            <motion.div
              className="paper-fold paper-fold-top"
              initial={{ rotateX: 0, originY: 1 }}
              animate={{ rotateX: -180 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.8
              }}
            >
              <div className="paper-inner">
                <div className="paper-gradient"></div>
              </div>
            </motion.div>

            {/* Bottom fold */}
            <motion.div
              className="paper-fold paper-fold-bottom"
              initial={{ rotateX: 0, originY: 0 }}
              animate={{ rotateX: 180 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.8
              }}
            >
              <div className="paper-inner">
                <div className="paper-gradient"></div>
              </div>
            </motion.div>

            {/* Left fold */}
            <motion.div
              className="paper-fold paper-fold-left"
              initial={{ rotateY: 0, originX: 1 }}
              animate={{ rotateY: 180 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.4
              }}
            >
              <div className="paper-inner">
                <div className="paper-gradient"></div>
              </div>
            </motion.div>

            {/* Right fold */}
            <motion.div
              className="paper-fold paper-fold-right"
              initial={{ rotateY: 0, originX: 0 }}
              animate={{ rotateY: -180 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.4
              }}
            >
              <div className="paper-inner">
                <div className="paper-gradient"></div>
              </div>
            </motion.div>

            {/* Center logo/text */}
            <motion.div
              className="paper-center"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="paper-logo"
              >
                <h1 className="paper-title">ALVAN HANANI</h1>
                <p className="paper-subtitle">Fullstack Developer</p>
                <motion.div
                  className="paper-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Particles effect */}
            <div className="paper-particles">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: Math.random() * window.innerHeight,
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 2,
                    repeat: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealing ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PaperReveal;
