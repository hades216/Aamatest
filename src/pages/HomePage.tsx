import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { Highlights } from "../components/Highlights";
import { About } from "../components/About";
import { SEO } from "../components/SEO";
import { COURSES_DATA, FACULTY_DATA, SCHEDULE_DATA } from "../data/coursesData";
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Sparkles,
  BookOpen,
  ChevronRight,
  GraduationCap
} from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleExploreCourses = () => {
    navigate("/courses");
  };

  const handleSelectCourseFilter = (courseId: string | null) => {
    if (courseId) {
      navigate(`/courses/${courseId}`);
    } else {
      navigate("/courses");
    }
  };

  const featuredCourses = COURSES_DATA.slice(0, 4);
  const upcomingBatches = SCHEDULE_DATA.slice(0, 4);

  return (
    <div className="bg-transparent text-white selection:bg-[#E1A140] selection:text-black">
      <SEO
        title="IAAMA Academy | Academy of Advanced Medical Aesthetics"
        description="Premier hands-on aesthetic medicine training courses for registered medical professionals. Certified Botox, Dermal Fillers, Lasers, and Liquid Rhinoplasty masterclasses."
      />
      {/* 1. HERO SECTION */}
      <Hero
        onRegisterClick={handleRegisterClick}
        onExploreCourses={handleExploreCourses}
        onSelectCourseFilter={handleSelectCourseFilter}
      />

      {/* 2. INTERACTIVE HIGHLIGHTS / STORIES ROW */}
      <Highlights />

      {/* 3. FEATURED MASTERCLASSES & FELLOWSHIPS */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-transparent" id="featured-courses">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
                Flagship Clinical Curriculums
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase font-editorial-heading">
                Accredited Medical <span className="gradient-text-gold font-serif lowercase italic font-normal">masterclasses</span>
              </h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E1A140] hover:text-amber-300 transition-colors group"
            >
              <span>Explore All {COURSES_DATA.length} Fellowships &amp; Modules</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Grid of Courses with Full Card Image Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative overflow-hidden group border border-white/15 light:border-neutral-200 hover:border-[#E1A140]/80 transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[520px] bg-neutral-900/60 light:bg-white/90 backdrop-blur-md shadow-lg"
              >
                {/* Full-Card Background Image without harsh gradient shadow boxes */}
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

                {/* Card Top / Header Content */}
                <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Floating Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex gap-2">
                        <span className="bg-[#E1A140] text-black text-xs font-bold uppercase tracking-wider px-3.5 py-1 font-mono rounded-full backdrop-blur-md shadow-sm">
                          {course.level}
                        </span>
                        {course.badge && (
                          <span className="bg-neutral-800/80 light:bg-neutral-100/90 text-[#E1A140] text-xs font-bold uppercase tracking-wider px-3.5 py-1 font-mono border border-white/10 light:border-neutral-300 rounded-full backdrop-blur-md">
                            {course.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-neutral-300 light:text-neutral-700 font-mono bg-neutral-800/60 light:bg-neutral-100/80 px-3 py-1 border border-white/15 light:border-neutral-300 rounded-full backdrop-blur-md">
                          {course.duration}
                        </span>
                        <span className="text-xs uppercase font-bold tracking-widest text-[#E1A140] font-mono bg-neutral-800/60 light:bg-neutral-100/80 px-3 py-1 border border-[#E1A140]/30 rounded-full backdrop-blur-md">
                          {course.cpdCredits}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs uppercase font-bold tracking-wider text-[#E1A140] mb-2 font-mono">
                      {course.categoryLabel}
                    </p>
                    <h3 className="text-2xl font-bold text-white light:text-neutral-900 font-editorial-heading mb-3 group-hover:text-[#E1A140] transition-colors leading-snug">
                      {course.name}
                    </h3>
                    <p className="text-neutral-200 light:text-neutral-700 text-sm leading-relaxed mb-6 font-sans">
                      {course.concept}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 border-t border-white/15 light:border-neutral-200 pt-4 mb-6">
                      {course.learningOutcomes.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200 light:text-neutral-800">
                          <CheckCircle2 size={14} className="text-[#E1A140] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom / Action Footer */}
                  <div className="pt-4 border-t border-white/15 light:border-neutral-200 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[11px] text-neutral-400 light:text-neutral-500 block uppercase font-mono">Tuition Investment</span>
                      <span className="text-base font-bold text-white light:text-neutral-900 font-mono">{course.pricePKR}</span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/courses/${course.id}`}
                        className="border border-white/30 light:border-neutral-400 backdrop-blur-md px-4 py-2 text-xs uppercase font-bold tracking-widest text-white light:text-neutral-900 hover:border-[#E1A140] hover:text-[#E1A140] transition-all rounded-full bg-white/5 light:bg-neutral-900/5"
                      >
                        Syllabus
                      </Link>
                      <Link
                        to={`/register?course=${course.id}`}
                        className="bg-[#E1A140] text-black backdrop-blur-md px-5 py-2 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-all font-bold rounded-full border border-[#E1A140]/60 shadow-md"
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT BENTO SECTION */}
      <About />

      {/* 5. UPCOMING TRAINING BATCHES ACCELERATOR */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 border-b border-white/10" id="upcoming-batches">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
                Training Calendar 2026
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase font-editorial-heading">
                Upcoming Nationwide <span className="gradient-text-gold font-serif lowercase italic font-normal">cohorts</span>
              </h2>
            </div>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E1A140] hover:text-amber-300 transition-colors group"
            >
              <span>View Full Academic Schedule</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Schedule Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingBatches.map((batch, idx) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between hover:border-[#E1A140]/60 transition-all duration-300 group rounded-xl shadow-md"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-amber-500/15 border border-amber-500/30 text-[#E1A140] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-mono rounded-md">
                      {batch.city}
                    </span>
                    <span className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      {batch.seatsRemaining} Seats Left
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-editorial-heading mb-3 group-hover:text-[#E1A140] transition-colors leading-snug">
                    {batch.courseName}
                  </h3>

                  <div className="space-y-2 text-xs text-neutral-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#E1A140] shrink-0" />
                      <span className="font-semibold text-neutral-200">{batch.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-neutral-400 shrink-0" />
                      <span>{batch.timing}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                      <span className="leading-tight text-neutral-400">{batch.venue}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/register?course=${batch.courseId}&city=${batch.city}`}
                  className="w-full text-center bg-white/5 border border-white/20 hover:bg-[#E1A140] hover:text-black hover:border-[#E1A140] text-white py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-lg"
                >
                  Reserve Seat
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLINICAL GALLERY & WORKSHOP SHOWCASE */}
      <section className="py-20 px-4 md:px-8 bg-transparent border-b border-white/10" id="home-gallery-showcase">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
                Authentic Training Archives
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase font-editorial-heading">
                Clinical Gallery &amp; <span className="gradient-text-rose font-serif lowercase italic font-normal">highlights</span>
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E1A140] hover:text-amber-300 transition-colors group"
            >
              <span>Explore Full Gallery &amp; Add Photos</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1:1 Live Lip Sculpting & Vermilion Threading",
                location: "Lahore Flagship Campus",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
                caption: "Delegates performing supervised micro-cannula vermilion augmentation."
              },
              {
                title: "Liquid Rhinoplasty Dorsal Camouflage",
                location: "Karachi Center of Excellence",
                image: "https://images.unsplash.com/photo-1512290900672-1f4a4752c00d?auto=format&fit=crop&q=80&w=900",
                caption: "Immediate non-surgical hump camouflage using High G-prime hyaluronic acid."
              },
              {
                title: "Fellowship Convocation & CPD Pinning",
                location: "IAAMA Grand Auditorium",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900",
                caption: "Registered doctors awarded Board Fellowship in Clinical Aesthetic Medicine."
              }
            ].map((item, i) => (
              <Link
                to="/gallery"
                key={i}
                className="relative overflow-hidden group border border-white/15 hover:border-[#E1A140]/80 transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[380px] bg-neutral-900/60 backdrop-blur-md shadow-xl p-6"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="bg-[#E1A140] text-black text-[10px] font-bold uppercase px-3 py-1 font-mono rounded-full shadow-sm inline-block mb-3">
                      {item.location}
                    </span>
                    <h3 className="text-xl font-bold text-white font-editorial-heading mb-2 group-hover:text-[#E1A140] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 mt-auto flex items-center justify-between text-xs text-[#E1A140] font-bold uppercase font-mono">
                    <span>View High-Res in Gallery</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSIONS FAST-TRACK CTA BANNER */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,161,64,0.08)_0,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/30 px-4 py-1.5 mb-6 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono">
            <GraduationCap size={16} />
            <span>Admissions Open for 2026 Batches</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white light:text-neutral-900 uppercase font-editorial-heading mb-6"
          >
            Advance Your Clinical Practice with <span className="gradient-text-gold font-serif lowercase italic font-normal">IAAMA Academy</span>
          </motion.h2>

          <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Strictly limited to PM&amp;DC registered medical doctors and dentists. Step into our world-class surgical and aesthetic training suites with 1-on-1 live patient models.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-[#E1A140] text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Verify PM&amp;DC &amp; Apply Online</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/courses"
              className="w-full sm:w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Browse All Masterclasses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
