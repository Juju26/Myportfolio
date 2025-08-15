import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div 
            className="hero__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="hero__title-highlight">Atshaya Kumar</span>
            </motion.h1>
            
            <motion.h2 
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Software Engineer
            </motion.h2>
            
            <motion.p 
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating innovative solutions and learning new technologies. 
              Currently working as a Software Engineer while exploring the dynamic world of software development.
            </motion.p>
            
            <motion.div 
              className="hero__buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero__image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero__image-container">
              <img 
                src="/assets/img/Frame 1profilepic.png" 
                alt="Atshaya Kumar" 
                className="hero__profile-img"
              />
              <div className="hero__image-bg"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero__social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a 
            href="https://linkedin.com/in/atshayakumar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/atshai_kumar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://github.com/Juju26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </motion.div>

        <motion.div 
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button onClick={scrollToAbout} className="hero__scroll-btn">
            <ArrowDown size={20} />
            <span>Scroll Down</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
