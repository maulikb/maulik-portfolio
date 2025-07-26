// Main App Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { personalInfo } from './data/personalInfo';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) when available
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
    }

    // Set page title
    document.title = `${personalInfo.name} - ${personalInfo.title}`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', personalInfo.bio);
    }

    // Set canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3 className="footer-name">{personalInfo.name}</h3>
              <p className="footer-title">{personalInfo.title}</p>
              <p className="footer-bio">
                Building scalable distributed systems and transforming data into valuable insights.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href={`mailto:${personalInfo.social.email}`}>Email</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copy">
              <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
              <p>Built with React ⚛️ • Designed with ❤️ • {personalInfo.isAvailable ? '✅ Available for opportunities' : '🔴 Currently unavailable'}</p>
            </div>
            <div className="footer-location">
              <p>📍 {personalInfo.location}</p>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .app-footer {
            background: linear-gradient(135deg, #1f2937, #111827);
            color: white;
            padding: var(--spacing-2xl) 0 var(--spacing-lg) 0;
            margin-top: var(--spacing-2xl);
          }
          
          .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-2xl);
            margin-bottom: var(--spacing-xl);
          }
          
          .footer-info {
            max-width: 400px;
          }
          
          .footer-name {
            font-size: var(--font-size-2xl);
            font-weight: 700;
            margin-bottom: var(--spacing-xs);
            background: linear-gradient(135deg, #60a5fa, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .footer-title {
            font-size: var(--font-size-lg);
            color: #94a3b8;
            margin-bottom: var(--spacing-sm);
            font-weight: 500;
          }
          
          .footer-bio {
            font-size: var(--font-size-base);
            color: #cbd5e1;
            line-height: var(--line-height-normal);
          }
          
          .footer-links {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-xl);
          }
          
          .footer-section h4 {
            font-size: var(--font-size-lg);
            font-weight: 600;
            margin-bottom: var(--spacing-md);
            color: #f1f5f9;
          }
          
          .footer-section ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .footer-section li {
            margin-bottom: var(--spacing-sm);
          }
          
          .footer-section a {
            color: #94a3b8;
            text-decoration: none;
            transition: color var(--transition-fast);
            font-size: var(--font-size-base);
          }
          
          .footer-section a:hover {
            color: #60a5fa;
          }
          
          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: var(--spacing-lg);
            border-top: 1px solid #374151;
            flex-wrap: wrap;
            gap: var(--spacing-md);
          }
          
          .footer-copy p {
            margin: 0 0 var(--spacing-xs) 0;
            color: #94a3b8;
            font-size: var(--font-size-sm);
          }
          
          .footer-location p {
            margin: 0;
            color: #60a5fa;
            font-size: var(--font-size-sm);
            font-weight: 500;
          }
          
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
              gap: var(--spacing-xl);
              text-align: center;
            }
            
            .footer-links {
              grid-template-columns: 1fr;
              gap: var(--spacing-lg);
            }
            
            .footer-bottom {
              flex-direction: column;
              text-align: center;
              gap: var(--spacing-sm);
            }
          }
        `}</style>
      </footer>
    </div>
  );
}

export default App;