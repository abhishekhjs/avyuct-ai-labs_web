"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParticleField from "@/components/ui/ParticleField";

export default function AboutHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-anim", { y: 60, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out" });
    gsap.from(".about-stat", { scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.4, ease: "power3.out" });
  }, { scope: container });

  return (
    <section ref={container} className="min-h-[80vh] relative overflow-hidden flex items-center" style={{ background: "var(--hero-gradient)", paddingBottom: "4rem", paddingTop: "8rem" }}>
      <ParticleField className="absolute inset-0 z-0" particleCount={25} />
      <div className="container-narrow relative z-10 flex flex-col items-center justify-center" style={{ minHeight: "70vh", paddingTop: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "800px" }}>
          <p className="about-anim label-text" style={{ marginBottom: "1rem" }}>ABOUT US</p>
          <h1 className="about-anim heading-xl">Autonomous Medical <span className="text-gradient">Intelligence</span></h1>
          <div className="about-anim flex flex-wrap justify-center" style={{ gap: "1rem", marginTop: "1.5rem" }}>
            <span className="glass-card rounded-full text-sm" style={{ padding: "0.5rem 1.25rem", border: "1px solid rgba(0, 102, 255, 0.3)" }}>🇦🇪 Dubai, UAE</span>
          </div>
          <div className="about-anim flex flex-col items-center" style={{ marginTop: "3rem", gap: "1.5rem" }}>
            <blockquote 
              className="body-lg italic relative" 
              style={{ 
                fontWeight: 600, 
                color: "var(--primary-blue)",
                padding: "1.25rem 2rem",
                background: "linear-gradient(90deg, transparent 0%, rgba(0, 102, 255, 0.08) 50%, transparent 100%)",
                borderRadius: "0.75rem",
                width: "100%"
              }}
            >
              "Because a stroke that goes unseen is a life that goes unsaved."
            </blockquote>
            <p className="body-lg">
              We are Avyuct AI Labs, a vascular AI company based in Dubai. We have built an AI-Native DMVO solution to detect and localize these distal clots, enabling clinicians to identify challenging stroke cases faster and with greater confidence. Our product is validated by 10+ expert neuroradiologists and backed by 5 US patents.
            </p>
            <p className="body-lg">
              We are now initiating hospital pilots in the UAE, and in October we release our Neurovascular World Model - the first predictive vascular AI built natively in the UAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
