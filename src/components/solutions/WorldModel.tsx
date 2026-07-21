"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlassCard from "@/components/ui/GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGES = [
  {
    num: "01",
    title: "Multimodal Input",
    description: "CT, MRI, ultrasound, and other imaging systems capturing raw data from the human body.",
    gradient: "radial-gradient(circle at 75% 105%, rgba(254, 224, 110, 0.28) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 75%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="28" height="20" rx="3" />
        <path d="M12 28h12M18 24v4" />
        <path d="M10 14l4-4 3 3 5-5 4 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "JEPA Causal Learning",
    description: "Causal representation learning to understand vascular structures, tissue context, and disease patterns beyond pixel matching.",
    gradient: "radial-gradient(circle at 75% 105%, rgba(52, 211, 153, 0.26) 0%, rgba(6, 182, 212, 0.14) 45%, transparent 75%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="13" />
        <circle cx="18" cy="12" r="3" />
        <circle cx="12" cy="22" r="3" />
        <circle cx="24" cy="22" r="3" />
        <path d="M18 15v4M15 21l-1.5-1M21 21l1.5-1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Predictive Output",
    description: "Real-time, actionable, full-body vascular map enabling clinicians to instantly analyze cerebral blood flow.",
    gradient: "radial-gradient(circle at 75% 105%, rgba(129, 140, 248, 0.28) 0%, rgba(59, 130, 246, 0.16) 45%, transparent 75%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28h28" />
        <path d="M8 28V16l5-4 5 6 5-8 5 4v14" />
        <circle cx="28" cy="14" r="3" fill="var(--primary-blue)" opacity="0.3" />
      </svg>
    ),
  },
];

export default function WorldModel() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".wm-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".wm-header", start: "top 80%" },
      });
      gsap.from(".wm-stage", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: ".wm-stages", start: "top 70%" },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="world-model"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--deep-navy)" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-narrow relative z-10">
        <div className="wm-header w-full" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto" }}>
          <p className="label-text" style={{ marginBottom: "1rem", textAlign: "center", width: "100%" }}>NEUROVASCULAR WORLD MODEL</p>
          <h2 className="heading-lg" style={{ textAlign: "center", width: "100%" }}>
            The Future of{" "}
            <span className="text-gradient">Predictive Medicine</span>
          </h2>
          <p className="body-lg premium-mt" style={{ textAlign: "center", width: "100%", maxWidth: "42rem" }}>
            A foundation AI model trained to map biological normalcy across
            cerebral vasculature - detecting and localizing life-threatening anomalies at
            the speed and accuracy no human can consistently match.
          </p>
        </div>

        {/* Stages */}
        <div className="wm-stages grid grid-cols-1 md:grid-cols-3 premium-gap" style={{ marginTop: "5rem" }}>
          {STAGES.map((stage) => (
            <div key={stage.num} className="wm-stage w-full h-full">
              <GlassCard glowColor="transparent" className="group premium-card-padding h-full flex flex-col items-start relative overflow-hidden">
                {/* Unique Ambient Bottom Gradient Texture (Hover only) */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: stage.gradient,
                    zIndex: 0,
                  }}
                />
                <div className="relative z-10 w-full h-full flex flex-col items-start">
                  <p className="label-text" style={{ marginBottom: "1rem" }}>STAGE {stage.num}</p>
                  <div style={{ marginBottom: "1.5rem" }}>{stage.icon}</div>
                  <h3 className="heading-sm">{stage.title}</h3>
                  <p className="body-md premium-mt">{stage.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
