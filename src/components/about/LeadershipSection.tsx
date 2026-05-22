"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TEAM_MEMBERS } from "@/lib/constants";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function LeadershipSection() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".lead-header", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".lead-header", start: "top 80%" } });
    gsap.from(".team-card", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".team-grid", start: "top 75%" } });
  }, { scope: container });

  const advisors = ["NIH StrokeNet Advisors", "Academic Medical Centers", "Healthcare AI Ethicists"];

  return (
    <section ref={container} className="section-padding" style={{ background: "var(--deep-navy)" }}>
      <div className="container-narrow">
        <div className="lead-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">LEADERSHIP</p>
          <h2 className="heading-lg">Led by Experts in AI, Medicine, and Innovation</h2>
        </div>
        {/* PLACEHOLDER: Team headshot images need to be replaced */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="team-card glass-card glass-card-hover p-8">
              <div className="w-full aspect-square bg-[var(--neutral-800)] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.2">
                  <circle cx="32" cy="24" r="12" stroke="white" strokeWidth="2" />
                  <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="heading-sm">{member.name}</h3>
              <p className="mono-text mt-1">{member.role}</p>
              <p className="body-md mt-2 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="heading-sm mb-4">Advisory Board</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {advisors.map((a) => (
              <span key={a} className="glass-card px-4 py-2 text-sm text-neutral-300">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
