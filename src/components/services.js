
import React, { useState } from "react";
import "./Services.scss";



const services = [
  { 
    title: "Channel Partner", 
    description: "MES offers latest in technology, reduced turn around time and improve procedd efficiency",
    icon: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695555/search_qeagdo.png"
  },
  { 
    title: "Technology", 
    description: "Cutting-edge technology services designed to improve efficiency, enhance security, and drive innovation across your organization. We stay ahead of tech trends so you don't have to.",
    icon: 'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695554/CyberSecurity_wtkks4.png'
  },
  { 
    title: "Infrastructure", 
    description: "Robust infrastructure solutions that form the backbone of modern businesses. From cloud implementations to on-premise setups, we build foundations that scale with your growth.",
    icon: 'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695555/development_dtv5sz.png'
  },
  { 
    title: "Software Development", 
    description: "Custom software solutions engineered to meet your unique business needs. Our agile development process ensures we deliver exactly what you need, when you need it.",
    icon: 'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695555/premium-quality_jskdk0.png'
  },
  { 
    title: "Quality Assurance", 
    description: "Rigorous quality standards applied to all our services and solutions. We believe excellence isn't an accident but the result of intentional processes and attention to detail.",
    icon: 'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695555/technology_ldjy2d.png'
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">
        MODERN ENTERPRISE SOLUTIONS LLC
        </h2>
        <h6 className="subtitle">
          Real Time Dealing in all Professional IT Solutions &amp; Services
        </h6>

        <div className="cards-container">
          <div className="cards">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Hover background image when active */}
                {activeIndex === index && (
                  <img src={'https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/Hover_zl43tv.png'} alt="hover effect" className="hover-img" />
                )}

                <div className="icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="card-content">
          <div className="content-inner">
            <h2>{services[activeIndex].title}</h2>
            <p>{services[activeIndex].description}</p>
       
          </div>
        </div>
      </div>
    </section>
  );
}