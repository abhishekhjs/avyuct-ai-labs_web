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
  colorClass?: string;
}

export default function StatPill({ value, label, className = "", colorClass = "" }: StatPillProps) {
  const container = useRef<HTMLDivElement>(null);
  
  let bgStr = "var(--glass-white)";
  let borderStr = "var(--glass-border)";
  let textStr = "inherit";

  if (colorClass === "green") {
    bgStr = "rgba(16, 185, 129, 0.1)"; // emerald-500
    borderStr = "rgba(16, 185, 129, 0.3)";
    textStr = "rgb(16, 185, 129)";
  } else if (colorClass === "yellow") {
    bgStr = "rgba(234, 179, 8, 0.1)"; // yellow-500
    borderStr = "rgba(234, 179, 8, 0.3)";
    textStr = "rgb(234, 179, 8)";
  }

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
      className={`inline-flex items-center rounded-full whitespace-nowrap ${className}`}
      style={{ 
        padding: '0.875rem 2rem', 
        gap: '1.5rem',
        background: bgStr,
        border: `1px solid ${borderStr}`,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)'
      }}
    >
      <span className="mono-text font-bold text-lg" style={{ color: textStr }}>{value}</span>
      <span className="text-base text-neutral-400">{label}</span>
    </div>
  );
}
