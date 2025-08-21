
// import React from "react";
// import "./form.scss";

// const ContactForm = () => {
//   return (
//     <div className="form-wrapper">
//       {/* Left Side Image */}
//       <div className="form-image">
//         <img
//           src="https://tu-dresden.de/studium/vor-dem-studium/ressourcen/bilder/zentrale-studienberatung/studieren-ohne-abitur/@@images/22b72279-9f90-4ac3-a4f6-236d15ca76f2.jpeg"
//           alt="Customer Support"
//         />
//       </div>

//       {/* Right Side Form */}
//       <div className="form-container">
//         <h2 className="form-title">
//           SHARE YOUR DETAILS
//           <div className="line"></div>
//           <span>– Our Experts Will Contact You</span>
//         </h2>
      
          
          
        
//         <form>
//           <div className="form-row">
//             <input type="text" placeholder="First Name" required />
//             <input type="text" placeholder="Last Name" required />
//           </div>

//           <div className="form-row">
//             <input type="email" placeholder="Email Address" required />
//             <input type="tel" placeholder="Phone Number" required />
//           </div>

//           <div className="form-row">
//             <select required>
//               <option value="">Preferred Study Destination</option>
//               <option value="usa">USA</option>
//               <option value="uk">UK</option>
//               <option value="australia">Australia</option>
//             </select>
//             <select required>
//               <option value="">Nearest Branch</option>
//               <option value="ny">New York</option>
//               <option value="ldn">London</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <select required>
//               <option value="">Mode of Counseling</option>
//               <option value="online">Online</option>
//               <option value="offline">Offline</option>
//             </select>
//             <select required>
//               <option value="">Preferred Study Level</option>
//               <option value="ug">Undergraduate</option>
//               <option value="pg">Postgraduate</option>
//             </select>
//           </div>

//           <button type="submit" className="submit-btn">
//             SUBMIT
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState, useEffect } from "react";
import "./form.scss";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`form-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Left Side Image */}
      <div className="form-image">
        <img
          src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763527/22b72279-9f90-4ac3-a4f6-236d15ca76f2_ytkkgm.jpg"
          alt="Apply Form"
        />
      </div>

      {/* Right Side Form */}
      <div className="form-container">
        <h2 className="form-title">
          SHARE YOUR DETAILS
          <div className="line"></div>
          <span>Our Experts Will Contact You</span>
        </h2>
      
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" required className="form-input" />
            <input type="text" placeholder="Last Name" required className="form-input" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" required className="form-input" />
            <input type="tel" placeholder="Phone Number" required className="form-input" />
          </div>

          <div className="form-row">
            <select required className="form-input">
              <option value="">Preferred Study Destination</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
            </select>
            <select required className="form-input">
              <option value="">Nearest Branch</option>
              <option value="ny">New York</option>
              <option value="ldn">London</option>
            </select>
          </div>

          <div className="form-row">
            <select required className="form-input">
              <option value="">Mode of Counseling</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <select required className="form-input">
              <option value="">Preferred Study Level</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;