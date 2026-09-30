import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EnrollmentPopup } from "./components/EnrollmentPopup";
import { LoadingScreen } from "./components/LoadingScreen";

// Multi-page route views
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { FacultyPage } from "./pages/FacultyPage";
import { SchedulePage } from "./pages/SchedulePage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { ModelsPage } from "./pages/ModelsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { VisualEditorOverlay } from "./components/VisualEditorOverlay";
import { GlobalVisualEditsApplier } from "./components/GlobalVisualEditsApplier";
import { LuxuryBackground } from "./components/LuxuryBackground";

// Static App Versioning Strategy for Cache Busting
export const APP_VERSION = "2.6.0";

export function getVersionedAsset(url: string): string {
  if (!url) return url;
  if (url.startsWith("data:") || url.startsWith("blob:")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${APP_VERSION}`;
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark"; // Default to dark mode when site gets opened
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      {/* STARTING LUXURY PRELOADER SPLASH SCREEN */}
      <LoadingScreen />

      <GlobalVisualEditsApplier />
      {/* ACCESSIBILITY: SKIP TO MAIN CONTENT LINK FOR KEYBOARD & SCREEN READERS */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-[#E1A140] focus:text-black focus:font-bold focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-black"
      >
        Skip to main content
      </a>

      <div className="bg-neutral-950 min-h-screen text-white font-sans antialiased selection:bg-[#E1A140] selection:text-black flex flex-col justify-between relative">
        <LuxuryBackground />
        <ScrollToTop />
        
        {/* STRUCTURAL FIXED HEADER NAVIGATION */}
        <Header theme={theme} onToggleTheme={toggleTheme} />

        {/* DYNAMIC MULTI-PAGE ROUTER VIEWPORT */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1} role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/model" element={<ModelsPage />} />
            <Route path="/register" element={<AdmissionsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/highlights" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* PERSISTENT LUXURY FOOTER */}
        <Footer />

        {/* PROACTIVE NEW TRAINING PROGRAM POPUP BANNER */}
        <EnrollmentPopup />

        {/* LIVE VISUAL EDITOR OVERLAY */}
        <VisualEditorOverlay />
      </div>
    </BrowserRouter>
  );
}
