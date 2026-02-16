import React from "react";
import "./Branches.css";
import globe from "../../assets/video/globe.mp4"; // adjust path

function Branches() {
  return (
    <section className="branches-section">
    

      {/* 🔥 Background Video */}
      <video
        className="branches-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={globe} type="video/mp4" />
      </video>

      <div className="branches-content">
        <div className="branches-header">
          <h2>Our Branches</h2>
          
        </div>

        <div className="branches-container">

          <div className="branch-card">
  <div className="map-container">
    <iframe
      title="Nagercoil Branch"
      src="https://www.google.com/maps?q=No.254B/7-1A KP Road Parvathipuram Nagercoil 629003&output=embed"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>

  <div className="branch-info">
    <h4>Nagercoil Branch</h4>
    <p>
      No.254B/7-1A, K.P Road,<br />
      Parvathipuram, Nagercoil - 629003
    </p>

    <a
      href="https://www.google.com/maps?q=No.254B/7-1A KP Road Parvathipuram Nagercoil 629003"
      target="_blank"
      rel="noopener noreferrer"
      className="map-link-btn"
    >
      View on Google Maps →
    </a>
  </div>
</div>
      <div className="branch-card">
  <div className="map-container">
    <iframe
      title="Chennai Branch"
      src="https://www.google.com/maps?q=4/4B Royala Nagar 3rd Main Road Ramapuram Chennai 600082&output=embed"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>

  <div className="branch-info">
    <h4>Chennai Branch</h4>
    <p>
      4/4B, Royala Nagar, 3rd Main Road,<br />
      Ramapuram, Chennai - 600082
    </p>

    <a
      href="https://www.google.com/maps?q=4/4B Royala Nagar 3rd Main Road Ramapuram Chennai 600082"
      target="_blank"
      rel="noopener noreferrer"
      className="map-link-btn"
    >
      View on Google Maps →
    </a>
  </div>
</div>


        </div>
      </div>

    </section>
  );
}

export default Branches;
