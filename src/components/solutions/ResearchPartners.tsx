"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MILESTONES } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const METRICS = [
  { value: "86%", label: "DMVO Detection Sensitivity" },
  { value: "94%", label: "LVO Detection Sensitivity" },
  { value: "<2%", label: "False Positive Rate" },
  { value: "5", label: "US Patent Filings" },
];

export default function ResearchPartners() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".rp-header", {
        y: 60, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: ".rp-header", start: "top 80%" },
      });
      gsap.from(".metric-card", {
        scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".metrics-grid", start: "top 75%" },
      });
      gsap.from(".milestone-item", {
        x: 40, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power4.out",
        scrollTrigger: { trigger: ".milestone-list", start: "top 75%" },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="validation" className="section-padding relative overflow-hidden" style={{ background: "var(--deep-navy)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="rp-header w-full" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto" }}>
          <p className="label-text" style={{ marginBottom: "1rem", textAlign: "center", width: "100%" }}>CLINICAL VALIDATION</p>
          <h2 className="heading-lg" style={{ textAlign: "center", width: "100%" }}>Institutional Validation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 premium-gap-xl" style={{ marginTop: "5rem" }}>
          {/* Metrics */}
          <div className="metrics-grid grid grid-cols-2" style={{ gap: "1.5rem" }}>
            {METRICS.map((m) => (
              <div key={m.label} className="metric-card glass-card text-center" style={{ padding: "2rem" }}>
                <p className="text-3xl md:text-4xl font-black text-gradient">{m.value}</p>
                <p className="body-md text-sm" style={{ marginTop: "0.5rem" }}>{m.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="milestone-list">
            <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>Milestone Timeline</h3>
            <div className="flex flex-col" style={{ gap: "1rem" }}>
              {MILESTONES.map((ms, i) => (
                <div key={i} className="milestone-item flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[var(--primary-blue)] shrink-0 mt-1" />
                    {i < MILESTONES.length - 1 && (
                      <div className="w-px h-8 bg-[var(--glass-border)]" />
                    )}
                  </div>
                  <div>
                    <p className="mono-text font-semibold">{ms.year}</p>
                    <p className="body-md text-sm">{ms.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
