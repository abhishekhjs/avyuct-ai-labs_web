"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParticleField from "@/components/ui/ParticleField";

export default function AboutHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-anim", { y: 60, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power4.out" });
    gsap.from(".about-stat", { scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.4, ease: "power3.out" });
  }, { scope: container });

  const stats = [
    { value: "2023", label: "Founded" },
    { value: "5", label: "US Patents" },
    { value: "2", label: "Global Hubs" },
    { value: "⏳", label: "FDA Status" },
  ];

  return (
    <section ref={container} className="min-h-[80vh] relative overflow-hidden flex items-center" style={{ background: "var(--hero-gradient)", paddingBottom: "4rem", paddingTop: "8rem" }}>
      <ParticleField className="absolute inset-0 z-0" particleCount={25} />
      <div className="container-narrow relative z-10 grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center", minHeight: "70vh" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="about-anim label-text" style={{ marginBottom: "1rem" }}>ABOUT US</p>
          <h1 className="about-anim heading-xl">Autonomous Medical <span className="text-gradient">Intelligence</span></h1>
          <div className="about-anim flex flex-wrap" style={{ gap: "1rem", marginTop: "1.5rem" }}>
            <span className="glass-card rounded-full text-sm" style={{ padding: "0.5rem 1.25rem", border: "1px solid rgba(255, 255, 255, 0.1)" }}>🇺🇸 Herndon, VA</span>
            <span className="glass-card rounded-full text-sm" style={{ padding: "0.5rem 1.25rem", border: "1px solid rgba(0, 102, 255, 0.3)" }}>🇦🇪 Dubai, UAE</span>
          </div>
          <p className="about-anim body-lg" style={{ marginTop: "2rem", maxWidth: "40rem" }}>
            Avyuct AI Labs builds precision AI for vascular health. We detect the strokes no one sees coming, saving lives through autonomous medical intelligence that surpasses human capability.
          </p>
        </div>
        <div className="grid grid-cols-2" style={{ gap: "1.5rem" }}>
          {stats.map((s) => (
            <div key={s.label} className="about-stat glass-card text-center flex flex-col justify-center items-center" style={{ padding: "2rem 1.5rem", borderRadius: "1.5rem" }}>
              <p className="text-3xl font-black text-gradient" style={{ marginBottom: "0.5rem" }}>{s.value}</p>
              <p className="body-md text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
