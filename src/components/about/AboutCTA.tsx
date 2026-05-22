"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParticleField from "@/components/ui/ParticleField";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

const CTAS = [
  {
    title: "Partner With Us",
    desc: "Bring Avyuct AI to your institution. Request a demo today.",
    href: "/contact",
    primary: true,
    btnText: "Request Demo",
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 30c-2-2-8-6-8-12a8 8 0 0116 0c0 6-6 10-8 12z" /><circle cx="18" cy="18" r="3" /></svg>,
  },
  {
    title: "Careers",
    desc: "Join our team of AI researchers and medical innovators.",
    href: "#", // PLACEHOLDER
    primary: false,
    btnText: "View Openings",
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="12" width="24" height="18" rx="2" /><path d="M12 12V9a6 6 0 0112 0v3" /><circle cx="18" cy="22" r="2" /><path d="M18 24v3" /></svg>,
  },
  {
    title: "Investors",
    desc: "Help us scale life-saving AI across global healthcare.",
    href: "#", // PLACEHOLDER
    primary: false,
    btnText: "Investment Inquiry",
    icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 30h24" /><path d="M10 30V18l4-4 4 6 4-8 4 6v12" /><path d="M26 12l-4 2" /><circle cx="28" cy="10" r="2" /></svg>,
  },
];

export default function AboutCTA() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".acta-heading", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: container.current, start: "top 75%" } });
    gsap.from(".acta-card", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: ".acta-grid", start: "top 75%" } });
  }, { scope: container });

  return (
    <section ref={container} className="py-28 relative overflow-hidden" style={{ background: "var(--cta-gradient)" }}>
      <ParticleField className="absolute inset-0 z-0" particleCount={25} />
      <div className="container-narrow relative z-10 text-center">
        <h2 className="acta-heading heading-lg">Join Our Mission to Save Lives</h2>
        <div className="acta-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CTAS.map((cta) => (
            <div key={cta.title} className="acta-card glass-card p-8 flex flex-col items-center text-center">
              <div className="mb-4">{cta.icon}</div>
              <h3 className="heading-sm">{cta.title}</h3>
              <p className="body-md mt-2 flex-1">{cta.desc}</p>
              <Link href={cta.href} className={`mt-6 ${cta.primary ? "btn-primary" : "btn-secondary"}`}>
                {cta.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
