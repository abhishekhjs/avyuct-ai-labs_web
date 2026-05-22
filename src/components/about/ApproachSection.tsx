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
        <div className="approach-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">OUR APPROACH</p>
          <h2 className="heading-lg">From Detection to Prediction</h2>
        </div>
        <div className="phase-grid grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div className="phase-card glass-card p-10" style={{ borderLeft: "4px solid var(--primary-blue)" }}>
            <p className="label-text mb-2">PHASE 01 · 2023–2025</p>
            <h3 className="heading-md">Emergency Stroke Detection</h3>
            <p className="body-md mt-3">Deep learning AI for LVO & DMVO detection with unmatched sensitivity at the point of care.</p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="mono-text">86% sensitivity · &lt;30s inference · Edge deployment</p>
            </div>
            <div className="mt-4"><StatusBadge status="launched" /></div>
          </div>
          <div className="phase-card glass-card p-10" style={{ borderLeft: "4px solid var(--neural-blue)" }}>
            <p className="label-text mb-2">PHASE 02 · 2025–2027</p>
            <h3 className="heading-md">Predictive Vascular Intelligence</h3>
            <p className="body-md mt-3">JEPA-based world model for pre-disease prediction — shifting from reactive diagnosis to proactive risk forecasting.</p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="mono-text">Proactive forecasting · UAE sovereign IP</p>
            </div>
            <div className="mt-4"><StatusBadge status="ongoing" /></div>
          </div>
        </div>
        <div className="approach-quote mt-16 text-center max-w-2xl mx-auto">
          <p className="body-lg italic text-neutral-300">&ldquo;We&apos;re not just reacting to emergencies — we&apos;re predicting them. The future of medicine is proactive, not reactive.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
