import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./Footer.scss";
import logowhite from './logowhite.png'; // Your white logo

const Footer = () => {
  return (
    <div className="page-container">
     
      
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section - Logo & About */}
          <div className="footer-section about">
            <div className="logo-content">
              <div className="logo">
                <img src={logowhite} alt="EDIFY Logo" className="logo-img" />
                <div className="logo-text">
                  
                </div>
              </div>
              <p className="tagline">
              Unlock your true academic potential and explore boundless opportunities abroad. Connect with us today to craft the perfect international study pathway.
              </p>
            </div>
            
            <div className="social-icons">
              <Link to="https://www.facebook.com/profile.php?id=61573866037648" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaXTwitter />
              </Link>
              <Link to="https://www.instagram.com/konnectstudyadvisor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </Link>
              <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><Link to="/blogs" className="footer-link">Blogs <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/courses" className="footer-link">Courses <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/services" className="footer-link">Services <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/partners" className="footer-link">Partners <FaArrowRight className="link-arrow" /></Link></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="footer-section explore">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/news" className="footer-link">News & Events <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/teams" className="footer-link">Teams <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/about" className="footer-link">About Us <FaArrowRight className="link-arrow" /></Link></li>
              <li><Link to="/Form" className="footer-link">Contact Us <FaArrowRight className="link-arrow" /></Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-section information">
            <h3>Information</h3>
            <div className="contact-item">
              <div className="icon-circle">
                <FaPhoneAlt className="icon" /> 
              </div>
              <span>+92 321 9666612</span>
            </div>
            <div className="contact-item">
              <div className="icon-circle">
                <FaEnvelope className="icon" /> 
              </div>
              <Link to="Konnectstudyadvisor@gmail.com">Konnectstudyadvisor@gmail.com</Link>
            </div>
            <div className="contact-item">
              <div className="icon-circle">
                <FaMapMarkerAlt className="icon" /> 
              </div>
              <span>Office #3 2nd Floor Legacy Tower Kohinoor, Faisalabad</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Konnect Study Advisor of Companies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;