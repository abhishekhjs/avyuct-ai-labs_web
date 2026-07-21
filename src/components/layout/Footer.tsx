"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT } from "@/lib/constants";

/* ── Social SVG Icons ───────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

/* ── Footer Component ───────────────────────────────────────────── */
export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dubai is UTC+4
      const dubaiTimeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dubai",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(dubaiTimeStr);

      const dubaiHour = parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dubai",
          hour: "numeric",
          hour12: false,
        }),
        10
      );
      setIsDay(dubaiHour >= 6 && dubaiHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[var(--neutral-950)] py-6 px-2 md:px-4 lg:px-6 flex flex-col items-center">
      {/* Curved Card Container */}
      <div 
        className="relative w-full max-w-[1680px] mx-auto text-[#111111] overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: "#E2EFE5",
          borderRadius: "2.5rem",
          minHeight: "480px",
        }}
      >
        {/* Main Grid Content */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 relative z-10"
          style={{
            paddingLeft: "clamp(2rem, 5vw, 5rem)",
            paddingRight: "clamp(2rem, 5vw, 5rem)",
            paddingTop: "4.5rem",
          }}
        >
          {/* Column 1 - Bio/Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-bold tracking-tight leading-snug max-w-sm text-[#111111]">
              Avyuct AI Labs is building sovereign UAE IP for predictive healthcare and stroke intelligence.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-neutral-700 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Social Badges */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <div className="flex flex-col gap-2.5 items-start">
              {/* LinkedIn pill */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-full border border-black/10 shadow-sm text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-colors whitespace-nowrap"
              >
                <span className="w-5 h-5 rounded-full bg-[#0077b5] flex items-center justify-center text-white shrink-0">
                  <LinkedInIcon />
                </span>
                <span>Avyuct AI Labs</span>
              </a>

              {/* Email pill */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-full border border-black/10 shadow-sm text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-colors whitespace-nowrap"
              >
                <span className="w-5 h-5 rounded-full bg-[#32a758] flex items-center justify-center text-white shrink-0">
                  <MailIcon />
                </span>
                <span>info@avyuct.com</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Actions */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Action 1 */}
            <Link href="/contact" className="group flex flex-col gap-1 w-fit">
              <span className="text-xl font-bold tracking-tight text-[#CE1126] flex items-center gap-2">
                Call Avyuct
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CE1126] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                  <ArrowUpRightIcon />
                </span>
              </span>
              <span className="text-xs font-semibold text-neutral-500">
                Let's work together
              </span>
            </Link>

            {/* Action 2 */}
            <Link href="/#stroke-detection" className="group flex flex-col gap-1 w-fit">
              <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-2">
                Solutions & Tech
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111111] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                  <ArrowUpRightIcon />
                </span>
              </span>
              <span className="text-xs font-semibold text-neutral-500">
                Explore our world models
              </span>
            </Link>
          </div>
        </div>

        {/* Large bottom logo text */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none mt-12 md:mt-16 flex justify-center">
          <span 
            className="font-black text-[15vw] leading-none tracking-tighter text-[#111111] translate-y-[22%] font-sans whitespace-nowrap inline-flex items-baseline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            av<span className="inline-block" style={{ fontSize: "0.82em", transform: "translateY(-0.1em)" }}>y</span>uct
          </span>
        </div>
      </div>

      {/* Under-card info bar */}
      <div 
        className="w-full max-w-[1680px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-600"
        style={{ marginTop: "1.5rem" }}
      >
        <div>
          Avyuct © {new Date().getFullYear()} •{" "}
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>Dubai, UAE</span>
          <span>•</span>
          <span className="tabular-nums">{currentTime || "12:00 PM"}</span>
          <span>•</span>
          <span>36°C {isDay ? "☀️" : "🌙"}</span>
        </div>
      </div>
    </footer>
  );
}
