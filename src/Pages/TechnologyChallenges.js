import React from "react";
import "./TechnologyChallenges.scss";
import { Globe, Monitor, Lightbulb, Bot, Brain, Cpu } from "lucide-react"; 

export default function TechnologyChallenges() {
  return (
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
  );
}