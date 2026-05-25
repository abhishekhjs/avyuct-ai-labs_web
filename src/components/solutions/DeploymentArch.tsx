"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DEPLOYMENT_SPECS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export default function DeploymentArch() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".deploy-header", {
        y: 60, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: ".deploy-header", start: "top 80%" },
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
        <div className="deploy-header w-full" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto" }}>
          <p className="label-text" style={{ marginBottom: "1rem", textAlign: "center", width: "100%" }}>DEPLOYMENT ARCHITECTURE</p>
          <h2 className="heading-lg" style={{ textAlign: "center", width: "100%" }}>Zero-Latency Triage Architecture</h2>
          <p className="body-lg premium-mt" style={{ textAlign: "center", width: "100%", maxWidth: "42rem" }}>
            AI moves from the cloud to the scanner console. With distal
            strokes, the bottleneck is no longer surgical access — it&apos;s
            precise localization.
          </p>
        </div>



        {/* Spec Cards */}
        <div className="spec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem", marginTop: "4rem" }}>
          {DEPLOYMENT_SPECS.map((spec) => (
            <div key={spec.title} className="spec-card glass-card" style={{ padding: "2rem" }}>
              <h4 className="heading-sm text-sm" style={{ marginBottom: "1rem" }}>{spec.title}</h4>
              <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
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
