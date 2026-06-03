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
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
      
      gsap.from(".hero-video-anim", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative pb-24 overflow-hidden flex flex-col items-center justify-start min-h-screen"
      style={{ background: "var(--hero-gradient)", paddingTop: "180px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <ParticleField className="absolute inset-0 z-0" particleCount={120} color="rgba(30, 58, 138, 0.4)" />

      {/* Content */}
      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <p 
          className="hero-anim tracking-widest text-sm uae-gradient-text font-bold inline-block"
          style={{ marginBottom: "1.5rem", textTransform: "uppercase" }}
        >
          Building Sovereign UAE IP | Predictive Healthcare
        </p>
        
        <h1 className="hero-anim heading-xl max-w-5xl mx-auto">
          Seeing the <span className="text-gradient">Unseen.</span>
        </h1>
        
        <p 
          className="hero-anim body-lg max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-balance"
          style={{ marginTop: "1.5rem" }}
        >
          The smallest clots cause the greatest blind spots in stroke diagnosis. Our AI cuts through the complexity<br className="hidden md:block" /> of distal medium vessel occlusions - detecting and localizing with accuracy that redefines the standard of care.
        </p>
        
        {/* Stats */}
        {/* <div 
          className="hero-anim flex gap-4 flex-nowrap justify-center w-full overflow-x-auto pb-4"
          style={{ marginTop: "2.5rem" }}
        >
          {HERO_STATS.map((stat) => (
            <StatPill
              key={stat.label}
              value={stat.value}
              label={stat.label}
              colorClass={stat.colorClass}
            />
          ))}
        </div> */}

        {/* Buttons */}
        <div 
          className="hero-anim flex gap-6 flex-wrap justify-center"
          style={{ marginTop: "3rem" }}
        >
          <Link href="/solutions" className="btn-secondary">
            Explore Technology
          </Link>
        </div>
      </div>
      
      {/* Huge Video Section */}
      <div 
        className="hero-video-anim relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8"
        style={{ marginTop: "5rem" }}
      >
        {/* Inline glow mimicking the reference image */}
        <div 
          className="absolute inset-0 blur-[100px] opacity-50 rounded-[3rem]" 
          style={{ 
            background: "var(--primary-blue)",
            transform: "translateY(5%) scale(0.95)",
            zIndex: -1
          }} 
        />
        
        <div 
          className="relative rounded-t-[2rem] overflow-hidden border border-white/40 bg-black/10 backdrop-blur-xl"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 102, 255, 0.3)"
          }}
        >
          <video
            src="/0601.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-t-[2rem] opacity-75"
            style={{ maxHeight: "80vh" }}
            preload="auto"
          />
          {/* Subtle overlay gradient to blend the video edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-t-[2rem]" />
        </div>
      </div>
    </section>
  );
}
