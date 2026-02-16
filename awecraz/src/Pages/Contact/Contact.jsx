import React from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Whether you have a question or just want to say hello — we're here
          for you. Fill out the form and our friendly team will get back to you.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="info-container">
          <div className="info-item">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>1001 Riverside Avenue, Jacksonville 32207</p>
            </div>
          </div>
          

          <div className="info-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>Abarnasreeram62@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>Awecrazstudios@gmail.com</p>

            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Call</h4>
              <p>8925661662</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <FaClock />
            </div>
            <div>
              <h4>Open Hours</h4>
              <p>Mon - Sat: 11AM - 23PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="form-container">
          <form>
            
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea rows="6" placeholder="Message" required></textarea>

            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
