import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Terminal, Lightbulb, LineChart, Cloud, ShoppingCart, Eye, Github, ExternalLink, Briefcase, User } from 'lucide-react';
import '../assets/styles/DetailedProjects.css';

const DetailedProjects = () => {
  const categories = [
    {
      title: "Key Technical Initiatives",
      icon: <Briefcase size={28} />,
      projects: [
        {
          id: "swagger-diff",
          title: "API Contract Verification Engine (Swagger Diff)",
          date: "2024",
          description: "A Python-based semantic diffing engine packaged as a Maven plugin, boosting overall QA testing efficiency by 80%.",
          icon: <Code size={20} />,
          links: [
            { label: 'View Initiative', url: '#', type: 'github' }
          ]
        },
        {
          id: "devbot",
          title: "Local Setup Automation (DevBot)",
          date: "2023",
          description: "Developed a Bash script to fully automate local environment setup and manage Tomcat start/stop lifecycles, adopting 16+ developers.",
          icon: <Terminal size={20} />,
          links: [
            { label: 'View Script', url: '#', type: 'github' }
          ]
        },
        {
          id: "hackathons",
          title: "Client Innovation Hackathons (4x Participant)",
          date: "2023",
          description: "Developed 'Data at a Glance', a comprehensive narrative dashboard that visualizes grants, tranches, and option values.",
          icon: <Lightbulb size={20} />,
          links: [
            { label: 'View Demo', url: '#', type: 'external' }
          ]
        }
      ]
    },
    {
      title: "Independent Projects",
      icon: <User size={28} />,
      projects: [
        {
          id: "stock-calc",
          title: "Stock Averaging Calculator",
          date: "Present",
          description: "Architecting a full-stack personal investment application using Java, Spring Boot, React, MySQL, Docker, and Kafka.",
          icon: <LineChart size={20} />,
          links: [
            { label: 'Source Code', url: '#', type: 'github' }
          ]
        },
        {
          id: "portfolio-aws",
          title: "Portfolio (2025 AWS Hosting)",
          date: "2025",
          description: "Zero downtime active messaging service portfolio managed on AWS with high cost optimization using AWS Amplify.",
          icon: <Cloud size={20} />,
          links: [
            { label: 'Read Article', url: '#', type: 'external' }
          ]
        },
        {
          id: "itrolley",
          title: "iTrolley",
          date: "2022",
          description: "A smart shopping assistant leveraging Indoor Positioning System (IPS) via BLE beacons to identify shortest paths.",
          icon: <ShoppingCart size={20} />,
          links: [
            { label: 'GitHub', url: 'https://github.com/Juju26/i-trolley/tree/master', type: 'github' },
            { label: 'Documentation', url: 'https://docs.google.com/document/d/19TrnI-lvzC2PnDuTdokmdL7jVKtubk53/edit', type: 'external' }
          ]
        },
        {
          id: "smart-goggles",
          title: "Smart Goggles for Visually Challenged",
          date: "2022",
          description: "A wearable goggle using face recognition to identify people and objects, providing audio output to the user.",
          icon: <Eye size={20} />,
          links: [
            { label: 'YouTube Demo', url: 'https://www.youtube.com/watch?v=IgQcCB_AU5o', type: 'youtube' },
            { label: 'GitHub', url: 'https://github.com/Juju26/smart-goggles', type: 'github' }
          ]
        }
      ]
    }
  ];

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github': return <Github size={16} />;
      case 'youtube': return <Eye size={16} />;
      case 'external':
      default: return <ExternalLink size={16} />;
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <section className="detailed-projects section">
      <div className="container timeline-container">
        
        <div className="back-btn-container">
          <button onClick={handleBack} className="back-btn" aria-label="Go back to home">
            <ArrowLeft size={20} /> Back to Hub
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Project Timeline</h2>
          <p className="section-subtitle">A deeper look at my technical initiatives and independent projects along my engineering journey.</p>
        </motion.div>

        <div className="timeline-wrapper">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="timeline-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>
              
              <div className="timeline">
                {category.projects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-node">
                      {project.icon}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{project.title}</h4>
                        <span className="timeline-date">{project.date}</span>
                      </div>
                      <p className="timeline-description">{project.description}</p>
                      <div className="timeline-links">
                        {project.links.map((link, lIndex) => (
                          <a 
                            key={lIndex} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="timeline-link"
                          >
                            {getLinkIcon(link.type)}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProjects;
