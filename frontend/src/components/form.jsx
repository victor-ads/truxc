/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormDetails = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    // Fetch the specific form details by ID
    fetch(`/api/submitted-forms/${id}`)
      .then((response) => response.json())
      .then((data) => setForm(data));
  }, [id]);

  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{form.name} Details</h2>
      <p><strong>Email:</strong> {form.email}</p>
      <p><strong>Specialization:</strong> {form.specialization}</p>
      <p><strong>Phone:</strong> {form.phone}</p>
      <p><strong>Degree:</strong> {form.degree}</p>
      <p><strong>Date Submitted:</strong> {new Date(form.submittedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default FormDetails;
