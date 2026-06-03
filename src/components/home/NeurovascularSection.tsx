"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NeurovascularSection() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header and Text Animations
      gsap.from(".neuro-text-anim", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Highlight Items Animation
      gsap.from(".neuro-highlight-item", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".neuro-highlights",
          start: "top 85%",
        },
      });

      // Image Container Animation
      gsap.from(".neuro-image-anim", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="section-padding relative overflow-hidden flex items-center"
      style={{ background: "#ffffff", paddingTop: "14rem", paddingBottom: "14rem" }}
    >
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-40" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle at center, rgba(50, 167, 88, 0.12) 0%, rgba(131, 206, 64, 0.03) 50%, transparent 70%)",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div className="container-narrow relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 premium-gap-xl items-center" style={{ gap: "6rem" }}>
          
          {/* Left Column - Copy details */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center">
            <p className="neuro-text-anim label-text mb-4 tracking-widest text-[var(--avyuct-green)]">
              THE NEXT GENERATION
            </p>
            <h2 className="neuro-text-anim heading-lg leading-tight text-[var(--avyuct-slate)]">
              Building <span className="text-gradient">Neurovascular World Model</span>
            </h2>
            <p className="neuro-text-anim body-lg mt-8 text-neutral-600 leading-relaxed font-normal">
              The Neurovascular World Model goes beyond image analysis to understand the brain’s vascular system and its underlying dynamics. This enables earlier detection of abnormalities and supports proactive intervention before patients reach a critical stage.
            </p>

            {/* Feature Highlights */}
            <div className="neuro-highlights flex flex-col gap-6" style={{ marginTop: "2rem" }}>
              <div className="neuro-highlight-item flex items-start gap-4">
                <div className="mt-1 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(50,167,88,0.06)] border border-[rgba(50,167,88,0.15)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--avyuct-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-[var(--avyuct-slate)] text-base font-semibold">Dynamic Vascular Mapping</h4>
                  <p className="body-md mt-1 text-neutral-500 text-sm">
                    Reconstructs detailed vascular trees and structural connections across the brain.
                  </p>
                </div>
              </div>

              <div className="neuro-highlight-item flex items-start gap-4">
                <div className="mt-1 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(50,167,88,0.06)] border border-[rgba(50,167,88,0.15)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--avyuct-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-[var(--avyuct-slate)] text-base font-semibold">Assess Vascular Risks</h4>
                  <p className="body-md mt-1 text-neutral-500 text-sm">
                    Analyze cerebral blood flow, map coronary artery, and assess peripheral vascular risk.
                  </p>
                </div>
              </div>

              <div className="neuro-highlight-item flex items-start gap-4">
                <div className="mt-1 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(50,167,88,0.06)] border border-[rgba(50,167,88,0.15)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--avyuct-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-[var(--avyuct-slate)] text-base font-semibold">Early Intervention Support</h4>
                  <p className="body-md mt-1 text-neutral-500 text-sm">
                    Empowers clinical teams to identify sub-clinical changes before critical stages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Transparent Map Image */}
          <div ref={imageRef} className="lg:col-span-5 flex justify-center items-center relative">
            <div className="neuro-image-anim relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              {/* Subtle background glow effect centered behind the image */}
              <div 
                className="absolute w-[80%] h-[80%] rounded-full blur-[80px] opacity-30 z-0"
                style={{
                  background: "radial-gradient(circle, rgba(131,206,64,0.3) 0%, rgba(50,167,88,0.15) 60%, transparent 100%)",
                }}
              />
              
              {/* The vascular-map image with mix-blend-mode: multiply */}
              <img
                src="/vascular-map.png"
                alt="Neurovascular World Model"
                className="w-full h-auto object-contain z-10 float"
                style={{
                  mixBlendMode: "multiply",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
