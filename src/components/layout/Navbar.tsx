"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
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


  return (
    <header
      ref={headerRef}
      className="glass-nav fixed top-0 left-0 w-full z-50 will-change-transform"
    >
      <nav className="container-narrow flex items-center justify-between h-16 md:h-[72px]">
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/avyuct-logo-v2.png"
            alt="Avyuct AI Labs Logo"
            width={160}
            height={48}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
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
                  {/* Underline animation - slides in from left on hover */}
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
            className="hidden md:inline-flex items-center justify-center bg-[var(--avyuct-green)] hover:bg-[var(--avyuct-dark-green)] !text-white font-medium rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(50,167,88,0.39)] hover:shadow-[0_6px_20px_rgba(50,167,88,0.23)] hover:-translate-y-0.5 !px-6 !py-2.5 !text-base tracking-wide"
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
