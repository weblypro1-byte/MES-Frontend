// src/Components/Pages/Home/ChannelPartnersPage.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./ChannelPartnersPage.scss";

const partners = [
  { id: 1, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695483/Picture52-300x238_sdflof.png", alt: "Open Mesh" },
  { id: 2, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695483/Picture63-300x240_qgun73.png", alt: "Mikrotik" },
  { id: 3, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695482/Picture64-300x239_sisf7j.png", alt: "Optoma" },
  { id: 4, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695482/samsung-300x241_ngvx33.png", alt: "Maingear" },
  { id: 5, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695482/Picture41-300x217_tiylem.png", alt: "NEC" },
  { id: 6, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695481/Picture44-300x237_prgjda.png", alt: "Veritas" },
  { id: 7, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695481/Picture32-300x238_ykzj4y.png", alt: "Inventec" },
  { id: 8, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695481/Picture39-300x238_dutoh9.png", alt: "Nutanix" },
  { id: 9, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695480/Picture9-300x237_ptoqu2.png", alt: "Nutanix" },

  { id: 10, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695480/ibm-300x237_oqtumj.png", alt: "Nutanix" },

{ id: 11, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695479/asus-300x240_yxlwc5.png", alt: "Nutanix" },
];

const ChannelPartnersPage = () => {
  return (
    <section className="channel-partners">
      <div className="container">
        

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },   // ✅ 1 logo on very small screens
            480: { slidesPerView: 2, spaceBetween: 15 },   // ✅ 2 logos on small screens
            768: { slidesPerView: 3, spaceBetween: 20 },   // ✅ 3 logos on tablets
            1024: { slidesPerView: 5, spaceBetween: 30 },  // ✅ 5 logos on desktop
          }}
          className="partners-slider"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="partner-card">
                <img src={partner.img} alt={partner.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ChannelPartnersPage;