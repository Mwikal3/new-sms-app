
import React, { useState } from "react";
import "../styles/create-template.css";

const CreateTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [message, setMessage] = useState("");

  // Initialize state for templates
  const [templates, setTemplates] = useState([
    { name: "Welcome Template", body: "Hello, welcome to our service!" },
    { name: "Thank You Template", body: "Thank you for using our product!" },
  ]);

  const handleAddTemplate = () => {
    // Logic to handle adding the template
    const newTemplate = { name: templateName, body: message };
    setTemplates([...templates, newTemplate]); // Update the templates array with the new one
    setShowModal(false);
    setTemplateName("");
    setMessage("");
  };

  const handleCancel = () => {
    // Logic for canceling the template creation
    setShowModal(false);
  };

  return (
    <div className="create-template-container">

      <h2>Create Template</h2>
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Create Template</span>
      </div>

      <div className="template-list">
      <button
        className="add-template-button"
        onClick={() => setShowModal(true)}
      >
        + Add New Template
      </button>
      
        <h3>Templates</h3>
        <table className="template-table">
          <thead>
            <tr>
              <th>Template Name</th>
              <th>Template Body</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr key={index}>
                <td>{template.name}</td>
                <td>{template.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add New Template</h3>
              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
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
