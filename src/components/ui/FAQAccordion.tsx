"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

interface FAQItem { question: string; answer: string; }

export default function FAQAccordion({ items, className }: { items: FAQItem[]; className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.from(".faq-item", {
      y: 30, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power4.out",
      scrollTrigger: { trigger: container.current, start: "top 75%" },
    });
  }, { scope: container });

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div ref={container} className={className}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="faq-item glass-card mb-3 overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="heading-sm text-sm pr-4">{item.question}</span>
              <span
                className="text-xl text-[var(--primary-blue)] transition-transform duration-300 shrink-0"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              ref={(el) => { answerRefs.current[i] = el; }}
              className="transition-all duration-400 ease-out"
              style={{
                maxHeight: isOpen ? `${answerRefs.current[i]?.scrollHeight ?? 200}px` : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-5 pb-5 pt-0 border-t border-[var(--glass-border)]">
                <p className="body-md pt-4">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
