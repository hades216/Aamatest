import React, { useEffect, useState, useRef } from "react";

interface ParallaxHeaderProps {
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
  speed?: number; // default 0.3
  overlayOpacity?: string;
}

export function ParallaxHeader({
  imageSrc,
  imageAlt = "Aesthetic Medicine Training Background",
  children,
  className = "py-16 md:py-24 px-4 md:px-8",
  speed = 0.35,
  overlayOpacity = "opacity-40"
}: ParallaxHeaderProps) {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate scroll distance relative to viewport top
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              const scrolled = window.scrollY - (containerRef.current.offsetTop || 0);
              setOffsetY(scrolled * speed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial sync

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden border-b border-white/10 text-center bg-neutral-950 ${className}`}
    >
      {/* Parallax Background Image Container */}
      <div 
        className="absolute inset-0 -top-12 -bottom-12 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          decoding="async"
          style={{
            transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
            willChange: "transform",
            transition: "transform 0.08s cubic-bezier(0, 0, 0.2, 1)"
          }}
          className={`w-full h-full object-cover object-center ${overlayOpacity} filter contrast-125 saturate-110`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600";
          }}
        />
        
        {/* Atmospheric Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-neutral-950/75 to-neutral-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,161,64,0.12)_0,transparent_75%)]"></div>

        {/* Diagonal anatomical grid guides */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="100%" y1="20%" x2="0" y2="80%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="50%" cy="50%" r="220" stroke="#d4af37" strokeWidth="0.5" opacity="0.4" fill="none" />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
