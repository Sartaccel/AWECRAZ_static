import React, { useState, useEffect } from "react";
import "./Home.css";

import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const slides = [
  {
    image: slide1,
    title: "Creative Digital Agency",
    subtitle: "We build powerful brands with stunning visuals.",
    button: "Get Started"
  },
  {
    image: slide2,
    title: "Innovative Solutions",
    subtitle: "Turning ideas into digital experiences.",
    button: "Our Services"
  },
  {
    image: slide3,
    title: "Grow Your Business",
    subtitle: "We help you scale with smart strategies.",
    button: "Contact Us"
  }
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content container">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="hero-btn">{slide.button}</button>
          </div>
        </div>
      ))}

      {/* ✅ Dots Navigation */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Home;
