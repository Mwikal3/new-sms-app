import React, { useState } from 'react';
import '../styles/contact-details.css';


const ContactDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState([
    // Sample data - Replace with actual contact data
    { id: 1, contact: 'John Doe', group: 'Group A', dateAdded: '2023-09-01' },
    { id: 2, contact: 'Jane Smith', group: 'Group B', dateAdded: '2023-09-10' }
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
    // Handle file upload logic here
  };

  const handleDelete = (id) => {
    console.log('Delete contact with ID:', id);
    // Handle delete logic
  };

  return (
    <div className="contact-details">
      {/* <div className="header">
        <h2>Contact Management</h2>
        <div className="home-link">
          <span>Home</span>
        </div>
      </div> */}

      <div className="top-section">
        <div className="group-info">
          <div className="info-box">Group Name</div>
          <div className="info-box">Type</div>
          <div className="info-box">Status</div>
        </div>

        <div className="upload-section">
          <h4>Upload Contacts File (.csv)</h4>
          <input type="file" onChange={handleUploadFile} className="file-input" />
          <button className="upload-btn">Upload Contacts</button>
        </div>
      </div>

      <div className="toolbar">
        <div className="entries">
          <label>Entries</label>
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="actions">
          <button className="download-btn">
            <i className="fa fa-download"></i>
          </button>
          <button className="delete-all-btn">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>

      <table className="contacts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Contact</th>
            <th>Group</th>
            <th>Date Added</th>
            <th>Actions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.contact}</td>
              <td>{contact.group}</td>
              <td>{contact.dateAdded}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button className="action-btn">Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetails;
