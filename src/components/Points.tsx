import { PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// @ts-ignore
import { inSphere } from 'maath/random';
import { Suspense, useRef, useState } from 'react'
const Stars = () => {
    const ref = useRef<THREE.Points>();
    const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame(() => {
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
function Points() {
    return <Suspense fallback={null}>

        <Stars />
    </Suspense>
}

export default Points