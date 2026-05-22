"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  padding?: string;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "rgba(0, 102, 255, 0.4)",
  padding = "premium-card-padding",
}: GlassCardProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!hover || !container.current) return;

      const card = container.current;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -6,
          boxShadow: `0 20px 60px ${glowColor}`,
          duration: 0.4,
          ease: "power4.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0px 0px rgba(0, 102, 255, 0)",
          duration: 0.4,
          ease: "power4.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: container, dependencies: [hover, glowColor] }
  );

  return (
    <div
      ref={container}
      className={`glass-card ${hover ? "glass-card-hover" : ""} ${padding} ${className}`}
    >
      {children}
    </div>
  );
}
