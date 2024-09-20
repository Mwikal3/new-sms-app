import React, { useState } from 'react'; // Import useState
import '../styles/create-campaign.css';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
import DatePicker from 'react-datepicker'; // Import React Datepicker

const CreateCampaign = () => {
  // Define state for startDate using useState
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="create-campaign-container">
      {/* Main Content */}
      <div className="main-content">
        <div className="content">
          <Link to="/"><h3>Home</h3></Link>
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
              <div className="schedule-section">
    <label>Schedule Campaign</label>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)} // Update the startDate
      showTimeSelect
      dateFormat="Pp"
      className="date-picker"
    />
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


// import React, { useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
// import DatePicker from 'react-datepicker'; // Import React Datepicker
// import '../styles/create-campaign.css';

// const CreateCampaign = () => {
//   const [showTemplates, setShowTemplates] = useState(false);
//   const [showPlaceholders, setShowPlaceholders] = useState(false);
//   const [message, setMessage] = useState('');
//   const [startDate, setStartDate] = useState(new Date());

//   const templates = ["Template 1", "Template 2", "Template 3"];
//   const placeholders = ["{FirstName}", "{LastName}", "{Company}"];

//   const handleTemplateClick = (template) => {
//     setMessage(template);
//   };

//   const handlePlaceholderClick = (placeholder) => {
//     setMessage(message + ' ' + placeholder);
//   };

//   return (
//     <div className="create-campaign-container">
//       <div className="main-content">
//         <div className="content">
//           <h2>Create Campaign</h2>
//           <div className="campaign-form">
//             <div className="form-left">
//               <div className="campaign-name">
//                 <label htmlFor="campaignName">Campaign Name</label>
//                 <input type="text" id="campaignName" />
//                 <button className="save-draft-btn">Save Draft</button>
//               </div>

//               <div className="recipient-section">
//                 <label htmlFor="recipient">Select Recipient</label>
//                 <select id="recipient">
//                   <option value="default">Choose recipient</option>
//                   {/* Add options dynamically */}
//                 </select>
//               </div>

//               <div className="from-section">
//                 <label htmlFor="from">From</label>
//                 <select id="from">
//                   <option value="default">Choose sender</option>
//                   {/* Add options dynamically */}
//                 </select>
//               </div>

//               <div className="message-section">
//                 <label>Create Message</label>
//                 <div className="message-buttons">
//                   <button onClick={() => setShowPlaceholders(!showPlaceholders)}>Placeholder</button>
//                   <button onClick={() => setShowTemplates(!showTemplates)}>Template</button>
//                 </div>

//                 {/* Show Placeholders */}
//                 {showPlaceholders && (
//                   <div className="placeholder-list">
//                     {placeholders.map((placeholder) => (
//                       <p
//                         key={placeholder}
//                         onClick={() => handlePlaceholderClick(placeholder)}
//                         className="clickable-option"
//                       >
//                         {placeholder}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 {/* Show Templates */}
//                 {showTemplates && (
//                   <div className="template-list">
//                     {templates.map((template) => (
//                       <p
//                         key={template}
//                         onClick={() => handleTemplateClick(template)}
//                         className="clickable-option"
//                       >
//                         {template}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 {/* Message Textarea */}
//                 <textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Type your message here..."
//                 />
//               </div>

//               {/* Datepicker for Scheduling */}
//               <div className="schedule-section">
//                 <label>Schedule Campaign</label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   showTimeSelect
//                   dateFormat="Pp"
//                   className="date-picker"
//                 />
//               </div>
//             </div>

//             <div className="form-right">
//               <h3>Preview</h3>
//               <p><strong>Subject:</strong> </p>
//               <p><strong>To:</strong> [Test Export - 1]</p>
//               <p><strong>Total Contacts:</strong> 1</p>
//               <p><strong>Message:</strong> {message}</p>
//               <button className="submit-approval-btn">Submit for Approval</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaign;

