// @ts-ignore
import drShumailaImg from "../assets/images/dr_shumaila_khan_portrait_1790730002038.jpg";
// @ts-ignore
import drAsherImg from "../assets/images/dr_asher_mashhood_portrait_1790758213053.jpg";
// @ts-ignore
import drAishaImg from "../assets/images/dr_aisha_zubair_portrait_1790758405040.jpg";
// @ts-ignore
import heroModelImg from "../assets/images/bright_hero_model_1781221945218.jpg";
// @ts-ignore
import clinicalSuiteImg from "../assets/images/bright_clinical_suite_1781221728289.jpg";
// @ts-ignore
import treatmentImg from "../assets/images/clear_clinical_treatment_1781221754294.jpg";
// @ts-ignore
import laserDevImg from "../assets/images/clear_laser_device_1781221773224.jpg";
export interface CourseModule {
  number: string;
  title: string;
  description: string;
  keyTopics: string[];
}

export interface Course {
  id: string;
  name: string;
  subtitle: string;
  category: "injectables" | "lasers" | "threads" | "skin" | "fellowship" | "masterclass" | "mentorship" | "handbook" | "events" | "models" | "bespoke" | "shadowing";
  categoryLabel: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Masterclass" | "Fellowship" | "All Levels";
  duration: string;
  cpdCredits: string;
  handsOnRatio: string;
  badge?: string;
  featured?: boolean;
  pricePKR: string;
  priceUSD: string;
  prerequisites: string;
  certification: string;
  image: string;
  concept: string;
  description: string;
  learningOutcomes: string[];
  injectPoints: string[];
  modules: CourseModule[];
  syllabus: string[];
  mentors: { name: string; title: string; image?: string }[];
  upcomingDates: { city: string; date: string; venue: string; seatsLeft: number }[];
  faqs: { question: string; answer: string }[];
}

