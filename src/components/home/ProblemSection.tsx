"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROBLEM_STATS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Fade-up the entire stats bar
      gsap.from(".stats-bar", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      // Counter animation for each stat number
      const counters = gsap.utils.toArray<HTMLElement>(".stat-counter");
      counters.forEach((counter) => {
        const endVal = parseFloat(counter.getAttribute("data-value") || "0");
        const decimals = parseInt(
          counter.getAttribute("data-decimals") || "0",
          10
        );
        const obj = { val: 0 };

        gsap.to(obj, {
          val: endVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          },
          onUpdate: () => {
            counter.textContent = obj.val.toFixed(decimals);
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          className="stats-bar grid grid-cols-2 md:grid-cols-4"
          style={{
            display: "grid",
            alignItems: "center",
          }}
        >
          {PROBLEM_STATS.map((stat, i) => {
            const hasTextSuffix = /^[a-zA-Z]/.test(stat.suffix.trim());
            return (
              <div
                key={i}
                className="stat-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  borderRight: i < PROBLEM_STATS.length - 1 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <div
                  className="stat-value font-serif"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    fontSize: "3.25rem",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "#1e293b",
                  }}
                >
                  <span
                    className="stat-counter"
                    data-value={stat.value}
                    data-decimals={stat.value % 1 !== 0 ? 1 : 0}
                    style={{ color: "#1e293b" }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      color: "#1e293b",
                      marginLeft: hasTextSuffix ? "0.5rem" : "0.15rem",
                    }}
                  >
                    {stat.suffix.trim()}
                  </span>
                </div>

                <p
                  className="stat-label font-sans"
                  style={{
                    color: "#475569",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    marginTop: "0.75rem",
                    lineHeight: 1.4,
                    textAlign: "center",
                    maxWidth: "190px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
