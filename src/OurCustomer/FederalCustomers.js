import React, { useEffect } from "react";
import "./FederalCustomers.scss";

export default function FederalCustomers() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".federal-customers img, .federal-customers .content"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
      <h1 className="hero-title">Our Customers</h1>
      <nav className="hero-breadcrumb" aria-label="Breadcrumb">
        HOME <span className="sep">›</span> Our Customers
      </nav>
    </div>
  </header>
    <section className="federal-customers">
      <div className="container">
        {/* Left Image */}
        <div className="image-box">
          <img
            src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Blank-3-Grids-Collage-1.png"
            alt="Federal Landmark"
          />
        </div>

        {/* Right Content */}
        <div className="content">
          <a href="#" className="discover-link">
            Discover More Now
          </a>
          <h2>Federal and State Customers</h2>
          <p>
            We serve the government markets providing products and services to
            lead the federal agencies to next generation technologies. Our focus
            remains to establish stronger relationship with our supply chain
            which primarily includes industry’s leading technology manufacturers
            and distributors who allow our customers the privilege to procure
            first-class IT Hardware, Software and Solutions timely.
          </p>
          <p>
            We have over 30 years of combined experience in the technology space
            to offer turnkey solutions and produce customer-centric results. See
            what our customers have to say...
          </p>

          <ul className="features">
            <li>
              <span className="icon">➜</span> Address a variety of application
              needs.
            </li>
            <li>
              <span className="icon">➜</span> Support development approaches and
              devices.
            </li>
            <li>
              <span className="icon">➜</span> Improves reliability with
              information backed up.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}