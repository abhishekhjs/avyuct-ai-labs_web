"use client";

export default function WorldMap({ className }: { className?: string; showPartners?: boolean }) {
  return (
    <svg
      viewBox="0 0 2000 857"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background World Map from Public Folder */}
      <image 
        href="/worldmap.svg" 
        width="2000" 
        height="857" 
        opacity="0.3" 
        style={{ filter: "invert(1) sepia(1) hue-rotate(180deg) saturate(300%) opacity(0.3)" }} 
      />

      {/* Connection line between HQ and Dubai */}
      <path
        d="M535 250 Q915 150 1296 337"
        stroke="var(--primary-blue)"
        strokeWidth="2"
        strokeDasharray="12 8"
        opacity="0.6"
      >
        <animate attributeName="stroke-dashoffset" from="80" to="0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Herndon, VA pin */}
      <g>
        <circle cx="535" cy="250" r="12" fill="var(--primary-blue)" opacity="0.3">
          <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="535" cy="250" r="8" fill="var(--primary-blue)" />
        <text x="535" y="230" textAnchor="middle" fill="black" fontSize="18" fontFamily="var(--font-mono)" opacity="0.9">
          Herndon, VA
        </text>
      </g>

      {/* Dubai, UAE pin */}
      <g>
        <circle cx="1296" cy="337" r="12" fill="var(--primary-blue)" opacity="0.3">
          <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="1296" cy="337" r="8" fill="var(--primary-blue)" />
        <text x="1296" y="317" textAnchor="middle" fill="black" fontSize="18" fontFamily="var(--font-mono)" opacity="0.9">
          Dubai, UAE
        </text>
      </g>
    </svg>
  );
}
