/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:Truxconsult@gmail.com">Truxconsult@gmail.com</a></p>
        <p>Address: Imo-State-Nigeria</p>
      </div>

      <div className="footer-section follow-us">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="footer-section sitemap">
        <h3>Sitemap</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recruitment">Recruitment</a></li>
          <li><a href="/expert">Expert</a></li>
          <li><a href="/book">Book</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
         
        </ul>
      </div>

      <div className="footer-section mission">
        <h3>Our Mission & Values</h3>
        <p>Our mission is to provide a reliable, transparent, and cost-effective way to monitor your project.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
