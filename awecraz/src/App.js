import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Branches from "./Pages/Branches/Branches";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* All sections inside one page */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <section id="Branches">
        <Branches />
      </section>


      <Footer />
    </>
  );
}

export default App;
