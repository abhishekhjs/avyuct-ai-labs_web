"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STROKE_TABS } from "@/lib/constants";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StrokeDetection() {
  const container = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("dmvo");

  useGSAP(
    () => {
      gsap.from(".stroke-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".stroke-header", start: "top 80%" },
      });
    },
    { scope: container }
  );

  const activeData = STROKE_TABS.find((t) => t.id === activeTab) ?? STROKE_TABS[1];

  return (
    <section ref={container} id="stroke-detection" className="section-padding">
      <div className="container-narrow">
        <div className="stroke-header w-full" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto" }}>
          <p className="label-text" style={{ marginBottom: "1rem", textAlign: "center", width: "100%" }}>STROKE DETECTION SUITE</p>
          <h2 className="heading-lg" style={{ textAlign: "center", width: "100%" }}>
            Detecting Strokes Across All Vessel Segments
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center premium-mt-lg" style={{ gap: "1rem" }}>
          {STROKE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                position: "relative",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: "600",
                fontSize: "0.875rem",
                letterSpacing: "0.025em",
                transition: "all 300ms ease-in-out",
                borderWidth: "1px",
                borderStyle: "solid",
                cursor: "pointer",
                outline: "none",
                ...(activeTab === tab.id
                  ? {
                      background: "linear-gradient(to right, var(--primary-blue), var(--secondary-blue))",
                      color: "white",
                      borderColor: "transparent",
                      boxShadow: "0 0 20px rgba(0, 102, 255, 0.4)",
                    }
                  : {
                      background: "rgba(23, 23, 23, 0.5)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderColor: "rgba(38, 38, 38, 1)",
                      color: "rgba(163, 163, 163, 1)",
                    }),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "rgba(82, 82, 82, 1)";
                  e.currentTarget.style.background = "rgba(38, 38, 38, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = "rgba(163, 163, 163, 1)";
                  e.currentTarget.style.borderColor = "rgba(38, 38, 38, 1)";
                  e.currentTarget.style.background = "rgba(23, 23, 23, 0.5)";
                }
              }}
            >
              {tab.label}
              {"isComingSoon" in tab && tab.isComingSoon && (
                <span className="ml-2 text-xs opacity-60">(Soon)</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 premium-gap-xl items-center" style={{ marginTop: "4rem" }}>
          <div>
            <h3 className="heading-md">{activeData.headline}</h3>
            <p className="body-lg premium-mt">{activeData.description}</p>
            <div className="premium-mt flex flex-col" style={{ gap: "1rem" }}>
              {activeData.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="mono-text font-semibold">{stat.value}</span>
                  <span className="body-md">{stat.label}</span>
                </div>
              ))}
            </div>
            {"isPrimary" in activeData && activeData.isPrimary && (
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(0,102,255,0.15)] text-[var(--secondary-blue)] border border-[rgba(0,102,255,0.3)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-blue)]" />
                PRIMARY FOCUS
              </div>
            )}
          </div>

          <div className="glass-card p-4 rounded-xl">
            {"isComingSoon" in activeData && activeData.isComingSoon ? (
              <div className="aspect-video bg-[var(--neutral-900)] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="badge-coming-soon inline-flex px-3 py-1.5 rounded-full text-xs font-medium mb-3">
                    Coming Soon
                  </div>
                  <p className="body-md">In Development</p>
                </div>
              </div>
            ) : (
              <BeforeAfterSlider />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
