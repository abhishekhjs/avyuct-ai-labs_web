"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function ChallengeSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".ch-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".ch-header", start: "top 80%" } });
    gsap.from(".ch-col", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".ch-grid", start: "top 75%" } });

  }, { scope: container });

  return (
    <section ref={container} className="section-padding relative" style={{ background: "var(--deep-navy)", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="ch-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 6rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text" style={{ marginBottom: "1.5rem", textAlign: "center" }}>THE CHALLENGE</p>
          <h2 className="heading-lg" style={{ textAlign: "center" }}>The Challenge We&apos;re Solving</h2>
        </div>
        <div className="ch-grid grid grid-cols-1 md:grid-cols-3" style={{ gap: "2.5rem" }}>
          <div className="ch-col glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>Global Crisis</h3>
            <p className="text-3xl font-black text-gradient" style={{ marginBottom: "0.75rem" }}>12M+</p>
            <p className="body-md">new strokes per year worldwide — the #2 cause of death globally.</p>
            <p className="text-2xl font-bold text-gradient" style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>1.9M</p>
            <p className="body-md">neurons die every 60 seconds without treatment.</p>
          </div>
          <div className="ch-col glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>The Detection Gap</h3>
            <p className="text-3xl font-black text-gradient" style={{ marginBottom: "0.75rem" }}>25%</p>
            <p className="body-md">of strokes are distal vessel occlusions (DMVO) frequently missed.</p>
            <p className="text-2xl font-bold text-gradient" style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>40%+</p>
            <p className="body-md">of DMVO cases missed by unaided radiologists.</p>
          </div>
          <div className="ch-col glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="text-3xl" style={{ marginBottom: "1rem" }}>🇦🇪</p>
            <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>UAE Focus</h3>
            <p className="body-md" style={{ lineHeight: "1.8" }}>In the UAE, strokes strike a decade earlier. Yet standard AI misses critical distal vessel occlusions. Younger lives are at stake.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
