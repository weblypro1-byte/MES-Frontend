



// import React, { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";

// import './Header.scss';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const { pathname } = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     setOpenSubMenu(null);
//     document.body.style.overflow = 'unset';
//   };

//   const toggleSubMenu = (menuName) => {
//     setOpenSubMenu(openSubMenu === menuName ? null : menuName);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  

//   return (
//     <>
//     {/* Top Info Bar */}
// <div className="top-info-bar">
//   <div className="container">
//     <div className="top-info-content">
      
//       <div className="contact-item">
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
          
//           alt="Email Icon"
       
//         />
//         <a href="mailto:Sales@modern-sol.com">Sales@modern-sol.com</a>
//       </div>
//     </div>
//   </div>
// </div>

// <header className={`main-header ${pathname === "/" ? "transparent" : "solid"} ${isScrolled ? "scrolled" : ""}`}>
//         <div className="container">
//           <div className="header-content">
//             {/* Logo */}
//             <div className="brand-logo">
//               <a href="/">
//                 <img
//                   src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png"
//                   // src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758967084/Untitled_design_1_fivsf9.png"

//                   alt="Logo"
//                   className="logo"
//                 />
//               </a>
//             </div>

//             {/* Desktop Nav */}
//             <nav className="main-navigation">
//               <ul className="menu">
//                 <li><a href="/">Home</a></li>
//                 <li className="menu-item-has-children">
//                   <a href="/aboutus">About</a>
//                   <ul className="sub-menu">
//                     <li><a href="/aboutus">About Us</a></li>
//                     <li><a href="/OurCustomer">Our Customers</a></li>
//                     {/* <li><a href="/responsibilty">CSR</a></li>
//                     <li><a href="/coreValuesPage">Core Value</a></li> */}
//                   </ul>
//                 </li>
//                 <li className="menu-item-has-children">
//                   <a href="/product">Product Category</a>
//                   <ul className="sub-menu">
//                     <li><a href="/product">Products & Services</a></li>
//                     <li><a href="/solutions">Solutions</a></li>
//                   </ul>
//                 </li>
//                 {/* <li><a href="/Contract">Federal Contracts</a></li> */}
//                 <li><a href="/contact">Contact</a></li>
//               </ul>
//             </nav>

//             {/* Actions */}
//             <div className="header-actions">
//               <div className="phone-action">
//                 <div className="contact-info-item phone-circle">
//                   <div className="icon-circle">
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/128/9772/9772488.png"
//                       alt="Phone Icon"
//                     />
//                   </div>
//                   <div className="contact-details">
//                     <a href="tel:+923219421570">+92 321 9421570</a>
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Toggle */}
//               <div className="mobile-menu-toggle">
//                 <button
//                   className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
//                   onClick={toggleMenu}
//                 >
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         <div
//           className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
//           onClick={closeMenu}
//         ></div>

//         {/* Sidebar */}
//         <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
//           <div className="mobile-menu-header">
//             <div className="brand-logo">
//               <a href="/" onClick={closeMenu}>
//                 <img
//                   src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png"
//                   alt="logo"
//                   className="logo"
//                 />
//               </a>
//             </div>
//             <button className="close-menu" onClick={closeMenu}>✕</button>
//           </div>

//           <ul className="menu">
//             <li><a href="/" onClick={closeMenu}>Home</a></li>

//             <li className="menu-item-has-children">
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleSubMenu('about');
//                 }}
//               >
//                 About
//               </a>
//               <ul className={`sub-menu ${openSubMenu === 'about' ? 'open' : ''}`}>
//                 <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
//                 <li><a href="/Ourcustomer" onClick={closeMenu}>Our Customers</a></li>
               
               
//               </ul>
//             </li>

//             <li className="menu-item-has-children">
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleSubMenu('products');
//                 }}
//               >
//                 Product Category
//               </a>
//               <ul className={`sub-menu ${openSubMenu === 'products' ? 'open' : ''}`}>
//                 <li><a href="/product" onClick={closeMenu}>Products & Services</a></li>
//                 <li><a href="/solutions" onClick={closeMenu}></a>Solutions</li>
//               </ul>
//             </li>

//             <li><a href="/Contract" onClick={closeMenu}>Federal Contracts</a></li>
//             <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;





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
    // set scroll listener
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // set initial
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // keep body overflow in sync with mobile menu
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

  // header class: transparent only on homepage top; otherwise scrolled
  const headerClass = `main-header ${isHome && !isScrolled ? 'transparent' : 'scrolled'}`;

  return (
    <>
      <div className="top-info-bar">
        <div className="container">
          <div className="top-info-content">
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email Icon" />
              <a href="mailto:Sales@modern-sol.com">Sales@modern-sol.com</a>
            </div>
          </div>
        </div>
      </div>

      <header className={headerClass}>
        <div className="container">
          <div className="header-content">
            <div className="brand-logo">
              <a href="/">
                <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png" alt="Logo" className="logo" />
              </a>
            </div>

            <nav className="main-navigation">
              <ul className="menu">
                <li><a href="/">Home</a></li>
                <li className="menu-item-has-children">
                  <a href="">About</a>
                  <ul className="sub-menu">
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/OurCustomer">Our Customers</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="">Solutions</a>
                  <ul className="sub-menu">
                    <li><a href="/product">Products & Services</a></li>
                    <li><a href="/partners">Partners</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>

            <div className="header-actions">
              <div className="phone-action">
                <div className="contact-info-item phone-circle">
                  <div className="icon-circle">
                    <img src="https://cdn-icons-png.flaticon.com/128/9772/9772488.png" alt="Phone Icon" />
                  </div>
                  <div className="contact-details">
                    <a href="tel:+923219421570">+92 321 9421570</a>
                  </div>
                </div>
              </div>

              <div className="mobile-menu-toggle">
                <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* overlay and mobile menu */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

        <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="brand-logo">
              <a href="/" onClick={closeMenu}>
                <img src="https://res.cloudinary.com/dz7nbmwai/image/upload/v1758695533/logo_fheqvl.png" alt="logo" className="logo" />
              </a>
            </div>
            <button className="close-menu" onClick={closeMenu}>✕</button>
          </div>

          <ul className="menu">
            <li><a href="/" onClick={closeMenu}>Home</a></li>

            <li className="menu-item-has-children">
              <a href="#!" onClick={(e) => { e.preventDefault(); toggleSubMenu('about'); }}>About</a>
              <ul className={`sub-menu ${openSubMenu === 'about' ? 'open' : ''}`}>
                <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
                <li><a href="/Ourcustomer" onClick={closeMenu}>Our Customers</a></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#!" onClick={(e) => { e.preventDefault(); toggleSubMenu('Solutions'); }}></a>
              <ul className={`sub-menu ${openSubMenu === 'products' ? 'open' : ''}`}>
                <li><a href="/product" onClick={closeMenu}>Products & Services</a></li>
                <li><a href="/partners" onClick={closeMenu}>partners</a></li>
              </ul>
            </li>

            <li><a href="/Contract" onClick={closeMenu}>Federal Contracts</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
