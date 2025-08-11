import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer__name">Atshaya Kumar</h3>
            <p className="footer__tagline">Software Engineer & Tech Enthusiast</p>
          </motion.div>

          <motion.div 
            className="footer__social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer__social-title">Connect With Me</h4>
            <div className="footer__social-links">
              <a 
                href="https://linkedin.com/in/atshayakumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/juz_call_me_ju/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://github.com/Juju26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer__quick-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="footer__quick-links-title">Quick Links</h4>
            <ul className="footer__quick-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
         
          <div className="footer__copyright">
            <p>
              © {currentYear} Atshaya Kumar. All rights reserved. Made with{' '}
              <Heart size={16} className="footer__heart" />
              {' '}using React, Agentic AI
            </p>
         
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
