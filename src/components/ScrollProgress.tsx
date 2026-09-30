import React, { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[110] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-amber-600 via-[#E1A140] to-amber-200 transition-all duration-150 shadow-[0_0_10px_#E1A140]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
