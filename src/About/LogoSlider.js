import React from "react";
import "./LogoSlider.scss";

export default function LogoSlider() {
  const logos = [
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture35-300x239.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture30.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture31-300x239.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture32-300x238.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture33-300x239.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture37-300x238.png",
    "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture36.png",
  ];

  return (
    <section className="logo-slider">
      <div className="slider-track">
        {logos.concat(logos).map((logo, i) => (
          <div className="slide" key={i}>
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}