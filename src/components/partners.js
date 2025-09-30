// import React from "react";
// import "./solutions.scss";
// import LOGOS_IMAGE from "../assets/Products Card/PartnersLogos.png"; // the single image of all logos

// const PartnersPage = () => {
//   return (
//     <div className="contact-page">
//       {/* HERO */}
//       <header
//         className="contact-hero"
//         style={{ backgroundImage: `url(${"https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp"})` }}
//         role="banner"
//       >
//         <div className="hero-inner">
//           <h1 className="hero-title">Solutions</h1>
//           <nav className="hero-breadcrumb" aria-label="Breadcrumb">
//             HOME <span className="sep">›</span> SOLUTIONS
//           </nav>
//         </div>
//       </header>

//       {/* CONTENT */}
//       <section className="partners-section">
//         <div className="container">
//           {/* LEFT: Text + Logos */}
//           <div className="partners-info">
//             <div className="intro-text">
//               <p>
//                 Aurora has developed close, long-term partnerships with key
//                 industry-leading security and information technology vendors in
//                 order to bring our clients world-class solutions.
//               </p>
//               <p>
//                 Our Premier Partners are recognized leaders in their specialties,
//                 representing best-of-breed security technologies across the
//                 enterprise. Aurora’s Strategic Partners provide specialized and
//                 innovative solutions that complement our core security offerings,
//                 while our Technology Partners help us deliver an end-to-end
//                 technology solution.
//               </p>
//             </div>

//             <div className="logos-wrapper">
//               <img src={LOGOS_IMAGE} alt="Aurora Partners" />
//             </div>
//           </div>

//           {/* RIGHT: Contact Form */}
//           <div className="contact-form">
//             <h3>Talk to Aurora</h3>
//             <form>
//               <input type="text" placeholder="First name *" required />
//               <input type="text" placeholder="Last name *" required />
//               <input type="text" placeholder="Org *" required />
//               <select>
//                 <option>Org size *</option>
//                 <option>1-10</option>
//                 <option>11-50</option>
//                 <option>51-200</option>
//                 <option>200+</option>
//               </select>
//               <input type="email" placeholder="Business email *" required />
//               <input type="tel" placeholder="Phone number *" required />
//               <textarea placeholder="Type your message here *" required />
//               <label className="checkbox">
//                 <input type="checkbox" /> I opt in to email, phone, and/or text
//                 communication from Aurora and agree to terms of use and privacy
//                 policy.
//               </label>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PartnersPage;






import React, { useState } from "react";
import "./solutions.scss";
import LOGOS_IMAGE from "../assets/Products Card/PartnersLogos.png";

const PartnersPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    org: "",
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
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          org: "",
          orgSize: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
      } else {
        alert("❌ Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error submitting form.");
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
          <h1 className="hero-title">Partners</h1>
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            HOME <span className="sep">›</span> Partners
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="partners-section">
        <div className="container">
          {/* LEFT */}
          <div className="partners-info">
            <div className="intro-text">
              <p>
            Modern Enterprise Solutions (MES Systems) has built strong, long-term partnerships with leading technology manufacturers and distributors to deliver world-class IT solutions to our federal and enterprise customers. 
<br/>
Our Premier Partners are recognized industry leaders, providing best-in-class hardware, software, and security technologies across the enterprise. Through our Strategic Partners, we bring specialized and innovative solutions that complement our core offerings, while our Technology Partners enable us to deliver complete, end-to-end IT solutions tailored to our customers’ missions. 
</p>
            </div>
            <div className="logos-wrapper">
              <img src={LOGOS_IMAGE} alt="Aurora Partners" />
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
                name="org"
                value={formData.org}
                onChange={handleChange}
                placeholder="Org *"
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
                I agree to communication from Aurora and accept the terms of use
                and privacy policy.
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
