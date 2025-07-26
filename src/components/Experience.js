// Experience Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React from 'react';
import { experience } from '../data/personalInfo';
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Freelance':
        return '💼';
      case 'Full-time':
        return '🏢';
      case 'Part-time':
        return '⏰';
      case 'Contract':
        return '📋';
      default:
        return '💼';
    }
  };

  const getTechColor = (tech) => {
    const colors = {
      'Python': '#3776ab',
      'Java': '#f89820',
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'React': '#61dafb',
      'Node.js': '#339933',
      'AWS': '#ff9900',
      'Docker': '#2496ed',
      'PostgreSQL': '#336791',
      'Firebase': '#ffca28',
      'TensorFlow': '#ff6f00',
      'NestJS': '#e0234e'
    };
    return colors[tech] || '#6b7280';
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey in building scalable systems and data solutions
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="timeline-dot">
                  <div className="dot-inner"></div>
                </div>
                
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-main-info">
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">
                        <FiBriefcase className="company-icon" />
                        <span className="company-name">{exp.company}</span>
                        <span className="experience-type">
                          <span className="type-icon">{getTypeIcon(exp.type)}</span>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="experience-meta">
                      <div className="experience-duration">
                        <FiCalendar className="duration-icon" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="experience-location">
                        <FiMapPin className="location-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-description">
                    <p>{exp.description}</p>
                  </div>

                  <div className="experience-achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-bullet">✓</span>
                          <span className="achievement-text">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h4 className="technologies-title">Technologies Used:</h4>
                    <div className="technologies-list">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="technology-tag"
                          style={{ '--tech-color': getTechColor(tech) }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="experience-summary">
            <h3 className="summary-title">Career Highlights</h3>
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-metric">3+</div>
                <div className="summary-label">Years of Experience</div>
                <div className="summary-description">Building scalable distributed systems</div>
              </div>
              
              <div className="summary-card">
                <div className="summary-metric">500+</div>
                <div className="summary-label">Concurrent Users</div>
                <div className="summary-description">Served by systems I've built</div>
              </div>
              
              <div className="summary-card">
                <div className="summary-metric">20%</div>
                <div className="summary-label">Database Optimization</div>
                <div className="summary-description">Complexity reduction achieved</div>
              </div>
              
              <div className="summary-card">
                <div className="summary-metric">15%</div>
                <div className="summary-label">Performance Boost</div>
                <div className="summary-description">System performance improvement</div>
              </div>
            </div>
          </div>

          {/* Skills Developed */}
          <div className="skills-developed">
            <h3 className="skills-title">Core Competencies Developed</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <div className="category-icon">🏗️</div>
                <h4>System Architecture</h4>
                <p>Designing scalable, fault-tolerant distributed systems</p>
              </div>
              
              <div className="skill-category">
                <div className="category-icon">📊</div>
                <h4>Data Engineering</h4>
                <p>Building ETL pipelines and optimizing data processing</p>
              </div>
              
              <div className="skill-category">
                <div className="category-icon">☁️</div>
                <h4>Cloud Infrastructure</h4>
                <p>AWS and Azure cloud services implementation</p>
              </div>
              
              <div className="skill-category">
                <div className="category-icon">🤖</div>
                <h4>AI & Machine Learning</h4>
                <p>Developing intelligent algorithms and ML pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;