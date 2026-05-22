# Avyuct AI Labs — Landing Page Ecosystem PRD
**Version 1.0** | AI-Powered Vascular Healthcare Platform

---

## Executive Summary

### Primary Conversion Goals

**Primary:** Position Avyuct AI Labs as the definitive authority in AI-powered distal stroke detection, driving qualified enterprise partnerships with hospitals, medical institutions, and healthcare systems globally.

**Secondary:** Establish thought leadership around the world's first JEPA-based predictive vascular intelligence platform being developed as Sovereign UAE IP.

**Tertiary:** Generate high-quality demo requests from radiology departments, stroke centers, and ER directors seeking next-generation AI triage solutions.

### Target Audience Segments

1. **Primary Decision Makers:** Hospital CIOs, Radiology Directors, Neurology Department Heads, ER Medical Directors
2. **Clinical Validators:** Neuroradiologists, Interventional Neurologists, Stroke Specialists
3. **Strategic Partners:** Medical device manufacturers, imaging equipment vendors, healthcare AI investors
4. **Regional Focus:** UAE/MENA region (sovereign AI development angle) + US healthcare systems (FDA pathway)

### Brand Positioning Statement

*"Avyuct AI Labs detects the strokes no one sees coming. Our autonomous medical intelligence identifies distal vessel occlusions that standard imaging misses — saving lives through AI precision that surpasses human capability."*

---

## Global Architecture

### Navigation Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  Home  |  Solutions  |  About Us  |  Contact Us │
│                                     [Request Demo] CTA   │
└─────────────────────────────────────────────────────────┘
```

**Desktop Navigation (Glassmorphic Header)**
- Fixed header with frosted glass backdrop-blur effect
- Logo: "Avyuct AI Labs" with minimal brain vessel icon mark
- Navigation items with subtle blue underline animation on hover
- Primary CTA: "Request Demo" button (striking blue, glass morphism border)
- Appears/disappears with scroll direction (Lenis + GSAP)

**Mobile Navigation**
- Hamburger menu with full-screen overlay (glass morphism background)
- Stacked navigation with large touch targets
- Same CTA prominence

### Global UI Elements

#### Color System
```css
--primary-blue: #0066FF (Striking electric blue)
--secondary-blue: #4D9FFF (Lighter accent)
--neural-blue: #1E3A8A (Deep authority blue)
--glass-white: rgba(255, 255, 255, 0.08)
--glass-border: rgba(255, 255, 255, 0.18)
--neutral-100: #F9FAFB (Background)
--neutral-200: #E5E7EB
--neutral-800: #1F2937 (Text)
--neural-gradient: linear-gradient(135deg, #0066FF 0%, #1E3A8A 100%)
```

#### Typography
- **Headings:** Inter, SF Pro Display (Apple-style, -apple-system fallback)
- **Body:** Inter, system-ui
- **Technical/Data:** IBM Plex Mono (for statistics, patent numbers)

#### Glassmorphism Components
1. **Info Cards:** `backdrop-filter: blur(24px)`, subtle border glow
2. **Stat Panels:** Frosted containers with blue accent borders
3. **Image Overlays:** Layered transparency for AI detection visualization
4. **Navigation:** Semi-transparent header with blur on scroll

#### Global Footer
- Three-column layout (Company Info | Quick Links | Contact)
- Glassmorphic container
- Minimal social proof: "5 US Patents | HIPAA Compliant | FDA Clearance in Progress"
- Location badges: "Herndon, VA | Dubai, UAE"

---

## Page 01: Home

### Conversion Goal
Establish immediate authority and intrigue around "seeing the unseen" — the hidden strokes that kill 25% of patients. Drive demo requests.

---

### Section 01: Hero — "Seeing the Unseen"

**Layout:**
- Full-viewport height (100vh)
- Split composition: Left 60% headline/copy, Right 40% animated vessel visualization

**Content:**
```
Headline (H1): Seeing the Unseen.
Subheadline: AI that detects the brain vessel occlusions 
             doctors can miss — before it's too late.

Supporting Stats (Glassmorphic Pills):
- 86% Sensitivity
- 5 US Patents
- M2–M4 Distal Detection

Primary CTA: Request Demo
Secondary CTA: Explore Technology
```

**Visual Assets:**
- Animated 3D brain vessel map (WebGL or Lottie JSON)
- Subtle particle system suggesting neural activity
- Blue vessel highlights appearing in sequence

**GSAP + Lenis Animation Logic:**
```javascript
// Hero enters with staggered fade-up
gsap.from(".hero-headline", {
  y: 80, 
  opacity: 0, 
  duration: 1.2, 
  ease: "power3.out"
});

// Vessel visualization draws in with morphSVG
gsap.from(".vessel-path", {
  drawSVG: "0%", 
  duration: 2.5, 
  stagger: 0.15,
  ease: "power2.inOut"
});

// Stats fade in after headline
gsap.from(".stat-pill", {
  scale: 0.8, 
  opacity: 0, 
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: false
  }
});
```

---

### Section 02: The Problem — "The Stroke No One Sees Coming"

**Layout:**
- Horizontal scroll-triggered pin section (GSAP ScrollTrigger pin)
- Dark navy background with subtle grid overlay
- Content reveals as user scrolls

**Content Structure:**
```
Headline: The Stroke No One Sees Coming.

Problem Statement:
"Distal Medium Vessel Occlusion (DMVO) accounts for up to 25% 
of strokes — yet standard imaging and clinical assessment 
routinely misses it."

Stat Impact:
- Every 40 seconds, someone in the US has a stroke
- 12M+ new strokes per year globally (#2 cause of death)
- 1.9M neurons die every 60 seconds without treatment
- 40%+ of DMVO cases missed by unaided radiologists
```

**Visual Assets:**
- Split-screen comparison:
  - Left: M1 Large Vessel Occlusion (visible, outlined in green)
  - Right: M3 Distal Occlusion (barely visible, outlined in red with "MISSED" tag)
- Animated clock showing neuron death rate

**GSAP + Lenis Animation Logic:**
```javascript
// Pin section during scroll
ScrollTrigger.create({
  trigger: ".problem-section",
  start: "top top",
  end: "+=200%",
  pin: true,
  scrub: true
});

// Stats count up as section reveals
gsap.from(".stat-number", {
  textContent: 0,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".stat-number",
    start: "top 80%"
  }
});

// Comparison images slide in from opposite sides
gsap.from(".comparison-left", {
  x: -200, 
  opacity: 0,
  scrollTrigger: {
    trigger: ".comparison-container",
    start: "top center",
    end: "center center",
    scrub: 1
  }
});
```

---

### Section 03: The Solution — "Autonomous Medical Intelligence"

**Layout:**
- Center-aligned content with expansive vertical rhythm
- Glassmorphic container with blue gradient border
- Interactive before/after slider component

**Content:**
```
Tagline: Autonomous Medical Intelligence

Headline: Avyuct AI detects what eyes miss.

Core Capabilities:
1. LVO Detection — Large Vessel Occlusion
   "The most severe strokes. AI flags in seconds for 
    immediate thrombectomy decision."

2. DMVO Detection — Distal Medium Vessel Occlusion
   "Routinely missed by the human eye. 
    86% AI sensitivity vs. standard-of-care."

3. Population-Scale Screening
   "Deployable in any hospital, any ER, anywhere in the world. 
    AI reads, flags, alerts."
```

**Visual Assets:**
- Interactive before/after CTA scan viewer:
  - Before: Raw grayscale CTA scan
  - After: AI overlay with color-coded vessel segmentation
  - Drag slider with glassmorphic handle
- Animated "AI DETECTION OVERLAY" badge

**GSAP + Lenis Animation Logic:**
```javascript
// Before/after images scale in on scroll
gsap.from(".scan-before, .scan-after", {
  scale: 0.9,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".solution-section",
    start: "top 60%"
  }
});

