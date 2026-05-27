"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

const cards = [
  {
    title: "Direct Email",
    description: "Send us an email and we'll respond within 24 hours.",
    linkText: CONTACT.email,
    linkHref: `mailto:${CONTACT.email}`,
    isExternal: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    title: "Schedule a Call",
    description: "Book a 30-minute call with our team.",
    linkText: "Schedule Now",
    linkHref: CONTACT.calendly,
    isButton: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3" /><path d="M3 10h18M8 2v4M16 2v4" /><rect x="8" y="14" width="3" height="3" rx="0.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Connect on LinkedIn",
    description: "Follow our updates and reach out via LinkedIn.",
    linkText: "Follow Us",
    linkHref: SOCIAL_LINKS.linkedin,
    isButton: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 11v5M8 8v.01M12 16v-5a2 2 0 014 0v5" />
      </svg>
    ),
  },
];

export default function AltContact() {
  const container = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".alt-header", { y: 50, autoAlpha: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".alt-header", start: "top 85%" } });
    gsap.from(".alt-card", { scale: 0.95, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: "power3.out", immediateRender: false, scrollTrigger: { trigger: ".alt-grid", start: "top 85%" } });
  }, { scope: container });

  return (
    <section
      ref={container}
      style={{
        background: "var(--deep-navy)",
        paddingTop: "clamp(5rem, 12vh, 9rem)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Centered header */}
        <div
          className="alt-header"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary-blue)",
              marginBottom: "1rem",
            }}
          >
            Other Ways to Reach Us
          </p>
          <h2
            className="heading-lg"
            style={{ marginBottom: "0.75rem" }}
          >
            Prefer Another Way?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--neutral-400)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Choose the method that works best for you. We&apos;re here to help.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="alt-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="alt-card glass-card-hover"
              style={{
                padding: "2.5rem 2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                background: "#FFFFFF",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "1rem",
                  background: "rgba(0, 102, 255, 0.08)",
                  border: "1px solid rgba(0, 102, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--neutral-50)",
                  marginBottom: "0.5rem",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--neutral-400)",
                  marginBottom: "1.25rem",
                }}
              >
                {card.description}
              </p>

              {card.isButton ? (
                <Link
                  href={card.linkHref}
                  target="_blank"
                  className="btn-secondary"
                  style={{
                    fontSize: "0.8125rem",
                    padding: "0.625rem 1.5rem",
                    marginTop: "auto",
                  }}
                >
                  {card.linkText}
                </Link>
              ) : (
                <a
                  href={card.linkHref}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--primary-blue)",
                    textDecoration: "none",
                    marginTop: "auto",
                    transition: "opacity 0.2s",
                  }}
                >
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
