"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NeuralNetwork from "@/components/svg/NeuralNetwork";

export default function ContactHero() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".ch-anim", { y: 50, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out" });
  }, { scope: container });

  return (
    <section ref={container} className="min-h-[60vh] flex items-center justify-center text-center relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <NeuralNetwork className="absolute inset-0 z-0 pointer-events-none opacity-20" />
      <div className="container-narrow relative z-10 pt-32 pb-20">
        <h1 className="ch-anim heading-xl">Let&apos;s <span className="text-gradient">Talk</span></h1>
        <p className="ch-anim body-lg mt-6 max-w-2xl mx-auto">
          Request a demo, schedule a call, or learn how Avyuct can transform stroke care at your institution.
        </p>
        <p className="ch-anim body-md mt-4">We respond to all inquiries within 24 hours.</p>
      </div>
    </section>
  );
}
