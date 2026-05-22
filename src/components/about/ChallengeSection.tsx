"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorldMap from "@/components/svg/WorldMap";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function ChallengeSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".ch-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".ch-header", start: "top 80%" } });
    gsap.from(".ch-col", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".ch-grid", start: "top 75%" } });
    gsap.from(".ch-map", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".ch-map", start: "top 80%" } });
  }, { scope: container });

  return (
    <section ref={container} className="section-padding relative" style={{ background: "var(--deep-navy)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="ch-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">THE CHALLENGE</p>
          <h2 className="heading-lg">The Challenge We&apos;re Solving</h2>
        </div>
        <div className="ch-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="ch-col glass-card p-8">
            <h3 className="heading-sm mb-3">Global Crisis</h3>
            <p className="text-3xl font-black text-gradient mb-2">12M+</p>
            <p className="body-md">new strokes per year worldwide — the #2 cause of death globally.</p>
            <p className="text-2xl font-bold text-gradient mt-4 mb-1">1.9M</p>
            <p className="body-md">neurons die every 60 seconds without treatment.</p>
          </div>
          <div className="ch-col glass-card p-8">
            <h3 className="heading-sm mb-3">The Detection Gap</h3>
            <p className="text-3xl font-black text-gradient mb-2">25%</p>
            <p className="body-md">of strokes are distal vessel occlusions (DMVO) frequently missed.</p>
            <p className="text-2xl font-bold text-gradient mt-4 mb-1">40%+</p>
            <p className="body-md">of DMVO cases missed by unaided radiologists.</p>
          </div>
          <div className="ch-col glass-card p-8">
            <p className="text-2xl mb-2">🇦🇪</p>
            <h3 className="heading-sm mb-3">UAE Focus</h3>
            <p className="body-md">In the UAE, strokes strike a decade earlier. Yet standard AI misses critical distal vessel occlusions. Younger lives are at stake.</p>
          </div>
        </div>
        <div className="ch-map mt-16 max-w-4xl mx-auto">
          <WorldMap />
        </div>
      </div>
    </section>
  );
}
