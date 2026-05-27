"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorldMap from "@/components/svg/WorldMap";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function GlobalMap() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".gm-header", { y: 50, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".gm-header", start: "top 80%" } });
    gsap.from(".gm-map", { scale: 0.85, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".gm-map", start: "top 75%" } });
  }, { scope: container });

  return (
    <section
      ref={container}
      style={{
        paddingTop: "clamp(5rem, 12vh, 9rem)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        {/* Centered header */}
        <div className="gm-header">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary-blue)",
              marginBottom: "1rem",
            }}
          >
            Global Reach
          </p>
          <h2
            className="heading-lg"
            style={{ marginBottom: "1rem" }}
          >
            Global Reach, Local Expertise
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--neutral-300)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Avyuct AI Labs serves hospitals and medical institutions across North America, Europe, Middle East, and Asia.
          </p>
        </div>

        {/* Map container */}
        <div
          className="gm-map"
          style={{
            maxWidth: "900px",
            margin: "3rem auto 0 auto",
          }}
        >
          <WorldMap showPartners />
        </div>
      </div>
    </section>
  );
}
