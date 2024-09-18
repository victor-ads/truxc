/* eslint-disable no-unused-vars */
// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current user's data from the API
    axios.get('/api/current-user')
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const login = (credentials) => {
    return axios.post('/api/login', credentials)
      .then(response => setUser(response.data))
      .catch(error => console.error('Login failed', error));
  };

  const logout = () => {
    return axios.post('/api/logout')
      .then(() => setUser(null))
      .catch(error => console.error('Logout failed', error));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
