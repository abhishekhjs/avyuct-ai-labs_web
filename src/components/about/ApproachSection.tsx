"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StatusBadge from "@/components/ui/StatusBadge";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function ApproachSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".approach-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".approach-header", start: "top 80%" } });
    gsap.from(".phase-card", { y: 60, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".phase-grid", start: "top 75%" } });
    gsap.from(".approach-quote", { y: 40, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".approach-quote", start: "top 85%" } });
  }, { scope: container });

  return (
    <section ref={container} className="section-padding">
      <div className="container-narrow">
        <div className="approach-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 6rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text" style={{ marginBottom: "1.5rem", textAlign: "center" }}>OUR APPROACH</p>
          <h2 className="heading-lg" style={{ textAlign: "center" }}>From Detection to Prediction</h2>
        </div>
        <div className="phase-grid grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem" }}>
          <div className="phase-card glass-card" style={{ borderLeft: "4px solid var(--primary-blue)", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="label-text" style={{ marginBottom: "1.5rem" }}>PHASE 01 · 2023–2025</p>
            <h3 className="heading-md" style={{ marginBottom: "1rem" }}>Emergency Stroke Detection</h3>
            <p className="body-md" style={{ lineHeight: "1.8" }}>Deep learning AI for LVO & DMVO detection with unmatched sensitivity at the point of care.</p>
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <p className="mono-text" style={{ fontSize: "0.875rem", color: "var(--neutral-400)" }}>86% sensitivity · &lt;30s inference · Edge deployment</p>
            </div>
            <div><StatusBadge status="launched" /></div>
          </div>
          <div className="phase-card glass-card" style={{ borderLeft: "4px solid var(--neural-blue)", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="label-text" style={{ marginBottom: "1.5rem" }}>PHASE 02 · 2025–2027</p>
            <h3 className="heading-md" style={{ marginBottom: "1rem" }}>Predictive Vascular Intelligence</h3>
            <p className="body-md" style={{ lineHeight: "1.8" }}>JEPA-based world model for pre-disease prediction — shifting from reactive diagnosis to proactive risk forecasting.</p>
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <p className="mono-text" style={{ fontSize: "0.875rem", color: "var(--neutral-400)" }}>Proactive forecasting · UAE sovereign IP</p>
            </div>
            <div><StatusBadge status="ongoing" /></div>
          </div>
        </div>
        <div className="approach-quote max-w-3xl" style={{ marginTop: "8rem", textAlign: "center", margin: "8rem auto 0 auto", display: "flex", justifyContent: "center" }}>
          <p className="body-lg italic" style={{ color: "var(--neutral-300)", lineHeight: "1.8", fontSize: "1.25rem", textAlign: "center" }}>&ldquo;We&apos;re not just reacting to emergencies — we&apos;re predicting them. The future of medicine is proactive, not reactive.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
