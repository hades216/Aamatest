import React from "react";
import { Link } from "react-router-dom";
import { FACULTY_DATA } from "../data/coursesData";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  Instagram, 
  Stethoscope 
} from "lucide-react";

// @ts-ignore
import brightModelImg from "../assets/images/bright_hero_model_1781221945218.jpg";

export function FacultyPage() {
  const drShumaila = FACULTY_DATA[0];

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Faculty & Master Trainer Dr. Shumaila Khan | AAMA Academy"
        description="Meet Dr. Shumaila Khan, Consultant Dermatologist and Academic Director of AAMA Academy. Explore her clinical background, masterclasses, and 1:1 training methodology."
      />
      {/* 1. FACULTY HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={brightModelImg}
        imageAlt="AAMA Faculty & Clinical Leadership"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Academic Direction &amp; Master Faculty
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Clinical Leadership &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">mentorship</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Under the direct guidance of <strong>Dr. Shumaila Khan</strong>, AAMA Academy delivers world-class, 1:1 live patient training designed to establish highest medical precision and safety in aesthetic practice.
        </p>
      </ParallaxHeader>

      {/* 2. ACADEMY FOUNDERS & FACULTY LEADERSHIP */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950 light:bg-stone-50 border-b border-white/10 light:border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          {FACULTY_DATA.map((faculty) => (
            <div 
              key={faculty.id} 
              className="bg-neutral-900/60 light:bg-white border border-white/15 light:border-neutral-200 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl backdrop-blur-md shadow-lg"
            >
              {/* Image & Key Badges */}
              <div className="lg:col-span-5">
                <div className="relative border border-[#E1A140]/60 bg-neutral-950 light:bg-neutral-100 overflow-hidden rounded-2xl group shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-neutral-950/90 light:bg-white/90 backdrop-blur-md border border-[#E1A140]/40 px-3.5 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E1A140] flex items-center gap-1.5 shadow-md rounded-full">
                      <ShieldCheck size={13} className="text-[#E1A140]" />
                      <span>{faculty.id === "dr-shumaila-khan" ? "FOUNDER" : "CO-FOUNDER"}</span>
                    </div>
                  </div>

                  <div className="p-5 bg-neutral-950/90 light:bg-white border-t border-white/10 light:border-neutral-200 space-y-3">
                    <div>
                      <span className="text-xs text-[#E1A140] font-mono font-bold uppercase tracking-wider block">
                        {faculty.experience}
                      </span>
                      <h3 className="text-xl font-bold text-white light:text-neutral-900 font-editorial-heading mt-1">
                        {faculty.name}
                      </h3>
                    </div>

                    {/* Direct Instagram Link */}
                    <a
                      href={faculty.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between bg-[#E1A140] hover:bg-amber-300 text-black px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <Instagram size={16} />
                        <span>{faculty.instagram ? faculty.instagram.replace("https://www.instagram.com/", "@").replace(/\/$/, "") : "@aama.academy"}</span>
                      </div>
                      <span className="text-[10px] flex items-center gap-1 font-mono font-bold">
                        <span>Follow Profile</span>
                        <ArrowRight size={11} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-block bg-[#E1A140]/10 border border-[#E1A140]/30 px-3 py-1 text-xs uppercase font-bold tracking-wider text-[#E1A140] font-mono mb-3 rounded-full backdrop-blur-md">
                    {faculty.title.toUpperCase()}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white light:text-neutral-900">
                    {faculty.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#E1A140] mt-1 font-sans">
                    {faculty.title}
                  </p>
                  <p className="text-xs text-neutral-400 light:text-neutral-600 font-mono mt-1">
                    {faculty.qualifications}
                  </p>
                </div>

                <p className="text-neutral-300 light:text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {faculty.bio}
                </p>

                {/* Trainer Quote */}
                {faculty.quote && (
                  <div className="p-5 bg-neutral-900/80 light:bg-neutral-50 backdrop-blur-md border-l-2 border-[#E1A140] border-y border-r border-white/10 light:border-neutral-200 rounded-2xl shadow-sm">
                    <p className="text-neutral-300 light:text-neutral-700 italic text-xs sm:text-sm font-editorial">
                      "{faculty.quote}"
                    </p>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 bg-[#E1A140] text-black backdrop-blur-md px-6 py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-all rounded-full border border-[#E1A140]/60 shadow-md"
                  >
                    <span>View All Masterclasses</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 border border-white/20 light:border-neutral-400 bg-white/5 light:bg-neutral-900/5 backdrop-blur-md hover:bg-white/10 text-white light:text-neutral-900 px-6 py-3.5 text-xs uppercase font-bold tracking-widest transition-all rounded-full"
                  >
                    <span>Enroll for Mentorship</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLINICAL GOVERNANCE */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 light:bg-white border-b border-white/10 light:border-neutral-200">
        <div className="max-w-5xl mx-auto text-center">
          <GraduationCap size={40} className="text-[#E1A140] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white light:text-neutral-900 mb-4">
            Clinical Governance &amp; UK CPD Verification
          </h2>
          <p className="text-neutral-300 light:text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            AAMA maintains direct bilateral adherence to UK and European Aesthetic Medicine training frameworks. Every masterclass is audited for patient safety, sterile protocols, and vascular emergency readiness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-neutral-950 light:bg-neutral-50 border border-white/10 light:border-neutral-200 p-6">
              <span className="text-xs text-[#E1A140] font-mono font-bold uppercase block mb-1">UK CPD Standard</span>
              <h4 className="text-base font-bold text-white light:text-neutral-900 mb-2 font-editorial-heading">Accredited Portals</h4>
              <p className="text-xs text-neutral-400 light:text-neutral-600">Quarterly clinical audit protocols and curriculum moderation.</p>
            </div>
            <div className="bg-neutral-950 light:bg-neutral-50 border border-white/10 light:border-neutral-200 p-6">
              <span className="text-xs text-[#E1A140] font-mono font-bold uppercase block mb-1">Live Models</span>
              <h4 className="text-base font-bold text-white light:text-neutral-900 mb-2 font-editorial-heading">1:1 Clinical Hands-on</h4>
              <p className="text-xs text-neutral-400 light:text-neutral-600">Deep plane facial artery pathway review and live procedural execution.</p>
            </div>
            <div className="bg-neutral-950 light:bg-neutral-50 border border-white/10 light:border-neutral-200 p-6">
              <span className="text-xs text-[#E1A140] font-mono font-bold uppercase block mb-1">Complication Safety</span>
              <h4 className="text-base font-bold text-white light:text-neutral-900 mb-2 font-editorial-heading">Emergency Protocols</h4>
              <p className="text-xs text-neutral-400 light:text-neutral-600">High-dose pulsed hyaluronidase emergency drill standardizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENROLL */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 light:bg-stone-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white light:text-neutral-900 mb-4">
            Experience 1:1 Mentorship with Dr. Shumaila Khan
          </h2>
          <p className="text-neutral-300 light:text-neutral-700 text-sm mb-8">
            Apply today to secure your hands-on seat in our upcoming masterclasses across Lahore, Karachi, and Islamabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-[#E1A140] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors"
            >
              Apply for Masterclass
            </Link>
            <Link
              to="/schedule"
              className="border border-white/20 light:border-neutral-400 text-white light:text-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 light:hover:bg-neutral-100 transition-colors"
            >
              View Training Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
