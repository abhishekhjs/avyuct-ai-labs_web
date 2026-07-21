"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

const InteractiveBrain = dynamic(() => import("@/components/solutions/InteractiveBrain"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CARDS = [
  {
    id: "vascular-mapping",
    title: "Dynamic Vascular Mapping",
    description: "Reconstructs detailed vascular trees and structural connections across the brain in real time.",
    tag: "3D MESH & TREES",
  },
  {
    id: "risk-assessment",
    title: "Assess Vascular Risks",
    description: "Analyze cerebral blood flow, map coronary artery, and assess peripheral vascular risk.",
    tag: "FULL-BODY SCAN",
  },
  {
    id: "early-intervention",
    title: "Early Intervention Support",
    description: "Empowers clinical teams to identify sub-clinical changes before reaching critical stages.",
    tag: "CLINICAL TRIAGE",
  },
];

export default function NeurovascularSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".neuro-left-box", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 85%", once: true },
      });

      gsap.from(".neuro-right-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 85%", once: true },
      });

      gsap.from(".neuro-right-card", {
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".neuro-right-cards", start: "top 90%", once: true },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fdfdfd",
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute inset-0 bg-dots pointer-events-none" style={{ opacity: 0.25 }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "550px",
          borderRadius: "9999px",
          pointerEvents: "none",
          opacity: 0.2,
          background: "radial-gradient(circle, rgba(50, 167, 88, 0.15) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{
            display: "grid",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >

          {/* ─── LEFT COLUMN: Visual Box (Top) + Text (Bottom) ─── */}
          <div
            className="neuro-left-box lg:col-span-5"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top Large Visual Box */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                borderRadius: "1.5rem",
                overflow: "hidden",
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Sensitivity Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  zIndex: 20,
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: "#34d399",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.1em",
                  }}
                >
                  86% SENSITIVITY
                </span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  zIndex: 20,
                  padding: "0.375rem 0.875rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #334155",
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "#cbd5e1",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  NEUROVASCULAR AI
                </span>
              </div>

              {/* Radial glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 0,
                  background: "radial-gradient(circle at center, rgba(50, 167, 88, 0.18) 0%, transparent 70%)",
                }}
              />

              {/* 3D Interactive Brain Model */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 10,
                  cursor: "grab",
                }}
              >
                <InteractiveBrain scaleFactor={0.75} dotColor="#ffffff" yOffset={0} />
              </div>
            </div>

            {/* Bottom Text Under Visual Box */}
            <div style={{ paddingLeft: "0.25rem", paddingRight: "0.5rem", paddingTop: "0.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#059669",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                THE NEXT GENERATION
              </p>
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 400,
                  color: "#0f172a",
                  lineHeight: 1.25,
                  marginBottom: "0.75rem",
                }}
              >
                Autonomous Medical Intelligence
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#475569",
                  lineHeight: 1.65,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                The Neurovascular World Model goes beyond image analysis to understand the brain&apos;s vascular system and its underlying dynamics, enabling earlier detection before critical stages.
              </p>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Section Header (Top) + 3 Cards (Bottom) ─── */}
          <div
            className="lg:col-span-7"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >

            {/* Top Right Section Header */}
            <div className="neuro-right-header" style={{ marginBottom: "2.5rem" }}>
              <h2
                className="font-serif"
                style={{
                  fontSize: "2.85rem",
                  fontWeight: 400,
                  color: "#0f172a",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                Building <span className="text-gradient">Neurovascular World Model</span>
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#475569",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                A foundation AI model trained to map biological normalcy across cerebral vasculature - detecting and localizing life-threatening anomalies at the speed and accuracy no human can consistently match.
              </p>
            </div>

            {/* 3 Stacked Rectangular Cards */}
            <div className="neuro-right-cards" style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="neuro-right-card"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1rem",
                    padding: "2.25rem 2.5rem",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    opacity: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <h4
                      className="font-serif"
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 400,
                        color: "#0f172a",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#047857",
                        backgroundColor: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#475569",
                      lineHeight: 1.7,
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
