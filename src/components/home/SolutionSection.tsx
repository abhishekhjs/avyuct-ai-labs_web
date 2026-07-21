"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CAPABILITIES } from "@/lib/constants";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------- Inline SVG Feature Icons ---------- */
const ICONS: Record<string, React.ReactNode> = {
  brain: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="var(--avyuct-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6c-3 0-5.5 1.5-7 4-2-.5-4.5.5-5.5 3s0 5 2 6.5c-1 2-.5 4.5 1.5 6s4.5 1.5 6 0c1.5 2.5 4 3.5 6.5 2.5" />
      <path d="M20 6c3 0 5.5 1.5 7 4 2-.5 4.5.5 5.5 3s0 5-2 6.5c1 2 .5 4.5-1.5 6s-4.5 1.5-6 0c-1.5 2.5-4 3.5-6.5 2.5" />
      <path d="M20 6v28" opacity="0.3" />
    </svg>
  ),
  scan: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="var(--avyuct-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="28" height="28" rx="4" />
      <circle cx="20" cy="20" r="6" />
      <path d="M20 14v-4M20 30v-4M14 20h-4M30 20h-4" />
      <circle cx="20" cy="20" r="2" fill="var(--avyuct-green)" />
    </svg>
  ),
  globe: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="var(--avyuct-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="14" />
      <ellipse cx="20" cy="20" rx="6" ry="14" />
      <path d="M6 20h28" />
      <path d="M8 12h24M8 28h24" opacity="0.5" />
    </svg>
  ),
  shield: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="var(--avyuct-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L6 11v9c0 9 6 17 14 18 8-1 14-9 14-18v-9L20 4z" />
      <path d="M14 20l4 4 8-8" strokeWidth="2" />
    </svg>
  ),
};

const cap = (id: string) => CAPABILITIES.find((c) => c.id === id)!;

