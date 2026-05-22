"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROBLEM_STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemSection() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".problem-header",
          start: "top 85%",
        },
      });

      // MatchMedia for Desktop Stacked Sequence
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !container.current) return;
        
        const cards = gsap.utils.toArray<HTMLElement>(".problem-card", trackRef.current);
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
          // Counter animation synced with timeline
          const counterSpan = card.querySelector(".stat-counter");
          if (counterSpan) {
            const endVal = parseFloat(counterSpan.getAttribute("data-value") || "0");
            const dec = parseInt(counterSpan.getAttribute("data-decimals") || "0", 10);
            const obj = { val: 0 };
            tl.to(obj, {
              val: endVal,
              duration: 1,
              ease: "power2.out",
              onUpdate: () => {
                counterSpan.textContent = obj.val.toFixed(dec);
              }
            }, i * 2.5); // Starts exactly when the card's timeline slot begins
          }

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
      
      // Mobile-only animations for cards
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".problem-card", {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 75%",
          },
        });

        // Mobile Counters
        const cards = gsap.utils.toArray<HTMLElement>(".problem-card");
        cards.forEach((card) => {
          const counterSpan = card.querySelector(".stat-counter");
          if (counterSpan) {
            const endVal = parseFloat(counterSpan.getAttribute("data-value") || "0");
            const dec = parseInt(counterSpan.getAttribute("data-decimals") || "0", 10);
            const obj = { val: 0 };
            gsap.to(obj, {
              val: endVal,
              duration: 2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
              onUpdate: () => {
                counterSpan.textContent = obj.val.toFixed(dec);
              }
            });
          }
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="section-padding relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "var(--deep-navy)" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Empty left side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
        
        {/* Right side content */}
        <div className="lg:w-1/2 lg:pl-20 flex flex-col justify-center py-24 lg:py-0 overflow-hidden">
          {/* Header */}
          <div className="problem-header max-w-xl mb-14 shrink-0">
            <p className="label-text mb-4 tracking-widest">THE CHALLENGE</p>
            <h2 className="heading-lg leading-tight">The Stroke No One Sees Coming.</h2>
            <p className="body-lg mt-8 text-neutral-300 leading-relaxed">
              Distal Medium Vessel Occlusion (DMVO) accounts for up to 25% of
              strokes — yet standard imaging and clinical assessment routinely
              misses it.
            </p>
          </div>

          {/* Stacked Sequence Wrapper */}
          <div className="w-full">
            <div 
              ref={trackRef} 
              className="relative flex flex-col gap-8 lg:block w-full lg:h-[320px]"
            >
              {/* Stats */}
              {PROBLEM_STATS.map((stat, i) => (
                <div key={i} className="problem-card glass-card premium-card-padding flex flex-col items-center justify-center text-center w-full lg:absolute lg:inset-0">
                  <div className="flex items-baseline justify-center gap-2">
                    <span 
                      className="stat-counter text-5xl md:text-7xl font-black text-gradient" 
                      data-value={stat.value} 
                      data-decimals={stat.value % 1 !== 0 ? 1 : 0}
                    >
                      0
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-gradient">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="body-lg mt-6 text-neutral-300">{stat.label}</p>
                </div>
              ))}

              {/* LVO — Visible */}
              <div className="problem-card glass-card premium-card-padding flex flex-col items-center justify-center text-center w-full lg:absolute lg:inset-0">
                <p className="label-text mb-6 text-[var(--accent-green)] tracking-widest text-sm">
                  M1 LARGE VESSEL OCCLUSION
                </p>
                <div className="relative h-48 w-full max-w-sm bg-[var(--neutral-900)] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 rounded-full border-4 border-[var(--accent-green)] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-green)] opacity-50 blur-sm" />
                  </div>
                  <span className="absolute bottom-4 right-4 text-sm font-mono font-bold text-[var(--accent-green)] bg-[rgba(16,185,129,0.15)] px-3 py-1.5 rounded-md border border-[rgba(16,185,129,0.3)] backdrop-blur-md">
                    VISIBLE
                  </span>
                </div>
              </div>

              {/* DMVO — Missed */}
              <div className="problem-card glass-card premium-card-padding flex flex-col items-center justify-center text-center w-full lg:absolute lg:inset-0">
                <p className="label-text mb-6 text-[var(--accent-red)] tracking-widest text-sm">
                  M3 DISTAL OCCLUSION
                </p>
                <div className="relative h-48 w-full max-w-sm bg-[var(--neutral-900)] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-[var(--accent-red)] opacity-40" />
                  <span className="absolute bottom-4 right-4 text-sm font-mono font-bold text-[var(--accent-red)] bg-[rgba(239,68,68,0.15)] px-3 py-1.5 rounded-md border border-[rgba(239,68,68,0.3)] backdrop-blur-md">
                    MISSED
                  </span>
                  <div className="absolute inset-0 bg-[rgba(239,68,68,0.02)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
