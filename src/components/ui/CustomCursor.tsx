"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // We only want this on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      return;
    }

    // GSAP quickTo creates highly performant hardware-accelerated animations
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });

    // State management for cursor visibility
    let initialized = false;
    let isHiddenByFooter = false;
    let isHiddenByHover = false;
    let isCurrentlyVisible = false;

    const updateVisibility = () => {
      const shouldBeVisible = !isHiddenByFooter && !isHiddenByHover;
      
      if (shouldBeVisible && !isCurrentlyVisible) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        isCurrentlyVisible = true;
      } else if (!shouldBeVisible && isCurrentlyVisible) {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
        isCurrentlyVisible = false;
      }
    };

    const moveCursor = (e: MouseEvent) => {
      // Check if hovering over header/navbar
      const target = e.target as HTMLElement;
      const isOverHeader = !!(target && target.closest && target.closest("header"));
      
      if (isHiddenByHover !== isOverHeader) {
        isHiddenByHover = isOverHeader;
        updateVisibility();
      }

      // Offset by half the width/height (120px / 2 = 60px) to center it
      xTo(e.clientX - 60);
      yTo(e.clientY - 60);

      if (!initialized) {
        isCurrentlyVisible = false;
        updateVisibility();
        initialized = true;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Hide when mouse leaves the viewport
    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      isCurrentlyVisible = false;
      initialized = false;
    };
    
    document.addEventListener("mouseleave", handleMouseLeave);

    // IntersectionObserver to hide cursor over footer
    let observer: IntersectionObserver;
    const findFooterInterval = setInterval(() => {
      const footer = document.querySelector("footer");
      if (footer) {
        clearInterval(findFooterInterval);
        observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              isHiddenByFooter = true;
              updateVisibility();
            } else {
              isHiddenByFooter = false;
              updateVisibility();
            }
          },
          { rootMargin: "0px", threshold: 0 }
        );
        observer.observe(footer);
      }
    }, 500);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(findFooterInterval);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[120px] h-[120px] pointer-events-none z-[9999] opacity-0 hidden md:block mix-blend-difference"
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Tiny center anchor dot */}
        <div className="w-1 h-1 bg-white rounded-full opacity-60" />
      </div>
    </div>
  );
}
