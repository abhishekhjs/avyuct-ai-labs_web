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
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 origin-center ${
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
      style={{
        position: "fixed",
        top: "1.5rem",
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        pointerEvents: "none",
      }}
    >
      <nav 
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          width: "100%",
          maxWidth: "64rem",
          height: "4rem",
          paddingLeft: "1.75rem",
          paddingRight: "0.375rem",
          borderRadius: "9999px",
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.1)",
          transition: "all 300ms ease",
        }}
      >
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link 
          href="/" 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
            zIndex: 10,
            textDecoration: "none",
          }}
        >
          <Image
            src="/avyuct-logo-v2.png"
            alt="Avyuct AI Labs Logo"
            width={140}
            height={40}
            style={{
              height: "2.25rem",
              width: "auto",
              objectFit: "contain",
            }}
            priority
          />
        </Link>

        {/* Desktop Nav Links (Centered absolute positioning) */}
        <ul 
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} style={{ textAlign: "center" }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: isActive ? "#000000" : "#1e293b",
                    transition: "color 200ms ease",
                    textDecoration: "none",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right side: CTA + Hamburger ──────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", zIndex: 10 }}>
          <Link
            href="/contact"
            className="hidden md:inline-flex group"
            style={{
              backgroundColor: "#090d16",
              color: "#ffffff",
              borderRadius: "9999px",
              height: "3.25rem",
              paddingLeft: "1.75rem",
              paddingRight: "1.75rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <span>Request Demo</span>
            <span style={{ fontSize: "0.75rem", transition: "transform 300ms ease" }} aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile hamburger (visible below md only) */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="flex md:hidden items-center justify-center"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(15, 23, 42, 0.08)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 200ms ease",
            }}
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
