import React, { useEffect, useRef } from "react";
import "./Work.css";

import v1 from "../../assets/video/IMG_3441.MP4";
import v2 from "../../assets/video/IMG_6031.MP4";
import v3 from "../../assets/video/MM JEWELLERY REEL 25.mp4";
import v4 from "../../assets/video/HELLO MOBILES REEL 9 FINAL.mp4";
import v5 from "../../assets/video/DR RUTH REEL 34 FINAL.mp4";
import v6 from "../../assets/video/DR SELVAPRIYA REEL 31 FINAL.mp4";
import v7 from "../../assets/video/IMG_6020.MP4";
import v8 from "../../assets/video/IMG_6030.MP4";


const videos = [v1, v2,v3, v4, v5, v6, v7, v8];

export default function AllVideo() {
  const videoRefs = useRef([]);

  /* ✅ autoplay on view + pause off view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const vid = entry.target;

          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach(v => v && obs.observe(v));
    return () => obs.disconnect();
  }, []);

  /* ✅ only one plays at a time */
  const handlePlay = (index) => {
    videoRefs.current.forEach((vid, i) => {
      if (i !== index && vid) {
        vid.pause();
      }
    });
  };

  return (
    <section className="videoSec">

      <h2 className="videoTitle">
        Our <span>Works</span>
      </h2>

      <div className="videoGrid">
        {videos.map((src, i) => (
          <div className="videoCard" key={i}>
            <div className="sketchFrame">
              <video
                src={src}
                muted
                playsInline
                loop
                controls
                ref={el => videoRefs.current[i] = el}
                onPlay={() => handlePlay(i)}
              />
              <div className="eraserMark"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
