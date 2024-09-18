/* eslint-disable no-unused-vars */
// HomePage.js
import React, { useEffect, useState } from "react";
import Footer from "./Footer"; // Import the Footer component
import "../styles/home.css"; // Import the CSS file
import Expert from "../components/Expert2";
import ImageSlider from '../components/slide';
import HeroSection from "../components/Herosection"; // Import the HeroSection component
import Count from "../components/Count"

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll event to show or hide the Scroll to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Expert Section */}
      <section className="expert-section">
        <h2>Our Experts</h2>
        <p>Meet our team of highly skilled professionals.</p>
        <Expert />
      </section>

      {/* Count Section */}
      <section className="count-section">
        <h2>Why Choose Us?</h2>
        <Count />
      </section>

      {/* House Section */}
      <section className="house-section">
        <h2>Featured Properties</h2>
        <p>Take a look at some of our recent projects.</p>
        <ImageSlider />
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
