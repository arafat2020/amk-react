import { Canvas } from '@react-three/fiber'
import  { Suspense } from 'react'
import Model from './Scene'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useInView } from 'react-intersection-observer';
import Loader from './Loader';

function Contact() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: .25,
    });
    return (
        <div ref={ref} className='w-full h-[550px] relative'>

            {inView ? <Suspense fallback={<Loader/>}>
                <div
                    className='w-screen h-full bg-gradient-to-b from-black via-slate-900 to-cyan-900'>
                    <Canvas>
                        <ambientLight color={"blue"} intensity={10} />
                        <pointLight color={0xf76871} position={[-30.3, -20, -5]} intensity={.5} />
                        <Model />
                        <PerspectiveCamera makeDefault position={[0, 5, 10]} />

                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
            </Suspense> : null}
            <div className='absolute top-0 left-0 w-full md:w-3/5 lg:w-2/5 h-full p-7 felx flex-col items-center'>
                <div className='w-full md:w-5/6 h-full glassbg glow rounded-[2rem] pop text-cyan-100 p-3'>
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold text-lg pl-3'>Your name</label>
                        <input type="text" className='outline-none rounded-lg my-3 h-[48px] bg-transparent glassBg p-2' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold text-lg pl-3'>Your Email</label>
                        <input type="email" className='outline-none rounded-lg my-3 h-[48px] bg-transparent glassBg p-2' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold text-lg pl-3'>Your Massage</label>
                        <input className='outline-none rounded-lg my-3 h-[130px] bg-transparent glassBg p-2' />
                    </div>
                    <button className='px-2 py-1 text-lg bg-gradient-to-b bg-cyan-600 rounded-lg'>Submitt</button>
                </div>
              
            </div>

        </div>
    )
}

export default Contact