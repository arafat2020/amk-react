"use client"
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import { inSphere } from "maath/random";

const Stars = () => {
  const ref = useRef<THREE.Points>();
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame(( ) => {
    if (ref.current === undefined) return
    // @ts-ignore
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y -= 0.005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* @ts-ignore */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute top-0 left-0'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
