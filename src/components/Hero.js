// Hero Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Simple typing animation without external dependencies
    const words = [
      'Software Engineer'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        typedRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
          setTimeout(() => {
            isDeleting = true;
            setTimeout(type, deleteSpeed);
          }, pauseTime);
          return;
        }
      } else {
        typedRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      
      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    };

    type();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.social.github,
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      url: personalInfo.social.linkedin,
      icon: FiLinkedin
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.social.email}`,
      icon: FiMail
    }
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fade-in">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-name animate-slide-in-left">
              {personalInfo.name}
            </h1>
            
            <div className="hero-title animate-slide-in-left">
              <span className="title-prefix">I'm a </span>
              <span ref={typedRef} className="typed-text"></span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description animate-fade-in">
              {personalInfo.bio}
            </p>
            
            <div className="hero-location animate-fade-in">
              <span className="location-icon">📍</span>
              <span>{personalInfo.location}</span>
            </div>
            
            <div className="hero-actions animate-fade-in">
              <a
                href={personalInfo.resumeUrl}
                download="Maulik_Beladiya_Resume.pdf"
                className="btn btn-primary hero-cta"
              >
                <FiDownload />
                Download Resume
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary hero-cta"
              >
                <FiMail />
                Get In Touch
              </button>
            </div>
            
            <div className="hero-social animate-fade-in">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
            
            {personalInfo.isAvailable && (
              <div className="availability-badge animate-fade-in">
                <div className="availability-indicator"></div>
                <span>{personalInfo.availabilityText}</span>
              </div>
            )}
          </div>
          
          <div className="hero-visual animate-slide-in-right">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="card-title">portfolio.js</span>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">name:</span>
                  <span className="code-string"> "{personalInfo.name}"</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">role:</span>
                  <span className="code-string"> "{personalInfo.title}"</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">location:</span>
                  <span className="code-string"> "{personalInfo.location}"</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">skills:</span>
                  <span className="code-bracket"> [</span>
                </div>
                <div className="code-line code-indent-2">
                  <span className="code-string">"Python"</span>
                  <span className="code-punctuation">, </span>
                  <span className="code-string">"Java"</span>
                  <span className="code-punctuation">, </span>
                  <span className="code-string">"AWS"</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-bracket">]</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">available:</span>
                  <span className="code-boolean"> {personalInfo.isAvailable ? 'true' : 'false'}</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <button
            onClick={() => scrollToSection('about')}
            className="scroll-indicator"
            aria-label="Scroll to next section"
          >
            <FiArrowDown />
            <span>Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;