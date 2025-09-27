import React from "react";
import "./KeyDifferentiators.scss";
import { Cog } from "lucide-react"; // icon

const KeyDifferentiators = () => {
  return (
    <section className="key-differentiators">
      <div className="container">
        {/* Left Side - Company Info */}
        <div className="kd-left">
          <p className="kd-subtitle">Company Profile</p>
          <h2 className="kd-title">
            Modern Enterprise Solutions LLC <span>DETAILS</span>
          </h2>
          <ul className="kd-list">
            <li>12420 Colorado Ave, Bakersfield CA 93312</li>
            <li>D-U-N-S Number: 020725642</li>
            <li>NAICS Codes: 541519, 423430, 541512, 541511, 561621</li>
            <li>CAGE Code: 9B3P3</li>
            <li>SAM.Gov Contract Number: CACDBPJZYVG2</li>
            <li>Email: Gov-Buy@modern-sol.com</li>
            <li>Website: www.Modern-sol.com</li>
            <li>
              POC, Phone, Fed Tax ID, Credit Card, Terms, Discount: Will be
              added later
            </li>
          </ul>
        </div>

        {/* Right Side - Image + Icon */}
        <div className="kd-right">
          <div className="kd-icon">
            <Cog size={40} color="#fff" />
          </div>
          <img
            src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695746/pexels-photo-3184339_sogo3u.jpg"
            alt="Modern Enterprise Solutions Team"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
