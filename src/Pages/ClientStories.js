import React from "react";
import "./ClientStories.scss";

const ClientStoriesPage = () => {
  return (
    <section className="client-stories">
      <div className="container">
        {/* Card 1 */}
        <div className="story-card">
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759332282/pexels-photo-1181352_fsfnls.jpg"
              alt="IT Solutions"
            />
            <div className="overlay"></div>
          </div>
          <div className="story-text">
            <p>
              We’re providing IT solutions across the {" "}
              <strong>United States</strong>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="story-card">
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1759332296/pexels-photo-3184418_f9xslk.jpg"
              alt="Happy Clients"
            />
            <div className="overlay"></div>
          </div>
          <div className="story-text">
            <p>
              Our happy clients loved our{" "}
              <strong>technology and services</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesPage;