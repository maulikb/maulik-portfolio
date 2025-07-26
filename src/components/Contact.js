// Contact Section Component - Maulik Beladiya Portfolio
// Created by: Maulik Beladiya
// License: MIT

import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: personalInfo.email,
      description: 'Drop me a line anytime',
      link: `mailto:${personalInfo.email}`,
      color: '#ea4335'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: personalInfo.phone,
      description: 'Available for calls',
      link: `tel:${personalInfo.phone}`,
      color: '#34a853'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: personalInfo.location,
      description: 'Currently based in',
      link: null,
      color: '#4285f4'
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional networking',
      link: personalInfo.social.linkedin,
      color: '#0077b5'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to discuss your next data engineering project? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3>💼 Let's Work Together</h3>
              <p>
                I'm currently <strong>{personalInfo.availabilityText.toLowerCase()}</strong> for full-time 
                Data Engineering and Software Development positions. Whether you have a project in mind, 
                want to discuss opportunities, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon" style={{ '--method-color': method.color }}>
                    <method.icon />
                  </div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-description">{method.description}</p>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target={method.title === 'LinkedIn' ? '_blank' : '_self'}
                        rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                        className="method-value"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-value">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>🌐 Find Me Online</h4>
              <div className="social-buttons">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="social-btn email"
                >
                  <FiMail />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3>📝 Send Me a Message</h3>
              <p>Have a project in mind? Let's discuss how we can work together.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FiUser />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FiMail />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <FiMessageSquare />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FiMessageSquare />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project, opportunities, or just say hello..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>🚀 Ready to Start Something Great?</h3>
            <p>
              Whether you're looking for a data engineer, need help with distributed systems, 
              or want to collaborate on an AI project, I'm here to help turn your ideas into reality.
            </p>
            <div className="cta-buttons">
              <a
                href={personalInfo.resumeUrl}
                download="Maulik_Beladiya_Resume.pdf"
                className="btn btn-primary cta-btn"
              >
                📄 Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}?subject=Let's discuss a project`}
                className="btn btn-secondary cta-btn"
              >
                💬 Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;