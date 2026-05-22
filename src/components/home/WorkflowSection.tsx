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
        scrollTrigger: { trigger: ".workflow-header", start: "top 80%" },
      });

      // MatchMedia for Desktop Stacked Sequence
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !container.current) return;
        
        const cards = gsap.utils.toArray<HTMLElement>(".workflow-step", trackRef.current);
        if (cards.length < 2) return;

        // Set initial state: all cards except first are hidden and translated down
        gsap.set(cards.slice(1), { opacity: 0, y: 60 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: () => `+=${cards.length * 150}vh`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          
          // Animate previous card out (slide up, fade out)
          tl.to(cards[i - 1], {
            opacity: 0,
            y: -60,
            duration: 1,
            ease: "power2.inOut"
          }, i * 2.5);

          // Animate current card in (slide up from bottom, fade in)
          tl.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
          }, i * 2.5);
        });
      });
      
      // Mobile fallback for cards
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".workflow-step", {
          x: -60,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
        });

        gsap.from(".step-circle", {
          scale: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="section-padding relative overflow-hidden min-h-screen flex items-center" style={{ background: "var(--deep-navy)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Empty left side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
        
        {/* Right side content */}
        <div className="lg:w-1/2 lg:pl-20 flex flex-col justify-center py-24 lg:py-0 overflow-hidden">
          <div className="workflow-header max-w-xl shrink-0 mb-14">
            <p className="label-text mb-4 tracking-widest">OUR WORKFLOW</p>
            <h2 className="heading-lg leading-tight">Data to Insight in Seconds</h2>
            <p className="body-lg mt-8 text-neutral-300 leading-relaxed">
              Our seamless integration ensures you never have to change your existing clinical workflow.
            </p>
          </div>

          {/* Stacked Sequence Wrapper */}
          <div className="w-full">
            <div ref={trackRef} className="relative flex flex-col gap-8 lg:block w-full lg:h-[460px]">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.step} className="workflow-step relative w-full lg:absolute lg:inset-0 pb-12 lg:pb-0">
                  <GlassCard hover={false} padding="premium-card-padding" className="h-full flex flex-col items-center justify-center text-center relative">
                    {/* Number Badge Top Left */}
                    <div
                      className="absolute top-6 left-6 lg:top-8 lg:left-8 step-circle w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                      style={{ background: "var(--primary-blue)" }}
                    >
                      {step.step}
                    </div>

                    <div className="mb-6 flex justify-center w-full">
                      {STEP_ICONS[step.icon]}
                    </div>
                    <h3 className="heading-sm">{step.title}</h3>
                    <p className="body-lg mt-4 text-neutral-300">{step.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
