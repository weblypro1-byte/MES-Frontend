



import React from "react";
import "./Product.scss";

// 15 product images
import card1 from "../assets/Products Card/card1.png";
import card2 from "../assets/Products Card/card2.png";
import card3 from "../assets/Products Card/card3.png";
import card4 from "../assets/Products Card/card4.png";
import card5 from "../assets/Products Card/card5.png";
import card6 from "../assets/Products Card/card6.png";
import card7 from "../assets/Products Card/card7.png";
import card8 from "../assets/Products Card/card8.png";
import card9 from "../assets/Products Card/card9.png";
import card10 from "../assets/Products Card/card10.png";
import card11 from "../assets/Products Card/card11.png";
import card12 from "../assets/Products Card/card12.png";
import card13 from "../assets/Products Card/card13.png";
import card14 from "../assets/Products Card/card14.png";
import card15 from "../assets/Products Card/card15.png";

const products = [
  { id: 1, title: "AI Analytics", image: card1, desc: "Real-time AI-powered insights and analytics for businesses looking to leverage artificial intelligence in every department of their organization." },
  { id: 2, title: "Cloud Solutions", image: card2, desc: "Scale securely with our cloud solutions, ensuring your data is safe, accessible, and optimized for performance across all devices." },
  { id: 3, title: "Cybersecurity", image: card3, desc: "Protect your company from evolving digital threats with our advanced cybersecurity tools and monitoring services." },
  { id: 4, title: "Automation Tools", image: card4, desc: "Automate repetitive tasks and streamline workflow processes to increase productivity and reduce operational costs." },
  { id: 5, title: "Data Management", image: card5, desc: "Organize, analyze, and manage your data seamlessly to make better business decisions and improve operational efficiency." },
  { id: 6, title: "IoT Solutions", image: card6, desc: "Connect and monitor devices across your organization with Internet of Things technology for smarter operations." },
  { id: 7, title: "Mobile Apps", image: card7, desc: "Engage your audience with sleek, user-friendly mobile applications designed to meet modern business needs." },
  { id: 8, title: "Web Development", image: card8, desc: "Create modern, responsive websites that look great on any device and provide a seamless user experience." },
  { id: 9, title: "Blockchain Tech", image: card9, desc: "Implement secure and transparent blockchain solutions to enhance your business processes and data integrity." },
  { id: 10, title: "AR/VR Solutions", image: card10, desc: "Deliver immersive augmented and virtual reality experiences that engage and inspire users." },
  { id: 11, title: "Enterprise Software", image: card11, desc: "Streamline your operations with scalable enterprise software tailored to your organization's needs." },
  { id: 12, title: "E-Commerce", image: card12, desc: "Boost online sales and improve customer experience with our comprehensive e-commerce solutions." },
  { id: 13, title: "Digital Marketing", image: card13, desc: "Expand your brand and reach your target audience with powerful digital marketing strategies." },
  { id: 14, title: "Customer Support AI", image: card14, desc: "Implement AI chatbots and assistants to provide fast and effective customer support around the clock." },
  { id: 15, title: "Big Data", image: card15, desc: "Uncover hidden trends and insights using advanced big data analytics tools and platforms." },
];

const PartnersPage = () => {
  // 🔹 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      organization: e.target[2].value,
      orgSize: e.target[3].value,
      email: e.target[4].value,
      phone: e.target[5].value,
      message: e.target[6].value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/form2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Form submitted successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="partners-page">
      {/* HERO */}
      <header
        className="partners-hero"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp"})` }}
      >
        <div className="hero-inner">
          <h1 className="hero-title">Products & Services</h1>
         
        </div>
      </header>

      {/* PRODUCTS */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-heading">Solutions and Products</h2>
          <h3 className="section-subheading">
          See how MES can help meet your Agency’s needs today 
          </h3>

          <div className="cards-grid">
            {products.map((p) => (
              <div key={p.id} className="flip-card">
                <div className="flip-card-inner">
                  {/* FRONT */}
                  <div className="flip-card-front">
                    <h3 className="card-heading">{p.title}</h3>
                    <div className="card-image">
                      <img src={p.image} alt={p.title} />
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="flip-card-back">
                    <h3 className="card-heading">{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOWNLOAD LINE */}
          <div className="download-section">
            <p>See how MES can help meet your Agency’s needs today </p>
            <a
              href="/File/References.pdf"
              download="References.pdf"
              className="download-btn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
                alt="References"
                style={{ width: "24px", marginRight: "8px" }}
              />
              Download
            </a>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form">
            <h3>Talk to MES Expert</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="First name *" required />
                <input type="text" placeholder="Last name *" required />
              </div>
              <input type="text" placeholder="Organization *" required />
              <div className="form-row">
                <select required>
                  <option value="">Org size *</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                <input type="email" placeholder="Business email *" required />
              </div>
              <input type="tel" placeholder="Phone number *" required />
              <textarea placeholder="Type your message here *" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
