"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";

// Colors requested by the user
const COLORS = ["#00ff88", "#00bfff", "#ffdd00"]; // Green, Blue, Yellow

function BrainParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  // Load the brain.obj file from the public folder
  const obj = useLoader(OBJLoader, "/brain.obj");

  // Hover and Explode state refs
  const mouse = useRef(new THREE.Vector3(0, 0, 0));
  const isExploding = useRef(false);
  const explodeTime = useRef(0);

  // Extract vertices and create particle data
  const { positions, originalPositions, randomOffsets, colors } = useMemo(() => {
    let rawVertices: number[] = [];
    
    // Traverse the loaded OBJ and extract all vertex positions
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const positionAttribute = child.geometry.attributes.position;
        for (let i = 0; i < positionAttribute.count; i++) {
          rawVertices.push(
            positionAttribute.getX(i),
            positionAttribute.getY(i),
            positionAttribute.getZ(i)
          );
        }
      }
    });

    // The OBJ might have hundreds of thousands of vertices.
    // Let's sample down to a maximum of 15,000 for smooth performance.
    const maxParticles = 15000;
    const stride = Math.max(1, Math.floor((rawVertices.length / 3) / maxParticles));
    
    const count = Math.floor((rawVertices.length / 3) / stride);
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const randomOffsets = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // 1. Calculate the MEAN (average) position to center the brain.
    // Unlike bounding box, the mean is completely immune to extreme outliers!
    let sumX = 0, sumY = 0, sumZ = 0;
    for (let i = 0; i < count; i++) {
      const idx = i * stride * 3;
      sumX += rawVertices[idx];
      sumY += rawVertices[idx + 1];
      sumZ += rawVertices[idx + 2];
    }
    
    const centerX = sumX / count;
    const centerY = sumY / count;
    const centerZ = sumZ / count;

    // 2. Calculate the Average Radius from the center.
    // This tells us the actual size of the dense brain cluster, ignoring outliers.
    let totalDist = 0;
    for (let i = 0; i < count; i++) {
      const idx = i * stride * 3;
      const dx = rawVertices[idx] - centerX;
      const dy = rawVertices[idx + 1] - centerY;
      const dz = rawVertices[idx + 2] - centerZ;
      totalDist += Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    const avgRadius = totalDist / count;
    
    // We want the brain to have an average radius of roughly 140 units
    // This guarantees it will look massive and beautiful on screen
    const scale = avgRadius === 0 ? 1 : 60 / avgRadius;

    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const idx = i * stride * 3;
      
      // Center and scale using the new outlier-proof math
      const x = (rawVertices[idx] - centerX) * scale;
      // Shift the model down by 60 units visually
      const y = ((rawVertices[idx + 1] - centerY) * scale) - 60;
      const z = (rawVertices[idx + 2] - centerZ) * scale;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Random explosion target (a point on a large sphere)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 150 + Math.random() * 150; // Explode radius
      
      randomOffsets[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      randomOffsets[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      randomOffsets[i * 3 + 2] = r * Math.cos(phi);

      // Randomly assign one of the 3 requested colors
      color.set(COLORS[Math.floor(Math.random() * COLORS.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, originalPositions, randomOffsets, colors };
  }, [obj]);

  // Set up the InstancedMesh matrix and colors on initial mount
  useMemo(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    
    for (let i = 0; i < positions.length / 3; i++) {
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      
      color.setRGB(
        colors[i * 3],
        colors[i * 3 + 1],
        colors[i * 3 + 2]
      );
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [positions, colors]);

  // Track mouse coordinates in 3D space
  useFrame(({ pointer, camera, clock }) => {
    if (!meshRef.current) return;

    // Convert normalized device coordinates (pointer) to 3D world position
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z; // Depth plane to interact on
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    
    mouse.current.lerp(pos, 0.1); // Smooth mouse tracking

    const dummy = new THREE.Object3D();
    const count = positions.length / 3;
    const time = clock.getElapsedTime();
    
    // Check if explosion is over
    if (isExploding.current && time - explodeTime.current > 1.5) {
      isExploding.current = false;
    }

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Current position
      const px = positions[i3];
      const py = positions[i3 + 1];
      const pz = positions[i3 + 2];
      
      // Target position defaults to original home
      let tx = originalPositions[i3];
      let ty = originalPositions[i3 + 1];
      let tz = originalPositions[i3 + 2];

      if (isExploding.current) {
        // Explode outward
        tx = randomOffsets[i3];
        ty = randomOffsets[i3 + 1];
        tz = randomOffsets[i3 + 2];
      } else {
        // Add a gentle floating wave effect when resting
        tx += Math.sin(time * 2 + px * 0.1) * 0.5;
        ty += Math.cos(time * 1.5 + pz * 0.1) * 0.5;

        // Hover Repulsion Logic
        const dx = mouse.current.x - px;
        const dy = mouse.current.y - py;
        // Keep repulsion strictly in X/Y plane for 2D feel, or include Z
        const distSq = dx * dx + dy * dy;
        const radius = 6400; // Repulsion radius squared (80 * 80)
        
        if (distSq < radius) {
          const force = (radius - distSq) / radius; // 0 to 1
          tx -= dx * force * 0.4;
          ty -= dy * force * 0.4;
          tz += force * 10; // Push forward slightly on Z
        }
      }

      // Lerp current position towards target position
      const speed = isExploding.current ? 0.05 : 0.1;
      positions[i3] += (tx - px) * speed;
      positions[i3 + 1] += (ty - py) * speed;
      positions[i3 + 2] += (tz - pz) * speed;

      dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      
      // Give particles a tiny scale pulse based on time
      const scale = 1 + Math.sin(time * 5 + i) * 0.2;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const handleClick = () => {
    if (!isExploding.current) {
      isExploding.current = true;
      // Force clock sync
      explodeTime.current = performance.now() / 1000; 
    }
  };

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, positions.length / 3]}
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      <sphereGeometry args={[0.4, 8, 8]} />
      <meshStandardMaterial 
        roughness={0.4}
        metalness={0.6}
      />
    </instancedMesh>
  );
}

export default function InteractiveBrain() {
  return (
    <div className="w-full relative cursor-pointer group" style={{ height: "600px" }}>
      <Canvas
        camera={{ position: [0, 0, 350], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 100, 100]} intensity={2} color="#ffffff" />
        <pointLight position={[-100, -100, -100]} intensity={1} color="#00bfff" />
        
        <React.Suspense fallback={null}>
          <group rotation={[0, Math.PI / 4, 0]}>
            <BrainParticles />
          </group>
        </React.Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
      {/* Overlay hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none tracking-widest uppercase">
        Click to Explode
      </div>
    </div>
  );
}
