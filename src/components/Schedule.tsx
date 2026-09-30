import React, { useState } from "react";
import { MapPin, Calendar, Users, Clock, Compass, AlertCircle, ArrowRight, HeartHandshake } from "lucide-react";

interface ScheduleItem {
  id: string;
  city: string;
  date: string;
  venue: string;
  module: string;
  totalSeats: number;
  openSeats: number;
  timeframe: string;
  coordinates: string;
}

export function Schedule() {
  const [selectedCity, setSelectedCity] = useState<"karachi" | "lahore" | "islamabad">("lahore");

  const schedules: ScheduleItem[] = [
    {
      id: "lh-1",
      city: "lahore",
      date: "Saturday, October 24, 2026",
      venue: "AAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
      module: "Facial Sculpting & MD Codes™ Masterclass",
      totalSeats: 15,
      openSeats: 4,
      timeframe: "09:00 AM - 06:00 PM PST",
      coordinates: "Phase 5 DHA, Lahore"
    },
    {
      id: "lh-2",
      city: "lahore",
      date: "Sunday, October 25, 2026",
      venue: "AAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
      module: "Advanced Non-Surgical Thread-Lift Masterclass",
      totalSeats: 12,
      openSeats: 3,
      timeframe: "09:00 AM - 06:30 PM PST",
      coordinates: "Phase 5 DHA, Lahore"
    },
    {
      id: "kh-1",
      city: "karachi",
      date: "Saturday, July 11, 2026",
      venue: "AAMA Partner Aesthetics Centre, Block 4, Clifton, Karachi",
      module: "Basic & Advanced Botox Masterclass",
      totalSeats: 15,
      openSeats: 3,
      timeframe: "09:00 AM - 06:00 PM PST",
      coordinates: "Clifton, Karachi near Ocean Mall"
    },
    {
      id: "kh-2",
      city: "karachi",
      date: "Sunday, July 12, 2026",
      venue: "AAMA Partner Aesthetics Centre, Block 4, Clifton, Karachi",
      module: "Aesthetic Dermal Fillers (Volumisation Codes)",
      totalSeats: 12,
      openSeats: 5,
      timeframe: "09:00 AM - 06:30 PM PST",
      coordinates: "Clifton, Karachi near Ocean Mall"
    },
    {
      id: "is-1",
      city: "islamabad",
      date: "Saturday, August 01, 2026",
      venue: "AAMA Executive Complex, Sector G-8, Islamabad",
      module: "Masterclass in Profiloplasty & Liquid Rhinoplasty",
      totalSeats: 10,
      openSeats: 2,
      timeframe: "10:00 AM - 05:30 PM PST",
      coordinates: "Sector G-8, Islamabad"
    },
    {
      id: "is-2",
      city: "islamabad",
      date: "Sunday, August 02, 2026",
      venue: "AAMA Executive Complex, Sector G-8, Islamabad",
      module: "Combined Botox & Dynamic Fillers Masterclass",
      totalSeats: 15,
      openSeats: 4,
      timeframe: "09:00 AM - 06:00 PM PST",
      coordinates: "Sector G-8, Islamabad"
    }
  ];

  const filteredItems = schedules.filter((s) => s.city === selectedCity);

  // Daily structural breakdown timeline representation
  const timelineData = [
    { time: "09:00 AM - 11:30 AM", event: "Applied Anatomy & Patient Selection", details: "Deep-dive lecture focusing on dangerous arterial grids, dilution science, patient photography, and anatomical target lines." },
    { time: "11:30 AM - 01:00 PM", event: "Mentor Live Demonstration & Mapping", details: "Mentor maps faces live, evaluating muscle resistance, skin vectors, and inject angles. Interactive candidate calibration." },
    { time: "01:00 PM - 02:00 PM", event: "Clinical Buffet & Networking", details: "Exclusive private dining with colleagues and international aesthetic consultants to share local clinical insights." },
    { time: "02:00 PM - 05:30 PM", event: "Supervised Hands-on Candidate Injecting", details: "Strictly supervised 1-on-1 hands-on candidate injection on pre-screened models. Validating grip stability, depth, and safety." },
    { time: "05:30 PM - 06:00 PM", event: "Certificate Ceremony & Portals Access", details: "Distribution of accredited CPD certifications, peer photography, and granting entry to the global AAMA Pakistan Alumni Portal." }
  ];

  return (
    <section className="bg-neutral-950 py-20 border-b border-white/10" id="schedule-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              Live Clinical Assemblies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading">
              Workshop Schedule <span className="text-[#E1A140] font-serif lowercase italic font-normal">&amp; locations</span>
            </h2>
          </div>

          {/* Toggle buttons */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 bg-neutral-900/60 light:bg-white/80 p-1.5 rounded-full border border-white/15 light:border-neutral-300 backdrop-blur-md" id="city-toggle-buttons">
            <button
              onClick={() => setSelectedCity("lahore")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md cursor-pointer ${
                selectedCity === "lahore"
                  ? "bg-[#E1A140] text-black shadow-lg border border-[#E1A140]/60"
                  : "text-neutral-300 light:text-neutral-800 hover:text-white"
              }`}
            >
              Lahore Campus
            </button>
            <button
              onClick={() => setSelectedCity("karachi")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md cursor-pointer ${
                selectedCity === "karachi"
                  ? "bg-[#E1A140] text-black shadow-lg border border-[#E1A140]/60"
                  : "text-neutral-300 light:text-neutral-800 hover:text-white"
              }`}
            >
              Karachi Hub
            </button>
            <button
              onClick={() => setSelectedCity("islamabad")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md cursor-pointer ${
                selectedCity === "islamabad"
                  ? "bg-[#E1A140] text-black shadow-lg border border-[#E1A140]/60"
                  : "text-neutral-300 light:text-neutral-800 hover:text-white"
              }`}
            >
              Islamabad Center
            </button>
          </div>
        </div>

        {/* --- MAIN SPLIT SECTION: METRICS AND ROADMAP --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Workshop Locations List & seats */}
          <div className="lg:col-span-6 space-y-6 text-left" id="schedules-list-column">
            {filteredItems.map((item) => {
              const seatPercent = (item.openSeats / item.totalSeats) * 100;
              const isLowSeats = item.openSeats <= 3;

              return (
                <div
                  key={item.id}
                  className="bg-neutral-900 border border-white/15 hover:border-[#E1A140]/40 p-6 sm:p-7 rounded-none relative overflow-hidden transition-all duration-300 shadow-xl"
                  id={`schedule-card-${item.id}`}
                >
                  {/* Subtle City Icon Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-neutral-950 px-3 py-1 rounded-none border border-white/15 text-xs font-mono uppercase tracking-widest text-[#E1A140] font-bold">
                    <MapPin size={12} />
                    <span>{item.city}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#E1A140] font-mono tracking-wide mb-1.5 flex items-center gap-2">
                    <Calendar size={15} />
                    <span>{item.date}</span>
                  </p>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase font-editorial-heading mb-3 max-w-[85%]">
                    {item.module}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300 mb-6 max-w-lg">
                    <div className="flex gap-2.5 items-start">
                      <Compass size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                      <span>{item.venue}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Clock size={16} className="text-[#E1A140] shrink-0" />
                      <span className="font-mono text-neutral-200">{item.timeframe}</span>
                    </div>
                  </div>

                  {/* Dynamic Seats remain metric */}
                  <div className="bg-neutral-950 p-4 rounded-none border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                        Remaining Seat Allocation
                      </span>
                      <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isLowSeats ? "text-rose-400" : "text-[#E1A140]"}`}>
                        {isLowSeats && <AlertCircle size={15} className="animate-bounce" />}
                        <span>{item.openSeats} of {item.totalSeats} Slots Open</span>
                      </span>
                    </div>
                    
                    {/* Progress slider bar */}
                    <div className="h-2 w-full bg-neutral-900 rounded-none overflow-hidden">
                      <div
                        className={`h-full rounded-none transition-all duration-500 ${
                          isLowSeats ? "bg-rose-500" : "bg-[#E1A140]"
                        }`}
                        style={{ width: `${seatPercent}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center mt-3 text-xs text-neutral-400">
                      <span>Strict limited class ratios</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Immediate booking essential</span>
                    </div>
                  </div>

                  {/* Immediate registration redirection */}
                  <div className="mt-5 flex justify-end">
                    <a
                      href="#registration"
                      onClick={() => {
                        const element = document.getElementById("registration-section");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-xs sm:text-sm font-bold text-[#E1A140] hover:text-amber-300 flex items-center gap-2 group cursor-pointer uppercase tracking-wider"
                    >
                      <span>Pre-register for slot</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              );
            })}

            {/* Simulated Clinical Trust Widget */}
            <div className="bg-neutral-900 border border-white/15 p-6 rounded-none flex items-start gap-4 shadow-xl">
              <HeartHandshake className="text-[#E1A140] shrink-0 mt-0.5" size={26} />
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold uppercase text-white tracking-wider font-sans">
                  Partner Clinic Standards
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  All clinical venues are certified under provincial health regulatory authorities (such as SHCC and IHRA), maintaining surgical sterilization, complete trauma safety packs, and professional lighting configurations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Daily Workshop Timeline Breakdown */}
          <div className="lg:col-span-6 bg-neutral-900 border border-white/15 p-6 md:p-8 rounded-none text-left shadow-2xl" id="timeline-column">
            <h3 className="text-xs sm:text-sm font-bold text-[#E1A140] uppercase font-mono tracking-widest mb-6">
              Daily Clinical Roadmap Schedule
            </h3>

            {/* Stepped Timeline */}
            <div className="space-y-7 relative border-l border-white/10 pl-6 ml-2">
              {timelineData.map((step, i) => (
                <div key={i} className="relative group/timeline font-sans">
                  {/* Outer circle dot */}
                  <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-neutral-950 border-2 border-[#E1A140] group-hover/timeline:scale-125 transition-transform"></div>
                  
                  <div className="space-y-1.5 font-sans">
                    <span className="text-xs font-mono font-bold text-[#E1A140] bg-neutral-950 px-2.5 py-1 rounded-none border border-white/10">
                      {step.time}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase tracking-tight font-editorial-heading mt-2.5">
                      {step.event}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mt-1">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
