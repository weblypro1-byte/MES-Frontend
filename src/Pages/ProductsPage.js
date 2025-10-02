import React, { useState, useEffect } from "react";
import "./ProductsPage.scss";

const products = [
  { id: 1, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330886/print-6_dhoo6m.jpg" },
  { id: 2, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330885/PHP-1_d9bsuw.jpg" },
  { id: 3, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330885/Picture17_hdlqoe.jpg" },
  { id: 4,  img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330883/key-3_y0pvhq.jpg" },
  { id: 5, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330884/Picture20_p4ayaz.jpg" },
  { id: 6, img: " https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330882/IP-3_xm3bck.jpg" },
  { id: 7, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330868/Picture14_it37op.jpg" },
  { id: 8,  img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330883/key-3_y0pvhq.jpg" },
  { id: 9, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330884/Picture20_p4ayaz.jpg" },
  { id: 10, img: " https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330882/IP-3_xm3bck.jpg" },
  { id: 11, img: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1759330868/Picture14_it37op.jpg" }

 
  
];

export default function ProductsPage() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Responsive check
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(4);
      }
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    if (current + itemsPerSlide >= products.length) {
      setCurrent(0); // loop back
    } else {
      setCurrent(current + itemsPerSlide);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(products.length - itemsPerSlide);
    } else {
      setCurrent(current - itemsPerSlide);
    }
  };

  const visibleProducts = products.slice(current, current + itemsPerSlide);

  return (
    <div className="products-page">
      <div className="products-header">
        <span className="tag">— Featured</span>
        <h2 className="title">Products</h2>
      </div>

      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slider">
          {visibleProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}