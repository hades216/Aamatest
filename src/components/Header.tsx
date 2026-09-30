import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { AAMALogo } from "./AAMALogo";
import { COURSES_DATA } from "../data/coursesData";

interface HeaderProps {
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export function Header({ theme = "dark", onToggleTheme }: HeaderProps) {
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownItemClick = (path: string) => {
    navigate(path);
    setTreatmentsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const featuredOfferings = [
    { label: "Masterclass in Thread-Lift (Islamabad)", path: "/courses/thread-lift-masterclass", badge: "New Oct 3" },
    { label: "Injector Handbook", path: "/courses/injector-handbook", badge: "Manual" },
    { label: "Facial Sculpting Masterclass", path: "/courses/facial-sculpting", badge: "Flagship" },
    { label: "Bespoke Hands-On Training", path: "/courses/bespoke-training", badge: "1-on-1" },
    { label: "1:1 Clinical Shadowing with Dr. Shumaila Khan", path: "/courses/clinical-shadowing", badge: "VIP" },
    { label: "Conferences & Key Note Speaker Events", path: "/courses/conferences-events", badge: "Summit" },
    { label: "Models (Patient Program)", path: "/models", badge: "Non-Surgical" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 light:bg-white/95 backdrop-blur-md transition-all duration-300" id="main-navigation-header">
      {/* CONTINUOUS EDGE-TO-EDGE GOLD ARCHITECTURAL BORDER LINE WITH CENTER LOGO CURVE */}
      <div className="absolute top-full left-0 w-full h-8 pointer-events-none overflow-visible -mt-0.5">
        <svg className="w-full h-full text-black/95 light:text-white/95 fill-current overflow-visible" viewBox="0 0 1000 32" preserveAspectRatio="none">
          {/* Header background extension fill under center logo curve */}
          <path d="M0,0 L410,0 C445,0 455,32 500,32 C545,32 555,0 590,0 L1000,0 L1000,-2 L0,-2 Z" />
          {/* Continuous edge-to-edge gold stroke line */}
          <path d="M0,0 L410,0 C445,0 455,32 500,32 C545,32 555,0 590,0 L1000,0" fill="none" stroke="#E1A140" strokeWidth="2" vectorEffect="non-scaling-stroke" className="opacity-90" />
        </svg>
      </div>

      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* 1. LEFT COLUMN: Mobile Toggle, Handbook, Home, About, Training, Schedule */}
          <div className="flex items-center gap-3 xl:gap-5 flex-1 justify-start">
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#E5A844] p-2.5 focus:outline-none cursor-pointer rounded-full bg-[#E5A844]/10 border border-[#E5A844]/30 backdrop-blur-md"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>

            <div className="hidden xl:flex items-center shrink-0">
              <Link
                to="/courses/injector-handbook"
                className="border border-[#E5A844]/50 text-[#E5A844] hover:bg-[#E5A844] hover:text-black backdrop-blur-md bg-[#E5A844]/10 transition-all duration-300 px-5 py-2 text-xs font-sans tracking-[0.16em] uppercase rounded-full font-semibold block shadow-sm"
              >
                HANDBOOK
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-sans tracking-wider font-medium text-[#E5A844]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                About
              </NavLink>

              {/* TRAINING / COURSES DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setTreatmentsDropdownOpen(true)}
                onMouseLeave={() => setTreatmentsDropdownOpen(false)}
              >
                <NavLink
                  to="/courses"
                  aria-haspopup="true"
                  aria-expanded={treatmentsDropdownOpen}
                  className={({ isActive }) =>
                    `flex items-center gap-1 hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                      isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                    }`
                  }
                >
                  <span>Training</span>
                  <ChevronDown size={14} aria-hidden="true" className={`transform transition-transform duration-200 ${treatmentsDropdownOpen ? "rotate-180 text-amber-300" : ""}`} />
                </NavLink>

                {/* Training Floating Menu */}
                {treatmentsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-84 bg-neutral-950 light:bg-white border border-[#E5A844]/40 light:border-neutral-300 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#E5A844] font-bold border-b border-white/10 light:border-neutral-200 mb-1 font-mono flex items-center justify-between">
                      <span>Training Programs &amp; Masterclasses</span>
                    </div>
                    {featuredOfferings.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDropdownItemClick(item.path)}
                        className="w-full text-left px-3 py-2.5 text-xs tracking-wider text-neutral-200 light:text-neutral-900 hover:bg-[#E5A844]/20 hover:text-[#E5A844] transition-all font-medium flex items-center justify-between group cursor-pointer border-b border-white/5 light:border-neutral-200 last:border-0"
                      >
                        <span className="truncate">{item.label}</span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-black light:bg-neutral-100 border border-white/10 light:border-neutral-300 text-[#E5A844] shrink-0 ml-2">
                          {item.badge}
                        </span>
                      </button>
                    ))}
                    <div className="mt-2 pt-2 border-t border-white/10 light:border-neutral-200">
                      <Link
                        to="/courses"
                        onClick={() => setTreatmentsDropdownOpen(false)}
                        className="w-full block text-center py-2 text-xs uppercase tracking-widest font-bold text-[#E5A844] hover:text-amber-300 transition-colors font-mono"
                      >
                        All Curriculums ({COURSES_DATA.length}) →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/schedule"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Schedule
              </NavLink>
            </nav>
          </div>

          {/* 2. CENTER COLUMN: IAAMA EMBLEM LOGO */}
          <div className="relative flex flex-col items-center justify-center shrink-0 px-3 sm:px-6 pt-1 pb-2 z-30">
            <Link 
              to="/" 
              className="flex flex-col items-center group cursor-pointer text-center relative z-10"
              id="center-brand-logo"
            >
              <div className="relative transform group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                <AAMALogo size={58} />
              </div>

              {/* IAAMA Typography */}
              <div className="w-full text-center border-t border-[#E5A844]/60 pt-1 mt-1 min-w-[135px]">
                <span className="text-sm sm:text-base tracking-[0.24em] text-[#E5A844] font-serif font-medium uppercase block leading-none">
                  IAAMA <span className="italic font-normal lowercase font-serif text-amber-300">Academy</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.18em] text-[#E5A844]/90 font-sans uppercase block mt-1 font-semibold leading-none">
                  Advanced Medical Aesthetics
                </span>
              </div>
            </Link>
          </div>

          {/* 3. RIGHT COLUMN: Faculty, Models, Gallery, Contact, Admin CMS, Book Now */}
          <div className="flex items-center gap-3 xl:gap-5 flex-1 justify-end">
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-sans tracking-wider font-medium text-[#E5A844]">
              <NavLink
                to="/faculty"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Faculty
              </NavLink>

              <NavLink
                to="/models"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Models
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Gallery
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-amber-300 transition-colors py-2 cursor-pointer ${
                    isActive ? "text-amber-300 font-bold border-b-2 border-amber-300" : "text-[#E5A844]"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="text-[#E5A844] hover:text-amber-300 p-2 border border-[#E5A844]/40 bg-[#E5A844]/15 backdrop-blur-md transition-colors cursor-pointer flex items-center gap-1 text-xs font-mono rounded-full"
                  aria-label="Toggle theme"
                  title="Toggle Light / Dark Mode"
                >
                  {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
                </button>
              )}
              <Link
                to="/register"
                className="hidden xl:block border border-[#E5A844]/60 bg-[#E5A844]/20 backdrop-blur-md text-[#E5A844] hover:bg-[#E5A844] hover:text-black transition-all duration-300 px-5 py-2 text-xs font-sans tracking-[0.16em] uppercase rounded-full font-semibold shadow-sm"
              >
                Book Now
              </Link>
            </div>

            {/* MOBILE RIGHT ACTIONS */}
            <div className="lg:hidden flex items-center gap-1.5">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="text-[#E5A844] p-2 border border-[#E5A844]/40 bg-[#E5A844]/15 backdrop-blur-md transition-colors cursor-pointer rounded-full"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
                </button>
              )}
              <Link
                to="/register"
                className="border border-[#E5A844]/60 bg-[#E5A844]/90 text-black backdrop-blur-md px-3 py-1.5 text-[10px] uppercase font-mono font-bold tracking-wider rounded-full shadow-sm"
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE SLIDEOUT MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-neutral-950 light:bg-white border-b border-[#E5A844]/30 light:border-neutral-200 p-6 shadow-2xl transition-all duration-300 ease-out transform animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 text-center text-sm font-sans text-white light:text-neutral-900 font-medium">
            
            {/* Theme Toggle Button inside Mobile Menu */}
            {onToggleTheme && (
              <button
                onClick={() => {
                  onToggleTheme();
                }}
                className="w-full py-3 mb-2 flex items-center justify-center gap-2 border border-[#E5A844]/60 bg-[#E5A844]/15 text-[#E5A844] uppercase tracking-widest text-xs font-mono font-bold transition-all hover:bg-[#E5A844]/25 cursor-pointer"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                <span>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</span>
              </button>
            )}

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              About IAAMA
            </Link>
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Training &amp; Masterclasses
            </Link>
            <Link
              to="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Training Schedule
            </Link>
            <Link
              to="/faculty"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Faculty &amp; Trainers
            </Link>
            <Link
              to="/models"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Models (Patient Program)
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Gallery &amp; Clinical Highlights
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E5A844]/20 uppercase tracking-widest text-xs hover:text-[#E5A844] transition-colors"
            >
              Contact &amp; Campuses
            </Link>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Link
                to="/courses/injector-handbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border border-[#E5A844]/60 bg-[#E5A844]/15 backdrop-blur-md text-[#E5A844] uppercase tracking-widest text-xs font-bold rounded-full text-center"
              >
                HANDBOOK
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border border-[#E5A844]/60 bg-[#E5A844] text-black backdrop-blur-md uppercase tracking-widest text-xs font-bold rounded-full text-center shadow-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
