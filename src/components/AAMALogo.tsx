import React from "react";
// Import default bundled logo asset as fallback
// @ts-ignore
import defaultLogoImg from "../assets/images/aama_logo_crest_1780602662962.png";

interface AAMALogoProps {
  className?: string;
  size?: number;
  customSrc?: string;
}

export function AAMALogo({ className = "", size = 54, customSrc }: AAMALogoProps) {
  // Direct logo URL resolution: customSrc -> /logo.png -> default bundled asset
  const logoUrl = customSrc || "/logo.png";

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      id="aama-logo-container"
    >
      {/* Glow aura accent */}
      <div 
        className="absolute inset-0 rounded-full bg-[#E1A140]/30 blur-md pointer-events-none"
        style={{ transform: "scale(1.15)" }}
      />

      {/* Main Logo Image Container */}
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-[#E1A140]/60 bg-[#0D0B0A] shadow-md">
        <img
          src={logoUrl}
          onError={(e) => {
            // Fallback to bundled asset if /logo.png is not found or fails
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== defaultLogoImg) {
              target.src = defaultLogoImg;
            }
          }}
          alt="IAMA Institute Logo"
          referrerPolicy="no-referrer"
          width={size}
          height={size}
          decoding="async"
          className="w-full h-full object-contain p-0.5 select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
