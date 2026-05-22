"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DEPLOYMENT_SPECS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NODES = [
  { title: "Scanner", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="24" height="18" rx="3" /><path d="M10 26h12M16 22v4" /><path d="M10 13h12" opacity="0.4" /></svg> },
  { title: "Edge AI", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="20" height="20" rx="3" /><rect x="12" y="12" width="8" height="8" rx="1" fill="var(--primary-blue)" opacity="0.15" /><circle cx="16" cy="16" r="2" fill="var(--primary-blue)" /><path d="M16 4v2M16 26v2M4 16h2M26 16h2" /></svg> },
  { title: "Hospital", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="20" height="20" rx="2" /><path d="M12 8V5a2 2 0 012-2h4a2 2 0 012 2v3" /><path d="M16 14v6M13 17h6" strokeWidth="2" /></svg> },
  { title: "Cloud", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 24a6 6 0 01-.5-12A8 8 0 0124 14a5 5 0 01-1 10H8z" /><path d="M16 20v-6M13 17l3-3 3 3" /></svg> },
];

export default function DeploymentArch() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".deploy-header", {
        y: 60, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: ".deploy-header", start: "top 80%" },
      });
      gsap.from(".deploy-node", {
        scale: 0, opacity: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".deploy-flow", start: "top 70%" },
      });
      gsap.from(".spec-card", {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power4.out",
        scrollTrigger: { trigger: ".spec-grid", start: "top 75%" },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="deployment" className="section-padding">
      <div className="container-narrow">
        <div className="deploy-header text-center max-w-2xl mx-auto">
          <p className="label-text mb-4">DEPLOYMENT ARCHITECTURE</p>
          <h2 className="heading-lg">Zero-Latency Triage Architecture</h2>
          <p className="body-lg mt-4">
            AI moves from the cloud to the scanner console. With distal
            strokes, the bottleneck is no longer surgical access — it&apos;s
            precise localization.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="deploy-flow flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-16">
          {NODES.map((node, i) => (
            <div key={node.title} className="flex items-center">
              <div className="deploy-node glass-card p-8 text-center min-w-[120px]">
                <div className="flex justify-center mb-3">{node.icon}</div>
                <p className="heading-sm text-sm">{node.title}</p>
              </div>
              {i < NODES.length - 1 && (
                <div className="hidden md:block mx-3">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M0 8h24M20 3l5 5-5 5" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                </div>
              )}
              {i < NODES.length - 1 && (
                <div className="md:hidden my-2">
                  <svg width="16" height="32" viewBox="0 0 16 32" fill="none">
                    <path d="M8 0v24M3 20l5 5 5-5" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Spec Cards */}
        <div className="spec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {DEPLOYMENT_SPECS.map((spec) => (
            <div key={spec.title} className="spec-card glass-card p-5">
              <h4 className="heading-sm text-sm mb-3">{spec.title}</h4>
              <ul className="space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="body-md text-sm flex gap-2">
                    <span className="text-[var(--primary-blue)] mt-1 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
