// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CreateCampaign from './components/CreateCampaign';  // New page/component
import Messages from './components/Messages';  // New page/component
import ContactManagement from './components/ContactManagement';
import ContactDetails from './components/ContactDetails';
import CustomReports from './components/CustomReports';
import Approvals from './components/Approvals';
import CreateTemplate from './components/CreateTemplate';
import BatchManagement from './components/BatchManagement';

// styles
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
      <script src="http://localhost:8097"></script>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          
          {/* Main content will switch based on the route */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/contacts" element={<ContactManagement />} />
            <Route path="/contacts/details" element={<ContactDetails />} />
            <Route path="/custom-reports" element={<CustomReports />} />
         
            <Route path="/Approvals" element={<Approvals />} />
            <Route path="/create-template" element={<CreateTemplate />} />
            <Route path="/batch-management" element={<BatchManagement />} />

            {/* <Route path="/batched-reports" element={<BatchedReports />} />
            <Route path="/transactional-reports" element={<TranasactionReports />} /> */}





            {/* Add other routes as necessary */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;