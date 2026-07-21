"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      // GSAP ticker provides time in seconds; Lenis expects milliseconds
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Refresh ScrollTrigger to ensure correct initial calculations
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef}
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        autoRaf: false
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
