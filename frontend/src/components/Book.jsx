/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';  // Importing Footer component
import Counter from './Count';  // Importing Counter component
import '../styles/Book.css';  // Importing the CSS file
import image5 from '../assets/book.png';  // Importing the image

const Booking = () => {
  const navigate = useNavigate();

  // Redirect to payment page when button is clicked
  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    
    <div className="container">
      <h1 className="title">Book Truxconsult now</h1>
      
      <section className="responsive-section">
        <div className="responsive-image" 
          style={{ 
            backgroundImage: `url(${image5})`, 
            width: '100%', 
            height: '400px', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            
          }}>
          <div className="text-content">
            <p>
              Recruitment with TruxConsult involves a strategic approach to identifying, attracting, and hiring top talent for various organizations. TruxConsult specializes in understanding the unique needs of each client, whether they are looking to fill executive positions, technical roles, or build a diverse workforce.
            </p>
          </div>
        </div>

        <button className="button" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </section>

      <section>
        <Counter /> {/* Include Counter component */}
      </section>
   
      <section>
        <Footer /> {/* Include Footer at the bottom */}
      </section>
    </div>
  );
};

export default Booking;