// Capability cards reveal sequentially
gsap.from(".capability-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".capability-cards",
    start: "top 70%",
    end: "top 30%",
    scrub: 1
  }
});

// AI overlay animates into view
gsap.to(".ai-overlay", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".ai-overlay",
    start: "top 80%"
  }
});
```

---

### Section 04: Clinical Validation — "Three Pillars of Trust"

**Layout:**
- Three-column grid (desktop) / Vertical stack (mobile)
- Each pillar in a glassmorphic card with icon

**Content:**
```
Headline: Our Clinical Moat

Pillar 01: Sub-Threshold Mastery
"25% of stroke patients suffer from DMVOs frequently missed 
by conventional AI. Our proprietary training on expert-adjudicated 
distal stroke datasets develops unparalleled sensitivity."

Pillar 02: Edge-Native Deployment
"AI moves from the cloud to the scanner console for 
'zero-latency' triage. With distal strokes, the bottleneck 
is no longer surgical access — it's precise localization."

Pillar 03: Institutional Validation
"Success of the DISTALS trial and targeted catheters at 
ISC 2026 confirmed our conviction. We partner with NIH 
StrokeNet and leading institutions."
```

**Visual Assets:**
- Custom iconography for each pillar (line art, minimal)
- Background: Subtle neural network pattern
- Hover state: Blue glow effect on glass cards

**GSAP + Lenis Animation Logic:**
```javascript
// Cards lift up and fade in on scroll
gsap.from(".pillar-card", {
  y: 80,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  scrollTrigger: {
    trigger: ".pillars-section",
    start: "top 70%"
  }
});

// Icon animate on card hover
document.querySelectorAll('.pillar-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card.querySelector('.icon'), {
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  });
});
```

---

### Section 05: Use Cases — "Saving Lives, One Diagnosis at a Time"

**Layout:**
- Horizontal scroll carousel (Lenis smooth scroll)
- Cards slide in from right as user scrolls
- Each card represents a medical condition

**Content:**
```
Headline: Avyuct Helps Save Lives. Here Are Our Use Cases.

Card 01: Ischemic Stroke [LAUNCHED]
"Detection of occlusion in brain blood vessels for rapid 
intervention and improved patient outcomes."

Card 02: Haemorrhagic Stroke [COMING SOON]
"Identification of stroke caused by brain haemorrhage through 
our custom AI algorithms."

Card 03: Coronary Artery Disease [ONGOING]
"AI-powered detection of coronary artery blockages."
```

**Visual Assets:**
- Medical illustration for each condition (stylized, blue gradient)
- Status badge: "Launched" (green) / "Coming Soon" (yellow) / "Ongoing" (blue)
- Glassmorphic card backgrounds

**GSAP + Lenis Animation Logic:**
```javascript
// Horizontal scroll animation
gsap.to(".use-case-carousel", {
  x: () => -(document.querySelector('.use-case-carousel').scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".use-cases-section",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true
  }
});

// Cards parallax slightly as they scroll
gsap.to(".use-case-card", {
  y: -50,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".use-cases-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
```

---

### Section 06: Workflow Visualization — "Data to Insight in Seconds"

**Layout:**
- Vertical step-by-step diagram
- Arrows/lines connecting each step (animated stroke)
- Center-aligned with glassmorphic step containers

**Content:**
```
Headline: Our Workflow

Step 01: Data Preparation
"Standardize, clean and prepare the medical data for model training"

Step 02: Model Training
"Train custom advanced machine learning models using prepared 
datasets to ensure accuracy and reliability"

Step 03: Inferencing
"Deploy trained models to analyze new data and generate 
outcomes near real time"

Step 04: Actionable Insights
"Transform model outputs into clear, actionable clinical 
insights to support medical decision-making"
```

**Visual Assets:**
- Isometric or side-view workflow diagram
- Animated data flow (particles moving through pipeline)
- Icons for each step (medical data → brain → AI chip → report)

**GSAP + Lenis Animation Logic:**
```javascript
// Steps reveal sequentially on scroll
gsap.from(".workflow-step", {
  x: -100,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".workflow-section",
    start: "top 60%",
    end: "top 30%",
    scrub: 1
  }
});

// Connecting lines draw between steps
gsap.from(".workflow-connector", {
  scaleX: 0,
  transformOrigin: "left center",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".workflow-section",
    start: "top 50%",
    scrub: 1
  }
});

// Data particles flow through pipeline
gsap.to(".particle", {
  motionPath: {
    path: ".workflow-path",
    align: ".workflow-path",
    alignOrigin: [0.5, 0.5]
  },
  duration: 4,
  repeat: -1,
  ease: "none",
  stagger: 0.5
});
```

---

### Section 07: Trust Signals — "Why Choose Avyuct"

**Layout:**
- Four-column grid (desktop) / Two-column (tablet) / Single column (mobile)
- Icon + Headline + Description cards

**Content:**
```
Headline: Why Choose Avyuct?

Signal 01: Reliable Accuracy
"State-of-the-art AI ensures advanced and reliable diagnostics 
for distal stroke detection"

Signal 02: Anomaly Visualization
"Advanced imaging insights across M2–M4 segments enable 
confident, rapid clinical decisions"

Signal 03: End-to-End Solution
"Complete AI-powered medical analysis with comprehensive 
reporting, from scan to actionable insight"

Signal 04: Trusted by Medical Professionals
"Built in collaboration with clinicians. Backed by five U.S. 
patent filings in AI for medical imaging"
```

**Visual Assets:**
- Minimal line icons (shield, eye, pipeline, checkmark)
- Subtle hover glow effect
- Background: Faint neural network pattern

**GSAP + Lenis Animation Logic:**
```javascript
// Trust cards fade in with stagger
gsap.from(".trust-card", {
  scale: 0.9,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".trust-section",
    start: "top 70%"
  }
});

// Hover interaction
document.querySelectorAll('.trust-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      boxShadow: "0 20px 60px rgba(0, 102, 255, 0.3)",
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
```

---

### Section 08: CTA Block — "Join the Revolution"

**Layout:**
- Full-width section with dark blue gradient background
- Centered headline + CTA button
- Subtle animated background (particle field)

**Content:**
```
Headline: Join the Vascular Health Revolution using AI
Subheadline: Partner with us to redefine the standard of care 
              for distal stroke detection

Primary CTA: Request Demo
Secondary CTA: Contact Sales
```

**Visual Assets:**
- Animated neural network connections in background
- Glassmorphic CTA buttons with hover glow

**GSAP + Lenis Animation Logic:**
```javascript
// Background particles float
gsap.to(".cta-particle", {
  y: "random(-100, 100)",
  x: "random(-100, 100)",
  duration: "random(3, 6)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.2
});

// CTA section scales in
gsap.from(".cta-block", {
  scale: 0.95,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".cta-block",
    start: "top 80%"
  }
});
```

---

## Page 02: Solutions

### Conversion Goal
Deep-dive into technical capabilities, demonstrating AI precision and versatility across multiple vascular conditions. Position Avyuct as the comprehensive platform, not just a point solution.

---

### Section 01: Hero — "Precision AI Across the Vascular Spectrum"

**Layout:**
- Full-viewport hero with animated vessel tree
- Split composition: Left (headline) / Right (3D vessel visualization)

**Content:**
```
Headline: Precision AI Across the Vascular Spectrum
Subheadline: From emergency stroke triage to predictive vascular 
              intelligence — our autonomous AI sees what matters most.

