"use client"
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Progress({ color, progress }: { color: string, progress: number }) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: .25,
    });
    const vr: Variants = {
        hidden: {
            width: 0
        },
        open: {
            width: `${progress}%`
        },
    }

    return (
        <div ref={ref} className='w-full sm:grow sm:ml-5'>
            <div className='w-full h-[40px] rounded-lg glassBg glow'>
                <motion.div
                    variants={vr}
                    animate={inView ? 'open' : 'hidden'}
                    transition={{
                        duration: .7,
                        type: 'tween'
                    }}
                    className={`h-full bg-gradient-to-r from-blue-500 via-slate-400 ${color} rounded-lg flex justify-around items-center`}>
                        <h6
                      
                         className='text-[1.5rem] font-bold pop text-cyan-50'>{progress}%</h6>
                </motion.div>
            </div>
        </div>
    )
}

export default Progress