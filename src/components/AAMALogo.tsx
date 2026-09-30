import React from "react";

interface AAMALogoProps {
  className?: string;
  size?: number;
  customSrc?: string;
}

export function AAMALogo({ className = "", size = 64, customSrc }: AAMALogoProps) {
  // Directly target public/Asset 1@4x.png with encoded space, or customSrc
  const logoUrl = customSrc || "/Asset%201@4x.png";

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
      id="iama-brand-logo-container"
    >
      {/* Ambient Luxury Gold Radial Glow */}
      <div 
        className="absolute inset-0 rounded-full bg-[#E1A140]/25 blur-lg pointer-events-none"
        style={{ transform: "scale(1.2)" }}
      />

      {/* Clean Unclipped Pristine Image Frame */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img
          src={logoUrl}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes("logo.png")) {
              target.src = "/logo.png";
            }
          }}
          alt="IAMA Institute Logo"
          referrerPolicy="no-referrer"
          width={size}
          height={size}
          decoding="async"
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(225,161,64,0.45)] transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
