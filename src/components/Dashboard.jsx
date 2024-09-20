import React from 'react';
import Statistics from './Statistics';
import LastMessages from './LastMessages';
import '../styles/dashboard.css';
import { Link } from 'react-router-dom';


const Dashboard = () => {



  return (
    <div className="dashboard">
      <div className="actions">
      <Link to="/">
        <button >Dashboard</button>
        </Link>
        <Link to="/create-campaign">
        <button >Create Campaign</button>
        </Link>
        <Link to="/Approvals">
        <button>Pending Approvals</button>
        </Link>
        <Link to="/schedule">
        <button>Scheduled</button>
        </Link>
        <Link to="contacts">
        <button>Contacts</button>
        </Link>
      </div>

      <div className="stats-section">
        <Statistics />
        {/* <KPI /> */}
      </div>

      <LastMessages />
    </div>
  );
};

export default Dashboard;
