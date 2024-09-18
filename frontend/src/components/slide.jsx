/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../styles/Slider.css'; // Advanced styling CSS

// Importing images at the top level
import img1 from '../assets/H1 (1).jpg';
import img2 from '../assets/H1 (2).jpg';
import img3 from '../assets/H1 (3).jpg';
import img4 from '../assets/H1 (4).jpg';
import img5 from '../assets/H1 (5).jpg';
import img6 from '../assets/H1 (6).jpg';

const Carousel = () => {
  const images = [
    { src: img1, alt: 'House 1' },
    { src: img2, alt: 'House 2' },
    { src: img3, alt: 'House 3' },
    { src: img4, alt: 'House 4' },
    { src: img5, alt: 'House 5' },
    { src: img6, alt: 'House 6' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 5 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds delay for auto slide

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            className="carousel-item" 
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
