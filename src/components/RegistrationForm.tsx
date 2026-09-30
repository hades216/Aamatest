import React, { useState, useEffect } from "react";
import { ShieldCheck, UploadCloud, CheckCircle, FileText, Download, Award, AlertTriangle, ArrowRight, RefreshCw } from "lucide-react";

interface Application {
  refId: string;
  doctorName: string;
  pmncLicense: string;
  degree: string;
  courseSelected: string;
  citySelected: string;
  email: string;
  phone: string;
  submittedAt: string;
}

interface RegistrationFormProps {
  prefilledCourse: string;
  onSuccess: () => void;
}

export function RegistrationForm({ prefilledCourse, onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    doctorName: "",
    pmncLicense: "",
    degree: "MBBS",
    courseSelected: "",
    citySelected: "karachi",
    email: "",
    phone: "",
    consent: false
  });

  const [uploadedFile, setUploadedFile] = useState<File | { name: string; size: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync prefilled course selection from Course buttons click
  useEffect(() => {
    if (prefilledCourse) {
      setFormData((prev) => ({ ...prev, courseSelected: prefilledCourse }));
    }
  }, [prefilledCourse]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!formData.doctorName || !formData.pmncLicense || !formData.email || !formData.phone || !formData.consent) {
      setErrorMessage("Please ensure all clinical registration fields and council consent are filled completely.");
      return;
    }

    setLoading(true);

    // Simulate clinical licensing background evaluation
    setTimeout(() => {
      const randHex = Math.floor(100000 + Math.random() * 900000).toString(16).toUpperCase();
      const refId = `IAMA-2026-${randHex}`;
      
      const newApp: Application = {
        refId,
        doctorName: formData.doctorName.startsWith("Dr.") ? formData.doctorName : `Dr. ${formData.doctorName}`,
        pmncLicense: formData.pmncLicense,
        degree: formData.degree,
        courseSelected: formData.courseSelected || "Botox Masterclass (Basic & Advanced)",
        citySelected: formData.citySelected,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };

      // Store in standard localStorage registry
      const currentApps = JSON.parse(localStorage.getItem("aama_applications") || "[]");
      currentApps.push(newApp);
      localStorage.setItem("aama_applications", JSON.stringify(currentApps));

      setSubmittedApplication(newApp);
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      doctorName: "",
      pmncLicense: "",
      degree: "MBBS",
      courseSelected: "",
      citySelected: "karachi",
      email: "",
      phone: "",
      consent: false
    });
    setUploadedFile(null);
    setSubmittedApplication(null);
  };

  return (
    <section className="bg-neutral-950 py-20 px-4 md:px-8 border-b border-white/10 scroll-mt-20" id="registration-section">
      <div className="max-w-4xl mx-auto">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-12 font-sans">
          <ShieldCheck size={44} className="text-[#E1A140] mx-auto mb-4" />
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#E1A140] mb-2 font-mono">
            Registrar Admission Portal
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-editorial-heading">
            Eligibility &amp; <span className="text-[#E1A140] font-serif lowercase italic font-normal">Enrollment</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E1A140] mx-auto mt-4 mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-300 font-sans font-normal leading-relaxed">
            Due to strict hands-on safety standards and legal guidelines in Pakistan, candidates must provide 
            valid medical license registry details to gain clinic entry permissions.
          </p>
        </div>

        {/* --- DYNAMIC TRANSITION SCREEN ONLY --- */}
        {submittedApplication ? (
          <div className="bg-neutral-900 border border-[#E1A140]/40 rounded-none p-6 sm:p-8 text-left max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-350" id="registration-success-receipt">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="h-14 w-14 rounded-none bg-[#E1A140]/10 flex items-center justify-center text-[#E1A140] border border-[#E1A140]/30 shrink-0">
                <CheckCircle size={28} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-editorial-heading uppercase tracking-tight">
                  Pre-Enrollment Verification Initiated
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                  Ref Key: <span className="text-[#E1A140] font-mono font-bold">{submittedApplication.refId}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-neutral-200 font-sans">
              <p className="leading-relaxed font-normal">
                Thank you, <strong className="text-white font-semibold">{submittedApplication.doctorName}</strong>. 
                Our academic coordination desk has recorded your medical credential credentials. We are validating your 
                PMDC/BMDC Medical License <span className="text-[#E1A140] font-mono font-bold">({submittedApplication.pmncLicense})</span> 
                with the national registries.
              </p>

              {/* Informative Grid Details Receipt */}
              <div className="bg-neutral-950 p-5 rounded-none border border-white/10 space-y-2.5 font-sans text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-neutral-400">Course Selected:</span>
                  <span className="text-white font-medium text-right">{submittedApplication.courseSelected}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-neutral-400">Workshop Location:</span>
                  <span className="text-[#E1A140] font-medium capitalize">{submittedApplication.citySelected} Hub</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-neutral-400">Candidate Degree:</span>
                  <span className="text-white font-mono">{submittedApplication.degree}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Submission Timestamp:</span>
                  <span className="text-neutral-300 font-mono text-xs">{submittedApplication.submittedAt}</span>
                </div>
              </div>

              {/* Technical Warning block */}
              <div className="bg-[#E1A140]/10 border border-[#E1A140]/30 p-5 rounded-none flex gap-3 text-xs sm:text-sm text-neutral-300">
                <AlertTriangle size={20} className="text-[#E1A140] shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-bold text-white">What happens next?</p>
                  <p className="font-normal leading-relaxed text-neutral-300">
                    1. A confirmation SMS and secure onboarding email has been sent to <strong className="text-white">{submittedApplication.phone}</strong> and <strong className="text-white">{submittedApplication.email}</strong>. <br />
                    2. Once licensing verification concludes (typically 12-24 hours), our regional coordinator will call you to conduct a short credential interview and allocate your supervised live-model seat.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons on completion */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 font-sans">
              <button
                onClick={() => window.print()}
                className="px-6 py-3.5 text-xs font-bold tracking-widest text-[#E1A140] bg-neutral-950 border border-white/20 hover:bg-[#E1A140]/10 rounded-none uppercase flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                <Download size={15} />
                <span>Save PDF Receipt</span>
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-3.5 text-xs font-bold tracking-widest text-black bg-[#E1A140] hover:bg-amber-300 rounded-none uppercase flex items-center justify-center gap-2 focus:outline-none cursor-pointer duration-300 shadow-md"
              >
                <RefreshCw size={15} />
                <span>Submit Another Admission</span>
              </button>
            </div>
          </div>
        ) : (
          
          /* --- ONLINE REGISTRATION FORM GRID --- */
          <form 
            onSubmit={handleSubmit} 
            className="bg-neutral-900 border border-white/15 p-6 md:p-10 rounded-none text-left shadow-2xl relative"
            id="enrollment-submission-form"
          >
            {/* Form Section heading */}
            <div className="mb-6 pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E1A140] font-bold">
                Phase 1 // Credential Ingestion
              </span>
              <h3 className="text-xl font-bold text-white font-editorial-heading uppercase tracking-tight mt-1.5">
                Candidate Licensing Registration Form
              </h3>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs font-mono flex items-center gap-2">
                <AlertTriangle size={16} className="text-rose-400 shrink-0" aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Doctor Name Field */}
              <div className="space-y-2">
                <label htmlFor="reg-doc-name" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Full Doctor Name (as on Degree) <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  id="reg-doc-name"
                  type="text"
                  required
                  placeholder="e.g. Dr. Shumaila Qasim"
                  value={formData.doctorName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, doctorName: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors"
                />
              </div>

              {/* Council License No. PMDC */}
              <div className="space-y-2">
                <label htmlFor="reg-pmdc-license" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  PM&amp;DC / BM&amp;DC License Number <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  id="reg-pmdc-license"
                  type="text"
                  required
                  placeholder="e.g. 84092-P or 1042-D"
                  value={formData.pmncLicense}
                  onChange={(e) => setFormData((prev) => ({ ...prev, pmncLicense: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors font-mono"
                />
              </div>

              {/* Primary Professional Degree Dropdown */}
              <div className="space-y-2">
                <label htmlFor="reg-degree" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Registered Medical Qualification <span className="text-[#E1A140]">*</span>
                </label>
                <select
                  id="reg-degree"
                  value={formData.degree}
                  onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors select cursor-pointer"
                >
                  <option value="MBBS">MBBS (Doctor of Medicine)</option>
                  <option value="BDS">BDS (Doctor of Dental Surgery)</option>
                  <option value="FCPS">FCPS / MD Specialty Boards</option>
                  <option value="Diploma">Postgrad Diploma in Dermatology</option>
                  <option value="International">International Equivalent MD</option>
                </select>
              </div>

              {/* Target Course Selected Dropdown */}
              <div className="space-y-2">
                <label htmlFor="reg-course" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Target Course Module <span className="text-[#E1A140]">*</span>
                </label>
                <select
                  id="reg-course"
                  value={formData.courseSelected}
                  onChange={(e) => setFormData((prev) => ({ ...prev, courseSelected: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors select cursor-pointer"
                >
                  <option value="">-- Choose Workshop Module --</option>
                  <option value="Masterclass in Botox (Basic to Advanced)">Botox Masterclass (Basic &amp; Advanced)</option>
                  <option value="Masterclass in Basic & Advanced Dermal Fillers">Aesthetic Dermal Fillers</option>
                  <option value="Clinical Lasers & Energy-Based Devices (EBDs)">Medical Lasers &amp; Energy Devices</option>
                  <option value="Liquid Rhinoplasty & Profiloplasty">Liquid Rhinoplasty &amp; Profiloplasty</option>
                </select>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="reg-email" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Official Email Address <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="e.g. shumaila@doctor.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors"
                />
              </div>

              {/* Contact Phone */}
              <div className="space-y-2">
                <label htmlFor="reg-phone" className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Phone / WhatsApp Contact <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/15 focus:border-[#E1A140] rounded-none px-4 py-3.5 text-sm text-neutral-100 outline-none transition-colors font-mono"
                />
              </div>

              {/* Preferred Assembly Hub */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono mb-2">
                  Preferred Training Assembly City <span className="text-[#E1A140]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all backdrop-blur-md ${
                    formData.citySelected === "lahore"
                      ? "border-[#E1A140] bg-[#E1A140]/10 text-white"
                      : "border-white/15 hover:bg-neutral-950 text-neutral-300"
                  }`}>
                    <div>
                      <p className="text-sm font-bold uppercase font-sans">Lahore Campus</p>
                      <p className="text-xs text-neutral-400 font-normal mt-0.5">Phase 5 DHA Flagship</p>
                    </div>
                    <input
                      type="radio"
                      name="city"
                      checked={formData.citySelected === "lahore"}
                      onChange={() => setFormData((prev) => ({ ...prev, citySelected: "lahore" }))}
                      className="accent-[#E1A140] h-4 w-4 cursor-pointer"
                    />
                  </label>

                  <label className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all backdrop-blur-md ${
                    formData.citySelected === "karachi"
                      ? "border-[#E1A140] bg-[#E1A140]/10 text-white"
                      : "border-white/15 hover:bg-neutral-950 text-neutral-300"
                  }`}>
                    <div>
                      <p className="text-sm font-bold uppercase font-sans">Karachi Hub</p>
                      <p className="text-xs text-neutral-400 font-normal mt-0.5">Clifton Clinic Facility</p>
                    </div>
                    <input
                      type="radio"
                      name="city"
                      checked={formData.citySelected === "karachi"}
                      onChange={() => setFormData((prev) => ({ ...prev, citySelected: "karachi" }))}
                      className="accent-[#E1A140] h-4 w-4 cursor-pointer"
                    />
                  </label>

                  <label className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all backdrop-blur-md ${
                    formData.citySelected === "islamabad"
                      ? "border-[#E1A140] bg-[#E1A140]/10 text-white"
                      : "border-white/15 hover:bg-neutral-950 text-neutral-300"
                  }`}>
                    <div>
                      <p className="text-sm font-bold uppercase font-sans">Islamabad Center</p>
                      <p className="text-xs text-neutral-400 font-normal mt-0.5">G-8 Executive Complex</p>
                    </div>
                    <input
                      type="radio"
                      name="city"
                      checked={formData.citySelected === "islamabad"}
                      onChange={() => setFormData((prev) => ({ ...prev, citySelected: "islamabad" }))}
                      className="accent-[#E1A140] h-4 w-4 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* High-Fidelity License Drag and Drop Field */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold tracking-wider text-neutral-300 uppercase font-mono">
                  Upload PMDC License copy / Aesthetic Diploma (Optional Pre-Check)
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border border-dashed rounded-none p-6 text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                    dragActive 
                      ? "border-[#E1A140] bg-[#E1A140]/10" 
                      : "border-white/20 hover:border-neutral-500 bg-neutral-950"
                  }`}
                >
                  <input
                    type="file"
                    id="license-file-input"
                    multiple={false}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="license-file-input" className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                    <UploadCloud size={32} className="text-neutral-400 mb-2 group-hover:text-[#E1A140] transition-colors" />
                    
                    {uploadedFile ? (
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#E1A140] flex items-center justify-center gap-1.5">
                          <FileText size={15} />
                          <span>{uploadedFile.name}</span>
                        </p>
                        <p className="text-xs text-neutral-400 font-mono">Size: {uploadedFile.size}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-neutral-200 font-sans">
                          Drag and drop license copy, or <span className="text-[#E1A140] font-semibold underline underline-offset-2">browse file</span>
                        </p>
                        <p className="text-xs text-neutral-400 mt-1 font-sans">
                          Supported formats: JPEG, PNG, PDF (Max 8MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Authority Credential Certifying Consent Checkbox */}
              <div className="md:col-span-2 flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  required
                  id="consent-check"
                  checked={formData.consent}
                  onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                  className="accent-[#E1A140] h-5 w-5 mt-0.5 shadow-sm rounded-none cursor-pointer shrink-0"
                />
                <label htmlFor="consent-check" className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal cursor-pointer select-none font-sans">
                  I hereby certify that I am a registered medical/dental practitioner currently registered with the Medical Commission of Pakistan. I understand that falsification of medical credentials will lead to immediate cancellation of admission without recourse.
                </label>
              </div>

            </div>

            {/* Submission triggers */}
            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest text-black bg-[#E1A140] hover:bg-amber-300 rounded-full shadow-lg transition-all duration-300 text-center uppercase flex items-center justify-center gap-2 cursor-pointer font-sans backdrop-blur-md border border-[#E1A140]/60"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 zm 2 5.291 A 7.962 7.962 0 0 1 4 12 H 0 c 0 3.042 1.135 5.824 3 7.938 l 3 -2.647 z"></path>
                    </svg>
                    <span>Authenticating Registry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Pre-Registration Verification</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
