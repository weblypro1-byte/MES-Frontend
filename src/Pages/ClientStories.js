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
              src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
              alt="IT Solutions"
            />
            <div className="overlay"></div>
          </div>
          <div className="story-text">
            <p>
              We’re providing IT solutions to all countries{" "}
              <strong>Worldwide</strong>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="story-card">
          <div className="image-wrapper">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
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