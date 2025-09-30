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
        title="MES-Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3251.7935379253668!2d-119.1407434!3d35.4103678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea44a8747ab207%3A0xc51921a28807c8e!2s12420%20Colorado%20Ave%2C%20Bakersfield%2C%20CA%2093312%2C%20USA!5e0!3m2!1sen!2s!4v1759229424459!5m2!1sen!2s"
        loading="lazy"
      />

    </div>
  </section>
  </>
    
  );
}