"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TRUST_SIGNALS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SIGNAL_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L6 10v10c0 9.5 6 17 14 20 8-3 14-10.5 14-20V10L20 4z" />
      <path d="M14 20l4 4 8-8" strokeWidth="2" />
    </svg>
  ),
  eye: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20s6-10 16-10 16 10 16 10-6 10-16 10S4 20 4 20z" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="20" cy="20" r="2" fill="var(--primary-blue)" stroke="none" />
    </svg>
  ),
  pipeline: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="12" height="10" rx="2" />
      <rect x="24" y="6" width="12" height="10" rx="2" />
      <rect x="14" y="24" width="12" height="10" rx="2" />
      <path d="M16 11h8M10 16v12h4M30 16v4h-4" />
    </svg>
  ),
  checkmark: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="16" />
      <path d="M13 20l5 5 9-9" strokeWidth="2.5" />
    </svg>
  ),
};

export default function TrustSignals() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".trust-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".trust-header", start: "top 80%" },
      });

      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !container.current) return;
        
        const cards = gsap.utils.toArray<HTMLElement>(".trust-card", trackRef.current);
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
      
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".trust-card", {
          scale: 0.9,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="section-padding relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:pr-20 flex flex-col justify-center py-24 lg:py-0 overflow-hidden">
          <div className="trust-header max-w-xl shrink-0 mb-14">
            <p className="label-text mb-4 tracking-widest">WHY AVYUCT</p>
            <h2 className="heading-lg leading-tight">Why Choose Avyuct?</h2>
            <p className="body-lg mt-8 text-neutral-300 leading-relaxed">
              We combine cutting-edge AI with rigorous clinical validation to deliver
              unparalleled accuracy in stroke detection.
            </p>
          </div>

          {/* Stacked Sequence Wrapper */}
          <div className="w-full">
            <div ref={trackRef} className="relative flex flex-col gap-8 lg:block w-full lg:h-[280px]">
              {TRUST_SIGNALS.map((signal) => (
                <div
                  key={signal.title}
                  className="trust-card glass-card glass-card-hover premium-card-padding w-full lg:absolute lg:inset-0 h-full flex flex-col"
                >
                  <div className="mb-8">
                    {SIGNAL_ICONS[signal.icon]}
                  </div>
                  <h3 className="heading-sm">{signal.title}</h3>
                  <p className="body-lg mt-6 text-neutral-300 flex-1">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Empty right side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
}
