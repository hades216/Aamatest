import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ParallaxHeader } from "../components/ParallaxHeader";
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Layers, 
  Users, 
  GraduationCap,
  ChevronRight,
  Filter
} from "lucide-react";

// @ts-ignore
import clinicalImg from "../assets/images/clear_clinical_treatment_1781221754294.jpg";

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    id: string;
    title: string;
    location: string;
    date: string;
    image: string;
    caption: string;
    category: string;
  } | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newLocation, setNewLocation] = useState("Lahore Flagship Campus");
  const [newCategory, setNewCategory] = useState("workshops");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  const handleOpenAddModal = () => {
    const isAdmin = localStorage.getItem("aama_admin_auth") === "true";
    if (isAdmin) {
      setShowAddModal(true);
    } else {
      setShowPinModal(true);
      setPinError("");
      setAdminPinInput("");
    }
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPinInput === "1234" || adminPinInput === "aama2026") {
      localStorage.setItem("aama_admin_auth", "true");
      setShowPinModal(false);
      setShowAddModal(true);
      setPinError("");
    } else {
      setPinError("Invalid Admin PIN. Only authorized admins can modify the website.");
    }
  };

  React.useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setGalleryItems(data);
        }
      })
      .catch(err => console.log('Gallery API query error:', err));
  }, []);

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim() || !newTitle.trim()) return;
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle.trim(),
          category: newCategory,
          location: newLocation.trim(),
          date: 'Custom Upload',
          image: newImageUrl.trim(),
          caption: newCaption.trim() || 'AAMA clinical training highlight.'
        })
      });
      if (res.ok) {
        const savedItem = await res.json();
        setGalleryItems([savedItem, ...galleryItems]);
      } else {
        const newItem = {
          id: Date.now().toString(),
          category: newCategory,
          title: newTitle.trim(),
          location: newLocation.trim(),
          date: "Custom Upload",
          image: newImageUrl.trim(),
          caption: newCaption.trim() || "AAMA clinical training highlight."
        };
        setGalleryItems([newItem, ...galleryItems]);
      }
    } catch (error) {
      const newItem = {
        id: Date.now().toString(),
        category: newCategory,
        title: newTitle.trim(),
        location: newLocation.trim(),
        date: "Custom Upload",
        image: newImageUrl.trim(),
        caption: newCaption.trim() || "AAMA clinical training highlight."
      };
      setGalleryItems([newItem, ...galleryItems]);
    }
    setNewTitle("");
    setNewImageUrl("");
    setNewCaption("");
    setShowAddModal(false);
  };

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-neutral-950 text-white selection:bg-[#E1A140] selection:text-black pt-28">
      <SEO
        title="Clinical Gallery & Training Archive | AAMA Academy"
        description="Explore authentic moments from our hands-on 1:1 doctor aesthetic training workshops, live patient lip threading, rhinoplasty cases, and convocation ceremonies."
      />
      {/* 1. HERO HEADER WITH SCROLL PARALLAX */}
      <ParallaxHeader
        imageSrc={clinicalImg}
        imageAlt="AAMA Clinical Gallery & Training Archive"
        className="py-16 md:py-24 px-4 md:px-8"
        speed={0.35}
        overlayOpacity="opacity-35"
      >
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-3 font-mono">
          Clinical Moments &amp; Alumni Archive
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading mb-6">
          Clinical Gallery &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">highlights</span>
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Explore authentic hands-on moments from our aesthetic training suites across Lahore, Karachi, and Islamabad.
        </p>
      </ParallaxHeader>

      {/* 2. FILTER TABS */}
      <section className="py-6 px-4 md:px-8 bg-neutral-900 border-b border-white/10 sticky top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-x-auto scrollbar-none" role="tablist">
          {[
            { id: "all", label: "All Archives" },
            { id: "workshops", label: "Hands-on Workshops" },
            { id: "cases", label: "Clinical Case Results" },
            { id: "lasers", label: "Laser Technology" },
            { id: "convocation", label: "Convocations" }
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-none transition-all cursor-pointer font-mono ${
                activeFilter === tab.id
                  ? "bg-[#E1A140] text-black shadow-md"
                  : "bg-neutral-950 text-neutral-300 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GALLERY GRID & ADD IMAGE TRIGGER */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Action Bar: Add Image */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs uppercase font-mono text-[#E1A140] font-bold">Interactive Clinic Archives</p>
              <h2 className="text-xl sm:text-2xl font-bold uppercase font-editorial-heading text-white">
                Click any image for <span className="text-[#E1A140] font-serif lowercase italic font-normal">high-res view</span>
              </h2>
            </div>
            <button
              onClick={handleOpenAddModal}
              className="bg-[#E1A140] text-black px-5 py-3 text-xs uppercase font-bold tracking-widest rounded-full hover:bg-amber-300 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>+ Add Clinic Image</span>
            </button>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-neutral-900/40 border border-dashed border-white/20 rounded-2xl max-w-xl mx-auto my-8 p-8">
              <Sparkles size={36} className="text-[#E1A140] mx-auto mb-4" />
              <h3 className="text-xl font-bold font-editorial-heading uppercase text-white mb-2">Your Gallery is Ready</h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">No clinic pictures added yet. Click "+ Add Clinic Image" above to upload your photos directly to the live database!</p>
              <button
                onClick={handleOpenAddModal}
                className="bg-[#E1A140] text-black px-6 py-3 text-xs uppercase font-bold tracking-widest rounded-full hover:bg-amber-300 transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>+ Upload First Clinic Image</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative overflow-hidden group border border-white/15 hover:border-[#E1A140]/80 transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[420px] bg-neutral-900/60 backdrop-blur-md shadow-xl cursor-pointer"
                >
                  {/* Full-Card Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/80 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-[#E1A140] text-black text-xs font-bold uppercase px-3 py-1 font-mono rounded-full shadow-sm">
                          {item.location}
                        </span>
                        <span className="text-xs text-[#E1A140] font-mono font-bold uppercase bg-neutral-900/80 px-2.5 py-1 rounded-full border border-[#E1A140]/30 backdrop-blur-md">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-editorial-heading mb-2.5 group-hover:text-[#E1A140] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-200 leading-relaxed font-sans drop-shadow-sm bg-neutral-900/60 p-3.5 border border-white/10 rounded-xl backdrop-blur-md">
                        {item.caption}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/15 mt-auto flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#E1A140] font-bold flex items-center gap-1 group-hover:underline">
                        <span>Click to Enlarge Full-Screen</span>
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL-SCREEN HIGH-RESOLUTION LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-neutral-900 border border-[#E1A140]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/85 text-white hover:text-[#E1A140] border border-white/20 flex items-center justify-center font-bold text-lg cursor-pointer shadow-xl transition-colors"
            >
              ✕
            </button>

            {/* High-Res Image View */}
            <div className="md:w-2/3 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[550px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            {/* Image Details Sidebar */}
            <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-neutral-950 text-left overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-[#E1A140] text-black text-xs font-bold uppercase px-3 py-1 font-mono rounded-full">
                    {selectedImage.location}
                  </span>
                  <span className="text-xs text-[#E1A140] font-mono font-bold uppercase bg-neutral-900 px-3 py-1 rounded-full border border-[#E1A140]/30">
                    {selectedImage.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-editorial-heading leading-snug">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                <Link
                  to="/courses"
                  onClick={() => setSelectedImage(null)}
                  className="w-full text-center block bg-[#E1A140] text-black py-3 px-4 text-xs uppercase font-bold tracking-widest rounded-full hover:bg-amber-300 transition-all shadow-md"
                >
                  Explore Related Masterclasses
                </Link>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full text-center block border border-white/20 text-white py-3 px-4 text-xs uppercase font-bold tracking-widest rounded-full hover:bg-white/10 transition-all"
                >
                  Close Modal View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD NEW CLINIC IMAGE MODAL */}
      {showAddModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-neutral-900 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <h3 className="text-xl font-bold uppercase font-editorial-heading text-white">
                Add New Clinic Image
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddImage} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1">Image Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advanced Thread Lift Live Demonstration"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/20 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#E1A140]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1">Image URL (High-Res Photo)</label>
                <input
                  type="url"
                  required
                  placeholder="https://images.unsplash.com/... or direct image link"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/20 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#E1A140]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/20 px-3 py-2.5 text-xs text-white rounded-xl uppercase font-mono"
                  >
                    <option value="workshops">Workshops</option>
                    <option value="cases">Clinical Cases</option>
                    <option value="lasers">Laser Technology</option>
                    <option value="convocation">Convocations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1">Campus / Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/20 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#E1A140]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1">Clinical Caption / Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe the clinical procedure or workshop event..."
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/20 px-4 py-2 text-xs text-white rounded-xl focus:outline-none focus:border-[#E1A140]"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 text-xs uppercase font-bold tracking-widest border border-white/20 rounded-full hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs uppercase font-bold tracking-widest bg-[#E1A140] text-black rounded-full hover:bg-amber-300 shadow-md"
                >
                  Publish to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADMIN PIN VERIFICATION MODAL */}
      {showPinModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowPinModal(false)}
        >
          <div 
            className="relative max-w-md w-full bg-neutral-900 border border-[#E1A140]/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E1A140] font-bold block">Security Authorization</span>
                <h3 className="text-xl font-bold uppercase font-editorial-heading text-white mt-0.5">
                  Admin Access Required
                </h3>
              </div>
              <button
                onClick={() => setShowPinModal(false)}
                className="text-neutral-400 hover:text-white font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
              Only authorized clinic administrators can upload or publish photos to the live website. Enter the Admin Security PIN below:
            </p>

            <form onSubmit={handleVerifyPin} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono text-[#E1A140] font-bold mb-1.5">Admin Security PIN</label>
                <input
                  type="password"
                  required
                  placeholder="Enter Admin PIN (Default: 1234)"
                  value={adminPinInput}
                  onChange={(e) => setAdminPinInput(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/20 px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-[#E1A140]"
                  autoFocus
                />
                <span className="text-[10px] text-neutral-500 mt-1 block">Hint: Default admin PIN is <strong className="text-[#E1A140]">1234</strong></span>
              </div>

              {pinError && (
                <div className="bg-red-950/60 border border-red-500/50 p-3 rounded-xl text-xs text-red-300">
                  {pinError}
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="w-1/2 py-3 text-xs uppercase font-bold tracking-widest border border-white/20 rounded-full hover:bg-white/10 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 text-xs uppercase font-bold tracking-widest bg-[#E1A140] text-black rounded-full hover:bg-amber-300 shadow-md cursor-pointer font-semibold"
                >
                  Verify Admin PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. ALUMNI COMMUNITY CALL */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <GraduationCap size={40} className="text-[#E1A140] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-editorial-heading text-white mb-4">
            Join Pakistan's Premier Aesthetic Physician Network
          </h2>
          <p className="text-neutral-300 text-sm mb-8 leading-relaxed">
            Gain immediate access to private emergency clinical discussion groups, live webinars, and annual alumni symposia upon completing any AAMA masterclass.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-[#E1A140] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors"
            >
              Apply for 2026 Admissions
            </Link>
            <Link
              to="/faculty"
              className="border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Meet Faculty
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
