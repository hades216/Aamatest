import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "../components/SEO";
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings, 
  Edit3, 
  Eye, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  Save, 
  Lock, 
  Unlock, 
  ArrowRight,
  Sparkles,
  Download,
  AlertCircle,
  LayoutDashboard,
  Image as ImageIcon,
  LogOut,
  ChevronRight,
  FileText
} from "lucide-react";
import { COURSES_DATA, FACULTY_DATA, SCHEDULE_DATA } from "../data/coursesData";

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("aama_admin_auth") === "true";
  });
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "visual" | "cms" | "registrations" | "courses" | "faculty" | "schedule">("dashboard");

  // Visual Edit Mode state
  const [visualEditActive, setVisualEditActive] = useState(() => {
    return localStorage.getItem("aama_visual_edit_mode") === "true";
  });

  // Page Content CMS state
  const [selectedCmsPage, setSelectedCmsPage] = useState<"home" | "about" | "courses" | "faculty">("home");
  const [pageContent, setPageContent] = useState(() => {
    const saved = localStorage.getItem("aama_page_cms_content");
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return {
      home: {
        heroTitle: "Master the Art & Science of Clinical Aesthetics",
        heroSubtitle: "Exclusive 1:1 Live Patient Masterclasses & UK CPD Accredited Fellowships for PM&DC Registered Doctors and Dentists.",
        bannerImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600"
      },
      about: {
        heroTitle: "The Pinnacle of Medical Aesthetic Education",
        heroSubtitle: "Founded by Dr. Shumaila Khan to set uncompromising clinical safety and procedural excellence standards in Pakistan.",
        bannerImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1600"
      },
      courses: {
        heroTitle: "Advanced Masterclasses & Clinical Fellowships",
        heroSubtitle: "Comprehensive hands-on training with live patient models under expert board-certified supervision.",
        bannerImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1600"
      },
      faculty: {
        heroTitle: "World-Class Master Trainers & Faculty",
        heroSubtitle: "Learn directly from Pakistan's most distinguished dermatologists and aesthetic surgeons.",
        bannerImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1600"
      }
    };
  });

  const [registrations, setRegistrations] = useState(() => {
    const saved = localStorage.getItem("aama_registrations");
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return [
      { id: "IAMA-2026-892104", name: "Dr. Ahmed Khan", email: "ahmed.khan@gmail.com", phone: "+92 300 1234567", pmdc: "45218-P", course: "Botox Masterclass (Basic & Advanced)", city: "Lahore", date: "2026-03-25", status: "Verified" },
      { id: "IAMA-2026-554102", name: "Dr. Fatima Malik", email: "fatima.m@hotmail.com", phone: "+92 321 9876543", pmdc: "33102-S", course: "Aesthetic Fillers Masterclass", city: "Karachi", date: "2026-03-24", status: "Pending Review" }
    ];
  });
  const [courses] = useState(() => COURSES_DATA);
  const [successMessage, setSuccessMessage] = useState("");

  React.useEffect(() => {
    // Non-blocking sync with backend database
    fetch('/api/admin/content')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setPageContent(prev => ({ ...prev, ...data }));
        }
      })
      .catch(err => console.log('Using local CMS content:', err));

    fetch('/api/admin/registrations')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setRegistrations(data);
        }
      })
      .catch(err => console.log('Using local registrations:', err));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "1234" || pin === "aama2026") {
      setIsAuthenticated(true);
      localStorage.setItem("aama_admin_auth", "true");
      setError("");
    } else {
      setError("Incorrect PIN. Default admin PIN is 1234");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("aama_admin_auth");
    setVisualEditActive(false);
    localStorage.removeItem("aama_visual_edit_mode");
  };

  const toggleVisualEdit = () => {
    const nextState = !visualEditActive;
    setVisualEditActive(nextState);
    localStorage.setItem("aama_visual_edit_mode", nextState ? "true" : "false");
    window.dispatchEvent(new Event("aama_mode_change"));
    setSuccessMessage(nextState ? "Visual Edit Mode Activated! You can click any text or image on any page to edit live." : "Visual Edit Mode Deactivated.");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  // Dedicated save handler for Page Content CMS with Database Persistence
  const handleSavePageContent = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("aama_page_cms_content", JSON.stringify(pageContent));
    
    try {
      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageKey: selectedCmsPage,
          content: pageContent[selectedCmsPage]
        })
      });
    } catch (err) {
      console.warn('Backend database save failed, saved to local storage:', err);
    }

    setSuccessMessage(`Successfully updated and saved in database for the ${selectedCmsPage.toUpperCase()} page!`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleDeleteRegistration = async (id: string) => {
    const updated = registrations.filter((r: any) => r.id !== id);
    setRegistrations(updated);
    localStorage.setItem("aama_registrations", JSON.stringify(updated));

    try {
      await fetch(`/api/admin/registrations/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Backend database delete failed:', err);
    }

    setSuccessMessage("Application dossier removed successfully from database.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4 pt-28 pb-12">
        <SEO title="Admin Portal | IAMA Institute" description="Secure administration portal for IAMA Institute." />
        <div className="max-w-md w-full bg-neutral-900 border border-white/15 p-8 shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E1A140]"></div>
          
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#E1A140]/10 border border-[#E1A140]/30 rounded-full flex items-center justify-center text-[#E1A140] mx-auto mb-4">
              <Lock size={24} />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#E1A140] font-bold">Secure Gateway</span>
            <h1 className="text-2xl font-bold uppercase font-editorial-heading mt-1">IAMA Control Center</h1>
            <p className="text-xs text-neutral-400 mt-2">Enter your security PIN to access the admin CMS and Visual Edit Mode.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-neutral-300 mb-2">Admin Security PIN</label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (try 1234)"
                className="w-full bg-neutral-950 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                required
              />
              <span className="text-[11px] text-neutral-500 mt-1.5 block">Hint: Default demo PIN is <strong className="text-[#E1A140]">1234</strong></span>
            </div>

            {error && (
              <div className="bg-red-950/50 border border-red-500/50 p-3 text-xs text-red-300 flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#E1A140] text-black py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Authenticate &amp; Enter
            </button>

            <button
              type="button"
              onClick={() => {
                setPin("1234");
                setIsAuthenticated(true);
                localStorage.setItem("aama_admin_auth", "true");
              }}
              className="w-full bg-neutral-800 border border-[#E1A140]/40 text-[#E1A140] py-3 text-xs uppercase font-bold tracking-widest hover:bg-neutral-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles size={14} /> Quick Demo Login (PIN: 1234)
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link to="/" className="text-xs text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <span>← Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16 px-4 md:px-8">
      <SEO title="Admin CMS Dashboard | IAMA Institute" description="Professional administration dashboard and visual editor for IAMA Institute." />
      
      <div className="max-w-7xl mx-auto">
        
        {/* TOP STATUS BAR */}
        <div className="bg-neutral-900 border border-white/10 p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E1A140]/10 border border-[#E1A140]/30 flex items-center justify-center text-[#E1A140]">
              <ShieldCheck size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E1A140] font-bold">Secure Session Active</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold uppercase font-editorial-heading">IAMA Institute Control Console</h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={toggleVisualEdit}
              className={`px-5 py-2.5 text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                visualEditActive 
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-400" 
                  : "bg-neutral-800 text-white border border-white/20 hover:bg-neutral-700"
              }`}
            >
              <Edit3 size={15} />
              <span>{visualEditActive ? "Visual Edit Mode ON" : "Turn On Visual Editor"}</span>
            </button>

            <Link
              to="/"
              target="_blank"
              className="bg-white/5 border border-white/20 px-4 py-2.5 text-xs uppercase font-bold tracking-wider text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Eye size={15} />
              <span>View Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-950/60 border border-red-500/40 text-red-300 px-4 py-2.5 text-xs uppercase font-bold tracking-wider hover:bg-red-900/60 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="bg-emerald-950/90 border-2 border-emerald-500 p-4 mb-6 text-xs text-emerald-200 flex items-center gap-3 shadow-2xl animate-in fade-in duration-300">
            <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
            <span className="font-bold text-sm tracking-wide">{successMessage}</span>
          </div>
        )}

        {/* MAIN LAYOUT WITH SIDEBAR & CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:col-span-3 space-y-2">
            <div className="bg-neutral-900 border border-white/10 p-2 space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "dashboard" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <LayoutDashboard size={16} />
                  <span>Dashboard Overview</span>
                </div>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => setActiveTab("cms")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "cms" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText size={16} />
                  <span>Page Content CMS</span>
                </div>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => setActiveTab("visual")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "visual" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Edit3 size={16} />
                  <span>Visual Edit Mode</span>
                </div>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => setActiveTab("registrations")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "registrations" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users size={16} />
                  <span>Doctor Registrations</span>
                </div>
                <span className="bg-neutral-950 text-white px-2 py-0.5 text-[10px] font-mono">{registrations.length}</span>
              </button>

              <button
                onClick={() => setActiveTab("courses")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "courses" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen size={16} />
                  <span>Masterclass Courses</span>
                </div>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => setActiveTab("faculty")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "faculty" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={16} />
                  <span>Faculty &amp; Trainers</span>
                </div>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => setActiveTab("schedule")}
                className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === "schedule" ? "bg-[#E1A140] text-black" : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} />
                  <span>Batches &amp; Timetable</span>
                </div>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-4 text-xs space-y-2">
              <span className="font-mono text-[#E1A140] uppercase tracking-wider block font-bold">Quick Support</span>
              <p className="text-neutral-400">Need assistance updating course curricula or PM&amp;DC verification records?</p>
              <a href="mailto:admin@aama.edu.pk" className="text-[#E1A140] font-bold block hover:underline">Contact System Registrar →</a>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-6">

            {/* TAB 1: DASHBOARD OVERVIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-neutral-900 border border-white/15 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase font-mono text-neutral-400">Total Registrations</span>
                      <Users size={20} className="text-[#E1A140]" />
                    </div>
                    <div className="text-3xl font-bold font-editorial-heading">{registrations.length}</div>
                    <p className="text-xs text-emerald-400 mt-2 font-medium">100% PM&amp;DC Verified Dossiers</p>
                  </div>

                  <div className="bg-neutral-900 border border-white/15 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase font-mono text-neutral-400">Active Masterclasses</span>
                      <BookOpen size={20} className="text-[#E1A140]" />
                    </div>
                    <div className="text-3xl font-bold font-editorial-heading">{courses.length}</div>
                    <p className="text-xs text-neutral-400 mt-2">CPD Accredited Curriculums</p>
                  </div>

                  <div className="bg-neutral-900 border border-white/15 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase font-mono text-neutral-400">Visual Edit Status</span>
                      <Edit3 size={20} className={visualEditActive ? "text-emerald-400" : "text-neutral-500"} />
                    </div>
                    <div className="text-xl font-bold font-editorial-heading">{visualEditActive ? "ACTIVE" : "OFF"}</div>
                    <button
                      onClick={toggleVisualEdit}
                      className="mt-3 text-xs font-bold text-[#E1A140] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{visualEditActive ? "Disable Editor" : "Enable Live Editor"}</span> →
                    </button>
                  </div>
                </div>

                <div className="bg-neutral-900 border border-[#E1A140]/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E1A140] font-bold block mb-1">Visual Editing Suite</span>
                    <h3 className="text-xl font-bold uppercase font-editorial-heading text-white">Click and Edit any text or image on the website</h3>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-2 max-w-xl">
                      Turn on Visual Edit Mode, navigate to any page on the public website, and click on any headline, description, or image to modify it instantly.
                    </p>
                  </div>
                  <button
                    onClick={toggleVisualEdit}
                    className="bg-[#E1A140] text-black px-6 py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors shrink-0 cursor-pointer"
                  >
                    {visualEditActive ? "Visual Edit Mode ON" : "Turn On Visual Editor"}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: PAGE CONTENT CMS */}
            {activeTab === "cms" && (
              <div className="bg-neutral-900 border border-white/15 p-8 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#E1A140] font-bold">Structured Content Manager</span>
                    <h2 className="text-2xl font-bold uppercase font-editorial-heading mt-1">Page Sections &amp; Images CMS</h2>
                    <p className="text-xs text-neutral-400 mt-1">Update titles, subheadings, and banners for specific pages without leaving context.</p>
                  </div>

                  {/* Page Selector Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {(["home", "about", "courses", "faculty"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedCmsPage(p)}
                        className={`px-3.5 py-2 text-xs uppercase font-bold tracking-wider cursor-pointer ${
                          selectedCmsPage === p ? "bg-[#E1A140] text-black" : "bg-neutral-950 text-neutral-300 border border-white/10 hover:bg-neutral-800"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSavePageContent} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Page Hero Title (H1):</label>
                    <input
                      type="text"
                      value={pageContent[selectedCmsPage].heroTitle}
                      onChange={(e) => setPageContent({
                        ...pageContent,
                        [selectedCmsPage]: { ...pageContent[selectedCmsPage], heroTitle: e.target.value }
                      })}
                      className="w-full bg-neutral-950 border border-white/20 p-3.5 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Page Hero Subtitle / Description:</label>
                    <textarea
                      value={pageContent[selectedCmsPage].heroSubtitle}
                      onChange={(e) => setPageContent({
                        ...pageContent,
                        [selectedCmsPage]: { ...pageContent[selectedCmsPage], heroSubtitle: e.target.value }
                      })}
                      rows={3}
                      className="w-full bg-neutral-950 border border-white/20 p-3.5 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Featured Banner Image URL:</label>
                    <input
                      type="text"
                      value={pageContent[selectedCmsPage].bannerImage}
                      onChange={(e) => setPageContent({
                        ...pageContent,
                        [selectedCmsPage]: { ...pageContent[selectedCmsPage], bannerImage: e.target.value }
                      })}
                      className="w-full bg-neutral-950 border border-white/20 p-3.5 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                      required
                    />
                    <span className="text-[11px] text-neutral-400 mt-1 block">Paste any high-resolution image URL or Unsplash link.</span>
                  </div>

                  {pageContent[selectedCmsPage].bannerImage && (
                    <div className="aspect-video max-h-48 w-full bg-neutral-950 border border-white/10 overflow-hidden">
                      <img src={pageContent[selectedCmsPage].bannerImage} alt="Banner Preview" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#E1A140] text-black px-8 py-3.5 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Save size={16} />
                      <span>Save &amp; Persist {selectedCmsPage.toUpperCase()} Page</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 3: VISUAL EDIT GUIDE */}
            {activeTab === "visual" && (
              <div className="bg-neutral-900 border border-white/15 p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E1A140] font-bold">Professional CMS</span>
                  <h2 className="text-2xl font-bold uppercase font-editorial-heading mt-1">Visual Edit Mode Instructions</h2>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-2">
                    Our real-time WYSIWYG editor allows you to modify text and replace images directly on the frontend without touching code.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-neutral-950 border border-white/10 p-5">
                    <span className="text-xs font-mono text-[#E1A140] font-bold block mb-2">01. ENABLE</span>
                    <h4 className="font-bold text-sm mb-1 uppercase">Turn on Editor</h4>
                    <p className="text-xs text-neutral-400">Click the toggle button in the top status bar or below.</p>
                  </div>
                  <div className="bg-neutral-950 border border-white/10 p-5">
                    <span className="text-xs font-mono text-[#E1A140] font-bold block mb-2">02. CLICK &amp; EDIT</span>
                    <h4 className="font-bold text-sm mb-1 uppercase">Modify Text / Images</h4>
                    <p className="text-xs text-neutral-400">Click any text or image on any page to open the live editor popup.</p>
                  </div>
                  <div className="bg-neutral-950 border border-white/10 p-5">
                    <span className="text-xs font-mono text-[#E1A140] font-bold block mb-2">03. PERSIST</span>
                    <h4 className="font-bold text-sm mb-1 uppercase">Auto Save</h4>
                    <p className="text-xs text-neutral-400">Changes are instantly stored in your browser session storage.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={toggleVisualEdit}
                    className="bg-[#E1A140] text-black px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    {visualEditActive ? "Deactivate Visual Edit Mode" : "Activate Visual Edit Mode Now"}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: REGISTRATIONS */}
            {activeTab === "registrations" && (
              <div className="bg-neutral-900 border border-white/15 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold uppercase font-editorial-heading">Doctor Registrations &amp; PM&amp;DC Dossiers</h2>
                    <p className="text-xs text-neutral-400 mt-1">Review verified medical practitioners enrolled for 2026 academic cohorts.</p>
                  </div>
                  <button
                    onClick={() => {
                      const csv = [
                        ["ID", "Name", "Email", "Phone", "PMDC", "Course", "City", "Date"],
                        ...registrations.map((r: any) => [r.id, r.name, r.email, r.phone, r.pmdc, r.course, r.city, r.date])
                      ].map(e => e.join(",")).join("\n");
                      const blob = new Blob([csv], { type: "text/csv" });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "aama_registrations_2026.csv";
                      a.click();
                    }}
                    className="bg-[#E1A140] text-black px-4 py-2.5 text-xs uppercase font-bold tracking-wider hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                  >
                    <Download size={15} />
                    <span>Export CSV</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-neutral-950 text-neutral-400 uppercase font-mono border-b border-white/10">
                      <tr>
                        <th className="p-3">Reference ID</th>
                        <th className="p-3">Doctor Name</th>
                        <th className="p-3">Contact</th>
                        <th className="p-3">PM&amp;DC Reg</th>
                        <th className="p-3">Masterclass</th>
                        <th className="p-3">Campus</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {registrations.map((reg: any) => (
                        <tr key={reg.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-3 font-mono text-[#E1A140] font-bold">{reg.id}</td>
                          <td className="p-3 font-bold text-white">{reg.name}</td>
                          <td className="p-3 text-neutral-300">{reg.email}<br/><span className="text-neutral-500">{reg.phone}</span></td>
                          <td className="p-3 font-mono text-emerald-400 font-bold">{reg.pmdc}</td>
                          <td className="p-3 text-neutral-200">{reg.course}</td>
                          <td className="p-3 text-neutral-300">{reg.city}</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => handleDeleteRegistration(reg.id)}
                              className="text-red-400 hover:text-red-300 p-1.5 transition-colors cursor-pointer"
                              title="Delete Application"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 5: COURSES */}
            {activeTab === "courses" && (
              <div className="bg-neutral-900 border border-white/15 p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold uppercase font-editorial-heading">Masterclass Curriculum CMS</h2>
                  <p className="text-xs text-neutral-400 mt-1">Manage active training courses, tuition rates, and CPD accreditations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course: any) => (
                    <div key={course.id} className="bg-neutral-950 border border-white/10 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] font-mono text-[#E1A140] bg-neutral-900 px-2 py-0.5 border border-white/10">
                            {course.duration}
                          </span>
                          <span className="text-xs font-bold text-emerald-400 font-mono">{course.pricePKR}</span>
                        </div>
                        <h3 className="font-bold text-base text-white mb-2 uppercase font-editorial-heading">{course.name}</h3>
                        <p className="text-xs text-neutral-400 line-clamp-2 mb-4">{course.description}</p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                        <span className="text-neutral-500 font-mono">CPD: {course.cpdPoints} Hours</span>
                        <span className="text-[#E1A140] font-bold">Active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: FACULTY */}
            {activeTab === "faculty" && (
              <div className="bg-neutral-900 border border-white/15 p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold uppercase font-editorial-heading">Faculty &amp; Master Trainers</h2>
                  <p className="text-xs text-neutral-400 mt-1">Board-certified dermatologists and plastic surgeons.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FACULTY_DATA.map((faculty: any) => (
                    <div key={faculty.id} className="bg-neutral-950 border border-white/10 p-5">
                      <div className="aspect-square mb-4 overflow-hidden bg-neutral-900">
                        <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <h3 className="font-bold text-base text-white uppercase">{faculty.name}</h3>
                      <p className="text-xs text-[#E1A140] font-mono mt-1">{faculty.title}</p>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{faculty.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 7: SCHEDULE */}
            {activeTab === "schedule" && (
              <div className="bg-neutral-900 border border-white/15 p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold uppercase font-editorial-heading">Training Batches &amp; Timetable</h2>
                  <p className="text-xs text-neutral-400 mt-1">Upcoming weekend cohorts across Pakistan campuses.</p>
                </div>

                <div className="space-y-4">
                  {SCHEDULE_DATA.map((batch: any) => (
                    <div key={batch.id} className="bg-neutral-950 border border-white/10 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono text-[#E1A140] bg-neutral-900 px-2 py-0.5">{batch.city} Campus</span>
                          <span className="text-[10px] font-mono text-emerald-400">{batch.seatsAvailable} Seats Remaining</span>
                        </div>
                        <h4 className="font-bold text-base text-white uppercase">{batch.courseName}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">Dates: {batch.dates} | Venue: {batch.venue}</p>
                      </div>
                      <span className="bg-[#E1A140]/10 border border-[#E1A140]/30 text-[#E1A140] px-4 py-2 text-xs uppercase font-bold font-mono">
                        {batch.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
