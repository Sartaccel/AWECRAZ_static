import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Work.css";

import v1 from "../../assets/video/IMG_3442.MP4";
import v2 from "../../assets/video/IMG_6021.MP4";
import v3 from "../../assets/video/MM JEWELLERY REEL 25.mp4";

const videos = [v1, v2, v3];

export default function Video() {
  const navigate = useNavigate();
  const videoRefs = useRef([]);

  const visibleVideos = videos.slice(0, 2);

  /* ✅ autoplay when visible + pause when hidden */
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

  /* ✅ pause others when one plays */
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
        Our <span>Theatre</span> Ads
      </h2>

      <div className="videoGrid">
        {visibleVideos.map((src, i) => (
          <div className="videoCard" key={i}>
            <div className="sketchFrame">
              <video
                src={src}
                muted
                playsInline
                loop
                controls
                ref={el => videoRefs.current[i] = el}
                onPlay={() => handlePlay(i)}   /* ⭐ key line */
              />
              <div className="eraserMark"></div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="seeMoreBtn"
        onClick={() => navigate("/videos")}
      >
        ✏️ See More
      </button>

    </section>
  );
}
