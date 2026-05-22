"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT } from "@/lib/constants";
import WorldMap from "@/components/svg/WorldMap";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function LocationsSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".loc-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".loc-header", start: "top 80%" } });
    gsap.from(".loc-map", { scale: 0.85, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".loc-map", start: "top 75%" } });
    gsap.from(".loc-card", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".loc-cards", start: "top 75%" } });
  }, { scope: container });

  const locations = [
    { ...CONTACT.headquarters, flag: "🇺🇸", capabilities: ["Core detection algorithms", "FDA regulatory pathway", "NIH StrokeNet collaboration", "US patent portfolio development"] },
    { ...CONTACT.dubai, flag: "🇦🇪", capabilities: ["Sovereign AI development (UAE IP)", "Multimodal imaging research", "Regional clinical partnerships (MENA)", "JEPA-based predictive intelligence"] },
  ];

  return (
    <section ref={container} className="section-padding">
      <div className="container-narrow">
        <div className="loc-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">GLOBAL PRESENCE</p>
          <h2 className="heading-lg">Global Innovation, Local Impact</h2>
        </div>
        <div className="loc-map mt-8 max-w-4xl mx-auto">
          <WorldMap />
        </div>
        <div className="loc-cards grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {locations.map((loc) => (
            <div key={loc.city} className="loc-card glass-card p-10">
              <p className="text-2xl mb-2">{loc.flag}</p>
              <h3 className="heading-sm">{loc.name}</h3>
              <p className="mono-text mt-1">{loc.city}</p>
              <p className="body-md mt-1 text-sm">{loc.role}</p>
              <ul className="mt-4 space-y-2">
                {loc.capabilities.map((cap) => (
                  <li key={cap} className="body-md text-sm flex gap-2">
                    <span className="text-[var(--primary-blue)] shrink-0">→</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
