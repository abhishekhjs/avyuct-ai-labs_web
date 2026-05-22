import Link from "next/link";
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
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden text-white">
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--primary-blue)]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      
      <div className="relative container-narrow premium-footer-padding">
        {/* ── Three-column grid ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Column 1 — Company */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group relative">
              <div className="absolute inset-0 bg-[var(--primary-blue)]/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="w-8 h-8 relative z-10"
                aria-hidden="true"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="3"
                  fill="var(--primary-blue)"
                  opacity="0.9"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="10"
                  stroke="var(--primary-blue)"
                  strokeWidth="1.2"
                  opacity="0.3"
                  className="group-hover:stroke-[var(--secondary-blue)] group-hover:opacity-50 transition-all duration-500"
                />
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
                  className="group-hover:rotate-90 origin-center transition-transform duration-700"
                />
              </svg>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--primary-blue)] transition-all duration-300">
                Avyuct{" "}
                <span className="text-[var(--primary-blue)]">AI Labs</span>
              </span>
            </Link>

            <p className="text-white leading-relaxed max-w-sm text-sm lg:text-base">
              Pioneering AI-powered vascular health solutions. Detecting the
              strokes no one sees coming with advanced world models.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[var(--primary-blue)] hover:border-[var(--primary-blue)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[var(--primary-blue)] hover:border-[var(--primary-blue)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XIcon />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#ff0000] hover:border-[#ff0000] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-8 opacity-90">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    <span className="w-0 h-[1px] bg-[var(--primary-blue)] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/30 text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300 text-sm font-medium group"
                >
                  Request Demo
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-8 opacity-90">Contact</h3>
            <div className="space-y-6">
              {/* HQ */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors duration-300">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-white transition-colors">
                    {CONTACT.headquarters.name}
                  </p>
                  <p className="text-sm text-white mt-1">
                    {CONTACT.headquarters.address}
                  </p>
                  <p className="text-xs text-[var(--primary-blue)] font-medium mt-1.5 opacity-90">
                    {CONTACT.headquarters.role}
                  </p>
                </div>
              </div>

              {/* Dubai */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors duration-300">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-white transition-colors">
                    {CONTACT.dubai.name}
                  </p>
                  <p className="text-sm text-white mt-1">
                    {CONTACT.dubai.address}
                  </p>
                  <p className="text-xs text-[var(--primary-blue)] font-medium mt-1.5 opacity-90">
                    {CONTACT.dubai.role}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 pt-2">
                <div className="p-2 rounded-lg bg-white/5 text-[var(--primary-blue)]">
                  <MailIcon />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-medium text-white hover:text-[var(--primary-blue)] transition-colors duration-300"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Avyuct AI Labs. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <span className="text-xs font-mono tracking-wider text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {FOOTER_BADGES.join(" • ")}
              </span>
              <span className="hidden sm:inline text-white">|</span>
              <span className="text-xs font-medium tracking-wide text-white uppercase">
                Herndon, VA <span className="text-[var(--primary-blue)] mx-1">•</span> Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
