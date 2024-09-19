import React from 'react';
import '../styles/last-messages.css';

const LastMessages = () => {
  return (
    <div className="last-messages">
      <h3>Last Messages Sent</h3>
      <div className="date-filters">
        <input type="date" placeholder="From date" />
        <input type="date" placeholder="To date" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>SMS</th>
            <th>Group</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-09-08</td>
            <td>Test message</td>
            <td>Group 1</td>
            <td>Delivered</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default LastMessages;
