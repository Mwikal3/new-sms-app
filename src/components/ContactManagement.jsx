import React, { useState } from 'react';
import '../styles/contact-management.css';


const ContactManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [groups, setGroups] = useState([
    // Example data - replace with real data as needed
    { name: 'Group 1', status: 'Active', group: 'Sales', dateAdded: '2023-09-01' },
    { name: 'Group 2', status: 'Inactive', group: 'Support', dateAdded: '2023-08-15' },
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddGroup = () => {
    console.log('Add New Group clicked');
  };

  return (
    <div className="contact-management">
      {/* <div className="header">
        <h2>Contact Management</h2>
        <div className="home-link">
          <span>Home</span>
        </div>
      </div> */}

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
                <button className="send-msg-btn">Send Message</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="send-message-footer">
        <button className="send-message-btn">Send Message</button>
      </div>
    </div>
  );
};

export default ContactManagement;
