/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios'; // You'll need to install axios or use another method for sending emails.

const Payment = () => {
  // State to hold engineer and project details
  const [engineerName, setEngineerName] = useState('');
  const [price, setPrice] = useState('');
  const [projectType, setProjectType] = useState('');
  const [stageOfProject, setStageOfProject] = useState('');
  const [location, setLocation] = useState('');
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [state, setState] = useState('');
  const [localGovernment, setLocalGovernment] = useState('');

  // Handler to redirect to Paystack and send email
  const handlePayment = async () => {
    // Prepare the email content
    const emailContent = `
      Engineer Name: ${engineerName}
      Price (₦): ${price}
      Project Type: ${projectType}
      Stage of Project: ${stageOfProject}
      Location: ${location}
      Nearest Landmark: ${nearestLandmark}
      State: ${state}
      Local Government: ${localGovernment}
    `;

    // Send email
    try {
      await axios.post('YOUR_BACKEND_ENDPOINT', {
        to: 'adielevictor2021@gmail.com',
        subject: 'Payment Information',
        text: emailContent,
      });
      // Redirect to Paystack
      const paystackUrl = `https://paystack.com/pay/l5833s-aak?amount=${price * 100}&name=${encodeURIComponent(engineerName)}`;
      window.location.href = paystackUrl;
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle errors here (e.g., show a message to the user)
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fill the Following</h1>

      <label style={styles.label}>
        Engineer Name:
        <input
          type="text"
          value={engineerName}
          onChange={(e) => setEngineerName(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Price (₦):
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Project Type:
        <input
          type="text"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Stage of Project:
        <input
          type="text"
          value={stageOfProject}
          onChange={(e) => setStageOfProject(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Nearest Landmark:
        <input
          type="text"
          value={nearestLandmark}
          onChange={(e) => setNearestLandmark(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        State:
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Local Government:
        <input
          type="text"
          value={localGovernment}
          onChange={(e) => setLocalGovernment(e.target.value)}
          style={styles.input}
        />
      </label>

      <button style={styles.button} onClick={handlePayment}>
        Proceed Payment
      </button>
    </div>
  );
};

// Styles for the payment form
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  label: {
    display: 'block',
    margin: '20px 0',
    fontSize: '1.2rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Payment;
