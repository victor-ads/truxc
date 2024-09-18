/* eslint-disable no-unused-vars */
import React from 'react';
import GoogleMapComponent from './GoogleMap'; // Import the Google Map component

const FindUs = () => {
  return (
    <div className="find-us-container">
      <h1>Find Us</h1>
      <p>We are located in Imo State, Nigeria. Below is our exact location on the map:</p>
      <GoogleMapComponent />
    </div>
  );
};

export default FindUs;
