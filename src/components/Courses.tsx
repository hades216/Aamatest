import React, { useMemo } from "react";
import { Clock, Award, ShieldCheck, HeartPulse, Sparkles, BookOpen, Layers, Users, Syringe } from "lucide-react";

// @ts-ignore
import clinicalImg from "../assets/images/clear_clinical_treatment_1781221754294.jpg";
// @ts-ignore
import suiteImg from "../assets/images/bright_clinical_suite_1781221728289.jpg";
// @ts-ignore
import laserImg from "../assets/images/clear_laser_device_1781221773224.jpg";

interface Course {
  id: string;
  name: string;
  category: string;
  duration: string;
  cpdCredits: string;
  handsOnRatio: string;
  badge: string;
  concept: string;
  description: string;
  injectPoints: string[];
  syllabus: string[];
  mentors: string[];
}

interface CoursesProps {
  selectedFilter: string | null;
  onSelectFilter: (id: string | null) => void;
  onApplyForCourse: (courseName: string) => void;
}

export function Courses({ selectedFilter, onSelectFilter, onApplyForCourse }: CoursesProps) {
  
  const coursesData: Course[] = [
    {
      id: "botox",
      name: "Masterclass in Botox (Basic to Advanced)",
      category: "Neuromodulator Therapy",
      duration: "1 Full Intensive Day",
      cpdCredits: "12 CPD Hours",
      handsOnRatio: "1 Patient Injection / 1 Assist Minimum",
      badge: "High Demand",
      concept: "Redefining facial vectors by targeted relaxation of expressive musculature. Relieve dynamic lines while maintaining soft natural animations.",
      description: "Our world-class masterclass covers reconstructive dilutions, micro-droplet techniques, safe anatomical boundaries, and the direct treatment of glabella lines, forehead creases, crow's feet, bunny lines, masseter hypertrophy (jaw slimming), and gummy smiles.",
      injectPoints: [
        "Glabella: Corrugator & Procerus complex",
        "Forehead: Frontalis muscle vectors",
        "Lateral Canthal: Orbicularis oculi outer fibers",
        "Lower Face: Masseter boundaries and Mentalis"
      ],
      syllabus: [
        "Anatomy & physiology of dynamic facial wrinkles",
        "Botulinum Toxin Type A reconstitution, safety profiles & dosage",
        "Candidate evaluation, aesthetic mapping, photography protocols",
        "Supervised hands-on training on live screening patient candidates",
        "Complication diagnostics, management and clinical support"
      ],
      mentors: ["Dr. Shumaila Khan (Academic Director & Consultant Dermatologist)"]
    },
    {
      id: "fillers",
      name: "Masterclass in Basic & Advanced Dermal Fillers",
      category: "Facial Volumisation",
      duration: "2 Days Academic Residency",
      cpdCredits: "20 CPD Hours",
      handsOnRatio: "2 Live Case Studies with Mentor Co-injection",
      badge: "Most Popular",
      concept: "Restoring age-associated skeletal resumptions, deep fat-pad atrophy, and vermilion custom volume adjustments.",
      description: "Step-by-step guidance utilizing needle vs. micro-cannula inputs. Train on the revolutionary MD Codes system (Mauricio de Maio) focusing on the zygomatic-malar apex, piriform fossa, nasolabial folds, marionette lines, chin projection, and beautiful vermilion border restoration.",
      injectPoints: [
        "Malar: Deep supraperiosteal malar bolus",
        "Lips: Cupid's bow and Vermilion body linear threading",
        "Nasolabial: Subdermal linear retrograde threading",
        "Chin: Projection and jawline definition"
      ],
      syllabus: [
        "Rheology of Hyaluronic Acid (G-prime, cohesivity, elasticity)",
        "Anatomical danger zones: avoiding facial artery and angular artery",
        "Nerve blocks, local anesthetic infiltration, patient comfort",
        "Hands-on linear threading, depot, bolus, fanning techniques",
        "Vascular occlusion emergencies: Hyaluronidase dilution protocol"
      ],
      mentors: ["Dr. Shumaila Khan (Academic Director & Consultant Dermatologist)"]
    },
    {
      id: "lasers",
      name: "Clinical Lasers & Energy-Based Devices (EBDs)",
      category: "Dermatological Tech",
      duration: "1 Intensive Day",
      cpdCredits: "10 CPD Hours",
      handsOnRatio: "Equipment Operational Drills & Patient Setup",
      badge: "Tech Focus",
      concept: "Harnessing physics of light, pulse-widths, and thermal relaxation times to target selective dermatological pigments safely.",
      description: "Understand laser safety, skin resurfacing, and pigmentation therapeutics. Learn to program laser device parameters for fractional Carbon dioxide (CO2) lasers, Q-Switched Nd:YAG lasers, and Intense Pulsed Light (IPL) therapies.",
      injectPoints: [
        "Skin: Fitzpatrick skin classification diagnostic",
        "Vascular: Pulse-widths for superficial angiomas",
        "Resurfacing: Thermal ablation depths for scarring",
        "Hyperpigmentation: Q-Switch frequencies for melasma"
      ],
      syllabus: [
        "Laser physics and selective photothermolysis",
        "Vascular, pigmentary, and fractional therapeutic protocols",
        "Post-procedure healing profiles, sunscreens, hyperpigmentation",
        "Hands-on device operational drills on cosmetic simulators",
        "Laser clinical safety, eye protections, laser plume evacuation"
      ],
      mentors: ["Dr. Shumaila Khan (Academic Director & Consultant Dermatologist)"]
    },
    {
      id: "rhinoplasty",
      name: "Liquid Rhinoplasty & Profiloplasty",
      category: "Advanced Injectables",
      duration: "1 Day Advanced Masterclass",
      cpdCredits: "12 CPD Hours",
      handsOnRatio: "Senior Candidates Only (Pre-requisite: Basic Filler)",
      badge: "Ultra Premium",
      concept: "Mastering three-dimensional nasal angles, hump camouflage, and jawline-profile harmony without surgical down-time.",
      description: "Liquid Rhinoplasty is an advanced aesthetic skill. This comprehensive masterclass teaches you how to lift the nasal tip, mask dorsal humps, and construct facial profile harmony using High G-prime dermal fillers, under rigid safety protocols to prevent vascular complications.",
      injectPoints: [
        "Dorsal Hump: Midline supraperiosteal micro-boluses",
        "Nasal Tip: Tip projection angle lift",
        "Columella: Structural anchor points"
      ],
      syllabus: [
        "Intricate arterial vascular anatomy of the external nose",
        "High G-prime Hyaluronic Acids vs Calcium Hydroxyapatite",
        "Midline safety injections, cannula vs sharp needle advantages",
        "Profiloplasty mapping: Angle assessment (nasofrontal/nasolabial)",
        "Management of ophthalmic artery backup vectors and necrosis"
      ],
      mentors: ["Dr. Shumaila Khan (Academic Director & Consultant Dermatologist)"]
    }
  ];

  // Filter courses based on active classification state
  const filteredCourses = useMemo(() => {
    if (!selectedFilter) return coursesData;
    return coursesData.filter((c) => c.id === selectedFilter);
  }, [selectedFilter]);

  const handleApplyClick = (courseName: string) => {
    onApplyForCourse(courseName);
    const element = document.getElementById("registration-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-neutral-950 py-20 px-4 md:px-8 relative z-10 border-b border-white/10" id="courses-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
            Professional Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading">
            Aesthetic Medicine <span className="text-[#E1A140] font-serif lowercase italic font-normal">Workshops</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E1A140] mx-auto mt-4 mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-300 font-sans font-normal leading-relaxed">
            Each workshop is formulated on rigid evidence-based medical literature, 
            combining in-depth anatomical theory with raw clinical hands-on inject experience on selected candidates.
          </p>
        </div>

        {/* --- DYNAMIC COURSE FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="course-filters-bar">
          <button
            onClick={() => onSelectFilter(null)}
            className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-md cursor-pointer ${
              selectedFilter === null
                ? "bg-[#E1A140] text-black shadow-lg border border-[#E1A140]/60"
                : "bg-neutral-900/60 light:bg-white/80 text-neutral-300 light:text-neutral-800 hover:text-white border border-white/15 light:border-neutral-300"
            }`}
          >
            All Courses ({coursesData.length})
          </button>
          
          {coursesData.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectFilter(course.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-md cursor-pointer ${
                selectedFilter === course.id
                  ? "bg-[#E1A140] text-black shadow-lg border border-[#E1A140]/60"
                  : "bg-neutral-900/60 light:bg-white/80 text-neutral-300 light:text-neutral-800 hover:text-white border border-white/15 light:border-neutral-300"
              }`}
            >
              {course.id === "botox" ? "Botox Master" : course.id === "fillers" ? "Dermal Fillers" : course.id === "lasers" ? "Medical Lasers" : "Liquid Rhinoplasty"}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC COURSE CARD GRID --- */}
        <div className="grid md:grid-cols-2 gap-8" id="courses-grid-elements">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-neutral-900/60 light:bg-white/90 backdrop-blur-md border border-white/15 light:border-neutral-200 hover:border-[#E1A140]/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-305 shadow-lg relative group"
              id={`course-card-${course.id}`}
            >
              {/* Gold light leak effect on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/2 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all"></div>
              
              {/* Card Ribbon / Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E1A140] bg-neutral-950/80 light:bg-neutral-100/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 light:border-neutral-300">
                  {course.badge}
                </span>
              </div>

              <div>
                {/* Visual Cover Banner for the course */}
                <div className="w-full h-48 bg-neutral-950 light:bg-neutral-100 border border-white/10 light:border-neutral-200 mb-6 relative overflow-hidden rounded-xl flex items-center justify-center">
                  <img
                    src={course.id === "botox" || course.id === "fillers" ? clinicalImg : course.id === "lasers" ? laserImg : suiteImg}
                    alt={course.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Category & Title */}
                <p className="text-xs font-mono tracking-widest text-[#E1A140] uppercase mb-2 font-semibold">
                  {course.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial-heading mb-3 uppercase leading-snug group-hover:text-amber-300 transition-colors">
                  {course.name}
                </h3>
                
                {/* Concept quote */}
                <p className="text-sm text-[#E1A140] leading-relaxed italic mb-4 font-serif pl-3.5 border-l-2 border-[#E1A140]">
                  "{course.concept}"
                </p>

                {/* Sub-description */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mb-6">
                  {course.description}
                </p>

                {/* Technical Inject Areas (Grid) */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2 font-mono">
                    <Syringe size={14} className="text-[#E1A140]" />
                    <span>Hands-On Targets Covered:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {course.injectPoints.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 font-sans">
                        <span className="w-2 h-2 rounded-full bg-[#E1A140] shrink-0"></span>
                        <span className="font-normal">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workshop syllabus outline */}
                <div className="mb-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2 font-mono">
                    <BookOpen size={14} className="text-[#E1A140]" />
                    <span>Workshop Syllabus:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {course.syllabus.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                        <span className="text-[#E1A140] font-mono mt-0.5">•</span>
                        <span className="font-normal">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical indicators / Footer of card */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2.5 text-left">
                    <Clock size={18} className="text-[#E1A140] shrink-0" />
                    <div>
                      <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Duration</p>
                      <p className="text-sm font-semibold text-white mt-1">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-left">
                    <Award size={18} className="text-[#E1A140] shrink-0" />
                    <div>
                      <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Accreditation</p>
                      <p className="text-sm font-semibold text-white mt-1">{course.cpdCredits}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-left col-span-2 sm:col-span-1">
                    <Users size={18} className="text-[#E1A140] shrink-0" />
                    <div>
                      <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Clinical Scope</p>
                      <p className="text-sm font-semibold text-white mt-1">{course.handsOnRatio}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Faculty Supervisors</p>
                    <p className="text-sm font-semibold text-neutral-200 mt-1">
                      {course.mentors.join(" & ")}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApplyClick(course.name)}
                    className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold tracking-widest text-black bg-[#E1A140] hover:bg-amber-300 rounded-full transition-all text-center uppercase cursor-pointer shadow-md backdrop-blur-md border border-[#E1A140]/60 font-mono"
                  >
                    Register for course
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
