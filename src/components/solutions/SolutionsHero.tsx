"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import ParticleField from "@/components/ui/ParticleField";

const InteractiveBrain = dynamic(() => import("@/components/solutions/InteractiveBrain"), { ssr: false });

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
      <div className="container-narrow relative z-10 flex flex-col lg:flex-row items-center premium-gap-xl pt-32 pb-20 lg:py-0 w-full min-h-[90vh]">
        <div className="lg:w-[40%]">
          <p className="sol-hero-anim label-text" style={{ marginBottom: "1rem" }}>SOLUTIONS</p>
          <h1 className="sol-hero-anim heading-xl">
            Precision AI Across {" "}
            <span className="text-gradient">Vascular Spectrum</span>
          </h1>
          <p className="sol-hero-anim body-lg premium-mt max-w-xl">
            From emergency stroke triage to predictive vascular intelligence —
            our autonomous AI sees what matters most.
          </p>
          <div className="sol-hero-anim flex flex-wrap premium-mt-lg" style={{ gap: "1rem" }}>
            {pills.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="glass-card inline-flex items-center rounded-full text-base text-neutral-400 hover:text-white hover:border-[rgba(0,102,255,0.3)] transition-colors duration-300"
                style={{ padding: '0.875rem 1.75rem' }}
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
        <div className="sol-vessel lg:w-[60%] w-full mt-12 lg:mt-0">
          <InteractiveBrain />
        </div>
      </div>
    </section>
  );
}
