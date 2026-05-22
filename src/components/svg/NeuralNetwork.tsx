"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
}

/**
 * Deterministic, aesthetically distributed node positions.
 * Covers the 800×600 viewBox with pleasing visual balance.
 * Positions are hand-tuned to avoid clustering or perfect grids.
 */
const BASE_NODES: [number, number][] = [
  [85, 52],
  [230, 38],
  [420, 65],
  [610, 45],
  [740, 70],
  [55, 160],
  [190, 140],
  [340, 125],
  [500, 155],
  [670, 135],
  [780, 180],
  [120, 260],
  [280, 240],
  [445, 270],
  [590, 250],
  [720, 285],
  [60, 360],
  [210, 345],
  [370, 370],
  [530, 340],
  [690, 365],
  [760, 400],
  [140, 450],
  [310, 460],
  [480, 440],
  [630, 470],
  [95, 540],
  [260, 555],
  [430, 530],
  [580, 560],
  [720, 535],
  [390, 190],
  [160, 510],
  [550, 490],
  [45, 95],
  [770, 310],
];

const CONNECTION_DISTANCE = 200;

interface Node {
  x: number;
  y: number;
  r: number;
  opacity: number;
  pulse: boolean;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function buildNetwork(nodeCount: number): {
  nodes: Node[];
  connections: Connection[];
} {
  const count = Math.min(nodeCount, BASE_NODES.length);
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    const [x, y] = BASE_NODES[i];
    nodes.push({
      x,
      y,
      r: 2 + (i % 3), // cycles 2, 3, 4
      opacity: 0.3 + (i % 4) * 0.1, // cycles 0.3, 0.4, 0.5, 0.6
      pulse: i % 3 === 0,
    });
  }

  const connections: Connection[] = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_DISTANCE) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }

  return { nodes, connections };
}

export default function NeuralNetwork({
  className = "",
  nodeCount = 20,
}: NeuralNetworkProps) {
  const containerRef = useRef<SVGSVGElement>(null);
  const { nodes, connections } = buildNetwork(nodeCount);

  useGSAP(
    () => {
      // Subtle opacity shimmer on a subset of connection lines
      const lines = gsap.utils.toArray<SVGLineElement>(".nn-line-animate");
      if (lines.length === 0) return;

      gsap.to(lines, {
        opacity: 0.15,
        duration: 3,
        stagger: {
          each: 0.15,
          repeat: -1,
          yoyo: true,
        },
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 800 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 1, overflow: "hidden" }}
      aria-hidden="true"
    >
      {/* Connection lines */}
      {connections.map((conn, i) => (
        <line
          key={`conn-${i}`}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="rgba(0,102,255,0.2)"
          strokeWidth={1}
          className={i % 4 === 0 ? "nn-line-animate" : undefined}
          style={i % 4 === 0 ? { opacity: 0.25 } : undefined}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={`rgba(0,102,255,${node.opacity})`}
          className={node.pulse ? "pulse-blue" : undefined}
        />
      ))}
    </svg>
  );
}
