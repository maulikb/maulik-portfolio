// Projects Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React, { useState } from 'react';
import { projects, projectCategories, projectStats } from '../data/projects';
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiTrendingUp, FiDatabase } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Data Engineering': '📊',
      'Full-Stack Development': '🚀',
      'Machine Learning': '🤖',
      'Database Systems': '🗄️',
      'All': '📁'
    };
    return icons[category] || '🔧';
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative data engineering and AI projects that solve real-world problems
          </p>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">📁</div>
              <div className="stat-number">{projectStats.totalProjects}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">{projectStats.totalTechnologies}</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📈</div>
              <div className="stat-number">{projectStats.totalCommits}</div>
              <div className="stat-label">Commits</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">{projectStats.yearsOfExperience}</div>
              <div className="stat-label">Experience</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="filter-icon">{getCategoryIcon(category)}</span>
              <span className="filter-text">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-category-badge">
                  <span className="category-icon">{getCategoryIcon(project.category)}</span>
                  <span className="category-text">{project.category}</span>
                </div>
                <div className="project-status">{project.status}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-impact">
                  <div className="impact-icon">📈</div>
                  <span className="impact-text">{project.impact}</span>
                </div>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>

              <div className="project-actions">
                <button
                  className="btn-details"
                  onClick={() => openProjectModal(project)}
                >
                  View Details
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Integration */}
        <div className="github-section">
          <div className="github-content">
            <div className="github-info">
              <h3>🚀 More Projects on GitHub</h3>
              <p>
                Explore my complete collection of projects, contributions, and code samples.
                From data pipelines to machine learning models, discover how I solve complex problems.
              </p>
              <a
                href="https://github.com/maulikb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary github-btn"
              >
                <FiGithub />
                Visit My GitHub
              </a>
            </div>
            <div className="github-stats">
              <div className="github-stat">
                <FiCode className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Repositories</div>
                </div>
              </div>
              <div className="github-stat">
                <FiUsers className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Followers</div>
                </div>
              </div>
              <div className="github-stat">
                <FiTrendingUp className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Commits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <button className="modal-close" onClick={closeProjectModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="modal-meta">
                <span className="modal-category">
                  {getCategoryIcon(selectedProject.category)} {selectedProject.category}
                </span>
                <span className="modal-year">{selectedProject.year}</span>
                <span className="modal-status">{selectedProject.status}</span>
              </div>

              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="modal-impact">
                <h4>🎯 Project Impact</h4>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="modal-features">
                <h4>✨ Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-technologies">
                <h4>🛠️ Technologies Used</h4>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiGithub />
                  View on GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;