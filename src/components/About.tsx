import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  GraduationCap, 
  Users, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Instagram, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  HeartHandshake
} from "lucide-react";

// @ts-ignore
import drShumailaImg from "../assets/images/dr_shumaila_khan_portrait_1790730002038.jpg";

export function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "standards" | "methodology">("mission");

  // Bento information details
  const stats = [
    { title: "Doctors Mentored", value: "1,200+", desc: "MBBS & BDS physicians certified across Karachi, Lahore & Islamabad" },
    { title: "Clinical Mastery", value: "15+ Yrs", desc: "Consultant dermatology, laser physics & facial vector sculpting experience" },
    { title: "CPD Accreditations", value: "100%", desc: "UK CPD verified credits recognized for clinical indemnity & licensing" },
    { title: "1:1 Live Practice", value: "100%", desc: "Every physician candidate injects pre-screened live human patient models" }
  ];

  return (
    <section className="bg-transparent py-20 px-4 md:px-8 relative z-10 border-b border-white/10 overflow-hidden" id="about-section">
      {/* Background soft glowing ring */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP SECTION: DR. SHUMAILA KHAN PROFILE SPOTLIGHT */}
        <div className="bg-neutral-900/80 light:bg-white border border-white/15 light:border-neutral-300 p-6 sm:p-8 md:p-10 shadow-none relative overflow-hidden" id="dr-shumaila-profile">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E1A140]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* PHOTO CARD WITH INSTAGRAM EMBED BADGE */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#E1A140]/50 bg-neutral-950 light:bg-neutral-100 shadow-none overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden relative bg-neutral-950">
                  <img
                    src={drShumailaImg}
                    alt="Dr. Shumaila Khan - Consultant Dermatologist & Academic Director of IAAMA"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Verified Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#E1A140]/40 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E1A140] flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck size={13} className="text-[#E1A140]" />
                    <span>Academic Director</span>
                  </div>
                </div>

                {/* Profile Caption & Direct Instagram Action */}
                <div className="p-5 bg-neutral-950 light:bg-white border-t border-white/10 light:border-neutral-200 space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-neutral-900 font-editorial-heading">
                      Dr. Shumaila Khan
                    </h3>
                    <p className="text-xs text-[#E1A140] font-mono font-bold uppercase tracking-wider mt-0.5">
                      Consultant Dermatologist &amp; Master Aesthetic Physician
                    </p>
                    <p className="text-[11px] text-neutral-400 light:text-neutral-600 font-mono mt-1">
                      MBBS, FCPS (Dermatology), Board Certified Aesthetic Trainer, Member IACD
                    </p>
                  </div>

                  {/* INSTAGRAM DIRECT LINK BUTTON */}
                  <a
                    href="https://www.instagram.com/dr.shumailakhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between bg-neutral-800 light:bg-neutral-100 hover:bg-neutral-700 light:hover:bg-neutral-200 border border-white/15 light:border-neutral-300 text-white light:text-neutral-900 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 group/insta cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram size={17} className="text-[#E1A140] transform group-hover/insta:scale-110 transition-transform" />
                      <span>@dr.shumailakhan</span>
                    </div>
                    <span className="text-[10px] text-[#E1A140] flex items-center gap-1 font-mono">
                      <span>Follow Official Profile</span>
                      <ArrowRight size={11} className="transform group-hover/insta:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* BIO & ACADEMIC LEADERSHIP DETAILS */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/30 px-3.5 py-1 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono">
                <Stethoscope size={14} />
                <span>CLINICAL ACADEMY DIRECTOR</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-neutral-900 uppercase font-editorial-heading leading-tight">
                "We cultivate doctors who inject with <span className="gradient-text-gold font-serif lowercase italic font-normal">anatomical certainty</span> and conservative elegance."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                <p>
                  With over 15 years of dedicated clinical practice in medical dermatology, energy-based laser devices, and advanced non-surgical aesthetics, <strong>Dr. Shumaila Khan</strong> serves as the Course Director and Lead Instructor at the Academy of Advanced Medical Aesthetics (IAAMA).
                </p>
                <p>
                  Dr. Shumaila has trained over 1,200+ registered physicians and dental surgeons across Pakistan and abroad. Her pedagogical philosophy is uncompromising: <em>every doctor must develop deep 3D vascular safety instincts, master micro-cannula vector resuspension, and gain extensive hands-on experience exclusively on live human patient models</em>.
                </p>
              </div>

              {/* Core Strengths Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-black/60 border border-white/10 p-3 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200">1:1 Supervised Injections on Live Patient Models</span>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200">Facial Danger Zones &amp; Vascular Rescue Protocols</span>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200">High-Precision Micro-Cannula Vector Artistry</span>
                </div>
                <div className="bg-black/60 border border-white/10 p-3 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200">UK CPD Verified Certification &amp; Alumni Network</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/courses"
                  className="bg-[#E1A140] hover:bg-amber-300 text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>Explore Masterclasses by Dr. Shumaila</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/register"
                  className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors"
                >
                  Apply for Residency
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: ACADEMY METHODOLOGY & STATS */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TEXT COPY & MISSION TAB CONTROLLER */}
          <div className="lg:col-span-7 text-left space-y-6" id="about-text-content">
            
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono m-0">
              Elite Academic Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-neutral-900 uppercase font-editorial-heading m-0 leading-tight">
              Pioneering Aesthetic <br />
              <span className="gradient-text-rose font-serif lowercase italic font-normal">medicine training</span> in Pakistan
            </h2>
            <div className="w-16 h-[2px] bg-[#E1A140] my-4"></div>

            <p className="text-base sm:text-lg text-neutral-300 font-sans font-normal leading-relaxed">
              The Academy of Advanced Medical Aesthetics (IAAMA Pakistan) is the national premier educational institute 
              specifically engineered to transition registered medical professionals into world-class aesthetic injectors. 
              We bridge the gap between academic clinical dermatology and practical execution.
            </p>

            {/* TAB SELECTORS */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2 mt-6">
              {[
                { id: "mission", label: "Academic Vision" },
                { id: "standards", label: "Patient Safety Standards" },
                { id: "methodology", label: "Hands-on Method" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 bg-transparent text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors focus:outline-none cursor-pointer border-b-2 ${
                    activeTab === tab.id
                      ? "text-[#E1A140] border-[#E1A140]"
                      : "text-neutral-400 hover:text-neutral-200 border-transparent font-medium"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT DESCRIPTORS */}
            <div className="min-h-[140px] text-sm sm:text-base leading-relaxed text-neutral-200" id="about-tabs-body">
              {activeTab === "mission" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="font-normal text-neutral-300">
                    Our vision is to elevate the overall quality and safety of aesthetic procedures throughout Pakistan 
                    by establishing standardized, accredited, university-grade injectables education. We empower doctors, dentists, and dermatologists to align facial aesthetics with logical golden-ratio mathematical guidelines.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-200">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-[#E1A140] shrink-0" />
                      <span>Standardised Syllabus Criteria</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-[#E1A140] shrink-0" />
                      <span>Ethical commercial clinic consulting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-[#E1A140] shrink-0" />
                      <span>Post-course lifetime mentorship forum</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-[#E1A140] shrink-0" />
                      <span>Valid CPD compliance indicators</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "standards" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="font-normal text-neutral-300">
                    Aesthetic practice carries high physical clinical responsibilities. IAAMA places extreme emphasis on 
                    the avoidance, diagnostics, and emergency handling of vascular occlusion, blindness, skin necrosis, 
                    and severe hypersensitivity reactions. We train doctors to inject with deep anatomic caution.
                  </p>
                  <div className="bg-amber-500/10 p-4 rounded-none border border-amber-500/30 flex gap-3 text-xs sm:text-sm text-neutral-200">
                    <ShieldAlert size={18} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>Every IAAMA workspace candidate is trained in emergency enzyme reconstitution (Hyaluronidase protocols) with sharp-needle vs. rounded micro-cannula safety diagnostics.</span>
                  </div>
                </div>
              )}

              {activeTab === "methodology" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="font-normal text-neutral-300">
                    Theory is useless without muscle-memory. While other courses rely on synthetic plastic medical heads or silicon pads, IAAMA maintains a rigid <strong className="text-white">live patient model policy</strong>. Candidates observe Dr. Shumaila inject, map and calibrate, and subsequently inject the patient candidate themselves under 1-on-1 supervision.
                  </p>
                  <ul className="space-y-2.5 text-sm text-neutral-200">
                    <li className="flex items-start gap-2.5">
                      <strong className="text-[#E1A140] font-semibold uppercase tracking-wider text-xs sm:text-sm">1-on-1 Coaching:</strong>
                      <span>A highly restricted candidate-per-mentor ratio to ensure individual attention.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <strong className="text-[#E1A140] font-semibold uppercase tracking-wider text-xs sm:text-sm">Real Patients:</strong>
                      <span>All hands-on workshops are performed strictly on pre-screened live patient models.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Aesthetic Quote block */}
            <div className="border-l-4 border-[#E1A140] pl-5 py-2 italic text-sm sm:text-base text-neutral-300 leading-relaxed font-serif">
              "Injecting is not merely delivering a chemical bolus. It is the three-dimensional sculpt of a living patient’s structural expression and health."
              <span className="block text-xs font-mono uppercase tracking-wider text-[#E1A140] mt-2.5 not-italic font-bold">
                — DR. SHUMAILA KHAN, IAAMA ACADEMIC DIRECTOR
              </span>
            </div>

          </div>

          {/* RIGHT: BENTO STATS BLOCK */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4" id="about-bento-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-white/15 rounded-none p-5 md:p-6 text-left hover:border-amber-500/40 transition-colors duration-300 shadow-xl"
              >
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-editorial-heading">
                  {stat.value}
                </p>
                <h4 className="text-sm font-bold text-white mt-2 mb-1.5 uppercase tracking-wide font-sans">
                  {stat.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {stat.desc}
                </p>
              </div>
            ))}

            {/* Accompanying image/graphic capsule */}
            <div className="col-span-2 bg-neutral-900 border border-white/15 p-5 rounded-none text-left flex items-center gap-4">
              <div className="w-11 h-11 rounded-none bg-amber-500/15 flex items-center justify-center shrink-0 border border-[#E1A140]/30 text-[#E1A140]">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase text-white tracking-wider font-sans">
                  Accredited by CPD Standards (UK Body)
                </h4>
                <p className="text-xs text-neutral-350 mt-1 leading-normal font-normal">
                  Graduates receive formal, digitally-verifiable Continuing Professional Development credits recognized globally for licensing board submissions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
