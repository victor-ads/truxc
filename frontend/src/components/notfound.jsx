/* eslint-disable no-unused-vars */
// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css'; // Import CSS file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
