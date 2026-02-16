import React, { useEffect, useState } from "react";
import "./Navbar.css";
import awecrazlogo from "../../assets/images/awecrazlogo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
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

            <li className={active === "home" ? "active" : ""}>
              <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
                Home
                <span className="nav-dot"></span>
              </a>
            </li>

            <li className={active === "about" ? "active" : ""}>
              <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
                About
                <span className="nav-dot"></span>
              </a>
            </li>

            <li className={active === "services" ? "active" : ""}>
              <a href="#services" className="nav-link" onClick={() => setOpen(false)}>
                Services
                <span className="nav-dot"></span>
              </a>
            </li>

            <li className={active === "contact" ? "active" : ""}>
              <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact
                <span className="nav-dot"></span>
              </a>
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
