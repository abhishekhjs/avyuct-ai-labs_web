"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle, Clock, Calendar, Building2, ShieldCheck, FileText, FlaskConical, Verified } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: "2023",
    title: "Algorithm development",
    desc: "DMVO detection model trained on expert-adjudicated datasets",
    status: "done",
  },
  {
    year: "2024",
    title: "NIH StrokeNet partnership",
    desc: "Clinical validation with institutional partners established",
    status: "done",
  },
  {
    year: "2025",
    title: "DISTALS trial participation",
    desc: "Independent clinical trial data supporting efficacy",
    status: "done",
  },
  {
    year: "2026 - current",
    title: "510(k) application submitted",
    desc: "FDA review underway; typical timeline 3–12 months from submission",
    status: "active",
  },
  {
    year: "Anticipated",
    title: "Full commercial deployment",
    desc: "Unrestricted US hospital deployment post-clearance",
    status: "pending",
  },
];

const infoCards = [
  {
    icon: <Verified className="w-6 h-6 text-[var(--primary-blue)]" />,
    label: "Clearance type",
    value: "FDA 510(k)",
    note: "Class II medical device",
  },
  {
    icon: <Calendar className="w-6 h-6 text-[var(--primary-blue)]" />,
    label: "Submission",
    value: "2026",
    note: "Application submitted",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[var(--primary-blue)]" />,
    label: "Pilots available",
    value: "Now",
    note: "Select institutions",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[var(--primary-blue)]" />,
    label: "Data handling",
    value: "HIPAA",
    note: "Local edge processing",
  },
];

const audienceCards = [
  {
    audience: "Hospital admins",
    body: "Pilot programs available now under IRB or research agreements. Full reimbursement pathway opens post-clearance.",
  },
  {
    audience: "Radiologists & neurologists",
    body: "AI runs as a decision-support tool - clinician retains final judgment. Designed to meet FDA's SaMD guidance.",
  },
  {
    audience: "IT & procurement",
    body: "PACS/RIS compatible, DICOM compliant, local edge processing - no PHI leaves your network.",
  },
];

const dotStyles: Record<string, string> = {
  done: "bg-green-500 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]",
  active: "bg-amber-500 border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
  pending: "bg-neutral-800 border-neutral-600",
};

