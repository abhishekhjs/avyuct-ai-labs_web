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
      
      // Animate the video frame
      gsap.from(".hero-video-wrapper-anim", {
        y: "100%",
        duration: 1.4,
        delay: 0.5,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative pb-0 overflow-hidden flex flex-col items-center justify-between min-h-screen"
      style={{ background: "var(--hero-gradient)", paddingTop: "210px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <ParticleField className="absolute inset-0 z-0" particleCount={120} color="rgba(30, 58, 138, 0.4)" />

      {/* Content */}
      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <p 
          className="hero-anim tracking-widest text-sm uae-gradient-text font-mono font-bold inline-block"
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
          <Link href="/#stroke-detection" className="btn-secondary">
            Explore Technology
          </Link>
        </div>
      </div>
      
      {/* Huge Video Section */}
      <div 
        className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 mt-auto pt-16"
      >
        {/* Soft Blue Ambient Glow */}
        <div 
          className="absolute inset-x-4 md:inset-x-8 inset-y-0 blur-[90px] opacity-70 rounded-t-[3rem] pointer-events-none" 
          style={{ 
            background: "linear-gradient(180deg, rgba(0, 102, 255, 0.6) 0%, rgba(77, 159, 255, 0.4) 100%)",
            transform: "scale(0.98)",
            zIndex: 1
          }} 
        />

        <div 
          className="hero-video-wrapper-anim relative rounded-t-[2rem] rounded-b-none overflow-hidden bg-black/20 backdrop-blur-xl w-full border-t border-x border-white/10"
          style={{
            boxShadow: "0 -25px 60px -12px rgba(0, 102, 255, 0.25)",
            zIndex: 2
          }}
        >
          <video
            src="/0601.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-t-[2rem] rounded-b-none block"
            style={{ maxHeight: "80vh", opacity: 0.8 }}
            preload="auto"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-t-[2rem]" />
        </div>
      </div>
    </section>
  );
}
