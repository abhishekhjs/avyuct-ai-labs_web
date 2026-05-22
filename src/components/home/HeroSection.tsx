"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HERO_STATS } from "@/lib/constants";
import StatPill from "@/components/ui/StatPill";
import ParticleField from "@/components/ui/ParticleField";

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-anim", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <ParticleField className="absolute inset-0 z-0" particleCount={35} color="rgba(30, 58, 138, 0.7)" />

      {/* Content */}
      <div className="container-narrow relative z-10 flex flex-col lg:flex-row items-center premium-gap-xl pt-32 pb-20 lg:py-0 w-full min-h-[90vh]">
        {/* Left Side Only - Right Side left empty for ScrollSequence */}
        <div className="lg:w-1/2">
          <p className="hero-anim label-text premium-mb tracking-widest text-sm">
            Autonomous Medical Intelligence
          </p>
          <h1 className="hero-anim heading-xl">
            Seeing the{" "}
            <span className="text-gradient">Unseen.</span>
          </h1>
          <p className="hero-anim body-lg premium-mt max-w-xl text-xl leading-relaxed">
            AI that detects the brain vessel occlusions doctors can miss —
            before it&apos;s too late.
          </p>
          <div className="hero-anim premium-mt-lg flex gap-8 flex-wrap">
            {HERO_STATS.map((stat) => (
              <StatPill
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
          <div className="hero-anim premium-mt flex gap-6 flex-wrap">
            <Link href="/contact" className="btn-primary">
              Request Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore Technology
            </Link>
          </div>
        </div>
        
        {/* Empty space on the right for the fixed sequence canvas */}
        <div className="lg:w-1/2 hidden lg:block"></div>
      </div>
    </section>
  );
}
