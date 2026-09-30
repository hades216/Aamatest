import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { COURSES_DATA, Course } from "../data/coursesData";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Search, 
  Filter, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Calendar, 
  ShieldCheck 
} from "lucide-react";

// @ts-ignore
import clinicalImg from "../assets/images/clear_clinical_treatment_1781221754294.jpg";

export function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "masterclass", label: "Facial Sculpting & USA Tours" },
    { id: "injectables", label: "Neuromodulators & Fillers" },
    { id: "bespoke", label: "1-on-1 Bespoke Training" },
    { id: "shadowing", label: "Clinical Shadowing" },
    { id: "handbook", label: "Injector Handbook" },
    { id: "lasers", label: "Medical Lasers & Tech" },
    { id: "threads", label: "PDO Thread Lifting" },
    { id: "skin", label: "Skin Boosters & PRP" },
    { id: "fellowship", label: "Board Fellowship (FAM)" },
    { id: "events", label: "Conferences & Keynotes" },
    { id: "models", label: "Patient Model Program" }
  ];

  const levels = ["all", "Beginner", "Intermediate", "Advanced", "Masterclass", "Fellowship", "All Levels"];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // Category Filter
      if (selectedCategory !== "all" && course.category !== selectedCategory) {
        return false;
      }
      // Level Filter
      if (selectedLevel !== "all" && course.level !== selectedLevel) {
        return false;
      }
      // Search Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = course.name.toLowerCase().includes(query);
        const matchesSub = course.subtitle.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesInject = course.injectPoints.some((p) => p.toLowerCase().includes(query));
        return matchesName || matchesSub || matchesDesc || matchesInject;
      }
      return true;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Medical Aesthetic Masterclasses & Fellowships | AAMA Academy"
        description="Explore accredited aesthetic medicine curriculums: Botox, Dermal Fillers, Liquid Rhinoplasty, Medical Lasers, and Board Fellowships for licensed medical practitioners."
      />

      {/* 1. COURSES HUB HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={clinicalImg}
        imageAlt="AAMA Aesthetic Medicine Training Courses"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <div className="inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/30 px-3 py-1 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-3 font-mono">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>100% Non-Surgical Medical Aesthetic Curriculums</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Masterclasses, <span className="text-[#E1A140] font-serif lowercase italic font-normal">fellowships</span> &amp; offerings
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          UK CPD accredited training courses designed exclusively for PM&amp;DC registered doctors and dentists, featuring 1:1 hands-on injection on live patient models, bespoke mentorship, and international clinical tours.
        </p>
      </ParallaxHeader>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="sticky top-20 z-30 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-full whitespace-nowrap transition-all cursor-pointer font-mono backdrop-blur-md ${
                  selectedCategory === cat.id
                    ? "bg-[#E1A140] text-black shadow-md border border-[#E1A140]/60"
                    : "bg-neutral-900/60 light:bg-white/80 text-neutral-300 light:text-neutral-800 hover:text-white border border-white/10 light:border-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input and Level Selector */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search size={15} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search procedures or Botox..."
                aria-label="Search masterclasses or procedures"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900/60 light:bg-white/80 border border-white/15 light:border-neutral-300 pl-9 pr-3 py-2 text-xs text-white light:text-neutral-900 placeholder-neutral-500 rounded-full backdrop-blur-md focus:outline-none focus:border-[#E1A140]"
              />
            </div>

            <select
              value={selectedLevel}
              aria-label="Filter masterclasses by level"
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-neutral-900/60 light:bg-white/80 border border-white/15 light:border-neutral-300 px-4 py-2 text-xs text-neutral-300 light:text-neutral-800 rounded-full backdrop-blur-md focus:outline-none focus:border-[#E1A140] uppercase font-mono cursor-pointer"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Masterclass">Masterclass</option>
              <option value="Fellowship">Fellowship</option>
              <option value="All Levels">All Levels</option>
            </select>
          </div>
        </div>
      </section>

      {/* 3. COURSES CARDS GRID */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/15 p-8 bg-neutral-900">
              <p className="text-[#E1A140] text-sm uppercase tracking-widest font-mono font-bold mb-2">No Curriculums Found</p>
              <p className="text-neutral-300 text-sm mb-4">No masterclasses matched your current filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSearchQuery("");
                }}
                className="bg-[#E1A140] text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="relative overflow-hidden group border border-white/15 light:border-neutral-200 hover:border-[#E1A140]/80 transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[530px] bg-neutral-900/60 light:bg-white/90 backdrop-blur-md shadow-lg"
                >
                  {/* Full-Card Background Image & Ambient Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-20 group-hover:opacity-35"
                    />
                  </div>

                  {/* Card Content Top Container */}
                  <div className="relative z-10 p-6 flex flex-col justify-between flex-1">
                    <div>
                      {/* Floating Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex gap-2">
                          <span className="bg-[#E1A140] text-black text-xs font-bold uppercase px-3 py-1 font-mono rounded-full backdrop-blur-md shadow-sm">
                            {course.level}
                          </span>
                          {course.badge && (
                            <span className="bg-neutral-800/80 light:bg-neutral-100/90 text-[#E1A140] text-xs font-bold uppercase px-3 py-1 font-mono border border-white/10 light:border-neutral-300 rounded-full backdrop-blur-md">
                              {course.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono">
                          <span className="bg-neutral-800/60 light:bg-neutral-100/80 text-neutral-300 light:text-neutral-700 px-2.5 py-1 border border-white/15 light:border-neutral-300 rounded-full backdrop-blur-md">
                            {course.duration}
                          </span>
                          <span className="bg-neutral-800/60 light:bg-neutral-100/80 text-[#E1A140] font-bold px-2.5 py-1 border border-[#E1A140]/30 rounded-full backdrop-blur-md">
                            {course.cpdCredits}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs uppercase font-bold tracking-wider text-[#E1A140] mb-1.5 font-mono">
                        {course.categoryLabel}
                      </p>
                      <h3 className="text-xl font-bold text-white light:text-neutral-900 font-editorial-heading mb-2.5 group-hover:text-[#E1A140] transition-colors leading-snug">
                        {course.name}
                      </h3>
                      <p className="text-xs text-neutral-300 light:text-neutral-700 font-sans line-clamp-3 mb-4 leading-relaxed drop-shadow-sm">
                        {course.concept}
                      </p>

                      {/* Learning Outcomes Preview */}
                      <div className="space-y-1.5 pt-3 border-t border-white/15 light:border-neutral-200 mb-4 bg-neutral-900/40 light:bg-neutral-100/60 p-3 border border-white/10 light:border-neutral-200 rounded-xl backdrop-blur-sm">
                        {course.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200 light:text-neutral-800">
                            <CheckCircle2 size={13} className="text-[#E1A140] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{outcome}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hands-on Ratio Indicator */}
                      <div className="bg-neutral-900/60 light:bg-neutral-100/80 p-2.5 border border-white/15 light:border-neutral-200 text-xs font-mono text-neutral-300 light:text-neutral-700 flex items-center gap-2 mb-2 rounded-xl backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
                        <span className="truncate">{course.handsOnRatio}</span>
                      </div>
                    </div>

                    {/* Card Footer: Fee & Navigation */}
                    <div className="pt-4 border-t border-white/15 light:border-neutral-200 mt-auto">
                      <div className="flex justify-between items-baseline mb-3 font-mono">
                        <div>
                          <span className="text-[10px] text-neutral-400 light:text-neutral-500 block uppercase">Tuition Fee</span>
                          <span className="text-sm sm:text-base font-bold text-white light:text-neutral-900">{course.pricePKR}</span>
                        </div>
                        <span className="text-xs text-[#E1A140] font-semibold">{course.priceUSD}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={`/courses/${course.id}`}
                          className="text-center py-2.5 px-3 border border-white/30 light:border-neutral-400 backdrop-blur-md hover:border-[#E1A140] hover:text-[#E1A140] text-white light:text-neutral-900 transition-all text-xs uppercase font-bold tracking-wider font-mono flex items-center justify-center gap-1 rounded-full bg-white/5 light:bg-neutral-900/5"
                        >
                          <span>Syllabus</span>
                          <ChevronRight size={14} />
                        </Link>

                        <Link
                          to={course.id === "models-program" ? "/models" : `/register?course=${course.id}`}
                          className="text-center py-2.5 px-3 bg-[#E1A140] hover:bg-amber-300 text-black backdrop-blur-md transition-all text-xs uppercase font-bold tracking-wider font-mono flex items-center justify-center gap-1 rounded-full border border-[#E1A140]/60 shadow-md"
                        >
                          <span>{course.id === "models-program" ? "Apply Model" : "Enroll"}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. CLINICAL SAFETY & ACCREDITATION BANNER */}
      <section className="py-16 px-4 md:px-8 bg-neutral-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-editorial-heading text-white">
              Need a Customized Residency or Bespoke 1-on-1 Mentorship?
            </h3>
            <p className="text-neutral-300 text-sm max-w-2xl font-sans">
              Speak directly with our academic registrar to tailor a 100% private curriculum, select live patient models, or arrange clinical shadowing with Dr. Shumaila Khan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/courses/bespoke-training"
              className="bg-[#E1A140] text-black px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors text-center font-mono"
            >
              Explore Bespoke Mentorship
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 px-6 py-3 text-xs uppercase font-bold tracking-widest text-white hover:border-[#E1A140] hover:text-[#E1A140] transition-colors text-center font-mono"
            >
              Contact Registrar Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
