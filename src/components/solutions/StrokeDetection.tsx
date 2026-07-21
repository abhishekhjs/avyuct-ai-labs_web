"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STROKE_TABS } from "@/lib/constants";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StrokeDetection() {
  const container = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("dmvo");

  useGSAP(
    () => {
      gsap.from(".stroke-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: ".stroke-header", start: "top 85%", once: true },
        clearProps: "transform,opacity",
      });

      gsap.from(".stroke-card-wrapper", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: ".stroke-cards-grid", start: "top 85%", once: true },
        clearProps: "transform,opacity",
      });
    },
    { scope: container }
  );

  const activeData = STROKE_TABS.find((t) => t.id === activeTab) ?? STROKE_TABS[1];

  return (
    <section 
      ref={container} 
      id="stroke-detection" 
      style={{
        position: "relative",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        overflow: "hidden"
      }}
    >
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-dots pointer-events-none" style={{ opacity: 0.25 }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Section Header */}
        <div className="stroke-header" style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", textAlign: "center", marginBottom: "4rem" }}>
          <span 
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#0e685f",
              backgroundColor: "rgba(14, 104, 95, 0.1)",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              marginBottom: "1rem",
              border: "1px solid rgba(14, 104, 95, 0.2)"
            }}
          >
            STROKE DETECTION SUITE
          </span>
          <h2 
            className="font-serif" 
            style={{
              fontSize: "2.75rem",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              marginTop: "0.5rem",
              marginBottom: "1rem"
            }}
          >
            Detecting &amp; Localizing Strokes Across All Vessel Segments
          </h2>
          <p 
            style={{
              fontSize: "1.125rem",
              color: "#475569",
              lineHeight: 1.6,
              maxWidth: "42rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Comprehensive vascular AI triage covering proximal LVO, distal M3 (DMVO), and hemorrhagic stroke detection.
          </p>
        </div>

        {/* 3-Card Suite Grid */}
        <div 
          className="stroke-cards-grid" 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch",
            maxWidth: "72rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "6rem"
          }}
        >
          {/* Card 1: LVO Detection */}
          <div 
            className="stroke-card-wrapper"
            onClick={() => setActiveTab("lvo")}
            style={{
              cursor: "pointer",
              transition: "all 300ms ease-in-out",
              display: "flex",
              flexDirection: "column",
              borderRadius: "2.25rem",
              backgroundColor: "#ffffff",
              border: activeTab === "lvo" ? "2px solid #0e685f" : "1px solid rgba(226, 232, 240, 0.9)",
              boxShadow: activeTab === "lvo" ? "0 20px 40px -15px rgba(14, 104, 95, 0.25)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
              padding: "2.75rem 2.25rem",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <span 
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#475569",
                    textTransform: "uppercase",
                    backgroundColor: "#f1f5f9",
                    padding: "0.375rem 1rem",
                    borderRadius: "9999px",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  LVO DETECTION · M1
                </span>
                <h3 
                  className="font-serif" 
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginTop: "1.25rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  Critical Emergency
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Proximal Large Vessel Occlusion</p>
              </div>

              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.75rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "#334155", fontWeight: 500, listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Detection time:</strong> &lt; 30 seconds</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Sensitivity:</strong> 94%</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Integration:</strong> PACS / RIS compatible</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Scope:</strong> Proximal M1, ICA, Basilar</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              style={{
                marginTop: "2.5rem",
                width: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms ease",
                backgroundColor: activeTab === "lvo" ? "#0e685f" : "#f1f5f9",
                color: activeTab === "lvo" ? "#ffffff" : "#1e293b",
                boxShadow: activeTab === "lvo" ? "0 10px 20px -5px rgba(14, 104, 95, 0.4)" : "none"
              }}
            >
              {activeTab === "lvo" ? "Selected Module" : "Inspect LVO Triage"}
            </button>
          </div>

          {/* Card 2: DMVO Detection (Featured Middle Card) */}
          <div 
            className="stroke-card-wrapper"
            onClick={() => setActiveTab("dmvo")}
            style={{
              cursor: "pointer",
              transition: "all 300ms ease-in-out",
              display: "flex",
              flexDirection: "column",
              borderRadius: "2.25rem",
              backgroundColor: "#ffffff",
              border: "2px solid #0e685f",
              boxShadow: "0 25px 50px -12px rgba(14, 104, 95, 0.25)",
              position: "relative",
              zIndex: 10,
              overflow: "hidden",
              justifyContent: "space-between",
              transform: activeTab === "dmvo" ? "translateY(-0.75rem)" : "none"
            }}
          >
            {/* Top Pill Banner */}
            <div 
              style={{
                backgroundColor: "#0e685f",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              PRIMARY CLINICAL FOCUS
            </div>

            <div style={{ padding: "2.75rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <h3 
                    className="font-serif" 
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    M3 Segment
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "#0e685f", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    The Hidden Distal Stroke
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.75rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "#334155", fontWeight: 500, listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                      <span><strong>Sensitivity:</strong> 86% (vs. 60% unaided)</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                      <span><strong>Coverage:</strong> 25% of all stroke cases</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                      <span><strong>Vessels:</strong> Distal M2, M3 segments</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                      <span><strong>Neural Model:</strong> JEPA Causal AI</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button 
                style={{
                  marginTop: "2.5rem",
                  width: "100%",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 300ms ease",
                  backgroundColor: activeTab === "dmvo" ? "#0f172a" : "#0e685f",
                  color: "#ffffff",
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.4)"
                }}
              >
                {activeTab === "dmvo" ? "Active Primary Focus" : "Inspect DMVO Triage"}
              </button>
            </div>
          </div>

          {/* Card 3: Hemorrhagic Stroke */}
          <div 
            className="stroke-card-wrapper"
            onClick={() => setActiveTab("hemorrhagic")}
            style={{
              cursor: "pointer",
              transition: "all 300ms ease-in-out",
              display: "flex",
              flexDirection: "column",
              borderRadius: "2.25rem",
              backgroundColor: "#ffffff",
              border: activeTab === "hemorrhagic" ? "2px solid #0e685f" : "1px solid rgba(226, 232, 240, 0.9)",
              boxShadow: activeTab === "hemorrhagic" ? "0 20px 40px -15px rgba(14, 104, 95, 0.25)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
              padding: "2.75rem 2.25rem",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <span 
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#92400e",
                    textTransform: "uppercase",
                    backgroundColor: "#fffbeb",
                    padding: "0.375rem 1rem",
                    borderRadius: "9999px",
                    border: "1px solid #fde68a"
                  }}
                >
                  IN DEVELOPMENT · Q3 2026
                </span>
                <h3 
                  className="font-serif" 
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginTop: "1.25rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  Brain Bleeds
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Hemorrhagic Stroke AI</p>
              </div>

              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.75rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "#334155", fontWeight: 500, listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#f59e0b", flexShrink: 0 }} />
                    <span><strong>Status:</strong> Internal Validation</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Expected Launch:</strong> Q3 2026</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Modality:</strong> Non-contrast CT (NCCT)</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#0e685f", flexShrink: 0 }} />
                    <span><strong>Analysis:</strong> Bleed volume estimation</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              style={{
                marginTop: "2.5rem",
                width: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms ease",
                backgroundColor: activeTab === "hemorrhagic" ? "#0e685f" : "#f1f5f9",
                color: activeTab === "hemorrhagic" ? "#ffffff" : "#1e293b",
                boxShadow: activeTab === "hemorrhagic" ? "0 10px 20px -5px rgba(14, 104, 95, 0.4)" : "none"
              }}
            >
              {activeTab === "hemorrhagic" ? "Selected Module" : "View Pipeline"}
            </button>
          </div>
        </div>

        {/* Interactive Before & After Triage Viewer Showcase */}
        <div 
          style={{
            maxWidth: "46rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3rem",
            backgroundColor: "#020617",
            borderRadius: "1.75rem",
            padding: "1.5rem 1.75rem",
            border: "1px solid #1e293b",
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
            color: "#ffffff"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid #1e293b", flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.25rem" }}>
                <span className="animate-pulse" style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#34d399" }} />
                <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", color: "#34d399", textTransform: "uppercase" }}>
                  LIVE TRIAGE INTERACTIVE INSPECTION
                </span>
              </div>
              <h4 className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {activeData.headline}
              </h4>
            </div>

            {/* Quick Switcher inside monitor header */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", backgroundColor: "#0f172a", padding: "0.25rem", borderRadius: "9999px", border: "1px solid #1e293b" }}>
              {STROKE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "0.375rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    transition: "all 200ms ease",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: activeTab === tab.id ? "#0e685f" : "transparent",
                    color: activeTab === tab.id ? "#ffffff" : "#94a3b8"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ width: "100%", borderRadius: "0.875rem", overflow: "hidden", border: "1px solid #1e293b" }}>
            {"isComingSoon" in activeData && activeData.isComingSoon ? (
              <div style={{ aspectRatio: "16/9", backgroundColor: "#0f172a", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #1e293b" }}>
                <div style={{ textAlign: "center", padding: "1.5rem" }}>
                  <div style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.65rem", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#fcd34d", border: "1px solid rgba(245, 158, 11, 0.3)", marginBottom: "0.75rem" }}>
                    Pipeline In Development (Q3 2026)
                  </div>
                  <h5 className="font-serif" style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.375rem" }}>Hemorrhagic Stroke Module</h5>
                  <p style={{ fontSize: "0.8rem", color: "#94a3b8", maxWidth: "24rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
                    Algorithms for NCCT brain hemorrhage identification are currently undergoing internal validation.
                  </p>
                </div>
              </div>
            ) : (
              <BeforeAfterSlider
                beforeImage={activeTab === "lvo" ? "/lvo before.png" : "/dmvo before.png"}
                afterImage={activeTab === "lvo" ? "/lvo after.png" : "/dmvo after.png"}
                className="max-h-[360px] aspect-[16/9] object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
