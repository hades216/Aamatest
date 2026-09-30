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

    // Floating Brand Gold Stardust Particles
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

    // Strictly Brand Theme Colors: Champagne Gold, Warm Amber, Luminous Pearl Gold
    const goldParticleColors = [
      "rgba(225, 161, 64, ",  // Primary Gold (#E1A140)
      "rgba(245, 197, 104, ", // Champagne Gold (#F5C568)
      "rgba(194, 133, 39, ",  // Warm Amber (#C28527)
      "rgba(255, 235, 179, "  // Pearl Gold (#FFEBB3)
    ];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: goldParticleColors[Math.floor(Math.random() * goldParticleColors.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.3 - 0.08, // Gently drifting upward
        alpha: Math.random() * 0.4 + 0.15,
        maxAlpha: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.018 + 0.008,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    // Aurora Wave Bands - Strictly Monochromatic Gold & Amber Brand Palette
    const goldAuroraWaves = [
      {
        // Wave 1: Primary Champagne Gold (#E1A140)
        colorStops: [
          { pos: 0, color: "rgba(225, 161, 64, 0)" },
          { pos: 0.4, color: "rgba(225, 161, 64, 0.18)" },
          { pos: 0.8, color: "rgba(245, 197, 104, 0.06)" },
          { pos: 1, color: "rgba(225, 161, 64, 0)" }
        ],
        yOffset: 0.2,
        amplitude: 110,
        frequency: 0.002,
        speed: 0.7,
        heightFactor: 0.45
      },
      {
        // Wave 2: Warm Bronze Amber (#C28527)
        colorStops: [
          { pos: 0, color: "rgba(194, 133, 39, 0)" },
          { pos: 0.35, color: "rgba(194, 133, 39, 0.14)" },
          { pos: 0.75, color: "rgba(225, 161, 64, 0.05)" },
          { pos: 1, color: "rgba(194, 133, 39, 0)" }
        ],
        yOffset: 0.38,
        amplitude: 130,
        frequency: 0.0016,
        speed: 0.5,
        heightFactor: 0.5
      },
      {
        // Wave 3: Pearl Gold (#FFEBB3)
        colorStops: [
          { pos: 0, color: "rgba(255, 235, 179, 0)" },
          { pos: 0.45, color: "rgba(245, 197, 104, 0.12)" },
          { pos: 0.85, color: "rgba(225, 161, 64, 0.04)" },
          { pos: 1, color: "rgba(255, 235, 179, 0)" }
        ],
        yOffset: 0.55,
        amplitude: 125,
        frequency: 0.0022,
        speed: 0.8,
        heightFactor: 0.46
      },
      {
        // Wave 4: Deep Amber Metallic (#9C6C1F)
        colorStops: [
          { pos: 0, color: "rgba(156, 108, 31, 0)" },
          { pos: 0.4, color: "rgba(225, 161, 64, 0.12)" },
          { pos: 0.8, color: "rgba(194, 133, 39, 0.04)" },
          { pos: 1, color: "rgba(156, 108, 31, 0)" }
        ],
        yOffset: 0.72,
        amplitude: 115,
        frequency: 0.0018,
        speed: 0.6,
        heightFactor: 0.42
      }
    ];

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      const isLightMode = document.documentElement.classList.contains("light");

      ctx.globalCompositeOperation = isLightMode ? "multiply" : "screen";

      // Draw Gold Aurora Wave Ribbons
      goldAuroraWaves.forEach((wave, idx) => {
        ctx.beginPath();

        const baseY = height * wave.yOffset;
        const waveHeight = height * wave.heightFactor;

        ctx.moveTo(0, baseY);

        for (let x = 0; x <= width; x += 25) {
          const dy =
            Math.sin(x * wave.frequency + time * wave.speed + idx) * wave.amplitude +
            Math.cos(x * wave.frequency * 1.4 - time * wave.speed * 0.6) * (wave.amplitude * 0.35);
          ctx.lineTo(x, baseY + dy);
        }

        for (let x = width; x >= 0; x -= 25) {
          const dy =
            Math.sin(x * wave.frequency + time * wave.speed + idx + 2) * wave.amplitude +
            Math.cos(x * wave.frequency * 1.1 - time * wave.speed * 0.7) * (wave.amplitude * 0.4);
          ctx.lineTo(x, baseY + waveHeight + dy);
        }

        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, baseY + waveHeight + wave.amplitude);
        wave.colorStops.forEach((stop) => {
          let colorVal = stop.color;
          if (isLightMode) {
            colorVal = colorVal.replace(/0\.\d+\)/, "0.06)");
          }
          gradient.addColorStop(stop.pos, colorVal);
        });

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      // Render Floating Gold Stardust Particles
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
        ctx.fillStyle = `${p.color}${isLightMode ? p.alpha * 0.35 : p.alpha})`;
        ctx.shadowBlur = isLightMode ? 3 : 10;
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
      {/* Gold Aurora Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
      
      {/* Soft atmospheric gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 light:from-white/10 light:to-white/30 pointer-events-none"></div>
    </div>
  );
}
