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
    gsap.fromTo(".lead-header", 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".lead-header", start: "top 80%" } }
    );
    gsap.fromTo(".team-card", 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".team-grid", start: "top 75%" } }
    );
  }, { scope: container });



  return (
    <section ref={container} className="section-padding" style={{ background: "var(--deep-navy)", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container-narrow">
        <div className="lead-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 6rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text" style={{ marginBottom: "1.5rem", textAlign: "center" }}>LEADERSHIP</p>
          <h2 className="heading-lg" style={{ textAlign: "center" }}>Led by Experts in AI, Medicine, and Innovation</h2>
        </div>
        {/* Team Profiles */}
        <div className="team-grid" style={{ margin: "0 auto", gap: "4rem", maxWidth: "1000px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="team-card glass-card glass-card-hover text-center" style={{ padding: "3rem 2rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "420px" }}>
              <div className="w-full aspect-square bg-[var(--neutral-800)] flex items-center justify-center overflow-hidden relative" style={{ borderRadius: "1rem", marginBottom: "2rem", maxWidth: "240px" }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.2">
                    <circle cx="32" cy="24" r="12" stroke="white" strokeWidth="2" />
                    <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <h3 className="heading-sm" style={{ marginBottom: "0.25rem" }}>{member.name}</h3>
              <p className="mono-text" style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}>{member.role}</p>
              
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[var(--primary-blue)] transition-colors" style={{ marginBottom: "1.5rem" }} aria-label={`${member.name}'s LinkedIn`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}

              <p className="body-md text-sm" style={{ lineHeight: "1.6", color: "var(--neutral-300)" }}>{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
