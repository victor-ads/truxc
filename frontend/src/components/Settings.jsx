/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/Settings.css'; // For responsive styling

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [appSettings, setAppSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  // Handle profile input change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle app settings input change
  const handleAppSettingsChange = (e) => {
    const { name, type, checked, value } = e.target;
    setAppSettings({
      ...appSettings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', profile);
  };

  // Handle app settings form submission
  const handleAppSettingsSubmit = (e) => {
    e.preventDefault();
    // Handle app settings update logic here
    console.log('App settings updated:', appSettings);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Profile Settings</h3>
        <form onSubmit={handleProfileSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              required
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>

      <div className="settings-section">
        <h3>Application Settings</h3>
        <form onSubmit={handleAppSettingsSubmit}>
          <div>
            <label htmlFor="theme">Theme:</label>
            <select
              id="theme"
              name="theme"
              value={appSettings.theme}
              onChange={handleAppSettingsChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label htmlFor="notifications">Enable Notifications:</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={appSettings.notifications}
              onChange={handleAppSettingsChange}
            />
          </div>
          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
