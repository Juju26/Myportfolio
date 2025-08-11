import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code, Database, Smartphone } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Smart Traffic Management System",
      description: "With the help of OpenCV and Machine Learning, we built a prototype that can be integrated with existing traffic signals which automatically turns signals by analyzing lane's traffic density.",
      image: "/assets/img/hackholics prototype.jpg",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "NumPy", "Pandas"],
      features: [
        "Real-time traffic density analysis using computer vision",
        "Automatic signal optimization based on traffic flow",
        "Integration with existing traffic infrastructure",
        "Machine learning algorithms for pattern recognition"
      ],
      github: "#",
      live: "#",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Smart Goggles for Visually Challenged",
      description: "A wearable goggle for visually challenged people to help them identify other people and objects before them using face recognition technique and giving them audio output.",
      image: "/assets/img/glass proto gif.gif",
      technologies: ["Python", "Face Recognition", "Audio Processing", "IoT", "OpenCV", "Speech Synthesis"],
      features: [
        "Real-time object detection and recognition",
        "Face recognition capabilities with high accuracy",
        "Audio feedback system for user guidance",
        "Wearable technology with lightweight design"
      ],
      github: "#",
      live: "#",
      category: "IoT/AI"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with modern web technologies, featuring user authentication, product management, and secure payment processing.",
      image: "/assets/img/skillsimg.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe API"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout system",
        "Admin panel for product management"
      ],
      github: "#",
      live: "#",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management application that helps teams organize, track, and complete projects efficiently with real-time updates.",
      image: "/assets/img/skillsimg.png",
      technologies: ["React.js", "Firebase", "Material-UI", "Real-time Database", "Authentication"],
      features: [
        "Real-time task updates and collaboration",
        "User roles and permissions management",
        "Progress tracking and analytics",
        "Mobile-responsive design"
      ],
      github: "#",
      live: "#",
      category: "Web Development"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return <Code size={16} />;
      case 'IoT/AI':
        return <Smartphone size={16} />;
      case 'Web Development':
        return <Database size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my innovative projects that demonstrate problem-solving skills and technical expertise
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project__card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project__image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project__img"
                />
                <div className="project__overlay">
                  <div className="project__category">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <div className="project__links">
                    <a
                      href={project.github}
                      className="project__link"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="project__link"
                      aria-label="View live project"
                    >
                      <Eye size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>

                <div className="project__technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project__tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project__features">
                  <h4 className="project__features-title">Key Features:</h4>
                  <ul className="project__features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="project__feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project__actions">
                  <a
                    href={project.github}
                    className="btn btn-secondary project__btn"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    className="btn btn-primary project__btn"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="projects__cta-text">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Juju26"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
