import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Lightbulb, Code, Globe, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <User size={24} />,
      title: "Passionate Developer",
      description: "Energetic being who always buzzes for success in everything I do."
    },
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "Focused on achieving excellence in software development and problem-solving."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovative Thinker",
      description: "Curious nature drives me to explore new technologies and creative solutions."
    },
    {
      icon: <Code size={24} />,
      title: "Tech Enthusiast",
      description: "Passionate about learning new technologies and   frameworks."
    },
    {
      icon: <Globe size={24} />,
      title: "Team Player",
      description: "Collaborative approach to development with strong communication skills."
    },
    {
      icon: <Award size={24} />,
      title: "Continuous Learner",
      description: "Always seeking to improve skills and stay updated with industry trends."
    }
  ];

  const achievements = [
    {
      number: "3+",
      label: "Years Experience"
    },
    {
      number: "10+",
      label: "Projects Completed"
    },
    {
      number: "3",
      label: "Programming Languages"
    },
    {
      number: "3+",
      label: "Frameworks Mastered"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and understand what drives me in the world of technology
          </p>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about__image-container">
              <img
                src="/assets/img/hacky pic.jpg"
                alt="Atshaya Kumar working"
                className="about__img"
              />
              <div className="about__image-overlay"></div>
            </div>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="about__name">I'm Atshaya Kumar</h3>
            <p className="about__description">
              An energetic being who always buzzes for success in things and has a curious nature.
              I'm currently working as a Software Engineer in an MNC while studying the dynamics
              of the industry and continuously learning new technologies.
            </p>

            <p className="about__description">
              With a strong foundation in Computer Science field,
              I've developed expertise in multiple programming languages and frameworks.
              My passion lies in creating innovative solutions that solve real-world problems,
              and I'm always excited to take on new challenges in software development.
            </p>

            <div className="about__features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="about__feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="about__feature-icon">
                    {feature.icon}
                  </div>
                  <div className="about__feature-content">
                    <h4 className="about__feature-title">{feature.title}</h4>
                    <p className="about__feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about__stats">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="about__stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <span className="about__stat-number">{achievement.number}</span>
                  <span className="about__stat-label">{achievement.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
