// import React from "react";
// import "./Footer.scss";
// import logo from "../assets/logo.png"; // Replace with MES logo if available

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo & About */}
//         <div className="footer-col">
//           <div className="footer-logo">
//             <img src={logo} alt="Modern Enterprise Solutions Logo" />
//           </div>
//           <p>
//             Modern Enterprise Solutions LLC is committed to providing premium IT solutions and services to our federal clientele, ensuring quality, reliability, and value.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="footer-col">
//           <h3 className="footer-title">Links</h3>
//           <ul className="footer-list">
//             <li>Home</li>
//             <li>About</li>
//             <li>Our Customers</li>
          
//             <li>Solutions</li>
//             <li>Partners</li>
           
//             <li>Contact</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="footer-col">
//           <h3 className="footer-title">Newsletter</h3>
//           <p>Signup for our latest news & articles. We won't give you spam mail.</p>
//           <form className="newsletter-form">
//             <input type="email" placeholder="Enter your email" required />
//             <button type="submit">→</button>
//           </form>
//           <div className="checkbox-container">
//             <input type="checkbox" id="terms" />
//             <label htmlFor="terms">I agree to all terms and policies of MES</label>
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="footer-col">
//           <h3 className="footer-title">Contact</h3>
//           <ul className="footer-contact">
//             <li>Modern Enterprise Solutions LLC</li>
           
//             <li>Email: Gov-Buy@modern-sol.com</li>
          
//             <li>Website: www.Modern-sol.com</li>
          
            
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>Copyright © 2020-2025 Modern Enterprise Solutions LLC. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.png"; // MES logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="Modern Enterprise Solutions Logo" />
          </div>
          <p>
            Modern Enterprise Solutions LLC is committed to providing premium IT
            solutions and services to our federal clientele, ensuring quality,
            reliability, and value.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/customers">Our Customers</a>
            </li>
            <li>
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3 className="footer-title">Newsletter</h3>
          <p>
            Signup for our latest news & articles. We won't give you spam mail.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">→</button>
          </form>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to all terms and policies of MES
            </label>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-contact">
            <li>Modern Enterprise Solutions LLC</li>
            <li>
              Email:{" "}
              <a href="mailto:Gov-Buy@modern-sol.com">
                Gov-Buy@modern-sol.com
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://www.modern-sol.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.Modern-sol.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright © 2020-2025 Modern Enterprise Solutions LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
