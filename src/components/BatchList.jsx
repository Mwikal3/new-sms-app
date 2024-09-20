import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExpressTemplate from '../components/ExpressTemplate'; // Import the form component
import '../styles/batch-list.css';

const BatchManagement = () => {
  const [batches, setBatches] = useState([
    { id: 1, date: '', timestamp: '', phoneNumber: '', message: '', status: 'Pending' },
    { id: 2, date: '', timestamp: '', phoneNumber: '', message: '', status: 'Sent' },
    { id: 3, date: '', timestamp: '', phoneNumber: '', message: '', status: 'Failed' },
  ]);

  const [showExpressMessageForm, setShowExpressMessageForm] = useState(false); // State to toggle express message form

  const handleEdit = (id) => {
    // Logic for handling edit
    console.log('Edit batch', id);
  };

  const handleDelete = (id) => {
    // Logic for handling delete
    console.log('Delete batch', id);
  };

  const toggleExpressMessageForm = () => {
    setShowExpressMessageForm(!showExpressMessageForm); // Toggle form visibility
  };

  return (
    <div className="batch-management-container">
      <main className="content">
        <div className="batch-header">
          <h1>Batch Management</h1>
          <Link to="/" className="home-icon">🏠</Link>
        </div>

        <div className="batch-actions">
          <button className="new-batch-btn">+ New Batch</button>
          <button className="express-message-btn" onClick={toggleExpressMessageForm}>
            ✉️ Express Message
          </button> {/* Add onClick to toggle the express message form */}
        </div>

        <div className="filters">
          <input type="date" placeholder="Select from date" />
          <span className="arrow">⇄</span>
          <input type="date" placeholder="Select to date" />
          <select>
            <option value="status">Status</option>
            <option value="pending">Pending</option>
            <option value="sent">Sent</option>
            <option value="failed">Failed</option>
          </select>
          <button className="refresh-btn">🔄 Refresh</button>
        </div>

        <input type="text" className="search-bar" placeholder="Search by recipient or message" />

        <table className="batch-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Timestamp</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id}>
                <td>{batch.date}</td>
                <td>{batch.timestamp}</td>
                <td>{batch.phoneNumber}</td>
                <td>{batch.message}</td>
                <td>{batch.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(batch.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(batch.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Conditionally render the express message form */}
        {showExpressMessageForm && <ExpressTemplate onClose={toggleExpressMessageForm} />} {/* Show form when state is true */}
      </main>
    </div>
  );
};

export default BatchManagement;
