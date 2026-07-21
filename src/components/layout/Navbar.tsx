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
      className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <nav 
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl h-14 md:h-16 px-8 md:px-10 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.1)] transition-all duration-300"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 shrink-0 ml-6" style={{ marginLeft: "1.5rem" }}>
          <Image
            src="/avyuct-logo-v2.png"
            alt="Avyuct AI Labs Logo"
            width={140}
            height={40}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-black"
                      : "text-slate-800 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right side: CTA + Hamburger ──────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center group"
            style={{
              backgroundColor: "#090d16",
              color: "#ffffff",
              borderRadius: "9999px",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <span>Request Demo</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile hamburger (visible md and below) */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-white/20"
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
