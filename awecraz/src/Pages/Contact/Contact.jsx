import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "fae08720-863f-409f-999d-4c079d4cc065", // 🔥 Replace with your key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Message from Website",
          from_name: "Awecraz Brand Solution",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Submission failed.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Whether you have a question or just want to say hello — we're here for you.
        </p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          {/* Message */}
          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <div className="btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && <p className="form-status">{status}</p>}

        </form>
      </div>
    </section>
  );
}

export default Contact;