export const COURSES_DATA: Course[] = [
  // 1. INJECTOR HANDBOOK
  {
    id: "injector-handbook",
    name: "The Aesthetic Injector Handbook",
    subtitle: "The Definitive Clinical Reference Guide & Non-Surgical Protocols",
    category: "handbook",
    categoryLabel: "Clinical Reference Guide",
    level: "All Levels",
    duration: "Comprehensive Reference Manual & Digital Access",
    cpdCredits: "8 CPD Self-Study Hours",
    handsOnRatio: "Clinical Atlas & Reconstitution Matrix",
    badge: "Must-Have",
    featured: true,
    pricePKR: "35,000 PKR",
    priceUSD: "$120 USD",
    prerequisites: "MBBS / BDS / Registered Medical Physicians & Injectors",
    certification: "UK CPD Verified Self-Directed Learning & Clinical Reference Certificate",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900",
    concept: "An authoritative desk companion containing high-resolution 3D vascular diagrams, safe injection depths, exact reconstitution mathematics, and emergency salvage algorithms.",
    description: "The Aesthetic Injector Handbook is the indispensable clinical manual authored by IAMA faculty and international master injectors. Designed for both novice and senior aesthetic physicians, it distills complex 3D facial anatomy into actionable, non-surgical injection blueprints, product rheology charts, cannula vs. needle selection guides, and immediate hyaluronidase reversal protocols.",
    learningOutcomes: [
      "Access instant bedside reconstitution charts for Botox, Dysport, Xeomin, and Nabota",
      "Navigate 3D facial danger zones with cross-sectional vascular anatomical overlays",
      "Choose optimal HA filler rheologies (G-prime, cohesivity) for specific facial planes",
      "Follow step-by-step algorithms for vascular occlusion, delayed nodules, and tyndall effect",
      "Utilize legally vetted medical photography, patient consent, and pre/post-treatment guidelines"
    ],
    injectPoints: [
      "Upper Face: Frontalis, Corrugator, Procerus, Orbicularis Oculi safety depths",
      "Mid Face: Zygomaticus, Malar fat pads, Piriform fossa, Tear trough planes",
      "Lower Face: Masseter boundaries, DAO, DLI, Mentalis, Philtral columns",
      "Perioral & Lip: Superior/Inferior labial artery safety planes, Vermilion borders",
      "Vascular Danger Map: Facial artery, Angular artery, Supratrochlear, Supraorbital tracks"
    ],
    modules: [
      {
        number: "01",
        title: "Facial Anatomy & Vascular Safety Maps",
        description: "Full-color anatomical illustrations detailing danger zones, facial nerve courses, and vascular branching patterns.",
        keyTopics: ["Depth of injection planes", "3D vascular variations", "Avascular corridors"]
      },
      {
        number: "02",
        title: "Neuromodulator Matrix & Dosage Guides",
        description: "Dilution formulas, diffusion radii, units per facial quadrant, and prevention of asymmetric animation.",
        keyTopics: ["Toxin unit conversions", "Bacteriostatic saline ratios", "Off-label lower face dosages"]
      },
      {
        number: "03",
        title: "Dermal Filler Rheology & Cannula Vectors",
        description: "Classification of Hyaluronic Acid brands, elasticity (G'), cohesivity, and 25G/27G cannula entry points.",
        keyTopics: ["Layer-specific product selection", "Cannula gliding techniques", "Needle vs Cannula indications"]
      },
      {
        number: "04",
        title: "Emergency Complication Salvage Protocol",
        description: "High-dose pulsed hyaluronidase protocol, ischemic blanching identification, and hyperbaric oxygen referral blueprints.",
        keyTopics: ["Vascular compromise step-by-step", "Hyaluronidase dilution rules", "Patient follow-up protocols"]
      },
      {
        number: "05",
        title: "Clinical Practice, Legal Consents & Photography",
        description: "Standardized medical lighting, 5-view medical photography, PM&DC-compliant consent forms, and liability mitigation.",
        keyTopics: ["Medical documentation templates", "Before/After photo standards", "Doctor-patient communication"]
      }
    ],
    syllabus: [
      "Complete 3D non-surgical facial anatomy atlas",
      "Toxin & Dermal Filler mathematical matrix",
      "Micro-cannula entry point & vector guide",
      "Vascular occlusion & complication rescue protocol",
      "Digital access & printable clinical chart templates"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Immediate Access", date: "Digital Edition Available Now", venue: "Online Portal & Hardcover Dispatch", seatsLeft: 50 },
      { city: "Lahore Campus", date: "Collection at Registration Desk", venue: "IAMA Flagship Campus, Phase 5 DHA", seatsLeft: 25 },
      { city: "Karachi Campus", date: "Collection at Registration Desk", venue: "IAMA Center of Excellence, Clifton", seatsLeft: 20 }
    ],
    faqs: [
      {
        question: "Is the handbook provided as a digital download or physical book?",
        answer: "Delegates receive both: an instant interactive digital edition on the IAMA portal and a luxury hardbound clinical desk edition shipped directly to their clinic."
      },
      {
        question: "Is this handbook relevant for beginners or advanced injectors?",
        answer: "Both. Novice doctors benefit from safe dosage charts and landmark guides, while experienced injectors use it for complex complication salvage protocols and high-G' rheology specs."
      }
    ]
  },

  // 2. FACIAL SCULPTING MASTERCLASS
  {
    id: "facial-sculpting",
    name: "Facial Sculpting Masterclass",
    subtitle: "Advanced Full-Face Non-Surgical Contouring, MD Codes™ & Vector Architecture",
    category: "masterclass",
    categoryLabel: "Non-Surgical Facial Sculpting",
    level: "Masterclass",
    duration: "2 Full Days Intensive",
    cpdCredits: "20 CPD Hours",
    handsOnRatio: "2 Live Models per Delegate with 1:1 Supervision",
    badge: "Flagship",
    featured: true,
    pricePKR: "210,000 PKR",
    priceUSD: "$750 USD",
    prerequisites: "MBBS / BDS / Basic Dermal Filler & Toxin Certification",
    certification: "UK CPD Accredited Certificate in Advanced Non-Surgical Facial Sculpting",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=900",
    concept: "Holistic full-face beautification through non-surgical structural lifting, multi-plane volumisation, and harmonious proportions.",
    description: "The Facial Sculpting Masterclass moves beyond single-zone treatments to deliver comprehensive, non-surgical full-face rejuvenation. Delegates master the world-renowned MD Codes™ framework, 25G/27G micro-cannula pan-facial vectors, lateral cheek apex restoration, piriform aperture support, jawline definition, and chin elongation for transformative, natural-looking results.",
    learningOutcomes: [
      "Master pan-facial non-surgical assessment to balance mid-face, periorbital, and lower-face vectors",
      "Implement deep supraperiosteal boluses and superficial subdermal micro-aliquots safely",
      "Reconstruct the Ogee curve and zygomatic arch without creating a puffy, overfilled look",
      "Sharpen mandibular angles and correct pre-jowl sulcus with cannula fanning",
      "Perform natural Russian lip contouring integrated with chin and jawline profiloplasty"
    ],
    injectPoints: [
      "Midface Apex: CK1, CK2, CK3 zygomatic arch & malar projection",
      "Periorbital: Tear trough transition & lateral orbital rim support",
      "Lower Face: C1-C6 chin projection, Poginion, and Mandibular angles (Jw1-Jw5)",
      "Perioral: Nasolabial NL1-NL3, Marionette M1-M3, and Oral commissures",
      "Temple: Deep temporal fossa supraperiosteal volumisation"
    ],
    modules: [
      {
        number: "01",
        title: "Pan-Facial Biomechanics & 3D Vector Planning",
        description: "Understanding facial aging vectors, fat-pad deflation, bone resorption, and multi-layer structural support.",
        keyTopics: ["MD Codes™ structural mapping", "Golden ratio proportions", "Assessment of dynamic animation"]
      },
      {
        number: "02",
        title: "Mid-Face Contouring & Tear Trough Smooth Transition",
        description: "Restoring the zygomatic arch and cheek projection with blunt-tip micro-cannula to lift the lower face naturally.",
        keyTopics: ["Cannula entry at zygomatic arch", "Sub-SMAS plane navigation", "Infraorbital nerve avoidance"]
      },
      {
        number: "03",
        title: "Lower Face Sculpting: Jawline, Chin & Jowls",
        description: "Creating sharp mandibular definition, correcting pre-jowl sulcus, and elongating retruded chins without surgery.",
        keyTopics: ["Mandibular border cannula fanning", "Mentalis deep depot", "Facial artery avoidance"]
      },
      {
        number: "04",
        title: "Temple & Lateral Brow Non-Surgical Elevation",
        description: "Volumising hollowed temporal regions and creating non-surgical lateral brow lift for open, refreshed eyes.",
        keyTopics: ["One-point temporal depot", "Superficial temporal artery safety", "Cannula brow vectoring"]
      },
      {
        number: "05",
        title: "Live Patient Injections & Precision Feedback",
        description: "Delegates sculpt full-face cases on live patient models under direct 1:1 master trainer supervision.",
        keyTopics: ["Sterile live model marking", "Real-time vector refinement", "Post-care documentation"]
      }
    ],
    syllabus: [
      "Comprehensive pan-facial non-surgical evaluation",
      "Full-face MD Codes™ injection protocol",
      "Micro-cannula pan-facial vector sculpting",
      "Lower face jawline sharpening & chin sculpting",
      "Supervised 1:1 live patient model injection residency"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "April 26 - 27, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 3 },
      { city: "Karachi", date: "May 03 - 04, 2026", venue: "IAMA Center of Excellence, Clifton", seatsLeft: 4 },
      { city: "Islamabad", date: "May 17 - 18, 2026", venue: "IAMA Executive Suites, Sector F-7/2", seatsLeft: 3 }
    ],
    faqs: [
      {
        question: "Is this training 100% non-surgical?",
        answer: "Yes, absolutely. The masterclass focuses purely on minimally invasive, non-surgical aesthetic injectables using high-G' dermal fillers, botulinum toxins, and micro-cannula techniques."
      },
      {
        question: "Are live models provided by the institute?",
        answer: "Yes, every delegate is provided with pre-screened clinical patient models to execute live full-face sculpting under 1:1 mentorship."
      }
    ]
  },

  // 3. FACIAL SCULPTING MASTERCLASS IN ISLAMABAD
  {
    id: "facial-sculpting-islamabad",
    name: "Facial Sculpting Masterclass in Islamabad",
    subtitle: "Advanced Non-Surgical Pan-Facial Contouring & Structural Architecture",
    category: "masterclass",
    categoryLabel: "Islamabad Campus",
    level: "Masterclass",
    duration: "2 Days Clinical Intensive",
    cpdCredits: "20 CPD Hours",
    handsOnRatio: "1:1 Live Patient Injection Sessions",
    badge: "Capital Edition",
    featured: false,
    pricePKR: "210,000 PKR",
    priceUSD: "$750 USD",
    prerequisites: "Registered Medical Physicians / PM&DC Doctors with Dermal Filler Experience",
    certification: "UK CPD Accredited Certificate in Facial Sculpting",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    concept: "Islamabad executive residency bringing IAMA's elite non-surgical sculpting curriculum to medical professionals in the capital.",
    description: "Join master trainers in Islamabad for an exclusive, small-cohort residency focused on high-precision non-surgical facial sculpting. Master multi-plane midface restoration, sharp jawline contouring, liquid profiloplasty, and emergency complication management adhering to strict safety protocols.",
    learningOutcomes: [
      "Master facial aesthetic proportions and structural anatomical variations",
      "Execute safe micro-cannula technique for zygoma, piriform, and tear trough transition",
      "Construct defined mandibular angles and elongated chins without surgery",
      "Utilize precise injection markers and vascular safety protocols",
      "Receive UK CPD accreditation and prestigious certification"
    ],
    injectPoints: [
      "Malar Apex: Deep periosteal cheek volumisation",
      "Mandible & Pre-Jowl: Subcutaneous cannula linear fanning",
      "Chin: Anterior projection & lateral tubercle balance",
      "Nasolabial & Marionette: Multi-layer retrograde support",
      "Periorbital: Micro-cannula tear trough smoothing"
    ],
    modules: [
      {
        number: "01",
        title: "Facial Morphology & 3D Sculpting Vectors",
        description: "Detailed analysis of structural aging, volume shifts, and patient-specific aesthetic roadmaps.",
        keyTopics: ["Facial vector biomechanics", "Anatomical safety planes", "Patient consultation mastery"]
      },
      {
        number: "02",
        title: "Mid-Face Elevation & Cannula Mastery",
        description: "Cannula entry point selection, resistance tactile feedback, and creating natural midface height.",
        keyTopics: ["Zygomatic arch lift", "Sub-orbicularis fat restoration", "Cannula gliding"]
      },
      {
        number: "03",
        title: "Lower Face Contouring & Liquid Profiloplasty",
        description: "Non-surgical jawline sculpting, jowl tucking, and balanced chin elongation.",
        keyTopics: ["Jawline definition", "Mentalis angle restoration", "Safe vascular planes"]
      },
      {
        number: "04",
        title: "Complication Management & Emergency Salvage",
        description: "Identifying vascular distress, high-dose hyaluronidase reversal, and legal risk governance.",
        keyTopics: ["Ischemic blanching detection", "Emergency reversal drills", "Post-treatment protocols"]
      },
      {
        number: "05",
        title: "Supervised Live Patient Injections",
        description: "Hands-on injection on live patient models under 1:1 direct supervision of lead master trainers.",
        keyTopics: ["Live model marking", "Aseptic technique", "Immediate post-procedure evaluation"]
      }
    ],
    syllabus: [
      "3D facial anatomy & danger zone mapping",
      "Advanced micro-cannula technique & vectors",
      "Full-face non-surgical contouring & MD Codes",
      "Complications, ultrasound, and hyaluronidase protocols",
      "Supervised live clinical patient injections"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Islamabad", date: "June 20 - 21, 2026", venue: "IAMA Executive Suites, Sector F-7/2, Islamabad", seatsLeft: 4 },
      { city: "Islamabad", date: "October 17 - 18, 2026", venue: "IAMA Executive Suites, Sector F-7/2, Islamabad", seatsLeft: 6 }
    ],
    faqs: [
      {
        question: "Where is the Islamabad training held?",
        answer: "The masterclass takes place at our executive clinical training suites in Sector F-7/2, Islamabad, fully equipped with state-of-the-art non-surgical injection bays."
      },
      {
        question: "Is this training recognized internationally?",
        answer: "Yes, delegates receive UK CPD accreditation and an internationally recognized certificate in Non-Surgical Facial Sculpting."
      }
    ]
  },

  // 4. FACIAL SCULPTING MASTERCLASS IN PESHAWAR
  {
    id: "facial-sculpting-peshawar",
    name: "Facial Sculpting Masterclass in Peshawar",
    subtitle: "High-Precision Non-Surgical Structural Sculpting & Pan-Facial Contouring",
    category: "masterclass",
    categoryLabel: "Peshawar Campus",
    level: "Masterclass",
    duration: "2 Days Clinical Intensive",
    cpdCredits: "20 CPD Hours",
    handsOnRatio: "1:1 Live Patient Injection Sessions",
    badge: "Regional Edition",
    featured: false,
    pricePKR: "210,000 PKR",
    priceUSD: "$750 USD",
    prerequisites: "Registered Medical Physicians / PM&DC Doctors with Prior Injecting Experience",
    certification: "UK CPD Accredited Certificate in Facial Sculpting",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
    concept: "Peshawar clinical intensive focused on cutting-edge non-surgical facial sculpting and pan-facial harmony.",
    description: "Experience world-class non-surgical facial aesthetics in Peshawar. This 2-day hands-on intensive immerses delegates in high-G' dermal filler volumisation, micro-cannula safety vectors, non-surgical profiloplasty, and comprehensive full-face transformation with 1:1 live patient models.",
    learningOutcomes: [
      "Master structural mid-face cheek augmentation and temporal hollow restoration",
      "Construct sharp, masculine or feminine jawline contours using micro-cannulas",
      "Perform natural Russian lip contouring and perioral rejuvenation without duck-bill projection",
      "Execute high-speed emergency hyaluronidase reversal protocols in high-risk zones",
      "Receive UK CPD credits and prestigious certification"
    ],
    injectPoints: [
      "Zygoma & Lateral Cheek: Deep bolus and cannula vectors",
      "Jawline & Jowl: Subcutaneous linear fanning",
      "Chin: Anterior and vertical projection",
      "Temples: Deep supraperiosteal filler depot",
      "Lips & Perioral: Sharp vermilion and philtral column definition"
    ],
    modules: [
      {
        number: "01",
        title: "Facial Structural Aging & 3D Vector Design",
        description: "Anatomical principles of bone resorption, fat pad migration, and non-surgical aesthetic restoration.",
        keyTopics: ["Facial vector mechanics", "MD Codes principles", "Patient selection & consultation"]
      },
      {
        number: "02",
        title: "Midface & Temporal Sculpting",
        description: "Restoring the lateral and medial cheek support while lifting the lower third of the face.",
        keyTopics: ["Cannula midface vectoring", "Temporal fossa injection", "Avoiding temporal vessels"]
      },
      {
        number: "03",
        title: "Lower Face Contouring & Profiloplasty",
        description: "Sharpening the mandibular border and balancing chin projection with facial profile aesthetics.",
        keyTopics: ["Mandibular angle definition", "Pre-jowl sulcus correction", "Chin projection"]
      },
      {
        number: "04",
        title: "Emergency Protocols & Complication Salvage",
        description: "Comprehensive review of vascular occlusion protocols, hyaluronidase dosing, and emergency algorithms.",
        keyTopics: ["High-dose pulsed hyaluronidase", "Vascular distress signs", "Clinical documentation"]
      },
      {
        number: "05",
        title: "Hands-On Live Patient Injections",
        description: "Delegates perform full-face sculpting on live patient models under 1:1 trainer supervision.",
        keyTopics: ["Patient marking", "Aseptic injection", "Live feedback & critique"]
      }
    ],
    syllabus: [
      "3D facial anatomical mapping & safe injection planes",
      "Micro-cannula pan-facial sculpting techniques",
      "Full-face structural volume restoration",
      "Vascular safety, ultrasound, and hyaluronidase rescue",
      "Supervised live patient model hands-on injection"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Peshawar", date: "July 18 - 19, 2026", venue: "IAMA Regional Training Center, University Road, Peshawar", seatsLeft: 5 },
      { city: "Peshawar", date: "November 14 - 15, 2026", venue: "IAMA Regional Training Center, University Road, Peshawar", seatsLeft: 6 }
    ],
    faqs: [
      {
        question: "Is this training exclusively non-surgical?",
        answer: "Yes, all modules and hands-on injections focus strictly on non-surgical, minimally invasive aesthetic medicine."
      },
      {
        question: "What is the delegate-to-trainer ratio?",
        answer: "Cohorts are strictly limited to 6 delegates to guarantee personal 1:1 attention and dedicated live patient models for every doctor."
      }
    ]
  },

  // 5. BESPOKE HANDS-ON TRAINING
  {
    id: "bespoke-training",
    name: "Bespoke Hands-On Training",
    subtitle: "1-on-1 VIP Tailored Clinical Mentorship & Private Aesthetic Coaching",
    category: "bespoke",
    categoryLabel: "1-on-1 Private Mentorship",
    level: "All Levels",
    duration: "1 to 3 Days Custom Residency",
    cpdCredits: "Up to 30 CPD Hours",
    handsOnRatio: "100% Dedicated 1-on-1 Hands-On Patient Cases",
    badge: "VIP Custom",
    featured: true,
    pricePKR: "275,000 PKR / Day",
    priceUSD: "$980 USD / Day",
    prerequisites: "MBBS / BDS / Registered Medical Practitioner (Curriculum tailored to your exact level)",
    certification: "UK CPD Accredited Certificate in Bespoke Advanced Clinical Aesthetics",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
    concept: "A completely personalized, 1-on-1 clinical residency where the curriculum, procedural mix, and pace are customized strictly to your learning objectives.",
    description: "Designed for ambitious medical doctors seeking rapid, distraction-free mastery. You choose the exact non-surgical procedures you wish to master — whether it is advanced Russian lips, micro-cannula tear troughs, non-surgical liquid rhinoplasty, PDO thread vectors, or high-level complication management. You will inject multiple dedicated live patient models side-by-side with our lead master trainer.",
    learningOutcomes: [
      "Receive 100% focused attention with zero other delegates in the clinical room",
      "Inject 4 to 8 dedicated live patient models per day tailored to your procedural wishlist",
      "Overcome specific clinical roadblocks, needle hesitation, or cannula navigation doubts",
      "Refine artistic facial assessment, patient consultation, and photography skills",
      "Gain personalized business and pricing strategies for your private clinic setup"
    ],
    injectPoints: [
      "Customized: Tailored to delegate's choice of Upper Face, Mid Face, Lower Face, or Neck",
      "Specialty Options: Liquid Rhinoplasty, Tear Troughs, Russian Lips, Jawline, PDO Threads",
      "Complication Mastery: Ultrasound-guided vascular mapping and emergency reversal drills"
    ],
    modules: [
      {
        number: "01",
        title: "Pre-Residency Needs Assessment & Curriculum Design",
        description: "Direct consultation with the master trainer to construct your bespoke learning modules and select patient models.",
        keyTopics: ["Skill gap identification", "Customized patient model recruitment", "Procedure selection"]
      },
      {
        number: "02",
        title: "1-on-1 Theoretical & Anatomical Masterclass",
        description: "Intensive 3D anatomical breakdown focused precisely on your chosen procedural zones and product rheologies.",
        keyTopics: ["Targeted anatomy review", "Cannula entry vectors", "Danger zone deep dive"]
      },
      {
        number: "03",
        title: "Side-by-Side Co-Injection & Technique Calibration",
        description: "Master trainer injects one side while guiding your hand on the contralateral side for perfect symmetry.",
        keyTopics: ["Tactile resistance calibration", "Micro-bolus depth feedback", "Symmetry alignment"]
      },
      {
        number: "04",
        title: "Independent Supervised Patient Procedures",
        description: "Execute complete, unsupervised-feel non-surgical treatments with your mentor providing real-time safety oversight.",
        keyTopics: ["Full-face case execution", "Patient rapport management", "Post-care instructions"]
      },
      {
        number: "05",
        title: "Clinical Debrief & Lifelong Mentorship Roadmap",
        description: "Case review, high-resolution photography analysis, and setup of your direct hotline access to the mentor.",
        keyTopics: ["Photography critique", "Clinic pricing plan", "Lifelong hotline registration"]
      }
    ],
    syllabus: [
      "100% customized procedural syllabus",
      "4 to 8 dedicated live patient models per training day",
      "Direct 1-on-1 mentorship with Dr. Shumaila Khan / Dr. Shumaila Khan",
      "High-dose complication management and ultrasound guidance",
      "Personalized clinic business and marketing blueprint"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore / Karachi / Islamabad", date: "Flexible Dates On-Demand (Booked via Registrar)", venue: "Private Clinical Suite at Choice Campus", seatsLeft: 2 }
    ],
    faqs: [
      {
        question: "Can I choose which specific procedures I want to practice?",
        answer: "Yes! That is the core advantage of Bespoke Training. You can select any combination of non-surgical Botox, Dermal Fillers, Liquid Rhinoplasty, PDO Threads, Profhilo, or Lasers."
      },
      {
        question: "How far in advance should I book?",
        answer: "Because live patient models must be specifically curated for your custom curriculum, we recommend booking at least 2 weeks in advance."
      }
    ]
  },

  // 6. CLINICAL SHADOWING WITH DR. SHUMAILA KHAN
  {
    id: "clinical-shadowing",
    name: "1:1 Clinical Shadowing with Dr. Shumaila Khan",
    subtitle: "Elite Clinical Immersion, Live Consultations & High-Volume Master Injecting",
    category: "shadowing",
    categoryLabel: "Elite Clinical Immersion",
    level: "All Levels",
    duration: "1 to 2 Days Clinical Observership",
    cpdCredits: "12 CPD Observership Hours",
    handsOnRatio: "Direct Chairside Clinical Observation & Case Analysis",
    badge: "Exclusive",
    featured: true,
    pricePKR: "150,000 PKR",
    priceUSD: "$550 USD",
    prerequisites: "MBBS / BDS / Registered Medical Physicians & Aesthetic Practitioners",
    certification: "UK CPD Accredited Certificate of Clinical Immersion & Aesthetic Practice Observership",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900",
    concept: "Experience a full clinical day inside the private practice of world-renowned aesthetic physician Dr. Shumaila Khan.",
    description: "Clinical Shadowing offers a rare, high-impact opportunity to observe international master educator Dr. Shumaila Khan in action during active patient clinics. Observe how a world-class practitioner conducts seamless aesthetic consultations, executes rapid pan-facial non-surgical assessments, manages high-profile patients, and handles complex clinical presentations with effortless confidence.",
    learningOutcomes: [
      "Observe 10 to 15+ live non-surgical patient consultations and complex injectable cases in real time",
      "Learn Dr. Shumaila Khan's signature patient communication, expectation management, and conversion techniques",
      "See live execution of advanced facial sculpting, Russian lips, tear troughs, and liquid rhinoplasties",
      "Witness real-time clinical problem solving, touch-up assessments, and complication prevention",
      "Participate in dedicated end-of-day clinical Q&A and case analysis sessions"
    ],
    injectPoints: [
      "Chairside Observation: Full spectrum of facial injectable sites",
      "Assessment Mapping: Real-time dynamic marking & vector planning on patients",
      "Case Review: In-depth analysis of patient records, dosages, and product selection"
    ],
    modules: [
      {
        number: "01",
        title: "Morning Clinical Briefing & Patient Case Review",
        description: "Reviewing the day's patient roster, aesthetic goals, medical histories, and customized treatment plans.",
        keyTopics: ["Patient chart analysis", "Treatment sequence planning", "Product selection rationale"]
      },
      {
        number: "02",
        title: "High-Impact Aesthetic Consultations in Action",
        description: "Observing real-time patient examinations, facial vector analysis, addressing patient anxieties, and consent dialogue.",
        keyTopics: ["Consultation psychology", "Over-treatment avoidance", "Patient expectation setting"]
      },
      {
        number: "03",
        title: "Live Chairside Master Injections (Midface & Lips)",
        description: "Direct observation of cannula glide, precise bolus delivery, and painless injection ergonomics.",
        keyTopics: ["Needle vs Cannula live decisions", "Lip sculpting artistry", "Minimizing patient discomfort"]
      },
      {
        number: "04",
        title: "Complex Case & Liquid Profiloplasty Observation",
        description: "Shadowing high-difficulty non-surgical cases including liquid rhinoplasty, tear troughs, and masseter contouring.",
        keyTopics: ["High-risk zone safety", "Avascular injection monitoring", "Immediate post-treatment icing & care"]
      },
      {
        number: "05",
        title: "Clinical Debrief, Q&A & Practice Scaling Insights",
        description: "Private discussion with Dr. Shumaila Khan to deconstruct every case, discuss business growth, and review key takeaways.",
        keyTopics: ["Interactive case debrief", "Practice scaling tips", "Hotline connection"]
      }
    ],
    syllabus: [
      "Full day chairside observership with Dr. Shumaila Khan",
      "Observation of 10-15+ real-world non-surgical aesthetic cases",
      "Live consultation, mapping, and injecting analysis",
      "Complication prevention and emergency preparedness",
      "Exclusive 1-on-1 debrief and clinical Q&A session"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Islamabad Campus", date: "May 28, 2026", venue: "IAMA Executive Suites, Sector F-7/2, Islamabad", seatsLeft: 2 },
      { city: "Lahore Campus", date: "June 05, 2026", venue: "IAMA Flagship Campus, DHA Phase 5, Lahore", seatsLeft: 3 },
      { city: "Peshawar Campus", date: "September 12, 2026", venue: "IAMA Regional Training Center, University Road, Peshawar", seatsLeft: 2 }
    ],
    faqs: [
      {
        question: "Is clinical shadowing hands-on or observational?",
        answer: "Shadowing is an intensive chairside observational immersion. It allows you to study high volumes of complex cases, patient consultations, and master injector ergonomics that cannot be captured in standard workshops."
      },
      {
        question: "How many observers are permitted per session?",
        answer: "To ensure patient comfort and an intimate learning environment, shadowing is strictly limited to 2 to 3 doctors per session."
      }
    ]
  },

  // 7. CONFERENCES & KEY NOTE SPEAKER EVENTS
  {
    id: "conferences-events",
    name: "Conferences & Key Note Speaker Events",
    subtitle: "Global Aesthetic Congresses, Live Injections on Stage & Scientific Symposia",
    category: "events",
    categoryLabel: "Scientific Symposia & Congresses",
    level: "All Levels",
    duration: "1 to 3 Days Scientific Congress",
    cpdCredits: "16 - 24 CPD Hours per Event",
    handsOnRatio: "Stage Live Demos & Interactive Panel Discussions",
    badge: "International",
    featured: true,
    pricePKR: "75,000 PKR",
    priceUSD: "$280 USD",
    prerequisites: "Open to all PM&DC Doctors, Dentists, Post-Graduates & International Physicians",
    certification: "UK CPD Accredited Certificate of Scientific Congress Attendance",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=900",
    concept: "World-class scientific conferences featuring live non-surgical injection demonstrations on stage, keynote lectures, and global panel discussions.",
    description: "IAMA conferences bring together leading international plastic surgeons, dermatologists, and aesthetic physicians for ground-breaking scientific updates. Attendees witness live high-definition non-surgical injection demos on large 4K screens, cadaveric anatomical dissections correlated with ultrasound, and expert panels debating the latest trends in regenerative medicine, exosomes, and biostimulators.",
    learningOutcomes: [
      "Witness live stage non-surgical injection demos by globally recognized master trainers",
      "Gain critical updates on the latest non-surgical biostimulators, polynucleotides, and exosome therapies",
      "Participate in live interactive Q&A panels on complication management and legal regulations",
      "Network with over 300+ practicing physicians, clinic directors, and industry leaders",
      "Access the scientific exhibition hall featuring cutting-edge laser and injectable manufacturers"
    ],
    injectPoints: [
      "Live Stage Demonstrations: Full face sculpting, non-surgical rhinoplasty, lip vectoring",
      "Ultrasound Correlation: Real-time Doppler visualization of facial vascular layers during live injections"
    ],
    modules: [
      {
        number: "01",
        title: "Keynote: Next-Gen Non-Surgical Facial Architecture",
        description: "Opening keynote by Dr. Shumaila Khan & Dr. Shumaila Khan on evolving facial vectors, multi-layer volumisation, and avoiding the overfilled face.",
        keyTopics: ["Facial vector trends", "Biostimulator integration", "Anatomical safety"]
      },
      {
        number: "02",
        title: "Live HD Injection Demonstration: Full-Face Sculpting",
        description: "Real-time 4K live broadcast of full-face non-surgical contouring with step-by-step narration and live audience Q&A.",
        keyTopics: ["Live cannula technique", "Simultaneous Doppler ultrasound", "Real-time commentary"]
      },
      {
        number: "03",
        title: "Scientific Symposia: Regenerative Aesthetics & Exosomes",
        description: "Deep dive into PDRN polynucleotides, autologous growth factors, and non-surgical skin bio-remodeling.",
        keyTopics: ["Polynucleotide matrix repair", "Exosome science", "Combination therapies"]
      },
      {
        number: "04",
        title: "Expert Panel: Complication Prevention & Medical Malpractice Defense",
        description: "Multidisciplinary panel debating emergency hyaluronidase protocols, ischemic salvage, and international regulatory trends.",
        keyTopics: ["Complication case studies", "Emergency readiness", "Legal consent protocols"]
      },
      {
        number: "05",
        title: "Gala Dinner, Awards Ceremony & Physician Networking",
        description: "Evening gala honoring outstanding contributions to aesthetic medicine education and peer networking.",
        keyTopics: ["Physician networking", "Industry awards", "Alumni celebration"]
      }
    ],
    syllabus: [
      "Keynote scientific lectures from international faculty",
      "Live non-surgical injection masterclasses on stage",
      "Ultrasound-guided anatomical demonstrations",
      "Complication management panel debate",
      "CPD verified attendance certificate & scientific exhibition access"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore (Annual Congress)", date: "August 14 - 15, 2026", venue: "Pearl Continental Grand Ballroom, Lahore", seatsLeft: 45 },
      { city: "Karachi (Spring Symposium)", date: "October 02 - 03, 2026", venue: "Mövenpick Convention Hall, Karachi", seatsLeft: 60 },
      { city: "Islamabad (National Congress)", date: "December 05 - 06, 2026", venue: "Serena Hotel Convention Centre, Islamabad", seatsLeft: 80 }
    ],
    faqs: [
      {
        question: "Can junior doctors or medical students attend the conference?",
        answer: "Yes, registered medical doctors, dentists, and post-graduate medical trainees are welcome to attend the scientific conference."
      },
      {
        question: "Are live injections performed on stage?",
        answer: "Yes, leading international master trainers perform live, 100% non-surgical injectable demonstrations on stage with high-definition multi-angle camera feeds."
      }
    ]
  },

  // 8. MODELS PROGRAM (PATIENT MODEL PORTAL)
  {
    id: "models-program",
    name: "IAMA Clinical Patient Model Program",
    subtitle: "Apply for 100% Non-Surgical Aesthetic Treatments at Subsidized Model Rates",
    category: "models",
    categoryLabel: "Clinical Model Program",
    level: "All Levels",
    duration: "Treatment Session (~1 to 2 Hours)",
    cpdCredits: "N/A (Patient Program)",
    handsOnRatio: "Supervised by Senior Consultant Aesthetic Physicians",
    badge: "Open for Patients",
    featured: true,
    pricePKR: "Subsidized Cost (Product-Only Rate)",
    priceUSD: "Product-Only Rate",
    prerequisites: "Ages 21+, Pre-screening consultation, No active contraindications",
    certification: "Complimentary Post-Treatment Follow-up & Aftercare Kit",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    concept: "Receive world-class, 100% non-surgical aesthetic enhancements performed by registered medical doctors under the direct 1:1 supervision of our senior master trainers.",
    description: "The IAMA Model Program allows pre-screened patient models to receive premium non-surgical cosmetic treatments — including Botox, Dermal Fillers, Russian Lips, Non-Surgical Nose Reshaping, Profhilo Skin Boosters, and Fractional Lasers — at a fraction of standard clinic fees. Every treatment is strictly non-surgical, utilizing genuine FDA/CE-approved products and supervised step-by-step by senior doctors.",
    learningOutcomes: [
      "Access premium non-surgical aesthetic treatments at subsidized product-only rates",
      "All treatments performed by licensed medical doctors (MBBS/BDS) under master trainer supervision",
      "Strict use of 100% authentic, FDA/CE certified international brands (Allergan Botox, Juvederm, Profhilo)",
      "Comprehensive pre-treatment medical consultation and individualized facial mapping",
      "Complimentary follow-up appointment and 24/7 post-procedure clinical support"
    ],
    injectPoints: [
      "Available Treatments: Upper Face Botox (Forehead, Glabella, Crow's Feet)",
      "Dermal Fillers: Lips, Cheek Contour, Chin, Jawline, Nasolabial folds",
      "Specialty Non-Surgical: Liquid Rhinoplasty, Profhilo Bio-remodeling, Scalp PRP, Fractional Laser"
    ],
    modules: [
      {
        number: "01",
        title: "Step 1: Online Application & Medical Pre-Screening",
        description: "Submit clear unedited facial photos and complete medical questionnaire to check suitability for upcoming training cohorts.",
        keyTopics: ["Online photo submission", "Medical history review", "Treatment zone selection"]
      },
      {
        number: "02",
        title: "Step 2: Date & City Selection",
        description: "Choose your preferred training date at our Lahore, Karachi, or Islamabad clinical campuses.",
        keyTopics: ["Campus selection", "Slot confirmation", "Subsidized fee payment"]
      },
      {
        number: "03",
        title: "Step 3: In-Person Consultation & Facial Vector Mapping",
        description: "On training day, master trainers assess your facial anatomy and map precise non-surgical injection points.",
        keyTopics: ["Anatomical assessment", "Consent and medical photography", "Product verification"]
      },
      {
        number: "04",
        title: "Step 4: Supervised Treatment by Registered Doctors",
        description: "Your treatment is administered with the highest sterile medical standards under continuous 1-on-1 mentor guidance.",
        keyTopics: ["Aseptic injection", "Painless technique & topical numbing", "Immediate post-care"]
      },
      {
        number: "05",
        title: "Step 5: Post-Treatment Care & 2-Week Follow-Up",
        description: "Receive your complimentary aftercare cream, aftercare guide, and free follow-up review.",
        keyTopics: ["Aftercare instructions", "2-week review", "Alumni patient access"]
      }
    ],
    syllabus: [
      "100% Non-surgical medical cosmetic procedures",
      "Strict supervision by senior aesthetic physicians & master trainers",
      "Authentic FDA & CE approved premium injectables only",
      "Subsidized product-only cost structure",
      "Free 2-week clinical review and aftercare"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore Campus", date: "Every Friday & Saturday", venue: "IAMA Flagship Campus, DHA Phase 5, Lahore", seatsLeft: 8 },
      { city: "Karachi Campus", date: "Monthly Training Weekends", venue: "IAMA Center of Excellence, Clifton, Karachi", seatsLeft: 6 },
      { city: "Islamabad Campus", date: "Monthly Training Weekends", venue: "IAMA Executive Suites, Sector F-7/2, Islamabad", seatsLeft: 6 }
    ],
    faqs: [
      {
        question: "Is it safe to be a training model?",
        answer: "Yes, highly safe! Treatments are performed exclusively by qualified, PM&DC-registered medical doctors under the constant direct 1-on-1 supervision of our senior master trainers."
      },
      {
        question: "What products are used?",
        answer: "We strictly use authentic, original FDA-approved and CE-marked international brands including Allergan Botox, Juvederm, Restylane, Teosyal, and IBSA Profhilo."
      },
      {
        question: "What does subsidized cost mean?",
        answer: "As a training model, you do not pay standard clinic consultation or physician procedure fees — you only cover the direct wholesale cost of the injectable products used."
      }
    ]
  },

  // 9. BOTOX & NEUROMODULATORS
  {
    id: "botox",
    name: "Masterclass in Botox & Neuromodulators",
    subtitle: "Complete Foundation to Advanced Upper & Lower Face Toxins",
    category: "injectables",
    categoryLabel: "Neuromodulator Therapy",
    level: "Intermediate",
    duration: "1 Full Intensive Day",
    cpdCredits: "12 CPD Hours",
    handsOnRatio: "1 Patient Injection / 1 Assist Minimum",
    badge: "High Demand",
    featured: true,
    pricePKR: "125,000 PKR",
    priceUSD: "$450 USD",
    prerequisites: "MBBS / BDS / Registered Medical Practitioner with valid PM&DC registration",
    certification: "UK CPD Accredited Certificate in Advanced Neuromodulator Injections",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
    concept: "Redefining facial vectors by targeted relaxation of expressive musculature. Relieve dynamic lines while maintaining soft, natural animations.",
    description: "Our world-renowned masterclass covers non-surgical reconstructive dilutions, micro-droplet techniques, safe anatomical boundaries, and the direct treatment of glabella lines, forehead creases, crow's feet, bunny lines, masseter hypertrophy (jaw slimming), neck platysmal bands (Nefertiti Lift), and gummy smiles.",
    learningOutcomes: [
      "Master the precise depth of injection for all upper, mid, and lower facial muscles",
      "Calculate dilution ratios and units per anatomical quadrant without product waste",
      "Identify high-risk anatomical danger zones to eliminate ptosis, diplopia, and asymmetric smiles",
      "Execute Nefertiti neck lift and masseter jawline contouring with confidence",
      "Manage unexpected side effects, touch-up protocols, and post-injection patient care"
    ],
    injectPoints: [
      "Glabella Complex: Corrugator supercilii & Procerus muscle",
      "Forehead: Frontalis muscle vectors & anti-spock techniques",
      "Lateral Canthal: Orbicularis oculi outer crow's feet fibers",
      "Lower Face: Masseter boundaries, DAO, and Mentalis peach-pit chin",
      "Perioral & Neck: Gummy smile levator muscles & Platysma bands"
    ],
    modules: [
      {
        number: "01",
        title: "Facial Functional Anatomy & Dynamic Physiology",
        description: "Deep dive into 3D facial musculature, dynamic vs static wrinkles, and gender-specific non-surgical injection points.",
        keyTopics: ["Facial vector biomechanics", "Muscle synergy and antagonism", "High-risk facial nerve branches"]
      },
      {
        number: "02",
        title: "Pharmacology, Reconstitution & Units Calculations",
        description: "Comprehensive review of Botulinum Toxin Type A brands (Botox, Dysport, Xeomin), saline reconstitution tables, and unit conversions.",
        keyTopics: ["Hyper-concentrated vs normal dilution", "Diffusion radii", "Bacteriostatic saline protocols"]
      },
      {
        number: "03",
        title: "Upper Face Injections (Forehead, Glabella, Canthal)",
        description: "Hands-on injection markers, avoidance of brow ptosis and eyelid dropping, tailored dosage for masculine vs feminine brow arches.",
        keyTopics: ["Forehead lines mapping", "Glabella 5-point injection", "Lateral brow elevation technique"]
      },
      {
        number: "04",
        title: "Advanced Lower Face & Off-Label Indications",
        description: "Masseter reduction for facial slimming and bruxism, DAO muscle release for downturned mouth corners, and the Nefertiti neck contour.",
        keyTopics: ["Masseter safety triangle", "Bunny lines injection", "Gummy smile correction", "Mentalis chin dimpling"]
      },
      {
        number: "05",
        title: "Supervised Live Patient Injections & Emergency Protocols",
        description: "1-on-1 supervised injection on live patient models provided by the institute. Real-time mentor guidance and troubleshooting.",
        keyTopics: ["Live model marking", "Aseptic injection technique", "Post-op instructions & follow-up"]
      }
    ],
    syllabus: [
      "Anatomy & physiology of dynamic facial wrinkles",
      "Botulinum Toxin Type A reconstitution, safety profiles & dosage",
      "Candidate evaluation, aesthetic mapping, photography protocols",
      "Supervised hands-on training on live screening patient candidates",
      "Complication diagnostics, management and clinical support"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "April 18, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 4 },
      { city: "Karachi", date: "April 25, 2026", venue: "IAMA Center of Excellence, Clifton Block 4", seatsLeft: 3 },
      { city: "Islamabad", date: "May 09, 2026", venue: "IAMA Executive Suites, F-7/2", seatsLeft: 5 }
    ],
    faqs: [
      {
        question: "Are live models provided by the institute?",
        answer: "Yes, IAMA provides pre-screened clinical models for all registered delegates to practice on under 1-on-1 supervision."
      },
      {
        question: "Is this masterclass recognized internationally?",
        answer: "Yes, our training courses are accredited by UK CPD, ISO 9001:2015 certified, and globally recognized."
      },
      {
        question: "Who is eligible to enroll?",
        answer: "Strictly limited to PM&DC registered doctors (MBBS, BDS, FCPS, Post-graduates) to ensure medical standard compliance."
      }
    ]
  },

  // 10. DERMAL FILLERS
  {
    id: "fillers",
    name: "Masterclass in Basic & Advanced Dermal Fillers",
    subtitle: "Non-Surgical Facial Volumisation, MD Codes™, Cannula vs Needle Artistry",
    category: "injectables",
    categoryLabel: "Facial Volumisation",
    level: "Advanced",
    duration: "2 Days Academic Residency",
    cpdCredits: "20 CPD Hours",
    handsOnRatio: "2 Live Case Studies with Mentor Co-injection",
    badge: "Most Popular",
    featured: true,
    pricePKR: "185,000 PKR",
    priceUSD: "$650 USD",
    prerequisites: "MBBS / BDS / Basic Aesthetic Training or Clinical Injecting Experience",
    certification: "UK CPD Accredited Certificate in Advanced Dermal Fillers & Cannula Mastery",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    concept: "Restoring age-associated skeletal resumptions, deep fat-pad atrophy, and custom lip volume adjustments through non-surgical injection.",
    description: "Step-by-step guidance utilizing needle vs. micro-cannula inputs. Train on the revolutionary MD Codes™ system focusing on the zygomatic-malar apex, piriform fossa, nasolabial folds, marionette lines, chin projection, and beautiful vermilion border restoration.",
    learningOutcomes: [
      "Master micro-cannula manipulation (25G and 27G) for safer, bruise-free pan-facial volumisation",
      "Understand Hyaluronic Acid rheology, G-prime stiffness, cohesivity, and tissue integration",
      "Confidently sculpt Russian lips, keyhole lip pout, and natural anatomical lip ratios (1:1.6)",
      "Reconstruct midface structural support, tear troughs, and jawline definition without surgery",
      "Protocolize Hyaluronidase emergency vascular occlusion management and salvage drills"
    ],
    injectPoints: [
      "Malar Apex: Deep supraperiosteal malar bolus (CK1, CK2, CK3)",
      "Lips: Cupid's bow, vermilion border, tubercle restoration & philtrum columns",
      "Nasolabial & Piriform: Subdermal linear retrograde threading and deep depot",
      "Chin & Jawline: Poginion bolus, pre-jowl sulcus filler, and mandibular angle definition"
    ],
    modules: [
      {
        number: "01",
        title: "HA Rheology, Science of Cross-Linking & Selection",
        description: "Understanding biphasic vs monophasic gels, G-prime, G-double prime, cohesivity, and selecting the optimal filler for each facial layer.",
        keyTopics: ["Product rheology comparison", "Longevity profiles", "Allergy & hypersensitivity tests"]
      },
      {
        number: "02",
        title: "Vascular Anatomy & Danger Zone Navigation",
        description: "3D pathway mapping of the Facial Artery, Angular Artery, Superior Labial Artery, and Infraorbital artery. Safety planes for blunt-tip cannula.",
        keyTopics: ["Vascular anatomy depth", "Cannula entry points", "Aspiration myths vs facts"]
      },
      {
        number: "03",
        title: "Mid-Face & Tear Trough Rejuvenation",
        description: "Restoring the zygomatic arch and sub-orbicularis oculi fat (SOOF) to lift the lower face naturally and erase under-eye fatigue.",
        keyTopics: ["Cheek projection vectors", "Tear trough delicate cannula injection", "Piriform fossa deep bolus"]
      },
      {
        number: "04",
        title: "Lip Augmentation & Perioral Rejuvenation",
        description: "Classic enhancement, Russian flat-lip technique, sharp vermilion definition, oral commissure lifting, and perioral smoker's lines eradication.",
        keyTopics: ["Lip anatomy & nerve blocks", "Linear retrograde threading", "Vertical tenting method"]
      },
      {
        number: "05",
        title: "Complication Management & Hyaluronidase Protocol",
        description: "Recognizing early ischemia, mottled blanching, delayed nodules, and running live emergency simulation drills for vascular occlusion dissolution.",
        keyTopics: ["High-dose pulsed hyaluronidase", "Hyperbaric oxygen protocols", "Patient consent & litigation defense"]
      }
    ],
    syllabus: [
      "Rheology of Hyaluronic Acid (G-prime, cohesivity, elasticity)",
      "Anatomical danger zones: avoiding facial artery and angular artery",
      "Nerve blocks, local anesthetic infiltration, patient comfort",
      "Hands-on linear threading, depot, bolus, fanning techniques",
      "Vascular occlusion emergencies: Hyaluronidase dilution protocol"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "April 19 - 20, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 2 },
      { city: "Karachi", date: "April 26 - 27, 2026", venue: "IAMA Center of Excellence, Clifton Block 4", seatsLeft: 4 },
      { city: "Islamabad", date: "May 10 - 11, 2026", venue: "IAMA Executive Suites, F-7/2", seatsLeft: 3 }
    ],
    faqs: [
      {
        question: "Is prior injecting experience needed?",
        answer: "Basic knowledge of facial anatomy is recommended. We provide foundational theory and gradual progression into hands-on injecting."
      },
      {
        question: "Do delegates inject real patients?",
        answer: "Yes, every delegate performs hands-on injections on pre-screened patient models under direct faculty guidance."
      }
    ]
  },

  // 11. LASERS
  {
    id: "lasers",
    name: "Clinical Lasers & Energy-Based Devices (EBDs)",
    subtitle: "Physics, Safety, Fractional CO2, Q-Switched & IPL Clinical Mastery",
    category: "lasers",
    categoryLabel: "Dermatological Tech",
    level: "Intermediate",
    duration: "1 Intensive Day",
    cpdCredits: "10 CPD Hours",
    handsOnRatio: "Equipment Operational Drills & Patient Setup",
    badge: "Tech Focus",
    featured: true,
    pricePKR: "110,000 PKR",
    priceUSD: "$400 USD",
    prerequisites: "MBBS / BDS / MD registered practitioner",
    certification: "UK CPD Accredited Certificate in Clinical Laser & Energy Devices",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900",
    concept: "Harnessing physics of light, pulse-widths, and thermal relaxation times to target selective dermatological pigments safely.",
    description: "Understand laser safety, non-surgical skin resurfacing, and pigmentation therapeutics. Learn to program laser device parameters for fractional Carbon dioxide (CO2) lasers, Q-Switched Nd:YAG lasers, Pico lasers, and Intense Pulsed Light (IPL) therapies on South Asian skin (Fitzpatrick Types III - V).",
    learningOutcomes: [
      "Calibrate spot sizes, fluence (J/cm2), and pulse duration for ethnic skin types to prevent PIH",
      "Operate Fractional CO2 laser for deep acne scar revision, non-surgical skin tightening, and scar reduction",
      "Treat melasma, dermal tattoos, and lentigines with Q-Switched Nd:YAG and Pico systems",
      "Master RF Microneedling (Morpheus8 / Secret RF) and HIFU protocols for non-surgical face lifting",
      "Implement international clinic laser safety officer standards and eye protection protocols"
    ],
    injectPoints: [
      "Skin Surface: Fitzpatrick skin classification diagnostic and test spots",
      "Vascular: Pulse-widths for superficial angiomas and rosacea erythema",
      "Resurfacing: Thermal ablation depths for atrophic acne scarring",
      "Hyperpigmentation: Q-Switch frequencies for melasma and post-inflammatory pigmentation"
    ],
    modules: [
      {
        number: "01",
        title: "Laser Physics & Selective Photothermolysis",
        description: "Chromophores (Water, Hemoglobin, Melanin), wavelength absorption spectrums, thermal relaxation time (TRT), and laser-tissue interactions.",
        keyTopics: ["Wavelength selection", "Fluence and spot size dynamics", "Pulse-width management"]
      },
      {
        number: "02",
        title: "Ablative & Fractional Laser Resurfacing (CO2 & Erbium)",
        description: "Deep non-surgical skin remodeling, acne scar revision, periorbital rejuvenation, stretch marks, and managing post-treatment downtime.",
        keyTopics: ["Fractional ablation density", "Depth penetration parameters", "Wound healing regimens"]
      },
      {
        number: "03",
        title: "Q-Switched Nd:YAG & Pico Laser Mastery",
        description: "Melasma treatment protocols, carbon peel Hollywood facial, epidermal vs dermal pigment removal, and tattoo clearance.",
        keyTopics: ["Melasma safe toning", "Carbon laser peel technique", "Preventing post-inflammatory hyperpigmentation"]
      },
      {
        number: "04",
        title: "HIFU & Fractional RF Microneedling",
        description: "High-Intensity Focused Ultrasound for non-surgical SMAS layer contraction and Radiofrequency Microneedling for collagen induction.",
        keyTopics: ["Focal depth selection (1.5mm, 3.0mm, 4.5mm)", "Energy delivery comfort", "Combination protocols"]
      },
      {
        number: "05",
        title: "Hands-on Clinical Machine Operation & Safety Drills",
        description: "Delegates practice parameter settings and test spots on clinical devices with real-time patient interactions.",
        keyTopics: ["Test patch administration", "Post-laser cooling & barrier repair", "Safety protocols"]
      }
    ],
    syllabus: [
      "Laser physics and selective photothermolysis",
      "Vascular, pigmentary, and fractional therapeutic protocols",
      "Post-procedure healing profiles, sunscreens, hyperpigmentation",
      "Hands-on device operational drills on cosmetic clinical devices",
      "Laser clinical safety, eye protections, laser plume evacuation"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "April 21, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 5 },
      { city: "Karachi", date: "April 28, 2026", venue: "IAMA Center of Excellence, Clifton Block 4", seatsLeft: 3 },
      { city: "Islamabad", date: "May 12, 2026", venue: "IAMA Executive Suites, F-7/2", seatsLeft: 6 }
    ],
    faqs: [
      {
        question: "Is laser training suitable for doctors starting a new clinic?",
        answer: "Absolutely. We provide machine purchase guidance, vendor evaluation criteria, and practical hands-on operating experience."
      }
    ]
  },

  // 12. NON-SURGICAL LIQUID RHINOPLASTY
  {
    id: "rhinoplasty",
    name: "Liquid Rhinoplasty & Profiloplasty Masterclass",
    subtitle: "100% Non-Surgical 3D Nasal Architecture, Dorsal Camouflage & Tip Rotation",
    category: "injectables",
    categoryLabel: "Advanced Non-Surgical Injectables",
    level: "Masterclass",
    duration: "1 Day Advanced Masterclass",
    cpdCredits: "12 CPD Hours",
    handsOnRatio: "Senior Candidates Only (Pre-requisite: Basic Filler)",
    badge: "Ultra Premium",
    featured: true,
    pricePKR: "160,000 PKR",
    priceUSD: "$580 USD",
    prerequisites: "Previous Dermal Filler Certification or 1+ Year Injecting Experience",
    certification: "UK CPD Accredited Certificate in Non-Surgical Rhinoplasty & Profiloplasty",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=900",
    concept: "Mastering three-dimensional nasal angles, hump camouflage, and jawline-profile harmony completely without surgery or downtime.",
    description: "Liquid Rhinoplasty is an advanced aesthetic skill. This comprehensive masterclass teaches you how to lift the nasal tip, mask dorsal humps, and construct facial profile harmony using High G-prime dermal fillers, under rigid safety protocols to prevent vascular complications.",
    learningOutcomes: [
      "Analyze the nasofrontal and nasolabial angles for optimal non-surgical ethnic rhinoplasty results",
      "Inject along the strict midline avascular plane to prevent dorsal arterial compression",
      "Perform anterior nasal spine bolus injections to lift and rotate the nasal tip safely",
      "Perform micro-droplet dorsal hump camouflage without widening the nasal bridge",
      "Execute profile balancing (Profiloplasty) integrating forehead, nose, lips, and chin"
    ],
    injectPoints: [
      "Radix: Deep periosteal micro-bolus on the midline bone",
      "Dorsum: Linear retrograde micro-aliquots in the sub-SMAS avascular plane",
      "Nasal Tip: Interdomal cartilage structural support",
      "Anterior Nasal Spine: Deep pre-periosteal bolus for tip rotation",
      "Columella: Micro-cannula vertical strut reinforcement"
    ],
    modules: [
      {
        number: "01",
        title: "Nasal 3D Anatomy & Deep Avascular Planes",
        description: "Cartilage frameworks, dorsal arteries, lateral nasal arteries, and maintaining strict injection in the supraperichondrial / supraperiosteal plane.",
        keyTopics: ["Midline avascular safety zone", "Arterial variations", "Pre-op photographic analysis"]
      },
      {
        number: "02",
        title: "Nasal Angles & Aesthetic Ratios",
        description: "Measuring the Goode ratio, nasofacial angle (30-40 deg), and nasolabial angle (90-95 deg in men, 95-105 deg in women).",
        keyTopics: ["Nasal proportion assessment", "Camouflage candidate triage", "High G-prime filler selection"]
      },
      {
        number: "03",
        title: "Dorsal Hump Camouflage & Bridge Straightening",
        description: "Step-by-step techniques to create a sleek, straight dorsal line without creating a wide or heavy appearance.",
        keyTopics: ["Radix elevation", "Supratip dip filling", "Aspiration and low-pressure injection"]
      },
      {
        number: "04",
        title: "Tip Lift, Projection & Columella Support",
        description: "Rotating a droopy nasal tip with anterior nasal spine depot injections and subtle inter-alar definition.",
        keyTopics: ["Depressor septi nasi relaxation", "Columellar strut technique", "Tip definition artistry"]
      },
      {
        number: "05",
        title: "Profiloplasty Harmony & Emergency Reversal Drills",
        description: "Aligning the nose with the chin and lips for a stunning profile. Rapid hyaluronidase reversal protocols in high-risk zones.",
        keyTopics: ["Chin-nose balance", "Immediate blanching response", "Emergency salvage protocol"]
      }
    ],
    syllabus: [
      "3D internal and external vascular anatomy of the nose",
      "Aesthetic proportions: Nasofrontal & Nasolabial angles",
      "Safe planes: Supraperichondrial & Supraperiosteal injection",
      "Cannula vs Needle approaches in the nasal dorsum & tip",
      "Emergency protocols: Managing vascular compromise & skin necrosis risks"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "April 22, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 2 },
      { city: "Karachi", date: "April 29, 2026", venue: "IAMA Center of Excellence, Clifton Block 4", seatsLeft: 3 }
    ],
    faqs: [
      {
        question: "Is this course open to beginners?",
        answer: "No. Because the nose has delicate vascular anatomy, this course is strictly for doctors who have completed basic dermal filler training or possess injecting experience."
      }
    ]
  },

  // 13. MASTERCLASS IN THREAD-LIFT (Flyer Program)
  {
    id: "thread-lift-masterclass",
    name: "Masterclass in Thread-Lift",
    subtitle: "Learn the Art & Science of Thread Lifting from the Best in the Field",
    category: "threads",
    categoryLabel: "Non-Surgical Thread Lifting",
    level: "Masterclass",
    duration: "1 Intensive Full Day (09:00 AM - 06:00 PM)",
    cpdCredits: "14 UK CPD Certified Hours",
    handsOnRatio: "1:1 Live Patient Placement (Barbed Cog & Mono Included)",
    badge: "Islamabad Oct 03",
    featured: true,
    pricePKR: "175,000 PKR",
    priceUSD: "$620 USD",
    prerequisites: "PM&DC / BM&DC Registered Doctors & Dentists (MBBS, BDS, FCPS, Post-Graduates)",
    certification: "UK CPD Accredited Certificate in Masterclass Thread Lifting & Facial Vector Repositioning",
    image: "https://images.unsplash.com/photo-1512290900672-1f4a4752c00d?auto=format&fit=crop&q=80&w=900",
    concept: "Master the art and science of non-surgical thread lifting, facial anatomy, vector dynamics, and live placement of barbed cog, mono, and Aptos threads.",
    description: "Learn the art and science of non-surgical thread lifting under Academic Director and Lead Master Trainer Dr. Shumaila Khan. This CPD-certified masterclass delivers in-depth facial anatomy, safe subcutaneous gliding, tension vectors, and complication management. Hands-on placement of Barbed Cog Threads and Mono Threads is included on live models, with Aptos & Double Needle threads available upon request.",
    learningOutcomes: [
      "Master 3D facial anatomy with direct reference to thread lifting and danger zones",
      "Understand all types of threads (Mono, Screw, Barbed Cog, Molded, Aptos, Double Needle) and their clinical indications",
      "Learn expert tips on the best injection and insertion techniques for different thread types",
      "Observe cautions, precautions, and depth control while inserting threads to prevent dimpling and nerve irritation",
      "Perform hands-on live patient placement of Barbed Cog Threads and Mono Threads under 1:1 faculty guidance",
      "Access specialized hands-on training for Aptos or Double Needle threads upon request (only thread cost charged)"
    ],
    injectPoints: [
      "Midface Vector: Zygomatic temporal anchor to nasolabial fold elevation",
      "Mandibular Vector: Pre-auricular anchor to marionette & jowl line contouring",
      "Upper Face / Brow: Temporal hairline anchor for Fox-Eye lateral brow suspension",
      "Submental & Neck: Double chin tightening basket-weave vectors and mono thread grid"
    ],
    modules: [
      {
        number: "01",
        title: "Facial Anatomy with Reference to Thread Lifting",
        description: "3D mapping of the superficial musculoaponeurotic system (SMAS), deep temporal fascia, facial nerve branches, and avascular subcutaneous gliding planes.",
        keyTopics: ["SMAS & subcutaneous anatomy", "Temporal fixation anchor points", "Facial nerve danger zones"]
      },
      {
        number: "02",
        title: "Types of Threads & Their Clinical Applications",
        description: "Comprehensive classification of Polydioxanone (PDO), PCL, and PLLA threads. Tensile strengths, degradation curves, and choosing between Mono, Screw, and Barbed Cogs.",
        keyTopics: ["Barbed Cog vs Mono threads", "Molding cogs vs Cut cogs", "Aptos & Double Needle thread mechanisms"]
      },
      {
        number: "03",
        title: "Tips on Best Techniques & Vector Calibration",
        description: "Mastering entry points, blunt-tip L-cannula and W-cannula manipulation, optimal entry angles, and tension vector anchoring for midface and jawline.",
        keyTopics: ["Vector direction planning", "Cannula glide dynamics", "Dual-vector jowl elevation"]
      },
      {
        number: "04",
        title: "Cautions, Precautions & Complication Avoidance",
        description: "Preventing superficial dimpling, puckering, thread migration, extrusion, infection control, and sterile field protocol.",
        keyTopics: ["Avoiding dermal puckering", "Thread trimming protocols", "Post-op care & analgesia guidelines"]
      },
      {
        number: "05",
        title: "Supervised Hands-on Live Patient Procedures",
        description: "Every candidate executes supervised live placement of Barbed Cog and Mono threads on screened patient models, with Aptos/Double Needle on request.",
        keyTopics: ["1:1 supervised patient execution", "Mono thread mesh for collagen", "Barbed Cog locking & tensioning"]
      }
    ],
    syllabus: [
      "Facial Anatomy with reference to thread lifting and deep SMAS vectors",
      "Types of Threads & Their Applications (Mono, Cog, Barb, Aptos, Double Needle)",
      "Tips on the best techniques for different types of threads",
      "Cautions and precautions while inserting threads",
      "Hands-on live model placement of Barbed Cog Threads & Mono Threads (Included)",
      "Hands-on training for Aptos or Double Needle Threads (Available on request)"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Islamabad", date: "October 03, 2026", venue: "IAMA Executive Suites, Sector F-7/2, Islamabad", seatsLeft: 4 },
      { city: "Lahore", date: "October 17, 2026", venue: "IAMA Flagship Campus, DHA Phase 5, Lahore", seatsLeft: 3 },
      { city: "Karachi", date: "October 24, 2026", venue: "IAMA Center of Excellence, Clifton Block 4, Karachi", seatsLeft: 5 }
    ],
    faqs: [
      {
        question: "Which threads are included in the hands-on session?",
        answer: "Hands-on training for the placement of Barbed Cog Threads and Mono Threads is fully included as part of the masterclass. Hands-on training for Aptos or Double Needle threads is also available on request (only the material cost of the thread will be charged)."
      },
      {
        question: "Who are the master trainers for this program?",
        answer: "This masterclass is conducted under the direct clinical leadership and mentorship of Dr. Shumaila Khan (Consultant Dermatologist & Academic Director of IAMA Institute)."
      },
      {
        question: "How can I book my seat for the Islamabad batch on October 3rd?",
        answer: "You can book directly by calling 0309 5555 040, reaching out via Instagram @aama.institute, or submitting your online PM&DC registration on this portal."
      }
    ]
  },

  // 14. BOARD FELLOWSHIP (FAM)
  {
    id: "fellowship",
    name: "Board Fellowship in Clinical Aesthetic Medicine (FAM)",
    subtitle: "Complete 4-Module Comprehensive Residency & Clinical Fellowship (100% Non-Surgical)",
    category: "fellowship",
    categoryLabel: "Board Fellowship",
    level: "Fellowship",
    duration: "6 Months Hybrid (5 Days Intensive Hands-on + Online Modules)",
    cpdCredits: "60 CPD Hours",
    handsOnRatio: "Over 10+ Supervised Patient Procedures",
    badge: "Flagship Fellowship",
    featured: true,
    pricePKR: "395,000 PKR",
    priceUSD: "$1,450 USD",
    prerequisites: "MBBS / BDS / Post-graduate Medical Degree with PM&DC Registration",
    certification: "UK CPD Board Fellowship Diploma in Clinical Aesthetic Medicine (FAM)",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
    concept: "The ultimate benchmark credential in aesthetic medicine designed to transform practicing medical doctors into independent, world-class clinic owners.",
    description: "Our comprehensive flagship Fellowship in Aesthetic Medicine (FAM) combines neurotoxins, advanced dermal fillers, medical lasers, chemical peels, platelet-rich plasma (PRP), microneedling, skin boosters (Profhilo, Sunekos), and clinical practice management into a prestigious 6-month credential.",
    learningOutcomes: [
      "Master the complete spectrum of non-surgical medical aesthetics from head to neck",
      "Perform over 10+ fully supervised patient cases across Botox, Fillers, Lasers, and Skin Boosters",
      "Gain clinic launch blueprint: malpractice compliance, pricing strategy, vendor discounts, and digital marketing",
      "Receive lifelong alumni access, quarterly clinical updates, and mentorship hotline",
      "Earn the prestigious Fellowship Diploma (FAM) recognized internationally"
    ],
    injectPoints: [
      "Upper Face: Forehead, Glabella, Brow Lift, Crow's Feet, Bunny Lines",
      "Mid Face: Cheeks, Tear Troughs, Temples, Piriform Fossa, Nasolabial",
      "Lower Face: Russian Lips, Chin, Jawline, Masseter, Marionette, DAO",
      "Skin & Hair: Scalp PRP, Vampire facial, Mesotherapy, Profhilo Bio-remodeling"
    ],
    modules: [
      {
        number: "01",
        title: "Module 1: Facial Anatomy, Botulinum Toxins & Upper Face Artistry",
        description: "Comprehensive foundational and advanced neurotoxins, dynamic muscle mapping, dilutions, and hands-on injections.",
        keyTopics: ["3D Anatomy & Physiology", "Botox Reconstitution", "Upper & Lower face toxins"]
      },
      {
        number: "02",
        title: "Module 2: Advanced Dermal Fillers, Cannula Mastery & MD Codes",
        description: "Full facial volumisation, cheek contouring, lip sculpting, chin elongation, and vascular safety protocols.",
        keyTopics: ["Cannula mechanics", "Lip augmentation", "Emergency hyaluronidase protocols"]
      },
      {
        number: "03",
        title: "Module 3: Medical Lasers, Energy Devices & Chemical Resurfacing",
        description: "Fractional CO2 lasers, Q-Switched pigmentation removal, IPL, TCA cross, and deep medical peels.",
        keyTopics: ["Laser physics", "Treating South Asian skin types", "Scar revision protocols"]
      },
      {
        number: "04",
        title: "Module 4: Skin Boosters (Profhilo), PRP & Trichology",
        description: "Bio-remodeling with high-concentration HA, Platelet-Rich Plasma preparation, scalp rejuvenation, and microneedling.",
        keyTopics: ["BAP technique for Profhilo", "Centrifuge protocols for PRP", "Alopecia therapies"]
      },
      {
        number: "05",
        title: "Module 5: Clinical Residency, Patient Portfolio & Final Examination",
        description: "Extensive hands-on clinical residency with real patients, clinical OSCE examination, and formal convocation ceremony.",
        keyTopics: ["Independent patient injection", "OSCE practical exam", "Clinic business setup masterclass"]
      }
    ],
    syllabus: [
      "Full Curriculum covering Modules 1 through 5",
      "10+ Live Patient Clinical Cases",
      "Business & Clinic Setup Mastery Session",
      "Digital Patient Record Templates & Consent Legalities",
      "Final OSCE Assessment & Convocation"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "Batch 28: May 15 - 19, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 5 },
      { city: "Karachi", date: "Batch 29: June 12 - 16, 2026", venue: "IAMA Center of Excellence, Clifton", seatsLeft: 4 },
      { city: "Islamabad", date: "Batch 30: July 10 - 14, 2026", venue: "IAMA Executive Suites, F-7/2", seatsLeft: 6 }
    ],
    faqs: [
      {
        question: "Can I pay the fellowship fee in installments?",
        answer: "Yes, we offer flexible 2-part and 3-part installment plans for registered medical practitioners."
      },
      {
        question: "Is clinical mentorship provided after course completion?",
        answer: "Yes, all Fellowship alumni receive lifelong membership to the IAMA Private Physicians Group for case consultations, emergency help, and master trainer advice."
      }
    ]
  },

  // 15. PRP & SKIN BOOSTERS
  {
    id: "prp-skin-boosters",
    name: "Masterclass in PRP, Mesotherapy & Skin Boosters (Profhilo)",
    subtitle: "Bio-Remodeling (BAP Technique), Polynucleotides & Hair Restoration",
    category: "skin",
    categoryLabel: "Skin & Regenerative Aesthetics",
    level: "Beginner",
    duration: "1 Full Day Intensive",
    cpdCredits: "10 CPD Hours",
    handsOnRatio: "2 Live Models (Facial Bio-remodeling & Scalp PRP)",
    badge: "High ROI",
    featured: false,
    pricePKR: "95,000 PKR",
    priceUSD: "$340 USD",
    prerequisites: "MBBS / BDS / Medical Trainee with PM&DC Registration",
    certification: "UK CPD Accredited Certificate in Regenerative Aesthetics & Skin Boosters",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    concept: "Cellular rejuvenation using autologous growth factors and high-molecular weight hyaluronic acid to stimulate neo-elastin and dermal remodeling.",
    description: "Learn the scientific protocols of Platelet-Rich Plasma (PRP) separation, centrifugation speeds, activation buffers, hair restoration micro-injections, the 5-point BAP (Bio Aesthetic Points) technique for Profhilo, Sunekos amino-acid matrix therapy, and polynucleotides for under-eye brightening.",
    learningOutcomes: [
      "Master double-spin centrifuge protocols to achieve optimal platelet concentration (>1,000,000/uL)",
      "Perform the 5-point BAP technique for Profhilo face and neck bio-remodeling without pain or bruising",
      "Implement clinical scalp mapping for androgenetic alopecia and female pattern hair loss",
      "Apply polynucleotides (PDRN) for delicate periorbital dark circles and crepiness",
      "Integrate mesotherapy micro-injections for melasma, skin radiance, and acne scars"
    ],
    injectPoints: [
      "Face: 5 Bio Aesthetic Points (BAP) per side (Zygomatic, Nasal base, Tragus, Chin, Mandibular)",
      "Neck: 10 BAP points for horizontal necklace bands and skin laxity",
      "Scalp: Subdermal micro-papules across the frontoparietal thinning zones",
      "Periorbital: Intradermal polynucleotide blebs for under-eye circles"
    ],
    modules: [
      {
        number: "01",
        title: "Platelet Biology & Autologous Growth Factors",
        description: "Understanding PDGF, VEGF, TGF-beta, EGF growth factors, anticoagulant selection (ACD-A vs Sodium Citrate), and centrifugation physics.",
        keyTopics: ["Platelet concentration science", "Single vs double spin", "Activation triggers"]
      },
      {
        number: "02",
        title: "Profhilo & Skin Booster Bio-Remodeling",
        description: "Thermally stabilized hybrid complexes (H-HA and L-HA), NAHYCO technology, tissue diffusion dynamics, and the BAP 5-point injection method.",
        keyTopics: ["BAP technique markers", "Deep dermal bolus depth", "Profhilo Body and Neck"]
      },
      {
        number: "03",
        title: "Clinical Trichology & Scalp Restoration",
        description: "Evaluating Norwood & Ludwig scale hair loss, scalp micro-injections, combining PRP with Minoxidil, Finasteride, and Exosomes.",
        keyTopics: ["Scalp ring block anesthesia", "Injection depth in galeal layer", "Treatment frequency protocols"]
      },
      {
        number: "04",
        title: "Polynucleotides & Mesotherapy Cocktails",
        description: "Fish DNA derived PDRN for cellular repair, glutathione & vitamin C cocktails for hyperpigmentation, and lipolytic mesotherapy.",
        keyTopics: ["Polynucleotide matrix repair", "Micro-needling delivery systems", "Meso-gun vs manual syringe"]
      },
      {
        number: "05",
        title: "Supervised Patient Injections & Practical Drill",
        description: "Hands-on blood draw, centrifugation, sterile preparation, and live injections on patient models.",
        keyTopics: ["Sterile centrifuge operation", "Patient comfort management", "Post-care protocols"]
      }
    ],
    syllabus: [
      "Centrifugation science & platelet biology",
      "5-Point BAP technique for Profhilo (Face & Neck)",
      "Scalp PRP preparation and painless injection protocols",
      "Polynucleotides & Mesotherapy formulations",
      "Supervised patient hands-on practical session"
    ],
    mentors: [
      { name: "Dr. Shumaila Khan", title: "Academic Director & Consultant Dermatologist", image: drShumailaImg }
    ],
    upcomingDates: [
      { city: "Lahore", date: "May 08, 2026", venue: "IAMA Flagship Campus, DHA Phase 5", seatsLeft: 6 },
      { city: "Karachi", date: "May 22, 2026", venue: "IAMA Center of Excellence, Clifton", seatsLeft: 4 }
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes! PRP and skin boosters have a very high safety profile and serve as an ideal entry into aesthetic medicine for MBBS/BDS doctors."
      }
    ]
  }
];

