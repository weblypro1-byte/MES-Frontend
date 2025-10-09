import React, { useState } from "react";
import "./Footer.scss";
import logo from "../assets/logo.png";
import { message } from "antd"; // Ant Design toast

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  // Newsletter submit handler - UPDATED WITH CENTERED TOASTS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      message.warning({
        content: 'You must agree to the terms before Submitting!',
        duration: 3,
        style: { 
          marginTop: '20vh',
          textAlign: 'center'
        }
      });
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error({
        content: 'Please enter a valid email address.',
        duration: 3,
        style: { 
          marginTop: '20vh',
          textAlign: 'center'
        }
      });
      return;
    }

    try {
      const response = await fetch("https://mes-backend-psi.vercel.app/api/footer/newsletter ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        message.success({
          content: 'Thanks for Submitting!',
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
        setEmail("");
        setAgree(false);
      } else {
        message.error({
          content: `${data.message || 'Submissions failed, please try again.'}`,
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
      }
    } catch (err) {
      console.error("Submissions error:", err);
      message.error({
        content: 'Server error. Please try later.',
        duration: 5,
        style: { 
          marginTop: '20vh',
          textAlign: 'center'
        }
      });
    }
  };

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
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/OurCustomer">Our Customers</a></li>
            <li><a href="/product">Products & Services</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3 className="footer-title">Newsletter</h3>
          <p>
            Signup for our latest news & articles. We won't give you spam mail.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">→</button>
          </form>
          <label className="newsletter-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />{" "}
            I agree to receive emails
          </label>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-contact">
            <li>Modern Enterprise Solutions LLC</li>
            <li>
              Email:{" "}
              <a href="mailto:Sales@modern-sol.com">
              Sales@modern-sol.com
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
