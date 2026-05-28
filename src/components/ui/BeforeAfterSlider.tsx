"use client";

import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  beforeImage?: string;
  afterImage?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Raw CTA Scan",
  afterLabel = "AI Detection Overlay",
  className = "",
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const getPositionFromEvent = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return sliderPosition;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      return Math.max(0, Math.min(100, percentage));
    },
    [sliderPosition]
  );

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      setSliderPosition(getPositionFromEvent(e.clientX));
    },
    [getPositionFromEvent]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!e.touches[0]) return;
      setSliderPosition(getPositionFromEvent(e.touches[0].clientX));
    },
    [getPositionFromEvent]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      setSliderPosition(getPositionFromEvent(e.clientX));
    },
    [getPositionFromEvent]
  );

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          setSliderPosition((prev) => Math.max(0, prev - 2));
        } else if (e.key === "ArrowRight") {
          setSliderPosition((prev) => Math.min(100, prev + 2));
        }
      }}
    >
      {/* Before Layer — Raw CTA Scan */}
      <div className="absolute inset-0" aria-hidden="true">
        {beforeImage ? (
          <img src={beforeImage} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  0deg,
                  rgba(255, 255, 255, 0.02) 0px,
                  rgba(255, 255, 255, 0.02) 1px,
                  transparent 1px,
                  transparent 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.015) 0px,
                  rgba(255, 255, 255, 0.015) 1px,
                  transparent 1px,
                  transparent 4px
                ),
                radial-gradient(ellipse at 45% 50%, rgba(120, 120, 130, 0.3) 0%, transparent 60%),
                radial-gradient(ellipse at 55% 45%, rgba(100, 100, 110, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 48% 52%, rgba(80, 80, 90, 0.2) 0%, transparent 35%),
                linear-gradient(180deg, #1a1a1f 0%, #111114 50%, #0d0d10 100%)
              `,
            }}
          />
        )}
        {/* Simulated vessel-like structures */}
        {!beforeImage && (
          <div
            className="absolute"
            style={{
              top: "30%",
              left: "35%",
              width: "30%",
              height: "40%",
              background:
                "radial-gradient(ellipse, rgba(150, 150, 160, 0.15) 0%, transparent 70%)",
              filter: "blur(2px)",
            }}
          />
        )}
        {/* Before label pill */}
        <div className="glass-card absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-medium text-neutral-300">
          {beforeLabel}
        </div>
      </div>

      {/* After Layer — AI Detection Overlay */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        aria-hidden="true"
      >
        {afterImage ? (
          <img src={afterImage} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.02) 0px,
                    rgba(255, 255, 255, 0.02) 1px,
                    transparent 1px,
                    transparent 4px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.015) 0px,
                    rgba(255, 255, 255, 0.015) 1px,
                    transparent 1px,
                    transparent 4px
                  ),
                  radial-gradient(ellipse at 45% 50%, rgba(120, 120, 130, 0.3) 0%, transparent 60%),
                  radial-gradient(ellipse at 55% 45%, rgba(100, 100, 110, 0.25) 0%, transparent 50%),
                  radial-gradient(circle at 48% 52%, rgba(80, 80, 90, 0.2) 0%, transparent 35%),
                  linear-gradient(180deg, #1a1a1f 0%, #111114 50%, #0d0d10 100%)
                `,
              }}
            />
            {/* Blue-tinted overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(30, 58, 138, 0.12) 100%)",
              }}
            />
            {/* AI Detection Markers */}
            <div
              className="absolute rounded-full border-2 border-accent-green"
              style={{
                top: "35%",
                left: "40%",
                width: "48px",
                height: "48px",
                boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
              }}
            />
            <div
              className="absolute rounded-full border-2 border-accent-green"
              style={{
                top: "45%",
                left: "52%",
                width: "32px",
                height: "32px",
                boxShadow: "0 0 10px rgba(16, 185, 129, 0.35)",
              }}
            />
            <div
              className="absolute border-2 border-primary rounded-sm"
              style={{
                top: "28%",
                left: "34%",
                width: "80px",
                height: "56px",
                boxShadow: "0 0 14px rgba(0, 102, 255, 0.3)",
              }}
            />
            <div
              className="absolute rounded-full border border-accent-amber"
              style={{
                top: "55%",
                left: "44%",
                width: "24px",
                height: "24px",
                boxShadow: "0 0 8px rgba(245, 158, 11, 0.3)",
              }}
            />
            {/* Connecting lines between markers */}
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ pointerEvents: "none" }}
            >
              <line
                x1="62%"
                y1="40%"
                x2="58%"
                y2="50%"
                stroke="rgba(16, 185, 129, 0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="58%"
                y1="50%"
                x2="50%"
                y2="60%"
                stroke="rgba(245, 158, 11, 0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </>
        )}
        {/* After label pill */}
        <div className="glass-card absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-medium text-neutral-300">
          {afterLabel}
        </div>
        {/* DETECTED badge */}
        <div className="badge-launched absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-green" />
          Detected
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-primary"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 12px rgba(0, 102, 255, 0.5)",
        }}
        aria-hidden="true"
      >
        {/* Glass Handle */}
        <div className="glass-card absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 shadow-lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white"
          >
            <path
              d="M4 8H1M4 8L6 6M4 8L6 10M12 8H15M12 8L10 6M12 8L10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
