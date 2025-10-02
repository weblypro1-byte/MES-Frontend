import React from 'react';
import './AboutPage.scss';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        
        {/* Left Text Section */}
        <section className="text-section">
          <h2>Who We Are</h2>
          <p>
            MES is a comprehensive Value-Added Reseller and IT solutions provider with proven experience supporting Federal agencies. 
            We deliver end-to-end technology solutions, from software enhancements to hardware modernization, ensuring our customers 
            have access to the latest innovations and user-friendly systems that drive efficiency in both office and remote environments.
            Backed by trusted Federal contracting expertise, MES LLC is committed to empowering our clients with reliable, secure, 
            and future-ready IT solutions. 
          </p>

          <h2>Our Story</h2>
          <p>
            Modern Enterprise Solutions LLC (MES) was founded during COVID-19 to address the IT challenges customers faced in uncertain times. 
            With a team of experts having over 20 years of federal contracting experience, we streamlined procurement and delivered critical 
            technology on time and at competitive prices. Our mission is simple: to simplify the IT supply chain and provide reliable, secure, 
            and innovative solutions that keep our customers ahead. 
          </p>
        </section>

        {/* Right Images Section */}
        <section className="images-section">
          <div className="circle large">
            <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759329484/WhatsApp_Image_2025-10-01_at_7.37.48_PM_qny18r.jpg" alt="person 1" />
          </div>
          <div className="circle medium">
            <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759329697/businessman-standing-outdoors-city_1048944-16273390_ptra3l.avif" alt="person 2" />
          </div>
          <div className="circle small">
            <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759329762/WhatsApp_Image_2025-10-01_at_7.42.30_PM_b2s0yj.jpg" alt="person 3" />
          </div>
          <div className="circle tiny">
            <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759329645/WhatsApp_Image_2025-10-01_at_7.40.31_PM_pv1bek.jpg" alt="person 4" />
          </div>
        </section>

      </div>
    </div>
  );
}
