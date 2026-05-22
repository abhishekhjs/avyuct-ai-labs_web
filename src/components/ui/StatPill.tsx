"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatPillProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatPill({ value, label, className = "" }: StatPillProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className={`glass-card inline-flex items-center rounded-full ${className}`}
      style={{ padding: '0.875rem 1.75rem', gap: '1.25rem' }}
    >
      <span className="mono-text font-bold text-lg">{value}</span>
      <span className="text-base text-neutral-400">{label}</span>
    </div>
  );
}
