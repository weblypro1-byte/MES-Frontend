// import React from "react";
// import "./Hero.scss";

// export default function Hero() {
//   return (
//     <section className="hero">
//       {/* Left Content */}
//       <div className="hero__content">
//       <h1>
//       Study Abroad<br />
//   <span>Konnect Study Adviser</span>
// </h1>
//         <p style={{ textAlign: "left" }}>Konnect Study Adviser is one of the leading Study Abroad Consultants.
//           Begin your journey of studying abroad with us and clear your education
//           queries. Book your student visa consultancy today!
//         </p>
//         <button className="hero__btn">View Our Services</button>
//       </div>

//       {/* Right Images */}
//       <div className="hero__images">
//         <div className="grid">
//           <img
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=1200&h=700&s=1"
//             alt="United Kingdom"
//           />
//           <img
//             src="https://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg"
//             alt="United States"
//           />
//           <img
//             src="https://www.medicaltravelcompared.co.uk/media/0s2b2f21/paris-eiffel-tower-and-river-seine-at-sunset.jpg?anchor=center&mode=crop&heightratio=0.66675&width=1500&rnd=133493705118170000"
//             alt="France"
//           />
//           <img
//             src="https://media.istockphoto.com/id/1413703537/photo/canadian-flag-in-the-mountains.jpg?s=612x612&w=0&k=20&c=N2tE7xvyLXCPBlCm_itVpsVRa11vzE7RvFwJ2HpRnCQ="
//             alt="Canada"
//           />
//         </div>

//         {/* Floating Tags */}
//         <div className="tag tag1">
//           <strong>200+</strong>
//           <span>Counsellors Team</span>
//         </div>
//         <div className="tag tag2">
//           <strong>20+</strong>
//           <span>Foreign Universities</span>
//         </div>
//       </div>
//     </section>
//   );
//}

// import React from "react";
// import "./Hero.scss";

// export default function Hero() {
//   return (
//     <section className="hero">
//       {/* Left Content */}
//       <div className="hero__content">
//         <h1>
//           STUDY ABROAD<br />
//           <span>Konnect Study Adviser</span>
//         </h1>
//         <p>Konnect Study Adviser is one of the leading Study Abroad Consultants.
//           Begin your journey of studying abroad with us and clear your education
//           queries. Book your student visa consultancy today!
//         </p>
//         <button className="hero__btn">View Our Services</button>
        
//         {/* Tags Container - Will appear below on mobile */}
//         {/* <div className="hero__tags-mobile">
//           <div className="tag">
//             <strong>200+</strong>
//             <span>Counsellors Team</span>
//           </div>
//           <div className="tag">
//             <strong>20+</strong>
//             <span>Foreign Universities</span>
//           </div>
//         </div> */}
//       </div>

//       {/* Right Images */}
//       <div className="hero__images">
//         <div className="grid">
//           <img
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=1200&h=700&s=1"
//             alt="United Kingdom"
//           />
//           <img
//             src="https://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg"
//             alt="United States"
//           />
//           <img
//             src="https://www.medicaltravelcompared.co.uk/media/0s2b2f21/paris-eiffel-tower-and-river-seine-at-sunset.jpg?anchor=center&mode=crop&heightratio=0.66675&width=1500&rnd=133493705118170000"
//             alt="France"
//           />
//           <img
//             src="https://media.istockphoto.com/id/1413703537/photo/canadian-flag-in-the-mountains.jpg?s=612x612&w=0&k=20&c=N2tE7xvyLXCPBlCm_itVpsVRa11vzE7RvFwJ2HpRnCQ="
//             alt="Canada"
//           />
//         </div>

//         {/* Floating Tags (Desktop Only) */}
        
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const heroRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Left Content */}
      <div className="hero__content">
        <h1 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={isHovered ? "hovered" : ""}
        >
          STUDY ABROAD<br />
          <span>Konnect Study Adviser</span>
        </h1>
        <p>Konnect Study Adviser is one of the leading Study Abroad Consultants.
          Begin your journey of studying abroad with us and clear your education
          queries. Book your student visa consultancy today!
        </p>
        <button
  className="hero__btn"
  onClick={() => navigate("/WhyChoose")}
>
  View Our Services
</button>      </div>

      {/* Right Images */}
      <div className="hero__images">
        <div className="grid">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755758758/united-kingdom_onitob.jpg"
              alt="United Kingdom"
            />
            <div className="image-overlay">
              <span>United Kingdom</span>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755758786/united-states-of-america-1087_nsgafb.jpg"
              alt="United States"
            />
            <div className="image-overlay">
              <span>United States</span>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755758861/paris-eiffel-tower-and-river-seine-at-sunset_symgkd.jpg"
              alt="France"
            />
            <div className="image-overlay">
              <span>France</span>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1755758885/istockphoto-1413703537-612x612_slf2pv.jpg"
              alt="Canada"
            />
            <div className="image-overlay">
              <span>Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}