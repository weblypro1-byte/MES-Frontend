// import React, { useEffect, useRef, useState } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { HiOutlineMenuAlt3 } from "react-icons/hi"; // unique burger
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

// import "./Navbar.scss";
// import logo from "./logo.png"; // adjust path according to your file structure
// import logowhite from './logowhite.png'

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarDestOpen, setSidebarDestOpen] = useState(false);

//   // Desktop dropdown with hover-delay (prevents flicker)
//   const [destOpen, setDestOpen] = useState(false);
//   const openTimer = useRef(null);
//   const closeTimer = useRef(null);

//   const handleDestEnter = () => {
//     clearTimeout(closeTimer.current);
//     openTimer.current = setTimeout(() => setDestOpen(true), 80);
//   };

//   const handleDestLeave = () => {
//     clearTimeout(openTimer.current);
//     closeTimer.current = setTimeout(() => setDestOpen(false), 140);
//   };

//   // Lock body scroll when sidebar is open
//   useEffect(() => {
//     document.body.style.overflow = sidebarOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [sidebarOpen]);

//   return (
//     <header className="navbar">
//       {/* Left: Logo */}
     
//       <div className="navbar__logo">
//       <img src={logo} alt="Konnect Study Advisor"  />
//     </div>
//       {/* Center: Desktop Links */}
//       <nav className="navbar__links">
//       <Link to="/">Home</Link>

//       <Link to="/">Coures</Link>


//         {/* Desktop dropdown (stable hover) */}
//         <div
//           className="dropdown"
//           onMouseEnter={handleDestEnter}
//           onMouseLeave={handleDestLeave}
//         >
//           <button className="link-with-icon" type="button" aria-haspopup="true" aria-expanded={destOpen}>
//             Study Destinations <MdKeyboardArrowDown className={`chev ${destOpen ? "rot" : ""}`} />
//           </button>

//           <div className={`dropdown-menu ${destOpen ? "show" : ""}`} onMouseEnter={handleDestEnter} onMouseLeave={handleDestLeave}>
//           <Link to="/destinations/uk" onClick={() => setSidebarOpen(false)}>United Kingdom</Link>

//           <Link to="/destinations/uk" onClick={() => setSidebarOpen(false)}>Austraila</Link>

//           <Link to="/destinations/uk" onClick={() => setSidebarOpen(false)}>Europe</Link>

//           <Link to="/destinations/uk" onClick={() => setSidebarOpen(false)}>USA</Link>

//           </div>
//         </div>

//         <Link to="/">Events</Link>
//         <Link to="#blogs">Blogs</Link>
//         <Link to ="#offices">Our Offices</Link>
//       </nav>

//       {/* Right: Contact */}
//       <div className="navbar__contact">
//         <FaPhoneAlt className="phone-icon" />
//         <div className="phone-block">
//           <span>Need help?</span>
//           <p>+92 321 9666612</p>
//         </div>
//         <button className="btn-consult">Get Free Consultation</button>
//       </div>

//       {/* Burger (hidden when sidebar open) */}
//       {!sidebarOpen && (
//         <button
//           className="burger"
//           aria-label="Open menu"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <HiOutlineMenuAlt3 />
//         </button>
//       )}

//       {/* Overlay */}
//       <div
//         className={`overlay ${sidebarOpen ? "show" : ""}`}
//         onClick={() => setSidebarOpen(false)}
//       />

//       {/* Sidebar (left) */}
//       <aside className={`sidebar ${sidebarOpen ? "show" : ""}`} aria-hidden={!sidebarOpen}>
//         <div className="sidebar__header">
//           <img src={logowhite} alt="Logo" />
//           <button
//             className="close-btn"
//             aria-label="Close menu"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <IoClose />
//           </button>
//         </div>

//         <a href="#company" onClick={() => setSidebarOpen(false)}>Company</a>
//         <a href="#services" onClick={() => setSidebarOpen(false)}>Services</a>

//         {/* Sidebar collapsible submenu */}
//         <div className="sidebar-dropdown">
//           <button
//             className={`trigger ${sidebarDestOpen ? "open" : ""}`}
//             onClick={() => setSidebarDestOpen(v => !v)}
//           >
//             Study Destinations <MdKeyboardArrowDown className={`chev ${sidebarDestOpen ? "rot" : ""}`} />
//           </button>
//           <div className={`sidebar-submenu ${sidebarDestOpen ? "show" : ""}`}>

//             <a href="#uk" onClick={() => setSidebarOpen(false)}>United Kingdom</a>
//             <a href="#usa" onClick={() => setSidebarOpen(false)}>USA</a>
//             <a href="#canada" onClick={() => setSidebarOpen(false)}>Canada</a>
//             <a href="#australia" onClick={() => setSidebarOpen(false)}>Australia</a>
//           </div>
//         </div>

