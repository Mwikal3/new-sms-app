

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaEnvelope, FaChartBar, FaUser, FaChartPie } from 'react-icons/fa';
import '../styles/sidebar.css';  // Ensure this points to your actual CSS file
import logo from '../assets/logo.png';

const Sidebar = () => {
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isBatchesOpen, setIsBatchesOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <ul>
          <li><Link to="/"><div className='nav-box'>Dashboard</div></Link></li>

          {/* Messages Section */}
          <li>
            <div className='nav-box' onClick={() => setIsMessagesOpen(!isMessagesOpen)}>
              Messages {isMessagesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isMessagesOpen && (
              <ul className="dropdown">
                <li><Link to="/create-campaign">Create <FaEnvelope /></Link></li>
                <li><Link to="/Approvals">Approvals</Link></li>
                <li><Link to="/sent-messages">Sent</Link></li>
              </ul>
            )}
          </li>

          {/* Batches Section */}
          <li>
            <div className='nav-box' onClick={() => setIsBatchesOpen(!isBatchesOpen)}>
              Batches {isBatchesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isBatchesOpen && (
              <ul className="dropdown">
                <li><Link to="/batch-management">Manage <FaChartBar /></Link></li>
                <li><Link to="/batch-monitor">Monitor</Link></li>
              </ul>
            )}
          </li>

          {/* Contacts Section */}
          <li>
            <div className='nav-box' onClick={() => setIsContactsOpen(!isContactsOpen)}>
              Contacts {isContactsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isContactsOpen && (
              <ul className="dropdown">
                <li><Link to="/contacts">List <FaUser /></Link></li>
                <li><Link to="/contacts/details">Manage</Link></li>
              </ul>
            )}
          </li>

          {/* Reports Section */}
          <li>
            <div className='nav-box' onClick={() => setIsReportsOpen(!isReportsOpen)}>
              Reports {isReportsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isReportsOpen && (
              <ul className="dropdown">
                <li><Link to="/custom-reports">Custom <FaChartPie /></Link></li>
                <li><Link to="/batched-reports">Batched</Link></li>
                <li><Link to="/transactional-reports">Transactional</Link></li>
              </ul>
            )}
          </li>
          
          <li><div className='nav-box'>Scheduling</div></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
