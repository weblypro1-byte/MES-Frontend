
import React from 'react';
import "./OurMission.scss"

const OurMissions = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="left-section">
          <div className="image-placeholder">
            {/* Replace with your actual image */}
           
<div className="left-section">
  <img 
    src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759331094/MISSIONS_acq5om.png"
    alt="About Us" 
    className="about-image"
  />
</div>
          </div>
        </div>
        
        <div className="right-section">
          <div className="content">
          
            
            <div className="section">
              <h3 className="section-title">Get to Know Us</h3>
              <h4 className="subsection-title">Our Mission, Our Vision</h4>
              
              <div className="mission-vision">
                <div className="mission">
                  <h5>Visions</h5>
                  <p className="quote">"To be a trusted leader in IT solutions by continually enhancing efficiency, streamlining processes, and ensuring our customers’ long-term success"</p>
                </div>
                
                <div className="vision">
                  <h5>Missions</h5>
                  <p className="quote">"To deliver the latest technology and innovative solutions on time, empowering our customers to stay ahead in a fast-changing digital world"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissions;