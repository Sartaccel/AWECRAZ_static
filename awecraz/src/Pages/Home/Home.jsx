import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaAngleRight } from "react-icons/fa";

import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const slides = [
  {
    image: slide1,
    title: "Welcome to AWECRAZ Studioz",
    subtitle: "Empowering Your Brand with Creativity and Quality.",
    button: "Get Started",
    link:"contact"
  },
  {
    image: slide2,
   title: "Creative Innovation Delivered",
  subtitle: "Strategic design and technology that move your brand forward.",
    button: "Our Services",
    link:"services"
  },
  {
    image: slide3,
    title: "Accelerate Your Success",
  subtitle: "We blend creativity and strategy to fuel measurable growth.",
    button: "Contact Us",
    link:"contact"
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
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
<a href={`#${slide.link}`} className="hero-btn">
  {slide.button}
  <span className="arrow-group">
    <FaAngleRight />
    <FaAngleRight />
    <FaAngleRight />
  </span>
</a>          </div>
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
