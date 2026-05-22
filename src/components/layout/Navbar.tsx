"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/* ── Inline SVG: Neural vessel / brain icon ─────────────────────── */
function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central node */}
      <circle cx="14" cy="14" r="3" fill="var(--primary-blue)" opacity="0.9" />
      {/* Outer ring */}
      <circle
        cx="14"
        cy="14"
        r="10"
        stroke="var(--primary-blue)"
        strokeWidth="1.2"
        opacity="0.3"
      />
      {/* Neural connection paths */}
      <path
        d="M14 4v7M14 17v7M4 14h7M17 14h7"
        stroke="var(--primary-blue)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M7.1 7.1l4.9 4.9M16 16l4.9 4.9M20.9 7.1l-4.9 4.9M12 16l-4.9 4.9"
        stroke="var(--secondary-blue)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Small connection nodes */}
      <circle cx="14" cy="4" r="1.5" fill="var(--secondary-blue)" opacity="0.6" />
      <circle cx="14" cy="24" r="1.5" fill="var(--secondary-blue)" opacity="0.6" />
      <circle cx="4" cy="14" r="1.5" fill="var(--secondary-blue)" opacity="0.6" />
      <circle cx="24" cy="14" r="1.5" fill="var(--secondary-blue)" opacity="0.6" />
    </svg>
  );
}

/* ── Hamburger / X icon ─────────────────────────────────────────── */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-neutral-50 rounded-full transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-neutral-50 rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-neutral-50 rounded-full transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
}

/* ── Props ──────────────────────────────────────────────────────── */
interface NavbarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

/* ── Navbar Component ───────────────────────────────────────────── */
export default function Navbar({ isMenuOpen, onMenuToggle }: NavbarProps) {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  /* Scroll direction: show/hide header with GSAP */
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      if (!headerRef.current) {
        ticking.current = false;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        /* Scrolling down — hide */
        gsap.to(headerRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power4.out",
        });
      } else {
        /* Scrolling up — show */
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power4.out",
        });
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    });
  }, []);

  useGSAP(
    () => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="glass-nav fixed top-0 left-0 w-full z-50 will-change-transform"
    >
      <nav className="container-narrow flex items-center justify-between h-16 md:h-[72px]">
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <BrainIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-bold tracking-tight text-neutral-50">
            Avyuct{" "}
            <span className="text-[var(--primary-blue)]">AI Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive
                      ? "text-[var(--primary-blue)]"
                      : "text-neutral-300 hover:text-neutral-50"
                  }`}
                >
                  {link.label}
                  {/* Underline animation — slides in from left on hover */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--primary-blue)] rounded-full transition-transform duration-300 origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right side: CTA + Hamburger ──────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-sm"
          >
            Request Demo
          </Link>

          {/* Mobile hamburger (visible md and below) */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-white/10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>
    </header>
  );
}
