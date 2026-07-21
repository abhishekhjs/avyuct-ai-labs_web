"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChallengeSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ch-header",
        { x: -30, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".ch-col",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 80%" },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden"
      style={{
        background: "#f8fafc",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "2.5rem", alignItems: "center", width: "100%" }}
        >
          {/* Left Column: Heading & Description */}
          <div
            className="ch-header lg:col-span-3 flex flex-col justify-center text-left"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <p
              className="label-text uppercase font-mono font-bold"
              style={{
                color: "var(--avyuct-green)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                marginBottom: "1rem",
              }}
            >
              THE CHALLENGE
            </p>
            <h2
              className="font-serif font-bold text-slate-900 leading-tight"
              style={{
                fontSize: "2.75rem",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                lineHeight: "1.15",
              }}
            >
              The Challenge We&apos;re Solving
            </h2>
            <p
              className="body-md text-slate-600"
              style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
            >
              Standard medical AI triage models frequently miss subtle distal vessel occlusions, leading to delayed interventions when every second counts for brain tissue survival.
            </p>
          </div>

          {/* Right Column: Numbered Cards Grid */}
          <div className="ch-grid lg:col-span-9 grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem", width: "100%" }}>
            {/* Card 1 */}
            <div
              className="ch-col bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                padding: "2.75rem 2.25rem",
                minHeight: "410px",
                borderRadius: "1.25rem",
              }}
            >
              <div>
                <div
                  className="font-extrabold font-mono select-none tracking-tighter"
                  style={{
                    fontSize: "4.5rem",
                    color: "#cbd5e1",
                    marginBottom: "1.25rem",
                    lineHeight: "1",
                  }}
                >
                  01
                </div>
                <h3
                  className="font-bold text-slate-900 font-serif"
                  style={{ fontSize: "1.35rem", marginBottom: "1.25rem" }}
                >
                  Global Crisis
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <span
                      className="font-extrabold text-slate-900 block"
                      style={{ fontSize: "1.75rem", marginBottom: "0.35rem", lineHeight: "1.2" }}
                    >
                      12M+
                    </span>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                      new strokes per year worldwide — the #2 cause of death globally.
                    </p>
                  </div>
                  <div style={{ paddingTop: "1rem", borderTop: "1px solid #f1f5f9" }}>
                    <span
                      className="font-bold text-slate-900 block"
                      style={{ fontSize: "1.35rem", marginBottom: "0.35rem", lineHeight: "1.2" }}
                    >
                      1.9M
                    </span>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                      neurons die every 60 seconds without immediate treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="ch-col bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                padding: "2.75rem 2.25rem",
                minHeight: "410px",
                borderRadius: "1.25rem",
              }}
            >
              <div>
                <div
                  className="font-extrabold font-mono select-none tracking-tighter"
                  style={{
                    fontSize: "4.5rem",
                    color: "#cbd5e1",
                    marginBottom: "1.25rem",
                    lineHeight: "1",
                  }}
                >
                  02
                </div>
                <h3
                  className="font-bold text-slate-900 font-serif"
                  style={{ fontSize: "1.35rem", marginBottom: "1.25rem" }}
                >
                  The Detection Gap
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <span
                      className="font-extrabold text-slate-900 block"
                      style={{ fontSize: "1.75rem", marginBottom: "0.35rem", lineHeight: "1.2" }}
                    >
                      25%
                    </span>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                      of strokes are distal vessel occlusions (DMVO) frequently missed.
                    </p>
                  </div>
                  <div style={{ paddingTop: "1rem", borderTop: "1px solid #f1f5f9" }}>
                    <span
                      className="font-bold text-slate-900 block"
                      style={{ fontSize: "1.35rem", marginBottom: "0.35rem", lineHeight: "1.2" }}
                    >
                      40%+
                    </span>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                      of DMVO cases missed by unaided emergency radiologists.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="ch-col bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                padding: "2.75rem 2.25rem",
                minHeight: "410px",
                borderRadius: "1.25rem",
              }}
            >
              <div>
                <div
                  className="font-extrabold font-mono select-none tracking-tighter"
                  style={{
                    fontSize: "4.5rem",
                    color: "#cbd5e1",
                    marginBottom: "1.25rem",
                    lineHeight: "1",
                  }}
                >
                  03
                </div>
                <h3
                  className="font-bold text-slate-900 font-serif"
                  style={{ fontSize: "1.35rem", marginBottom: "1rem" }}
                >
                  UAE Focus
                </h3>
                
                {/* Clean UAE Badge */}
                <div
                  className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="rounded-xs shrink-0">
                    <rect width="4" height="12" fill="#FF0000"/>
                    <rect x="4" width="12" height="4" fill="#007A3D"/>
                    <rect x="4" y="4" width="12" height="4" fill="#FFFFFF"/>
                    <rect x="4" y="8" width="12" height="4" fill="#000000"/>
                  </svg>
                  <span>UAE Regional Focus</span>
                </div>

                <div>
                  <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                    In the UAE, strokes strike a decade earlier than global averages. Standard AI misses critical distal vessel occlusions, putting younger lives at risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





