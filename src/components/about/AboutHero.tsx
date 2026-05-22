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
    <section ref={container} className="min-h-[80vh] relative overflow-hidden flex items-center" style={{ background: "var(--hero-gradient)" }}>
      <ParticleField className="absolute inset-0 z-0" particleCount={25} />
      <div className="container-narrow relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 pt-32 pb-20 items-center min-h-[70vh]">
        <div>
          <p className="about-anim label-text mb-4">ABOUT US</p>
          <h1 className="about-anim heading-xl">Autonomous Medical <span className="text-gradient">Intelligence</span></h1>
          <div className="about-anim flex gap-3 mt-4 flex-wrap">
            <span className="glass-card px-3 py-1.5 rounded-full text-sm">🇺🇸 Herndon, VA</span>
            <span className="glass-card px-3 py-1.5 rounded-full text-sm">🇦🇪 Dubai, UAE</span>
          </div>
          <p className="about-anim body-lg mt-6">
            Avyuct AI Labs builds precision AI for vascular health. We detect the strokes no one sees coming, saving lives through autonomous medical intelligence that surpasses human capability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="about-stat glass-card p-5 text-center">
              <p className="text-3xl font-black text-gradient">{s.value}</p>
              <p className="body-md mt-1 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
