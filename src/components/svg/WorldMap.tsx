"use client";

export default function WorldMap({ className }: { className?: string; showPartners?: boolean }) {
  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Simplified continent outlines */}
      <g opacity="0.15" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="rgba(255,255,255,0.04)">
        {/* North America */}
        <path d="M150 80 L220 70 L280 90 L300 130 L290 170 L260 200 L220 220 L200 250 L180 240 L160 200 L130 160 L120 120 Z" />
        {/* South America */}
        <path d="M230 270 L270 260 L290 290 L300 340 L280 400 L250 430 L220 420 L210 370 L220 320 Z" />
        {/* Europe */}
        <path d="M440 80 L490 70 L520 90 L530 120 L510 150 L480 160 L450 150 L430 120 Z" />
        {/* Africa */}
        <path d="M460 180 L520 170 L550 210 L560 280 L540 350 L500 380 L460 360 L440 300 L450 230 Z" />
        {/* Asia */}
        <path d="M550 60 L680 50 L780 80 L800 120 L780 160 L720 190 L660 180 L620 160 L580 130 L560 100 Z" />
        {/* Middle East */}
        <path d="M580 150 L620 140 L650 160 L640 190 L610 200 L580 180 Z" />
        {/* India */}
        <path d="M660 180 L690 170 L710 200 L700 250 L680 270 L660 240 L650 200 Z" />
        {/* Australia */}
        <path d="M760 320 L830 310 L860 340 L850 380 L810 400 L770 380 L750 350 Z" />
      </g>

      {/* Connection line between HQ and Dubai */}
      <path
        d="M250 180 Q450 120 620 200"
        stroke="var(--primary-blue)"
        strokeWidth="1"
        strokeDasharray="6 4"
        opacity="0.4"
      >
        <animate attributeName="stroke-dashoffset" from="40" to="0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Herndon, VA pin */}
      <g>
        <circle cx="250" cy="180" r="6" fill="var(--primary-blue)" opacity="0.3">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="180" r="4" fill="var(--primary-blue)" />
        <text x="250" y="170" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-mono)" opacity="0.8">
          Herndon, VA
        </text>
      </g>

      {/* Dubai, UAE pin */}
      <g>
        <circle cx="620" cy="200" r="6" fill="var(--primary-blue)" opacity="0.3">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="620" cy="200" r="4" fill="var(--primary-blue)" />
        <text x="620" y="190" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-mono)" opacity="0.8">
          Dubai, UAE
        </text>
      </g>
    </svg>
  );
}
