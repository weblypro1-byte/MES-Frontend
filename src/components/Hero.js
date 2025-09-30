import React, { useState, useEffect } from 'react';
import './Hero.scss';
// Import images from assets folder


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample slider images
  const slides = [
    {
      id: 1,
      image:"https://blog.onevasco.com/wp-content/uploads/Reasons-to-Visit-USA.png",
      title: "MODERN ENTERPRISE SOLUTIONS LLC",
      
      description: "All your IT needs, one trusted partner."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695530/hero1_q86pw3.jpg",
      title: "Innovative IT Solutions",
    
      description: "Cutting-edge technology tailored to your needs."
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dz7nbmwai/image/upload/v1758696559/pexels-fauxels-3182759_mzaey8.jpg",
      title: "24/7 Support",
      
      description: "Round-the-clock technical assistance and maintenance."
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="slide-image" 
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="slide-content">
                <h1 className="slide-title">
                  {slide.title}
                  <span className="slide-subtitle">{slide.subtitle}</span>
                </h1>
                <p className="slide-description">{slide.description}</p>
                <div className="hero-buttons">
                {/* <a className="btn btn-primary">Get Started</a> */}
                <a 
  className="btn btn-primary"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Learn More
</a>


                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <div className="slider-nav">
        <button className="nav-btn prev-btn" onClick={goToPrevSlide}>
          <i className="ovaicon ovaicon-arrow-left"></i>
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        
        <button className="nav-btn next-btn" onClick={goToNextSlide}>
          <i className="ovaicon ovaicon-arrow-right"></i>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;