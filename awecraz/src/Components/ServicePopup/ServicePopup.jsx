import React, { useEffect, useState } from "react";
import "./ServicePopup.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ServicePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closePopup = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-wrapper">

        {/* LEFT SIDE */}
        <div className="popup-left">
          <p>
            Please select service for which you want
            <br /> to schedule an appointment
          </p>

          <h3>Any Questions?</h3>

          <div className="contact-icons">
            <div className="icon-circle">
              <FaPhoneAlt />
            </div>
            <div className="icon-circle whatsapp">
              <FaWhatsapp />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="popup-right">
          <button className="close-btn" onClick={closePopup}>×</button>

          <h2>Services You Are Interested In*</h2>

          <div className="services-grid">
            <label><input type="checkbox" /> Android App Development</label>
            <label><input type="checkbox" /> iOS App Development</label>
            <label><input type="checkbox" /> Hybrid App Development</label>
            <label><input type="checkbox" /> E-Commerce Website</label>
            <label><input type="checkbox" /> Dynamic Website</label>
            <label><input type="checkbox" /> Static Website</label>
            <label><input type="checkbox" /> Web App Development</label>
            <label><input type="checkbox" /> Instagram Marketing</label>
            <label><input type="checkbox" /> Facebook Marketing</label>
            <label><input type="checkbox" /> SEO Marketing</label>
            <label><input type="checkbox" /> Logo Design</label>
            <label><input type="checkbox" /> Brochure Design</label>
          </div>

          <button className="next-btn">Next</button>
        </div>

        {/* NOTEBOOK RINGS */}
        <div className="spiral-line"></div>


      </div>
    </div>
  );
}

export default ServicePopup;