Navigation Pills (Anchor links):
- Stroke Detection
- World Model Foundation
- Deployment Architecture
- Clinical Validation
```

**Visual Assets:**
- Interactive 3D vessel tree (WebGL/Three.js)
- Hotspots on different vessel segments (M1, M2, M3, M4)
- Clicking hotspot zooms and reveals AI detection overlay

**GSAP + Lenis Animation Logic:**
```javascript
// Hero headline stagger fade-in
gsap.from(".solutions-hero h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Vessel tree rotates slowly
gsap.to(".vessel-3d-container", {
  rotationY: 360,
  duration: 30,
  repeat: -1,
  ease: "none"
});

// Navigation pills slide up
gsap.from(".nav-pill", {
  y: 30,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".solutions-hero",
    start: "top top"
  }
});
```

---

### Section 02: Stroke Detection Suite

**Layout:**
- Tabbed interface (LVO / DMVO / Hemorrhagic)
- Each tab reveals detailed explanation with case examples
- Side-by-side comparison: Raw scan vs. AI overlay

**Content:**
```
Tab 01: Large Vessel Occlusion (LVO)
Headline: M1 Segment — The Critical Emergency
Description: "Visible on standard CTA. Established detection 
protocols exist. Avyuct builds precision AI for faster, 
more reliable triage at scale."

Clinical Impact:
- Detection time: <30 seconds
- Sensitivity: 94%
- Integration: PACS/RIS compatible

Tab 02: Distal Medium Vessel Occlusion (DMVO) [PRIMARY FOCUS]
Headline: M3 Segment — The Hidden Stroke
Description: "Difficult to see on standard imaging. Clinicians 
can — and do — miss it. Patients deteriorate without treatment."

Clinical Impact:
- 86% sensitivity (vs. 60% unaided)
- 25% of all stroke cases
- M2 distal, M3, M4 segment coverage

Tab 03: Hemorrhagic Stroke [COMING SOON]
Headline: Brain Hemorrhage Detection
Description: "Identification of stroke caused by brain hemorrhage 
through our custom AI algorithms."

Status: In Development | Expected Launch: Q3 2026
```

**Visual Assets:**
- Medical case examples (anonymized CTA scans)
- Before/After interactive sliders
- Color-coded vessel segmentation overlays
- Animated "DETECTED" badges appearing on AI overlay

**GSAP + Lenis Animation Logic:**
```javascript
// Tab content fade transitions
function switchTab(tabId) {
  gsap.to(".active-tab-content", {
    opacity: 0,
    x: -50,
    duration: 0.3,
    onComplete: () => {
      // Switch content
      gsap.from(`#${tabId}`, {
        opacity: 0,
        x: 50,
        duration: 0.3
      });
    }
  });
}

// Case examples zoom in on scroll
gsap.from(".case-example", {
  scale: 0.9,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".stroke-detection-section",
    start: "top 60%"
  }
});

// AI detection overlay animates
gsap.from(".ai-detection-layer", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".ai-detection-layer",
    start: "top 70%"
  }
});
```

---

### Section 03: Neurovascular World Model — "The Future of Predictive Medicine"

**Layout:**
- Pinned section with scroll-driven content reveal
- Large visual: JEPA model architecture diagram
- Multi-stage explanation (Input → Model → Output)

**Content:**
```
Headline: Neurovascular World Model
Tagline: Now Building in Dubai

Overview:
"A foundation AI model trained to map biological normalcy 
across cerebral vasculature — detecting life-threatening 
anomalies at the speed and accuracy no human can consistently match."

What It Solves:
- 12M+ new strokes per year globally (#2 cause of death)
- 1.9M neurons die every 60 seconds without treatment
- Hours lost to manual reads in ERs with no 24/7 coverage

JEPA Architecture Explained:

Stage 01: Multimodal Input
"CT, MRI, ultrasound, and other imaging systems capturing 
raw data from the human body."

Stage 02: JEPA Causal Learning
"This architecture uses causal representation learning to 
deeply understand vascular structures, tissue context, and 
disease patterns. Unlike traditional AI that simply matches 
pixels, our predictor learns how vascular states evolve over time."

Stage 03: Predictive Output
"Real-time, actionable, full-body vascular map enabling 
clinicians to instantly analyze cerebral blood flow, map 
coronary arteries, and assess peripheral vascular risks."

Clinical Transformation:
"Moving from reactive diagnosis to predictive risk forecasting — 
earlier detection and far more precise interventions."

Sovereign AI Development:
"Developed entirely in the Emirates as UAE IP, pioneering 
Abu Dhabi's shift from reactive triage to proactive predictive care."
```

**Visual Assets:**
- JEPA model architecture flowchart (animated)
- 3D body map showing vascular systems
- Data flow visualization (multimodal inputs converging)
- "UAE Sovereign IP" badge with national flag

**GSAP + Lenis Animation Logic:**
```javascript
// Pin section for extended scroll duration
ScrollTrigger.create({
  trigger: ".world-model-section",
  start: "top top",
  end: "+=400%",
  pin: true,
  scrub: true
});

// Stage reveals as user scrolls
gsap.timeline({
  scrollTrigger: {
    trigger: ".world-model-section",
    start: "top top",
    end: "+=400%",
    scrub: 1
  }
})
.from(".stage-01", { opacity: 0, x: -100 })
.from(".stage-02", { opacity: 0, x: -100 }, "+=0.3")
.from(".stage-03", { opacity: 0, x: -100 }, "+=0.3");

// JEPA diagram nodes pulse
gsap.to(".jepa-node", {
  scale: 1.1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.2,
  ease: "sine.inOut"
});

// Body map highlights different vascular regions
gsap.timeline({ repeat: -1 })
  .to(".vascular-region-1", { fill: "#0066FF", duration: 1 })
  .to(".vascular-region-2", { fill: "#0066FF", duration: 1 })
  .to(".vascular-region-3", { fill: "#0066FF", duration: 1 });
```

---

### Section 04: Edge-Native Deployment Architecture

**Layout:**
- Horizontal timeline showing deployment flow
- Left to right: Scanner → Edge Device → Hospital Network → Cloud Backup
- Technical specifications in glassmorphic info cards

**Content:**
```
Headline: Zero-Latency Triage Architecture

Deployment Philosophy:
"AI moves from the cloud to the scanner console. With distal 
strokes, the bottleneck is no longer surgical access — 
it's precise localization."

Technical Specs:

Scanner Integration:
- PACS/RIS compatible
- HL7/DICOM compliant
- Zero-footprint installation

Edge Processing:
- <30 second inference time
- No internet dependency
- HIPAA-compliant local processing

Enterprise Integration:
- EMR integration (Epic, Cerner, Allscripts)
- Automated alert systems
- Multi-site deployment support

Cloud Sync (Optional):
- Encrypted backups
- Continuous model updates
- Analytics dashboard access
```

**Visual Assets:**
- Technical diagram: Data flow from scanner to clinician
- Isometric illustration of hospital infrastructure
- Speed comparison: Cloud (slow) vs. Edge (fast)

**GSAP + Lenis Animation Logic:**
```javascript
// Timeline nodes appear sequentially
gsap.from(".deployment-node", {
  scale: 0,
  opacity: 0,
  stagger: 0.25,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".deployment-section",
    start: "top 60%"
  }
});

// Data packets animate along connection lines
gsap.to(".data-packet", {
  motionPath: {
    path: ".deployment-path",
    align: ".deployment-path",
    alignOrigin: [0.5, 0.5]
  },
  duration: 3,
  repeat: -1,
  ease: "none",
  stagger: 0.5
});

// Spec cards lift on scroll
gsap.from(".spec-card", {
  y: 60,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".spec-cards",
    start: "top 70%"
  }
});
```

---

### Section 05: Clinical Validation & Research Partnerships

**Layout:**
- Grid of institutional partner logos
- Case study cards with hover interactions
- Timeline of milestones

**Content:**
```
Headline: Institutional Validation

Research Partnerships:
- NIH StrokeNet Ecosystem
- Leading Academic Medical Centers
- DISTALS Trial Participation

Validation Metrics:
- 86% DMVO detection sensitivity
- 94% LVO detection sensitivity
- <2% false positive rate
- 5 US patent filings

