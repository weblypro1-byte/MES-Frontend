import React from "react";
import Slider from "react-slick";
import "./LogoCarousel.scss";

const logos = [
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture18-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture19-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture20-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture21-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture22-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture23-1-150x150.png",


  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture18-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture19-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture20-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture21-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture22-1-150x150.png",
  "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture23-1-150x150.png",
];

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="logo-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LogoCarousel;