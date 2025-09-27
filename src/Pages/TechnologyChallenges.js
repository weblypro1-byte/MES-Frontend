import React from "react";
import "./TechnologyChallenges.scss";
import { FaGlobe, FaRobot, FaCloud, FaLightbulb, FaBrain, FaLeaf } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaGlobe />, title: "Information security" },
  { id: 2, icon: <FaRobot />, title: "Automation and robotics" },
  { id: 3, icon: <FaCloud />, title: "Cloud computing" },
  { id: 4, icon: <FaLightbulb />, title: "Integrations and upgrades" },
  { id: 5, icon: <FaBrain />, title: "Artificial intelligence and machine learning" },
  { id: 6, icon: <FaLeaf />, title: "Demand For More Sustainable Technology" },
];

export default function TechnologyChallenges() {
  return (
    <>
    <section className="tech-challenges">
      <div className="overlay"></div>
      <div className="container">
        <div className="content">
          <h2 className="title">
            Help you Overcome Your <br /> Technology Challenges
          </h2>

          <div className="features-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className="icon">{feature.icon}</div>
                <p>{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
    <section className="map-wrapper">
    <div className="map-container">
      <iframe
        title="company-location"
        src="https://maps.google.com/maps?q=618%20S%20Broad%20St%20Lansdale%20PA&t=m&z=14&output=embed"
        loading="lazy"
      />
    </div>
  </section>
  </>
    
  );
}