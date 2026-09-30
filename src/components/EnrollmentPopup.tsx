import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Phone, 
  Send,
  Users,
  ChevronRight,
  Maximize2
} from "lucide-react";

// @ts-ignore
import brightModelImg from "../assets/images/bright_hero_model_1781221945218.jpg";

interface EnrollmentPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function EnrollmentPopup({ isOpen: controlledIsOpen, onClose: controlledOnClose, onOpen: controlledOnOpen }: EnrollmentPopupProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pmdc: "",
    email: "",
    phone: "",
    city: "Islamabad",
    qualification: "MBBS"
  });
  
  const navigate = useNavigate();

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleOpen = () => {
    if (controlledOnOpen) {
      controlledOnOpen();
    } else {
      setInternalIsOpen(true);
    }
  };

  // Auto trigger after 3.5 seconds on first visit
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("aama_new_training_popup_seen");
    if (!hasSeen && controlledIsOpen === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
        sessionStorage.setItem("aama_new_training_popup_seen", "true");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [controlledIsOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      handleClose();
      navigate(`/register?course=thread-lift-masterclass&city=${formData.city}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`);
    }, 1800);
  };

  return (
    <>
      {/* 1. FLOATING LUXURY NOTIFICATION BAR (BOTTOM-RIGHT / BOTTOM DESKTOP) */}
      {isBannerVisible && !isOpen && (
        <aside 
          aria-label="New training program announcement"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-md w-[calc(100vw-2rem)] sm:w-auto bg-neutral-950/95 backdrop-blur-md border border-[#E1A140]/60 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-5 duration-300 group"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-none bg-[#E1A140]/10 border border-[#E1A140]/40 flex items-center justify-center shrink-0 text-[#E1A140] mt-0.5">
              <Sparkles size={18} className="animate-pulse" />
            </div>

            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#E1A140] text-black text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5">
                  NEW TRAINING PROGRAM
                </span>
                <span className="text-[10px] text-amber-300 font-mono font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Oct 3 Cohort Open
                </span>
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-white font-editorial-heading leading-tight truncate">
                Masterclass in Thread-Lift &amp; Facial Vectors
              </h4>
              <p className="text-[11px] text-neutral-400 font-sans mt-0.5 line-clamp-1">
                Islamabad • 1:1 Live Patient Training • UK CPD Verified
              </p>

              <div className="flex items-center gap-3 mt-2.5">
                <button
                  onClick={handleOpen}
                  className="bg-[#E1A140] hover:bg-amber-300 text-black text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 transition-colors flex items-center gap-1 cursor-pointer shadow-md"
                >
                  <span>Fast Enrollment</span>
                  <ArrowRight size={11} />
                </button>
                <Link
                  to="/courses/thread-lift-masterclass"
                  className="text-[10px] font-mono font-semibold text-[#E1A140] hover:text-amber-300 underline uppercase tracking-wider"
                >
                  View Details
                </Link>
              </div>
            </div>

            <button
              onClick={() => setIsBannerVisible(false)}
              className="text-neutral-400 hover:text-white p-1 transition-colors cursor-pointer shrink-0"
              aria-label="Dismiss training announcement"
            >
              <X size={15} />
            </button>
          </div>
        </aside>
      )}

      {/* 2. FULL LUXURY ENROLLMENT MODAL */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enrollment-modal-title"
          aria-describedby="enrollment-modal-desc"
        >
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={handleClose} aria-hidden="true" />

          {/* Modal Container */}
          <div 
            className="relative z-10 w-full max-w-4xl bg-neutral-950 border border-[#E1A140]/60 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 text-neutral-400 hover:text-white bg-black/70 hover:bg-black border border-white/20 transition-all cursor-pointer"
              aria-label="Close enrollment pop-up"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
              
              {/* LEFT SIDE: LUXURY VISUAL & PROGRAM DETAILS (5 COLS) */}
              <div className="lg:col-span-5 relative overflow-hidden bg-neutral-900 flex flex-col justify-between p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={brightModelImg}
                    alt="Advanced Medical Aesthetic Training Program Demonstration"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover opacity-35 filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 bg-[#E1A140] text-black text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 mb-4 shadow-md">
                    <Sparkles size={12} />
                    <span>NEW TRAINING PROGRAM</span>
                  </div>

                  <h3 id="enrollment-modal-title" className="text-xl sm:text-2xl font-bold text-white font-editorial-heading uppercase tracking-wide leading-tight mb-2">
                    Masterclass in <span className="text-[#E1A140] font-serif lowercase italic font-normal">Thread-Lift</span> &amp; Vector Resuspension
                  </h3>

                  <p id="enrollment-modal-desc" className="text-xs text-neutral-300 font-sans leading-relaxed mb-6">
                    Our premier newly launched clinical curriculum in Islamabad. Master barbed, cogged, and mono PDO/PCL threads with 1-on-1 live patient models and emergency ultrasound mapping.
                  </p>

                  <div className="space-y-2.5 text-xs text-neutral-200 bg-black/60 p-3.5 border border-white/15 backdrop-blur-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#E1A140] shrink-0" />
                      <span>1:1 Live Patient Injections &amp; Vector Placement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#E1A140] shrink-0" />
                      <span>UK CPD Certified &amp; PM&amp;DC Recognized Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#E1A140] shrink-0" />
                      <span>Complimentary Aesthetic Injector Handbook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#E1A140] shrink-0" />
                      <span>Vascular Complication &amp; Salvage Protocols</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Stats */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/15">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-black/80 border border-white/10 p-2">
                      <span className="text-[10px] text-neutral-400 uppercase font-mono block">Upcoming Batch</span>
                      <span className="text-xs font-bold text-amber-300 font-mono">Oct 3, 2026 (ISB)</span>
                    </div>
                    <div className="bg-black/80 border border-[#E1A140]/30 p-2">
                      <span className="text-[10px] text-neutral-400 uppercase font-mono block">Availability</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">4 Seats Left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: RAPID ENROLLMENT APPLICATION FORM (7 COLS) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-neutral-950">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white uppercase font-editorial-heading">
                        Priority Seat Reservation
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono">
                        Exclusively for PM&amp;DC Licensed Physicians &amp; Dentists
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#E1A140] font-mono bg-[#E1A140]/10 border border-[#E1A140]/30 px-2.5 py-1">
                      <ShieldCheck size={14} />
                      <span>100% Accredited</span>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-16 h-16 bg-[#E1A140]/20 border border-[#E1A140] rounded-none mx-auto flex items-center justify-center text-[#E1A140]">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase font-editorial-heading">
                        Priority Enrollment Initiated!
                      </h4>
                      <p className="text-sm text-neutral-300 max-w-md mx-auto">
                        Thank you, Dr. {formData.name || "Physician"}. Our admissions coordinator is preparing your syllabus packet and registration invoice. Redirecting...
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="popup-name" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            Full Name &amp; Title *
                          </label>
                          <input
                            id="popup-name"
                            type="text"
                            required
                            placeholder="Dr. Muhammad Tariq"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white placeholder:text-neutral-500 font-sans focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="popup-pmdc" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            PM&amp;DC / Medical Reg No. *
                          </label>
                          <input
                            id="popup-pmdc"
                            type="text"
                            required
                            placeholder="e.g. 12345-P"
                            value={formData.pmdc}
                            onChange={(e) => setFormData({ ...formData, pmdc: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white placeholder:text-neutral-500 font-sans focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="popup-email" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            Official Email *
                          </label>
                          <input
                            id="popup-email"
                            type="email"
                            required
                            placeholder="doctor@clinic.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white placeholder:text-neutral-500 font-sans focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="popup-phone" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            WhatsApp / Mobile *
                          </label>
                          <input
                            id="popup-phone"
                            type="tel"
                            required
                            placeholder="+92 300 1234567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white placeholder:text-neutral-500 font-sans focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="popup-city" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            Preferred Cohort Location
                          </label>
                          <select
                            id="popup-city"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white font-sans focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="Islamabad">Islamabad (Oct 3, 2026 - New)</option>
                            <option value="Lahore">Lahore (Oct 18, 2026)</option>
                            <option value="Karachi">Karachi (Nov 2, 2026)</option>
                            <option value="Delaware-USA">Delaware, USA (Nov 15, 2026)</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="popup-qualification" className="block text-xs uppercase font-mono text-neutral-300 mb-1.5 font-bold">
                            Primary Degree
                          </label>
                          <select
                            id="popup-qualification"
                            value={formData.qualification}
                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                            className="w-full bg-neutral-900 border border-white/15 focus:border-[#E1A140] px-3 py-2.5 text-xs text-white font-sans focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="MBBS">MBBS</option>
                            <option value="BDS">BDS (Dental Surgeon)</option>
                            <option value="FCPS">FCPS / Postgrad Specialist</option>
                            <option value="International-MD">International MD</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-[#E1A140] hover:bg-amber-300 text-black py-3.5 px-6 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                          <Send size={15} />
                          <span>Reserve My Training Spot Now</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-[#E1A140]" />
                          <span>Immediate WhatsApp Callback</span>
                        </span>
                        <span>Direct Admission Desk: +92 334 5092025</span>
                      </div>
                    </form>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between text-xs text-neutral-400">
                  <Link
                    to="/courses/thread-lift-masterclass"
                    onClick={handleClose}
                    className="text-[#E1A140] hover:underline flex items-center gap-1 font-mono text-[11px]"
                  >
                    <span>Read Full 18-Page Curriculum Syllabus</span>
                    <ChevronRight size={13} />
                  </Link>

                  <button
                    onClick={handleClose}
                    className="text-neutral-500 hover:text-white transition-colors text-[11px] font-mono cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
