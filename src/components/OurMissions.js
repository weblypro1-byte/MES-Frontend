
import React from 'react';
import "./OurMission.scss"
import Image from '../assets/HomeImage/MISSIONS.png'
const OurMissions = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="left-section">
          <div className="image-placeholder">
            {/* Replace with your actual image */}
           
<div className="left-section">
  <img 
    src={Image}
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
                  <h5>Mission</h5>
                  <p className="quote">"Timely bring the latest in technology and innovation to our customers so they remain ahead of the game"</p>
                </div>
                
                <div className="vision">
                  <h5>Vision</h5>
                  <p className="quote">"To ensure we continue to fulfil our mission and strategically streamline our processes to achieve increased efficiency"</p>
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