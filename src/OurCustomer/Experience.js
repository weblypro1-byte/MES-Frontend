import React from "react";
import "./Experience.scss";

const experiences = [
  {
    id: "01",
    text: `Proven experience supporting U.S. federal agencies—including the DoD, DoN, DAF, and DOJ—by successfully fulfilling numerous IT and non-IT requirements. Our strong performance history demonstrates our ability to deliver compliant, timely, and cost-effective solutions through multiple federal procurement channels.  `,
  },
  {
    id: "02",
    text: `SLED: Demonstrated success in supporting state, local, and education customers—including the CA Department of Insurance, CA Department of Corrections, and Florida State University—by delivering comprehensive non-IT solutions that drive operational efficiency and excellence. `,
  },
  {
    id: "03",
    text: `Healthcare: Delivering innovative IT and non-IT solutions to hospitals, clinics, and state healthcare systems—enabling streamlined operations, improved efficiency, and enhanced patient care outcomes. `,
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-grid">
        {/* LEFT IMAGES (now 3 images) */}
        <div className="experience-left">
          <div className="circle-decoration"></div>
          <div className="images-stack">
            <div className="exp-image first">
              <img
                src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Front.jpg"
                alt="Federal Government"
              />
            </div>
            <div className="exp-image second">
              <img
                src="https://cirrussystemsus.com/wp-content/uploads/2023/01/Back.jpg"
                alt="SLED"
              />
            </div>
            <div className="exp-image third">
              <img
                src="https://www.pymnts.com/wp-content/uploads/2017/02/US_Healthcare_Global-Citizen.jpg?w=457" 
                alt="Healthcare"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
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
