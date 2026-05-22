"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParticleField from "@/components/ui/ParticleField";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTABlock() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });

      gsap.from(".cta-btn", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.3,
        ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--cta-gradient)" }}
    >
      <ParticleField className="absolute inset-0 z-0" particleCount={30} />

      <div className="container-narrow relative z-10 flex flex-col lg:flex-row min-h-[50vh] items-center">
        {/* Empty left side for scroll sequence */}
        <div className="hidden lg:block lg:w-1/2" />
        
        {/* Right side content */}
        <div className="lg:w-1/2 lg:pl-12 flex flex-col justify-center py-20">
          <div className="cta-content">
            <h2 className="heading-lg max-w-xl">
              Join the Vascular Health Revolution using{" "}
              <span className="text-gradient">AI</span>
            </h2>
            <p className="body-lg mt-4 max-w-xl">
              Partner with us to redefine the standard of care for distal stroke
              detection.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/contact" className="cta-btn btn-primary">
              Request Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="cta-btn btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
