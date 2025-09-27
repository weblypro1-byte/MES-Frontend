import React from "react";
import "./CompanyHistory.scss";

export default function CompanyHistory() {
  return (
    <>
    <header
    className="contact-hero"
    style={{
      backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
    }}
    role="banner"
  >
    <div className="hero-inner">
      <h1 className="hero-title">About us</h1>
      <nav className="hero-breadcrumb" aria-label="Breadcrumb">
        HOME <span className="sep">›</span> About us
      </nav>
    </div>
  </header>

    <section id="company-history">
      <div className="container">
        {/* Left Image */}
        <div className="image-content">
          <img
            src="https://cirrussystemsus.com/wp-content/uploads/2022/03/left-about-company-aboutUs.jpg" 
            alt="Company History"
          />
        </div>

        {/* Right Text */}
        <div className="text-content">
          <span className="subtitle">We are MODERN ENTERPRISE SOLUTIONS 
.</span>
          <h2>Company History</h2>
          <p>
            MES Consulting LLC is a small business registered 2009 in Pennsylvania 
            under Minority Owned Small Disadvantaged Business category. MES commenced 
            as Real Estate and in 2020 established a business unit <strong>‘MODERN ENTERPRISE SOLUTIONS’</strong> 
            to become a value-added reseller providing hardware, software & IT solutions. 
            Our customers and channel partners now know us as MES Consulting LLC 
            (<em>doing business as MES Systems</em>).
          </p>
        </div>
      </div>
    </section>
    </>
  );
}