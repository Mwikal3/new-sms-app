import React from 'react';
import KPI from './KPI';
import '../styles/statistics.css';

const Statistics = () => {
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <div className="charts">
        <div className="bar-chart">
          <h4>Messages Sent</h4>
          {/* Add your bar chart */}
          <div className="chart">[Bar Chart]</div>
        </div>

        <div className="pie-kpi-container">
          <div className="pie-chart">
            <h4>Delivery Status</h4>
            {/* Add your pie chart */}
            <div className="chart">[Pie Chart]</div>
          </div>

          <div className="kpi-wrapper">
            <KPI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
