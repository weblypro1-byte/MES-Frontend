
import React, { useState } from "react";
import "./solutions.scss";
import { message } from "antd"; // Add this import


const PartnersPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    orgSize: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("https://mes-backend-psi.vercel.app/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (data.success) {
        message.success({
          content: 'Partnership inquiry submitted successfully! Our team will contact you soon.',
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
        setFormData({
          firstName: "",
          lastName: "",
          organization: "",
          orgSize: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
      } else {
        message.error({
          content: `${data.message || 'Submission failed, please try again.'}`,
          duration: 5,
          style: { 
            marginTop: '20vh',
            textAlign: 'center'
          }
        });
      }
    } catch (err) {
      console.error(err);
      message.error({
        content: 'Network error. Please check your connection and try again.',
        duration: 5,
        style: { 
          marginTop: '20vh',
          textAlign: 'center'
        }
      });
    }
  };


  return (
    <div className="contact-page">
      {/* HERO */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">PARTNERS</h1>
         
        </div>
      </header>

      {/* CONTENT */}
      <section className="partners-section">
        <div className="container">
          {/* LEFT */}
          <div className="partners-info">
            <div className="intro-text">
              <p>
                Modern Enterprise Solutions (MES) has built strong, long-term partnerships with leading technology manufacturers and distributors to deliver world-class IT solutions to our federal and enterprise customers. 
                <br/>
                Our Premier Partners are recognized industry leaders, providing best-in-class hardware, software, and security technologies across the enterprise. Through our Strategic Partners, we bring specialized and innovative solutions that complement our core offerings, while our Technology Partners enable us to deliver complete, end-to-end IT solutions tailored to our customers' missions. 
              </p>
            </div>
            <div className="logos-wrapper">
              <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759333159/PartnersLogos_cj7elo.webp" alt="Aurora Partners" />
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name *"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name *"
                required
              />
              <input
                type="text"
                name="organization" // FIXED: changed from "org" to "organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization *"
                required
              />
              <select
                name="orgSize"
                value={formData.orgSize}
                onChange={handleChange}
                required
              >
                <option value="">Org size *</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business email *"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here *"
                required
              />
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                I agree to the Terms of Use and Privacy Policy.
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;