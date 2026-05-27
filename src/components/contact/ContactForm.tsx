"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import NeuralNetwork from "@/components/svg/NeuralNetwork";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function ContactForm() {
  const container = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", institution: "", role: "", phone: "", country: "", requestType: "demo", message: "", consent: false,
  });

  useGSAP(() => {
    gsap.from(".cf-field", { y: 25, opacity: 0, stagger: 0.06, duration: 0.6, ease: "power4.out", scrollTrigger: { trigger: ".cf-form", start: "top 75%" } });
    gsap.from(".cf-info-card", { x: 50, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".cf-info-card", start: "top 75%" } });
    gsap.from(".cf-wrapper", { y: 40, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".cf-wrapper", start: "top 80%" } });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string | boolean) => setForm({ ...form, [field]: value });

  /* Shared inline styles */
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    fontWeight: 500,
    color: "var(--neutral-400)",
    marginBottom: "0.5rem",
    letterSpacing: "0.01em",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "0.75rem",
    background: "rgba(0, 0, 0, 0.03)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid var(--glass-border)",
    color: "var(--neutral-50)",
    fontSize: "0.9375rem",
    lineHeight: 1.5,
    transition: "all 0.3s ease",
    outline: "none",
  };

  return (
    <section
      ref={container}
      style={{
        paddingTop: "clamp(8rem, 16vh, 12rem)",
        paddingBottom: "clamp(4rem, 10vh, 7rem)",
        overflow: "hidden",
        position: "relative",
        background: "var(--hero-gradient)",
      }}
    >
      <NeuralNetwork className="absolute inset-0 z-0 pointer-events-none opacity-20" />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header — centered */}
        <div
          className="cf-wrapper"
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
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
            Contact Us
          </p>
          <h2
            className="heading-lg"
            style={{ marginBottom: "0.75rem" }}
          >
            Request a Demo
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--neutral-400)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Fill out the form and our team will get back to you within 24 hours to schedule your personalized demo.
          </p>
        </div>

        {/* Main content wrapper */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
          className="cf-grid-wrapper"
        >
          {/* Two-column layout at desktop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
          >
            {/* ── LARGE GLASS CARD wrapping form + info ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderRadius: "1.5rem",
                overflow: "hidden",
                background: "var(--glass-white)",
                backdropFilter: "blur(var(--glass-blur))",
                WebkitBackdropFilter: "blur(var(--glass-blur))",
                border: "1px solid var(--glass-border)",
                position: "relative",
              }}
            >
              {/* Gradient accent line at top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--primary-blue) 0%, var(--secondary-blue) 50%, var(--accent-green) 100%)",
                  borderRadius: "1.5rem 1.5rem 0 0",
                  zIndex: 2,
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0",
                }}
                className="cf-inner-grid"
              >
                {/* ── FORM COLUMN ── */}
                <div
                  style={{
                    padding: "3rem 2.5rem 3rem 2.5rem",
                  }}
                  className="cf-form-col"
                >
                  {submitted ? (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "4rem 2rem",
                      }}
                    >
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "50%",
                          background: "rgba(16, 185, 129, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1.5rem auto",
                        }}
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 16l6 6 10-10" />
                        </svg>
                      </div>
                      <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>Message Sent!</h3>
                      <p style={{ fontSize: "1rem", color: "var(--neutral-400)", lineHeight: 1.7 }}>
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="cf-form">
                      {/* Two-col row */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1.25rem",
                          marginBottom: "1.25rem",
                        }}
                        className="cf-2col"
                      >
                        <div className="cf-field">
                          <label style={labelStyle}>Full Name *</label>
                          <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} style={inputStyle} required />
                        </div>
                        <div className="cf-field">
                          <label style={labelStyle}>Email *</label>
                          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} style={inputStyle} required />
                        </div>
                      </div>

                      <div className="cf-field" style={{ marginBottom: "1.25rem" }}>
                        <label style={labelStyle}>Institution / Organization *</label>
                        <input type="text" value={form.institution} onChange={(e) => update("institution", e.target.value)} style={inputStyle} required />
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1.25rem",
                          marginBottom: "1.25rem",
                        }}
                        className="cf-2col"
                      >
                        <div className="cf-field">
                          <label style={labelStyle}>Role / Title *</label>
                          <input type="text" value={form.role} onChange={(e) => update("role", e.target.value)} style={inputStyle} required />
                        </div>
                        <div className="cf-field">
                          <label style={labelStyle}>Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} style={inputStyle} />
                        </div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1.25rem",
                          marginBottom: "1.25rem",
                        }}
                        className="cf-2col"
                      >
                        <div className="cf-field">
                          <label style={labelStyle}>Country *</label>
                          <select value={form.country} onChange={(e) => update("country", e.target.value)} style={{ ...inputStyle, cursor: "pointer" }} required>
                            <option value="">Select country</option>
                            <option>United States</option><option>United Arab Emirates</option><option>United Kingdom</option>
                            <option>Canada</option><option>Germany</option><option>India</option><option>Saudi Arabia</option><option>Other</option>
                          </select>
                        </div>
                        <div className="cf-field">
                          <label style={labelStyle}>Request Type</label>
                          <select value={form.requestType} onChange={(e) => update("requestType", e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                            <option value="demo">Demo Request</option><option value="partnership">Partnership Inquiry</option>
                            <option value="investment">Investment Opportunity</option><option value="general">General Question</option>
                          </select>
                        </div>
                      </div>

                      <div className="cf-field" style={{ marginBottom: "1.25rem" }}>
                        <label style={labelStyle}>Message *</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          style={{
                            ...inputStyle,
                            minHeight: "130px",
                            resize: "vertical",
                          }}
                          required
                        />
                      </div>

                      <div
                        className="cf-field"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.625rem",
                          marginBottom: "1.75rem",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          style={{
                            marginTop: "0.2rem",
                            accentColor: "var(--primary-blue)",
                          }}
                        />
                        <span style={{ fontSize: "0.8125rem", color: "var(--neutral-400)", lineHeight: 1.5 }}>
                          I agree to receive communications from Avyuct AI Labs
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="cf-field btn-primary"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          padding: "1rem 2.25rem",
                          fontSize: "0.9375rem",
                          borderRadius: "0.75rem",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.375rem" }}>
                          <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

                {/* ── INFO PANEL ── */}
                <div
                  className="cf-info-card cf-info-col"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 102, 255, 0.04) 0%, rgba(30, 58, 138, 0.02) 100%)",
                    borderTop: "1px solid var(--glass-border)",
                    padding: "3rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "var(--neutral-50)",
                      marginBottom: "0",
                    }}
                  >
                    Contact Information
                  </h3>

                  {/* HQ Card */}
                  <div
                    style={{
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      background: "rgba(0, 0, 0, 0.02)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "0.625rem",
                          background: "rgba(0, 102, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--neutral-100)" }}>Headquarters</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--neutral-400)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                      {CONTACT.headquarters.address}
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--primary-blue)",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                  {/* Dubai Card */}
                  <div
                    style={{
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      background: "rgba(0, 0, 0, 0.02)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "0.625rem",
                          background: "rgba(0, 102, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                      </div>
                      <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--neutral-100)" }}>Dubai Innovation Hub</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--neutral-400)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                      {CONTACT.dubai.address}
                    </p>
                    <a
                      href={`mailto:${CONTACT.dubaiEmail}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--primary-blue)",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                    >
                      {CONTACT.dubaiEmail}
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--neutral-100)" }}>Office Hours</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--neutral-400)", lineHeight: 1.8 }}>
                      Monday–Friday: 9:00 AM – 6:00 PM EST<br />
                      Saturday–Sunday: Closed
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--neutral-100)", marginBottom: "0.75rem" }}>Follow Us</p>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      {[
                        { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: <path d="M4 6a2 2 0 114 0 2 2 0 01-4 0zM4 10h4v12H4V10zM10 10h3.8l.2 1.7A5.8 5.8 0 0118 9.5c3.5 0 5 2.3 5 5.5v7h-4v-6.5c0-1.6-.8-2.5-2.2-2.5-1.5 0-2.8 1-2.8 2.5V22h-4V10z" /> },
                        { href: SOCIAL_LINKS.twitter, label: "X", icon: <path d="M4 4l7.2 9.6L4 22h2l6-7 5 7h5l-7.5-10L21 4h-2l-5.5 6.4L9 4H4z" /> },
                        { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: <path d="M22 8s-.3-2-1.2-2.8C19.8 4.3 18.5 4 13 4s-6.8.3-7.8 1.2C4.3 6 4 8 4 8s-.3 2 0 4 .3 4 .3 4 .3 2 1.2 2.8C6.2 19.7 7.5 20 13 20s6.8-.3 7.8-1.2c.9-.8 1.2-2.8 1.2-2.8s.3-2 0-4zM11 16V9l5 3.5-5 3.5z" /> },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0, 102, 255, 0.08)",
                            border: "1px solid rgba(0, 102, 255, 0.15)",
                            color: "var(--primary-blue)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles for the grid layout */}
      <style>{`
        @media (min-width: 1024px) {
          .cf-inner-grid {
            grid-template-columns: 3fr 2fr !important;
            gap: 0 !important;
          }
          .cf-info-col {
            border-top: none !important;
            border-left: 1px solid var(--glass-border) !important;
          }
        }
        @media (max-width: 640px) {
          .cf-2col {
            grid-template-columns: 1fr !important;
          }
          .cf-form-col {
            padding: 2rem 1.5rem !important;
          }
          .cf-info-col {
            padding: 2rem 1.5rem !important;
          }
        }
        .cf-form input:focus,
        .cf-form select:focus,
        .cf-form textarea:focus {
          border-color: var(--primary-blue) !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
