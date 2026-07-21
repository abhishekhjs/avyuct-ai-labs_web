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
    <section ref={container} className="section-padding" style={{ background: "#18181b", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container-narrow">
        <div className="lead-header max-w-2xl" style={{ textAlign: "center", margin: "0 auto 5rem auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="label-text mb-3 tracking-widest text-xs uppercase font-mono font-bold" style={{ color: "var(--avyuct-green)", textAlign: "center" }}>
            LEADERSHIP
          </p>
          <h2 className="heading-lg font-serif leading-tight font-bold" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
            Led by Experts in AI, Medicine, and Innovation
          </h2>
        </div>
        {/* Team Profiles */}
        <div className="team-grid" style={{ margin: "0 auto", gap: "2.5rem", maxWidth: "1000px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch" }}>
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="team-card text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "1.5rem",
                padding: "2.5rem 2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "440px",
              }}
            >
              <div
                className="w-full aspect-square flex items-center justify-center overflow-hidden relative"
                style={{
                  borderRadius: "1.25rem",
                  marginBottom: "1.75rem",
                  maxWidth: "240px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.4">
                    <circle cx="32" cy="24" r="12" stroke="#475569" strokeWidth="2" />
                    <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="#475569" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <h3 className="heading-sm font-bold" style={{ color: "#0f172a", fontSize: "1.5rem", marginBottom: "0.35rem" }}>
                {member.name}
              </h3>
              <p className="mono-text" style={{ fontSize: "0.875rem", color: "#0066FF", marginBottom: "0.75rem", fontWeight: "700" }}>
                {member.role}
              </p>
              
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#64748b", marginBottom: "1.25rem", display: "inline-block" }}
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}

              <p
                className="body-md text-sm [&_strong]:color-[#0f172a] [&_strong]:font-semibold"
                style={{ lineHeight: "1.65", color: "#334155", textAlign: "center" }}
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

