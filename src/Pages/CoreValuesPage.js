import React from "react";
import "./CoreValuesPage.scss";

const CoreValuesPage = () => {
  return (
    <div className="core-values-wrapper">
      {/* HERO */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">Our Core Values</h1>
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            HOME <span className="sep">›</span> CORE VALUES
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <section className="core-values-page">
        <div className="container">
          {/* Intro */}
         
          <p className="intro-text">
            Modern Enterprises Solutions is a product of its core values. The values are from us
            and we are from our values is our belief. CS fundamental reason for
            existence, sustainability and continuity lies in following our corporate
            values which defines the attributes of our team members and eventually
            our corporate culture.
          </p>

          {/* Sections */}
          <div className="value-section">
            <h2>Communication</h2>
            <p>
              The members of our team categorize Communication as a value and not a
              priority. This entails, we are highly responsive to ensure our
              customers, our industry partners and stakeholders stay up-to-speed
              with status quo. MES prevents the hassle of multi-tasking
              teams with multiple accounts instead we set up a designated POC and
              their team who represent our specific channel partners and customers.
              This helps mitigate delayed communication and serves to achieve
              loyalty and trust of our customers and partners.
            </p>
          </div>

          <div className="value-section">
            <h2>Integrity</h2>
            <p>
              Integrity fuels our core values. MES lives in accordance
              to our Bona fide standards of integrity. Commitment, honesty and
              ethics are always at forefront of our activities and decision making.
            </p>
          </div>

          <div className="value-section">
            <h2>Relationship</h2>
            <p>
              The core of our business is relationship building. We begin with our
              community our employees, followed by our customers and channel
              partners. We staunchly believe every relationship will affect us one
              way or another and it’s our willingness to foster healthy pragmatic
              relations.
            </p>
          </div>

          <div className="value-section">
            <h2>Responsibility</h2>
            <p>
              To take ownership and not to shy away will foster trust. Taking up
              responsibility and seeing it through start till end is an ability
              very few are fortunate to. We take our responsibilities seriously and
              invest time and money in resources who are capable.
            </p>
          </div>

          <div className="value-section">
            <h2>Unity</h2>
            <p>
              United we stand, divided we fall, is a mantra applicable to all
              global communities. We foster a culture of unity and oneness where
              all ideas, opinions and even criticism is welcome. Empowerment and
              comfort of our team members gives rise to unity which paves way to a
              responsible economy we all yearn for.
            </p>
          </div>

          <div className="value-section">
            <h2>Strength</h2>
            <p>
              The beauty of inner strength is sound decision making. A company that
              is true to its inner strength believes with conviction to overcome
              all obstacles and sustain themselves through thick and thins without
              many existential accolades.
            </p>
          </div>

          {/* Footer Note */}
          <div className="footer-note">
            <h3>Modern Enterprises Solutions</h3>
            <p>
              We work with a passion of taking challenges and creating new ones in
              technology sector.
            </p>

            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Our Customers</li>
            
              <li>Solutions</li>
              <li>Partners</li>
              <li>Federal Contracts</li>
              <li>Contact</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesPage;