Milestone Timeline:
2023: DMVO Detection Algorithm Developed
2024: NIH StrokeNet Partnership Established
2025: DISTALS Trial Participation
2026: Dubai World Model Initiative Launched
2026: FDA Clearance Application Submitted
```

**Visual Assets:**
- Partner institution logos (grayscale, blue on hover)
- Research paper thumbnails
- Animated milestone markers on timeline

**GSAP + Lenis Animation Logic:**
```javascript
// Partner logos fade in grid
gsap.from(".partner-logo", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".partners-grid",
    start: "top 70%"
  }
});

// Timeline markers reveal chronologically
gsap.from(".milestone-marker", {
  scaleY: 0,
  transformOrigin: "top center",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 60%",
    scrub: 1
  }
});

// Case study cards flip on hover
document.querySelectorAll('.case-study-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      rotateY: 10,
      z: 50,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});
```

---

### Section 06: CTA — "Deploy Avyuct in Your Institution"

**Layout:**
- Full-width gradient background
- Two-column: Left (form) / Right (benefits summary)

**Content:**
```
Headline: Ready to Deploy Avyuct?
Subheadline: Join leading medical institutions using AI for 
              life-saving stroke detection

Benefits Summary:
✓ 86% sensitivity for hidden distal strokes
✓ <30 second inference time
✓ Zero-latency edge deployment
✓ HIPAA compliant, FDA clearance pending
✓ Seamless PACS/RIS integration

CTA Form:
- Institution Name
- Contact Name
- Email
- Role/Title
- Number of Annual Stroke Cases
- Primary CTA: Request Demo
```

**Visual Assets:**
- Form with glassmorphic styling
- Checkmark icons with blue glow
- Subtle animated background particles

**GSAP + Lenis Animation Logic:**
```javascript
// Form slides in from right
gsap.from(".cta-form", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".solutions-cta",
    start: "top 70%"
  }
});

// Benefits checklist animates
gsap.from(".benefit-item", {
  x: -50,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".benefits-list",
    start: "top 70%"
  }
});
```

---

## Page 03: About Us

### Conversion Goal
Establish credibility, humanize the technology, and position Avyuct as both a US-based innovator and UAE sovereign AI pioneer. Drive partnership inquiries.

---

### Section 01: Hero — "Autonomous Medical Intelligence"

**Layout:**
- Split hero: Left (headline + mission) / Right (company photo or abstract visual)

**Content:**
```
Headline: Autonomous Medical Intelligence
Tagline: US · Dubai · Global

Mission Statement:
"Avyuct AI Labs builds precision AI for vascular health. 
We detect the strokes no one sees coming, saving lives 
through autonomous medical intelligence that surpasses 
human capability."

Quick Stats:
- Founded: 2023
- HQ: Herndon, Virginia, USA
- Innovation Hub: Dubai, UAE
- Patents: 5 US Filings
- Regulatory: HIPAA Compliant, FDA Clearance Pending
```

**Visual Assets:**
- Team photo or abstract "brain trust" visualization
- Dual location badges (US flag, UAE flag)
- Animated company origin story graphic

**GSAP + Lenis Animation Logic:**
```javascript
// Hero elements stagger in
gsap.from(".about-hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".about-hero .mission", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

// Stat counters animate
gsap.from(".stat-value", {
  textContent: 0,
  duration: 2,
  ease: "power2.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".quick-stats",
    start: "top 80%"
  }
});
```

---

### Section 02: The Challenge We're Solving

**Layout:**
- Large infographic: Global stroke burden visualization
- Three-column problem breakdown

**Content:**
```
Headline: The Challenge We're Solving

Global Stroke Crisis:
- 12M+ new strokes per year worldwide (#2 cause of death)
- 1.9M neurons die every 60 seconds without treatment
- 25% of strokes are distal vessel occlusions (DMVO)
- 40%+ of DMVO cases missed by unaided radiologists

Regional Focus — UAE:
"In the UAE, strokes strike a decade earlier. Yet standard 
AI misses critical distal vessel occlusions. Younger lives 
are at stake."

The Detection Gap:
"Standard imaging and clinical assessment routinely miss 
distal occlusions. Patients deteriorate without treatment. 
Avyuct closes this gap."
```

**Visual Assets:**
- World map showing stroke burden by region
- Brain scan comparison: Missed vs. Detected
- Age demographic chart (UAE vs. Global)

**GSAP + Lenis Animation Logic:**
```javascript
// World map regions highlight sequentially
gsap.from(".map-region", {
  fill: "#E5E7EB",
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".challenge-section",
    start: "top 60%"
  }
});

// Problem columns slide up
gsap.from(".problem-column", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".problem-columns",
    start: "top 70%"
  }
});
```

---

### Section 03: Our Approach — "From Detection to Prediction"

**Layout:**
- Two-phase timeline: Phase 1 (Detection) → Phase 2 (Prediction)
- Visual journey from reactive to proactive care

**Content:**
```
Headline: Our Approach: From Detection to Prediction

Phase 01: Emergency Stroke Detection (2023–2025)
Technology: Deep learning AI for LVO & DMVO detection
Impact: 86% sensitivity, <30 second inference, edge deployment
Status: Launched, FDA clearance pending

Phase 02: Predictive Vascular Intelligence (2025–2027)
Technology: JEPA-based world model for pre-disease prediction
Impact: Shift from reactive diagnosis to proactive risk forecasting
Status: In development, UAE sovereign IP
Location: Dubai AI Labs

Our Philosophy:
"We're not just reacting to emergencies — we're predicting 
them. The future of medicine is proactive, not reactive."
```

**Visual Assets:**
- Timeline graphic with two distinct phases
- Split visual: Left (CT scan with AI overlay) / Right (Predictive risk map)
- Animated transition between reactive → proactive states

**GSAP + Lenis Animation Logic:**
```javascript
// Timeline phases reveal on scroll
ScrollTrigger.create({
  trigger: ".approach-timeline",
  start: "top 60%",
  onEnter: () => {
    gsap.to(".phase-01", {
      opacity: 1,
      x: 0,
      duration: 1
    });
    
    gsap.to(".phase-02", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5
    });
  }
});

// Reactive to proactive transition
gsap.timeline({
  scrollTrigger: {
    trigger: ".approach-visual",
    start: "top center",
    scrub: 1
  }
})
.to(".reactive-state", { opacity: 0, scale: 0.9 })
.to(".proactive-state", { opacity: 1, scale: 1 }, "<");
```

---

### Section 04: Leadership & Expertise

**Layout:**
- Two-column grid: Team profiles
- Glassmorphic profile cards with hover expand

**Content:**
```
Headline: Led by Experts in AI, Medicine, and Innovation

[Profile cards for key team members]

Card 01: Founder & CEO
Name: [TBD]
Background: AI/ML researcher, medical imaging specialist
Expertise: Deep learning, computer vision, healthcare AI

Card 02: Chief Medical Officer
Name: [TBD]
Background: Interventional neurologist, stroke specialist
Expertise: Neurovascular care, clinical validation

Card 03: Chief Technology Officer
Name: [TBD]
Background: Edge computing, distributed systems
Expertise: Medical device integration, HIPAA compliance

Advisory Board:
- NIH StrokeNet Clinical Advisors
- Academic Medical Center Partners
- Healthcare AI Ethicists
```

**Visual Assets:**
- Professional headshots (high quality, consistent styling)
- Subtle blue gradient borders on cards
- Background pattern: Neural network

**GSAP + Lenis Animation Logic:**
```javascript
// Profile cards fade in with stagger
gsap.from(".team-profile", {
  y: 60,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".leadership-section",
    start: "top 70%"
  }
});

// Card expand on hover
document.querySelectorAll('.team-profile').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.05,
      boxShadow: "0 30px 80px rgba(0, 102, 255, 0.4)",
      duration: 0.4
    });
  });
});
```

---

### Section 05: Our Locations — "Global Innovation, Local Impact"

**Layout:**
- Two-column: Left (Herndon, VA) / Right (Dubai, UAE)
- Map pins with location details

**Content:**
```
Headline: Global Innovation, Local Impact

