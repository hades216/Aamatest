import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Download, 
  HelpCircle, 
  Phone, 
  Building2,
  AlertCircle,
  GraduationCap
} from "lucide-react";

// @ts-ignore
import injectionImg from "../assets/images/clinical_injection_aesthetic_1780601932548.png";

export function AdmissionsPage() {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course");
  const cityParam = searchParams.get("city");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pmdcNumber: "",
    qualification: "MBBS",
    courseId: courseParam || "botox",
    preferredCity: cityParam || "Lahore",
    paymentPlan: "full",
    experienceYears: "1-3 years",
    comments: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (courseParam) {
      setFormData((prev) => ({ ...prev, courseId: courseParam }));
    }
    if (cityParam) {
      setFormData((prev) => ({ ...prev, preferredCity: cityParam }));
    }
  }, [courseParam, cityParam]);

  const selectedCourse = COURSES_DATA.find((c) => c.id === formData.courseId) || COURSES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmissionId(`IAMA-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Doctor Admissions & PM&DC Verification | IAMA Institute"
        description="Verify your medical council registration and enroll in IAMA aesthetic medicine masterclasses and fellowships in Lahore, Karachi, and Islamabad."
      />
      {/* 1. ADMISSIONS HERO HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={injectionImg}
        imageAlt="Doctor Admissions & PM&DC Verification"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Medical Practitioner Verification Portal
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Admissions &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">enrollment</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Step into clinical aesthetic mastery. Fill out your PM&amp;DC verification credentials below to secure your seat for upcoming 2026 academic cohorts.
        </p>
      </ParallaxHeader>

      {/* 2. ADMISSIONS PORTAL FORM & RECEIPT */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          {submitted ? (
            /* SUCCESS CONFIRMATION RECEIPT */
            <div className="bg-neutral-900 border border-[#E1A140] p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#E1A140]/20 border border-[#E1A140] rounded-full flex items-center justify-center text-[#E1A140] mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1A140] font-bold block mb-2">
                Verification &amp; Admission Received
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white mb-4">
                Welcome to IAMA Institute, Dr. {formData.fullName}
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Your medical verification dossier has been submitted. Our Academic Registrar is reviewing your PM&amp;DC registration (<strong>{formData.pmdcNumber}</strong>) and will contact you via WhatsApp / Phone within 4 business hours.
              </p>

              {/* Receipt Summary Box */}
              <div className="bg-neutral-950 border border-white/10 p-6 text-left space-y-3 font-mono text-xs mb-8">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Application Reference:</span>
                  <span className="text-[#E1A140] font-bold">{submissionId}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Enrolled Masterclass:</span>
                  <span className="text-white font-bold">{selectedCourse.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Training Campus:</span>
                  <span className="text-white">{formData.preferredCity} Flagship Campus</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Tuition Rate:</span>
                  <span className="text-white font-bold">{selectedCourse.pricePKR}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Status:</span>
                  <span className="text-emerald-400 font-bold">PM&amp;DC Verification In Progress</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/courses"
                  className="bg-[#E1A140] text-black px-8 py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors"
                >
                  Explore Other Masterclasses
                </Link>
                <Link
                  to="/schedule"
                  className="border border-white/20 text-white px-8 py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-white/10 transition-colors"
                >
                  View Training Schedule
                </Link>
              </div>
            </div>
          ) : (
            /* APPLICATION FORM */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Form */}
              <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] font-mono mb-4">
                  <ShieldCheck size={16} />
                  <span>PM&amp;DC Physician Verification Form</span>
                </div>
                <h2 className="text-2xl font-bold uppercase font-editorial-heading text-white mb-6">
                  Candidate Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="admissions-name" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                      Doctor's Full Name (As on PM&amp;DC License) *
                    </label>
                    <input
                      id="admissions-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Ayesha Siddiqui"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                    />
                  </div>

                  {/* PMDC Number & Qualification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="admissions-pmdc" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        PM&amp;DC / BM&amp;DC Reg. Number *
                      </label>
                      <input
                        id="admissions-pmdc"
                        type="text"
                        required
                        placeholder="e.g. 104829-P / 84920-S"
                        value={formData.pmdcNumber}
                        onChange={(e) => setFormData({ ...formData, pmdcNumber: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140] font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="admissions-degree" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        Primary Qualification *
                      </label>
                      <select
                        id="admissions-degree"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#E1A140]"
                      >
                        <option value="MBBS">MBBS (Doctor of Medicine)</option>
                        <option value="BDS">BDS (Dental Surgeon)</option>
                        <option value="FCPS">FCPS (Dermatology / Surgery)</option>
                        <option value="Postgraduate">Postgraduate MD / MS / Trainee</option>
                        <option value="International">International Medical Degree</option>
                      </select>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="admissions-email" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        id="admissions-email"
                        type="email"
                        required
                        placeholder="doctor@hospital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                      />
                    </div>

                    <div>
                      <label htmlFor="admissions-phone" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        WhatsApp / Contact Number *
                      </label>
                      <input
                        id="admissions-phone"
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140] font-mono"
                      />
                    </div>
                  </div>

                  {/* Desired Masterclass */}
                  <div>
                    <label htmlFor="admissions-course" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                      Selected Fellowship or Masterclass *
                    </label>
                    <select
                      id="admissions-course"
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#E1A140] font-mono"
                    >
                      {COURSES_DATA.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name} ({course.duration}) — {course.pricePKR}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Campus & Payment Plan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="admissions-campus" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        Preferred Training Campus *
                      </label>
                      <select
                        id="admissions-campus"
                        value={formData.preferredCity}
                        onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#E1A140]"
                      >
                        <option value="Lahore">Lahore (DHA Phase 5 Flagship)</option>
                        <option value="Karachi">Karachi (Clifton Block 4)</option>
                        <option value="Islamabad">Islamabad (F-7/2 Suites)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="admissions-plan" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                        Tuition Payment Preference
                      </label>
                      <select
                        id="admissions-plan"
                        value={formData.paymentPlan}
                        onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#E1A140]"
                      >
                        <option value="full">Single Full Payment (Standard)</option>
                        <option value="installment">2-Part Installment Plan</option>
                        <option value="corporate">Hospital / Group Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="admissions-comments" className="block text-xs uppercase font-mono text-neutral-300 mb-2 font-bold">
                      Clinical Background &amp; Prior Aesthetic Experience (Optional)
                    </label>
                    <textarea
                      id="admissions-comments"
                      rows={3}
                      placeholder="Mention any prior injectable exposure or specific procedural goals..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 rounded-none focus:outline-none focus:border-[#E1A140]"
                    ></textarea>
                  </div>

                  {/* PM&DC declaration check */}
                  <div className="p-4 bg-neutral-950 border border-white/10 flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="pmdc-confirm"
                      className="mt-1 accent-[#E1A140]"
                    />
                    <label htmlFor="pmdc-confirm" className="text-xs text-neutral-300 leading-relaxed">
                      I solemnly affirm that I am a registered medical doctor/dentist holding a valid medical council registration, and I understand that IAMA aesthetic credentials are strictly non-transferable to non-medical personnel.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#E1A140] hover:bg-amber-300 text-black py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Verifying Credentials..." : "Submit Doctor Registration & Reserve Seat"}
                  </button>
                </form>
              </div>

              {/* Right Summary & Accreditations */}
              <div className="lg:col-span-5 space-y-6">
                {/* Selected Course Summary Box */}
                <div className="bg-neutral-900 border border-white/10 p-6 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#E1A140] font-mono font-bold block">
                    Curriculum Summary
                  </span>
                  <h3 className="text-xl font-bold text-white font-editorial-heading">
                    {selectedCourse.name}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedCourse.concept}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Duration:</span>
                      <span className="text-white">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Accreditation:</span>
                      <span className="text-[#E1A140]">{selectedCourse.cpdCredits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Hands-on Ratio:</span>
                      <span className="text-white">{selectedCourse.handsOnRatio}</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-white/10 font-bold">
                      <span className="text-neutral-300">Tuition:</span>
                      <span className="text-[#E1A140]">{selectedCourse.pricePKR}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Admissions Hotline */}
                <div className="bg-neutral-900 border border-white/10 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase font-mono font-bold text-[#E1A140]">
                    <Phone size={15} />
                    <span>Admissions Help Desk</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Need assistance with bank transfer, invoice generation, or hotel accommodation near the training center?
                  </p>
                  <p className="text-base font-bold text-white font-mono">
                    +92 300 0212262 / +92 42 35740000
                  </p>
                  <p className="text-xs text-neutral-400 font-mono">
                    Mon - Sat: 09:00 AM - 07:00 PM PKT
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
