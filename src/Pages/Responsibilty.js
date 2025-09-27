import React from "react";
import "./Responsibility.scss";

const Responsibility = () => {
  return (
    <div className="responsibility-wrapper">
      {/* HERO */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696077/Hero_t6sv76.webp")`,
        }}
        role="banner"
      >
        <div className="hero-inner">
          <h1 className="hero-title">Our Responsibilities</h1>
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            HOME <span className="sep">›</span> RESPONSIBILITIES
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <section className="responsibility-page">
        <div className="container">
          <h1 className="page-title">Our Responsibilities</h1>

          <div className="responsibility-section">
            <h2>Employment Responsibility</h2>
            <p>
              There is no secret to success, it is the determination, the
              willingness and the drive to change the world. We at Cirrus Systems
              know our mission, vision and values are baseless without the support
              of our employees and we recognize that these members come from
              global communities we all come from.
            </p>
            <p>
              Globalization impacted our ideologies to explore the world and
              become a part of global community to share common goals of
              betterment, ethics, environment and multi culture acceptance. We at
              Cirrus recognize these principles and promote employment
              opportunities to individuals who come from various walks in life. We
              respect all cultures and strongly believe a happy employee paves way
              to a happy customer.
            </p>
            <p>
              We are proud to share, 10% of our employment comprise of individuals
              who are disabled and work remotely from home. These employees are as
              dear to our organization as the ones sitting next to us. Our vision
              necessitates to expand this percentage proportionately with our
              growth and expansion.
            </p>
          </div>

          <div className="responsibility-section">
            <h2>Workplace Equality</h2>
            <p>
              Being a Minority Owned Small Disadvantaged business, we believe
              Equality is a prime fundamental. All individuals in society deserve
              a fair chance to be a part of our family and contribute towards the
              values of our organization which in turn benefits our clients, our
              team, our communities and above all the world.
            </p>
          </div>

          <div className="responsibility-section">
            <h2>Economic Responsibility</h2>
            <p>
              We commenced in the midst of Covid-19, at a time no sector was
              spared and fell to the clutches of the pandemic. Our customers
              needed the vendors, the vendors needed the supplies, the suppliers
              needed manufacturers, and the manufacturers needed the ability to
              produce efficiently with resources that were not delivered timely.
            </p>
            <p>
              This led to a vicious circle giving rise to delays and stagnation.
              Our leadership identified this void and were determined to fill the
              gap. Although, it was well-known that starting a business now will
              be cost intensive and will require lots of man hours to source price
              competitive vendors and make timely deliveries, but driven by the
              mantra of Economic Responsibility the team stepped up their game and
              ultimately created happy customers.
            </p>
            <p>
              We are proud, to not only meet those requirements timely & winning
              customer satisfaction but during Covid we expanded our human
              resource by 20%. We continue to strive to be always engaged in
              continuous improvement to promote the model of an ideal economy we
              all yearn for.
            </p>
          </div>

          <div className="responsibility-section">
            <h2>Environment Responsibility</h2>
            <p>
              We are global citizens and the decisions we take today impact our
              environment. We at Cirrus strongly believe the environment is from
              us and we are from the environment. Environment resources are
              available in abundance and as its advocates we at Cirrus Systems
              keep a track of our decisions to ensure a positive impact on our
              environment to safeguard these resources.
            </p>
            <p>
              We endeavor offering our customers IT products which comply with
              EPEAT and ENERGY STAR ratings to help our customers meet their
              environment standards. We highly encourage virtual meetings which
              facilitates our stake holders to conduct meeting at the convenience
              of their offices or home.
            </p>
            <p>
              Our organization is flat structure so resources like printers,
              scanners, ink and paper can be shared. This helps foster green work
              environment eliminating carbon foot prints and save electricity from
              multiple electronic devices.
            </p>
            <p>
              Our work facility consists of motion detecting water taps which
              helps control the water flow and prevent wastage or leakages post
              usage.
            </p>
            <p>
              At Cirrus, sustainable (green) packaging and internal recycling are
              promoted. Waste segregation and its disposal is extremely vital.
              Lack of segregation, collection and transportation of unsegregated
              mixed waste to the landfills has an impact on the environment.
            </p>
          </div>

          <div className="responsibility-section">
            <h2>Ethical Responsibility</h2>
            <p>
              Our belief, trustworthy companies are better at attracting business,
              talented employees and winning customer satisfaction. Ethics in our
              organization is not a priority it is a Value. We empower our
              employees, customers and stakeholders to freely express their
              concerns so necessary measures can be taken to solve their problem.
            </p>
            <p>
              Employees who choose to be quiet due to harsh company pressure
              eventually develop stained ethics which leads to questionable
              performance. The blame evidentially falls on the leadership style,
              so we ensure a relaxed work environment where participation, views
              and opinions are encouraged.
            </p>
            <p>
              As a part of our recruitment process the newly hired undergo
              Employee Induction Policies 101 and as an integral part of the
              induction a detailed overview of our Cirrus Systems Ethical policy
              (Code of Business Conduct) is delivered as well. This helps foster
              an environment of ethical behavior in business.
            </p>
          </div>

          <div className="responsibility-section">
            <h2>Text#22</h2>
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
              to offer turnkey solutions and produce customer centric results. See
              what our customers have to say…
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Responsibility;
