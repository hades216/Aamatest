import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AAMALogo } from "./AAMALogo";
import { Phone, Mail, Globe, MapPin, Instagram, ArrowUp, Send, CheckCircle, Compass, ChevronRight } from "lucide-react";
import { COURSES_DATA } from "../data/coursesData";

export function Footer() {
  const [newsEmail, setNewsEmail] = useState("");
  const [newsAlertSubmitted, setNewsAlertSubmitted] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail || !newsEmail.includes("@")) return;
    setNewsAlertSubmitted(true);
    setNewsEmail("");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 pt-16 pb-10 px-4 md:px-8 relative z-10 overflow-hidden" id="contact">
      {/* Volumetric background ambient spot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1A140]/5 rounded-none filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: BRAND LOGO DESCRIPTION */}
          <div className="lg:col-span-4 space-y-4 text-left font-sans">
            <div className="flex items-center gap-3.5">
              <AAMALogo size={68} />
              <div>
                <h4 className="text-lg font-bold tracking-[0.15em] uppercase font-editorial-heading text-white">
                  AAMA <span className="text-[#E1A140]">Academy</span>
                </h4>
                <p className="text-xs tracking-wider text-neutral-400 uppercase font-mono">
                  Academy of Advanced Medical Aesthetics
                </p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-sm">
              Providing medical aesthetic masterclasses exclusively designed for PM&amp;DC registered doctors and dentists. Pioneering UK CPD accredited 1:1 live patient training across Pakistan.
            </p>

            {/* INSTAGRAM BADGES ROW */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a 
                href="https://www.instagram.com/dr.shumailakhan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-850 border border-rose-500/30 hover:border-rose-400 px-3 py-2 rounded-full text-xs font-bold text-neutral-200 hover:text-[#E1A140] transition-colors cursor-pointer group shadow-sm backdrop-blur-md"
              >
                <Instagram size={16} className="text-rose-400 transform group-hover:scale-110 transition-transform" />
                <div className="text-left font-sans">
                  <p className="text-xs font-bold m-0 text-white">@dr.shumailakhan</p>
                  <p className="text-[9px] text-neutral-400 font-normal m-0 uppercase tracking-wider font-mono">Founder &amp; Director</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/drashersaesthetics/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-850 border border-rose-500/30 hover:border-rose-400 px-3 py-2 rounded-full text-xs font-bold text-neutral-200 hover:text-[#E1A140] transition-colors cursor-pointer group shadow-sm backdrop-blur-md"
              >
                <Instagram size={16} className="text-rose-400 transform group-hover:scale-110 transition-transform" />
                <div className="text-left font-sans">
                  <p className="text-xs font-bold m-0 text-white">@drashersaesthetics</p>
                  <p className="text-[9px] text-neutral-400 font-normal m-0 uppercase tracking-wider font-mono">Co-Founder</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/draishazubair/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-850 border border-rose-500/30 hover:border-rose-400 px-3 py-2 rounded-full text-xs font-bold text-neutral-200 hover:text-[#E1A140] transition-colors cursor-pointer group shadow-sm backdrop-blur-md"
              >
                <Instagram size={16} className="text-rose-400 transform group-hover:scale-110 transition-transform" />
                <div className="text-left font-sans">
                  <p className="text-xs font-bold m-0 text-white">@draishazubair</p>
                  <p className="text-[9px] text-neutral-400 font-normal m-0 uppercase tracking-wider font-mono">Master Trainer</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/aama.academy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-850 border border-white/15 px-3 py-2 rounded-full text-xs font-bold text-neutral-200 hover:text-[#E1A140] transition-colors cursor-pointer group shadow-sm backdrop-blur-md"
              >
                <Instagram size={16} className="text-rose-400 transform group-hover:scale-110 transition-transform" />
                <div className="text-left font-sans">
                  <p className="text-xs font-bold m-0 text-white">@aama.academy</p>
                  <p className="text-[9px] text-neutral-400 font-normal m-0 uppercase tracking-wider font-mono">Academy Official</p>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK ACADEMY LINKS */}
          <div className="lg:col-span-3 text-left space-y-4 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E1A140] font-mono">
              Academy Portals
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
              <li>
                <Link to="/" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>About AAMA</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>Masterclasses &amp; Fellowships</span>
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>2026 Timetable &amp; Cohorts</span>
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>Faculty &amp; Trainers</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>Clinical Gallery &amp; Archive</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#E1A140] transition-colors flex items-center gap-1.5 text-[#E1A140] font-bold">
                  <ChevronRight size={13} className="text-[#E1A140]" />
                  <span>Online Admissions Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: REGISTRAR & HOTLINE CONTACTS */}
          <div className="lg:col-span-5 text-left space-y-4 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E1A140] font-mono">
              Registrar &amp; Campus Desk
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 font-sans">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Admission Desk Hotline</p>
                  <p className="text-sm text-white mt-1 font-medium select-all font-mono">+92 300 0212262 / 0309 5555 040</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Official Registry Email</p>
                  <p className="text-sm text-white mt-1 select-all hover:text-[#E1A140] transition-colors font-mono">admissions@aama.com.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase leading-none">Campuses</p>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    • Lahore: Phase 5 DHA | • Karachi: Clifton Block 4 | • Islamabad: Sector F-7/2
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DOWN BAR: LICENSE AND CATALOG SUBSCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 text-neutral-400 text-xs">
          
          {/* CATALOG SUBSCRIPTION FOR DOCTORS */}
          <div className="lg:col-span-6 text-left font-sans">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono mb-2">
              Receive Pre-Admission Alerts &amp; Catalog Releases
            </h5>
            
            {newsAlertSubmitted ? (
               <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E1A140] bg-[#E1A140]/10 border border-[#E1A140]/20 p-3 rounded-none max-w-sm">
                <CheckCircle size={16} className="shrink-0" />
                <span>Doctor alert registered successfully! Checked on release schedule.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex max-w-sm" id="catalog-form">
                <label htmlFor="footer-email-input" className="sr-only">
                  Official medical email address
                </label>
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  placeholder="Official medical email address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="bg-neutral-950 border border-white/15 rounded-none px-4 py-2.5 w-full text-xs sm:text-sm text-neutral-100 outline-none focus:border-[#E1A140]"
                />
                <button
                  type="submit"
                  className="bg-[#E1A140] text-black px-4 rounded-none hover:bg-amber-300 cursor-pointer transition-colors flex items-center justify-center font-sans font-bold"
                  aria-label="Subscribe to catalog and admission alerts"
                >
                  <Send size={15} aria-hidden="true" />
                </button>
              </form>
            )}
            <p className="text-xs text-neutral-400 mt-1.5 font-sans">
              Strict privacy: AAMA does not share doctor credentials with third-party networks.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:justify-end items-center gap-6 font-sans">
            <div className="text-center sm:text-right space-y-1">
              <p className="m-0 text-xs uppercase font-mono tracking-wider text-neutral-400 font-medium">
                © {new Date().getFullYear()} AAMA Pakistan. All rights reserved.
              </p>
              <p className="m-0 text-xs text-neutral-400 font-normal">
                Accredited by Continuous Professional Development Assembly (UK). PM&amp;DC aligned guidelines.
              </p>
              <p className="m-0 text-xs text-neutral-300 font-normal pt-1">
                Powered by{" "}
                <a 
                  href="https://magnatecreative.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#E1A140] font-semibold hover:text-amber-300 hover:underline underline-offset-4 transition-colors"
                >
                  magnatecreative.com
                </a>
                <span className="mx-2 text-neutral-600">|</span>
                <Link to="/admin" className="text-neutral-400 hover:text-[#E1A140] font-mono text-[11px] underline underline-offset-2">
                  Admin &amp; Visual CMS
                </Link>
              </p>
            </div>

            {/* Back to top scroll button */}
            <button
              onClick={handleScrollTop}
              className="p-3 rounded-none bg-neutral-900 hover:bg-neutral-800 hover:text-[#E1A140] transition-colors border border-white/15 text-neutral-300 cursor-pointer"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
