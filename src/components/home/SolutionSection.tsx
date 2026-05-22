"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CAPABILITIES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS: Record<string, React.ReactNode> = {
  brain: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6c-3 0-5.5 1.5-7 4-2-.5-4.5.5-5.5 3s0 5 2 6.5c-1 2-.5 4.5 1.5 6s4.5 1.5 6 0c1.5 2.5 4 3.5 6.5 2.5" />
      <path d="M20 6c3 0 5.5 1.5 7 4 2-.5 4.5.5 5.5 3s0 5-2 6.5c1 2 .5 4.5-1.5 6s-4.5 1.5-6 0c-1.5 2.5-4 3.5-6.5 2.5" />
      <path d="M20 6v28" opacity="0.3" />
    </svg>
  ),
  scan: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="28" height="28" rx="4" />
      <circle cx="20" cy="20" r="6" />
      <path d="M20 14v-4M20 30v-4M14 20h-4M30 20h-4" />
      <circle cx="20" cy="20" r="2" fill="var(--primary-blue)" />
    </svg>
  ),
  globe: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="14" />
      <ellipse cx="20" cy="20" rx="6" ry="14" />
      <path d="M6 20h28" />
      <path d="M8 12h24M8 28h24" opacity="0.5" />
    </svg>
  ),
};

export default function SolutionSection() {
  const container = useRef<HTMLElement>(null);
  const pinContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".solution-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".solution-header", start: "top 80%" },
      });

      gsap.from(".slider-wrap", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".slider-wrap", start: "top 75%" },
      });

      // MatchMedia for Desktop Stacked Sequence
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !pinContainer.current) return;
        
        const cards = gsap.utils.toArray<HTMLElement>(".cap-card", trackRef.current);
        if (cards.length < 2) return;

        // Set initial state: all cards except first are hidden and translated down
        gsap.set(cards.slice(1), { autoAlpha: 0, y: 60 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainer.current,
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
            autoAlpha: 0,
            y: -60,
            duration: 1,
            ease: "power2.inOut"
          }, i * 2.5);

          // Animate current card in (slide up from bottom, fade in)
          tl.to(card, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
          }, i * 2.5);
        });
      });
      
      // Mobile fallback for cards
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".cap-card", {
          y: 60,
          autoAlpha: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: { trigger: trackRef.current, start: "top 75%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative">
      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:pr-20 w-full">
          
          {/* Pinned Container for Header and Stack */}
          <div ref={pinContainer} className="lg:h-screen lg:flex lg:flex-col lg:justify-center py-24 lg:py-0 overflow-hidden">
            {/* Header */}
            <div className="solution-header max-w-xl shrink-0 mb-14">
              <p className="label-text mb-4 tracking-widest">THE SOLUTION</p>
              <h2 className="heading-lg leading-tight">
                Avyuct AI detects what eyes{" "}
                <span className="text-gradient">miss.</span>
              </h2>
              <p className="body-lg mt-8 text-neutral-300 leading-relaxed">
                Autonomous Medical Intelligence — from emergency triage to
                population-scale screening.
              </p>
            </div>

            {/* Capability Cards Stack */}
            <div className="w-full">
              <div ref={trackRef} className="relative flex flex-col gap-8 lg:block w-full lg:h-[380px]">
                {/* Before/After Slider - Animated as part of the stack */}
                <div className="cap-card w-full lg:absolute lg:inset-0">
                  <BeforeAfterSlider
                    beforeLabel="Raw CTA Scan"
                    afterLabel="AI Detection Overlay"
                    className="h-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-neutral-800"
                  />
                </div>

                {CAPABILITIES.map((cap) => (
                  <div key={cap.id} className="cap-card w-full lg:absolute lg:inset-0">
                    <GlassCard className="h-full flex flex-col">
                      <div className="mb-8">
                        {ICONS[cap.icon]}
                      </div>
                      <h3 className="heading-sm">{cap.title}</h3>
                      <p className="mono-text mt-3 text-secondary-blue font-medium">{cap.subtitle}</p>
                      <p className="body-lg mt-6 text-neutral-300 flex-1">{cap.description}</p>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Empty right side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
}
