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
        <div className="stroke-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">STROKE DETECTION SUITE</p>
          <h2 className="heading-lg">
            Detecting Strokes Across All Vessel Segments
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {STROKE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--primary-blue)] text-white shadow-lg"
                  : "glass-card text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
              {"isComingSoon" in tab && tab.isComingSoon && (
                <span className="ml-2 text-xs opacity-60">(Soon)</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="heading-md">{activeData.headline}</h3>
            <p className="body-lg mt-4">{activeData.description}</p>
            <div className="mt-6 space-y-3">
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
