// About Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React from 'react';
import { personalInfo, education, certifications } from '../data/personalInfo';
import { FiAward, FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my journey, education, and achievements
          </p>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <div className="about-intro">
              <p className="about-paragraph">{personalInfo.aboutMe.intro}</p>
              <p className="about-paragraph">{personalInfo.aboutMe.focus}</p>
              <p className="about-paragraph">{personalInfo.aboutMe.passion}</p>
              <p className="about-paragraph highlight">{personalInfo.aboutMe.currentStatus}</p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">20%</span>
                <span className="highlight-label">Database Optimization</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15%</span>
                <span className="highlight-label">Performance Improvement</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5⭐</span>
                <span className="highlight-label">HackerRank SQL</span>
              </div>
            </div>
          </div>

          {/* About Visual */}
          <div className="about-visual">
            <div className="about-card">
              <div className="card-content">
                <h3>📍 Current Location</h3>
                <p>{personalInfo.location}</p>
                
                <h3>🎯 Specialization</h3>
                <p>Data & AI Engineering, Distributed Systems</p>
                
                <h3>💼 Looking For</h3>
                <p>Full-time opportunities in Data Engineering and Software Development</p>
                
                <h3>🌟 Passion</h3>
                <p>Building intelligent systems that solve real-world problems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="subsection-title">
            <FiBook className="subsection-icon" />
            Education
          </h3>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <span className="education-year">{edu.duration}</span>
                </div>
                <div className="education-school">
                  <FiMapPin className="location-icon" />
                  <span>{edu.institution} - {edu.location}</span>
                </div>
                <p className="education-description">{edu.description}</p>
                <ul className="education-highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="subsection-title">
            <FiAward className="subsection-icon" />
            Certifications & Achievements
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-header">
                  <div className="certification-icon">🏆</div>
                  <div className="certification-info">
                    <h4 className="certification-title">{cert.title}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                  </div>
                  <span className="certification-date">
                    <FiCalendar />
                    {cert.date}
                  </span>
                </div>
                <p className="certification-description">{cert.description}</p>
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;