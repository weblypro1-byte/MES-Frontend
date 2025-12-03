

// Header.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : 'unset';
      return next;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
    document.body.style.overflow = 'unset';
  };

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(prev => (prev === menuName ? null : menuName));
  };

  const headerClass = `main-header ${isHome && !isScrolled ? 'transparent' : 'scrolled'}`;

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className="header-content">

            {/* Desktop Logo */}
            <div className="brand-logo">
              <a href="/">
                <img 
                  src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png" 
                  alt="Logo" 
                  className="logo" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="main-navigation">
              <ul className="menu">
                <li><a href="/">Home</a></li>
                <li className="menu-item-has-children">
                  <a style={{ cursor: 'pointer' }}>About</a>
                  <ul className="sub-menu">
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/OurCustomer">Our Customers</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a style={{ cursor: 'pointer' }}>Solutions</a>
                  <ul className="sub-menu">
                    <li><a href="/product">Products & Services</a></li>
                    <li><a href="/partners">Partners</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="header-actions">
              <div className="contact-info-group">

                {/* Phone */}
                <div className="contact-info-item phone-circle">
                  <div className="icon-circle">
                    <img src="https://cdn-icons-png.flaticon.com/128/9772/9772488.png" alt="Phone Icon" />
                  </div>
                  <div className="contact-details">
                  <a href="tel:6614242333">(661) 424-2333</a>

                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item email-circle">
                  <div className="icon-circle">
                    <img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="Email Icon" />
                  </div>
                  <div className="contact-details">
                    <a href="mailto:Sales@modern-sol.com">Sales@modern-sol.com</a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="mobile-menu-toggle">
                <button 
                  className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                  onClick={toggleMenu}
                >
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
        ></div>

        {/* Mobile Sidebar Menu */}
       {/* Mobile Sidebar Menu */}
<nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
  <div className="mobile-menu-header">
    <div className="mobile-logo">
      <a href="/" onClick={closeMenu}>
        <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png" alt="Logo" />
      </a>
    </div>
    <button className="close-menu" onClick={closeMenu}>✕</button>
  </div>

  <ul className="menu">
    <li><a href="/" onClick={closeMenu}>Home</a></li>
    <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
    <li><a href="/OurCustomer" onClick={closeMenu}>Our Customers</a></li>
    <li><a href="/product" onClick={closeMenu}>Products & Services</a></li>
    <li><a href="/partners" onClick={closeMenu}>Partners</a></li>
    <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
  </ul>

  {/* ✅ Contact info at bottom of sidebar */}
  <div className="mobile-contact">
    <div className="contact-info-item">
      <div className="icon-circle">
        <img src="https://cdn-icons-png.flaticon.com/128/9772/9772488.png" alt="Phone" />
      </div>
      <div className="contact-details">
        <a href="tel:(661)4242333">(661) 424-2333</a>
      </div>
    </div>

    <div className="contact-info-item">
      <div className="icon-circle">
        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="Email" />
      </div>
      <div className="contact-details">
        <a href="mailto:Sales@modern-sol.com">Sales@modern-sol.com</a>
      </div>
    </div>
  </div>
</nav>

      </header>
    </>
  );
};

export default Header;
