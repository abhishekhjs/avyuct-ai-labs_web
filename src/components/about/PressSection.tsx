"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function PressSection() {
  const container = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".press-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".press-header", start: "top 80%" } });
    gsap.from(".award-card", { scale: 0, opacity: 0, stagger: 0.15, ease: "elastic.out(1, 0.5)", duration: 1, scrollTrigger: { trigger: ".awards-grid", start: "top 75%" } });

    // Infinite scroll carousel
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth / 2;
      gsap.to(carouselRef.current, {
        x: -totalWidth,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }
  }, { scope: container });

  // PLACEHOLDER: Replace with real press/media logos
  const pressItems = Array(6).fill(null).map((_, i) => `Media Logo ${i + 1}`);
  const awards = [
    { title: "MIITE Abu Dhabi 2026", subtitle: "Exhibitor" },
    { title: "NIH StrokeNet", subtitle: "Innovation Partner" },
  ];

  return (
    <section ref={container} className="section-padding">
      <div className="container-narrow">
        <div className="press-header text-center">
          <p className="label-text mb-4">RECOGNITION</p>
          <h2 className="heading-lg">Industry Recognition</h2>
        </div>

        {/* Press Logo Carousel */}
        <div className="mt-12 overflow-hidden">
          <div ref={carouselRef} className="flex gap-6" style={{ width: "fit-content" }}>
            {/* Duplicate for seamless loop */}
            {[...pressItems, ...pressItems].map((name, i) => (
              <div key={i} className="glass-card w-36 h-16 flex items-center justify-center shrink-0">
                <span className="text-neutral-500 text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="awards-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-lg mx-auto">
          {awards.map((a) => (
            <div key={a.title} className="award-card glass-card p-6 text-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" className="mx-auto mb-3">
                <path d="M16 4l3.5 7 8 1.2-5.8 5.6 1.4 8L16 22.2 8.9 25.8l1.4-8L4.5 12.2l8-1.2L16 4z" />
              </svg>
              <h4 className="heading-sm text-sm">{a.title}</h4>
              <p className="body-md text-xs mt-1">{a.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 glass-card p-8 max-w-2xl mx-auto text-center">
          <p className="body-lg italic text-neutral-300">
            &ldquo;Avyuct AI Labs is pioneering the future of emergency neurodiagnostics with AI that detects what radiologists miss.&rdquo;
          </p>
          <p className="mono-text mt-4 text-xs">— Healthcare Technology Review</p>
        </div>
      </div>
    </section>
  );
}
