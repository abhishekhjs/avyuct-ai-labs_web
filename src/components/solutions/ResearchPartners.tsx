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
        <div className="rp-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">CLINICAL VALIDATION</p>
          <h2 className="heading-lg">Institutional Validation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          {/* Metrics */}
          <div className="metrics-grid grid grid-cols-2 gap-6">
            {METRICS.map((m) => (
              <div key={m.label} className="metric-card glass-card p-8 text-center">
                <p className="text-3xl md:text-4xl font-black text-gradient">{m.value}</p>
                <p className="body-md mt-2 text-sm">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="milestone-list">
            <h3 className="heading-sm mb-6">Milestone Timeline</h3>
            <div className="space-y-4">
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