Location 01: Herndon, Virginia, USA
Role: Headquarters & AI Development
Focus: Core detection algorithms, FDA regulatory pathway
Capabilities: 
- Clinical validation partnerships
- NIH StrokeNet collaboration
- US patent portfolio development

Location 02: Dubai, UAE
Role: Innovation Hub & World Model Development
Focus: JEPA-based predictive vascular intelligence
Capabilities:
- Sovereign AI development (UAE IP)
- Multimodal imaging research
- Regional clinical partnerships (MENA)

Why Two Hubs?
"US expertise in stroke care + UAE vision for predictive 
medicine = Global impact. We combine the best of both worlds."
```

**Visual Assets:**
- Interactive world map with location markers
- Location photos (office exteriors or city skylines)
- Animated connection line between VA and Dubai

**GSAP + Lenis Animation Logic:**
```javascript
// Map pins drop in
gsap.from(".location-pin", {
  y: -100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".locations-section",
    start: "top 70%"
  }
});

// Connection line draws between locations
gsap.from(".connection-line", {
  strokeDashoffset: 1000,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".locations-map",
    start: "top 60%"
  }
});
```

---

### Section 06: Patents & Intellectual Property

**Layout:**
- Grid of patent filing cards
- Timeline of innovation milestones

**Content:**
```
Headline: Protected Innovation

Patent Portfolio:
- 5 US Patent Filings in AI for Medical Imaging
- Proprietary DMVO detection algorithms
- Edge-native deployment architecture
- JEPA-based predictive modeling (UAE sovereign IP)

Innovation Timeline:
2023: Core DMVO detection algorithm
2024: Edge deployment architecture
2025: Multimodal vascular mapping
2026: JEPA predictive model (UAE)

Regulatory Status:
✓ HIPAA Compliant
⏳ FDA 510(k) Clearance (In Progress)
✓ UAE Ministry of Health Engagement
```

**Visual Assets:**
- Patent document thumbnails
- Timeline with milestone markers
- Regulatory status badges

**GSAP + Lenis Animation Logic:**
```javascript
// Patent cards reveal in grid
gsap.from(".patent-card", {
  scale: 0.9,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".patents-grid",
    start: "top 70%"
  }
});

// Timeline markers light up
gsap.from(".innovation-marker", {
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".innovation-timeline",
    start: "top 60%"
  }
});
```

---

### Section 07: Press & Recognition

**Layout:**
- Carousel of press mentions and awards
- Quote highlights from media coverage

**Content:**
```
Headline: Industry Recognition

Press Mentions:
[Logos of healthcare publications, tech media]

Awards & Recognition:
- MIITE Abu Dhabi 2026 Exhibitor
- NIH StrokeNet Innovation Partner
- [Other awards TBD]

Featured Quote:
"Avyuct AI Labs is pioneering the future of emergency 
neurodiagnostics with AI that detects what radiologists miss."
— [Publication Name]
```

**Visual Assets:**
- Media logos (grayscale, blue on hover)
- Award badges with shine effect
- Quote cards with glassmorphic styling

**GSAP + Lenis Animation Logic:**
```javascript
// Press logos scroll horizontally
gsap.to(".press-carousel", {
  x: -500,
  duration: 20,
  repeat: -1,
  ease: "none"
});

// Awards fade in
gsap.from(".award-badge", {
  scale: 0,
  opacity: 0,
  stagger: 0.15,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: ".awards-section",
    start: "top 70%"
  }
});
```

---

### Section 08: CTA — "Join Our Mission"

**Layout:**
- Full-width gradient background
- Three CTA options (Partnership / Careers / Investors)

**Content:**
```
Headline: Join Our Mission to Save Lives

CTA 01: Partner With Us
"Bring Avyuct AI to your institution. Request a demo today."
Button: Request Demo

CTA 02: Careers
"Join our team of AI researchers and medical innovators."
Button: View Openings

CTA 03: Investors
"Help us scale life-saving AI across global healthcare."
Button: Investment Inquiry
```

**Visual Assets:**
- Three glassmorphic CTA cards
- Icon for each CTA type
- Animated background particles

**GSAP + Lenis Animation Logic:**
```javascript
// CTA cards slide up
gsap.from(".cta-option", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-cta",
    start: "top 70%"
  }
});

// Background particles float
gsap.to(".cta-particle", {
  y: "random(-80, 80)",
  x: "random(-80, 80)",
  duration: "random(4, 7)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.1
});
```

---

## Page 04: Contact Us

### Conversion Goal
Make it effortless to request a demo, schedule a call, or inquire about partnerships. Emphasize responsiveness and global reach.

---

### Section 01: Hero — "Let's Talk"

**Layout:**
- Minimal hero with centered headline
- Subtle animated background (neural network pattern)

**Content:**
```
Headline: Let's Talk
Subheadline: Request a demo, schedule a call, or learn how 
              Avyuct can transform stroke care at your institution.

Supporting Text:
"We respond to all inquiries within 24 hours. Whether you're 
a hospital administrator, clinician, or research partner, 
we're here to help."
```

**Visual Assets:**
- Abstract brain/vessel network animation
- Minimal, clean design

**GSAP + Lenis Animation Logic:**
```javascript
// Hero headline fade in
gsap.from(".contact-hero h1", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// Background network animation
gsap.to(".network-node", {
  scale: "random(0.8, 1.2)",
  duration: "random(2, 4)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.1
});
```

---

### Section 02: Contact Form — "Request a Demo"

**Layout:**
- Two-column: Left (form) / Right (contact info + map)
- Glassmorphic form container with blue accent borders

**Content:**
```
Form Fields:
- Full Name (required)
- Email (required)
- Institution/Organization (required)
- Role/Title (required)
- Phone Number (optional)
- Country (dropdown, required)
- Request Type (dropdown):
  • Demo Request
  • Partnership Inquiry
  • Investment Opportunity
  • General Question
- Message (textarea, required)
- [Checkbox] "I agree to receive communications from Avyuct"
- Submit Button: "Send Message"

Right Column — Contact Information:

Headquarters:
Avyuct AI Labs
[Address], Herndon, VA 22070, USA
Email: [[email protected]](mailto:[email protected])
Phone: [Phone Number]

Dubai Innovation Hub:
[Address], Dubai, UAE
Email: [[email protected]](mailto:[email protected])

Office Hours:
Monday–Friday: 9:00 AM – 6:00 PM EST
Saturday–Sunday: Closed

Follow Us:
[LinkedIn] [Twitter/X] [YouTube]
```

**Visual Assets:**
- Interactive map showing both office locations
- Office photos (small thumbnails)
- Social media icons with hover glow

**GSAP + Lenis Animation Logic:**
```javascript
// Form fields fade in sequentially
gsap.from(".form-field", {
  y: 30,
  opacity: 0,
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 70%"
  }
});

// Contact info slides in from right
gsap.from(".contact-info", {
  x: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 60%"
  }
});

// Map pins animate
gsap.from(".map-pin", {
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".map-container",
    start: "top 70%"
  }
});

// Submit button hover interaction
document.querySelector('.submit-btn').addEventListener('mouseenter', () => {
  gsap.to('.submit-btn', {
    scale: 1.05,
    boxShadow: "0 10px 40px rgba(0, 102, 255, 0.5)",
    duration: 0.3
  });
});
```

---

### Section 03: Frequently Asked Questions

**Layout:**
- Accordion-style FAQ section
- Glassmorphic question cards that expand on click

**Content:**
```
Headline: Frequently Asked Questions

Q1: How long does a typical demo take?
A1: "Our standard demo is 30 minutes and includes a live 
walkthrough of the AI detection interface, case examples, 
and Q&A. We can customize the demo to your specific needs."

