import React, { useState } from "react";
import "../styles/Express-template.css"; 

const ExpressTemplate = ({ onClose }) => {
  const [messageType, setMessageType] = useState("");
  const [senderId, setSenderId] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add submission logic 
    console.log({ messageType, senderId, message, recipient });
    // Reset the form after submission
    setMessageType("");
    setSenderId("");
    setMessage("");
    setRecipient("");
    onClose(); // Close the form after submission
  };

  return (
    <div className="batch-form-modal">
      <div className="batch-form">
        <div className="batch-form-header">
          <h3>Express Message</h3>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="messageType">Type</label>
            <input
              type="text"
              id="messageType"
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="form-group">
            <label htmlFor="senderId">Select Sender ID</label>
            <input
              type="text"
              id="senderId"
              value={senderId}
              onChange={(e) => setSenderId(e.target.value)}
              placeholder="Sender ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="recipient">Recipient</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="send-btn">
              Send
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpressTemplate;