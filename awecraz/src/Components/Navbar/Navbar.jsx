import React, { useEffect, useState } from "react";
import "./Navbar.css";
import awecrazlogo from "../../assets/images/awecrazlogo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100; // adjust for navbar height

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActive(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // run once on load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo-container">
            <img src={awecrazlogo} alt="Company Logo" className="logo-img" />
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${open ? "show" : ""}`}>

            <li>
              <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`} onClick={() => setOpen(false)}>Home</a>
            </li>
             <li>
              <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`} onClick={() => setOpen(false)}>About Us</a>
            </li>
             <li>
              <a href="#brands" className={`nav-link ${active === "brands" ? "active" : ""}`} onClick={() => setOpen(false)}>Brands</a>
            </li>
             <li>
              <a href="#services" className={`nav-link ${active === "services" ? "active" : ""}`} onClick={() => setOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#videos" className={`nav-link ${active === "videos" ? "active" : ""}`} onClick={() => setOpen(false)}>Works</a>
            </li>
            <li>
              <a href="#testimonial" className={`nav-link ${active === "testimonial" ? "active" : ""}`} onClick={() => setOpen(false)}>Clients</a>
            </li>
            
           
             


          </ul>

          {/* Right Button */}
          <a href="#contact" className="book-btn">
            Get Quote
          </a>

          {/* Mobile Toggle */}
          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
