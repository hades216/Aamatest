import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Award, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Users, 
  Sparkles, 
  GraduationCap, 
  FileText,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Stethoscope
} from "lucide-react";

// @ts-ignore
import drShumailaImg from "../assets/images/dr_shumaila_khan_portrait_1790730002038.jpg";
// @ts-ignore
import drAsherImg from "../assets/images/dr_asher_mashhood_portrait_1790758213053.jpg";
// @ts-ignore
import drAishaImg from "../assets/images/dr_aisha_zubair_portrait_1790758405040.jpg";
// @ts-ignore
import suiteImg from "../assets/images/bright_clinical_suite_1781221728289.jpg";

export function AboutPage() {
  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="About Dr. Shumaila Khan & IAAMA | Academy of Advanced Medical Aesthetics"
        description="Meet Dr. Shumaila Khan, Consultant Dermatologist and Academic Director of IAAMA Academy. Explore our UK CPD accredited 1:1 medical aesthetics training methodology."
      />
      {/* 1. HERO HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={suiteImg}
        imageAlt="IAAMA Academy Clinical Suites & Architecture"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Pioneering Medical Aesthetic Excellence
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Academy of Advanced <br className="hidden sm:inline" />
          <span className="text-[#E1A140] font-serif lowercase italic font-normal">medical aesthetics</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
          Under the clinical leadership of <strong>Dr. Shumaila Khan</strong>, IAAMA Academy sets the benchmark for aesthetic medicine training across Pakistan, strictly adhering to UK CPD and international clinical safety protocols.
        </p>
      </ParallaxHeader>

      {/* 2. EXECUTIVE LEADERSHIP & FOUNDERS */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/30 px-3.5 py-1 text-xs uppercase font-bold tracking-wider text-[#E1A140] font-mono rounded-full backdrop-blur-md">
              <Stethoscope size={14} />
              <span>ACADEMY LEADERSHIP &amp; FOUNDERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-editorial-heading text-white">
              Pioneering <span className="text-[#E1A140] font-serif lowercase italic font-normal">aesthetic medicine</span> in Pakistan
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              Founded by <strong>Dr. Shumaila Khan</strong>, Co-Founded by <strong>Prof. Brig(R) Asher Ahmed Mashhood</strong>, and led by Master Trainer <strong>Dr. Aisha Zubair</strong>, IAAMA Academy establishes UK-accredited 1:1 live patient training and ethical clinical governance across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* FOUNDER: DR. SHUMAILA KHAN */}
            <div className="border border-[#E1A140]/60 bg-neutral-900/60 light:bg-white/90 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md hover:border-[#E1A140] transition-all group">
              <div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    data-cms-id="about-dr-shumaila-img"
                    src={drShumailaImg}
                    alt="Dr. Shumaila Khan - Founder & Academic Director"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#E1A140]/40 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E1A140] flex items-center gap-1.5 shadow-lg rounded-full">
                    <ShieldCheck size={13} className="text-[#E1A140]" />
                    <span>FOUNDER &amp; ACADEMIC DIRECTOR</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white light:text-neutral-900 font-editorial-heading">Dr. Shumaila Khan</h3>
                    <p className="text-xs text-[#E1A140] uppercase font-mono font-bold mt-1">
                      Founder &amp; Master Aesthetic Physician
                    </p>
                    <p className="text-xs text-neutral-400 light:text-neutral-600 mt-1 font-mono">
                      MBBS, FCPS (Dermatology), Board Certified Master Trainer, Member IACD
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 light:text-neutral-700 mt-3 font-sans leading-relaxed">
                      Dr. Shumaila Khan is the Founder and Academic Director of IAAMA Academy. Recognized across Pakistan for non-surgical facial sculpting and laser technologies, she personally directs every curriculum to enforce 1:1 live patient model training.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://www.instagram.com/dr.shumailakhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-gradient-to-r from-rose-900/60 via-purple-900/60 to-neutral-900 hover:from-rose-800/80 hover:to-purple-800/80 border border-rose-500/40 text-white px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram size={18} className="text-rose-400" />
                    <span>@dr.shumailakhan</span>
                  </div>
                  <span className="text-[10px] text-amber-300 flex items-center gap-1 font-mono">
                    <span>Follow On Instagram</span>
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
            </div>

            {/* CO-FOUNDER: PROF. BRIG(R) ASHER AHMED MASHHOOD */}
            <div className="border border-[#E1A140]/60 bg-neutral-900/60 light:bg-white/90 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md hover:border-[#E1A140] transition-all group">
              <div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    data-cms-id="about-dr-asher-img"
                    src={drAsherImg}
                    alt="Prof. Brig(R) Asher Ahmed Mashhood - Co-Founder & Senior Consultant Dermatologist"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#E1A140]/40 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E1A140] flex items-center gap-1.5 shadow-lg rounded-full">
                    <Award size={13} className="text-[#E1A140]" />
                    <span>CO-FOUNDER &amp; SENIOR CONSULTANT</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white light:text-neutral-900 font-editorial-heading">Prof. Brig(R) Asher Ahmed Mashhood</h3>
                    <p className="text-xs text-[#E1A140] uppercase font-mono font-bold mt-1">
                      Co-Founder &amp; Senior Consultant Dermatologist
                    </p>
                    <p className="text-xs text-neutral-400 light:text-neutral-600 mt-1 font-mono">
                      MBBS, FCPS (Dermatology), Professor, Supervisor &amp; Examiner (30+ Years Leadership)
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 light:text-neutral-700 mt-3 font-sans leading-relaxed">
                      Prof. Brig(R) Asher Ahmed Mashhood is the Co-Founder of IAAMA Academy and a luminary in Pakistan's dermatology landscape with 30+ years of distinguished clinical excellence. Renowned as a professor, supervisor, and examiner in laser technologies and advanced aesthetic dermatology, he co-founded IAAMA Academy to champion ethical clinical governance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://www.instagram.com/drashersaesthetics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-gradient-to-r from-rose-900/60 via-purple-900/60 to-neutral-900 hover:from-rose-800/80 hover:to-purple-800/80 border border-rose-500/40 text-white px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram size={18} className="text-rose-400" />
                    <span>@drashersaesthetics</span>
                  </div>
                  <span className="text-[10px] text-amber-300 flex items-center gap-1 font-mono">
                    <span>Follow On Instagram</span>
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
            </div>

            {/* MASTER TRAINER: DR. AISHA ZUBAIR */}
            <div className="border border-[#E1A140]/60 bg-neutral-900/60 light:bg-white/90 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md hover:border-[#E1A140] transition-all group">
              <div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    data-cms-id="about-dr-aisha-img"
                    src={drAishaImg}
                    alt="Dr. Aisha Zubair - Senior Aesthetic Physician & Master Trainer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#E1A140]/40 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E1A140] flex items-center gap-1.5 shadow-lg rounded-full">
                    <Sparkles size={13} className="text-[#E1A140]" />
                    <span>MASTER TRAINER &amp; FACULTY</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white light:text-neutral-900 font-editorial-heading">Dr. Aisha Zubair</h3>
                    <p className="text-xs text-[#E1A140] uppercase font-mono font-bold mt-1">
                      Senior Aesthetic Physician &amp; Master Trainer
                    </p>
                    <p className="text-xs text-neutral-400 light:text-neutral-600 mt-1 font-mono">
                      MBBS, Certified Master Aesthetic Trainer, Founder COSMETIXE
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 light:text-neutral-700 mt-3 font-sans leading-relaxed">
                      Dr. Aisha Zubair is a celebrated Aesthetic Physician, Master Trainer, and Founder of COSMETIXE (Safari Hospital, Bahria Town Rawalpindi). Recognized for advanced lip augmentation, vector thread lifts, and tear-trough rejuvenation, she mentors physicians in refined clinical artistry and complication management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://www.instagram.com/draishazubair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-gradient-to-r from-rose-900/60 via-purple-900/60 to-neutral-900 hover:from-rose-800/80 hover:to-purple-800/80 border border-rose-500/40 text-white px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram size={18} className="text-rose-400" />
                    <span>@draishazubair</span>
                  </div>
                  <span className="text-[10px] text-amber-300 flex items-center gap-1 font-mono">
                    <span>Follow On Instagram</span>
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR CORE ACADEMIC PILLARS */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              Academic Governance
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white">
              The IAAMA <span className="text-[#E1A140] font-serif lowercase italic font-normal">standard</span> of excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                  Strict Doctor Verification
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  We admit strictly PM&amp;DC registered MBBS, BDS, and Post-graduate physicians. No non-medical personnel or beauticians are admitted.
                </p>
              </div>
              <span className="text-xs text-[#E1A140] font-mono font-bold mt-6 uppercase tracking-wider block">
                01 // Medical Purity
              </span>
            </div>

            <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                  1-on-1 Live Model Ratio
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Delegates receive individual patient models for upper face Botox, dermal fillers, and laser settings with immediate mentor feedback.
                </p>
              </div>
              <span className="text-xs text-[#E1A140] font-mono font-bold mt-6 uppercase tracking-wider block">
                02 // Practical Confidence
              </span>
            </div>

            <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                  UK CPD Accreditation
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Certificates carry verifiable CPD hours recognized in the United Kingdom, United Arab Emirates, and internationally for clinical indemnity.
                </p>
              </div>
              <span className="text-xs text-[#E1A140] font-mono font-bold mt-6 uppercase tracking-wider block">
                03 // Global Credential
              </span>
            </div>

            <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                  Lifelong Doctor Hotline
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Graduates receive continuous support in our private clinical emergency hotline for second opinions, case planning, and dosage inquiries.
                </p>
              </div>
              <span className="text-xs text-[#E1A140] font-mono font-bold mt-6 uppercase tracking-wider block">
                04 // Clinical Community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL TRAINING CAMPUSES */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              State-Of-The-Art Facilities
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white mb-4">
              Our Nationwide <span className="text-[#E1A140] font-serif lowercase italic font-normal">campuses</span>
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Equipped with dedicated clinical aesthetic suites, high-spec medical lasers, professional shadowless procedural lighting, and 4K digital micro-injection displays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lahore Campus */}
            <div className="bg-neutral-900 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#E1A140]/50 transition-all">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                    alt="Lahore Flagship Campus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#E1A140] text-black text-xs font-bold uppercase px-3 py-1 font-mono">
                    Flagship Center
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-editorial-heading mb-2">
                    Lahore Campus
                  </h3>
                  <p className="text-xs text-neutral-300 mb-4 font-sans leading-relaxed">
                    Sector H, Phase 5 DHA, Lahore, Punjab. Features 3 dedicated injection suites and advanced aesthetic laser and procedural rooms.
                  </p>
                  <div className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <p className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#E1A140]" />
                      <span>Phase 5 DHA, Lahore</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-[#E1A140]" />
                      <span>+92 334 5092025</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/schedule?city=Lahore"
                  className="w-full block text-center border border-white/20 hover:bg-[#E1A140] hover:text-black hover:border-[#E1A140] py-2.5 text-xs uppercase font-bold tracking-widest transition-all"
                >
                  View Lahore Batches
                </Link>
              </div>
            </div>

            {/* Karachi Campus */}
            <div className="bg-neutral-900 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#E1A140]/50 transition-all">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    alt="Karachi Center of Excellence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950 border border-white/20 text-[#E1A140] text-xs font-bold uppercase px-3 py-1 font-mono">
                    Center of Excellence
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-editorial-heading mb-2">
                    Karachi Campus
                  </h3>
                  <p className="text-xs text-neutral-300 mb-4 font-sans leading-relaxed">
                    Block 4, Clifton, Karachi, Sindh. Situated near premier clinical hubs with dedicated training suites.
                  </p>
                  <div className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <p className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#E1A140]" />
                      <span>Clifton Block 4, Karachi</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-[#E1A140]" />
                      <span>+92 334 5092025</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/schedule?city=Karachi"
                  className="w-full block text-center border border-white/20 hover:bg-[#E1A140] hover:text-black hover:border-[#E1A140] py-2.5 text-xs uppercase font-bold tracking-widest transition-all"
                >
                  View Karachi Batches
                </Link>
              </div>
            </div>

            {/* Islamabad Campus */}
            <div className="bg-neutral-900 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#E1A140]/50 transition-all">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                    alt="Islamabad Executive Suites"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950 border border-white/20 text-[#E1A140] text-xs font-bold uppercase px-3 py-1 font-mono">
                    Executive Suites
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-editorial-heading mb-2">
                    Islamabad Campus
                  </h3>
                  <p className="text-xs text-neutral-300 mb-4 font-sans leading-relaxed">
                    Sector F-7/2, Islamabad, ICT. Catering to doctors across the Federal Capital, KPK, and Northern Pakistan.
                  </p>
                  <div className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <p className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#E1A140]" />
                      <span>Sector F-7/2, Islamabad</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-[#E1A140]" />
                      <span>+92 334 5092025</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/schedule?city=Islamabad"
                  className="w-full block text-center border border-white/20 hover:bg-[#E1A140] hover:text-black hover:border-[#E1A140] py-2.5 text-xs uppercase font-bold tracking-widest transition-all"
                >
                  View Islamabad Batches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white mb-6">
            Begin 1:1 Aesthetic Training with Dr. Shumaila Khan
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Review our upcoming masterclass dates or speak directly with our admissions desk to reserve your place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/courses"
              className="bg-[#E1A140] text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Explore Course Catalog
            </Link>
            <Link
              to="/register"
              className="border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
