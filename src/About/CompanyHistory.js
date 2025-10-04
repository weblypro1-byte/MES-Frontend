import React from "react";
import "./CompanyHistory.scss";

export default function CompanyHistory() {
  return (

<>

<div className="contact-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">ABOUT US</h1>
         
        </div>
      </div>


    <section id="company-history">
      <div className="container">
        {/* Left Image */}
        <div className="image-content">
          <img
            src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330033/depositphotos_27554211-stock-photo-two-businesswomen-meeting-in-office_yfsrko.webp" 
            alt="Company History"
          />
        </div>

        {/* Right Text */}
        <div className="text-content">
          <span className="subtitle">We are MODERN ENTERPRISE SOLUTIONS 
.</span>
          <h2>Modern Enterprise Solutions LLC (MES) </h2>
          <p>
           


            Founded in 2020, Modern Enterprise Solutions LLC is a Women-Owned Small Business committed to delivering Value-Added IT solutions. We specialize in providing hardware, software, and technology services that empower organizations to achieve their missions with efficiency and innovation. Today, our customers and channel partners recognize us as MES, a trusted partner for end-to-end IT solutions across the United States. 
           
          </p>
        </div>
      </div>
    </section>
   </>
  );
}