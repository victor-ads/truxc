/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import '../styles/DashboardLayout.css'; // For styling


const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/analytics">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Fixed path here */}
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        <header>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Admin Dashboard</h1>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

// Add prop validation for children
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validates the children prop
};

export default DashboardLayout;
