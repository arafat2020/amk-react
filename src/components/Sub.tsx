"use client"
import { Fragment } from 'react'
import { motion } from "framer-motion";

function Sub({ str }: { str: string }) {
    const strArr = str.split("")
    return (
       <Fragment>
         <h1
            
            className='hidden md:inline-flex font-sans font-extrabold ml-[-20px]'
        >
            {strArr.map((e, i) => {
                return <motion.span key={i}
                    initial={{
                        color: 'rgb(64, 63, 66)',
                       fontSize:0
                    }}
                    animate={{
                        color: '#17F3E8',
                       fontSize:'2.5rem',
                    }}
                    transition={{
                        duration: .5 * (i * .20),
                        ease: 'easeInOut',
                        damping: true
                    }}
                >
                    {e}
                </motion.span>
            })}
        </h1>
        <h1
            
            className='md:hidden ml-[-17px] font-sans font-extrabold '
        >
            {strArr.map((e, i) => {
                return <motion.span key={i}
                    initial={{
                        color: 'rgb(64, 63, 66)',
                       fontSize:0
                    }}
                    animate={{
                        color: '#17F3E8',
                       fontSize:'1.5rem',
                    }}
                    transition={{
                        duration: .5 * (i * .20),
                        ease: 'easeInOut',
                        damping: true
                    }}
                >
                    {e}
                </motion.span>
            })}
        </h1>
       </Fragment>
    )
}

export default Sub