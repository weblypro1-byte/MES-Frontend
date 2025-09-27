import React, { useState } from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Supply Systems Analyst",
    department: "Department of Army",
    office: "Tobyhanna Army Depot",
    text: `“Thank you for the detailed update, Zack! Greatly appreciate the communication on the backend of this, as it looks like we’ll be able to just make our Delivery Schedule now!”`,
    initial: "L",
    seal: "https://staging.cirrussystemsus.com/wp-content/uploads/2023/01/First-Second-13.png",
  },
  {
    id: 2,
    name: "Contract Specialist",
    department: "Department of Navy",
    office: "NAVSUP Fleet Logistics Center San Diego (FLCSD)",
text: `“I want to express my sincere appreciation for your dedication and teamwork. From start to finish, you handled a very complex SAP procurement with professionalism and attention to detail. The clarity of your documentation and your willingness to collaborate made a significant impact. Thanks to your effort, we successfully supported the Government’s mission while overcoming challenging requirements and multiple shipping locations.”`
    ,
    initial: "S",
    seal: "https://staging.cirrussystemsus.com/wp-content/uploads/2023/01/First-Second-5.png",
  },
  {
    id: 3,
    name: "Assistant Field Manager - Resources",
    department: "Department of Interior",
    office: "BLM Colorado River Valley Field Office",
    text: `“Jerry, We had a very positive experience working with FSR Consulting LLC. Their communication was excellent, the product is exactly what we ordered, and the shipping process went well...”`,
    initial: "H",
    seal: "https://staging.cirrussystemsus.com/wp-content/uploads/2023/01/First-Second-1.png",
  },
];

const Testimonials = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top;  // mouse Y inside card

    const rotateX = ((y / rect.height) - 0.5) * 15; // max 15deg tilt
    const rotateY = ((x / rect.width) - 0.5) * 15;

    if (id === 2) {
      // apply tilt only to middle card
      setStyle({
        transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  };

  return (
    <div className="testimonials">
      {testimonials.map((t, i) => (
        <div
          key={t.id}
          className={`testimonial-card ${i === 1 ? "highlight" : ""}`}
          style={i === 1 ? style : {}}
          onMouseMove={(e) => handleMouseMove(e, t.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="seal-wrapper">
            <img src={t.seal} alt={`${t.department} seal`} className="seal" />
            <span className="initial">{t.initial}</span>
          </div>

          <div className="content">
            <h3>{t.name}</h3>
            <h4>{t.department}</h4>
            <p className="office">{t.office}</p>
            <p className="text">{t.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;