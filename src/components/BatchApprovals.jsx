import React, { useState } from "react";
import "../styles/batch-approvals.css"; // Importing the CSS styles

const Approvals = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleApprove = () => {
    // Logic for approving the selected rows
    console.log("Approved selected requests");
  };

  const handleReject = () => {
    // Logic for rejecting the selected rows
    console.log("Rejected selected requests");
  };

  return (
    <div className="approvals-container">
      <div className="approvals-header">
        <h2>Batch Approvals</h2>
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Approvals</span>
        </div>
      </div>
      <div className="filters-container">
        <div className="date-filter">
          <label htmlFor="start-date">Select from date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="date-filter">
          <label htmlFor="end-date">Select to date</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by SMS description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="approve-button" onClick={handleApprove}>
            Approve
          </button>
          <button className="reject-button" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>

      <table className="approvals-table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>SMS Description</th>
            <th>Created By</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows  */}
          <tr>
            <td><input type="checkbox" /></td>
            <td>1</td>
            <td>Test SMS</td>
            <td>John Doe</td>
            <td>2024-09-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;
