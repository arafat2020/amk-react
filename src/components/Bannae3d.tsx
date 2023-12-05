"use client"
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import ComputersCanvas from './Computer';

function Bannae3d() {
  
  return (

    <div
      className='w-screen h-[500px] relative'>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight color={"blue"} intensity={4} />
        <pointLight 
       
        color={0xf76871} intensity={.5} />
        <ComputersCanvas />
        <PerspectiveCamera  makeDefault position={[20, 0, 5]} fov={25} />

        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>

  )
}

export default Bannae3d