import React from "react";
import "./Footer.css";
import awecrazlogo from "../../assets/images/awecrazlogo.png";

import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo Section */}
          <div className="col-lg-3 col-md-6">
            <img
              src={awecrazlogo}
              alt="Awecraz Brand Solution"
              className="img-fluid mb-3 footer-logo"
            />

            <p className="footer-desc">
              Creative digital solutions that bring your brand to life.
            </p>

            <div className="d-flex gap-3 mt-3 social-icons">
              <a href="https://www.instagram.com/awecrazbrandsolution/" target="_blank"><FaInstagram /></a>
              <a href="https://wa.me/9384627543"  target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Clients */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Our Clients & Their Stories</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Our Clients</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact</h5>

            <p className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              Ramapuram , Chennai 600082
            </p>
            <p className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              Parvathipuram, Nagercoil - 629003
            </p>

            

            <p className="contact-item">
              <FaEnvelope className="contact-icon" />
                awecrazstudios@gmail.com
           </p>

            <p className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              +91 892 566 1662
            </p>

            <p className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              +91 938 462 7543
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="row mt-5 pt-4 border-top footer-bottom text-center">
          <div className="col-md-6 mb-2 mb-md-0">
            © {new Date().getFullYear()} Created with{" "}
            <strong>Awecrazstudioz</strong>
          </div>

          <div className="col-md-6">
            Design & Develop By{" "}
            <a
              href="https://enterkeysolutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enterkey Solutions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
