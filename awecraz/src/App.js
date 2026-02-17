import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Branches from "./Pages/Branches/Branches";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AdvantagesSketch from "./Pages/Advantages/AdvantagesSketch";
import ServicePopup from "./Components/ServicePopup/ServicePopup";
import Testimonial from "./Pages/Testimonial/Testimonial";    
import Brands from "./Pages/Brands/Brands";
import Video from "./Pages/Work/Video";
import AllVideo from "./Pages/Work/Allvideo";



function App() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ServicePopup
              show={showPopup}
              onClose={() => setShowPopup(false)}
            />

            <Navbar />

            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="brands"><Brands /></section>
            <section id="services"><Service /></section>
            <section id="videos"><Video /></section>
            <section id="advantages"><AdvantagesSketch /></section>
            <section id="testimonial"><Testimonial /></section>
            <section id="contact"><Contact /></section>
            <section id="branches"><Branches /></section>

            <Footer />
          </>
        }
      />

      <Route
        path="/videos"
        element={
          <>
            <Navbar />
            <AllVideo />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;