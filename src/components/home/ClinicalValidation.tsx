"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLINICAL_PILLARS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import NeuralNetwork from "@/components/svg/NeuralNetwork";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  precision: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="16" />
      <circle cx="22" cy="22" r="10" opacity="0.6" />
      <circle cx="22" cy="22" r="4" fill="var(--primary-blue)" stroke="none" />
      <path d="M22 4v4M22 36v4M4 22h4M36 22h4" />
    </svg>
  ),
  edge: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="24" height="24" rx="4" />
      <rect x="16" y="16" width="12" height="12" rx="2" fill="var(--primary-blue)" opacity="0.15" />
      <circle cx="22" cy="22" r="3" fill="var(--primary-blue)" stroke="none" />
      <path d="M22 6v4M22 34v4M6 22h4M34 22h4" />
      <path d="M10 10L6 6M34 10l4-4M10 34l-4 4M34 34l4 4" opacity="0.4" />
    </svg>
  ),
  validation: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4L6 12v10c0 9.5 6.8 18.4 16 20 9.2-1.6 16-10.5 16-20V12L22 4z" />
      <path d="M15 22l5 5 9-9" strokeWidth="2.5" />
    </svg>
  ),
};

export default function ClinicalValidation() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pillar-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".pillar-header", start: "top 80%" },
      });

      // MatchMedia for Desktop Stacked Sequence
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !container.current) return;
        
        const cards = gsap.utils.toArray<HTMLElement>(".pillar-card", trackRef.current);
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
          if (i === 0) return; // First card is already visible
          
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
        gsap.from(".pillar-card", {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="section-padding relative overflow-hidden min-h-screen flex items-center">
      <NeuralNetwork className="absolute inset-0 z-0 pointer-events-none opacity-30" />

      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Empty left side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
        
        {/* Right side content */}
        <div className="lg:w-1/2 lg:pl-20 flex flex-col justify-center py-24 lg:py-0 overflow-hidden">
          <div className="pillar-header max-w-xl shrink-0 mb-14">
            <p className="label-text mb-4 tracking-widest">CLINICAL MOAT</p>
            <h2 className="heading-lg leading-tight">Our Clinical Moat</h2>
            <p className="body-lg mt-8 text-neutral-300 leading-relaxed">
              Three foundational advantages that define our competitive edge in
              distal stroke detection.
            </p>
          </div>

          {/* Stacked Sequence Wrapper */}
          <div className="w-full">
            <div ref={trackRef} className="relative flex flex-col gap-8 lg:block w-full lg:h-[380px]">
              {CLINICAL_PILLARS.map((pillar) => (
                <div key={pillar.title} className="pillar-card w-full lg:absolute lg:inset-0">
                  <GlassCard hover className="h-full flex flex-col premium-card-padding">
                    <div className="mb-6">
                      {PILLAR_ICONS[pillar.icon]}
                    </div>
                    <h3 className="heading-sm">{pillar.title}</h3>
                    <p className="body-lg mt-6 text-neutral-300 flex-1">{pillar.description}</p>
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
