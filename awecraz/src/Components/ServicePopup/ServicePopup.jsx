import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import wrinklePaper from "../../assets/images/wrinklepaper.jpg";
import "./ServicePopup.css";

const servicesList = [
  "Theater commercial ads",
  "Digital Marketing",
  "Instagram Marketing",
  "Facebook Marketing",
  "SEO Marketing",
  "Android App Development",
  "iOS App Development",
  "E-Commerce Website",
  "Dynamic Website",
  "Static Website",
  "Web App Development",
  "Logo Design",
  "Brochure Design",
];

function ServicePopup({ show, onClose }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [step, setStep] = useState(1);
  const [serviceError, setServiceError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const resetPopup = () => {
    setStep(1);
    setSelectedServices([]);
    setFormData({ name: "", email: "" });
    setErrors({});
    setServiceError("");
    onClose();
  };

  const handleCheckboxChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(
        selectedServices.filter((item) => item !== service)
      );
    } else {
      setSelectedServices([...selectedServices, service]);
    }

    // remove error when user selects
    setServiceError("");
  };

  const handleNext = () => {
    if (selectedServices.length === 0) {
      setServiceError("Please select at least one service.");
      return;
    }

    setServiceError("");
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "94846a53-13f5-4b4d-8746-f7d0ff8addda", // 🔥 Replace this
        name: formData.name,
        email: formData.email,
        message: `Hello, I would like to connect with your team regarding the following services: ${selectedServices.join(", ")}Please get in touch at your convenience.`,
        subject: "📌New Service Inquiry from AWECRAZ Website",
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStep(3);
      setTimeout(() => {
        resetPopup();
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    console.error(error);
    alert("Submission failed.");
  }
};


  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <img src={wrinklePaper} alt="paper" className="paper-bg" />

        <button className="close-btn" onClick={resetPopup}>×</button>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="row g-0 content-wrapper">

            <div className="col-md-4 left-section d-flex">
              <div className="left-content">
                <p>
                  Please select service for which you want to schedule an appointment
                </p>
                <h3>Any Questions?</h3>

                <div className="left-icons">
                  <a href="tel:+918925661662" className="icon-circle">
                    <FaPhoneAlt />
                  </a>
                  <a
                    href="https://wa.me/919384627543"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-circle whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 p-4">
  <h4 className="text-center mb-2 services-heading">
    Services You Are Interested In*
  </h4>

  {serviceError && (
    <p className="text-danger text-center mb-3">
      {serviceError}
    </p>
  )}

  {/* DESKTOP VIEW */}
  <div className="d-none d-md-block">
    <div className="row">
      {servicesList.map((service, index) => (
        <div className="col-md-6 mb-2" key={index}>
          <div className="custom-check">
            <input
              type="checkbox"
              id={`service-${index}`}
              checked={selectedServices.includes(service)}
              onChange={() => handleCheckboxChange(service)}
            />
            <label htmlFor={`service-${index}`}>
              {service}
            </label>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* MOBILE VIEW - DROPDOWN */}
  <div className="d-md-none">
    <button
      type="button"
      className="dropdown-btn"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {selectedServices.length > 0
        ? `${selectedServices.length} Service(s) Selected`
        : "Select Services"}
    </button>

    {showDropdown && (
      <div className="dropdown-list">
        {servicesList.map((service, index) => (
          <div className="custom-check mb-2" key={index}>
            <input
              type="checkbox"
              id={`mobile-service-${index}`}
              checked={selectedServices.includes(service)}
              onChange={() => handleCheckboxChange(service)}
            />
            <label htmlFor={`mobile-service-${index}`}>
              {service}
            </label>
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="text-center mt-4">
    <button
      type="button"
      className="next-btn"
      onClick={handleNext}
    >
      Next
    </button>
  </div>
</div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
<div className="p-4 content-wrapper form-wrapper">
            <h4 className="text-center mb-4">Fill Your Details</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "error-input" : ""}`}
                />
                {errors.name && (
                  <small className="error-text">{errors.name}</small>
                )}
              </div>

              <div className="mb-3">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "error-input" : ""}`}
                />
                {errors.email && (
                  <small className="error-text">{errors.email}</small>
                )}
              </div>

              <div className="mb-3">
                <label>Interested Services</label>
                <textarea
                  className="form-control"
                  value={`Hello, I would like to connect with your team regarding the following services: ${selectedServices.join(
                    ", "
                  )}. Please get in touch at your convenience.`}
                  readOnly
                />
              </div>

              <div className="text-center">
                <button type="submit" className="next-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="success-box content-wrapper">
            <h3>🎉 Thank You!</h3>
            <p>Our team will contact you soon.</p>

            <div className="text-center mt-4">
              <button className="next-btn" onClick={resetPopup}>
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ServicePopup;
