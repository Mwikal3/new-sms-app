import React, { useState } from "react";
import '../styles/batched-reports.css'; // Importing the CSS styles

const CustomReports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRefresh = () => {
    // Logic for refreshing the report data
    console.log("Refreshing report data...");
  };

  return (
    <div className="custom-reports-container">
      <div className="reports-header">
        <h2>Reports &gt; Custom SMS</h2>
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

        <div className="status-filter">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="sent">Sent</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by recipient or message"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>

      <table className="report-table">
        <thead>
          <tr>
            <th>Date Sent</th>
            <th>Recipient Number</th>
            <th>Phone Number</th>
            <th>Message Content</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows  */}
          <tr>
            <td>No Data Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomReports;
