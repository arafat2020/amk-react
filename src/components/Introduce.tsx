import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Expertis from './Expertis';

function Introduce() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: .25,
    });
    const varient: Variants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1
        },
    }
    return (
        <motion.div
            ref={ref}
            variants={varient}
            animate={inView ? 'open' : 'closed'}
            transition={{
                duration: 1,
                type:'tween'
            }}
            className='w-full p-4 '>
            <div className='w-full mt-2 p-3'>
                <h3 className='pop font-semibold text-xl text-slate-200 mb-5'>Introduction</h3>
                <h3 className='pop font-semibold text-5xl text-slate-200 mb-5'>Overview</h3>
                <div className='max-w-[500px] pb-5'>
                    <p className='pop text-slate-300 align-middle'>Greetings,<br />
                        I am Arafat Mannan, a dedicated mid-level Full Stack Developer known for my expertise in design, front-end, and back-end development. Over the years, I have honed my skills to contribute effectively throughout the software development lifecycle, providing innovative solutions with a focus on both functionality and aesthetics.</p>
                </div>
                <Expertis/>
            </div>

        </motion.div>
    )
}

export default Introduce