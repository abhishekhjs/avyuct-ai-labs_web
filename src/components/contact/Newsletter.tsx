"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function Newsletter() {
  const container = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.from(".nl-section", { y: 40, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".nl-section", start: "top 85%" } });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      ref={container}
      style={{
        background: "var(--deep-navy)",
        paddingTop: "clamp(4rem, 10vh, 7rem)",
        paddingBottom: "clamp(4rem, 10vh, 7rem)",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          className="nl-section"
          style={{
            background: "var(--glass-white)",
            backdropFilter: "blur(var(--glass-blur))",
            WebkitBackdropFilter: "blur(var(--glass-blur))",
            border: "1px solid var(--glass-border)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative gradient accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--primary-blue), transparent)",
              borderRadius: "2px",
            }}
          />

          {submitted ? (
            <div style={{ padding: "1rem 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(16, 185, 129, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem auto",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-9" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--neutral-50)",
                  marginBottom: "0.5rem",
                }}
              >
                You&apos;re subscribed!
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--neutral-400)", lineHeight: 1.7 }}>
                Welcome aboard. You&apos;ll hear from us soon.
              </p>
            </div>
          ) : (
            <>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "var(--neutral-50)",
                  marginBottom: "0.625rem",
                }}
              >
                Stay Updated
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--neutral-400)",
                  maxWidth: "420px",
                  margin: "0 auto 1.75rem auto",
                }}
              >
                Get the latest news on AI-powered stroke detection and vascular intelligence.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0",
                  maxWidth: "460px",
                  margin: "0 auto",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  border: "1px solid var(--glass-border)",
                  background: "rgba(0, 0, 0, 0.02)",
                }}
                className="nl-form-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    padding: "0.875rem 1rem",
                    background: "transparent",
                    border: "none",
                    color: "var(--neutral-50)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.875rem 1.75rem",
                    background: "var(--primary-blue)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  Subscribe
                </button>
              </form>

              <p
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--neutral-500)",
                  marginTop: "1rem",
                  letterSpacing: "0.01em",
                }}
              >
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 480px) {
          .nl-form-row {
            flex-direction: column !important;
            border-radius: 0.75rem !important;
          }
          .nl-form-row button {
            border-radius: 0 0 0.75rem 0.75rem !important;
          }
          .nl-section {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
