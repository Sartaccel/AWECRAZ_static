import React, { useEffect, useRef, useState } from "react";
import "./Success.css";

/* 🔢 Counter */
function Counter({ end, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return; // wait until visible

    let current = 0;
    const step = Math.ceil(end / 40);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setValue(current);
    }, 30);

    return () => clearInterval(timer);
  }, [end, start]);

  return <span>{value}+</span>;
}

export default function Success() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  /* 👀 observe scroll visibility */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // trigger once
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="success" ref={ref}>
      <div className="success-wrap">

        <h2 className="success-title">
          Our Success in <span>Last 7 Years</span> 
        </h2>

        <p className="success-desc">
          We deliver impactful solutions that empower brands, achieve high client
          satisfaction, and drive innovative campaigns. Our commitment to
          excellence and creativity reflects our passion for helping businesses succeed.
        </p>

        <div className="success-stats">

          <div className="success-item">
            <div className="success-number">
              <Counter end={175} start={visible} />
            </div>
            <div className="success-label">
              Commercial Theatre Advertisements
            </div>
          </div>

          <div className="success-item">
            <div className="success-number">
              <Counter end={4} start={visible} />
            </div>
            <div className="success-label">Films</div>
          </div>
<div className="success-item">
    <div className="success-number">
      <Counter end={30} start={visible} />
    </div>
    <div className="success-label">Our Brands</div>
  </div>
        </div>

      </div>
    </section>
  );
}
