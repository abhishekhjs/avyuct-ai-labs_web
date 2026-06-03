"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BENEFITS = [
  "86% sensitivity for hidden distal strokes",
  "<30 second inference time",
  "Zero-latency edge deployment",
  "HIPAA compliant, FDA clearance pending",
  "Seamless PACS/RIS integration",
];

export default function SolutionsCTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".scta-left", {
        x: -60, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" },
      });
      gsap.from(".scta-right", {
        x: 60, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" },
      });
      gsap.from(".benefit-item", {
        x: -30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power4.out",
        scrollTrigger: { trigger: ".benefits-list", start: "top 75%" },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="premium-footer-padding relative overflow-hidden" style={{ background: "#ffffff" }}>
      {/* S-Shape Gradient Background - lightweight radial gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Glow */}
        <div 
          className="absolute top-[-20%] right-[-5%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 191, 255, 0.35) 0%, rgba(0, 119, 255, 0.15) 40%, transparent 70%)",
            transform: "translateZ(0)",
          }}
        />
        {/* Bottom Left Glow */}
        <div 
          className="absolute bottom-[-20%] left-[-5%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 255, 255, 0.3) 0%, rgba(0, 119, 255, 0.12) 40%, transparent 70%)",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 premium-gap-xl items-center">
          {/* Left - Benefits */}
          <div className="scta-left relative">
            
            <h2 className="heading-lg" style={{ color: "#000000" }}>Ready to Deploy Avyuct?</h2>
            <p className="body-lg premium-mt" style={{ color: "#111111", fontWeight: 500 }}>
              Join leading medical institutions using AI for life-saving stroke detection.
            </p>
            <div className="benefits-list premium-mt-lg flex flex-col" style={{ gap: "1rem" }}>
              {BENEFITS.map((b) => (
                <div key={b} className="benefit-item flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                    <circle cx="10" cy="10" r="10" fill="#0077ff" opacity="0.2" />
                    <path d="M6 10l3 3 5-5" stroke="#0077ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="body-md font-bold" style={{ color: "#000000" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form Mock */}
          <div className="scta-right glass-card premium-card-padding shadow-2xl" style={{ background: "rgba(10, 15, 30, 0.9)", borderColor: "rgba(255,255,255,0.1)" }}>
            <h3 className="heading-md" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>Request a Demo</h3>
            <div className="flex flex-col" style={{ gap: "1rem" }}>
              <input type="text" placeholder="Institution Name" className="glass-input w-full rounded-lg p-3" readOnly />
              <input type="text" placeholder="Contact Name" className="glass-input w-full rounded-lg p-3" readOnly />
              <input type="email" placeholder="Email Address" className="glass-input w-full rounded-lg p-3" readOnly />
              <input type="text" placeholder="Role / Title" className="glass-input w-full rounded-lg p-3" readOnly />
              <Link href="/contact" className="btn-primary w-full justify-center mt-2">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
