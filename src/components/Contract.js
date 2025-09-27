import React from 'react';
import './FederalContracts.scss';

const FederalContracts = () => {
  return (
    <div className="federal-contracts-page">
      {/* Page Banner */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">Contract</h1>
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            HOME <span className="sep">›</span> Federal Contract
          </nav>
        </div>
      </header>


      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <div className="contract-details">
              <h2>Contract Information</h2>
              <p><strong>Company:</strong><br />MODERN ENTERPRISE SOLUTIONS LLC</p>
              <p><strong>Address:</strong><br />12420 Colorado Ave, Bakersfield CA 93312</p>
              <p><strong>D-U-N-S Number:</strong><br />020725642</p>
              <p><strong>NAICS Codes:</strong><br />541519, 423430, 541512, 541511, 561621</p>
              <p><strong>CAGE Code:</strong><br />9B3P3</p>
              <p><strong>SAM.Gov Contract Number:</strong><br />CACDBPJZYVG2</p>
              <p><strong>POC:</strong><br />Will be added later</p>
              <p><strong>Email:</strong><br />Gov-Buy@modern-sol.com</p>
              <p><strong>Phone:</strong><br />Will be added later</p>
              <p><strong>Website:</strong><br />www.Modern-sol.com</p>
              <p><strong>Fed Tax ID:</strong><br />Will be added later</p>
              <p><strong>Credit Cards Accepted:</strong><br />Same as written</p>
              <p><strong>Terms:</strong><br />Same as written</p>
              <p><strong>Discounts:</strong><br />Same as written</p>
            </div>

            <div className="gsa-info">
              <img 
                src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png" 
                alt="MES Schedule 70" 
                className="gsa-logo"
              />
              <h2>MES IT Schedule 70:</h2>
              <p>IT Schedule 70 is the largest, most widely used acquisition vehicle in the federal government. Schedule 70 is an indefinite delivery/indefinite quantity (IDIQ) multiple award schedule, providing direct access to products and services from more than 5,000 certified industry partners.</p>
              <p>The GSA IT Schedule 70 program grants agencies direct access to commercial experts who can thoroughly address the needs of the government IT Community. Schedule 70 covers most general-purpose commercial IT hardware, software and services.</p>
              <p>Modern Enterprise Solutions LLC holds the Indefinite Delivery Indefinite Quantity (IDIQ) GSA Schedule 70 contract. We can provide government, state, and local agencies with supplies, services, and solutions from pre-approved vendors at the best value.</p>

              <div className="contract-specs">
                <p><strong>MAS Contract Number:</strong> # CACDBPJZYVG2</p>
                <p><strong>Contract Scope:</strong> Federal IT products and services</p>
                <p><strong>Period of Performance:</strong> TBD</p>
                <p><strong>Eligible Users:</strong> All federal, state and local governments</p>
                <p><strong>Delivery:</strong> Standard</p>
                <p><strong>Warranty:</strong> As per manufacturers’ standard commercial warranties</p>
                <p><strong>Business Type:</strong> Small Business</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FederalContracts;
