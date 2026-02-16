import { useEffect, useRef } from "react";

export default function PolyParticles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let w, h, particles;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function init() {
      particles = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 8 + Math.random() * 18,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.5,
        rot: (Math.random() - 0.5) * 0.02,
      }));
    }

    function drawTriangle(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size, p.size);
      ctx.lineTo(-p.size, p.size);
      ctx.closePath();
      ctx.fillStyle = "rgba(120,120,120,0.18)";
      ctx.fill();
      ctx.restore();
    }

    function drawGlow() {
      const g = ctx.createRadialGradient(
        w/2, h/2, 10,
        w/2, h/2, 160
      );
      g.addColorStop(0, "rgba(255,255,255,0.35)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(w/2, h/2, 160, 0, Math.PI*2);
      ctx.fill();
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.y -= p.speed;
        p.angle += p.rot;

        if (p.y < -30) {
          p.y = h + 30;
          p.x = Math.random() * w;
        }

        drawTriangle(p);
      });

      drawGlow();
      requestAnimationFrame(loop);
    }

    resize();
    init();
    loop();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);

  }, []);

  return <canvas ref={ref} className="poly-canvas" />;
}
