import React from "react";
import "./Contact.css";


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
    </section>
  );
}

export default Contact;
