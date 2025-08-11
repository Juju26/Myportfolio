import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Award, Briefcase } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      icon: <GraduationCap size={24} />,
      institution: "Velammal Engineering College, Chennai",
      degree: "B.E | Computer Science & Engineering",
      period: "Sep 2018 - Jul 2022",
      achievements: [
        "Learnt concepts of OOAD, CN, DBMS and programming languages",
        "Worked in seniors' startups and been a tech nomad exploring new technologies",
        "Graduated in computer science and engineering with a CGPA of 9.04"
      ]
    },
    {
      icon: <Award size={24} />,
      institution: "Guru Gnana Sambandar Mission Matric Hr Sec School, MYL",
      degree: "H.S.C",
      period: "Jun 2017 - Apr 2018",
      achievements: [
        "Been Assistant School People leader",
        "Bagged number of prizes in elocutions",
        "Completed Higher secondary school in computer group with 94%"
      ]
    }
  ];

  const experience = [
    {
      icon: <Briefcase size={24} />,
      company: "Cognizant Technology Solutions",
      position: "Software Engineer",
      period: "Oct 2024 - Present",
      achievements: [
        "Responsible for end-to-end development and refactoring of complex application features, which includes designing and implementing high-performance solutions that align with Agile methodologies.",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Participating in code reviews and contributing to team best practices"
      ]
    },
    {
        icon: <Briefcase size={24} />,
        company: "Cognizant Technology Solutions",
        position: "Jr Software Engineer",
        period: "Aug 2022 - Sep 2024",
        achievements: [
          "Developing and maintaining software applications using modern technologies",
          "Collaborating with cross-functional teams to deliver high-quality solutions",
          "Participating in code reviews and contributing to team best practices"
        ]
      },{
        icon: <Briefcase size={24} />,
        company: "Cognizant Technology Solutions",
        position: "Full-stack Intern",
        period: "Feb 2022 - Jun 2022",
        achievements: [
          "Developing and maintaining software applications using modern technologies",
          "Collaborating with cross-functional teams to deliver high-quality solutions",
          "Participating in code reviews and contributing to team best practices"
        ]
      }
  ];

  const technicalSkills = [
    { name: "Python", percentage: 95, color: "#3776AB", category: "Programming" },
    { name: "JavaScript", percentage: 85, color: "#F7DF1E", category: "Programming" },
    { name: "React.js", percentage: 80, color: "#61DAFB", category: "Frontend" },
    { name: "Node.js", percentage: 75, color: "#339933", category: "Backend" },
    { name: "Git/GitHub", percentage: 90, color: "#181717", category: "Tools" },
    { name: "SQL/MySQL", percentage: 85, color: "#4479A1", category: "Database" },
    { name: "HTML/CSS", percentage: 90, color: "#E34F26", category: "Frontend" },
    { name: "UX/UI Design", percentage: 85, color: "#FF6B6B", category: "Design" }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "HTML5/CSS3", "Material UI", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",  
      skills: ["OracleDB", "MySQL", "Spring Boot", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "MuleSoft", "Postman", "Docker"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "CI/CD", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education & Skills</h2>
          <p className="section-subtitle">
            My educational background, professional experience, and technical expertise that shape my development journey
          </p>
        </motion.div>

        <div className="skills__content">
          {/* Work Experience Section */}
          <motion.div
            className="skills__education"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="skills__section-title">
              <Briefcase size={24} />
              Work Experience
            </h3>

            <div className="skills__education-list">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="skills__education-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="skills__education-icon">
                    {exp.icon}
                  </div>
                  <div className="skills__education-content">
                    <h4 className="skills__education-institution">{exp.company}</h4>
                    <p className="skills__education-degree">{exp.position}</p>
                    <p className="skills__education-period">{exp.period}</p>
                    <ul className="skills__education-achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <h3 className="skills__section-title" style={{ marginTop: '2rem' }}>
              <GraduationCap size={24} />
              Education
            </h3>

            <div className="skills__education-row">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`skills__education-item ${edu.degree.includes('B.E') ? 'skills__education-highlight' : 'skills__education-dormant'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="skills__education-icon">
                    {edu.icon}
                  </div>
                  <div className="skills__education-content">
                    <h4 className="skills__education-institution">{edu.institution}</h4>
                    <p className="skills__education-degree">{edu.degree}</p>
                    <p className="skills__education-period">{edu.period}</p>
                    <ul className="skills__education-achievements">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="skills__technical"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="skills__section-title">
              <Code size={24} />
              Technical Skills
            </h3>

            <p className="skills__description">
              Have good knowledge on various development stack existence and have experience working on few of them.
              Continuously learning and adapting to new technologies and best practices.
            </p>

            {/* Skill Categories */}
            <div className="skills__categories">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="skills__category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="skills__category-title">{category.title}</h4>
                  <div className="skills__category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skills__category-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Bars */}
            {/* <h4 className="skills__bars-title">Proficiency Levels</h4>
            <div className="skills__bars">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skills__bar-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="skills__bar-header">
                    <span className="skills__bar-name">{skill.name}</span>
                    <span className="skills__bar-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skills__bar-container">
                    <div
                      className="skills__bar-fill"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div> */}

            {/* <div className="skills__image">
              <img
                src="/assets/img/skillsimg.png"
                alt="Skills visualization"
                className="skills__img"
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
