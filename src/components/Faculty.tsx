import React from "react";
import { Award, ShieldCheck, Instagram, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

// @ts-ignore
import drShumailaImg from "../assets/images/bright_hero_model_1781221945218.jpg";

export function Faculty() {
  return (
    <section className="bg-neutral-950 light:bg-stone-50 py-20 px-4 md:px-8 relative z-10 border-b border-white/10 light:border-neutral-200" id="faculty-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <GraduationCap size={44} className="text-[#E1A140] mx-auto mb-4" />
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
            Scientific Advisory &amp; Academic Direction
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white light:text-neutral-900 uppercase font-editorial-heading">
            Academic Direction &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">mentorship</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E1A140] mx-auto mt-4 mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-300 light:text-neutral-700 font-sans font-normal leading-relaxed">
            Learn Aesthetic Medicine directly from <strong>Dr. Shumaila Khan</strong>, Consultant Dermatologist and certified authority in clinical dermatological therapeutics, lasers, and facial vector resuspension.
          </p>
        </div>

        {/* --- DR. SHUMAILA KHAN PROFILE CARD --- */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-neutral-900 light:bg-white border border-white/15 light:border-neutral-300 hover:border-[#E1A140]/60 rounded-none p-6 md:p-10 flex flex-col md:flex-row gap-8 transition-colors duration-300 shadow-none relative overflow-hidden group"
            id="dr-shumaila-faculty-card"
          >
            {/* Photo component */}
            <div className="w-full md:w-64 shrink-0 font-sans">
              <div className="aspect-[3/4] w-full rounded-none overflow-hidden border border-[#E1A140]/40 shadow-none relative bg-neutral-950">
                <img
                  src={drShumailaImg}
                  alt="Dr. Shumaila Khan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Technical Board Registration badge */}
              <div className="mt-3.5 bg-[#E1A140]/10 backdrop-blur-md border border-[#E1A140]/30 py-2 px-3.5 rounded-full text-xs font-bold text-[#E1A140] text-center tracking-wider uppercase font-mono">
                PM&amp;DC Board-Certified Dermatologist
              </div>

              {/* Direct Instagram Link */}
              <a
                href="https://www.instagram.com/dr.shumailakhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-[#E1A140] backdrop-blur-md text-black hover:bg-amber-300 py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md rounded-full border border-[#E1A140]/60"
              >
                <Instagram size={15} />
                <span>@dr.shumailakhan</span>
              </a>
            </div>

            {/* Details column */}
            <div className="text-left flex flex-col justify-between font-sans flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white light:text-neutral-900 font-editorial-heading uppercase tracking-tight">
                    Dr. Shumaila Khan
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#E1A140] uppercase tracking-wider font-mono mt-1">
                    Academic Director &amp; Lead Consultant Dermatologist
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 light:text-neutral-700 leading-relaxed">
                  Dr. Shumaila Khan is a leading authority in clinical dermatology, energy-based devices, and aesthetic facial vector resuspension in Pakistan. With over 15 years of consulting experience, she leads every clinical syllabus at AAMA Academy, training doctors on 1:1 live patient models with strict anatomical safety protocols.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 light:border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-400 light:text-neutral-500 font-mono">
                  15+ Years Clinical Leadership
                </span>
                <a
                  href="https://www.instagram.com/dr.shumailakhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-[#E1A140] hover:text-amber-300 font-bold flex items-center gap-1 font-mono"
                >
                  <span>Official Instagram Profile</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
