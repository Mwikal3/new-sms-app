// CreateCampaign.jsx
import React from 'react';
import '../styles/create-campaign.css';

const CreateCampaign = () => {
  return (
    <div className="create-campaign-container">

      {/* Main Content */}
      <div className="main-content">
       

        <div className="content">
          {/* <Link to="/"><h3>Home</h3></Link> */}
          <h2>Create Campaign</h2>
          <div className="campaign-form">
            <div className="form-left">
              <div className="campaign-name">
                <label htmlFor="campaignName">Campaign Name</label>
                <input type="text" id="campaignName" />
                <button className="save-draft-btn">Save Draft</button>
              </div>

              <div className="recipient-section">
                <label htmlFor="recipient">Select Recipient</label>
                <select id="recipient">
                  <option value="default">Choose recipient</option>
                  {/* Add options dynamically */}
                </select>
              </div>

              <div className="from-section">
                <label htmlFor="from">From</label>
                <select id="from">
                  <option value="default">Choose sender</option>
                  {/* Add options dynamically */}
                </select>
              </div>

              <div className="message-section">
                <label>Create Message</label>
                <div className="message-buttons">
                  <button>Placeholder</button>
                  <button>Template</button>
                </div>
              </div>
            </div>

            <div className="form-right">
              <h3>Preview</h3>
              <p><strong>Subject:</strong> </p>
              <p><strong>To:</strong> [Test Export - 1]</p>
              <p><strong>Total Contacts:</strong> 1</p>
              <p><strong>Message:</strong></p>
              <button className="submit-approval-btn">Submit for Approval</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