Q2: What imaging modalities does Avyuct support?
A2: "Currently, we support CT angiography (CTA) for stroke 
detection. Our predictive vascular model (in development) 
will support CT, MRI, ultrasound, and other modalities."

Q3: Is Avyuct FDA cleared?
A3: "We are currently pursuing FDA 510(k) clearance for our 
stroke detection platform. We are HIPAA compliant and work 
with leading institutions through research partnerships."

Q4: How does Avyuct integrate with existing hospital systems?
A4: "Avyuct is designed for seamless integration with PACS/RIS 
systems and supports HL7/DICOM standards. We offer both 
cloud-based and edge-native deployment options."

Q5: What is the pricing model?
A5: "We offer flexible pricing based on annual case volume 
and deployment architecture. Contact us for a custom quote 
tailored to your institution's needs."

Q6: Do you offer training for clinical staff?
A6: "Yes, we provide comprehensive training for radiologists, 
technicians, and clinical staff as part of the deployment process."
```

**Visual Assets:**
- Collapsible accordion panels
- Plus/minus icons that rotate on click
- Subtle hover glow on questions

**GSAP + Lenis Animation Logic:**
```javascript
// FAQ items fade in
gsap.from(".faq-item", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top 70%"
  }
});

// Accordion expand/collapse animation
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    const isOpen = answer.style.maxHeight;
    
    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(a => {
      gsap.to(a, { maxHeight: 0, opacity: 0, duration: 0.3 });
    });
    
    // Toggle current answer
    if (!isOpen) {
      gsap.to(answer, {
        maxHeight: answer.scrollHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  });
});

// Icon rotation
gsap.to(".faq-icon", {
  rotation: 45,
  duration: 0.3,
  ease: "power2.out"
});
```

---

### Section 04: Alternative Contact Methods

**Layout:**
- Three-column grid (Email / Schedule Call / LinkedIn)
- Glassmorphic cards with icons

**Content:**
```
Headline: Prefer Another Way to Reach Us?

Option 01: Direct Email
Icon: [Email icon]
Description: "Send us an email and we'll respond within 24 hours."
CTA: [[email protected]](mailto:[email protected])

Option 02: Schedule a Call
Icon: [Calendar icon]
Description: "Book a 30-minute call with our team at a time 
that works for you."
CTA: Schedule Now [Calendly link]

Option 03: Connect on LinkedIn
Icon: [LinkedIn icon]
Description: "Follow our company updates and reach out via LinkedIn."
CTA: Follow Us
```

**Visual Assets:**
- Icon illustrations (minimal line art)
- Hover glow effect on cards
- Animated connecting lines between cards

**GSAP + Lenis Animation Logic:**
```javascript
// Alternative contact cards scale in
gsap.from(".alt-contact-card", {
  scale: 0.9,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".alt-contact-section",
    start: "top 70%"
  }
});

// Icons pulse on hover
document.querySelectorAll('.alt-contact-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card.querySelector('.icon'), {
      scale: 1.15,
      duration: 0.4,
      ease: "back.out(1.7)"
    });
  });
});
```

---

### Section 05: Global Reach Map

**Layout:**
- Interactive world map showing Avyuct's presence
- Pins for: HQ (Virginia), Innovation Hub (Dubai), Partner Institutions

**Content:**
```
Headline: Global Reach, Local Expertise

Map Pins:
- Herndon, VA (HQ)
- Dubai, UAE (Innovation Hub)
- [Partner institutions - TBD]

Supporting Text:
"Avyuct AI Labs serves hospitals and medical institutions 
across North America, Europe, Middle East, and Asia. 
Our global network ensures rapid support and regional expertise."
```

**Visual Assets:**
- Interactive map with pulsing location pins
- Connecting lines showing network
- Hover tooltips on pins showing location details

**GSAP + Lenis Animation Logic:**
```javascript
// Map reveals with zoom effect
gsap.from(".world-map", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".map-section",
    start: "top 60%"
  }
});

// Pins drop in sequentially
gsap.from(".map-pin", {
  y: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".world-map",
    start: "top 60%"
  }
});

// Connection lines draw
gsap.from(".connection-path", {
  strokeDashoffset: 500,
  duration: 2,
  stagger: 0.3,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".world-map",
    start: "top 50%"
  }
});

// Pins pulse continuously
gsap.to(".map-pin", {
  scale: 1.2,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  ease: "sine.inOut"
});
```

---

### Section 06: Newsletter Signup

**Layout:**
- Compact inline form within a glassmorphic container
- Single-line email input + subscribe button

**Content:**
```
Headline: Stay Updated
Subheadline: Get the latest news on AI-powered stroke detection 
              and vascular intelligence

Form:
- Email input (required)
- Subscribe button
- Privacy note: "We respect your privacy. Unsubscribe anytime."
```

**Visual Assets:**
- Minimal form design
- Blue gradient accent on focus
- Success message animation on submission

**GSAP + Lenis Animation Logic:**
```javascript
// Newsletter section slides up
gsap.from(".newsletter-section", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".newsletter-section",
    start: "top 80%"
  }
});

// Success animation on form submission
function showSuccess() {
  gsap.to(".newsletter-form", { scale: 0.95, opacity: 0, duration: 0.3 });
  gsap.from(".success-message", { scale: 0, opacity: 0, duration: 0.5, delay: 0.3 });
}
```

---

## Animation & Interaction Logic — Global System

### Lenis Smooth Scroll Configuration

```javascript
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
```

### GSAP ScrollTrigger Global Setup

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
```

### Key Animation Patterns

#### 1. Scroll-Triggered Fade-Up (Standard Element Entry)
```javascript
gsap.utils.toArray('.fade-up').forEach(element => {
  gsap.from(element, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
```

#### 2. Pinned Sections with Scrubbed Content Reveal
```javascript
ScrollTrigger.create({
  trigger: ".pinned-section",
  start: "top top",
  end: "+=300%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    // Custom logic based on scroll progress
    const progress = self.progress;
    // Reveal content stages at 0%, 33%, 66% scroll
  }
});
```

#### 3. Parallax Layering (Multi-depth Background Elements)
```javascript
gsap.to(".parallax-layer-1", {
  y: -100,
  scrollTrigger: {
    trigger: ".parallax-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".parallax-layer-2", {
  y: -200,
  scrollTrigger: {
    trigger: ".parallax-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

#### 4. SVG Path Drawing (Medical Vessel Visualization)
```javascript
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".vessel-path", {
  drawSVG: "0%",
  duration: 2.5,
  stagger: 0.15,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".vessel-container",
    start: "top 70%"
  }
});
```

#### 5. Morphing Shapes (AI Detection Overlay Transitions)
```javascript
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

gsap.to(".occlusion-shape", {
  morphSVG: ".detected-shape",
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".detection-demo",
    start: "top center",
    scrub: 1
  }
});
```

#### 6. Counter Animations (Statistics)
```javascript
gsap.from(".stat-number", {
  textContent: 0,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".stat-number",
    start: "top 80%"
  }
});
```

#### 7. Glassmorphism Hover States
```javascript
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 30px 80px rgba(0, 102, 255, 0.3)",
      backdropFilter: "blur(30px)",
      duration: 0.4,
      ease: "power2.out"
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 10px 40px rgba(0, 102, 255, 0.1)",
      backdropFilter: "blur(24px)",
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
```

#### 8. Magnetic Button Effect
```javascript
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  });
});
```

#### 9. Page Transition (Between Routes)
```javascript
function pageTransitionOut() {
  return gsap.to(".page-container", {
    opacity: 0,
    y: -50,
    duration: 0.6,
    ease: "power2.inOut"
  });
}

function pageTransitionIn() {
  return gsap.from(".page-container", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });
}
```

#### 10. Loading State Animations
```javascript
// Logo reveal on page load
gsap.from(".logo", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.2
});

