import React from "react";
import "./Experience.scss";

const experiences = [
  {
    id: "01",
    text: `Federal Government: Successful track record of conducting business 
    with federal agencies but not limited to DOD, DON, DAF, DOJ under our GSA Contract, 
    SAM BETA, Unison and fulfilling numerous IT and Non IT orders.`,
  },
  {
    id: "02",
    text: `SLED: Successful past performance, enabling our SLED customers 
    like PA Department of Insurance, PA Department of Correction, FL State University 
    and many more to achieve operational excellence by offering comprehensive Non-IT Solutions.`,
  },
  {
    id: "03",
    text: `Healthcare: Providing innovative IT and Non-IT solutions for hospitals, 
    clinics, and state healthcare systems to streamline operations and enhance patient care.`,
  },
  
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-grid">
        {/* LEFT IMAGES (fixed only 2 images) */}
        <div className="experience-left">
          <div className="circle-decoration"></div>
          <div className="images-stack">
            <div className="exp-image">
              <img
                src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Front.jpg"
                alt="Federal Government"
              />
            </div>
            <div className="exp-image shifted">
              <img
                src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Back.jpg"
                alt="SLED"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (all articles) */}
        <div className="experience-right">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-item">
              <div className="exp-number">{exp.id}</div>
              <p>{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;