export const FACULTY_DATA = [
  {
    id: "dr-shumaila-khan",
    name: "Dr. Shumaila Khan",
    title: "Founder & Academic Director",
    qualifications: "MBBS, FCPS (Dermatology), Board Certified Master Aesthetic Trainer, Member IACD",
    experience: "15+ Years Clinical Leadership",
    bio: "Dr. Shumaila Khan is the Founder and Academic Director of IAMA Institute. A distinguished consultant dermatologist and master aesthetic physician recognized across Pakistan for advanced clinical dermatology, laser technologies, and non-surgical aesthetic transformations, Dr. Shumaila personally oversees every curriculum, ensuring all PM&DC registered doctors receive rigorous 1:1 live patient hands-on mentorship, evidence-based facial mapping, and zero-compromise complication prevention protocols.",
    specialties: [
      "Advanced Facial Contouring & Vector Architecture",
      "Neuromodulator & Dermal Filler Artistry",
      "Clinical Aesthetic Lasers & Energy-Based Devices",
      "Vascular Complication Prevention & Salvage",
      "Ethnic Skin & Pigmentary Therapeutics"
    ],
    image: drShumailaImg,
    instagram: "https://www.instagram.com/dr.shumailakhan/",
    quote: "True aesthetic excellence is grounded in deep anatomical precision, conservative artistry, and uncompromising patient safety."
  },
  {
    id: "dr-asher-ahmed-mashhood",
    name: "Prof. Brig(R) Asher Ahmed Mashhood",
    title: "Co-Founder & Senior Consultant Dermatologist",
    qualifications: "MBBS, FCPS (Dermatology), Professor, Supervisor & Examiner",
    experience: "30+ Years Dermatology & Laser Leadership",
    bio: "Prof. Brig(R) Asher Ahmed Mashhood is the Co-Founder of IAMA Institute and a luminary in Pakistan's dermatology landscape. With over 30 years in dermatology as a Professor, supervisor, and examiner, his impact on medical aesthetics and laser surgery is immense. Renowned for infusing cutting-edge technology and ethical clinical governance, he co-founded IAMA Institute to lead gold-standard 1:1 aesthetic training across Pakistan.",
    specialties: [
      "Advanced Clinical Dermatology & Dermatopathology",
      "Professor, Supervisor & Post-Graduate Examiner",
      "Pioneer Laser Surgery & Aesthetic Technologies",
      "Clinical Governance & Standardized Medical Protocol",
      "Executive Physician Mentorship & Ethics"
    ],
    image: drAsherImg,
    instagram: "https://www.instagram.com/drashersaesthetics/",
    quote: "Through our expertise, we sculpt more than appearances; we shape confidence and joy, empowering you to embrace life to the fullest."
  },
  {
    id: "dr-aisha-zubair",
    name: "Dr. Aisha Zubair",
    title: "Senior Aesthetic Physician & Master Trainer",
    qualifications: "MBBS, Certified Master Aesthetic Trainer, Founder COSMETIXE",
    experience: "12+ Years Clinical Aesthetics & Injectables",
    bio: "Dr. Aisha Zubair is a celebrated Aesthetic Physician, Master Trainer, and Founder of COSMETIXE (Safari Hospital, Bahria Town Rawalpindi). Celebrated for advanced lip augmentation, vector thread lifts, tear-trough rejuvenation, and facial contouring, she leads hands-on physician masterclasses in precision clinical artistry and patient safety.",
    specialties: [
      "Advanced Lip Augmentation & Perioral Aesthetics",
      "Vector Thread Lifts & Non-Surgical Rhytidectomy",
      "Under-Eye Rejuvenation & Tear Trough Fillers",
      "Non-Surgical Rhinoplasty & Facial Harmonization",
      "Complication Prevention & Clinical Mentorship"
    ],
    image: drAishaImg,
    instagram: "https://www.instagram.com/draishazubair/",
    quote: "True beauty is found in balance and individuality; we train doctors to enhance natural harmony through anatomical precision and patient-first ethics."
  }
];