// Navigation items stagger in
gsap.from(".nav-item", {
  y: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  delay: 0.5
});
```

---

## Media & Asset Checklist

### Photography & Imagery

#### Medical/Clinical Assets
- [ ] **Raw CTA Brain Scans** (6-8 different cases)
  - Axial view, high resolution
  - Both LVO (M1) and DMVO (M3) examples
  - DICOM format, anonymized
- [ ] **AI Detection Overlays** (matching above scans)
  - Color-coded vessel segmentation
  - Red/yellow highlights for occlusions
  - PNG with transparency
- [ ] **Before/After Comparison Sets** (4-5 pairs)
  - Side-by-side CTA images
  - Raw vs. AI-enhanced
  - High-resolution (minimum 2000px wide)

#### Technology Visualizations
- [ ] **3D Brain Vessel Model** (WebGL/Three.js asset)
  - Interactive rotation capability
  - Clickable vessel segments (M1, M2, M3, M4)
  - Blue gradient coloring
- [ ] **JEPA Architecture Diagram**
  - Flowchart showing multimodal inputs → model → outputs
  - Editable vector format (SVG/Figma)
  - Animated version (Lottie JSON or GSAP-compatible)
- [ ] **Neural Network Patterns** (background textures)
  - Subtle, abstract
  - Blue/white color scheme
  - Repeating, scalable SVG

#### Company/Location Assets
- [ ] **Office Photos**
  - Herndon, VA headquarters (exterior + interior)
  - Dubai Innovation Hub (exterior + interior)
  - Team working in labs (candid, professional)
  - High resolution (minimum 3000px wide)
- [ ] **Team Headshots** (all key personnel)
  - Professional, consistent lighting
  - Neutral background (or blurred depth-of-field)
  - Square crop (1:1 aspect ratio)
  - Minimum 1500x1500px
- [ ] **Location Maps**
  - World map with location pins (editable SVG)
  - Detailed maps of Virginia and Dubai regions
  - Custom-styled (matching brand colors)

#### Iconography & UI Elements
- [ ] **Custom Icon Set** (minimum 30 icons)
  - Medical: brain, vessel, scan, stethoscope, hospital
  - Technology: AI chip, cloud, edge device, alert
  - Process: data, training, inference, report
  - General: checkmark, arrow, location pin
  - Style: Minimal line art, 2px stroke, blue (#0066FF)
  - Format: SVG, optimized for web
- [ ] **Logo Assets**
  - Primary logo (full color, white version, black version)
  - Icon mark (standalone brain/vessel symbol)
  - Multiple formats: SVG, PNG (transparent), PNG (white bg)

#### Data Visualization Components
- [ ] **Stat Counter Animations**
  - Number animations (counting up)
  - Percentage bars/circles
  - Timeline markers
- [ ] **Workflow Diagram**
  - Isometric or side-view illustration
  - 4 steps: Data → Training → Inference → Insights
  - Animated data flow particles
  - Editable vector (SVG/Figma)
- [ ] **Comparison Charts**
  - Avyuct AI sensitivity vs. standard-of-care
  - Bar charts, line graphs
  - Data visualization library-compatible (Recharts, D3)

### Video Assets

- [ ] **Hero Background Loop** (15-30 seconds)
  - Abstract vessel animation or neural network
  - Subtle, non-distracting
  - Blue color palette
  - 4K resolution, optimized for web (H.264, <5MB)
- [ ] **Product Demo Video** (2-3 minutes)
  - Screen recording: AI detection interface
  - Voiceover explaining workflow
  - Case examples (anonymized)
  - Hosted on Vimeo/YouTube, embedded
- [ ] **Testimonial Videos** (30-60 seconds each)
  - Clinical partners/advisors
  - Professional production quality
  - Closed captions included
- [ ] **Explainer Animation** (90 seconds)
  - "What is DMVO?" educational content
  - Motion graphics, illustrated
  - Voiceover + background music
  - Lottie JSON format for web

### 3D/WebGL Assets

- [ ] **Interactive Brain Model**
  - WebGL-compatible 3D model
  - Vessel tree with highlighted segments
  - Rotation, zoom, click interactions
  - Optimized poly count (<50k polygons)
  - GLTF/GLB format
- [ ] **Particle Systems**
  - Neural network connections (lines + nodes)
  - Data flow particles (pipeline visualization)
  - Floating background elements
  - Shader-based or Three.js/PixiJS

### Illustration & Infographics

- [ ] **Medical Condition Illustrations**
  - Ischemic stroke (LVO and DMVO)
  - Hemorrhagic stroke
  - Coronary artery disease
  - Stylized, not photorealistic
  - Blue gradient color scheme
  - SVG format
- [ ] **Process Diagrams**
  - Clinical workflow (patient → scan → AI → treatment)
  - Data pipeline (ingestion → processing → output)
  - Deployment architecture (scanner → edge → cloud)
  - Editable vector (Figma/Illustrator)
- [ ] **Timeline Graphics**
  - Company milestones (2023-2027)
  - Innovation roadmap
  - Patent filing timeline
  - Horizontal or vertical layout options

### UI Components (Code-Based)

- [ ] **Glassmorphic Card Template**
  - Reusable React/HTML component
  - Backdrop blur, border glow
  - Hover states defined
- [ ] **Interactive Slider (Before/After)**
  - Drag handle for scan comparison
  - Touch-friendly
  - Accessibility features (keyboard navigation)
- [ ] **Accordion FAQ Component**
  - Expand/collapse with smooth animation
  - Icons (plus/minus)
  - ARIA-compliant
- [ ] **Loading Spinners/States**
  - Medical-themed (e.g., pulsing vessel)
  - Blue gradient color
  - SVG animation
- [ ] **Form Components**
  - Input fields (text, email, dropdown, textarea)
  - Validation states (error, success)
  - Glassmorphic styling
  - Accessible (WCAG 2.1 AA)

### Branding Assets

- [ ] **Brand Guidelines Document**
  - Color codes (HEX, RGB, CMYK)
  - Typography specifications (fonts, sizes, weights)
  - Logo usage rules
  - Spacing/layout principles
- [ ] **Social Media Graphics**
  - LinkedIn banner (1584x396px)
  - Twitter/X header (1500x500px)
  - Facebook cover (1200x630px)
  - OG image for website (1200x630px)
  - Profile picture (square, 500x500px)

### Accessibility Assets

- [ ] **Alt Text Document**
  - Descriptions for all images
  - Context for screen readers
- [ ] **Closed Captions/Transcripts**
  - For all video content
  - SRT/VTT files
- [ ] **Keyboard Navigation Map**
  - Tab order documentation
  - Focus states defined

### Performance-Optimized Versions

- [ ] **Responsive Image Sets**
  - Hero images: 3 sizes (mobile 800px, tablet 1400px, desktop 2400px)
  - Component images: 2 sizes (mobile 600px, desktop 1200px)
  - WebP format with PNG/JPG fallbacks
- [ ] **Lazy-Loaded Assets**
  - Below-the-fold images
  - Video posters (first frame thumbnail)
- [ ] **Minified/Compressed Files**
  - SVG optimization (SVGO)
  - PNG compression (TinyPNG)
  - Video transcoding (multiple bitrates)

---

## Technical Implementation Notes

### Tech Stack Recommendation

**Frontend Framework:** Next.js 14+ (React)
- Server-side rendering for SEO
- Image optimization built-in
- Route-based code splitting

**Styling:** Tailwind CSS + Custom CSS for glassmorphism
- Utility-first approach
- Custom design tokens for brand colors

**Animation Libraries:**
- GSAP 3.12+ (GreenSock) with ScrollTrigger, DrawSVG, MorphSVG plugins
- Lenis v1.0+ for smooth scrolling
- Framer Motion (optional, for page transitions)

**3D/WebGL:** Three.js or React Three Fiber
- Interactive vessel visualizations
- Particle systems

**Forms:** React Hook Form + Zod validation
- Type-safe form handling
- Error state management

**Analytics:** Google Analytics 4 + Hotjar
- User behavior tracking
- Conversion funnel analysis

### Performance Targets

- **First Contentful Paint (FCP):** <1.5 seconds
- **Largest Contentful Paint (LCP):** <2.5 seconds
- **Cumulative Layout Shift (CLS):** <0.1
- **Time to Interactive (TTI):** <3.5 seconds
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome for Android

### Accessibility Standards

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility (tested with NVDA/JAWS)
- Color contrast ratios: 4.5:1 (normal text), 3:1 (large text)
- Focus indicators on all interactive elements
- Reduced motion support (prefers-reduced-motion media query)

### SEO Optimization

- Semantic HTML structure
- Open Graph meta tags for social sharing
- Schema.org markup (Organization, MedicalBusiness)
- XML sitemap
- Robots.txt
- Canonical URLs
- Page titles optimized for keywords:
  - Home: "Avyuct AI Labs | AI-Powered Stroke Detection | Distal Vessel Occlusion"
  - Solutions: "AI Stroke Detection Technology | LVO & DMVO | Avyuct"
  - About: "About Avyuct AI Labs | Autonomous Medical Intelligence"
  - Contact: "Contact Avyuct | Request a Demo | AI Stroke Detection"

---

## Content Strategy & Messaging Framework

### Primary Messaging Pillars

**Pillar 1: The Problem (The Hidden Stroke)**
- 25% of strokes are missed by standard imaging
- 1.9M neurons die every 60 seconds without treatment
- Distal occlusions are invisible to the human eye
- **Emotional Hook:** "The stroke no one sees coming"

**Pillar 2: The Solution (AI That Sees Further)**
- 86% sensitivity for distal vessel occlusions
- <30 second inference time
- Edge-native deployment (zero latency)
- **Rational Hook:** "Autonomous medical intelligence"

**Pillar 3: The Innovation (Predictive Medicine)**
- JEPA-based world model (UAE sovereign IP)
- Shift from reactive to proactive care
- Multimodal vascular intelligence
- **Aspirational Hook:** "Predicting disease before it strikes"

**Pillar 4: The Trust (Clinical Validation)**
- 5 US patent filings
- NIH StrokeNet partnerships
- HIPAA compliant, FDA clearance pending
- Built in collaboration with clinicians
- **Authority Hook:** "Trusted by medical professionals"

### Tone of Voice Guidelines

**Primary Characteristics:**
1. **Authoritative but Accessible**
   - Clinical precision without medical jargon
   - Explain complex AI in simple terms
   - Example: "AI detects what eyes miss" vs. "Convolutional neural networks identify sub-threshold signals"

2. **Human-Centered, Not Tech-Obsessed**
   - Lead with patient impact, not algorithms
   - "Saving lives" before "86% sensitivity"
   - Stories of clinicians, not just specs

3. **Confident, Not Arrogant**
   - "Pioneering" not "revolutionary"
   - "Unparalleled sensitivity" not "best in the world"
   - Acknowledge limitations (e.g., "FDA clearance pending")

4. **Urgent but Measured**
   - Convey life-or-death stakes without fearmongering
   - "Every 60 seconds, 1.9M neurons die" is powerful; "Stroke will kill you" is not

5. **Global but Grounded**
   - US-UAE dual identity
   - "Global innovation, local impact"
   - Respect for regional healthcare contexts

**Avoid:**
- Overly technical medical terminology without explanation
- AI hype language ("game-changing", "disruptive", "revolutionary")
- Absolute claims without data ("100% accurate", "never misses")
- Sales-y pressure tactics ("Act now", "Limited time")

### Conversion Copywriting Principles

**Primary CTA:** "Request Demo"
- Used consistently across all pages
- Action-oriented, clear outcome
- Variations: "Schedule Demo", "See It in Action"

**Secondary CTAs:**
- "Learn More" (educational content)
- "Contact Sales" (partnership inquiries)
- "Explore Technology" (deep dive)
- "View Case Studies" (social proof)

**CTA Hierarchy:**
- Hero sections: 1 primary + 1 secondary
- Mid-page sections: 1 primary only
- Footer: Multiple options (Demo, Contact, Careers)

**Microcopy Best Practices:**
- Form field placeholders: "[[email protected]](mailto:[email protected])" not "Enter email"
- Error messages: "Please enter a valid email address" not "Error"
- Success states: "Thanks! We'll be in touch within 24 hours" not "Submitted"
- Loading states: "Analyzing your request..." not "Loading..."

---

## Compliance & Legal Considerations

### HIPAA Compliance
- [ ] All patient images must be fully anonymized (no PHI)
- [ ] Terms of Service and Privacy Policy pages required
- [ ] Cookie consent banner (GDPR/CCPA compliant)
- [ ] Data encryption for form submissions (SSL/TLS)

### Medical Device Regulations
- [ ] Disclaimers: "Not intended to replace clinical judgment"
- [ ] Regulatory status clearly stated: "FDA clearance pending"
- [ ] Claims must be substantiated (e.g., "86% sensitivity" backed by data)
- [ ] No off-label marketing

### Intellectual Property
- [ ] All stock images must be licensed (avoid copyright issues)
- [ ] Custom illustrations owned by Avyuct or licensed
- [ ] Third-party logos (partners) used with permission
- [ ] Patent numbers displayed accurately

### Accessibility Legal Requirements
- [ ] ADA Title III compliance (web accessibility)
- [ ] Closed captions for all videos (required by law in some jurisdictions)
- [ ] Alternative text for all images
- [ ] Keyboard navigation support

---

## Appendix: Competitor Landscape Analysis

### Direct Competitors (AI Stroke Detection)
1. **Viz.ai**
   - Focus: LVO detection primarily
   - Strength: FDA cleared, large market presence
   - Weakness: Limited distal detection
   - Differentiation: Avyuct's DMVO specialization

2. **RapidAI**
   - Focus: Stroke triage, aneurysm detection
   - Strength: Comprehensive neuro suite
   - Weakness: Not DMVO-focused
   - Differentiation: Avyuct's edge-native deployment

3. **Aidoc**
   - Focus: Multi-specialty AI (incl. stroke)
   - Strength: Broad imaging portfolio
   - Weakness: Generalist approach
   - Differentiation: Avyuct's neurovascular specialization

### Positioning Against Competitors

**Avyuct's Unique Value Propositions:**
1. **Distal Specialization:** Only AI with proven 86% DMVO sensitivity
2. **Edge-Native Architecture:** Zero-latency vs. cloud-dependent competitors
3. **Predictive Vision:** JEPA world model (future-focused, not just detection)
4. **Dual Innovation Hubs:** US clinical validation + UAE AI sovereignty

**Messaging Differentiators:**
- Competitors: "AI for stroke detection"
- Avyuct: "AI that detects the strokes no one sees coming"

- Competitors: "Fast, accurate AI"
- Avyuct: "Autonomous medical intelligence that surpasses human capability"

---

## Final Notes for Development Team

### Critical Success Factors

1. **Performance is Non-Negotiable**
   - Medical professionals expect instant loading
   - Any lag undermines "zero-latency" positioning
   - Budget: 50% of development time on optimization

2. **Accessibility is Mandatory**
   - Healthcare audience includes diverse users
   - Screen reader compatibility is essential
   - Test with actual assistive technology users

3. **Mobile Experience Matters**
   - 40%+ of initial traffic will be mobile
   - Forms must be thumb-friendly
   - Glassmorphism must render well on mobile (test blur performance)

4. **Animation Should Enhance, Not Distract**
   - Every animation must serve a purpose (guide attention, reveal content)
   - Respect prefers-reduced-motion
   - Provide "Skip animation" option if animations are long (>5 seconds)

5. **Content is King**
   - No amount of polish can fix weak messaging
   - Work closely with medical/clinical advisors on accuracy
   - Legal review required for all claims (sensitivity, patents, etc.)

