"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function Newsletter() {
  const container = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.from(".nl-section", { y: 40, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".nl-section", start: "top 85%" } });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={container} className="section-padding" style={{ background: "var(--deep-navy)" }}>
      <div className="container-narrow max-w-2xl mx-auto">
        <div className="nl-section glass-card p-8 md:p-12 text-center">
          {submitted ? (
            <div>
              <div className="w-12 h-12 rounded-full bg-[rgba(16,185,129,0.15)] flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-9" /></svg>
              </div>
              <h3 className="heading-sm">You&apos;re subscribed!</h3>
              <p className="body-md mt-2">Welcome aboard. You&apos;ll hear from us soon.</p>
            </div>
          ) : (
            <>
              <h2 className="heading-md">Stay Updated</h2>
              <p className="body-md mt-2">
                Get the latest news on AI-powered stroke detection and vascular intelligence.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="glass-input flex-1 rounded-lg md:rounded-l-lg md:rounded-r-none p-3"
                  required
                />
                <button type="submit" className="btn-primary rounded-lg md:rounded-r-lg md:rounded-l-none shrink-0 justify-center">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-neutral-500 mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