export default function RegulatorySection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(".anim-header", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-header", start: "top 85%" },
      });

      // Badges stagger
      gsap.from(".anim-badge", {
        scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".anim-badge-container", start: "top 85%" },
      });

      // Info Cards stagger
      gsap.from(".anim-card", {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-card-container", start: "top 80%" },
      });

      // Timeline line growth
      gsap.from(".anim-timeline-line", {
        scaleY: 0, transformOrigin: "top", duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-timeline-container", start: "top 75%" },
      });

      // Timeline items stagger
      gsap.from(".anim-timeline-item", {
        x: -30, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-timeline-container", start: "top 75%" },
      });

      // Audience cards stagger
      gsap.from(".anim-audience-card", {
        x: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-audience-container", start: "top 75%" },
      });

      // Pilot CTA
      gsap.from(".anim-pilot-cta", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".anim-pilot-cta", start: "top 85%" },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="section-padding relative overflow-hidden flex flex-col items-center">
      <div className="container-narrow relative z-10 w-full flex flex-col">
        
        {/* Header */}
        <div className="anim-header text-center flex flex-col items-center" style={{ marginBottom: "6rem" }}>
          <p className="label-text tracking-widest text-black" style={{ marginBottom: "1.5rem" }}>
            Regulatory & compliance
          </p>
          <h2 className="heading-lg leading-tight max-w-3xl text-black">
            FDA clearance in <span className="text-gradient">progress.</span>
          </h2>
          <p className="body-lg text-neutral-800 max-w-2xl leading-relaxed font-medium" style={{ marginTop: "2rem" }}>
            Avyuct AI is currently in the FDA 510(k) clearance pathway. Pilot
            deployments are available now for qualifying institutions - full
            commercial deployment follows clearance.
          </p>
        </div>

        {/* Status badges */}
        <div className="anim-badge-container flex flex-wrap justify-center" style={{ gap: "1.5rem", marginBottom: "6rem" }}>
          <span className="anim-badge inline-flex items-center text-sm font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-md" style={{ gap: "0.75rem", padding: "0.875rem 2rem" }}>
            <Clock className="w-4 h-4" />
            FDA 510(k) - submitted 2026
          </span>
          <span className="anim-badge inline-flex items-center text-sm font-medium rounded-full bg-green-500/10 text-black border border-green-500/30 backdrop-blur-md" style={{ gap: "0.75rem", padding: "0.875rem 2rem" }}>
            <CheckCircle className="w-4 h-4 text-green-600" />
            HIPAA compliant
          </span>
          <span className="anim-badge inline-flex items-center text-sm font-medium rounded-full bg-green-500/10 text-black border border-green-500/30 backdrop-blur-md" style={{ gap: "0.75rem", padding: "0.875rem 2rem" }}>
            <CheckCircle className="w-4 h-4 text-green-600" />
            UAE Ministry of Health
          </span>
          <span className="anim-badge inline-flex items-center text-sm font-medium rounded-full bg-green-500/10 text-black border border-green-500/30 backdrop-blur-md" style={{ gap: "0.75rem", padding: "0.875rem 2rem" }}>
            <FileText className="w-4 h-4 text-green-600" />
            5 US patents filed
          </span>
        </div>

        {/* Info metric cards */}
        <div className="anim-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4" style={{ gap: "2rem", marginBottom: "6rem" }}>
          {infoCards.map((card) => (
            <div key={card.label} className="anim-card">
              <GlassCard hover className="flex flex-col items-center text-center p-6 bg-white/5 border-white/20 h-full">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/20" style={{ marginBottom: "1.5rem" }}>{card.icon}</div>
              <p className="label-text text-xs text-neutral-800" style={{ marginBottom: "0.75rem" }}>
                {card.label}
              </p>
              <p className="heading-sm text-black text-xl" style={{ marginBottom: "1rem" }}>
                {card.value}
              </p>
              <p className="body-lg text-sm text-neutral-600 font-medium mt-auto">{card.note}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ marginTop: "5rem", marginBottom: "5rem" }} />

        {/* Two-column: timeline + audience */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "6rem", marginBottom: "6rem" }}>
          {/* Timeline */}
          <div className="anim-timeline-container">
            <p className="label-text tracking-widest text-black" style={{ marginBottom: "3rem" }}>
              Regulatory pathway
            </p>
            <div className="anim-timeline-line relative border-l border-white/30 ml-3 pl-8" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {milestones.map((m) => (
                <div key={m.title} className="anim-timeline-item relative">
                  <span
                    className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-2 ${dotStyles[m.status]}`}
                  />
                  <p className="mono-text text-[var(--secondary-blue)] font-medium" style={{ marginBottom: "0.75rem" }}>{m.year}</p>
                  <p className="heading-sm text-black text-xl" style={{ marginBottom: "0.75rem" }}>
                    {m.title}
                  </p>
                  <p className="body-lg text-[15px] text-neutral-800 leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Audience cards */}
          <div className="anim-audience-container">
            <p className="label-text tracking-widest text-black" style={{ marginBottom: "3rem" }}>
              What this means for you
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {audienceCards.map((card) => (
                <div key={card.audience} className="anim-audience-card">
                  <GlassCard
                    className="p-8 border-l-[4px] border-l-[var(--primary-blue)] border-y-white/20 border-r-white/20 bg-white/5 h-full"
                  >
                  <p className="label-text text-black font-bold" style={{ marginBottom: "1.25rem" }}>
                    {card.audience}
                  </p>
                  <p className="body-lg text-[16px] text-neutral-800 leading-relaxed font-medium">
                    {card.body}
                  </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilot CTA banner */}
        <div className="anim-pilot-cta">
          <GlassCard className="flex flex-col sm:flex-row items-start p-10 bg-[#0066FF]/10 border-[#0066FF]/30" style={{ marginTop: "4rem", gap: "2.5rem" }}>
          <div className="bg-[#0066FF]/30 p-4 rounded-2xl shrink-0 border border-[#0066FF]/40">
            <FlaskConical className="w-8 h-8 text-[var(--primary-blue)]" />
          </div>
          <div className="flex-1">
            <p className="body-lg text-neutral-800 leading-relaxed text-lg font-medium">
              <span className="text-black font-bold block heading-sm text-2xl" style={{ marginBottom: "1rem" }}>Interested in a pilot deployment?</span>
              We're onboarding a limited number of partner institutions ahead of
              full FDA clearance. Pilots run under existing research and IRB
              frameworks - no clearance required to start evaluating.
            </p>
            <div className="flex flex-wrap" style={{ marginTop: "3rem", gap: "1.5rem" }}>
              <Link href="/contact" className="btn-primary">
                Request a pilot demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" style={{ marginLeft: "0.5rem" }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Download compliance overview
              </Link>
            </div>
          </div>
        </GlassCard>
        </div>

      </div>
    </section>
  );
}
