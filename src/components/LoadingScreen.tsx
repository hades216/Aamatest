import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Award } from "lucide-react";
// @ts-ignore
import logoImg from "../assets/images/aama_logo_crest_1780602662962.png";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export function LoadingScreen({ onComplete, minDurationMs = 2200 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / minDurationMs) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDurationMs, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="aama-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100000] bg-[#060607] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          id="aama-starting-loading-screen"
        >
          {/* 1. LUXURY BACKGROUND AMBIENT GLOW & PARTICLES */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-[#0a0807] to-[#040405] pointer-events-none" />
          
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E1A140]/20 via-amber-600/10 to-transparent blur-3xl pointer-events-none"
          />

          {/* BACKGROUND DECORATIVE GRID */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#E1A140_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          {/* 2. CENTER BRAND FAVICON EMBLEM CREST WITH ROTATING GOLD ORBITS */}
          <div className="relative flex flex-col items-center justify-center mb-10 z-10">
            {/* Outer Rotating Counter Orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#E1A140]/30 pointer-events-none"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dotted border-[#E1A140]/20 pointer-events-none"
            />

            {/* Glowing Backdrop Circle */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(225, 161, 64, 0.3)",
                  "0 0 70px rgba(225, 161, 64, 0.7)",
                  "0 0 30px rgba(225, 161, 64, 0.3)",
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0E0C0A] border-2 border-[#E1A140] p-1.5 flex items-center justify-center shadow-2xl overflow-hidden"
            >
              {/* Favicon Crest Image */}
              <img
                src={logoImg}
                alt="IAAMA Academy Crest Logo"
                className="w-full h-full object-cover rounded-full select-none pointer-events-none"
              />

              {/* Shimmer Sweep Overlay */}
              <motion.div
                animate={{ x: ["-100%", "250%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Top UK Accreditation Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/40 px-3.5 py-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#E1A140] rounded-full backdrop-blur-md shadow-md"
            >
              <ShieldCheck size={13} className="text-[#E1A140]" />
              <span>UK CPD ACCREDITED ACADEMY</span>
            </motion.div>
          </div>

          {/* 3. BRAND TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center space-y-2 z-10 max-w-md"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light uppercase tracking-[0.28em] text-[#E1A140]">
              IAAMA <span className="italic font-normal lowercase font-serif text-amber-300">Academy</span>
            </h1>
            <p className="text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase font-semibold text-neutral-400">
              Academy of Advanced Medical Aesthetics
            </p>
          </motion.div>

          {/* 4. PROGRESS BAR & PERCENTAGE COUNTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full max-w-xs sm:max-w-sm mt-8 space-y-3 z-10 text-center"
          >
            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-neutral-900 border border-[#E1A140]/30 rounded-full overflow-hidden p-0.5 relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-[#E1A140] to-amber-300 rounded-full shadow-[0_0_12px_rgba(225,161,64,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage & Loading Status */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
                <Sparkles size={12} className="text-[#E1A140] animate-spin" style={{ animationDuration: "3s" }} />
                <span>Initializing Clinical Suite...</span>
              </span>
              <span className="text-[#E1A140] font-bold tracking-wider text-sm">
                {progress}%
              </span>
            </div>
          </motion.div>

          {/* Bottom Luxury Quote / Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 text-center px-4"
          >
            Pioneering Gold-Standard Aesthetic Training Across Pakistan
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
