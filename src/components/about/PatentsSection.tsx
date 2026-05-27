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
    <section ref={container} className="section-padding relative overflow-hidden" style={{ background: "var(--deep-navy)", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="pat-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 6rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text" style={{ marginBottom: "1.5rem", textAlign: "center" }}>INTELLECTUAL PROPERTY</p>
          <h2 className="heading-lg" style={{ textAlign: "center" }}>Protected Innovation</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem" }}>
          <div className="pat-grid grid grid-cols-2" style={{ gap: "1.5rem" }}>
            {PATENTS.map((p) => (
              <div key={p.title} className="pat-card glass-card" style={{ padding: "2.5rem 2rem", borderRadius: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h4 className="heading-sm" style={{ marginBottom: "0.5rem" }}>{p.title}</h4>
                <p className="body-md text-sm" style={{ color: "var(--neutral-300)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="glass-card" style={{ padding: "3rem", borderRadius: "1.5rem" }}>
            <div className="pat-timeline space-y-6">
              <h3 className="heading-sm" style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Innovation Timeline</h3>
              {MILESTONES.map((ms, i) => (
                <div key={i} className="pat-milestone flex items-start" style={{ gap: "1rem" }}>
                  <div className="w-3 h-3 rounded-full bg-[var(--primary-blue)] mt-1 shrink-0" />
                  <div>
                    <p className="mono-text font-semibold text-sm" style={{ color: "var(--primary-blue)", marginBottom: "0.25rem" }}>{ms.year}</p>
                    <p className="body-md text-base">{ms.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "3rem" }} className="space-y-4">
              <h4 className="heading-sm text-sm" style={{ marginBottom: "1rem" }}>Regulatory Status</h4>
              {REGULATORY.map((r) => (
                <div key={r.label} className="flex items-center" style={{ gap: "0.75rem" }}>
                  <span style={{ color: r.color }} className="text-xl">{r.icon}</span>
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
