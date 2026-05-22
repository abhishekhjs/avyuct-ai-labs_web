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
      gsap.from(".wm-callout", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".wm-callout", start: "top 80%" },
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
        <div className="wm-header text-center max-w-3xl mx-auto">
          <p className="label-text mb-4">NEUROVASCULAR WORLD MODEL</p>
          <h2 className="heading-lg">
            The Future of{" "}
            <span className="text-gradient">Predictive Medicine</span>
          </h2>
          <p className="body-lg mt-4">
            A foundation AI model trained to map biological normalcy across
            cerebral vasculature — detecting life-threatening anomalies at
            the speed and accuracy no human can consistently match.
          </p>
        </div>

        {/* Stages */}
        <div className="wm-stages grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {STAGES.map((stage) => (
            <div key={stage.num} className="wm-stage">
              <GlassCard>
                <p className="label-text mb-3">STAGE {stage.num}</p>
                <div className="mb-4">{stage.icon}</div>
                <h3 className="heading-sm">{stage.title}</h3>
                <p className="body-md mt-3">{stage.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Arrows between stages (desktop only) */}
        <div className="hidden md:flex justify-center gap-4 -mt-32 mb-16 pointer-events-none">
          <div className="w-1/3 flex justify-end pr-4">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[var(--primary-blue)] opacity-50">
              <path d="M0 10h32M28 4l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="w-1/3 flex justify-end pr-4">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[var(--primary-blue)] opacity-50">
              <path d="M0 10h32M28 4l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* UAE Callout */}
        <div className="wm-callout glass-card p-10 mt-12 max-w-2xl mx-auto text-center" style={{ borderColor: "rgba(0, 102, 255, 0.3)" }}>
          <p className="text-3xl mb-3">🇦🇪</p>
          <h3 className="heading-sm">Sovereign AI Development</h3>
          <p className="body-md mt-3">
            Developed entirely in the Emirates as UAE IP, pioneering Abu
            Dhabi&apos;s shift from reactive triage to proactive predictive care.
          </p>
          <p className="label-text mt-4">NOW BUILDING IN DUBAI</p>
        </div>
      </div>
    </section>
  );
}
