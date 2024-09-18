/* eslint-disable no-unused-vars */
// src/pages/ContactUs.jsx
import React from 'react';

import Footer from '../components/Footer'; // Adjust the path if needed
import Counter from '../components/Count'; // Adjust the path if needed
import '../styles/Contact.css'; // Ensure to create this CSS file for styling
import image5 from '../assets/contact.png';

const ContactUs = () => {
  return (
    <>
      <section className="responsive-section">
        <div 
          className="responsive-image" 
          style={{ 
            backgroundImage: `url(${image5})`, 
            width: '100%', 
            height: '400px', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="text-content">
            <p>
              Recruitment with TruxConsult involves a strategic approach to identifying, attracting, and hiring top talent for various organizations. TruxConsult specializes in understanding the unique needs of each client, whether they are looking to fill executive positions, technical roles, or build a diverse workforce.
            </p>
          </div>
        </div>
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-details">
          <h2>Contact Us on:</h2>
          <ul>
            <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://skype.com/" target="_blank" rel="noopener noreferrer">Skype</a></li>
          </ul>
        </div>
      </section>
      
      <section>
        <Counter /> {/* Include Counter component */}
      </section>
      
      <section>
        <Footer /> {/* Include Footer at the bottom */}
      </section>
    </>
  );
};

export default ContactUs;
