import React from "react";
import Slider from "react-slick";
import "./LogoCarousel.scss";

const logos = [
  "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293495/Picture20-1-150x150_1_rqdxbl.png",
 "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture22-1-150x150_1_f2gfs8.png",
'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture21-1-150x150_1_spv1yw.png',

'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture19-1-150x150_1_gibkbo.png',
'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture18-1-150x150_1_ajsfin.png',
  'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture23-1-150x150_1_s5czh7.png',

  "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293495/Picture20-1-150x150_1_rqdxbl.png",
 "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture22-1-150x150_1_f2gfs8.png",
'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture21-1-150x150_1_spv1yw.png',

'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture19-1-150x150_1_gibkbo.png',
'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture18-1-150x150_1_ajsfin.png',
  'https://res.cloudinary.com/dz7nbmwai/image/upload/v1759293496/Picture23-1-150x150_1_s5czh7.png',
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