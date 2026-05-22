"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 189;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXTENSION = ".jpg";
const FRAMES_DIR = "/frames";

export default function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (001, 002, ... 189)
      const numStr = i.toString().padStart(3, "0");
      img.src = `${FRAMES_DIR}/${FRAME_PREFIX}${numStr}${FRAME_EXTENSION}`;
      
      img.onload = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      
      // We push the image immediately to keep the array ordered
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!loaded || !canvasRef.current || !containerRef.current || !wrapperRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // The animation object that GSAP will tween
    const frameObj = { frame: 0 };

    // Draw frame function
    const renderFrame = (index: number) => {
      // Ensure index is an integer and within bounds
      const safeIndex = Math.min(Math.max(Math.round(index), 0), images.length - 1);
      const img = images[safeIndex];
      if (!img || !img.complete || img.width === 0) return;
      
      // Calculate aspect ratio for "cover" 
      // Math.max ensures the image covers the entire canvas without stretching
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Handle canvas resize
    const resize = () => {
      // Set canvas to full container size
      const parent = canvas.parentElement;
      if (!parent) return;
      
      // Using devicePixelRatio for high-DPI displays (retina screens)
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      // Set internal pixel dimension
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Force CSS display size
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Re-render current frame
      renderFrame(frameObj.frame);
    };

    window.addEventListener("resize", resize);
    resize();
    
    // Draw initial frame
    renderFrame(0);

    // 1. Scroll animation for the frames themselves
    ScrollTrigger.create({
      trigger: "#home-main",
      start: "top top",
      end: "bottom bottom", 
      scrub: 0.5, 
      animation: gsap.to(frameObj, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        onUpdate: () => renderFrame(frameObj.frame)
      })
    });

    // 2. Pin the container so it stays on screen until the CTA block finishes
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      endTrigger: "#cta-block",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

    // 3. Horizontal shifting animation
    setTimeout(() => {
      ScrollTrigger.refresh();
      
      const sections = [
        { id: "#problem-section", startX: 0, endX: -100 },
        { id: "#solution-section", startX: -100, endX: 0 },
        { id: "#clinical-validation", startX: 0, endX: -100 },
        { id: "#use-cases-section", startX: -100, endX: 0 },
        { id: "#workflow-section", startX: 0, endX: -100 },
        { id: "#trust-signals", startX: -100, endX: 0 },
        { id: "#cta-block", startX: 0, endX: -100 },
      ];

      sections.forEach(section => {
        gsap.fromTo(
          containerRef.current,
          { xPercent: section.startX },
          {
            xPercent: section.endX,
            ease: "power2.inOut",
            immediateRender: false,
            scrollTrigger: {
              trigger: section.id,
              start: "top 70%", 
              end: "top 30%",   
              scrub: 1,
            }
          }
        );
      });
    }, 100);

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loaded, images]);

  return (
    <div ref={wrapperRef} className="absolute top-0 left-0 w-full h-screen pointer-events-none z-30 overflow-hidden hidden lg:block">
      {/* 
        This wrapper starts on the right half of the screen.
        We translate it horizontally using GSAP xPercent.
      */}
      <div 
        ref={containerRef}
        className="absolute top-0 right-0 w-1/2 h-screen flex items-center justify-center p-12"
      >
        <div className="relative w-full max-w-[80%] aspect-square lg:aspect-[4/3] rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-10">
              <div className="w-10 h-10 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin opacity-80" />
            </div>
          )}
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover rounded-2xl transition-opacity duration-1000"
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}
