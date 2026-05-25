/* ========================================
   NAVIGATION LINKS
   ======================================== */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;



/* ========================================
   SOCIAL LINKS (PLACEHOLDER — UPDATE LATER)
   ======================================== */
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/avyuct", // PLACEHOLDER
  twitter: "https://twitter.com/avyuct", // PLACEHOLDER
  youtube: "https://youtube.com/@avyuct", // PLACEHOLDER
} as const;

/* ========================================
   CONTACT INFO
   ======================================== */
export const CONTACT = {
  email: "info@avyuct.com",
  dubaiEmail: "dubai@avyuct.com",
  phone: "+1 (703) 555-0100", // PLACEHOLDER
  calendly: "https://calendly.com/avyuct", // PLACEHOLDER
  headquarters: {
    name: "Headquarters",
    city: "Herndon, Virginia, USA",
    address: "123 Innovation Drive, Herndon, VA 22070, USA", // PLACEHOLDER
    role: "Headquarters & AI Development",
  },
  dubai: {
    name: "Innovation Hub",
    city: "Dubai, UAE",
    address: "Dubai AI Campus, Business Bay, Dubai, UAE", // PLACEHOLDER
    role: "Innovation Hub & World Model Development",
  },
} as const;

/* ========================================
   HERO STATS
   ======================================== */
export const HERO_STATS = [
  { value: "86%", label: "Sensitivity" },
  { value: "5", label: "US Patents" },
  { value: "M2–M4", label: "Distal Detection" },
] as const;

/* ========================================
   PROBLEM SECTION STATS
   ======================================== */
export const PROBLEM_STATS = [
  { value: 40, suffix: "s", label: "someone in the US has a stroke" },
  { value: 12, suffix: "M+", label: "new strokes per year globally" },
  { value: 1.9, suffix: "M", label: "neurons die every 60 seconds" },
  { value: 40, suffix: "%+", label: "DMVO cases missed by radiologists" },
] as const;

/* ========================================
   SOLUTION CAPABILITIES
   ======================================== */
export const CAPABILITIES = [
  {
    id: "lvo",
    title: "LVO Detection",
    subtitle: "Large Vessel Occlusion",
    description:
      "The most severe strokes. AI flags in seconds for immediate thrombectomy decision.",
    icon: "brain",
  },
  {
    id: "dmvo",
    title: "DMVO Detection",
    subtitle: "Distal Medium Vessel Occlusion",
    description:
      "Routinely missed by the human eye. 86% AI sensitivity vs. standard-of-care.",
    icon: "scan",
  },
  {
    id: "screening",
    title: "Population-Scale Screening",
    subtitle: "Global Deployment",
    description:
      "Deployable in any hospital, any ER, anywhere in the world. AI reads, flags, alerts.",
    icon: "globe",
  },
] as const;

/* ========================================
   CLINICAL PILLARS
   ======================================== */
export const CLINICAL_PILLARS = [
  {
    title: "Sub-Threshold Mastery",
    description:
      "25% of stroke patients suffer from DMVOs frequently missed by conventional AI. Our proprietary training on expert-adjudicated distal stroke datasets develops unparalleled sensitivity.",
    icon: "precision",
  },
  {
    title: "Edge-Native Deployment",
    description:
      "AI moves from the cloud to the scanner console for 'zero-latency' triage. With distal strokes, the bottleneck is no longer surgical access — it's precise localization.",
    icon: "edge",
  },
  {
    title: "Institutional Validation",
    description:
      "Success of the DISTALS trial and targeted catheters at ISC 2026 confirmed our conviction. We partner with NIH StrokeNet and leading institutions.",
    icon: "validation",
  },
] as const;

/* ========================================
   USE CASES
   ======================================== */
export const USE_CASES = [
  {
    title: "Ischemic Stroke",
    status: "launched" as const,
    description:
      "Detection of occlusion in brain blood vessels for rapid intervention and improved patient outcomes.",
  },
  {
    title: "Haemorrhagic Stroke",
    status: "coming-soon" as const,
    description:
      "Identification of stroke caused by brain haemorrhage through our custom AI algorithms.",
  },
  {
    title: "Coronary Artery Disease",
    status: "ongoing" as const,
    description: "AI-powered detection of coronary artery blockages.",
  },
] as const;

/* ========================================
   WORKFLOW STEPS
   ======================================== */
export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Data Preparation",
    description:
      "Standardize, clean and prepare the medical data for model training.",
    icon: "data",
  },
  {
    step: 2,
    title: "Model Training",
    description:
      "Train custom advanced machine learning models using prepared datasets to ensure accuracy and reliability.",
    icon: "training",
  },
  {
    step: 3,
    title: "Inferencing",
    description:
      "Deploy trained models to analyze new data and generate outcomes near real time.",
    icon: "inference",
  },
  {
    step: 4,
    title: "Actionable Insights",
    description:
      "Transform model outputs into clear, actionable clinical insights to support medical decision-making.",
    icon: "insight",
  },
] as const;

/* ========================================
   TRUST SIGNALS
   ======================================== */
export const TRUST_SIGNALS = [
  {
    title: "Reliable Accuracy",
    description:
      "State-of-the-art AI ensures advanced and reliable diagnostics for distal stroke detection.",
    icon: "shield",
  },
  {
    title: "Anomaly Visualization",
    description:
      "Advanced imaging insights across M2–M4 segments enable confident, rapid clinical decisions.",
    icon: "eye",
  },
  {
    title: "End-to-End Solution",
    description:
      "Complete AI-powered medical analysis with comprehensive reporting, from scan to actionable insight.",
    icon: "pipeline",
  },
  {
    title: "Trusted by Medical Professionals",
    description:
      "Built in collaboration with clinicians. Backed by five U.S. patent filings in AI for medical imaging.",
    icon: "checkmark",
  },
] as const;

