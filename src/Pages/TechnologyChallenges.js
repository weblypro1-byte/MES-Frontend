import React from "react";
import "./TechnologyChallenges.scss";
import { Globe, Monitor, Lightbulb, Bot, Brain, Cpu } from "lucide-react"; 

export default function TechnologyChallenges() {
  return (
    <>
    <section id="technology-challenges">
      <div className="overlay"></div>
      <div className="purple-top"></div>
      <div className="purple-bottom"></div>

      <div className="container">
        {/* Left Section */}
        <div className="left-content">
          <h2>Help you Overcome Your Technology Challenges</h2>
        </div>

        {/* Right Section */}
        <div className="right-content">
          <div className="card"><Globe className="icon" /><p>Information security</p></div>
          <div className="card"><Monitor className="icon" /><p>Cloud computing</p></div>
          <div className="card"><Lightbulb className="icon" /><p>Integrations and upgrades</p></div>
          <div className="card"><Bot className="icon" /><p>Automation and robotics</p></div>
          <div className="card"><Cpu className="icon" /><p>Artificial intelligence and machine learning</p></div>
          <div className="card"><Brain className="icon" /><p>Demand For More Sustainable Technology</p></div>
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
   
