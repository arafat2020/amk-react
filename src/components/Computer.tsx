"use client"
import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -2.25, -4.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      let width = window.innerWidth
      if (width < 500) {
        setisMobile(true)
      } else {
        setisMobile(false)
      }
    })
  }, [])
  return (

    <Computers isMobile={isMobile} />


  );
};

export default ComputersCanvas;
