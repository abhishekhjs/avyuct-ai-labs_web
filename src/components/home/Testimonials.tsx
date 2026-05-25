"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    quote: "Impressed by the professionalism and attention to detail.",
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    avatar: "https://i.pravatar.cc/150?u=guy",
  },
  {
    quote: "A seamless experience from start to finish. Highly recommend!",
    name: "Karla Lynn",
    handle: "@karlylynn98",
    avatar: "https://i.pravatar.cc/150?u=karla",
  },
  {
    quote: "Reliable and trustworthy. Made my life so much easier!",
    name: "Jane Cooper",
    handle: "@janecooper",
    avatar: "https://i.pravatar.cc/150?u=jane",
  },
];

export default function Testimonials() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".testimonial-header", start: "top 80%" },
      });

      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: trackRef.current, start: "top 70%" },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="section-padding relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-30" />

      <div className="container-narrow relative z-10 flex flex-col w-full items-center">
        <div className="w-full flex flex-col items-center py-24">
          <div className="testimonial-header max-w-3xl shrink-0 text-center" style={{ marginBottom: "6rem" }}>
            <p className="label-text mb-4 tracking-widest text-neutral-400">TESTIMONIAL</p>
            <h2 className="heading-lg leading-tight">Transformative Client Experiences</h2>
          </div>

          <div ref={trackRef} className="w-full grid grid-cols-1 md:grid-cols-3" style={{ gap: "3rem" }}>
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="testimonial-card flex flex-col h-full">
                {/* Speech Bubble Card */}
                <div className="glass-card premium-card-padding flex-1 flex flex-col relative rounded-3xl rounded-bl-sm">
                  {/* Quote Icon */}
                  <div className="mb-6 opacity-30">
                    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4 23.1H8.8C8.8 15.4 13.2 11 17.6 11V15.4C15.4 15.4 13.2 17.6 13.2 23.1H15.4C17.82 23.1 19.8 25.08 19.8 27.5V31.9C19.8 34.32 17.82 36.3 15.4 36.3H11C8.58 36.3 6.6 34.32 6.6 31.9V23.1C6.6 13.2 13.2 6.6 19.8 6.6V11C15.4 11 15.4 23.1 15.4 23.1ZM35.2 23.1H28.6C28.6 15.4 33 11 37.4 11V15.4C35.2 15.4 33 17.6 33 23.1H35.2C37.62 23.1 39.6 25.08 39.6 27.5V31.9C39.6 34.32 37.62 36.3 35.2 36.3H30.8C28.38 36.3 26.4 34.32 26.4 31.9V23.1C26.4 13.2 33 6.6 39.6 6.6V11C35.2 11 35.2 23.1 35.2 23.1Z" fill="var(--primary-blue)"/>
                    </svg>
                  </div>
                  <p className="body-lg flex-1 text-neutral-200 leading-relaxed font-medium">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Avatar and Info placed outside the bubble to match the reference cutout look */}
                <div className="flex items-center ml-4" style={{ marginTop: "2rem" }}>
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border border-neutral-800 object-cover" />
                  <div className="ml-4 flex flex-col">
                    <span className="text-white font-semibold text-sm">{testimonial.name}</span>
                    <span className="text-neutral-400 text-sm mt-0.5">{testimonial.handle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex gap-2 justify-center" style={{ marginTop: "6rem" }}>
             <div className="w-6 h-1 bg-white rounded-full"></div>
             <div className="w-6 h-1 bg-neutral-700 rounded-full"></div>
             <div className="w-6 h-1 bg-neutral-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
