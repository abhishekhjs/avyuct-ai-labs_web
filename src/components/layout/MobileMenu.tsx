"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/* ── Props ──────────────────────────────────────────────────────── */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ── MobileMenu Component ───────────────────────────────────────── */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  /* Lock body scroll while menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on route change */
  useEffect(() => {
    if (isOpen) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* GSAP animation for open/close */
  useGSAP(
    () => {
      if (!overlayRef.current) return;

      const overlay = overlayRef.current;
      const links = overlay.querySelectorAll("[data-menu-link]");
      const cta = overlay.querySelector("[data-menu-cta]");

      /* Kill any existing timeline to avoid stacking */
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      if (isOpen) {
        /* Make visible before animating in */
        gsap.set(overlay, { display: "flex" });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
          overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.35 }
        )
          .fromTo(
            links,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            "-=0.15"
          )
          .fromTo(
            cta,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 },
            "-=0.2"
          );

        timelineRef.current = tl;
      } else {
        const tl = gsap.timeline({
          defaults: { ease: "power4.in" },
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
          },
        });

        tl.to(cta, { y: 20, opacity: 0, duration: 0.25 })
          .to(
            links,
            { y: -20, opacity: 0, duration: 0.3, stagger: 0.05 },
            "-=0.15"
          )
          .to(overlay, { opacity: 0, duration: 0.25 }, "-=0.1");

        timelineRef.current = tl;
      }
    },
    { scope: overlayRef, dependencies: [isOpen] }
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 hidden flex-col items-center justify-center bg-[var(--neutral-950)]/95 backdrop-blur-xl"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal={isOpen}
      aria-label="Mobile navigation menu"
    >
      {/* ── Nav links — large, stacked, centered ─────────── */}
      <nav className="flex flex-col items-center gap-6 mb-12">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-menu-link
              onClick={onClose}
              className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${
                isActive
                  ? "text-[var(--primary-blue)]"
                  : "text-neutral-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* ── CTA button ───────────────────────────────────── */}
      <Link
        href="/contact"
        data-menu-cta
        onClick={onClose}
        className="btn-primary !py-4 !px-10 !text-lg"
      >
        Request Demo
      </Link>
    </div>
  );
}
