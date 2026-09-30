import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Users, 
  Layers, 
  BookOpen, 
  ArrowLeft,
  ArrowRight,
  FileCheck,
  AlertCircle,
  HelpCircle,
  ChevronDown
} from "lucide-react";

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const course = COURSES_DATA.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="bg-neutral-950 text-white min-h-[70vh] flex flex-col items-center justify-center p-8 text-center pt-36">
        <SEO
          title="Curriculum Not Found | IAMA Institute"
          description="The requested medical aesthetic masterclass was not found. Browse all active 2026 courses."
        />
        <AlertCircle size={48} className="text-[#E1A140] mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading mb-2">
          Curriculum Not Found
        </h1>
        <p className="text-neutral-400 text-sm max-w-md mb-6">
          The requested aesthetic masterclass does not exist or has been relocated in our updated 2026 syllabus.
        </p>
        <Link
          to="/courses"
          className="bg-[#E1A140] text-black px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors"
        >
          View All Active Masterclasses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title={`${course.name} | IAMA Institute`}
        description={`${course.subtitle} Accredited 1:1 live patient training course for PM&DC doctors in Pakistan.`}
        image={course.image}
      />
      {/* 1. BREADCRUMB NAVIGATION */}
      <div className="bg-neutral-900 border-b border-white/10 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs uppercase font-mono text-neutral-400">
          <Link to="/" className="hover:text-[#E1A140] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/courses" className="hover:text-[#E1A140] transition-colors">Courses</Link>
          <ChevronRight size={12} />
          <span className="text-white font-bold truncate max-w-xs">{course.name}</span>
        </div>
      </div>

      {/* 2. HERO COURSE HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={course.image}
        imageAlt={course.name}
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-25"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#E1A140] text-black text-xs font-bold uppercase px-3.5 py-1 font-mono rounded-full backdrop-blur-md shadow-sm">
                {course.level} Level
              </span>
              <span className="bg-neutral-900/60 light:bg-white/80 border border-white/20 light:border-neutral-300 text-[#E1A140] text-xs font-bold uppercase px-3.5 py-1 font-mono rounded-full backdrop-blur-md">
                {course.categoryLabel}
              </span>
              <span className="bg-neutral-900/60 light:bg-white/80 border border-white/20 light:border-neutral-300 text-neutral-300 light:text-neutral-700 text-xs font-bold uppercase px-3.5 py-1 font-mono rounded-full backdrop-blur-md">
                {course.cpdCredits}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading leading-tight">
              {course.name}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              {course.subtitle}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {course.description}
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="bg-neutral-900/60 light:bg-white/80 border border-white/15 light:border-neutral-200 p-3.5 rounded-2xl backdrop-blur-md shadow-sm">
                <span className="text-xs uppercase text-neutral-400 font-mono block">Residency Duration</span>
                <span className="text-sm font-bold text-white light:text-neutral-900 font-mono mt-1 block">{course.duration}</span>
              </div>
              <div className="bg-neutral-900/60 light:bg-white/80 border border-white/15 light:border-neutral-200 p-3.5 rounded-2xl backdrop-blur-md shadow-sm">
                <span className="text-xs uppercase text-neutral-400 font-mono block">Hands-On Protocol</span>
                <span className="text-sm font-bold text-[#E1A140] font-mono mt-1 block">{course.handsOnRatio}</span>
              </div>
              <div className="bg-neutral-900/60 light:bg-white/80 border border-white/15 light:border-neutral-200 p-3.5 rounded-2xl backdrop-blur-md shadow-sm col-span-2 sm:col-span-1">
                <span className="text-xs uppercase text-neutral-400 font-mono block">Tuition Fee</span>
                <span className="text-sm font-bold text-white light:text-neutral-900 font-mono mt-1 block">{course.pricePKR}</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to={`/register?course=${course.id}`}
                className="bg-[#E1A140] text-black px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-all flex items-center gap-2 shadow-lg rounded-full backdrop-blur-md border border-[#E1A140]/60"
              >
                <span>Enroll in this Masterclass</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/schedule"
                className="border border-white/20 light:border-neutral-400 text-white light:text-neutral-900 px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-white/10 transition-all rounded-full bg-white/5 light:bg-neutral-900/5 backdrop-blur-md"
              >
                Check Batch Dates
              </Link>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-neutral-900 p-2 overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={course.image}
                  alt={course.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900";
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#E1A140] font-mono font-bold">
                  <ShieldCheck size={16} />
                  <span>PM&amp;DC DOCTOR ELIGIBILITY REQUIRED</span>
                </div>
                <p className="text-xs text-neutral-400">
                  {course.prerequisites}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 uppercase font-mono">Accreditation:</span>
                  <span className="text-white font-semibold">{course.certification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxHeader>

      {/* 3. LEARNING OUTCOMES & INJECTION POINTS */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Key Learning Outcomes */}
          <div className="bg-neutral-900 border border-white/10 p-8">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono mb-3">
              <BookOpen size={16} />
              <span>Clinical Competency Benchmarks</span>
            </div>
            <h2 className="text-2xl font-bold uppercase font-editorial-heading text-white mb-6">
              What You Will <span className="text-[#E1A140] font-serif lowercase italic font-normal">master</span>
            </h2>

            <div className="space-y-4">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-[#E1A140]/10 border border-[#E1A140]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#E1A140]">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="text-neutral-200 text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Anatomical Targets & Danger Zones */}
          <div className="bg-neutral-900 border border-white/10 p-8">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono mb-3">
              <Layers size={16} />
              <span>Target Anatomy &amp; Vectors</span>
            </div>
            <h2 className="text-2xl font-bold uppercase font-editorial-heading text-white mb-6">
              Anatomical Sites <span className="text-[#E1A140] font-serif lowercase italic font-normal">covered</span>
            </h2>

            <div className="space-y-3">
              {course.injectPoints.map((point, idx) => (
                <div key={idx} className="p-3.5 bg-neutral-950 border border-white/10 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-[#E1A140] bg-neutral-900 px-2 py-0.5 border border-white/10 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-neutral-200 text-xs sm:text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODULE-BY-MODULE SYLLABUS BREAKDOWN */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              Academic Structure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white mb-4">
              Comprehensive Course <span className="text-[#E1A140] font-serif lowercase italic font-normal">modules</span>
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Step-by-step progression from deep planes anatomical mapping to direct live patient clinical supervision.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {course.modules.map((mod) => (
              <div
                key={mod.number}
                className="bg-neutral-950 border border-white/10 p-6 md:p-8 hover:border-[#E1A140]/60 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold text-[#E1A140] font-mono bg-neutral-900 border border-white/10 px-3 py-1">
                      {mod.number}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white font-editorial-heading">
                      {mod.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {mod.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {mod.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase tracking-wider bg-neutral-900 border border-white/10 text-neutral-300 px-3 py-1 font-mono"
                    >
                      • {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING SESSIONS IN CITIES */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
                Nationwide Schedule
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white">
                Upcoming Batches for <span className="text-[#E1A140] font-serif lowercase italic font-normal">this masterclass</span>
              </h2>
            </div>
            <Link
              to="/schedule"
              className="text-xs uppercase font-bold tracking-widest text-[#E1A140] hover:text-amber-300 flex items-center gap-1.5"
            >
              <span>View Full 2026 Calendar</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.upcomingDates.map((dateItem, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 border border-white/10 p-6 flex flex-col justify-between hover:border-[#E1A140]/60 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-[#E1A140] text-black text-xs font-bold uppercase px-3 py-1 font-mono">
                      {dateItem.city}
                    </span>
                    <span className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      {dateItem.seatsLeft} Seats Available
                    </span>
                  </div>

                  <p className="text-lg font-bold text-white font-mono mb-2">
                    {dateItem.date}
                  </p>

                  <div className="flex items-start gap-2 text-xs text-neutral-400 mb-6">
                    <MapPin size={14} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>{dateItem.venue}</span>
                  </div>
                </div>

                <Link
                  to={`/register?course=${course.id}&city=${dateItem.city}`}
                  className="w-full text-center bg-white/5 border border-white/20 hover:bg-[#E1A140] hover:text-black hover:border-[#E1A140] text-white py-2.5 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Reserve Seat in {dateItem.city}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
                Curriculum Inquiries
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white">
                Frequently Asked <span className="text-[#E1A140] font-serif lowercase italic font-normal">questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {course.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center font-bold text-sm sm:text-base text-white hover:text-[#E1A140] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform text-[#E1A140] shrink-0 ml-4 ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. BOTTOM CTA ENROLL BAR */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white mb-4">
            Secure Your Seat for {course.name}
          </h2>
          <p className="text-neutral-300 text-sm mb-8">
            Admissions are strictly granted in order of verified PM&amp;DC registration. Limited to 10-12 delegates per cohort for 1:1 patient attention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`/register?course=${course.id}`}
              className="bg-[#E1A140] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors"
            >
              Verify PM&amp;DC &amp; Enroll
            </Link>
            <Link
              to="/courses"
              className="border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Back to Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
