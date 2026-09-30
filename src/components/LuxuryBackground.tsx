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

    // Floating Stardust Particles
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

    const stardustColors = [
      "rgba(225, 161, 64, ",  // Gold
      "rgba(52, 211, 153, ",  // Emerald
      "rgba(56, 189, 248, ",  // Sapphire
      "rgba(251, 113, 133, "  // Rose
    ];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.8 + 0.8,
        color: stardustColors[Math.floor(Math.random() * stardustColors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1, // Gently floating upward
        alpha: Math.random() * 0.5 + 0.2,
        maxAlpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    // Aurora Wave Band Definitions
    const auroraWaves = [
      {
        // 1. Golden Amber Aurora
        colorStops: [
          { pos: 0, color: "rgba(225, 161, 64, 0)" },
          { pos: 0.4, color: "rgba(225, 161, 64, 0.22)" },
          { pos: 0.8, color: "rgba(245, 190, 90, 0.08)" },
          { pos: 1, color: "rgba(225, 161, 64, 0)" }
        ],
        yOffset: 0.22,
        amplitude: 110,
        frequency: 0.0022,
        speed: 0.8,
        heightFactor: 0.45
      },
      {
        // 2. Emerald Mint Aurora
        colorStops: [
          { pos: 0, color: "rgba(16, 185, 129, 0)" },
          { pos: 0.35, color: "rgba(52, 211, 153, 0.18)" },
          { pos: 0.75, color: "rgba(16, 185, 129, 0.06)" },
          { pos: 1, color: "rgba(16, 185, 129, 0)" }
        ],
        yOffset: 0.38,
        amplitude: 130,
        frequency: 0.0018,
        speed: 0.6,
        heightFactor: 0.5
      },
      {
        // 3. Sapphire Celestial Aurora
        colorStops: [
          { pos: 0, color: "rgba(14, 165, 233, 0)" },
          { pos: 0.45, color: "rgba(56, 189, 248, 0.16)" },
          { pos: 0.85, color: "rgba(14, 165, 233, 0.05)" },
          { pos: 1, color: "rgba(14, 165, 233, 0)" }
        ],
        yOffset: 0.52,
        amplitude: 140,
        frequency: 0.0015,
        speed: 0.9,
        heightFactor: 0.48
      },
      {
        // 4. Rose Champagne Aurora
        colorStops: [
          { pos: 0, color: "rgba(244, 63, 94, 0)" },
          { pos: 0.4, color: "rgba(251, 113, 133, 0.15)" },
          { pos: 0.8, color: "rgba(225, 161, 64, 0.06)" },
          { pos: 1, color: "rgba(244, 63, 94, 0)" }
        ],
        yOffset: 0.68,
        amplitude: 120,
        frequency: 0.0025,
        speed: 0.7,
        heightFactor: 0.42
      }
    ];

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      const isLightMode = document.documentElement.classList.contains("light");

      // Set additive blending for luminous wave intersections
      ctx.globalCompositeOperation = isLightMode ? "multiply" : "screen";

      // Draw Each Dynamic Aurora Wave Ribbon
      auroraWaves.forEach((wave, idx) => {
        ctx.beginPath();

        const baseY = height * wave.yOffset;
        const waveHeight = height * wave.heightFactor;

        // Top wave edge curve
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= width; x += 25) {
          const dy =
            Math.sin(x * wave.frequency + time * wave.speed + idx) * wave.amplitude +
            Math.cos(x * wave.frequency * 1.5 - time * wave.speed * 0.7) * (wave.amplitude * 0.4);
          ctx.lineTo(x, baseY + dy);
        }

        // Bottom wave edge curve
        for (let x = width; x >= 0; x -= 25) {
          const dy =
            Math.sin(x * wave.frequency + time * wave.speed + idx + 2) * wave.amplitude +
            Math.cos(x * wave.frequency * 1.2 - time * wave.speed * 0.8) * (wave.amplitude * 0.5);
          ctx.lineTo(x, baseY + waveHeight + dy);
        }

        ctx.closePath();

        // Create vertical gradient across wave curtain
        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, baseY + waveHeight + wave.amplitude);
        wave.colorStops.forEach((stop) => {
          let colorVal = stop.color;
          if (isLightMode) {
            // Adjust opacity for crisp light mode contrast
            colorVal = colorVal.replace(/0\.\d+\)/, "0.08)");
          }
          gradient.addColorStop(stop.pos, colorVal);
        });

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Reset composite operation for particles
      ctx.globalCompositeOperation = "source-over";

      // Render Floating Aurora Stardust Particles
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed;
        p.alpha = (Math.sin(p.pulseVal) * 0.5 + 0.5) * p.maxAlpha;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around canvas screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${isLightMode ? p.alpha * 0.4 : p.alpha})`;
        ctx.shadowBlur = isLightMode ? 4 : 12;
        ctx.shadowColor = "rgba(225, 161, 64, 0.6)";
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
      {/* Background Aurora Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
      
      {/* Soft atmospheric gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 light:from-white/20 light:to-white/40 pointer-events-none"></div>
    </div>
  );
}
