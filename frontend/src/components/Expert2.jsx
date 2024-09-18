/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom

import '../styles/Expert.css'; // Import the CSS file

import image1 from '../assets/coll.jpg';
import image2 from '../assets/marry.jpg';
import image3 from '../assets/FIRST.jpg';
import image4 from '../assets/bolly.jpg';
import image5 from '../assets/nuz.jpg'; 
import image6 from '../assets/marry.jpg';
import image7 from '../assets/FIRST.jpg';
import image8 from '../assets/bolly.jpg';
import image9 from '../assets/nuz.jpg'; 

const profiles = [
  { id: 1, name: 'Eve Green', position: 'CIVIL ENG.', price: 25000, email: 'eve.green@example.com', image: image1 },
  { id: 2, name: 'John Doe', position: 'MECHANICAL ENG.', price: 30000, email: 'john.doe@example.com', image: image2 },
  { id: 3, name: 'Alice Smith', position: 'ELECTRICAL ENG.', price: 28000, email: 'alice.smith@example.com', image: image3 },
  { id: 4, name: 'Bob Brown', position: 'SOFTWARE ENG.', price: 40000, email: 'bob.brown@example.com', image: image4 },
  { id: 5, name: 'Carol White', position: 'STRUCTURAL ENG.', price: 35000, email: 'carol.white@example.com', image: image5 },
  { id: 6, name: 'Dave Wilson', position: 'CHEMICAL ENG.', price: 32000, email: 'dave.wilson@example.com', image: image6 },
  { id: 7, name: 'Eva Black', position: 'ENVIRONMENTAL ENG.', price: 27000, email: 'eva.black@example.com', image: image7 },
  { id: 8, name: 'Frank Harris', position: 'AERONAUTICAL ENG.', price: 45000, email: 'frank.harris@example.com', image: image8 },
  { id: 9, name: 'Grace Lee', position: 'INDUSTRIAL ENG.', price: 33000, email: 'grace.lee@example.com', image: image9 },
  { id: 10, name: 'Henry Martinez', position: 'BIOMEDICAL ENG.', price: 29000, email: 'henry.martinez@example.com', image: 'https://via.placeholder.com/150?text=Henry+Martinez' }
];

const EngineerProfileCardSlider = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;

    const startSliding = () => {
      interval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 2;
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
          }
        }
      }, 20);
    };

    if (!isHovered) {
      startSliding();
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const redirectToPaymentPage = (profile) => {
    const paymentPageUrl = '/payment';
    navigate({
      pathname: paymentPageUrl,
      search: `?name=${profile.name}&price=${profile.price}`
    });
  };

  return (
    <div>
      <div 
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="slider" ref={sliderRef}>
          {profiles.map(profile => (
            <div key={profile.id} className="profile-card">
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-image"
              />
              <div className="profile-content">
                <div className="profile-name">{profile.name}</div>
                <div className="profile-position">{profile.position}</div>
                <div className="profile-price">₦{profile.price}</div>
                <button
                  className="profile-button"
                  onClick={() => redirectToPaymentPage(profile)}
                >
                  Hire Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default EngineerProfileCardSlider;