/* ========================================
   FAQ DATA
   ======================================== */
export const FAQ_DATA = [
  {
    question: "How long does a typical demo take?",
    answer:
      "Our standard demo is 30 minutes and includes a live walkthrough of the AI detection interface, case examples, and Q&A. We can customize the demo to your specific needs.",
  },
  {
    question: "What imaging modalities does Avyuct support?",
    answer:
      "Currently, we support CT angiography (CTA) for stroke detection. Our predictive vascular model (in development) will support CT, MRI, ultrasound, and other modalities.",
  },
  {
    question: "Is Avyuct FDA cleared?",
    answer:
      "We are currently pursuing FDA 510(k) clearance for our stroke detection platform. We are HIPAA compliant and work with leading institutions through research partnerships.",
  },
  {
    question: "How does Avyuct integrate with existing hospital systems?",
    answer:
      "Avyuct is designed for seamless integration with PACS/RIS systems and supports HL7/DICOM standards. We offer both cloud-based and edge-native deployment options.",
  },
  {
    question: "What is the pricing model?",
    answer:
      "We offer flexible pricing based on annual case volume and deployment architecture. Contact us for a custom quote tailored to your institution's needs.",
  },
  {
    question: "Do you offer training for clinical staff?",
    answer:
      "Yes, we provide comprehensive training for radiologists, technicians, and clinical staff as part of the deployment process.",
  },
] as const;

/* ========================================
   TEAM DATA (PLACEHOLDER — UPDATE LATER)
   ======================================== */
export const TEAM_MEMBERS = [
  {
    name: "Dr. Arun Mehta", // PLACEHOLDER NAME
    role: "Founder & CEO",
    bio: "AI/ML researcher with 15+ years in medical imaging. Previously led computer vision research at a top-tier healthcare AI company.",
    image: "/images/team/placeholder-ceo.jpg", // PLACEHOLDER IMAGE
  },
  {
    name: "Dr. Sarah Chen", // PLACEHOLDER NAME
    role: "Chief Medical Officer",
    bio: "Interventional neurologist and stroke specialist with 20+ years of clinical experience. Former department head at a leading academic medical center.",
    image: "/images/team/placeholder-cmo.jpg", // PLACEHOLDER IMAGE
  },
  {
    name: "Raj Patel", // PLACEHOLDER NAME
    role: "Chief Technology Officer",
    bio: "Edge computing and distributed systems expert. Previously architected HIPAA-compliant medical device platforms at a Fortune 500 company.",
    image: "/images/team/placeholder-cto.jpg", // PLACEHOLDER IMAGE
  },
] as const;

/* ========================================
   MILESTONE TIMELINE
   ======================================== */
export const MILESTONES = [
  { year: "2023", title: "DMVO Detection Algorithm Developed" },
  { year: "2024", title: "NIH StrokeNet Partnership Established" },
  { year: "2025", title: "DISTALS Trial Participation" },
  { year: "2026", title: "Dubai World Model Initiative Launched" },
  { year: "2026", title: "FDA Clearance Application Submitted" },
] as const;

/* ========================================
   STROKE DETECTION TABS (Solutions Page)
   ======================================== */
export const STROKE_TABS = [
  {
    id: "lvo",
    label: "LVO Detection",
    headline: "M1 Segment — The Critical Emergency",
    description:
      "Visible on standard CTA. Established detection protocols exist. Avyuct builds precision AI for faster, more reliable triage at scale.",
    stats: [
      { label: "Detection time", value: "<30 seconds" },
      { label: "Sensitivity", value: "94%" },
      { label: "Integration", value: "PACS/RIS compatible" },
    ],
  },
  {
    id: "dmvo",
    label: "DMVO Detection",
    headline: "M3 Segment — The Hidden Stroke",
    description:
      "Difficult to see on standard imaging. Clinicians can — and do — miss it. Patients deteriorate without treatment.",
    stats: [
      { label: "Sensitivity", value: "86% (vs. 60% unaided)" },
      { label: "Coverage", value: "25% of all stroke cases" },
      { label: "Segments", value: "M2 distal, M3, M4" },
    ],
    isPrimary: true,
  },
  {
    id: "hemorrhagic",
    label: "Hemorrhagic",
    headline: "Brain Hemorrhage Detection",
    description:
      "Identification of stroke caused by brain hemorrhage through our custom AI algorithms.",
    stats: [
      { label: "Status", value: "In Development" },
      { label: "Expected Launch", value: "Q3 2026" },
    ],
    isComingSoon: true,
  },
] as const;

/* ========================================
   DEPLOYMENT SPECS (Solutions Page)
   ======================================== */
export const DEPLOYMENT_SPECS = [
  {
    title: "Scanner Integration",
    items: ["PACS/RIS compatible", "HL7/DICOM compliant", "Zero-footprint installation"],
  },
  {
    title: "Edge Processing",
    items: ["<30 second inference time", "No internet dependency", "HIPAA-compliant local processing"],
  },
  {
    title: "Enterprise Integration",
    items: ["EMR integration (Epic, Cerner, Allscripts)", "Automated alert systems", "Multi-site deployment support"],
  },
  {
    title: "Cloud Sync (Optional)",
    items: ["Encrypted backups", "Continuous model updates", "Analytics dashboard access"],
  },
] as const;

/* ========================================
   FOOTER DATA
   ======================================== */
export const FOOTER_BADGES = [
  "5 US Patents",
  "HIPAA Compliant",
  "FDA Clearance in Progress",
] as const;
