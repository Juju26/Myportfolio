import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import jujuLogo from '../assets/juju-logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#home" onClick={() => scrollToSection('home')} className="nav__logo-link">
              <img src={jujuLogo} alt="Juju Logo" className="nav__logo-img" />
              <span className="nav__logo-title">Atshai</span>
            </a>
          </div>

          <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav__link"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className="nav__link"
                  onClick={() => scrollToSection('skills')}
                >
                  Skills & Edu
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  className="nav__link"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav__link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__controls">
            <ThemeToggle />
            <button
              className="nav__toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