//         <a href="#events" onClick={() => setSidebarOpen(false)}>Events</a>
//         <a href="#blogs" onClick={() => setSidebarOpen(false)}>Blogs</a>
//         <a href="#offices" onClick={() => setSidebarOpen(false)}>Our Offices</a>

//         <div className="sidebar__cta">
//           <button className="btn-consult wide" onClick={() => setSidebarOpen(false)}>
//             Get Free Consultation
//           </button>
//           <div className="sidebar__phone">
//             <FaPhoneAlt />
//             <span>92 345 200 56 100</span>
//           </div>
//         </div>
//       </aside>
//     </header>
//   );
// };

// export default Navbar;



import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";
import logo from "./logo.png";
import logowhite from './logowhite.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDestOpen, setSidebarDestOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const navigate = useNavigate();


  const handleClick = () => {
    // your sidebar close logic (if needed)
    setSidebarOpen(false);

    // navigate to page
    navigate("/form");
  };
  const handleDestEnter = () => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setDestOpen(true), 80);
  };

  const handleDestLeave = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setDestOpen(false), 140);
  };

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <header className="navbar">
      <div className="navbar__centered-container">
      
       <div className="navbar__logo">
      
       <img 
  src={logo} 
  alt="Konnect Study Advisor" 
  onClick={() => window.location.href = '/'} 
  style={{ cursor: 'pointer' }}
/>



  </div>
        {/* Center: Desktop Links */}
        <nav className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>

          {/* Desktop dropdown */}
          <div
            className="dropdown"
            onMouseEnter={handleDestEnter}
            onMouseLeave={handleDestLeave}
          >
            <button className="link-with-icon" type="button" aria-haspopup="true" aria-expanded={destOpen}>
              Study Destinations <MdKeyboardArrowDown className={`chev ${destOpen ? "rot" : ""}`} />
            </button>

            <div className={`dropdown-menu ${destOpen ? "show" : ""}`} onMouseEnter={handleDestEnter} onMouseLeave={handleDestLeave}>
              <Link to="/uk" onClick={() => setSidebarOpen(false)}>United Kingdom</Link>
              <Link to="/australia" onClick={() => setSidebarOpen(false)}>Australia</Link>
              <Link to="/europe" onClick={() => setSidebarOpen(false)}>Europe</Link>
              <Link to="/usa" onClick={() => setSidebarOpen(false)}>USA</Link>
            </div>
          </div>

          <Link to="/events">Events</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/offices">Our Offices</Link>
        </nav>

        {/* Right: Contact */}
        <div className="navbar__contact">
          <FaPhoneAlt className="phone-icon" />
          <div className="phone-block">
  <span>Need help?</span>
  <a href="tel:+923219666612"  class="phone-link">+92 321 9666612</a>
</div>

<button
      className="btn-consult"
      onClick={() => navigate("/form")}
    > Get Free Consultation</button>
        </div>

        {/* Burger (hidden when sidebar open) */}
        {!sidebarOpen && (
          <button
            className="burger"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        )}
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar (left) */}
      <aside className={`sidebar ${sidebarOpen ? "show" : ""}`} aria-hidden={!sidebarOpen}>
        <div className="sidebar__header">
     
        <img 
  src={logowhite} 
  alt="Konnect Study Advisor" 
  onClick={() => window.location.href = '/'} 
  style={{ cursor: 'pointer' }}
/>

          
          <button
            className="close-btn"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
        <Link to="/courses" onClick={() => setSidebarOpen(false)}>Courses</Link>

        {/* Sidebar collapsible submenu */}
        <div className="sidebar-dropdown">
          <button
            className={`trigger ${sidebarDestOpen ? "open" : ""}`}
            onClick={() => setSidebarDestOpen(v => !v)}
          >
            Study Destinations <MdKeyboardArrowDown className={`chev ${sidebarDestOpen ? "rot" : ""}`} />
          </button>
          <div className={`sidebar-submenu ${sidebarDestOpen ? "show" : ""}`}>
            <Link to="/uk" onClick={() => setSidebarOpen(false)}>United Kingdom</Link>
            <Link to="/australia" onClick={() => setSidebarOpen(false)}>Australia</Link>
            <Link to="/europe" onClick={() => setSidebarOpen(false)}>Europe</Link>
            <Link to="/usa" onClick={() => setSidebarOpen(false)}>USA</Link>
          </div>
        </div>

        <Link to="/events" onClick={() => setSidebarOpen(false)}>Events</Link>
        <Link to="" onClick={() => setSidebarOpen(false)}>Blogs</Link>
        <Link to="/offices" onClick={() => setSidebarOpen(false)}>Our Offices</Link>

        <div className="sidebar__cta" >
        <button className="btn-consult wide" onClick={handleClick}>
      Get Free Consultation
    </button>
          <div className="sidebar__phone">
            <FaPhoneAlt />
            <span className=""> <a href="tel:+923219666612" class="no-decoration">+92 321 9666612</a></span>
          </div>
       
</div>
 

      </aside>
    </header>
  );
};

export default Navbar;