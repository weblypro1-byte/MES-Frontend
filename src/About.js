import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__tag">ABOUT US</h1>
        <div className="line"></div>
        <h2 className="about__title">Study Abroad Consultants</h2>
        <p className="about__text">
  <strong>Konnect Study Adviser</strong> empowers students to thrive in today’s 
  dynamic global economy. We provide end-to-end consultancy services—from 
  selecting the right university to securing visas—ensuring every student 
  makes confident decisions and achieves their academic dreams with ease.
</p>

        <p className="about__text">
          Student recruitment is one of our primary activities. We continually
          strive to utilize targeted support and strategic outreach to attract,
          engage, and enroll talented students from diverse backgrounds. Our
          dedication to inclusivity and academic quality is reflected in our
          recruitment efforts. We guarantee a satisfying and knowledgeable
          enrollment experience by cultivating close ties with potential
          students and their communities.
        </p>
      </div>

      {/* ✅ Image from a link */}
      <div className="about__image">
        <img
          src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755753673/qq_tbe1aw.webp"
          alt="About Us"
        />
      </div>
    </section>
  );
};

export default AboutUs;