import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { AlertCircle, Home, BookOpen, Calendar, Phone } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="bg-neutral-950 text-white min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-36">
      <SEO
        title="404 - Page Not Found | AAMA Academy"
        description="The aesthetic medical section or syllabus link you requested is unavailable or has been relocated."
      />
      <div className="max-w-md mx-auto">
        <span className="text-4xl sm:text-6xl font-bold font-mono text-[#E1A140] block mb-2">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
          The aesthetic medical section or syllabus link you requested is unavailable or has been relocated.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link
            to="/"
            className="bg-[#E1A140] text-black px-4 py-3 text-xs uppercase font-bold tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Home size={14} aria-hidden="true" />
            <span>Home</span>
          </Link>
          <Link
            to="/courses"
            className="border border-white/20 text-white px-4 py-3 text-xs uppercase font-bold tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <BookOpen size={14} aria-hidden="true" />
            <span>Courses</span>
          </Link>
          <Link
            to="/schedule"
            className="border border-white/20 text-white px-4 py-3 text-xs uppercase font-bold tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Calendar size={14} aria-hidden="true" />
            <span>Schedule</span>
          </Link>
          <Link
            to="/register"
            className="border border-[#E1A140] text-[#E1A140] px-4 py-3 text-xs uppercase font-bold tracking-wider hover:bg-[#E1A140] hover:text-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Admissions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
