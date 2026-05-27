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
    <section ref={container} className="section-padding" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container-narrow">
        <div className="loc-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 6rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text" style={{ marginBottom: "1.5rem", textAlign: "center" }}>GLOBAL PRESENCE</p>
          <h2 className="heading-lg" style={{ textAlign: "center" }}>Global Innovation, Local Impact</h2>
        </div>
        <div className="loc-map mx-auto" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "1000px" }}>
          <WorldMap />
        </div>
        <div className="loc-cards grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem" }}>
          {locations.map((loc) => (
            <div key={loc.city} className="loc-card glass-card" style={{ padding: "4rem 3rem", borderRadius: "1.5rem" }}>
              <p className="text-3xl" style={{ marginBottom: "1.5rem" }}>{loc.flag}</p>
              <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>{loc.name}</h3>
              <p className="mono-text text-[var(--primary-blue)]" style={{ marginBottom: "1rem" }}>{loc.city}</p>
              <p className="body-md text-sm" style={{ color: "var(--neutral-300)", marginBottom: "2rem" }}>{loc.role}</p>
              <ul className="space-y-3">
                {loc.capabilities.map((cap) => (
                  <li key={cap} className="body-md text-sm flex" style={{ gap: "0.75rem" }}>
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