export const SCHEDULE_DATA = [
  {
    id: "sch-01",
    courseId: "botox",
    courseName: "Masterclass in Botox (Basic to Advanced)",
    city: "Lahore",
    date: "April 18, 2026",
    timing: "09:00 AM - 06:00 PM",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 12,
    seatsRemaining: 4,
    status: "Filling Fast",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-02",
    courseId: "fillers",
    courseName: "Masterclass in Basic & Advanced Dermal Fillers",
    city: "Lahore",
    date: "April 19 - 20, 2026",
    timing: "09:00 AM - 06:00 PM (2 Days)",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 10,
    seatsRemaining: 2,
    status: "Almost Full",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-03",
    courseId: "lasers",
    courseName: "Clinical Lasers & Energy-Based Devices",
    city: "Lahore",
    date: "April 21, 2026",
    timing: "09:30 AM - 05:30 PM",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 12,
    seatsRemaining: 5,
    status: "Open",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-04",
    courseId: "facial-sculpting",
    courseName: "Facial Sculpting Masterclass (Full Face Contouring)",
    city: "Lahore",
    date: "April 26 - 27, 2026",
    timing: "09:00 AM - 06:00 PM (2 Days)",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 8,
    seatsRemaining: 3,
    status: "Almost Full",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-05",
    courseId: "rhinoplasty",
    courseName: "Liquid Rhinoplasty & Profiloplasty Masterclass",
    city: "Lahore",
    date: "April 22, 2026",
    timing: "10:00 AM - 05:00 PM",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 8,
    seatsRemaining: 2,
    status: "Almost Full",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-06",
    courseId: "botox",
    courseName: "Masterclass in Botox (Basic to Advanced)",
    city: "Karachi",
    date: "April 25, 2026",
    timing: "09:00 AM - 06:00 PM",
    venue: "IAMA Center of Excellence, Block 4, Clifton, Karachi",
    seatsTotal: 12,
    seatsRemaining: 3,
    status: "Filling Fast",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-07",
    courseId: "fillers",
    courseName: "Masterclass in Basic & Advanced Dermal Fillers",
    city: "Karachi",
    date: "April 26 - 27, 2026",
    timing: "09:00 AM - 06:00 PM (2 Days)",
    venue: "IAMA Center of Excellence, Block 4, Clifton, Karachi",
    seatsTotal: 10,
    seatsRemaining: 4,
    status: "Open",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-08",
    courseId: "fellowship",
    courseName: "Board Fellowship in Clinical Aesthetic Medicine (FAM)",
    city: "Lahore",
    date: "May 15 - 19, 2026 (Batch 28)",
    timing: "09:00 AM - 06:00 PM (5 Days Residency)",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 14,
    seatsRemaining: 5,
    status: "Open for Applications",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-09",
    courseId: "facial-sculpting",
    courseName: "Facial Sculpting Masterclass (Full Face Contouring)",
    city: "Islamabad",
    date: "June 20 - 21, 2026",
    timing: "09:00 AM - 05:30 PM",
    venue: "IAMA Executive Suites, Sector F-7/2, Islamabad",
    seatsTotal: 8,
    seatsRemaining: 3,
    status: "Open",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-10",
    courseId: "lasers",
    courseName: "Clinical Lasers & Energy-Based Devices",
    city: "Lahore",
    date: "July 18, 2026",
    timing: "09:00 AM - 05:30 PM",
    venue: "IAMA Flagship Campus, Sector H, Phase 5 DHA, Lahore",
    seatsTotal: 10,
    seatsRemaining: 4,
    status: "Open",
    leadTrainer: "Dr. Shumaila Khan"
  },
  {
    id: "sch-11",
    courseId: "botox",
    courseName: "Masterclass in Botox (Basic to Advanced)",
    city: "Islamabad",
    date: "May 09, 2026",
    timing: "09:00 AM - 06:00 PM",
    venue: "IAMA Executive Suites, Sector F-7/2, Islamabad",
    seatsTotal: 12,
    seatsRemaining: 5,
    status: "Open",
    leadTrainer: "Dr. Shumaila Khan"
  }
];
