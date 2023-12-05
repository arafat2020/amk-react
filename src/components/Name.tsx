"use client"
import  { Fragment } from 'react'
import { motion } from "framer-motion"

function Name({ str }: { str: string }) {
    const name = str.split("")
    return (
        <Fragment>
            <h1 className='hidden md:inline-flex font-sans font-bold bg-gradient-to-r from-cyan-500 via-pink-300 to-blue-500 bg-clip-text text-transparent'>
                {
                    name.map((e, i) => {
                        return <motion.span
                            initial={{
                                fontSize: '3rem',
                                opacity: 0,
                                left: -80
                            }}
                            animate={{
                                fontSize: '4.5rem',
                                opacity: 1,
                                left: 0
                            }}
                            transition={{
                                duration: .3 * (i * .20),
                                ease: 'easeInOut',
                                damping: true
                            }}
                            key={i}>
                            {e}
                        </motion.span>
                    })
                }
            </h1>
            <h1 className='md:hidden font-sans font-bold bg-gradient-to-r from-cyan-500 via-pink-300 to-blue-500 bg-clip-text text-transparent'>
                {
                    name.map((e, i) => {
                        return <motion.span
                            initial={{
                                fontSize: '1.5rem',
                                opacity: 0,
                                left: -80
                            }}
                            animate={{
                                fontSize: '2.5rem',
                                opacity: 1,
                                left: 0
                            }}
                            transition={{
                                duration: .3 * (i * .20),
                                ease: 'easeInOut',
                                damping: true
                            }}
                            key={i}>
                            {e?e:<span>{" "}</span>}
                        </motion.span>
                    })
                }
            </h1>
        </Fragment>
    )
}

export default Name