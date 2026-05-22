"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function ContactForm() {
  const container = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", institution: "", role: "", phone: "", country: "", requestType: "demo", message: "", consent: false,
  });

  useGSAP(() => {
    gsap.from(".cf-field", { y: 25, opacity: 0, stagger: 0.06, duration: 0.6, ease: "power4.out", scrollTrigger: { trigger: ".cf-form", start: "top 75%" } });
    gsap.from(".cf-info", { x: 50, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".cf-info", start: "top 75%" } });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string | boolean) => setForm({ ...form, [field]: value });

  return (
    <section ref={container} className="section-padding overflow-hidden">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="heading-md mb-8">Request a Demo</h2>
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(16,185,129,0.15)] flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 16l6 6 10-10" />
                  </svg>
                </div>
                <h3 className="heading-sm">Message Sent!</h3>
                <p className="body-md mt-2">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cf-form glass-card p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Full Name *</label>
                    <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="glass-input w-full rounded-lg p-3" required />
                  </div>
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="glass-input w-full rounded-lg p-3" required />
                  </div>
                </div>
                <div className="cf-field">
                  <label className="text-sm text-neutral-400 mb-1.5 block">Institution / Organization *</label>
                  <input type="text" value={form.institution} onChange={(e) => update("institution", e.target.value)} className="glass-input w-full rounded-lg p-3" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Role / Title *</label>
                    <input type="text" value={form.role} onChange={(e) => update("role", e.target.value)} className="glass-input w-full rounded-lg p-3" required />
                  </div>
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="glass-input w-full rounded-lg p-3" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Country *</label>
                    <select value={form.country} onChange={(e) => update("country", e.target.value)} className="glass-input w-full rounded-lg p-3" required>
                      <option value="">Select country</option>
                      <option>United States</option><option>United Arab Emirates</option><option>United Kingdom</option>
                      <option>Canada</option><option>Germany</option><option>India</option><option>Saudi Arabia</option><option>Other</option>
                    </select>
                  </div>
                  <div className="cf-field">
                    <label className="text-sm text-neutral-400 mb-1.5 block">Request Type</label>
                    <select value={form.requestType} onChange={(e) => update("requestType", e.target.value)} className="glass-input w-full rounded-lg p-3">
                      <option value="demo">Demo Request</option><option value="partnership">Partnership Inquiry</option>
                      <option value="investment">Investment Opportunity</option><option value="general">General Question</option>
                    </select>
                  </div>
                </div>
                <div className="cf-field">
                  <label className="text-sm text-neutral-400 mb-1.5 block">Message *</label>
                  <textarea value={form.message} onChange={(e) => update("message", e.target.value)} className="glass-input w-full rounded-lg p-3 min-h-[120px] resize-y" required />
                </div>
                <div className="cf-field flex items-start gap-2">
                  <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 accent-[var(--primary-blue)]" />
                  <span className="text-sm text-neutral-400">I agree to receive communications from Avyuct AI Labs</span>
                </div>
                <button type="submit" className="cf-field btn-primary w-full justify-center">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="cf-info lg:col-span-2">
            <h2 className="heading-md mb-8">Contact Information</h2>
            <div className="glass-card p-8 mb-6">
              <h3 className="heading-sm text-sm">Headquarters</h3>
              <p className="body-md text-sm mt-2">{CONTACT.headquarters.address}</p>
              <a href={`mailto:${CONTACT.email}`} className="mono-text text-xs mt-2 block hover:text-[var(--primary-blue)] transition-colors">{CONTACT.email}</a>
            </div>
            <div className="glass-card p-8 mb-8">
              <h3 className="heading-sm text-sm">Dubai Innovation Hub</h3>
              <p className="body-md text-sm mt-2">{CONTACT.dubai.address}</p>
              <a href={`mailto:${CONTACT.dubaiEmail}`} className="mono-text text-xs mt-2 block hover:text-[var(--primary-blue)] transition-colors">{CONTACT.dubaiEmail}</a>
            </div>
            <div className="mb-6">
              <h4 className="heading-sm text-sm mb-2">Office Hours</h4>
              <p className="body-md text-sm">Monday–Friday: 9:00 AM – 6:00 PM EST</p>
              <p className="body-md text-sm">Saturday–Sunday: Closed</p>
            </div>
            <div>
              <h4 className="heading-sm text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: <path d="M4 6a2 2 0 114 0 2 2 0 01-4 0zM4 10h4v12H4V10zM10 10h3.8l.2 1.7A5.8 5.8 0 0118 9.5c3.5 0 5 2.3 5 5.5v7h-4v-6.5c0-1.6-.8-2.5-2.2-2.5-1.5 0-2.8 1-2.8 2.5V22h-4V10z" /> },
                  { href: SOCIAL_LINKS.twitter, label: "X", icon: <path d="M4 4l7.2 9.6L4 22h2l6-7 5 7h5l-7.5-10L21 4h-2l-5.5 6.4L9 4H4z" /> },
                  { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: <path d="M22 8s-.3-2-1.2-2.8C19.8 4.3 18.5 4 13 4s-6.8.3-7.8 1.2C4.3 6 4 8 4 8s-.3 2 0 4 .3 4 .3 4 .3 2 1.2 2.8C6.2 19.7 7.5 20 13 20s6.8-.3 7.8-1.2c.9-.8 1.2-2.8 1.2-2.8s.3-2 0-4zM11 16V9l5 3.5-5 3.5z" /> },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="glass-button rounded-full w-10 h-10 flex items-center justify-center" aria-label={s.label}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
