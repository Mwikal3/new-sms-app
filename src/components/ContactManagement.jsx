import React, { useState } from 'react';
import '../styles/contact-management.css';
import ExpressTemplate from '../components/ExpressTemplate'; // Import the form component
import { Link } from 'react-router-dom';

const ContactManagement = () => {
  const [showExpressMessageForm, setShowExpressMessageForm] = useState(false); // State to toggle express message form

  const [searchQuery, setSearchQuery] = useState('');
  const [groups, setGroups] = useState([
    { name: 'Group 1', status: 'Active', group: 'Sales', dateAdded: '2023-09-01' },
    { name: 'Group 2', status: 'Inactive', group: 'Support', dateAdded: '2023-08-15' },
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddGroup = () => {
    console.log('Add New Group clicked');
  };

  // Function to toggle the express message form visibility
  const toggleExpressMessageForm = () => {
    setShowExpressMessageForm(!showExpressMessageForm);
  };

  return (
    <div className="contact-management">
       <Link to="/"><span>Home</span></Link> 

      <div className="toolbar">

        <div className="entries">
          <label>Entries</label>
          <input type="number" placeholder="Number of entries" />
        </div>

        <button className="add-group-btn" onClick={handleAddGroup}>
          + Add New Group
        </button>

        <div className="search">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <table className="groups-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Group</th>
            <th>Date Added</th>
            <th>Actions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.status}</td>
              <td>{group.group}</td>
              <td>{group.dateAdded}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
              <td>
                <button className="send-msg-btn" onClick={toggleExpressMessageForm}>
                  Send Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show the express message form when "Send Message" is clicked */}
      {showExpressMessageForm && (
        <ExpressTemplate onClose={toggleExpressMessageForm} />
      )}

      <div className="send-message-footer">
        <button className="send-message-btn" onClick={toggleExpressMessageForm}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactManagement;
