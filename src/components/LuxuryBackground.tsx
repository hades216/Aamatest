import React, { useEffect, useRef } from "react";

export function LuxuryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Floating luminous luxury particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }> = [];

    const particleColors = [
      "rgba(225, 161, 64, ", // Champagne Gold
      "rgba(245, 230, 211, ", // Pearl
      "rgba(210, 140, 50, "   // Rich Amber
    ];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.15,
        maxAlpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.015 + 0.008,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. DYNAMIC FLUID GOLD LUXURY GRADIENT WAVES
      const grad1 = ctx.createRadialGradient(
        width * 0.25 + Math.sin(time * 0.6) * 180,
        height * 0.3 + Math.cos(time * 0.5) * 120,
        80,
        width * 0.25,
        height * 0.3,
        width * 0.85
      );
      grad1.addColorStop(0, "rgba(225, 161, 64, 0.15)"); // Gold
      grad1.addColorStop(0.5, "rgba(245, 230, 211, 0.07)"); // Pearl
      grad1.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 0.7) * 220,
        height * 0.75 + Math.sin(time * 0.6) * 180,
        120,
        width * 0.75,
        height * 0.75,
        width * 0.95
      );
      grad2.addColorStop(0, "rgba(210, 140, 50, 0.12)"); // Amber
      grad2.addColorStop(0.5, "rgba(225, 161, 64, 0.05)"); // Gold
      grad2.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Organic animated silk wave curves
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(225, 161, 64, ${0.04 + i * 0.02})`;
        
        for (let x = 0; x <= width; x += 35) {
          const y = height * (0.15 + i * 0.18) +
            Math.sin(x * 0.0035 + time * 1.2 + i) * 90 +
            Math.cos(x * 0.0025 - time * 0.9) * 60;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 2. LUMINOUS GLOWING PARTICLES
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed;
        p.alpha = (Math.sin(p.pulseVal) * 0.5 + 0.5) * p.maxAlpha;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(225, 161, 64, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
}
