import React from "react";
import { motion } from "motion/react";
// @ts-ignore
import logoImg from "../assets/images/aama_logo_crest_1780602662962.png";

interface AAMALogoProps {
  className?: string;
  size?: number;
}

export function AAMALogo({ className = "", size = 72 }: AAMALogoProps) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      id="aama-glowing-logo-container"
    >
      {/* 1. ATMOSPHERIC AMBIENT GOLD GLOWING BACKDROP */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E1A140] via-amber-500 to-amber-300 opacity-50 blur-xl pointer-events-none"
        style={{ scale: 1.2 }}
        animate={{
          scale: [1.18, 1.35, 1.18],
          opacity: [0.45, 0.75, 0.45],
          filter: "drop-shadow(0px 0px 25px rgba(225, 161, 64, 0.7)) blur(18px)"
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        id="aama-ambient-glow"
      />

      {/* 2. DUMP SHADOW UNDERLAY */}
      <div className="absolute inset-0 rounded-full bg-black shadow-2xl border border-[#E1A140]/20 z-0"></div>

      {/* 3. MAIN INTERACTIVE IMAGE CARRIER */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center cursor-pointer border-2 border-[#E1A140]/60 bg-[#0D0B0A] shadow-[0_0_20px_rgba(225,161,64,0.3)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.08,
          borderColor: "rgba(225, 161, 64, 1)",
          boxShadow: "0 0 35px rgba(225, 161, 64, 0.8)",
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="aama-interactable-logo"
      >
        <img
          src={logoImg}
          alt="Institute of Advance Medical Aesthetics Logo"
          referrerPolicy="no-referrer"
          width={size}
          height={size}
          decoding="async"
          className="w-full h-full object-cover select-none pointer-events-none scale-[1.02]"
        />

        {/* Cinematic light sweep sheen effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-[200%]"
          animate={{
            x: ["-100%", "250%"]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5.5,
            ease: "easeInOut",
            delay: 1
          }}
          id="aama-logo-shine-sweep"
        />
      </motion.div>
    </div>
  );
}
