/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock function to simulate authentication
const authenticateUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve(true);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setIsSubmitting(true); // Indicate that the login process has started

    try {
      const isAuthenticated = await authenticateUser(username, password);
      if (isAuthenticated) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message); // Display error message
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <div style={styles.checkboxContainer}>
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={styles.checkbox}
            />
            <label htmlFor="showPassword" style={styles.checkboxLabel}>Show Password</label>
          </div>
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" disabled={isSubmitting} style={styles.button}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px'
  },
  heading: {
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '20px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
  },
  checkbox: {
    marginRight: '10px'
  },
  checkboxLabel: {
    color: '#555'
  },
  error: {
    color: 'red',
    marginBottom: '15px'
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  }
};

export default Login;
