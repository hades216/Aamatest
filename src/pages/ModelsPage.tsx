import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MapPin, 
  FileText, 
  Send, 
  HelpCircle, 
  HeartHandshake, 
  AlertCircle,
  Camera,
  Check
} from "lucide-react";
import { COURSES_DATA } from "../data/coursesData";

// @ts-ignore
import brightModelImg from "../assets/images/bright_hero_model_1781221945218.jpg";

export function ModelsPage() {
  const modelProgram = COURSES_DATA.find((c) => c.id === "models-program") || COURSES_DATA[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Lahore",
    treatmentInterest: "Botox (Upper Face)",
    age: "",
    hasPreviousTreatments: "No",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;
    setSubmitted(true);
  };

  const treatmentOptions = [
    { title: "Botox / Neuromodulators", desc: "Forehead lines, Glabella frown lines, Crow's feet, Gummy smile, Masseter jaw slimming", tag: "Upper & Lower Face" },
    { title: "Dermal Fillers & Lip Artistry", desc: "Russian lip augmentation, Cheek cheekbones projection, Chin elongation, Nasolabial lines", tag: "Facial Volumisation" },
    { title: "Non-Surgical Liquid Rhinoplasty", desc: "Dorsal bridge straightening, tip rotation, and profile smoothing without surgery", tag: "Profiloplasty" },
    { title: "Profhilo & Skin Boosters", desc: "5-point BAP bio-remodeling, deep dermal hydration, collagen and elastin stimulation", tag: "Bio-Remodeling" },
    { title: "Platelet-Rich Plasma (PRP)", desc: "Autologous scalp rejuvenation for hair restoration and vampire facial microneedling", tag: "Regenerative" },
    { title: "Clinical Laser Resurfacing", desc: "Fractional CO2 laser for acne scar revision, Q-Switched carbon peel for melasma & glow", tag: "Dermatological Tech" }
  ];

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Clinical Model Patient Program | AAMA Academy"
        description="Become a patient model for subsidized, 100% non-surgical aesthetic treatments (Botox, Fillers, Profhilo, PRP) performed by registered doctors under senior specialist supervision."
      />
      {/* 1. HERO SECTION WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={brightModelImg}
        imageAlt="AAMA Clinical Patient Model Program"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <div className="inline-flex items-center gap-2 bg-[#E1A140]/10 border border-[#E1A140]/30 px-3.5 py-1.5 text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-4 font-mono">
          <Sparkles size={14} />
          <span>AAMA Clinical Patient Model Program</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Become a <span className="text-[#E1A140] font-serif lowercase italic font-normal">clinical model</span>
        </h1>
        
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
          Experience premium, <strong>100% non-surgical aesthetic enhancements</strong> performed by licensed medical doctors (MBBS/BDS) under the direct 1:1 supervision of our senior master trainers at subsidized product-only rates.
        </p>
      </ParallaxHeader>

      {/* 2. THREE PILLARS OF PATIENT SAFETY & SAVINGS */}
      <section className="py-16 px-4 md:px-8 border-b border-white/10 bg-neutral-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                100% Non-Surgical &amp; Safe
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Zero surgical incisions or general anesthesia. We use exclusively FDA-approved and CE-marked international brands (Allergan Botox, Juvederm, Profhilo).
              </p>
            </div>
            <span className="text-xs text-[#E1A140] font-mono mt-4 font-bold uppercase">01 // Premium Products</span>
          </div>

          <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-4">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                Senior Doctor Direct Oversight
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Every procedure is meticulously mapped and guided step-by-step by Consultant Dermatologists and Lead Aesthetic Master Trainers.
              </p>
            </div>
            <span className="text-xs text-[#E1A140] font-mono mt-4 font-bold uppercase">02 // 1:1 Supervision</span>
          </div>

          <div className="bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140] mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-white font-editorial-heading mb-2">
                Subsidized Model Rates
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                You only pay the wholesale cost of the injectable product itself, saving 60% to 70% compared to standard private luxury clinic pricing.
              </p>
            </div>
            <span className="text-xs text-[#E1A140] font-mono mt-4 font-bold uppercase">03 // Subsidized Cost</span>
          </div>

        </div>
      </section>

      {/* 3. AVAILABLE NON-SURGICAL TREATMENTS */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              Clinical Menu
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-editorial-heading text-white mb-4">
              Available <span className="text-[#E1A140] font-serif lowercase italic font-normal">non-surgical</span> treatments
            </h2>
            <p className="text-neutral-300 text-sm">
              Select any treatment below to register your interest for our upcoming cohorts in Lahore, Karachi, or Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentOptions.map((opt, i) => (
              <div key={i} className="bg-neutral-900 border border-white/10 p-6 rounded-none flex flex-col justify-between hover:border-[#E1A140]/50 transition-all">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-neutral-950 text-[#E1A140] border border-white/10">
                      {opt.tag}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">0{i+1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-editorial-heading mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#E1A140]">
                  <span>Subsidized Product Rate</span>
                  <CheckCircle2 size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODEL APPLICATION FORM */}
      <section className="py-20 px-4 md:px-8 border-b border-white/10 bg-neutral-900" id="model-application-form">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-950 border border-white/15 p-6 sm:p-10 shadow-2xl">
            
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-mono tracking-widest text-[#E1A140] font-bold">
                Patient Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white mt-1">
                Register as an <span className="text-[#E1A140] font-serif lowercase italic font-normal">aesthetic model</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Our clinical coordinator will review your profile and match you with the upcoming training session in your city.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#E1A140]/20 border border-[#E1A140] rounded-full flex items-center justify-center text-[#E1A140] mx-auto">
                  <Check size={32} />
                </div>
                <h3 className="text-xl font-bold text-white font-editorial-heading">
                  Model Application Received!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our medical screening coordinator will contact you via WhatsApp (+92) at <strong>{formData.phone}</strong> with upcoming cohort dates and instructions.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-neutral-900 border border-white/20 text-white px-6 py-2.5 text-xs uppercase font-bold tracking-widest hover:border-[#E1A140]"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div>
                    <label htmlFor="model-name" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      Full Legal Name *
                    </label>
                    <input
                      id="model-name"
                      type="text"
                      required
                      placeholder="e.g. Ayesha Malik"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140]"
                    />
                  </div>

                  <div>
                    <label htmlFor="model-phone" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      id="model-phone"
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140]"
                    />
                  </div>

                  <div>
                    <label htmlFor="model-email" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      id="model-email"
                      type="email"
                      required
                      placeholder="ayesha@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140]"
                    />
                  </div>

                  <div>
                    <label htmlFor="model-city" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      Preferred City Campus *
                    </label>
                    <select
                      id="model-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140] font-mono cursor-pointer"
                    >
                      <option value="Lahore">Lahore (Phase 5 DHA Flagship)</option>
                      <option value="Karachi">Karachi (Clifton Block 4)</option>
                      <option value="Islamabad">Islamabad (Sector F-7/2)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="model-treatment" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      Primary Treatment of Interest *
                    </label>
                    <select
                      id="model-treatment"
                      value={formData.treatmentInterest}
                      onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140] font-mono cursor-pointer"
                    >
                      <option value="Botox (Upper Face)">Botox (Forehead, Frown, Crow's Feet)</option>
                      <option value="Masseter Botox">Masseter Botox (Jaw Slimming & Bruxism)</option>
                      <option value="Dermal Fillers (Russian Lips)">Dermal Fillers (Russian Lips)</option>
                      <option value="Cheek & Jawline Contouring">Dermal Fillers (Cheeks & Jawline)</option>
                      <option value="Non-Surgical Liquid Rhinoplasty">Liquid Rhinoplasty (Nose Reshaping)</option>
                      <option value="Profhilo Skin Booster">Profhilo Bio-Remodeling (Face/Neck)</option>
                      <option value="PRP Scalp / Vampire Facial">Platelet-Rich Plasma (PRP Rejuvenation)</option>
                      <option value="Laser Skin Resurfacing">Fractional CO2 / Pico Laser Resurfacing</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="model-age" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                      Your Age (Must be 21+) *
                    </label>
                    <input
                      id="model-age"
                      type="number"
                      min="21"
                      max="75"
                      required
                      placeholder="e.g. 28"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140]"
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="model-previous" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                    Have you had any cosmetic or injectable treatments in the last 12 months?
                  </label>
                  <select
                    id="model-previous"
                    value={formData.hasPreviousTreatments}
                    onChange={(e) => setFormData({ ...formData, hasPreviousTreatments: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140] font-mono cursor-pointer"
                  >
                    <option value="No">No, this will be my first time</option>
                    <option value="Yes - Botox">Yes, I had Botox previously</option>
                    <option value="Yes - Dermal Fillers">Yes, I had Dermal Fillers previously</option>
                    <option value="Yes - Lasers or PRP">Yes, I had Lasers or PRP</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="model-notes" className="block text-xs uppercase font-mono text-neutral-400 mb-2 font-bold">
                    Additional Notes or Medical Considerations
                  </label>
                  <textarea
                    id="model-notes"
                    rows={3}
                    placeholder="Describe what you would like to improve or mention any allergies..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E1A140]"
                  ></textarea>
                </div>

                <div className="p-4 bg-neutral-900 border border-white/10 text-xs text-neutral-400 space-y-1 font-sans">
                  <p className="flex items-center gap-2 text-neutral-300 font-bold">
                    <AlertCircle size={14} className="text-[#E1A140]" />
                    <span>Important Screening Criteria:</span>
                  </p>
                  <p>• Must not be pregnant or breastfeeding.</p>
                  <p>• Must be available for 1.5 hours on the designated weekend cohort date.</p>
                  <p>• 100% Non-surgical treatments only; photos may be taken for educational records.</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E1A140] text-black font-bold uppercase tracking-widest text-xs sm:text-sm py-4 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <Send size={16} />
                  <span>Submit Model Screening Application</span>
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
              Model FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white">
              Questions &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">answers</span>
            </h2>
          </div>

          <div className="space-y-4">
            {modelProgram.faqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-900 border border-white/10 p-6">
                <h3 className="text-sm sm:text-base font-bold text-white font-editorial-heading mb-2 flex items-center gap-2">
                  <HelpCircle size={16} className="text-[#E1A140] shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
