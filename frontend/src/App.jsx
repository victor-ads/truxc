/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
import Recruitment from './components/Recruitment'; // Import missing Recruitment component
import Expert from './components/Expert'; // Import missing Expert component
import Book from './components/Book'; // Import missing Book component
import Contact from './components/Contact'; // Import missing Contact component
import About from './components/About'; // Import missing About component
import Payment from './components/payment';
import HeroSection from "./components/Herosection";
import AdminLogin from './components/truxin';
import AdminDashboard from './components/trux';
import FormDetails from './components/form';
import NotFoundPage from './components/notfound';
import Admin from "./components/minister";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Users from './components/Users';
import Analytics from './components/Analytics';
import Content from './components/Content';
import Settings from './components/Settings';


import './styles/mode.css';

const App = () => {
  const isAdminAuthenticated = () => localStorage.getItem('isAdmin') === 'true';

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={isAdminAuthenticated() ? <AdminDashboard /> : <Navigate to="/admin-login" />}
        />
        <Route path="/" element={<Home />} /> {/* Changed to root path for homepage */}
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/form-details/:id" element={<FormDetails />} />
        <Route path="/privacys" element={<privacys />} />
        <Route path="*" element={<NotFoundPage />} />  {/* This will catch all unmatched routes */}
        <Route path="/login" element={<Login />} />

        {/* Protect Admin and Dashboard routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Dashboard with nested routes */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard>
                <Routes>
                  
                  <Route path="/users" element={<Users />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/content" element={<Content />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Dashboard>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
