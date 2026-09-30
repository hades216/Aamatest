import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight, UserCheck, CheckCircle, HelpCircle } from "lucide-react";
// @ts-ignore
import heroAestheticImg from "../assets/images/bright_hero_model_1781221945218.jpg";

interface HeroProps {
  onRegisterClick: () => void;
  onExploreCourses: () => void;
  onSelectCourseFilter: (id: string | null) => void;
}

interface FeatureArea {
  id: string;
  name: string;
  muscle: string;
  course: string;
  courseId: string;
  indication: string;
  technique: string;
  x: string; // percentage coordinates for absolute positioning on silhouette
  y: string;
}

export function Hero({ onRegisterClick, onExploreCourses, onSelectCourseFilter }: HeroProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  const [activeArea, setActiveArea] = useState<FeatureArea | null>({
    id: "glabella",
    name: "Glabellar Complex",
    muscle: "Procerus & Corrugator Supercilii",
    course: "Botox Masterclass (Basic & Advanced)",
    courseId: "botox",
    indication: "Frown Lines & Brows Lift",
    technique: "Intramuscular bolus injection avoiding levator palpebrae superioris",
    x: "38%",
    y: "18%"
  });

  const mappingAreas: FeatureArea[] = [
    {
      id: "forehead",
      name: "Forehead Lines",
      muscle: "Frontalis Muscle",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Horizontal expression creases",
      technique: "Intradermal micro-droplets aligned with skin tension lines",
      x: "50%",
      y: "14%"
    },
    {
      id: "glabella",
      name: "Glabellar Complex",
      muscle: "Procerus & Corrugator Supercilii",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Frown Lines & Brows Lift",
      technique: "Intramuscular injection with protective finger position to avoid blepharoptosis",
      x: "50%",
      y: "24%"
    },
    {
      id: "crows",
      name: "Lateral Canthal Lines",
      muscle: "Orbicularis Oculi",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Crow's Feet",
      technique: "Superficial injection 1.5cm lateral to the bony orbital rim",
      x: "32%",
      y: "28%"
    },
    {
      id: "rhino",
      name: "Nasal Dorsum",
      muscle: "Nasalis & Depressor Septi",
      course: "Liquid Rhinoplasty Masterclass",
      courseId: "rhinoplasty",
      indication: "Hump camouflage & tip projection",
      technique: "Supraperiosteal bolus via cannula or sharp needle in the midline",
      x: "50%",
      y: "37%"
    },
    {
      id: "cheeks",
      name: "Zygomatic-Malar Apex",
      muscle: "Zygomaticus major & Deep Cheek Fat Pad",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Midface volume loss & lateral lifting",
      technique: "Deep pre-periosteal bolus (MD Codes / Dr. Mauricio de Maio system)",
      x: "35%",
      y: "45%"
    },
    {
      id: "lips",
      name: "Vermilion Border & Body",
      muscle: "Orbicularis Oris",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Lip volume, definitions & hydration",
      technique: "Retrograde linear threading & micro-droplets (Russian or Classic technique)",
      x: "50%",
      y: "62%"
    },
    {
      id: "masseter",
      name: "Angle of Mandible",
      muscle: "Masseter Muscle",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Jaw slimming & bruxism therapeutics",
      technique: "Deep muscular injection in the safe triangle boundaries",
      x: "28%",
      y: "68%"
    },
    {
      id: "chin",
      name: "Mental Crease & Apex",
      muscle: "Mentalis Muscle & Pre-jowl sulcus",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Retrognathia correction & chin lengthening",
      technique: "Deep supraperiosteal bolus at the midline of chin bone apex",
      x: "50%",
      y: "77%"
    }
  ];

  return (
    <section 
      style={{ contentVisibility: 'auto' }}
      className="relative min-h-screen bg-transparent pt-28 lg:pt-36 pb-16 overflow-hidden flex items-center border-b border-white/10" 
      id="hero"
    >
      {/* 1. ARCHITECTURAL LUXURY AMBIENT GRAPHICS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft grid of lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        
        {/* Golden volumetric blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-1/8 left-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        {/* Diagonal anatomical lines and rules */}
        <svg className="absolute inset-x-0 top-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0%" x2="90%" y2="100%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="#d4af37" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="400" stroke="#d4af37" strokeOpacity="0.2" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT HAND SIDE: DESIRED HIGH-CONVERTING COPY --- */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left" id="hero-left-col">
            
            {/* Accreditation Badge & New Training Program Announcement */}
            <div className="flex flex-wrap items-center gap-2" id="accreditation-badge">
              <div className="inline-flex items-center gap-2.5 bg-neutral-900/80 light:bg-white/80 backdrop-blur-md border border-white/20 light:border-neutral-300 px-4 py-2 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#E1A140] animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E1A140] font-sans">
                  AAMA Pakistan • Hands-on Accreditation
                </span>
              </div>

              <a
                href="/courses/thread-lift-masterclass"
                className="inline-flex items-center gap-1.5 bg-[#E1A140]/20 light:bg-amber-100/90 backdrop-blur-md hover:bg-[#E1A140]/30 border border-[#E1A140]/60 px-4 py-2 rounded-full text-xs font-mono font-bold text-amber-300 light:text-amber-900 transition-all group/new shadow-sm"
              >
                <Sparkles size={12} className="text-[#E1A140]" />
                <span>NEW TRAINING: Thread-Lift Masterclass ISB</span>
                <ArrowRight size={12} className="transform group-hover/new:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white light:text-neutral-900 font-editorial-heading leading-[1.08] uppercase">
              Leading <br />
              <span className="text-[#E1A140] font-serif lowercase italic font-normal tracking-normal pr-2">aesthetic</span> Training, <br />
              Trusted Worldwide.
            </h1>

            {/* Detailed Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300 light:text-neutral-700 leading-relaxed max-w-xl font-sans font-normal">
              We provide premier, beginner-to-advanced hands-on aesthetic medicine training courses 
              for registered medical professionals. Gain international-standard expertise in injectable fillers, 
              neuromodulators (Botox), energy devices, and liquid rhinoplasty from master faculty in state-of-the-art clinical environments.
            </p>

            {/* Accreditation Partner Logos Row */}
            <div className="flex flex-wrap items-center gap-6 my-2 opacity-95" id="accreditation-partners">
              {/* Accredit 1 */}
              <div className="flex items-center gap-3 border-r border-white/15 pr-6">
                <svg className="w-9 h-9 text-neutral-200 shrink-0" viewBox="0 0 40 40" fill="none" aria-label="ACCME Accredited Badge">
                  <path d="M20 4 L34 32 H6 Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 10 L28 28 H12 Z" fill="currentColor" fillOpacity="0.1" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-xs font-extrabold tracking-widest text-[#E1A140] leading-tight uppercase">ACCME</p>
                  <p className="text-xs text-neutral-350 mt-0.5 uppercase leading-tight font-medium">Accredited CME</p>
                </div>
              </div>

              {/* Accredit 2 */}
              <div className="flex items-center gap-3 border-r border-white/15 pr-6">
                <svg className="w-9 h-9 text-[#E1A140] shrink-0" viewBox="0 0 40 40" fill="none" aria-label="International CPD Certified Badge">
                  <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 20 L18 23 L25 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-xs font-extrabold tracking-widest text-white leading-tight uppercase">CPD CERTIFIED</p>
                  <p className="text-xs text-neutral-350 mt-0.5 uppercase leading-tight font-medium">Global Standards</p>
                </div>
              </div>

              {/* Accredit 3 */}
              <div className="flex items-center gap-3">
                <svg className="w-9 h-9 text-neutral-350 shrink-0" viewBox="0 0 40 40" fill="none" aria-label="AAMA London Badge">
                  <path d="M8 8 H32 V32 H8 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                  <path d="M12 12 H28 V28 H12 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.6" />
                  <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-xs font-extrabold tracking-widest text-neutral-200 leading-tight uppercase">AAMA LONDON</p>
                  <p className="text-xs text-neutral-400 mt-0.5 uppercase leading-tight font-medium">Affiliated Chapter</p>
                </div>
              </div>
            </div>

            {/* Technical Target Highlights info widget */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg mt-2 bg-neutral-900/60 light:bg-white/80 backdrop-blur-md border border-white/20 light:border-neutral-300 rounded-2xl p-4 shadow-xl" id="technical-highlights-mini">
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-wider text-[#E1A140] font-mono">Methodology</p>
                <p className="text-sm font-semibold text-neutral-100 light:text-neutral-900 mt-0.5">1-on-1 Hands-On</p>
              </div>
              <div className="text-left border-l border-white/15 light:border-neutral-200 pl-4">
                <p className="text-xs uppercase font-bold tracking-wider text-[#E1A140] font-mono">Aesthetic CPD</p>
                <p className="text-sm font-semibold text-neutral-100 light:text-neutral-900 mt-0.5">Certified Portals</p>
              </div>
              <div className="text-left border-l border-white/15 light:border-neutral-200 pl-4 col-span-2 md:col-span-1">
                <p className="text-xs uppercase font-bold tracking-wider text-[#E1A140] font-mono">Centres</p>
                <p className="text-sm font-semibold text-neutral-100 light:text-neutral-900 mt-0.5">Karachi, Lahore &amp; Islamabad</p>
              </div>
            </div>

            {/* Immediate CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button 
                onClick={onRegisterClick}
                className="bg-[#E1A140] text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all rounded-full hover:bg-amber-300 backdrop-blur-md border border-[#E1A140]/60 active:scale-98 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Verify &amp; Apply Now</span>
                <ArrowRight size={15} />
              </button>
              
              <button 
                onClick={onExploreCourses}
                className="bg-white/10 light:bg-neutral-900/10 border border-white/25 light:border-neutral-400 backdrop-blur-md px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/20 text-white light:text-neutral-900 rounded-full transition-all active:scale-98 cursor-pointer"
              >
                Browse Workshops
              </button>
            </div>

            {/* Warning requirement tag */}
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-neutral-350 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span>PM&amp;DC / BM&amp;DC Registered Doctors &amp; Dentists Only</span>
            </div>

          </div>

          {/* --- RIGHT HAND SIDE: INTERACTIVE PICTURE COMPARISON SLIDER & MEDICAL MAP --- */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full" id="hero-right-col">
            
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="w-full max-w-[400px] aspect-[4/5] bg-neutral-900/60 light:bg-white/90 backdrop-blur-md border border-white/20 light:border-neutral-300 rounded-2xl relative p-0 overflow-hidden shadow-2xl flex items-center justify-center cursor-ew-resize select-none group/facemap-container"
            >
              
              {/* Right Image Layer (Male Model Background) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900"
                  alt="Male Clinical Model"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105"
                />
                <span className="absolute bottom-4 right-4 text-[10px] font-mono text-amber-400 bg-black/80 px-2.5 py-1 rounded-full border border-[#E1A140]/30 tracking-wider">
                  MALE MODEL
                </span>
              </div>

              {/* Left Image Layer (Female Model Foreground with dynamic clip-path slider) */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={heroAestheticImg}
                  alt="Female Clinical Model"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 absolute inset-0 max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '400px' }}
                />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-amber-400 bg-black/80 px-2.5 py-1 rounded-full border border-[#E1A140]/30 tracking-wider">
                  FEMALE MODEL
                </span>
              </div>

              {/* Interactive Gold Slider Divider Handle */}
              <div 
                className="absolute top-0 bottom-0 z-20 w-1 bg-[#E1A140] shadow-[0_0_15px_rgba(225,161,64,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-[#E1A140] flex items-center justify-center text-[#E1A140] shadow-xl">
                  <span className="text-[10px] font-bold font-mono">⟷</span>
                </div>
              </div>

              {/* Patient Profile Outline SVG overlay (very subtle) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen z-30">
                <svg width="100%" height="90%" viewBox="0 0 300 380" fill="none" className="stroke-[#E1A140]/20 stroke-[1]">
                  <path d="M 150 10 L 150 370" strokeDasharray="3 3" />
                  <path d="M 30 180 C 100 180, 200 180, 270 180" strokeDasharray="3 3" />
                  <circle cx="150" cy="180" r="110" stroke="#E1A140" strokeOpacity="0.15" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Interactive Target Injection Buttons */}
              {mappingAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveArea(area);
                  }}
                  className="absolute cursor-pointer group/node z-40"
                  style={{ left: area.x, top: area.y }}
                  aria-label={`Target area ${area.name}`}
                >
                  <span className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-5.5 w-5.5 items-center justify-center rounded-full transition-all ${
                    activeArea?.id === area.id 
                      ? "bg-[#E1A140]/30 ring-2 ring-[#E1A140] scale-110 shadow-lg shadow-[#E1A140]/40" 
                      : "bg-neutral-950/80 hover:bg-amber-500/30 ring-1 ring-white/20 hover:ring-[#E1A140]/60"
                  }`}>
                    <span className={`block h-2 w-2 rounded-full ${
                      activeArea?.id === area.id 
                        ? "bg-[#E1A140] animate-pulse" 
                        : "bg-neutral-300 group-hover/node:bg-[#E1A140]"
                     }`}></span>
                  </span>
                  
                  {/* Subtle technical tooltip floating */}
                  <span className="hidden group-hover/node:block absolute left-5 -translate-y-1/2 bg-black/95 text-[10px] font-semibold text-neutral-200 border border-neutral-800 px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-50">
                    {area.name} <span className="text-amber-500 font-mono">▸</span>
                  </span>
                </button>
              ))}
            </div>

            {/* --- DETAILED CLINICAL CASE CARD DESCRIPTOR --- */}
            <div className="w-full max-w-[400px] mt-4 bg-neutral-900/60 light:bg-white/90 backdrop-blur-md border border-white/20 light:border-neutral-300 rounded-2xl p-5 shadow-lg text-left" id="clinical-facemap-interactive-output">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#E1A140] bg-neutral-950/60 light:bg-neutral-100/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 light:border-neutral-300">
                    Anatomical Site
                  </span>
                  <h3 className="text-base font-bold text-white font-editorial-heading mt-2 flex items-center gap-1.5">
                    {activeArea ? activeArea.name : "Select facial anchor"}
                  </h3>
                </div>
                {activeArea && (
                  <button 
                    onClick={() => {
                      onSelectCourseFilter(activeArea.courseId);
                      onExploreCourses();
                    }}
                    className="text-xs font-bold text-[#E1A140] hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View module</span>
                    <span>→</span>
                  </button>
                )}
              </div>

              {activeArea ? (
                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                  <div className="grid grid-cols-4 gap-2">
                    <span className="text-neutral-400 font-semibold">Muscle:</span>
                    <span className="col-span-3 text-neutral-100 font-mono font-medium">{activeArea.muscle}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <span className="text-neutral-400 font-semibold">Goal:</span>
                    <span className="col-span-3 text-neutral-200">{activeArea.indication}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <span className="text-neutral-400 font-semibold">Method:</span>
                    <span className="col-span-3 text-neutral-300 italic">{activeArea.technique}</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-xs">
                    <span className="text-neutral-350">Module: <strong className="text-neutral-100">{activeArea.course}</strong></span>
                    <span className="text-[#E1A140] font-bold uppercase font-mono tracking-wider">AAMA Certified</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Click on any injector pinpoint bubble mapped on the patient's face to analyze the target clinical musculature, inject guidelines, and recommended workshops.
                </p>
              )}
            </div>

          </div>

        </div>

        {/* --- GEOGRAPHICAL TRAINING HUBS BAR --- */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full relative z-10" id="geographical-training-hubs">
          <div className="flex flex-col items-center">
            <p className="text-xs font-mono tracking-widest text-[#E1A140] uppercase font-bold">Pakistan Head Office</p>
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-editorial-heading mt-1">Karachi</h4>
            <p className="text-xs text-neutral-400 mt-1 font-medium">Clifton Clinical Suite</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-xs font-mono tracking-widest text-[#E1A140] uppercase font-bold">Punjab Chapter</p>
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-editorial-heading mt-1">Lahore</h4>
            <p className="text-xs text-neutral-400 mt-1 font-medium">Gulberg Resuscitation Centre</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-xs font-mono tracking-widest text-[#E1A140] uppercase font-bold">Capital District</p>
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-editorial-heading mt-1">Islamabad</h4>
            <p className="text-xs text-neutral-400 mt-1 font-medium">F-8 Clinical Theatre</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-xs font-mono tracking-widest text-[#E1A140] uppercase font-bold">KPK Hub</p>
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-editorial-heading mt-1">Peshawar</h4>
            <p className="text-xs text-neutral-400 mt-1 font-medium">Hayatabad Partner Clinic</p>
          </div>
        </div>

      </div>
    </section>
  );
}
