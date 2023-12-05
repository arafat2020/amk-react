import { Variants, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
const vr: Variants = {
    closed: {
        opacity: 0,
        translateX: -100
    },
    open: {
        opacity: 1,
        translateX: 0
    },
}

function ItemEx({ i, name, icons }: {
    i: number,
    name: String,
    icons: React.JSX.Element[]
}) {
    const { ref: cref, inView: cinView } = useInView({
        threshold: .5,
    })
    return (
        <div key={i}>
            <motion.div ref={cref}
                variants={vr}
                animate={cinView ? 'open' : 'closed'}
                transition={{
                    delay: i * .35,
                    duration: .7,
                    type: 'spring'
                }}
                key={i}
                className='w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] min-h-[150px] rounded-md glassBg mb-3 glow flex flex-col items-center justify-around'
            >
                <h4 className='text-lg font-sans font-bold text-cyan-100 pt-3'>{name}</h4>
                <div className='w-full lg:w-[70%] flex justify-around p-3'>
                    {cinView ? icons.map((e, i) => {
                        return <div key={i}>
                            {e}
                        </div>
                    }) : null}
                </div>
            </motion.div>
        </div>
    )
}

export default ItemEx