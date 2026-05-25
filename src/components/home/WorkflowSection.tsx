"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { WORKFLOW_STEPS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEP_ICONS: Record<string, React.ReactNode> = {
  data: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="8" rx="10" ry="4" />
      <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" />
      <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" />
    </svg>
  ),
  training: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8c2 2 3.5 5 3.5 8s-1.5 6-3.5 8c-2-2-3.5-5-3.5-8s1.5-6 3.5-8z" />
      <path d="M8 12h16M8 20h16" opacity="0.5" />
    </svg>
  ),
  inference: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4l-4 12h8L14 28" strokeWidth="2" />
    </svg>
  ),
  insight: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 28h24" />
      <path d="M8 28V18" strokeWidth="3" opacity="0.3" />
      <path d="M14 28V14" strokeWidth="3" opacity="0.5" />
      <path d="M20 28V10" strokeWidth="3" opacity="0.7" />
      <path d="M26 28V6" strokeWidth="3" />
      <circle cx="26" cy="6" r="2" fill="var(--primary-blue)" />
    </svg>
  ),
};

export default function WorkflowSection() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".workflow-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });

      gsap.from(".workflow-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
      });
    },
    { scope: container }
  );

  const CARD_COLORS = [
    "linear-gradient(135deg, #F59E0B, #D97706)", // Yellow/Orange
    "linear-gradient(135deg, #EF4444, #B91C1C)", // Red
    "linear-gradient(135deg, #14B8A6, #0F766E)", // Teal
    "linear-gradient(135deg, #3B82F6, #1D4ED8)", // Blue
  ];

  return (
    <section ref={container} className="section-padding relative overflow-hidden min-h-screen flex items-center justify-center" style={{ background: "var(--deep-navy)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mx-auto max-w-[1600px] relative z-10 flex flex-col items-center">
        {/* Header centered */}
        <div className="workflow-header w-full flex flex-col items-center text-center max-w-3xl mx-auto" style={{ marginBottom: "5rem" }}>
          <p className="label-text mb-4 tracking-widest text-neutral-400 text-center">OUR WORKFLOW</p>
          <h2 className="heading-lg leading-tight text-center">Data to Insight in Seconds</h2>
          <p className="body-lg mt-6 text-neutral-300 leading-relaxed text-center mx-auto max-w-xl">
            Our seamless integration ensures you never have to change your existing clinical workflow.
          </p>
        </div>

        {/* 4-Card Horizontal Layout */}
        <div className="w-full relative py-10" ref={trackRef}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 premium-gap">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="workflow-card w-full">
                <GlassCard hover className="h-full flex flex-col premium-card-padding items-center justify-center text-center">
                  <div className="mb-6 flex justify-center shrink-0">
                    {STEP_ICONS[step.icon]}
                  </div>
                  <h3 className="heading-sm text-center">{step.title}</h3>
                  <p className="body-lg mt-4 text-neutral-300 text-center">{step.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
