import React, { useState } from "react";
import "../styles/CreateTemplate.css";

const CreateTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTemplate = () => {
    // Logic to handle adding the template
    console.log("Template Added:", { templateName, message });
    setShowModal(false);
  };

  const handleCancel = () => {
    // Logic for canceling the template creation
    setShowModal(false);
  };

  return (
    <div className="create-template-container">
      <h2>Create Campaign</h2>
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Create Campaign</span>
      </div>

      <button
        className="add-template-button"
        onClick={() => setShowModal(true)}
      >
        + Add New Template
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add New Template</h3>
              <button className="close-button" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <label>Template Name</label>
              <input
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="Enter template name"
              />

              <label>Create Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
                rows="4"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button className="add-button" onClick={handleAddTemplate}>
                Add
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTemplate;
