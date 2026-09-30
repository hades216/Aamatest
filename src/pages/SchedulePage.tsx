import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SCHEDULE_DATA } from "../data/coursesData";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  UserCheck, 
  ArrowRight, 
  Download, 
  Filter, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

// @ts-ignore
import laserImg from "../assets/images/clear_laser_device_1781221773224.jpg";

export function SchedulePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityParam = searchParams.get("city") || "all";
  const [selectedCity, setSelectedCity] = useState<string>(cityParam);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const cities = ["all", "Lahore", "Karachi", "Islamabad"];

  const filteredSchedule = useMemo(() => {
    if (selectedCity === "all") return SCHEDULE_DATA;
    return SCHEDULE_DATA.filter((item) => item.city.toLowerCase() === selectedCity.toLowerCase());
  }, [selectedCity]);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    if (city === "all") {
      searchParams.delete("city");
    } else {
      searchParams.set("city", city);
    }
    setSearchParams(searchParams);
  };

  const handleDownloadBrochure = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      setDownloadNotice(false);
    }, 4000);
  };

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="2026 Course Schedule & Timetable | AAMA Academy"
        description="View upcoming aesthetic training cohort dates across Lahore, Karachi, and Islamabad. Small batches limited to 10-12 doctors for maximum hands-on exposure."
      />
      {/* 1. SCHEDULE HERO WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={laserImg}
        imageAlt="AAMA Aesthetic Medicine Timetable & Cohort Dates"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Academic Year 2026 Timetable
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Training Schedule &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">cohorts</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Choose your preferred training station across Lahore, Karachi, or Islamabad. Cohorts are strictly capped at 10-12 delegates to safeguard 1:1 patient injection time.
        </p>
      </ParallaxHeader>

      {/* 2. CITY TABS & DOWNLOAD BAR */}
      <section className="sticky top-20 z-30 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* City Selection Tabs */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 uppercase font-mono mr-2 hidden sm:inline">Campus:</span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-none transition-all cursor-pointer font-mono ${
                  selectedCity.toLowerCase() === city.toLowerCase()
                    ? "bg-[#E1A140] text-black shadow-md"
                    : "bg-neutral-950 text-neutral-300 hover:text-white border border-white/10"
                }`}
              >
                {city === "all" ? "All Campuses" : `${city} Campus`}
              </button>
            ))}
          </div>

          {/* Download Academic Calendar */}
          <div>
            <button
              onClick={handleDownloadBrochure}
              className="inline-flex items-center gap-2 bg-neutral-950 border border-white/20 hover:border-[#E1A140] text-neutral-200 hover:text-[#E1A140] px-4 py-2 text-xs uppercase font-mono font-bold transition-colors cursor-pointer"
            >
              <Download size={14} />
              <span>Download 2026 Timetable PDF</span>
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="max-w-7xl mx-auto mt-3 p-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-between animate-in fade-in">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>AAMA 2026 Academic Calendar &amp; Curriculum Prospectus downloaded successfully.</span>
            </span>
            <button onClick={() => setDownloadNotice(false)} className="text-emerald-400 hover:underline">
              Dismiss
            </button>
          </div>
        )}
      </section>

      {/* 3. SCHEDULE BATCHES LIST */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {filteredSchedule.map((batch) => (
              <div
                key={batch.id}
                className="bg-neutral-900 border border-white/10 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#E1A140]/60 transition-all"
              >
                {/* Left Date & City Block */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="bg-neutral-950 border border-white/10 p-4 text-center min-w-[140px]">
                    <span className="text-xs uppercase font-bold text-[#E1A140] font-mono block">
                      {batch.city} Campus
                    </span>
                    <span className="text-base font-bold text-white font-mono mt-1 block">
                      {batch.date.split(",")[0]}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono block">
                      {batch.date.includes("2026") ? "2026" : ""}
                    </span>
                  </div>

                  {/* Center Info */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#E1A140]/15 text-[#E1A140] text-xs font-bold uppercase px-2.5 py-0.5 border border-[#E1A140]/30 font-mono">
                        {batch.status}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        Lead: <strong className="text-neutral-200">{batch.leadTrainer}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-editorial-heading">
                      {batch.courseName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#E1A140]" />
                        <span>{batch.timing}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#E1A140]" />
                        <span>{batch.venue}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Seat & CTA Block */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-neutral-400 block font-mono">Availability:</span>
                    <span className="text-sm font-bold text-amber-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      {batch.seatsRemaining} / {batch.seatsTotal} Seats Left
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/courses/${batch.courseId}`}
                      className="border border-white/20 hover:bg-white/10 text-white px-4 py-2.5 text-xs uppercase font-bold tracking-wider transition-colors"
                    >
                      Syllabus
                    </Link>
                    <Link
                      to={`/register?course=${batch.courseId}&city=${batch.city}`}
                      className="bg-[#E1A140] hover:bg-amber-300 text-black px-5 py-2.5 text-xs uppercase font-bold tracking-wider transition-colors"
                    >
                      Book Seat
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL ROTATION POLICIES */}
      <section className="py-16 px-4 md:px-8 bg-neutral-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-950 border border-white/10">
            <ShieldCheck size={24} className="text-[#E1A140] mb-3" />
            <h4 className="text-base font-bold text-white uppercase font-editorial-heading mb-2">
              Registration Window
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Batch admissions close 7 days prior to course commencement to finalize patient model screening and clinical kits.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-white/10">
            <UserCheck size={24} className="text-[#E1A140] mb-3" />
            <h4 className="text-base font-bold text-white uppercase font-editorial-heading mb-2">
              Model Accompaniment
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Delegates may also bring a personal candidate model for treatment under faculty guidance subject to pre-approval.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-white/10">
            <Calendar size={24} className="text-[#E1A140] mb-3" />
            <h4 className="text-base font-bold text-white uppercase font-editorial-heading mb-2">
              Flexible Transfer Policy
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Registered physicians may transfer their seat to another city or upcoming date with 14-day advance notification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
