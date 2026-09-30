import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, PhoneCall, GraduationCap } from "lucide-react";

export function MobileStickyBar() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/923001234567?text=Hello%20AAMA%20Academy,%20I%20would%20like%20to%20inquire%20about%20medical%20aesthetics%20fellowships.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+923001234567";
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-neutral-950/95 backdrop-blur-md border-t border-[#E1A140]/40 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2">
        <Link
          to="/register"
          className="flex flex-col items-center justify-center bg-[#E1A140] text-black py-2 px-1 text-[11px] font-bold uppercase tracking-wider font-mono active:scale-95 transition-all shadow-md"
        >
          <GraduationCap size={16} className="mb-0.5" />
          <span>Apply Now</span>
        </Link>

        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center bg-emerald-600/90 text-white py-2 px-1 text-[11px] font-bold uppercase tracking-wider font-mono active:scale-95 transition-all shadow-md"
        >
          <MessageCircle size={16} className="mb-0.5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center bg-neutral-900 border border-[#E1A140]/40 text-[#E1A140] py-2 px-1 text-[11px] font-bold uppercase tracking-wider font-mono active:scale-95 transition-all shadow-md"
        >
          <PhoneCall size={16} className="mb-0.5" />
          <span>Call Us</span>
        </button>
      </div>
    </div>
  );
}
