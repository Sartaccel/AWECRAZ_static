import React from "react";
import "./Brands.css";

/* import your brand images */
import b1 from "../../assets/images/1.png";
import b2 from "../../assets/images/2.png";
import b3 from "../../assets/images/3.png";
import b4 from "../../assets/images/4.png";
import b5 from "../../assets/images/5.png";
import b6 from "../../assets/images/6.png";
import b7 from "../../assets/images/7.png";
import b8 from "../../assets/images/8.png";
import b9 from "../../assets/images/9.png";
import b10 from "../../assets/images/10.png";
import b11 from "../../assets/images/11.png";
import b12 from "../../assets/images/12.png";
import b13 from "../../assets/images/13.png";
import b14 from "../../assets/images/14.png";
import b15 from "../../assets/images/ASH LOGO.png";
import b16 from "../../assets/images/IMG_4295.png";
import b17 from "../../assets/images/InShot_20230928_164256944.jpg.jpeg";
import b18 from "../../assets/images/LOGO 2.jpg.jpeg";
import b19 from "../../assets//images/MM JEWELLERS.jpg.jpeg";
import b20 from "../../assets/images/NAWABS-LOGO-2.png";
import b21 from "../../assets/images/NEETX.png";
import b22 from "../../assets/images/SELVA PRIYA LOGO.png";
import b23 from "../../assets/images/SJ-COSMETIC.gif";
import b24 from "../../assets/images/akshayam.jpg.jpeg";
import b25 from "../../assets/images/deevipani logo.jpg.jpeg";
import b27 from "../../assets/images/image.png";
import b28 from "../../assets/images/kvj.jpeg";
import b29 from "../../assets/images/xfo.jpeg";
import b30 from "../../assets/images/Enterkey solution.png";

const logos = [
  b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,
  b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b27,b28,b29,b30
];

/* duplicate for seamless loop */
const rowA = [...logos, ...logos];
const rowB = [...logos.slice().reverse(), ...logos.slice().reverse()];

export default function Brands() {
  return (
    <section className="brands">
      <h2 className="brands-title">Our <span >Brands</span> </h2>

      {/* Row → Right */}
      <div className="brand-row">
        <div className="brand-track scroll-right">
          {rowA.map((src, i) => (
            <div className="brand-box" key={"a"+i}>
              <img src={src} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      {/* Row → Left */}
      <div className="brand-row">
        <div className="brand-track scroll-left">
          {rowB.map((src, i) => (
            <div className="brand-box" key={"b"+i}>
              <img src={src} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