export default function SolutionSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".solution-header", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });

      gsap.from(".bento-card-wrapper", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: ".solution-staggered-grid", start: "top 75%" },
      });
    },
    { scope: container }
  );

  const dmvo = cap("dmvo");
  const lvo = cap("lvo");
  const screening = cap("screening");

  return (
    <section
      ref={container}
      className="relative overflow-hidden"
      style={{ background: "#18181b", paddingTop: "90px", paddingBottom: "100px" }}
    >
      <div className="container-wide relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- Centered Header ---------- */}
        <div
          className="solution-header text-center flex flex-col items-center"
          style={{ marginBottom: "70px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          <p className="label-text mb-3 tracking-widest text-xs uppercase font-mono font-bold" style={{ color: "var(--avyuct-green)" }}>
            THE SOLUTION
          </p>
          <h2 className="heading-lg leading-tight font-serif" style={{ color: "#ffffff", fontSize: "2.75rem" }}>
            Avyuct AI detects what eyes{" "}
            <span className="text-gradient">miss.</span>
          </h2>
          <p
            className="body-lg mx-auto leading-relaxed"
            style={{ maxWidth: "640px", color: "var(--neutral-400)", textAlign: "center", marginTop: "1.25rem" }}
          >
            Autonomous Medical Intelligence — from emergency triage to population-scale screening.
          </p>
        </div>

        {/* ---------- Staggered 2x2 Bento Grid Layout ---------- */}
        <div
          className="solution-staggered-grid grid grid-cols-1 lg:grid-cols-12 gap-8"
          style={{ display: "grid", gap: "2rem" }}
        >

          {/* ROW 1: Card 1 (Wide Left - 7 cols) */}
          <div className="bento-card-wrapper col-span-12 lg:col-span-7 flex">
            <div
              className="bento-card w-full h-full flex flex-col justify-between"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="bento-card__tag mb-0"
                    style={{
                      background: "#ecfdf5",
                      border: "1px solid #a7f3d0",
                      color: "#047857",
                      fontWeight: 700,
                      padding: "0.375rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                    }}
                  >
                    AI DETECTION &amp; ANALYSIS
                  </div>
                  <span className="text-xs font-mono font-bold" style={{ color: "#64748b" }}>01</span>
                </div>

                <h3 className="heading-sm font-serif" style={{ color: "#0f172a", fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                  {dmvo.title}
                </h3>
                <div className="card-title-underline" />
                <p className="mono-text" style={{ color: "#216935", fontWeight: 700, fontSize: "0.95rem" }}>
                  {dmvo.subtitle}
                </p>
                <p className="body-md mt-3 mb-6" style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {dmvo.description}
                </p>
              </div>

              {/* Interactive Before-After Scan Slider */}
              <div className="relative rounded-2xl overflow-hidden my-4 bg-neutral-950 min-h-[220px]">
                <BeforeAfterSlider
                  beforeLabel="Raw CTA Scan"
                  afterLabel="AI Detection Overlay"
                  className="h-full w-full rounded-2xl overflow-hidden"
                  beforeImage="/dmvo before.png"
                  afterImage="/dmvo after.png"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/#stroke-detection"
                  className="bento-card__link"
                  style={{ color: "#216935", fontWeight: 700 }}
                >
                  Explore DMVO Solution <span aria-hidden="true">→</span>
                </Link>
                <span
                  style={{
                    padding: "8px 18px",
                    borderRadius: "999px",
                    background: "#ecfdf5",
                    color: "#047857",
                    border: "1px solid #a7f3d0",
                    fontSize: "12px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  86% Sensitivity
                </span>
              </div>
            </div>
          </div>

          {/* ROW 1: Card 2 (Narrow Right - 5 cols) */}
          <div className="bento-card-wrapper col-span-12 lg:col-span-5 flex">
            <div
              className="bento-card w-full h-full flex flex-col justify-between"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="bento-card__icon mb-0">{ICONS[lvo.icon]}</div>
                  <span className="text-xs font-mono font-bold" style={{ color: "#64748b" }}>02</span>
                </div>
                <h3 className="heading-sm font-serif" style={{ color: "#0f172a", fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                  {lvo.title}
                </h3>
                <div className="card-title-underline" />
                <p className="mono-text" style={{ color: "#216935", fontWeight: 700, fontSize: "0.95rem" }}>
                  {lvo.subtitle}
                </p>
                <p className="body-md mt-3" style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {lvo.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Inference Triage Time</span>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: "#16a34a", whiteSpace: "nowrap" }}>&lt; 30 seconds</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--avyuct-green)] h-full w-[94%]" />
                </div>
                <div className="flex items-center justify-between gap-4" style={{ fontSize: "12px", color: "#64748b" }}>
                  <span>Standard CTA</span>
                  <span style={{ fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap" }}>94% Diagnostic Accuracy</span>
                </div>
              </div>

              <Link
                href="/#stroke-detection"
                className="bento-card__link mt-auto"
                style={{ color: "#216935", fontWeight: 700 }}
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* ROW 2: Card 3 (Narrow Left - 5 cols) */}
          <div className="bento-card-wrapper col-span-12 lg:col-span-5 flex">
            <div
              className="bento-card w-full h-full flex flex-col justify-between"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="bento-card__icon mb-0">{ICONS[screening.icon]}</div>
                  <span className="text-xs font-mono font-bold" style={{ color: "#64748b" }}>03</span>
                </div>
                <h3 className="heading-sm font-serif" style={{ color: "#0f172a", fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                  {screening.title}
                </h3>
                <div className="card-title-underline" />
                <p className="mono-text" style={{ color: "#216935", fontWeight: 700, fontSize: "0.95rem" }}>
                  {screening.subtitle}
                </p>
                <p className="body-md mt-3" style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {screening.description}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Edge-Native Architecture
                </span>
                <span
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  HIPAA Compliant Local AI
                </span>
                <span
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Universal PACS/DICOM Integration
                </span>
              </div>
            </div>
          </div>

          {/* ROW 2: Card 4 (Wide Right - 7 cols) */}
          <div className="bento-card-wrapper col-span-12 lg:col-span-7 flex">
            <div
              className="bento-card w-full h-full flex flex-col justify-between"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bento-card__icon mb-0">{ICONS.shield}</div>
                    <span className="text-xs font-mono font-bold" style={{ color: "#64748b" }}>04</span>
                  </div>
                  <h3 className="heading-sm font-serif" style={{ color: "#0f172a", fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                    Sub-Threshold Precision &amp; Accuracy
                  </h3>
                  <div className="card-title-underline" />
                  <p className="mono-text" style={{ color: "#216935", fontWeight: 700, fontSize: "0.95rem" }}>
                    Clinical Superiority in Micro-Ischemia
                  </p>
                  <p className="body-md mt-3" style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Proprietary deep neural networks trained on expert-adjudicated distal stroke datasets, delivering unmatched sensitivity where traditional tools fail.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "#ecfdf5",
                      color: "#047857",
                      border: "1px solid #a7f3d0",
                      fontSize: "12px",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    5 U.S. Patents Filed
                  </span>
                  <span
                    style={{
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "#ecfdf5",
                      color: "#047857",
                      border: "1px solid #a7f3d0",
                      fontSize: "12px",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    NIH StrokeNet Partner
                  </span>
                </div>
                <Link
                  href="/#stroke-detection"
                  className="bento-card__link pt-0"
                  style={{ color: "#216935", fontWeight: 700 }}
                >
                  View Validation Data <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
