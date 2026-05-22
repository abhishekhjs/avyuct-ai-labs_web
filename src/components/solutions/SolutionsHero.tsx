"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BrainVessel from "@/components/svg/BrainVessel";
import ParticleField from "@/components/ui/ParticleField";

export default function SolutionsHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".sol-hero-anim", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });
      gsap.from(".sol-vessel", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const pills = [
    { label: "Stroke Detection", href: "#stroke-detection" },
    { label: "World Model", href: "#world-model" },
    { label: "Deployment", href: "#deployment" },
    { label: "Validation", href: "#validation" },
  ];

  return (
    <section
      ref={container}
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: "var(--hero-gradient)" }}
    >
      <ParticleField className="absolute inset-0 z-0" particleCount={30} />
      <div className="container-narrow relative z-10 flex flex-col lg:flex-row items-center gap-16 pt-32 pb-20 lg:py-0 w-full min-h-[80vh]">
        <div className="lg:w-[55%]">
          <p className="sol-hero-anim label-text mb-4">SOLUTIONS</p>
          <h1 className="sol-hero-anim heading-xl">
            Precision AI Across the{" "}
            <span className="text-gradient">Vascular Spectrum</span>
          </h1>
          <p className="sol-hero-anim body-lg mt-6 max-w-xl">
            From emergency stroke triage to predictive vascular intelligence —
            our autonomous AI sees what matters most.
          </p>
          <div className="sol-hero-anim mt-8 flex flex-wrap gap-3">
            {pills.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="glass-card px-4 py-2 rounded-full text-sm text-neutral-300 hover:text-white hover:border-[rgba(0,102,255,0.3)] transition-colors duration-300"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
        <div className="sol-vessel lg:w-[45%] flex justify-center">
          <BrainVessel className="w-full max-w-sm lg:max-w-md" animated />
        </div>
      </div>
    </section>
  );
}
