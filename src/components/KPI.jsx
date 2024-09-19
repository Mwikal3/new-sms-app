import React from 'react';
import '../styles/kpi.css';

const KPI = () => {
  return (
    <div className="kpi-cards">
      <div className="kpi-card">Pending</div>
      <div className="kpi-card">Delivered</div>
      <div className="kpi-card">Failed</div>
      {/* Add more KPI cards as needed */}
    </div>
  );
};

export default KPI;