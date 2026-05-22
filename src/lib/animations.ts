import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ========================================
   EASING CONSTANTS
   ======================================== */
export const EASE = {
  /** Rapid start, extremely gradual slow down — entrance reveals */
  POWER4_OUT: "power4.out",
  /** Heavy, cinematic transitions */
  EXPO_OUT: "expo.out",
  /** Smooth, natural feel */
  POWER3_OUT: "power3.out",
  /** Gentle, organic */
  POWER2_OUT: "power2.out",
  /** Continuous motion (carousels, loops) */
  NONE: "none",
  /** Bouncy, playful */
  BACK_OUT: "back.out(1.7)",
  /** Elastic, springy */
  ELASTIC_OUT: "elastic.out(1, 0.5)",
  /** Smooth sine wave */
  SINE_INOUT: "sine.inOut",
} as const;

/* ========================================
   DURATION CONSTANTS
   ======================================== */
export const DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  MEDIUM: 0.8,
  SLOW: 1.0,
  HERO: 1.2,
  DRAW: 2.5,
} as const;

/* ========================================
   STAGGER CONSTANTS
   ======================================== */
export const STAGGER = {
  TIGHT: 0.05,
  NORMAL: 0.1,
  RELAXED: 0.15,
  WIDE: 0.2,
  EXTRA_WIDE: 0.25,
} as const;

/* ========================================
   SCROLLTRIGGER DEFAULTS
   ======================================== */
export const SCROLL_DEFAULTS = {
  /** Standard fade-in trigger start */
  START: "top 80%",
  /** Earlier trigger for important elements */
  START_EARLY: "top 70%",
  /** Late trigger for less important elements */
  START_LATE: "top 85%",
  /** Pin end values */
  PIN_MEDIUM: "+=200%",
  PIN_LONG: "+=300%",
  PIN_EXTRA_LONG: "+=400%",
} as const;

/* ========================================
   ANIMATION PRESETS
   ======================================== */

/**
 * Standard fade-up entrance animation.
 * Uses ScrollTrigger to trigger on scroll.
 */
export function createFadeUp(
  target: gsap.TweenTarget,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    trigger?: string | Element;
    start?: string;
  }
) {
  return gsap.from(target, {
    y: options?.y ?? 60,
    opacity: 0,
    duration: options?.duration ?? DURATION.MEDIUM,
    stagger: options?.stagger ?? STAGGER.NORMAL,
    delay: options?.delay ?? 0,
    ease: EASE.POWER4_OUT,
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: options?.start ?? SCROLL_DEFAULTS.START,
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

/**
 * Scale-in entrance animation.
 */
export function createScaleIn(
  target: gsap.TweenTarget,
  options?: {
    scale?: number;
    duration?: number;
    stagger?: number;
    trigger?: string | Element;
    start?: string;
  }
) {
  return gsap.from(target, {
    scale: options?.scale ?? 0.9,
    opacity: 0,
    duration: options?.duration ?? DURATION.MEDIUM,
    stagger: options?.stagger ?? STAGGER.NORMAL,
    ease: EASE.POWER3_OUT,
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: options?.start ?? SCROLL_DEFAULTS.START,
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

/**
 * Slide-from-left entrance animation.
 */
export function createSlideFromLeft(
  target: gsap.TweenTarget,
  options?: {
    x?: number;
    duration?: number;
    stagger?: number;
    trigger?: string | Element;
    start?: string;
  }
) {
  return gsap.from(target, {
    x: options?.x ?? -80,
    opacity: 0,
    duration: options?.duration ?? DURATION.SLOW,
    stagger: options?.stagger ?? STAGGER.RELAXED,
    ease: EASE.POWER4_OUT,
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: options?.start ?? SCROLL_DEFAULTS.START,
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

/**
 * Slide-from-right entrance animation.
 */
export function createSlideFromRight(
  target: gsap.TweenTarget,
  options?: {
    x?: number;
    duration?: number;
    trigger?: string | Element;
    start?: string;
  }
) {
  return gsap.from(target, {
    x: options?.x ?? 80,
    opacity: 0,
    duration: options?.duration ?? DURATION.SLOW,
    ease: EASE.POWER4_OUT,
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: options?.start ?? SCROLL_DEFAULTS.START,
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

/**
 * Hover lift effect for cards.
 */
export function createHoverLift(element: Element) {
  const onEnter = () => {
    gsap.to(element, {
      y: -8,
      boxShadow: "0 20px 60px rgba(0, 102, 255, 0.3)",
      duration: DURATION.FAST,
      ease: EASE.POWER2_OUT,
    });
  };

  const onLeave = () => {
    gsap.to(element, {
      y: 0,
      boxShadow: "none",
      duration: DURATION.FAST,
      ease: EASE.POWER2_OUT,
    });
  };

  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
  };
}

/**
 * Counter animation for stat numbers.
 */
export function createCounter(
  target: gsap.TweenTarget,
  endValue: number,
  options?: {
    duration?: number;
    trigger?: string | Element;
    start?: string;
  }
) {
  return gsap.from(target, {
    textContent: 0,
    duration: options?.duration ?? 2,
    ease: EASE.POWER2_OUT,
    snap: { textContent: endValue >= 10 ? 1 : 0.1 },
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: options?.start ?? SCROLL_DEFAULTS.START,
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

/**
 * Check if user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
