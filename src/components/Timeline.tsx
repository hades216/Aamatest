import React from "react";
import { UserCheck, Stethoscope, Award, Briefcase, ChevronRight } from "lucide-react";

export function Timeline() {
  const steps = [
    {
      step: "01",
      title: "PM&DC Registration Check",
      desc: "Verify your valid medical or dental license (PM&DC / GMC / equivalents) for clinical eligibility.",
      icon: UserCheck
    },
    {
      step: "02",
      title: "Intensive 1:1 Live Training",
      desc: "Participate in hands-on clinical masterclasses with live patient models under Dr. Shumaila Khan's direct supervision.",
      icon: Stethoscope
    },
    {
      step: "03",
      title: "Accredited Certification",
      desc: "Receive your UK CPD accredited certificate and official AAMA fellowship credentials upon rigorous clinical assessment.",
      icon: Award
    },
    {
      step: "04",
      title: "Clinical Practice Support",
      desc: "Get ongoing mentorship, product sourcing contacts, complication management guides, and advanced clinical networking.",
      icon: Briefcase
    }
  ];

  return (
    <div className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#E1A140] font-bold block mb-2">
          Your Professional Journey
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white">
          Step-by-Step <span className="text-[#E1A140] font-serif lowercase italic">Certification Pathway</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-neutral-900/90 border border-white/10 hover:border-[#E1A140] p-6 relative group transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-mono font-bold text-[#E1A140]/40 group-hover:text-[#E1A140] transition-colors">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-none bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140]">
                    <Icon size={20} />
                  </div>
                </div>

                <h4 className="text-base font-bold text-white uppercase font-editorial-heading mb-2 group-hover:text-[#E1A140] transition-colors">
                  {s.title}
                </h4>

                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#E1A140] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Active <ChevronRight size={12} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
