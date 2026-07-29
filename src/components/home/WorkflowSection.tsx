"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { WORKFLOW_STEPS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEP_ICONS: Record<string, React.ReactNode> = {
  data: (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="8" rx="10" ry="4" />
      <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" />
      <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" />
    </svg>
  ),
  training: (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#422006" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8c2 2 3.5 5 3.5 8s-1.5 6-3.5 8c-2-2-3.5-5-3.5-8s1.5-6 3.5-8z" />
      <path d="M8 12h16M8 20h16" opacity="0.5" />
    </svg>
  ),
  inference: (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#083344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4l-4 12h8L14 28" strokeWidth="2.5" />
    </svg>
  ),
  insight: (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#431407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 28h24" />
      <path d="M8 28V18" strokeWidth="3" opacity="0.4" />
      <path d="M14 28V14" strokeWidth="3" opacity="0.6" />
      <path d="M20 28V10" strokeWidth="3" opacity="0.8" />
      <path d="M26 28V6" strokeWidth="3" />
      <circle cx="26" cy="6" r="2.5" fill="#431407" />
    </svg>
  ),
};

const CARD_THEMES = [
  {
    bg: "#eef2ff", // Soft Lavender
    border: "#c7d2fe",
    text: "#1e1b4b",
    badgeBg: "#e0e7ff",
    badgeText: "#3730a3",
    tagline: "Automated Data Ingestion & Preprocessing",
  },
  {
    bg: "#fef9c3", // Soft Warm Cream/Yellow
    border: "#fef08a",
    text: "#422006",
    badgeBg: "#fef08a",
    badgeText: "#854d0e",
    tagline: "JEPA World Model & Deep Neural Training",
  },
  {
    bg: "#e0f2fe", // Soft Cyan/Sky
    border: "#bae6fd",
    text: "#083344",
    badgeBg: "#bae6fd",
    badgeText: "#075985",
    tagline: "Sub-Second Point of Care Inference",
  },
  {
    bg: "#ffedd5", // Soft Peach/Rose
    border: "#fed7aa",
    text: "#431407",
    badgeBg: "#fed7aa",
    badgeText: "#9a3412",
    tagline: "Triage Alerting & Clinical Reporting",
  },
];

export default function WorkflowSection() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".workflow-header",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".workflow-accordion",
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 80%" },
        }
      );
    },
    { scope: container }
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + WORKFLOW_STEPS.length) % WORKFLOW_STEPS.length);
  };

  return (
    <section
      ref={container}
      className="relative overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="relative z-10"
        style={{
          maxWidth: "1280px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header with Navigation Controls on Right - Centered layout */}
        <div
          className="workflow-header"
          style={{
            width: "100%",
            maxWidth: "1150px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            gap: "1.5rem",
          }}
        >
          <div className="max-w-2xl">
            <p
              className="label-text mb-3 tracking-widest text-xs uppercase font-mono font-bold"
              style={{ color: "var(--avyuct-green)" }}
            >
              HOW IT WORKS
            </p>
            <h2 className="heading-lg font-serif font-black text-slate-900 leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Discover How It Works
            </h2>
            <p className="body-md text-slate-600 text-base lg:text-lg mt-3 leading-relaxed">
              Your Guide to Seamless Clinical &amp; Vascular AI Triage
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous step"
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next step"
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Accordion Stack on Desktop / Vertical Accordion on Mobile */}
        <div
          className="workflow-accordion flex flex-col lg:flex-row gap-4 w-full max-w-[1150px] mx-auto h-auto lg:h-[340px] lg:min-h-[340px] justify-center items-stretch"
        >
          {WORKFLOW_STEPS.map((step, index) => {
            const isExpanded = activeIndex === index;
            const theme = CARD_THEMES[index];

            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer w-full lg:w-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isExpanded ? "shadow-xl ring-2 ring-slate-900/10" : "opacity-90 hover:opacity-100 hover:shadow-md"
                }`}
                style={{
                  backgroundColor: theme.bg,
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                  padding: isExpanded ? "1.5rem 1.75rem" : "1.25rem 1.5rem",
                  borderRadius: "1.5rem",
                  flex: isExpanded ? "3.5 1 0%" : "1 1 0%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Top Section: Circled Step Number & Badge */}
                <div className="flex items-center justify-between w-full mb-3 lg:mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-current flex items-center justify-center text-lg lg:text-xl font-bold font-mono shrink-0 shadow-xs"
                      style={{ borderColor: theme.text }}
                    >
                      {step.step}
                    </div>
                    {/* On Mobile when collapsed, show title right next to number */}
                    {!isExpanded && (
                      <h3 className="lg:hidden font-serif font-bold text-lg leading-snug line-clamp-1">
                        {step.title}
                      </h3>
                    )}
                  </div>

                  {isExpanded ? (
                    <span
                      className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wide"
                      style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
                    >
                      Step 0{step.step}
                    </span>
                  ) : (
                    <span className="lg:hidden text-xs font-mono font-bold opacity-60 flex items-center gap-1">
                      Expand ↓
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`font-serif font-bold transition-all duration-300 leading-snug ${
                        isExpanded ? "text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-4" : "hidden lg:block text-xl mb-2"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {isExpanded && (
                      <div className="animate-fadeIn">
                        <p
                          className="font-medium text-xs uppercase tracking-wider mb-2 lg:mb-4 font-mono opacity-80"
                          style={{ color: theme.badgeText }}
                        >
                          {theme.tagline}
                        </p>
                        <p className="text-sm lg:text-lg leading-relaxed opacity-90 max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Icon Graphic at Bottom Right */}
                  <div className={`flex items-end justify-between mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-black/5 ${!isExpanded ? "hidden lg:flex" : "flex"}`}>
                    {isExpanded ? (
                      <div className="text-[0.7rem] lg:text-xs font-bold font-mono uppercase tracking-wider opacity-70">
                        Avyuct AI Pipeline Phase 0{step.step}
                      </div>
                    ) : (
                      <div className="text-xs font-bold font-mono opacity-60">Hover to expand</div>
                    )}
                    <div className="shrink-0 transition-transform duration-300 transform group-hover:scale-110">
                      {STEP_ICONS[step.icon]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

