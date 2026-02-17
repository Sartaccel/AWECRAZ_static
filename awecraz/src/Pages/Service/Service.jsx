import React, { useEffect } from "react";
import "./Service.css";
import PolyParticles from "../About/PolyParticles";

const services = [
    {
    title: "Advertisement",
    color: "#ff3b7f",
    text: "We craft high-impact advertisements that capture attention and drive results across theatre, digital, and broadcast platforms. From concept to final release, we focus on storytelling, visual appeal, and audience connection to maximize brand reach."
  },
  {
    title: "Content Creation",
    color: "#3ba4ff",
    text: "We create engaging content tailored for social media, web, and campaigns — including videos, reels, scripts, and visual creatives. Every piece is designed to align with your brand voice and convert viewers into customers."
  },
  {
    title: "Production",
    color: "#ffc107",
    text: "Our production team handles end-to-end execution including pre-production planning, shooting, direction, and post-production. We deliver cinema-quality output using modern tools and professional workflows."
  },
  {
    title: "Marketing",
    color: "#4caf50",
    text: "We design data-driven marketing strategies that grow visibility and engagement. From campaign planning to platform optimization, we help brands reach the right audience at the right time."
  },
  {
    title: "Branding",
    color: "#7c4dff",
    text: "We build strong brand identities through logo systems, visual language, messaging, and positioning. Our branding approach ensures consistency, recall value, and long-term recognition."
  },
  {
    title: "Technical Support",
    color: "#ff5252",
    text: "Our technical team ensures smooth delivery across platforms with reliable support for media formats, deployment, integrations, and performance optimization."
  },
 {
  title: "Legal",
  color: "#0edee9",  
  text: "We support production and media projects with essential legal coordination — including release forms, licensing guidance, and compliance assistance — so your campaigns run safely and smoothly."
},
{
  title: "Designing",
  color: "#97f711",   
  text: "We create visually compelling designs for digital and print — including posters, creatives, UI assets, and campaign visuals — focused on clarity, impact, and brand consistency."
}
];

export default function Service() {

  useEffect(() => {
    const cards = document.querySelectorAll(".svc-card");

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(c => obs.observe(c));
  }, []);

 
   return (
  <section className="svc-section">

    {/* ✅ background animation */}
    <PolyParticles />

    <h2 className="svc-title">
      Our <span>Services</span>
    </h2>

    <div className="svc-grid">
      {services.map((s, i) => (
        <div
          key={i}
          className="svc-card"
          style={{
            "--accent": s.color,
            "--delay": `${i * 0.12}s`
          }}
        >
          <div className="svc-card-inner">
            <div className="svc-head">{s.title}</div>
            <p>{s.text}</p>
            <span className="svc-light"></span>
          </div>
        </div>
      ))}
    </div>

  </section>
);
};
