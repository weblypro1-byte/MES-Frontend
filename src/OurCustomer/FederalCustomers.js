import React, { useEffect } from "react";
import "./FederalCustomers.scss";

export default function FederalCustomers() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".federal-customers img, .federal-customers .content, .federal-customers .features li"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // stagger animation for list items
            if (entry.target.tagName === "LI") {
              entry.target.style.animationDelay = `${0.2 * index}s`;
            }
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  

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
      <h1 className="hero-title">OUR CUSTOMER</h1>
      
    </div>
  </header>
    <section className="federal-customers">
      <div className="container">
        {/* Left Image */}
       

        {/* Right Content */}
        <div className="content">
          <a href="#" className="discover-link">
            Discover More Now
          </a>
          <h2>Federal and State Customers</h2>
          <p>
          At MES, we serve the U.S. Government market with a focus on delivering next-generation technologies. 
          </p>
          
          

          <ul className="features">
            <li>
              <span className="icon">➜</span> Provide federal agencies with cutting-edge IT hardware, software, and solutions. 
            </li>
            <li>
              <span className="icon">➜</span> Partner with leading technology manufacturers and distributors to ensure timely delivery of first-class products. 
            </li>
            <li>
              <span className="icon">➜</span>Offer over 20 years of combined expertise in technology, procurement, and federal contracting. 
            </li>
            <li>
              <span className="icon">➜</span> Deliver turnkey solutions designed to meet diverse application needs. 
              </li>
              <li>  <span className="icon">➜</span> Support a wide range of development approaches, platforms, and devices.  </li>
          
            <li>
              <span className="icon">➜</span> Partner with leading technology manufacturers and distributors to ensure timely delivery of first-class products. 
            </li>
            <li>
              <span className="icon">➜</span>Enhance reliability through secure, backed-up information management.  
            </li> 
          
            <li>
              <span className="icon">➜</span> Prioritize customer satisfaction with results-driven, customer-centric services.  
            </li>
      
          
          </ul>
        </div>
        <div className="image-box">
          <img
            src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Blank-3-Grids-Collage-1.png"
            alt="Federal Landmark"
          />
        </div>
      </div>
    </section>
    </>
  );
}