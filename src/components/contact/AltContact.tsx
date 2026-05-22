"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function AltContact() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".alt-header", { y: 50, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".alt-header", start: "top 80%" } });
    gsap.from(".alt-card", { scale: 0.9, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".alt-grid", start: "top 75%" } });
  }, { scope: container });

  return (
    <section ref={container} className="section-padding" style={{ background: "var(--deep-navy)" }}>
      <div className="container-narrow">
        <div className="alt-header text-center">
          <p className="label-text mb-4">OTHER WAYS TO REACH US</p>
          <h2 className="heading-lg">Prefer Another Way?</h2>
        </div>
        <div className="alt-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="alt-card glass-card glass-card-hover p-8 text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
              <rect x="4" y="8" width="32" height="24" rx="3" /><path d="M4 11l16 10 16-10" />
            </svg>
            <h3 className="heading-sm">Direct Email</h3>
            <p className="body-md mt-2">Send us an email and we&apos;ll respond within 24 hours.</p>
            <a href={`mailto:${CONTACT.email}`} className="mono-text mt-4 block text-[var(--primary-blue)] hover:underline">{CONTACT.email}</a>
          </div>
          <div className="alt-card glass-card glass-card-hover p-8 text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
              <rect x="6" y="6" width="28" height="28" rx="4" /><path d="M6 14h28M14 6v8M26 6v8" /><rect x="12" y="20" width="6" height="6" rx="1" opacity="0.5" />
            </svg>
            <h3 className="heading-sm">Schedule a Call</h3>
            <p className="body-md mt-2">Book a 30-minute call with our team.</p>
            <Link href={CONTACT.calendly} className="btn-secondary mt-4 inline-flex text-sm" target="_blank">Schedule Now</Link>
          </div>
          <div className="alt-card glass-card glass-card-hover p-8 text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
              <rect x="6" y="6" width="28" height="28" rx="6" /><path d="M14 18v-2a2 2 0 012-2h0a2 2 0 012 2v2" fill="none" /><path d="M14 18h4v8h-4v-8zM22 18h4v8h-4v-8zM22 18v-1a3 3 0 00-3-3h-1" />
            </svg>
            <h3 className="heading-sm">Connect on LinkedIn</h3>
            <p className="body-md mt-2">Follow our updates and reach out via LinkedIn.</p>
            <Link href={SOCIAL_LINKS.linkedin} className="btn-secondary mt-4 inline-flex text-sm" target="_blank">Follow Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
