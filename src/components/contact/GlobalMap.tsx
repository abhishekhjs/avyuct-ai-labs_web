"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorldMap from "@/components/svg/WorldMap";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function GlobalMap() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".gm-header", { y: 50, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".gm-header", start: "top 80%" } });
    gsap.from(".gm-map", { scale: 0.85, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".gm-map", start: "top 75%" } });
  }, { scope: container });

  return (
    <section ref={container} className="section-padding">
      <div className="container-narrow text-center">
        <div className="gm-header">
          <p className="label-text mb-4">GLOBAL REACH</p>
          <h2 className="heading-lg">Global Reach, Local Expertise</h2>
          <p className="body-lg mt-4 max-w-2xl mx-auto">
            Avyuct AI Labs serves hospitals and medical institutions across North America, Europe, Middle East, and Asia.
          </p>
        </div>
        <div className="gm-map mt-8 max-w-4xl mx-auto">
          <WorldMap showPartners />
        </div>
      </div>
    </section>
  );
}
