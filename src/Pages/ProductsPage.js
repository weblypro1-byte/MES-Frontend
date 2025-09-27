import React, { useState, useEffect } from "react";
import "./ProductsPage.scss";

const products = [
  { id: 1, name: "Chromebook", img: "https://cirrussystemsus.com/wp-content/uploads/2023/01/IP-3.jpg" },
  { id: 2, name: "MacBook Pro", img: "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture17.jpg" },
  { id: 3, name: "Epson Scanner", img: "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture20.jpg" },
  { id: 4, name: "Brother Printer", img: "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture14.jpg" },
  { id: 5, name: "Another Product", img: "https://cirrussystemsus.com/wp-content/uploads/2023/01/Picture14.jpg" },
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