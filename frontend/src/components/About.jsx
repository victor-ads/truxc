/* eslint-disable no-unused-vars */
// src/components/AboutUs.js
import React from 'react';
import '../styles/About.css'; // Import the CSS file for styling
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          TRUXCONSULT is a construction supervision platform that connects clients with expert civil engineers for flexible, on-demand consulting services.
        </p>
        <p>
          Our mission is to empower clients with peace of mind and restore trust between clients and contractors through transparent and independent supervision.
        </p>
        <p>
          With a network of top-tier civil engineers, we provide:
        </p>
        <ul>
          <li>Expert guidance for construction projects</li>
          <li>Independent quality control and assurance</li>
          <li>Flexible, day-based pricing</li>
        </ul>
        <p>
          At TRUXCONSULT, we are dedicated to building a better construction industry through trust, transparency, and expertise.
        </p>
      </div>
      <Footer /> 
    </>
  );
};

export default AboutUs;
