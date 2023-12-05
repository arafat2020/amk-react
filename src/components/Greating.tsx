import  { Fragment } from 'react'
import { motion } from "framer-motion"
function Greating({ str }: { str: string }) {
    const gr = str.split("")
    return (
        <Fragment>
            <h2 className='hidden md:inline-flex font-mono bg-gradient-to-r from-slate-300 to-blue-500 bg-clip-text text-transparent font-bold'>
                {
                    gr.map((e, i) => {
                        return <motion.span
                            initial={{
                                fontSize: '3.5rem',
                                opacity: 0
                            }}
                            animate={{
                                fontSize: '2rem',
                                opacity: 1
                            }}
                            transition={{
                                duration: .5 * (i * .20),
                                ease: 'easeInOut',
                                damping: true
                            }}
                            key={i}>
                            {e}
                        </motion.span>
                    })
                }
            </h2>
            <h2 className='md:hidden font-mono  text-slate-300 font-bold'>
            {
                gr.map((e, i) => {
                    return <motion.span
                        initial={{
                            fontSize: '2.5rem',
                            opacity:0
                        }}
                        animate={{
                            fontSize: '1rem',
                            opacity:1
                        }}
                        transition={{
                            duration: .5 * (i * .20),
                            ease: 'easeInOut',
                            damping: true
                        }}
                        key={i}>
                        {e}
                    </motion.span>
                })
            }
        </h2>
        </Fragment>
    )
}

export default Greating