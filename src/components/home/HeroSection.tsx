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
        
        {/* Video on the Right Side */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 hero-anim">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.3)] border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group">
            <video
              src="/0521.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-2xl"
              preload="auto"
            />
            {/* Subtle overlay gradient to blend with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/40 to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
