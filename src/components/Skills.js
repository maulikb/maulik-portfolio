// Skills Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React from 'react';
import { skills } from '../data/personalInfo';
import { FiCode, FiTrendingUp } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillIcons = {
    "Java": "☕",
    "C++": "⚡",
    "Python": "🐍",
    "JavaScript": "🟨",
    "TypeScript": "🔷",
    "SQL": "🗄️",
    "C#": "💎",
    "AWS": "☁️",
    "Azure": "🌐",
    "Docker": "🐳",
    "Kubernetes": "⚓",
    "Apache Airflow": "🌊",
    "PostgreSQL": "🐘",
    "MySQL": "🐬",
    "MongoDB": "🍃",
    "SQLite": "📦",
    "Redis": "🔴",
    "Firebase": "🔥",
    "Amazon RDS": "📊",
    "React": "⚛️",
    "Node.js": "💚",
    "NestJS": "🦅",
    "TensorFlow": "🧠",
    "Apache Kafka": "📡",
    "WebSocket": "🔌",
    "RESTful APIs": "🌐"
  };

  const getSkillIcon = (skill) => {
    return skillIcons[skill] || "🔧";
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable, distributed systems and data solutions
          </p>
        </div>

        <div className="skills-content">
          {/* Technical Skills Grid */}
          <div className="technical-skills">
            <h3 className="subsection-title">
              <FiCode className="subsection-icon" />
              Technical Skills
            </h3>
            
            <div className="skills-grid">
              {Object.entries(skills.technical).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skills-list">
                    {skillList.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span className="skill-icon">{getSkillIcon(skill)}</span>
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency Levels */}
          <div className="proficiency-section">
            <h3 className="subsection-title">
              <FiTrendingUp className="subsection-icon" />
              Proficiency Levels
            </h3>
            
            <div className="proficiency-grid">
              {skills.proficiencyLevels.map((item, index) => (
                <div key={index} className="proficiency-item">
                  <div className="proficiency-header">
                    <div className="proficiency-info">
                      <span className="proficiency-icon">{item.icon}</span>
                      <span className="proficiency-skill">{item.skill}</span>
                    </div>
                    <span className="proficiency-percentage">{item.level}%</span>
                  </div>
                  <div className="proficiency-bar">
                    <div 
                      className="proficiency-fill"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="skills-summary">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-icon">💻</div>
                <div className="summary-content">
                  <h4>Programming Languages</h4>
                  <p>7+ languages including Java, Python, C++</p>
                </div>
              </div>
              
              <div className="summary-card">
                <div className="summary-icon">☁️</div>
                <div className="summary-content">
                  <h4>Cloud Platforms</h4>
                  <p>AWS, Azure with distributed computing expertise</p>
                </div>
              </div>
              
              <div className="summary-card">
                <div className="summary-icon">🗄️</div>
                <div className="summary-content">
                  <h4>Database Systems</h4>
                  <p>SQL & NoSQL databases with optimization skills</p>
                </div>
              </div>
              
              <div className="summary-card">
                <div className="summary-icon">🤖</div>
                <div className="summary-content">
                  <h4>AI & Machine Learning</h4>
                  <p>TensorFlow, deep learning, and model training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="achievements-highlight">
            <h3 className="subsection-title">Key Technical Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-metric">20%</div>
                <div className="achievement-description">Database complexity reduction through optimization</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-metric">15%</div>
                <div className="achievement-description">System performance improvement</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-metric">5⭐</div>
                <div className="achievement-description">HackerRank SQL certification</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-metric">500+</div>
                <div className="achievement-description">Concurrent users served by distributed systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;