import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  SOCIAL_LINKS,
  CONTACT,
  FOOTER_BADGES,
} from "@/lib/constants";

/* ── Social SVG Icons ───────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ── Map-pin icon for office locations ──────────────────────────── */
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Mail icon ──────────────────────────────────────────────────── */
function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

/* ── Footer Component (Server Component) ────────────────────────── */
export default function Footer() {
  return (
    <footer className="relative bg-[var(--avyuct-mint)] border-t border-[var(--avyuct-slate)]/10 overflow-hidden text-[var(--avyuct-slate)]">
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--avyuct-green)]/10 blur-[150px] rounded-full pointer-events-none opacity-60" />
      
      <div className="relative container-narrow" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        {/* ── Three-column grid ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '6rem' }}>
          {/* Column 1 - Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group relative bg-black/5 p-2 rounded-xl border border-black/5 hover:bg-black/10 transition-colors duration-300 w-max">
              <div className="absolute inset-0 bg-[var(--avyuct-green)]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <Image
                src="/avyuct-logo-v2.png"
                alt="Avyuct AI Labs Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-[var(--avyuct-slate-light)] leading-relaxed max-w-sm text-sm lg:text-base font-medium">
              Pioneering AI-powered vascular health solutions. Detecting and localizing the
              strokes no one sees coming with advanced world models.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-black/5 border border-black/5 text-[var(--avyuct-slate)] hover:bg-[var(--avyuct-slate)] hover:border-[var(--avyuct-slate)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(43,63,76,0.3)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold tracking-wider text-[var(--avyuct-slate)] uppercase mb-8" style={{ marginBottom: '2.5rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-[var(--avyuct-slate-light)] font-medium hover:text-[var(--avyuct-slate)] transition-colors duration-300 text-sm lg:text-base"
                  >
                    <span className="w-0 h-[1px] bg-[var(--avyuct-green)] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--avyuct-green)]/10 border border-[var(--avyuct-green)]/30 text-[var(--avyuct-dark-green)] hover:bg-[var(--avyuct-green)] hover:text-white transition-all duration-300 text-sm font-bold group"
                >
                  Request Demo
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-[var(--avyuct-slate)] uppercase mb-8" style={{ marginBottom: '2.5rem' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-black/5 text-[var(--avyuct-green)] group-hover:bg-[var(--avyuct-green)] group-hover:text-white transition-colors duration-300">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-sm text-[var(--avyuct-slate-light)] font-medium" style={{ marginTop: "0.25rem" }}>
                    {CONTACT.headquarters.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 pt-2">
                <div className="p-2 rounded-lg bg-black/5 text-[var(--avyuct-green)] group-hover:bg-[var(--avyuct-green)] group-hover:text-white transition-colors duration-300">
                  <MailIcon />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-bold text-[var(--avyuct-slate)] hover:text-[var(--avyuct-green)] transition-colors duration-300"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="border-t border-[var(--avyuct-slate)]/10" style={{ marginTop: '6rem', paddingTop: '3rem' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[var(--avyuct-slate-light)] font-medium">
              © {new Date().getFullYear()} Avyuct AI Labs. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <span className="text-xs font-bold tracking-wide text-[var(--avyuct-slate)] uppercase">
                Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
