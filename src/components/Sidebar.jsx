import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaChartBar,
  FaUser,
  FaChartPie,
  FaTachometerAlt,
  FaLayerGroup,
  FaAddressBook,
  FaFileAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaRegFileAlt, 
  FaTools,
  FaClipboardList, 
  FaExchangeAlt,

} from 'react-icons/fa';
import '../styles/sidebar.css'; // Ensure this points to your actual CSS file
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
          <li>
            <Link to="/">
              <div className="nav-box">
                <FaTachometerAlt className="icon" /> Dashboard
              </div>
            </Link>
          </li>

          {/* Messages Section */}
          <li>
            <div className="nav-box" onClick={() => setIsMessagesOpen(!isMessagesOpen)}>
              <FaEnvelope className="icon" /> Messages {isMessagesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isMessagesOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/create-campaign">
                    <FaEnvelope className="icon" /> Create
                  </Link>
                </li>
                <li>
                  <Link to="/Approvals">
                  <FaCheckCircle className="icon"/>Approvals</Link>
                </li>
                <li>
                  <Link to="/create-template">
                  <FaRegFileAlt className="icon"/>Templates</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Batches Section */}
          <li>
            <div className="nav-box" onClick={() => setIsBatchesOpen(!isBatchesOpen)}>
              <FaLayerGroup className="icon" /> Batches {isBatchesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isBatchesOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/batch-list">
                    <FaChartBar className="icon" /> List
                  </Link>
                </li>
                <li>
                  <Link to="/batch-approvals">
                  <FaCheckCircle className="icon"/>Approvals</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contacts Section */}
          <li>
            <div className="nav-box" onClick={() => setIsContactsOpen(!isContactsOpen)}>
              <FaAddressBook className="icon" /> Contacts {isContactsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isContactsOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/contacts">
                    <FaUser className="icon" /> List
                  </Link>
                </li>
                <li>
                  <Link to="/contacts/details">
                  <FaTools className="icon"/>Manage</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Reports Section */}
          <li>
            <div className="nav-box" onClick={() => setIsReportsOpen(!isReportsOpen)}>
              <FaFileAlt className="icon" /> Reports {isReportsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isReportsOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/custom-reports">
                    <FaChartPie className="icon" /> Custom
                  </Link>
                </li>
                <li>
                  <Link to="/batched-reports">
                  <FaClipboardList className="icon"/>Batched</Link>
                </li>
                <li>
                  <Link to="/transactional-reports">
                  <FaExchangeAlt className="icon"/>Transactional</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Scheduling Section */}
          <li>
            <div className="nav-box">
              <FaCalendarAlt className="icon" /> Scheduling
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
