import React from "react";
import "./AdvantagesSketch.css";

const items = [
  {
    title: "24/7 Support",
    text: "Always here when you need us — providing support around the clock."
  },
  {
    title: "Built on Trust",
    text: "Reliability and integrity at the heart of every partnership."
  },
  {
    title: "Competitive Pricing",
    text: "Best value without compromising on quality."
  }
];

export default function AdvantagesSketch() {
  return (
    <section className="sk-section">

      <div className="sk-paper"></div>

      <h4 className="sk-mini">Advantages</h4>
      <h2 className="sk-title">
        Why should you choose Awecraz  Studioz
      </h2>

      <div className="sk-grid">
        {items.map((x, i) => (
          <div
            key={i}
            className="sk-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="sk-icon">✎</div>
            <h3>{x.title}</h3>
            <p>{x.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
