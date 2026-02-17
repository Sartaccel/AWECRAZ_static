import React from "react";
import "./About.css";
import PolyParticles from "./PolyParticles";
import Success from "./Success";
import aboutImg from "../../assets/images/sri.jpeg";



export default function About() {
  return (
    <section className="aboutL">

      {/* polygon animated background */}
      <PolyParticles />

      <div className="aboutL-wrap">

        <h2 className="aboutL-title">
          About <span>Us</span>
        </h2>

        <div className="aboutL-grid">

          {/* LEFT CARD */}
          <div className="aboutL-card">
            <p>
              Since 2018, we’ve been a trusted name in the film and advertising
              industry, bringing creativity and excellence to every project.
              As a Film and Advertisement Production company, we’ve proudly
              completed over 175 + advertisement productions and 4 full-length
              movie productions.
            </p>

            <p>
              In 2022, we launched
              <span className="aboutL-brand"> AweCraz Brand Solution</span>,
              a new venture aimed at helping aspiring business owners grow their brands on social media ,with a focus on stratergy,designand impactful delivery,<span className="aboutL-brand"> AweCraz Brand Solution</span>  ,empowers business to reach and engage their audience effectively
            </p>

            <div className="aboutL-tagline">
              We Plan. We Develop. We Design. We Deliver.
            </div>
          </div>

          {/* RIGHT FEATURES */}
         <div className="aboutL-imageCard">
  <img src={aboutImg} alt="Managing Director" />

  <div className="aboutL-mdOverlay">
    <h4>Mr. SreeRam JR</h4>
    <span>Managing Director</span>
  </div>
</div>


        </div>
      </div>
        <Success/>
    </section>
    
  );
}

function Feature({ title, text }) {
  return (
    <div className="aboutL-feature">
      <div className="arrow">»</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  
  );
}
