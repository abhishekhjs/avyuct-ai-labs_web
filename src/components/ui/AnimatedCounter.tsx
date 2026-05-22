"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  trigger?: boolean;
  triggerStart?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function AnimatedCounter({
  endValue,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className = "",
  trigger = true,
  triggerStart,
  triggerRef,
}: AnimatedCounterProps) {
  const container = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current) return;

      const counter = { value: 0 };

      gsap.to(counter, {
        value: endValue,
        duration,
        ease: "power4.out",
        scrollTrigger: trigger
          ? {
              trigger: triggerRef?.current || container.current,
              start: triggerStart || "top 85%",
              toggleActions: "play none none none",
            }
          : undefined,
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = counter.value.toFixed(decimals);
          }
        },
      });
    },
    { scope: container, dependencies: [endValue, duration, decimals, trigger, triggerStart] }
  );

  return (
    <div ref={container} className={`inline-flex items-baseline ${className}`}>
      {prefix && (
        <span className="text-3xl font-bold tracking-tight md:text-5xl">
          {prefix}
        </span>
      )}
      <span
        ref={numberRef}
        className="text-3xl font-bold tracking-tight md:text-5xl"
      >
        0
      </span>
      {suffix && (
        <span className="text-3xl font-bold tracking-tight md:text-5xl">
          {suffix}
        </span>
      )}
    </div>
  );
}
