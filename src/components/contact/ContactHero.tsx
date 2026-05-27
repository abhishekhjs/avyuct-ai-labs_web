"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NeuralNetwork from "@/components/svg/NeuralNetwork";

export default function ContactHero() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".ch-anim", { y: 50, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out" });
    gsap.from(".ch-orb", { scale: 0, opacity: 0, stagger: 0.2, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.4 });
  }, { scope: container });

  return (
    <section
      ref={container}
      style={{
        background: "var(--hero-gradient)",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <NeuralNetwork className="absolute inset-0 z-0 pointer-events-none opacity-20" />

      {/* Decorative floating orbs */}
      <div
        className="ch-orb"
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="ch-orb"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="ch-orb"
        style={{
          position: "absolute",
          top: "40%",
          right: "25%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Mono label */}
        <p
          className="ch-anim"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--primary-blue)",
            marginBottom: "1.5rem",
          }}
        >
          Get in Touch
        </p>

        <h1
          className="ch-anim heading-xl"
          style={{
            marginBottom: "1.5rem",
          }}
        >
          Let&apos;s <span className="text-gradient">Talk</span>
        </h1>

        <p
          className="ch-anim"
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.7,
            color: "var(--neutral-300)",
            maxWidth: "640px",
            margin: "0 auto 1rem auto",
          }}
        >
          Request a demo, schedule a call, or learn how Avyuct can transform stroke care at your institution.
        </p>

        <p
          className="ch-anim"
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "var(--neutral-400)",
            marginBottom: "2.5rem",
          }}
        >
          We respond to all inquiries within 24 hours.
        </p>

        {/* Scroll indicator */}
        <div
          className="ch-anim"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.5,
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--neutral-500)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, var(--neutral-500), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
