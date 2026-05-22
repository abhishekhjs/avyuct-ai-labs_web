"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { USE_CASES } from "@/lib/constants";
import StatusBadge from "@/components/ui/StatusBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CASE_ICONS: Record<string, React.ReactNode> = {
  "Ischemic Stroke": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" opacity="0.3" />
      <path d="M24 6c5 0 9.5 2 13 5.5" />
      <path d="M10 18c2-4 5.5-7 10-8.5" />
      <path d="M8 28c-.5-2-.5-4 0-6" />
      <circle cx="24" cy="24" r="6" strokeWidth="2" />
      <path d="M21 24h6M24 21v6" strokeWidth="2" />
    </svg>
  ),
  "Haemorrhagic Stroke": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" opacity="0.3" />
      <path d="M24 10c-1 4-4 8-4 12a4 4 0 008 0c0-4-3-8-4-12z" fill="var(--primary-blue)" opacity="0.15" />
      <path d="M24 10c-1 4-4 8-4 12a4 4 0 008 0c0-4-3-8-4-12z" />
      <path d="M18 30c-1 2-3 4-3 6a3 3 0 006 0c0-2-2-4-3-6z" opacity="0.5" />
    </svg>
  ),
  "Coronary Artery Disease": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 38s-14-8-14-18c0-5 4-9 8-9 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 4 8 9 0 10-14 18-14 18z" />
      <path d="M16 22h5l2-3 3 6 2-3h4" strokeWidth="2" />
    </svg>
  ),
};

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".usecase-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".usecase-header", start: "top 80%" },
      });

      // MatchMedia for Desktop Stacked Sequence
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!carouselRef.current || !sectionRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(".usecase-card", carouselRef.current);
        if (cards.length < 2) return;

        // Set initial state: all cards except first are hidden and translated down
        gsap.set(cards.slice(1), { opacity: 0, y: 60 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${cards.length * 150}vh`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
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
        gsap.from(".usecase-card", {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: { trigger: carouselRef.current, start: "top 75%" },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center">
      <div className="container-narrow relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:pr-20 py-24 flex flex-col justify-center overflow-hidden">
          <div className="usecase-header mb-14 shrink-0">
            <p className="label-text mb-4 tracking-widest">USE CASES</p>
            <h2 className="heading-lg leading-tight">Avyuct Helps Save Lives.</h2>
            <p className="body-lg mt-8 max-w-lg text-neutral-300 leading-relaxed">
              Here are our use cases across vascular health.
            </p>
          </div>

          <div className="w-full">
            <div
              ref={carouselRef}
              className="relative flex flex-col gap-8 lg:block w-full lg:h-[320px]"
            >
              {USE_CASES.map((uc) => (
                <div
                  key={uc.title}
                  className="usecase-card shrink-0 w-full lg:absolute lg:inset-0"
                >
                  <div className="glass-card premium-card-padding h-full flex flex-col">
                    <StatusBadge status={uc.status} className="mb-8 self-start" />
                    <div className="mb-6">
                      {CASE_ICONS[uc.title]}
                    </div>
                    <h3 className="heading-sm">{uc.title}</h3>
                    <p className="body-lg mt-4 flex-1 text-neutral-300">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Empty right side */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
}
