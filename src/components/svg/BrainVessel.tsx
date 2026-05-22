"use client";

interface BrainVesselProps {
  className?: string;
  animated?: boolean;
}

const vessels = [
  // Trunk
  { d: "M200 450 Q190 380 200 320", w: 4, z: 0 },
  // Left Hemisphere
  { d: "M200 320 C140 300, 80 260, 70 170 C65 110, 110 60, 180 50", w: 2.5, z: 20 },
  { d: "M160 310 C110 280, 60 210, 90 140 C110 100, 150 80, 180 70", w: 1.5, z: 40 },
  { d: "M120 280 C70 250, 40 180, 70 120", w: 1, z: 60 },
  { d: "M200 320 C160 300, 120 220, 140 150 C150 110, 180 90, 200 80", w: 2, z: -20 },
  { d: "M160 260 C130 220, 100 160, 140 110", w: 1, z: -40 },
  // Right Hemisphere
  { d: "M200 320 C260 300, 320 260, 330 170 C335 110, 290 60, 220 50", w: 2.5, z: 20 },
  { d: "M240 310 C290 280, 340 210, 310 140 C290 100, 250 80, 220 70", w: 1.5, z: 40 },
  { d: "M280 280 C330 250, 360 180, 330 120", w: 1, z: 60 },
  { d: "M200 320 C240 300, 280 220, 260 150 C250 110, 220 90, 200 80", w: 2, z: -20 },
  { d: "M240 260 C270 220, 300 160, 260 110", w: 1, z: -40 },
  // Cross connections
  { d: "M180 150 Q200 160 220 150", w: 1.5, z: 0 },
  { d: "M160 220 Q200 210 240 220", w: 1.5, z: 0 },
];

export default function BrainVessel({
  className = "",
  animated = true,
}: BrainVesselProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ perspective: "1000px", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="holoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#4D9FFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="1" />
        </linearGradient>
        <filter id="holoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="alertGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        @keyframes spin3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pulseAlert {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); filter: drop-shadow(0 0 15px #EF4444); }
        }
        @keyframes spinReticle {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes floatHolo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scanBeam {
          0% { transform: translateY(450px) scaleY(0.1); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(50px) scaleY(1); opacity: 0; }
        }
        
        .holo-group {
          transform-origin: 200px 250px;
          transform-style: preserve-3d;
          animation: spin3D 20s linear infinite;
        }
        .holo-float {
          animation: floatHolo 6s ease-in-out infinite;
        }
        .alert-node {
          transform-origin: 300px 180px;
          animation: pulseAlert 1.5s ease-in-out infinite;
        }
        .reticle {
          transform-origin: 300px 180px;
          animation: spinReticle 4s linear infinite;
        }
        .scan-beam {
          animation: scanBeam 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Hologram Projector Base */}
      <g stroke="#0066FF" fill="none" opacity="0.4">
        <ellipse cx="200" cy="460" rx="120" ry="25" strokeWidth="1" opacity="0.3" />
        <ellipse cx="200" cy="460" rx="80" ry="15" strokeWidth="2" opacity="0.5" />
        <ellipse cx="200" cy="460" rx="40" ry="5" strokeWidth="3" opacity="0.8" filter="url(#holoGlow)" />
        <path d="M80 460 L200 250 L320 460" strokeWidth="0.5" opacity="0.1" />
        <path d="M120 460 L200 350 L280 460" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Upward Scanning Beam */}
      <ellipse cx="200" cy="0" rx="140" ry="30" fill="url(#holoGrad)" className={animated ? "scan-beam" : ""} style={{ mixBlendMode: 'screen' }} />

      <g className={animated ? "holo-float" : ""}>
        <g className={animated ? "holo-group" : ""}>
          
          {/* Wireframe Brain Silhouette (Rotates with vessels) */}
          <path 
            d="M200 40 C100 40, 40 120, 50 220 C60 300, 120 350, 180 350 L200 370 L220 350 C280 350, 340 300, 350 220 C360 120, 300 40, 200 40 Z" 
            stroke="rgba(0, 102, 255, 0.15)" 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            fill="rgba(0, 102, 255, 0.02)" 
          />

          {/* Holographic Vessels */}
          <g stroke="url(#holoGrad)" fill="none" strokeLinecap="round" filter="url(#holoGlow)">
            {vessels.map((v, i) => (
              <path
                key={i}
                d={v.d}
                strokeWidth={v.w}
                style={{ transform: `translateZ(${v.z}px)` }}
                opacity={0.7 + (v.z + 40) / 200} // Objects closer to camera are more opaque
              />
            ))}
          </g>

          {/* AI Detected Occlusion Alert */}
          <g style={{ transform: "translateZ(60px)" }}>
            {/* The Reticle */}
            <g className={animated ? "reticle" : ""} stroke="#EF4444" fill="none" strokeWidth="1.5" filter="url(#alertGlow)">
              <circle cx="300" cy="180" r="18" strokeDasharray="10 8" opacity="0.9" />
              <circle cx="300" cy="180" r="26" strokeDasharray="4 14" opacity="0.5" />
              {/* Crosshairs */}
              <line x1="300" y1="145" x2="300" y2="155" />
              <line x1="300" y1="205" x2="300" y2="215" />
              <line x1="265" y1="180" x2="275" y2="180" />
              <line x1="325" y1="180" x2="335" y2="180" />
            </g>
            
            {/* The Occlusion Point */}
            <circle cx="300" cy="180" r="5" fill="#EF4444" filter="url(#alertGlow)" className={animated ? "alert-node" : ""} />
            <circle cx="300" cy="180" r="2" fill="#FFFFFF" className={animated ? "alert-node" : ""} />
            
            {/* Alert Text Tag */}
            <g opacity="0.9" style={{ transform: "translate(330px, 160px)" }}>
              <path d="M0 20 L20 0 L100 0" stroke="#EF4444" fill="none" strokeWidth="1" />
              <text x="25" y="-5" fill="#EF4444" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1">M2 OCCLUSION</text>
            </g>
          </g>

        </g>
      </g>
    </svg>
  );
}
