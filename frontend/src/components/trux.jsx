/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Logout from '../components/truxout';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ReactPaginate from 'react-paginate';

const AdminDashboard = () => {
  const [formsData, setFormsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedForm, setSelectedForm] = useState(null); // Added state for selected form
  const formsPerPage = 10;

  useEffect(() => {
    // Fetch submitted forms data from backend
    fetch('/api/submitted-forms')
      .then((response) => response.json())
      .then((data) => {
        setFormsData(data);
        setFilteredData(data);
      });
  }, []);

  // Handle View
  const handleView = (form) => {
    setSelectedForm(form);
    // You can also implement modal or redirect logic here to show the selected form's details
  };

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      // Make API call to delete the form
      fetch(`/api/submitted-forms/${id}`, { method: 'DELETE' })
        .then((response) => {
          if (response.ok) {
            // Update state to remove deleted form
            setFormsData(formsData.filter((form) => form.id !== id));
            setFilteredData(filteredData.filter((form) => form.id !== id));
            alert('Form deleted successfully');
          } else {
            alert('Failed to delete the form');
          }
        })
        .catch((error) => {
          console.error('Error deleting form:', error);
          alert('An error occurred while deleting the form');
        });
    }
  };

  // Search Functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = formsData.filter(
      (form) =>
        form.name.toLowerCase().includes(term) ||
        form.email.toLowerCase().includes(term) ||
        form.specialization.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  };

  // Pagination Logic
  const pageCount = Math.ceil(filteredData.length / formsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const displayForms = filteredData.slice(
    currentPage * formsPerPage,
    (currentPage + 1) * formsPerPage
  );

  

  // Charts Data Preparation
  const specializationCounts = formsData.reduce((acc, form) => {
    acc[form.specialization] = (acc[form.specialization] || 0) + 1;
    return acc;
  }, {});

  const monthlySubmissions = formsData.reduce((acc, form) => {
    const month = new Date(form.submittedAt).toLocaleString('default', { month: 'short', year: 'numeric' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const degreeCounts = formsData.reduce((acc, form) => {
    acc[form.degree] = (acc[form.degree] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <Logout />

      {/* Search and Export */}
     

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>Submissions by Specialization</h3>
          <Pie
            data={{
              labels: Object.keys(specializationCounts),
              datasets: [
                {
                  data: Object.values(specializationCounts),
                  backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#C9CBCF',
                  ],
                },
              ],
            }}
          />
        </div>

        <div className="chart-container">
          <h3>Monthly Submissions</h3>
          <Bar
            data={{
              labels: Object.keys(monthlySubmissions),
              datasets: [
                {
                  label: 'Number of Submissions',
                  data: Object.values(monthlySubmissions),
                  backgroundColor: '#36A2EB',
                },
              ],
            }}
          />
        </div>

        <div className="chart-container">
          <h3>Submissions by Degree</h3>
          <Doughnut
            data={{
              labels: Object.keys(degreeCounts),
              datasets: [
                {
                  data: Object.values(degreeCounts),
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
          />
        </div>

        <div className="chart-container">
          <h3>Trend of Submissions Over Time</h3>
          <Line
            data={{
              labels: Object.keys(monthlySubmissions),
              datasets: [
                {
                  label: 'Submissions',
                  data: Object.values(monthlySubmissions),
                  fill: false,
                  borderColor: '#FF6384',
                },
              ],
            }}
          />
        </div>
      </div>

      {/* Submitted Forms Table */}
      <div className="submitted-forms">
        <h3>Submitted Forms</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Degree</th>
              <th>Date Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayForms.map((form, index) => (
              <tr key={index}>
                <td>{form.name}</td>
                <td>{form.specialization}</td>
                <td>{form.email}</td>
                <td>{form.phone}</td>
                <td>{form.degree}</td>
                <td>{new Date(form.submittedAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleView(form)}>View</button>
                  <button onClick={() => handleDelete(form.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
