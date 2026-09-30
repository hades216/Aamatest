import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

// @ts-ignore
import suiteImg from "../assets/images/luxury_clinical_suite_1780601950907.png";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admissions Inquiry",
    campus: "Lahore DHA",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Contact & Campus Locations | IAMA Institute"
        description="Contact our admissions registrars across Lahore DHA, Karachi Clifton, and Islamabad F-7 campuses for physician aesthetic training enrollments."
      />
      {/* 1. CONTACT HERO WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={suiteImg}
        imageAlt="IAMA Campus Locations & Contact Desk"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Direct Academic Inquiries
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Campus Locations &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">contact desk</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Connect with our admissions registrars across Lahore, Karachi, and Islamabad, or schedule a physical campus tour of our surgical training suites.
        </p>
      </ParallaxHeader>

      {/* 2. THREE PHYSICAL CAMPUSES */}
      <section className="py-16 px-4 md:px-8 border-b border-white/10 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lahore Flagship */}
            <div className="bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between hover:border-[#E1A140]/60 transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E1A140] uppercase tracking-wider mb-4">
                  <Building2 size={16} />
                  <span>Flagship Center</span>
                </div>
                <h3 className="text-xl font-bold text-white font-editorial-heading mb-3">
                  Lahore Campus
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-sans">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>Sector H, Phase 5 DHA, Lahore, Punjab, Pakistan</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#E1A140] shrink-0" />
                    <span className="font-mono font-semibold">+92 300 0212262</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail size={16} className="text-[#E1A140] shrink-0" />
                    <span>lahore@aama.com.pk</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-neutral-400 font-mono">
                Operating: Mon - Sat (09:00 - 19:00 PKT)
              </div>
            </div>

            {/* Karachi Campus */}
            <div className="bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between hover:border-[#E1A140]/60 transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E1A140] uppercase tracking-wider mb-4">
                  <Building2 size={16} />
                  <span>Sindh Chapter</span>
                </div>
                <h3 className="text-xl font-bold text-white font-editorial-heading mb-3">
                  Karachi Campus
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-sans">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>Block 4, Clifton, Karachi, Sindh, Pakistan</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#E1A140] shrink-0" />
                    <span className="font-mono font-semibold">+92 300 0212262</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail size={16} className="text-[#E1A140] shrink-0" />
                    <span>karachi@aama.com.pk</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-neutral-400 font-mono">
                Operating: Mon - Sat (09:00 - 19:00 PKT)
              </div>
            </div>

            {/* Islamabad Campus */}
            <div className="bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between hover:border-[#E1A140]/60 transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E1A140] uppercase tracking-wider mb-4">
                  <Building2 size={16} />
                  <span>Federal Capital</span>
                </div>
                <h3 className="text-xl font-bold text-white font-editorial-heading mb-3">
                  Islamabad Campus
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-sans">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>Sector F-7/2, Islamabad, ICT, Pakistan</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#E1A140] shrink-0" />
                    <span className="font-mono font-semibold">+92 300 0212262</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail size={16} className="text-[#E1A140] shrink-0" />
                    <span>islamabad@aama.com.pk</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-neutral-400 font-mono">
                Operating: Mon - Sat (09:00 - 19:00 PKT)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAST CONTACT & INQUIRY FORM */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-8 md:p-12">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold uppercase font-editorial-heading text-white mb-2">
                Inquiry Transmitted Successfully
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
                Thank you for reaching out. Our Senior Admissions Officer will contact you via WhatsApp or phone within 2 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="bg-[#E1A140] text-black px-6 py-2.5 text-xs uppercase font-bold tracking-widest cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1A140] font-bold block mb-1">
                  Academic Counseling
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white">
                  Send Us a Direct <span className="text-[#E1A140] font-serif lowercase italic font-normal">message</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                    Doctor's Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Dr. Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                    WhatsApp Contact *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="doctor@hospital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-campus" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                    Preferred Campus
                  </label>
                  <select
                    id="contact-campus"
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#E1A140]"
                  >
                    <option value="Lahore DHA">Lahore Flagship (DHA Phase 5)</option>
                    <option value="Karachi Clifton">Karachi Center (Clifton Block 4)</option>
                    <option value="Islamabad F-7">Islamabad Suites (Sector F-7/2)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                  Inquiry Details / Specific Questions *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="How can our clinical academic team assist your practice transition?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E1A140] hover:bg-amber-300 text-black py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span>{loading ? "Transmitting..." : "Send Message to Admissions Desk"}</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
