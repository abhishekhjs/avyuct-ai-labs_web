"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MILESTONES } from "@/lib/constants";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

const PATENTS = [
  { title: "5 US Patent Filings", desc: "AI for medical imaging" },
  { title: "Proprietary DMVO Algorithms", desc: "Expert-adjudicated training" },
  { title: "Edge Architecture", desc: "Zero-latency deployment" },
  { title: "JEPA Model (UAE IP)", desc: "Sovereign predictive AI" },
];

const REGULATORY = [
  { icon: "✓", label: "HIPAA Compliant", color: "var(--accent-green)" },
  { icon: "⏳", label: "FDA 510(k) Clearance", color: "var(--accent-amber)" },
  { icon: "✓", label: "UAE Ministry of Health", color: "var(--accent-green)" },
];

export default function PatentsSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".pat-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".pat-header", start: "top 80%" } });
    gsap.from(".pat-card", { scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".pat-grid", start: "top 75%" } });
    gsap.from(".pat-milestone", { x: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power4.out", scrollTrigger: { trigger: ".pat-timeline", start: "top 75%" } });
  }, { scope: container });

  return (
    <section ref={container} className="section-padding relative overflow-hidden" style={{ background: "var(--deep-navy)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="pat-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">INTELLECTUAL PROPERTY</p>
          <h2 className="heading-lg">Protected Innovation</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="pat-grid grid grid-cols-2 gap-4">
            {PATENTS.map((p) => (
              <div key={p.title} className="pat-card glass-card p-5">
                <h4 className="heading-sm text-sm">{p.title}</h4>
                <p className="body-md text-xs mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="pat-timeline space-y-4">
              <h3 className="heading-sm mb-4">Innovation Timeline</h3>
              {MILESTONES.map((ms, i) => (
                <div key={i} className="pat-milestone flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-blue)] mt-1.5 shrink-0" />
                  <div>
                    <p className="mono-text font-semibold text-xs">{ms.year}</p>
                    <p className="body-md text-sm">{ms.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-2">
              <h4 className="heading-sm text-sm mb-3">Regulatory Status</h4>
              {REGULATORY.map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <span style={{ color: r.color }} className="text-lg">{r.icon}</span>
                  <span className="body-md text-sm">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
