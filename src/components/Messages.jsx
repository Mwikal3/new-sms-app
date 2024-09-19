import React, { useState } from 'react';
import './index.css';

const Messages = () => {
  const [campaignName, setCampaignName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log("Campaign submitted:", {
      campaignName,
      recipient,
      sender,
      message
    });
  };

  return (
    <div className="messages-page">
      <div className="create-campaign">
        <h2>Create Campaign</h2>

        <div className="campaign-form">
          <div className="form-group">
            <label>Campaign Name</label>
            <input 
              type="text" 
              value={campaignName} 
              onChange={(e) => setCampaignName(e.target.value)} 
              placeholder="Enter campaign name" 
            />
          </div>

          <div className="form-group">
            <label>Select Recipient</label>
            <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
              <option value="">Select a recipient</option>
              <option value="test-export-1">Test Export - 1</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label>From</label>
            <select value={sender} onChange={(e) => setSender(e.target.value)}>
              <option value="">Select a sender</option>
              <option value="default">Default Sender</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label>Create Message</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Type your message here" 
            />
          </div>

          <button onClick={handleSubmit}>Submit For Approval</button>
        </div>
      </div>

      <div className="preview-section">
        <h3>Preview</h3>
        <p><strong>Subject:</strong> {campaignName}</p>
        <p><strong>To:</strong> {recipient}</p>
        <p><strong>Total Contacts:</strong> 1</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
};

export default Messages;
