import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import hook
import "./CallToAction.scss";

export default function CallToAction() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section className="cta-section">
      <div className="container">
        <div className="text">
          <p>We’re here to help to grow your business.</p>
          <h2>Looking for the Best IT Business Solutions?</h2>
        </div>
        <div className="action">
          <button
            className="cta-btn"
            onClick={() => navigate("/contact")} // ✅ go to contact page
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
