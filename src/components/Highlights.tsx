import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause, Award, MapPin, Zap, UserCheck, Flame } from "lucide-react";

// @ts-ignore
import clinicalImg from "../assets/images/clear_clinical_treatment_1781221754294.jpg";
// @ts-ignore
import suiteImg from "../assets/images/bright_clinical_suite_1781221728289.jpg";
// @ts-ignore
import laserImg from "../assets/images/clear_laser_device_1781221773224.jpg";

interface HighlightStory {
  id: string;
  tag: string;
  imageUrl: string;
  title: string;
  slides: {
    title: string;
    description: string;
    badge: string;
    icon: React.ReactNode;
    bullets: string[];
    imgAlt: string;
    accentColor: string;
    bgImage?: string;
  }[];
}

export function Highlights() {
  const [activeStory, setActiveStory] = useState<HighlightStory | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const stories: HighlightStory[] = [
    {
      id: "masterBotox",
      tag: "#masterBotox",
      imageUrl: clinicalImg,
      title: "Botox Masterclass",
      slides: [
        {
          title: "Mastering Facial Aesthetics",
          badge: "Hands-on Workshop",
          icon: <Award className="text-amber-500" />,
          description: "IAMA provides advanced neuromodulator training on actual patient models under the direct supervision of international aesthetic mentors.",
          bullets: [
            "Dosage dilution & reconstructive calculations",
            "Symmetry calibration using precise callipers",
            "Anatomic muscle mapping to avoid vascular compromise"
          ],
          imgAlt: "Anatomical Injection safety training",
          accentColor: "from-amber-500 to-amber-600",
          bgImage: clinicalImg
        },
        {
          title: "Critical Injections Sites",
          badge: "Clinical Security",
          icon: <UserCheck className="text-amber-500" />,
          description: "Understanding exact injection depths and syringe angles is critical to clinical success and preventing side effects.",
          bullets: [
            "Glabellar complex (Procerus / Corrugators)",
            "Frontalis line micro-droplets",
            "Advanced masseter sliming safe-zones"
          ],
          imgAlt: "Injection angle training",
          accentColor: "from-amber-600 to-orange-600",
          bgImage: clinicalImg
        }
      ]
    },
    {
      id: "karachi",
      tag: "#karachi",
      imageUrl: suiteImg,
      title: "Karachi Workshops",
      slides: [
        {
          title: "Live in Karachi",
          badge: "Sindh Medical Hub",
          icon: <MapPin className="text-amber-500" />,
          description: "Highlights from our recent sold-out training assembly at our state of the art partner clinics in Clifton, Karachi.",
          bullets: [
            "Over 45 doctors certified in basic & advanced injectables",
            "Over 12 hours of raw clinical hands-on inject experience",
            "Comprehensive post-course feedback validation"
          ],
          imgAlt: "Doctors workshop assemblage in Clifton, Karachi",
          accentColor: "from-amber-500 to-yellow-600",
          bgImage: suiteImg
        },
        {
          title: "Peer-to-Peer Interaction",
          badge: "Academic Legacy",
          icon: <Award className="text-amber-500" />,
          description: "Aesthetic physicians sharing real experiences, clinical complications, and clinic business blueprints.",
          bullets: [
            "Access to an active secret alumni medical support forum",
            "Live patient consulting drills",
            "Mentors evaluating live candidate hand stability"
          ],
          imgAlt: "Candidate mentorship evaluation",
          accentColor: "from-yellow-600 to-amber-750",
          bgImage: suiteImg
        }
      ]
    },
    {
      id: "lasercourse",
      tag: "#lasercourse",
      imageUrl: laserImg,
      title: "Laser Course",
      slides: [
        {
          title: "Energy Based Devices (EBDs)",
          badge: "Tech Aesthetic Integration",
          icon: <Zap className="text-amber-500" />,
          description: "Learn safe, effective settings for vascular lasers, pigment lasers, and fractional carbon-dioxide equipment in clinical practices.",
          bullets: [
            "Thermal relaxation times & selective photothermolysis",
            "Safe skin-type settings (Fitzpatrick scale I-VI)",
            "Post-laser recovery regimens & hyperpigmentation protection"
          ],
          imgAlt: "Fractional Carbon-dioxide laser operating dashboard",
          accentColor: "from-amber-500 to-cyan-600",
          bgImage: laserImg
        },
        {
          title: "Clinical Laser Safety",
          badge: "Laser Physics",
          icon: <Flame className="text-rose-500" />,
          description: "Understanding skin penetration depths of diverse wavelengths. Learn clinical parameter calibration for real patient outcomes.",
          bullets: [
            "Nd:YAG 1064nm safety procedures",
            "Q-Switched laser calibration for carbon peeling",
            "Intense Pulsed Light (IPL) vascular therapeutics"
          ],
          imgAlt: "Laser dermatology setup",
          accentColor: "from-cyan-650 to-amber-600",
          bgImage: laserImg
        }
      ]
    },
    {
      id: "highlights",
      tag: "Highlights",
      imageUrl: suiteImg,
      title: "IAMA Legacy",
      slides: [
        {
          title: "Academic Legacy",
          badge: "CPD ACCREDITATION",
          icon: <Award className="text-amber-500" />,
          description: "IAMA Institute is proud to set rigorous standards for candidate certification, producing the most precise medical injectors in Pakistan.",
          bullets: [
            "Residencies mentored by certified aesthetic practitioners",
            "High faculty-to-student training ratios",
            "Graduates launching thriving private clinics nationwide"
          ],
          imgAlt: "IAMA formal certificate presentation ceremony",
          accentColor: "from-red-600 to-amber-650",
          bgImage: suiteImg
        }
      ]
    }
  ];

  // Story autoplay interval controller
  useEffect(() => {
    let timer: any;
    if (activeStory && !paused) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextSlide();
            return 0;
          }
          return prev + 2; // Increments to reach 100 in 5 seconds (5000ms / 100ms)
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [activeStory, activeSlideIndex, paused]);

  const handleOpenStory = (story: HighlightStory) => {
    setActiveStory(story);
    setActiveSlideIndex(0);
    setProgress(0);
    setPaused(false);
  };

  const handleCloseStory = () => {
    setActiveStory(null);
    setProgress(0);
  };

  const handleNextSlide = () => {
    if (activeStory) {
      if (activeSlideIndex < activeStory.slides.length - 1) {
        setActiveSlideIndex((prev) => prev + 1);
        setProgress(0);
      } else {
        // Find next story
        const currentIdx = stories.findIndex((s) => s.id === activeStory.id);
        if (currentIdx < stories.length - 1) {
          setActiveStory(stories[currentIdx + 1]);
          setActiveSlideIndex(0);
          setProgress(0);
        } else {
          handleCloseStory();
        }
      }
    }
  };

  const handlePrevSlide = () => {
    if (activeStory) {
      if (activeSlideIndex > 0) {
        setActiveSlideIndex((prev) => prev - 1);
        setProgress(0);
      } else {
        // Find previous story
        const currentIdx = stories.findIndex((s) => s.id === activeStory.id);
        if (currentIdx > 0) {
          setActiveStory(stories[currentIdx - 1]);
          setActiveSlideIndex(stories[currentIdx - 1].slides.length - 1);
          setProgress(0);
        }
      }
    }
  };

  const currentSlide = activeStory?.slides[activeSlideIndex];

  return (
    <section className="bg-neutral-950 py-12 border-b border-white/10" id="instagram-highlights-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Caption */}
        <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
          Social Media Archive &amp; Alumni Moments
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-8">
          Interactive Stories &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">highlights</span>
        </h2>

        {/* --- ROUND INSTAGRAM STORY SPHERES ROW --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12" id="highlights-bubble-container">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => handleOpenStory(story)}
              className="flex flex-col items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500/30 p-2 rounded-none group/bubble cursor-pointer"
              id={`story-bubble-${story.id}`}
            >
              {/* Outer Glowing Interactive Ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] border-2 border-[#E1A140] transform transition-all duration-500 ease-out group-hover/bubble:scale-110 group-hover/bubble:shadow-lg group-hover/bubble:shadow-amber-500/20">
                <div className="absolute inset-[1px] bg-neutral-950 rounded-full"></div>
                {/* Image Inside Circle with fade-in-up entrance animation */}
                <div className="relative w-full h-full overflow-hidden rounded-full border border-neutral-900 bg-neutral-950 animate-fade-in-up">
                  <img
                    src={story.imageUrl}
                    alt={story.tag}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover/bubble:scale-115 pointer-events-none"
                  />
                </div>
              </div>

              {/* Dynamic tag below bubble */}
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-bold text-neutral-200 group-hover/bubble:text-[#E1A140] transition-colors tracking-wide font-mono">
                  {story.tag}
                </span>
                <span className="block text-xs text-neutral-400 uppercase tracking-widest font-sans mt-0.5">
                  view archive
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* --- DYNAMIC STORY MODAL POPUP --- */}
        {activeStory && currentSlide && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Modal Closer Mask */}
            <div className="absolute inset-0" onClick={handleCloseStory}></div>

            {/* Main Interactive Story Box */}
            <div className="relative bg-[#0D0B0A] w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl z-10 flex flex-col justify-between" id="story-modal-box">
              
              {/* Top Section: Progress Bar and Header Info */}
              <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/85 via-black/45 to-transparent z-20">
                
                {/* 1. Progress Indicator ticks */}
                <div className="flex gap-1.5 w-full mb-3">
                  {activeStory.slides.map((_, idx) => (
                    <div key={idx} className="h-1 bg-zinc-800 rounded-full flex-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-100 ease-linear rounded-full"
                        style={{
                          width:
                            idx < activeSlideIndex
                              ? "100%"
                              : idx === activeSlideIndex
                              ? `${progress}%`
                              : "0%"
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* 2. Header Info Row (IAMA Profile icon + title + close buttons) */}
                <div className="flex justify-between items-center text-zinc-100">
                  <div className="flex items-center gap-2.5">
                    {/* Circle micro-pfp */}
                    <div className="w-8 h-8 rounded-full border border-amber-500/40 p-[1.5px] bg-gradient-to-tr from-amber-500 to-rose-500">
                      <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center font-bold text-[9px] text-amber-400">
                        IAMA
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold tracking-wide m-0 text-zinc-100">aama.institute</p>
                      <p className="text-[9px] text-zinc-400 m-0 flex items-center gap-1 leading-none">
                        <span>IAMA Pakistan</span>
                        <span className="w-1 h-1 rounded-full bg-[#B48425]"></span>
                        <span>{activeStory.title}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPaused(!paused)}
                      className="p-1.5 rounded-full hover:bg-white/10 text-zinc-350 hover:text-white focus:outline-none cursor-pointer"
                      title={paused ? "Play" : "Pause"}
                      aria-label={paused ? "Play storyline" : "Pause storyline"}
                    >
                      {paused ? <Play size={14} fill="currentColor" aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                    </button>
                    <button
                      onClick={handleCloseStory}
                      className="p-1.5 rounded-full hover:bg-white/10 text-zinc-350 hover:text-white focus:outline-none cursor-pointer"
                      title="Close"
                      aria-label="Close story preview"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Center: Interactive Area clickers for skipping */}
              <div className="absolute inset-x-0 top-16 bottom-24 flex z-10">
                <button
                  onClick={handlePrevSlide}
                  className="w-1/3 h-full cursor-w-resize focus:outline-none"
                  aria-label="Previous slide"
                ></button>
                <button
                  onClick={() => setPaused(!paused)}
                  className="w-1/3 h-full focus:outline-none"
                  aria-label="Pause storyline"
                ></button>
                <button
                  onClick={handleNextSlide}
                  className="w-1/3 h-full cursor-e-resize focus:outline-none"
                  aria-label="Next slide"
                ></button>
              </div>

              {/* Story Visual Backdrop Image or Gradient */}
              {currentSlide.bgImage ? (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={currentSlide.bgImage}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/80 to-[#0D0B0A]/15"></div>
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-b ${currentSlide.accentColor} opacity-5 mix-blend-color z-0`}></div>
              )}

              {/* Background illustrative circle layout */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-80 h-80 rounded-full border border-dashed border-amber-500/20 animate-spin" style={{ animationDuration: "120s" }}></div>
                <div className="absolute w-60 h-60 rounded-full border border-dotted border-amber-500/10"></div>
              </div>

              {/* Navigation Left and Right buttons for Desktop (floating) */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:block z-30">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous story slide"
                  className="w-10 h-10 rounded-full bg-[#110F0E] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
              </div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:block z-30">
                <button
                  onClick={handleNextSlide}
                  aria-label="Next story slide"
                  className="w-10 h-10 rounded-full bg-[#110F0E] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Down Card: Clinical Information details */}
              <div className="mt-auto w-full p-6 bg-gradient-to-t from-black via-black/95 to-black/35 z-20 border-t border-zinc-900/60 relative">
                
                {/* Slide Category Flag */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span className="p-1 rounded bg-amber-500/10 border border-amber-500/25 text-[10px] text-amber-400 font-extrabold uppercase tracking-widest flex items-center gap-1">
                    {currentSlide.icon}
                    <span>{currentSlide.badge}</span>
                  </span>
                </div>

                {/* Narrative Slide Title */}
                <h3 className="text-xl font-bold tracking-tight text-zinc-50 mb-2 font-display">
                  {currentSlide.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4 text-left">
                  {currentSlide.description}
                </p>

                {/* Bullets mapping insights */}
                <ul className="space-y-1.5 text-left mb-6 text-xs text-zinc-400 font-sans list-none pl-0">
                  {currentSlide.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-amber-500 mt-0.5">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA inside story screen */}
                <div className="text-center">
                  <a
                    href="#registration"
                    onClick={() => {
                      handleCloseStory();
                      const element = document.getElementById("registration-section");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-block w-full py-3 bg-[#E1A140] text-black font-extrabold tracking-widest text-[11px] rounded-none transition-colors uppercase hover:bg-amber-400 text-center cursor-pointer"
                  >
                    Request Course Catalog & Join
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
