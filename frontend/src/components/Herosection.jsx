/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/coll.jpg';
import image2 from '../assets/marry.jpg';
import image3 from '../assets/FIRST.jpg';
import image4 from '../assets//bolly.jpg';
import image5 from '../assets/nuz.jpg';
import '../styles/hero.css'; // Import your external CSS file

const HeroSection = () => {
  return (
    <div className="box">
      <section className="hero">
        <div className="hero-slides">
          <div className="slide" style={{ backgroundImage: `url(${image1})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image3})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image4})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image5})` }}></div>
        </div>
        <div className="hero-content">
    <h1 className="fade-in">Welcome Truxconsult</h1>
    <p className="scale-up">
        “Engineering is the art of directing the great sources of power in nature for the use and convenience of man.”
    </p>


          <div className="hero-buttons">
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#007bff',
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/book"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#007bff',
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '5px',
                margin :30
              }}
            >
              Book Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
